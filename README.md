# Remake Studio
## Description
Remake Studio is a website dedicated to a small imaginary company whose role is to bring new life into old movie productions. My main goal was to learn the basics of Next.js and to create a smooth full-stack project with authorization and some more complex user interactions. This project took an app router approach, most pages are rendered on the server side, however,/blog is rendered with the SSG approach and revalidates every day. Posts are saved from https://jsonplaceholder.typicode.com/ to simulate working with external API. The whole design is built on tailwindcss tool and modified free Figma Design. It showed me a new approach for developing layouts and the power of inline attributed in react components. Authorization is handled by the next-auth library which takes a lot of cookies, sessions, etc. micro-management. Now it's effortless to add another step for authentication just by adding more 0auth profiles. Clients can add comments and like to a variety of posts. 

## Getting Started
- First, download and exctract files then open terminal in main folder:
- Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Third, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

