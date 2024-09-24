# Astro-Portfolio

Simple astro portfolio, with minimal look and good readability.

## Project Structure

     ┣ 📂public
     ┃ ┣ 📜favicon.webp
     ┃ ┣ 📜gl_flag_128x.png
     ┃ ┣ 📜profile.webp
     ┃ ┗ profile.jpg
     ┣ 📂src
     ┃ ┣ 📂components
     ┃ ┃ ┣ 📜Card.astro
     ┃ ┃ ┣ 📜ContactCard.astro
     ┃ ┃ ┣ 📜Container.astro
     ┃ ┃ ┣ 📜Footer.astro
     ┃ ┃ ┗ 📜Header.astro
     ┃ ┣ 📂i18n
     ┃ ┃ ┣ 📜portfolio.ts
     ┃ ┃ ┗ 📜utils.ts
     ┃ ┣ 📂layouts
     ┃ ┃ ┣ 📜AccordionLayout.astro
     ┃ ┃ ┗ 📜BaseLayout.astro
     ┃ ┣ 📂pages
     ┃ ┃ ┗ 📂index.astro


## Installation

#### Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

## Tech Stack

**JAVASCRIPT FRAMEWORKS**

- [Astro](https://astro.build/ "Astro")

**UI FRAMEWORKS**

- [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- [daisyUI](https://daisyui.com/ "daisyUI")

## Content and Internationalization

**View** 

Most of the views are inside the **'components'** folder.

**Content**

All the content is inside the **'i18n'**. 
*portfolio.ts* contains mostly data for the view, with an object that contains language specific text.

*utils.ts* contains functions used to manage the *portfolio.ts* content.

## Preview

*soon*