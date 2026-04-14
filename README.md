# Personal Profile Site (React + Vite)

Single-page personal website with static content initially, designed to be extended later (dynamic data sources, LLM-generated summary, etc.).

## Local development

From the repo root:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Editing your content

Update your profile details in:

- `src/content/profile.ts`

The app reads content via `src/content/getProfile.ts` so you can later swap it to fetch JSON or call an API without rewriting the UI.

## Profile picture

Replace the placeholder profile image:

- `public/profile.jpeg`

You can use `profile.jpg`/`profile.png` instead—just update the filename in `src/sections/HeroSection.tsx`.

## Themes

Use the theme switcher in the header. Theme tokens live in:

- `src/styles.css`

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow:

- `.github/workflows/deploy.yml`

Steps:

1. Create a GitHub repo and push this code to the `main` branch.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` again (or run the workflow manually). Your site will publish to the Pages URL.

### Base path note

The workflow sets `BASE_PATH` to `/<repo>/` automatically for **project sites** (`https://<user>.github.io/<repo>/`).

If you deploy as a **user site** (`https://<user>.github.io/` with repo name `<user>.github.io`), change the `BASE_PATH` in the workflow build step to `/`.
