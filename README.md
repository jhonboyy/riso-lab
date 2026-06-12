# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```sh
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Building

To create a production version of your app:

```sh
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


## 🌍 Deployment & Branching Workflow

This project uses a two-branch workflow integrated with Cloudflare Pages:
*   **`develop`**: For ongoing features, bug fixes, and development. Pushing here automatically deploys to the **Staging/Preview** environment.
*   **`main`**: Production release branch. Pushing here automatically deploys to the **Production** environment.

### Release Workflow (Fast-Forward + Tags)
When ready to release changes from `develop` to production `main`:
1. Switch to `main` and update it:
   ```bash
   git checkout main && git pull origin main
   ```
2. Merge `develop` using fast-forward only:
   ```bash
   git merge develop --ff-only
   ```
3. Push to production `main` (triggers the production build):
   ```bash
   git push origin main
   ```
4. Create and push a tag for the release milestone (e.g., `week-10`):
   ```bash
   git tag -a week-10 -m "Release Week 10"
   git push origin week-10
   ```
5. Return to the `develop` branch to continue working:
   ```bash
   git checkout develop
   ```
