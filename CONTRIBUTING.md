# Contributing to Riso Lab

Thank you for your interest in contributing to Riso Lab! This document provides guidelines and information for contributors.

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/jhonboyy/riso-lab/issues) to avoid duplicates
2. Open a new issue using the **Bug Report** template
3. Include steps to reproduce, expected behavior, and screenshots if applicable

### Suggesting Features

1. Open a new issue using the **Feature Request** template
2. Describe the feature, its use case, and potential implementation

### Submitting Changes

1. Fork the repository
2. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test locally with `pnpm dev`
5. Run lint to ensure code style:
   ```bash
   pnpm lint
   ```
6. Commit using descriptive messages (see commit conventions below)
7. Push to your fork and open a Pull Request

## Development Setup

```bash
git clone https://github.com/your-username/riso-lab.git
cd riso-lab
pnpm install
pnpm dev
```

## Code Style

- Use Prettier for formatting (configured in `.prettierrc`)
- Use vanilla JavaScript (no frameworks)
- Keep files modular and well-organized
- Add meaningful comments for complex logic

## Commit Conventions

Use descriptive commits with emoji prefixes:

- `✨ FEATURE` - New feature
- `🐛 BUG FIX` - Bug fix
- `🔨 REFACTOR` - Code refactoring
- `📝 DOC` - Documentation changes
- `⬆️ UPGRADE DEP` - Dependency updates
- `⚛️ CHORE` - Maintenance tasks

Example:

```
✨ FEATURE - Add export functionality for PNG format
```

## Pull Request Guidelines

- Keep PRs focused on a single change
- Update README.md if adding new features
- Test your changes thoroughly
- Link related issues in the PR description

## Questions?

Open an issue with the label "question" if you need help.
