# AGC Newsnet

A modern, full-featured news platform built with Next.js, TypeScript, and Tailwind CSS. AGC Newsnet delivers up-to-date stories, categories, and media, with a responsive and modular design.

## Features

- ⚡ Fast and SEO-friendly with Next.js App Router
- 🎨 Styled using Tailwind CSS for rapid UI development
- 📰 Dynamic stories, categories, and bookmarks
- 🔍 Integrated search and filtering
- 🖼️ Optimized images using Next.js `<Image>`
- 📱 Responsive design for all devices
- 📦 Modular components for easy maintenance and scaling
- 🛠️ Redux Toolkit for global state management

## Project Structure

```
src/
  app/            # Next.js app directory (routing, layouts, pages)
    layout.tsx
    globals.css
    stories/      # Dynamic routes for stories
    bookmarks/    # Bookmarks feature
  components/
    ads/          # Advertisement components (SidebarAd, AdBar, etc.)
    features/     # Feature components (story, search, etc.)
    layout/       # Layout components (Header, Footer, MainNavBar, etc.)
    ui/           # Reusable UI components
  lib/            # API utilities, hooks, helpers
  store/          # Redux Toolkit store and slices
  types/          # TypeScript type definitions
public/           # Static assets (images, logos, etc.)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [ESLint](https://eslint.org/)

## Customization

- **API Endpoints:** Edit `src/lib/api.ts` to connect to your backend.
- **Types:** Maintain type safety in `src/types/`.
- **UI:** Customize styles in `src/app/globals.css` and Tailwind config.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform that supports Next.js

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

## License

[MIT](LICENSE)
