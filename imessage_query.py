#!/usr/bin/env python3
import sqlite3
import os
from datetime import datetime

# Path to iMessage database
DB_PATH = os.path.expanduser("~/Library/Messages/chat.db")

def check_permissions():
    """Check if we can access the database"""
    if not os.path.exists(DB_PATH):
        print("❌ iMessage database not found at ~/Library/Messages/chat.db")
        return False
    
    try:
        # Try to open the database
        conn = sqlite3.connect(DB_PATH)
        conn.close()
        return True
    except sqlite3.Error:
        print("❌ Permission denied. Enable Full Disk Access for Terminal:")
        print("   System Settings > Privacy & Security > Full Disk Access > Terminal")
        print("   Then restart Terminal and try again.")
        return False

def query_messages(contact=None, limit=10):
    """Query recent messages, optionally filtered by contact"""
    if not check_permissions():
        return
        
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        if contact:
            query = """
            SELECT 
                datetime(message.date/1000000000 + strftime("%s", "2001-01-01"), "unixepoch", "localtime") as date,
                handle.id as contact,
                message.text,
                CASE message.is_from_me WHEN 1 THEN 'Me' ELSE handle.id END as sender
            FROM message
            JOIN handle ON message.handle_id = handle.ROWID
            WHERE handle.id LIKE ? AND message.text IS NOT NULL
            ORDER BY message.date DESC
            LIMIT ?
            """
            cursor.execute(query, (f"%{contact}%", limit))
        else:
            query = """
            SELECT 
                datetime(message.date/1000000000 + strftime("%s", "2001-01-01"), "unixepoch", "localtime") as date,
                handle.id as contact,
                message.text,
                CASE message.is_from_me WHEN 1 THEN 'Me' ELSE handle.id END as sender
            FROM message
            JOIN handle ON message.handle_id = handle.ROWID
            WHERE message.text IS NOT NULL
            ORDER BY message.date DESC
            LIMIT ?
            """
            cursor.execute(query, (limit,))
        
        messages = cursor.fetchall()
        conn.close()
        
        if not messages:
            print("No messages found.")
            return
            
        for msg in messages:
            text = msg[2][:100] + "..." if len(msg[2]) > 100 else msg[2]
            print(f"[{msg[0]}] {msg[3]}: {text}")
            
    except sqlite3.Error as e:
        print(f"Database error: {e}")
    except Exception as e:
        print(f"Error: {e}")

def list_contacts(limit=20):
    """List recent contacts"""
    if not check_permissions():
        return
        
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        query = """
        SELECT handle.id, COUNT(*) as message_count
        FROM handle
        JOIN message ON handle.ROWID = message.handle_id
        WHERE message.text IS NOT NULL
        GROUP BY handle.id
        ORDER BY message_count DESC
        LIMIT ?
        """
        cursor.execute(query, (limit,))
        
        contacts = cursor.fetchall()
        conn.close()
        
        print("Recent contacts:")
        for contact in contacts:
            print(f"{contact[0]} ({contact[1]} messages)")
            
    except sqlite3.Error as e:
        print(f"Database error: {e}")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) == 1:
        print("Recent messages:")
        query_messages()
    elif sys.argv[1] == "contacts":
        list_contacts()
    else:
        contact = sys.argv[1]
        limit = int(sys.argv[2]) if len(sys.argv) > 2 else 10
        print(f"Messages with {contact}:")
        query_messages(contact, limit)
