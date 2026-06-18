---
name: review-branch-or-pr
summary: Review changes in a branch or pull request against `main`.
description: >
  This skill provides a structured workflow to review changes made in a branch or pull request (PR) against the `main` branch. It ensures code quality, alignment with project standards, and readiness for merging.
---

## Workflow

### Step 1: Identify the Context
- Determine whether you are reviewing a branch or a PR.
- If reviewing a PR, fetch the PR details (e.g., title, description, linked issues).

### Step 2: Fetch Changes
- Compare the branch or PR against the `main` branch.
- Use `git diff` or a similar tool to list all changes.

### Step 3: Analyze Changes
- Review the following aspects:
  - **Code Quality**: Ensure the code follows project conventions and is free of obvious bugs.
  - **Functionality**: Verify that the changes align with the intended functionality.
  - **Impact**: Assess the impact of changes on other parts of the codebase.
  - **Tests**: Check if tests are updated or added for new functionality.

### Step 4: Run Tests
- Execute all relevant tests to ensure no regressions.
- If tests fail, identify the root cause and suggest fixes.

### Step 5: Provide Feedback
- Summarize your findings.
- Highlight areas for improvement and suggest actionable changes.
- Approve the changes if they meet all criteria.

## Decision Points
- **Are the changes aligned with the project goals?**
  - If yes, proceed to testing.
  - If no, provide feedback and request updates.
- **Do the changes introduce any breaking issues?**
  - If yes, identify and document them.
  - If no, proceed to approval.

## Quality Criteria
- Code adheres to project conventions.
- Changes are well-documented.
- Tests cover all new functionality.
- No regressions or breaking changes are introduced.

## Example Prompts
- "Review the changes in branch `feature/new-ui` against `main`."
- "Analyze the PR #42 and provide feedback."
- "Check if the changes in branch `bugfix/login-issue` introduce any regressions."

## Related Customizations
- Add a skill for automating test execution during reviews.
- Create a skill for generating detailed review reports.