# Reaves Tyler

A personal website built with [Nuxt 3](https://nuxt.com/) and deployed to [GitHub Pages](https://pages.github.com/).

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Generate the static site:

```bash
pnpm run generate
```

Preview the production build locally:

```bash
npx serve .output/public
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch. See `.github/workflows/nuxtjs.yml` for the workflow configuration.

## Project Structure

```
├── .github/workflows/   # GitHub Actions CI/CD
├── assets/css/          # Global stylesheets
├── components/          # Vue components
├── composables/         # Composable functions
├── layouts/             # Page layouts
├── middleware/           # Route middleware
├── pages/               # File-based routing
├── plugins/             # Nuxt plugins
├── public/              # Static assets
├── server/api/          # Server API routes
├── app.vue              # App entry component
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Dependencies and scripts
```

## Learn More

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
