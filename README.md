# Frontend Take-Home Assignment

Welcome to Andrew Johnson's WorkOS Frontend Take-Home Assignment!

## Getting Started

1. **Fork the Repo**: Start by forking this repository so that you have your own version to work with.
2. **Start the Backend API**:
   - Ensure you have the latest version of Node.js.
   - Run the following commands to install dependencies and start the API:
     ```bash
     cd server
     npm install
     npm run api
     ```
3. **Start the FE Client**:
  - In another terminal window run the following operations
  ```bash
  cd client
  npm install
  npm run dev
  ```
4. **Navigate to localhost:5173**

## What would I do if I had more time? Or do differently?

TLDR; 
1. Don't build everything from scratch. 
2. The UX is good, I wanted it to be better than just good. I didn't give as much user feedback as I would if I were shipping this to prod. 
3. An extension of 1, Libraries help with modularity and Single Purpose code. (and form validation, testing, accessibility, routing, etc)
4. Contextual animations for new/updated data in the table
5. It's not pixel perfect and that honestly ALWAYS will bug me. There was no dev mode nor assets given outside of the Figma, so having to eye-ball the fonts and the colors got me close, but not where I want to be. 

This was an interesting take home. I enjoyed the process of building out this UI and the freedom it allowed. I learned a ton and will hopefully be able to grow from this experience.

I made a decision early on to build the components from scratch (outside of Tanstack Query & Framer Motion). Because If I'm going to be asked to talk about my submission and decisions, I want to know what I'm talking about. I've found the more abstractions I add that I have small amounts of time using them can make for a lot of hand-waving/shrugging `¯\_(ツ)_/¯` when discussing with others. 

My process included scaffolding out the UI with HTML and CSS, then adding the data and interactivity, and finally cleanup/finishing touches. 

Early into scaffolding the table I ran into an issue with getting the external borders for the table to still apply their border-radius after having issued `border-collapse: collapse` on a table element. That declaration collapses the borders for table cells and the reason for applying that declaration lay with the need to remove the column borders so I could style the table as closely to the designs as possible. I spent a longer time than I care to admit trying to figure out a solution and eventually decided that the juice was no longer worth the squeeze for this submission, but I'd like to understand why that happens and how Radix works around it. 

And that's when it dawned on me that using Radix or potentially shadcn/bootstrap/etc could've saved me a ton of time with this issue. I know on some occassions styling with certain libraries can be difficult and since I was on a limited amount of time I didn't want to risk running into a variety of styling issues when I feel pretty confident in my CSS abilities and want to grow them further.

There are also a few UX areas (deleting a user/editing a role name) that could be improved. Maybe after the action is taken a loading spinner or skeleton loader is displayed, (this would help on slower connections) also the error states are pretty generic.

I'm also not doing any form validation for the edit role modal, which again, a proper library may have baked in for me had I decided to use one. 

To truly configure modularity for the Table or Modal components that I wrote, I'd need to make them accept a variety of options to better control what renders (alternatively use the children prop) and as they are now, they're pretty rigid to the shape in the design.

a11y is partially covered, the production solution would need to be tested for this as well with something like jest-axe

A fun thing I didn't get to, but can't stop imagining, is a dynamic accordion-like exit/entry for when you update a row in the user table. If designed and implemented properly, it would help users keep track of what precisely was removed or added. 

Also I like writing CSS because once you understand the basics you can do a lot with it. However, if I were working on a team, utility classes could be a boon (looking at you Tailwind) and we'd need to have some `!important` discussions around how do we write and maintain CSS. 

If you made it this far, thanks for reading. 