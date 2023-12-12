This is a [Next.js](https://nextjs.org/) example project that integrates with [Contentful](https://www.contentful.com/) to display knowledge base articles. This project includes the following functionality:

- [Next.js App Router](https://nextjs.org/docs/app)
- Article listing on homepage
- Article detail pages
- On-demand [revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) with Next.js [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and Contentful [Webhooks](https://www.contentful.com/developers/docs/webhooks/overview/)
- Content Preview with Next.js [Draft Mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) and Contentful [Content Preview](https://www.contentful.com/developers/docs/references/content-preview-api/)

For a complete guide on how to integrate Next.js App Router and Contentful, see the [Next.js App Router and Contentful Integration Guide](https://www.contentful.com/blog/integrate-contentful-next-js-app-router/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontentful%2Fnextjs-contentful-guide&env=CONTENTFUL_SPACE_ID,CONTENTFUL_ACCESS_TOKEN,CONTENTFUL_PREVIEW_ACCESS_TOKEN,CONTENTFUL_REVALIDATE_SECRET,CONTENTFUL_PREVIEW_SECRET)

## Required Environment Variables

This project requires the following environment variables to be set:

```
CONTENTFUL_SPACE_ID=<Replace with your Contentful Space ID>
CONTENTFUL_ACCESS_TOKEN=<Replace with your Contentful access token>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<Replace with your Contentful preview access token>
CONTENTFUL_REVALIDATE_SECRET=<Replace with a secret string to be set in Contentful's webhook settings>
CONTENTFUL_PREVIEW_SECRET=<Replace with a secret string to be set in Contentful's Content Preview settings>
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
