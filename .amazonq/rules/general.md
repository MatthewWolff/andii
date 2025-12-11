CRITICAL: Always verify your changes before proceeding

- After making changes, read back the files to confirm the changes are correct
- Build and test to ensure compilation succeeds
- Never assume sed commands or bulk changes worked correctly without verification

## Error Analysis

When build fails:

1. Focus on actual errors, ignore warnings
2. Fix errors one by one
3. Re-run build after each fix

## Documentation Updates

CRITICAL: Update documentation as changes are made

- When adding new pages/components, update project-overview.md
- When changing routing, update routing-guidelines.md  
- When adding features, update README.md with accurate descriptions
- When removing/changing functionality, verify documentation reflects current state
- Never leave documentation outdated - update it in the same session as code changes