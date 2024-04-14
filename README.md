# Linkz

Just a Linktree clone, but simpler and, most importantly, with your own social media reference landing page. Just add your links in `data/data.json` and you're good to go!

> Note: This is the basic version of Linkz. Lacks some features but can be easily extended as per your needs. I'm working on a extended version of Linkz with more features.

**Demo:** [link-z.vercel.app/](https://link-z.vercel.app/)

- **Framework**: [Next.js](https://nextjs.org/) (version 13)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

- Clone/Fork the repo
- Install dependencies

```bash
npm install
```

- Add your links in `data/data.json`. [Explaination](#explaination)
- Run the development server

```bash
npm run dev
```

### Explaination

- `data/data.json` file will look like this.

- Fill in the details as per your needs.
- Add your image in the `public` directory and add the image name in the `image` field with the extension. (eg: `image: "image.png"`, `image: "image.jpg"`).
- The `background` field is for adding a background color.
- The display fields are for showing/hiding the footer, socials and contacts section. If you don't want to show the section, just set the `display` field to `false`.
- Add the `label` and `url` for each item. Like this:

```json
{
  "label": "Twitter",
  "url": "https://twitter.com/username"
},
{
  "label": "Github",
  "url": "https://github.com/username"
}
....
```

> Note: There's a few social icons I've included. If you want to add more, just add the logo in the `components/icons` file and add the `label` and `url` in the `data.json` file.

## Deployment

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

**If you stuck somewhere, feel free to open an issue or contact me directly. I'll be happy to help.**
