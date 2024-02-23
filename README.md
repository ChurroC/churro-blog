# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Churro Standards:

Going to have folder for each component to keep everything seperate and if a component has client and server interveaing I can keep it all in one folder. This also allows for easy dynamic no ssr imports in baralleling.
Use bun run add COMPONENT_NAME to create a new component in a folder. Use --dir for having folder in places like Context. 
Hooks are useComponent.hook.js
Going to use bun and turbopack to bleed irresponsibly

Sites as rolemodels:
https://nextjs.org
https://turbo.build/pack
https://www.joshwcomeau.com

Tools:
https://create.t3.gg/en/introduction
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://tailwindcss.com/docs/
https://heroicons.com
https://vercel.com/font

## Need to do (ramblings in my mind):

get state working for theme. Have system, light, and dark. using context with local storage which used has mounted and debounce.
mayeb have to add script tag to try to change css varibale to dark mode before body executes using script tag in body
for header start doing dropdowns for lang which has a searchable option and theme.
Maybe add an animation to sun to moon.
also actually get color in for dark mode.
Issue with moutning. Since it render first then use effect gets called so no a is moutn but has mount. This means local sotrage gets reset.