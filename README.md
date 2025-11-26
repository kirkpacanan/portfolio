# portfolio
M1|FA1 Portfolio Task by Pacanan, Kirk Roden

## Overview

The landing page opens with the hero grid from `index.html` (name, stats, CTA buttons, and profile card), then flows into achievement, project, skills, experience, and contact sections. Every block is tied to the same HTML structure you’ll see in the file—cards, chip lists, timeline entries, and the contact grid all map 1:1 to the markup.

The visual system in `style.css` introduces a Space Grotesk type stack, glassmorphic navigation, gradient background, reusable card styles, and CSS variables for both light and dark palettes. `script.js` powers the theme toggle, saving preferences to `localStorage` and syncing with the user’s OS color scheme.

## Project Structure

- `index.html` – Semantic markup for the hero, section cards, timelines, and contact links.
- `style.css` – Design tokens, responsive layout rules, and theme-aware components.
- `script.js` – Theme toggle logic (local storage + prefers-color-scheme listeners).
- `profile.jpg` – Current portrait used inside the hero photo frame.

## Tech Stack

- HTML5 (semantic sections, accessible nav/links)
- CSS3 (custom properties, fluid grids, responsive typography)
- Vanilla JavaScript (theme persistence and OS sync)
