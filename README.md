# PDA Website (Participatory Development Associates)

Official marketing and information site for PDA: React + Vite + Tailwind, bilingual (English / French), projects, news, publications, staff, and embedded tools.

---

## Live site & source code

| | Link |
|---|------|
| **Production (current deploy)** | **[https://pdaltd.vercel.app/](https://pdaltd.vercel.app/)** |
| **GitHub repository** | **[https://github.com/PDA-Ltd/pdaltd](https://github.com/PDA-Ltd/pdaltd)** |

- **Hosting:** [Vercel](https://vercel.com/) — production builds are served from this repo. Exact branch and auto-deploy rules are configured in the Vercel project (UI: Project → Settings → Git).
- **Local preview of production build:** after `npm run build`, run `npm run preview` and open the URL shown in the terminal.
- **Clone the repo:** `git clone https://github.com/PDA-Ltd/pdaltd.git`

---

## First-day checklist

Step-by-step setup for new contributors.

### 1) Install tools

1. Install **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install **Node.js LTS** (includes npm): [https://nodejs.org/](https://nodejs.org/)
3. (Optional) Install **Git** if it is not already on your system: [https://git-scm.com/downloads](https://git-scm.com/downloads)

After installation, check versions in a terminal (PowerShell, Command Prompt, or the VS Code terminal):

```bash
node -v
npm -v
git --version
```

### 2) Clone the project

This repository is **[PDA-Ltd/pdaltd](https://github.com/PDA-Ltd/pdaltd)**. Clone it (creates a `pdaltd` folder):

```bash
git clone https://github.com/PDA-Ltd/pdaltd.git
cd pdaltd
```

*(If you used a different URL or fork, `cd` into the folder that was created.)*

### 3) Open in VS Code

- Open VS Code
- **File → Open Folder…**
- Select the cloned `pdaltd` folder
- Open an integrated terminal: **Terminal → New Terminal**

### 4) Install dependencies and run locally

```bash
npm install
npm run dev
```

Open the URL the terminal prints (usually `http://localhost:5173`). Vite runs the dev server with hot reload.

### 5) Edit the project

- Change code or content in VS Code, save, and watch the browser update automatically
- For where content lives, see **What’s in this repo** below and the editor guides listed there

### 6) Commit and push your changes

```bash
git add .
git commit -m "Describe your change"
git push
```

For new work, use a feature branch when your team’s workflow calls for it:

```bash
git checkout -b feature/short-description
```

You need push access to **PDA-Ltd/pdaltd** (or push to your fork and open a pull request).

### 7) If you used a ZIP download instead of `git clone`

A ZIP is not a Git repository until you initialize it. From the unzipped project folder:

```bash
git init
git remote add origin https://github.com/PDA-Ltd/pdaltd.git
git add .
git commit -m "Initial local commit"
```

(Adjust `remote` if you use a fork. To pull or push, you will still need Git and appropriate permissions.)

### Quick start (if tools are already installed)

```bash
git clone https://github.com/PDA-Ltd/pdaltd.git
cd pdaltd
npm install
npm run dev
```

Development server: Vite, default [http://localhost:5173](http://localhost:5173).

---

## What’s in this repo

- Main public site, PDA Africa area, project and news pages, multilingual UI.
- Content-driven sections: projects (JSON + catalog), news/activities, publications, staff bios.
- Optional embeds (e.g. Power BI, Ushahidi) on specific pages.

**Editor-focused guides (in the repo):**

| Topic | File |
|------|------|
| Add routes & menu items | `src/pages/HOW_TO_ADD_A_NEW_PAGE_ROUTING_AND_MENU.txt` |
| Project copy (EN/FR) | `src/data/PROJECTS_CONTENT_GUIDE.txt` |
| News & activities | `src/data/NEWS_CONTENT_GUIDE.txt` |

---

## 1) Tech stack

- React 18  
- Vite 5  
- React Router DOM 6  
- Tailwind CSS  
- Framer Motion  
- React Slick / Swiper  
- React Icons  

---

## 2) Project structure

**Top-level**

- `src/main.jsx` — app entry and route registration (`createBrowserRouter`).
- `src/App.jsx` — shared layout (header, footer, `<Outlet />`, global popups).
- `src/pages/` — route-level pages.
- `src/sections/` — home and landing sections.
- `src/components/` — shared UI and feature components.
- `src/data/` — content and catalogs (e.g. projects JSON, news wiring).
- `src/translations/` — i18n dictionaries (`en.js`, `fr.js`).
- `src/assets/images/` and `src/assets/icons/` — static assets.

**Important content / data files**

- `src/data/projectsRawContent.json` — current project stories (EN + optional FR); see `src/data/PROJECTS_CONTENT_GUIDE.txt`.
- `src/data/projectsCatalog.js` — resolves images and locale for projects; `src/components/ProjectsData.jsx` re-exports the public API.
- `src/components/ArchivedProjectsData.jsx` — archived (pre-2016 style) project records.
- `src/data/newsArticlesContent.js` + `src/data/newsAndActivitiesData.js` — news/activity items.
- `src/pages/Publications.jsx` + `src/components/FilterableTable.jsx` — publications and newsletters.
- `src/pages/Staff.jsx` — staff listing and modal bios.

---

## 3) Routing overview

Routing is defined in `src/main.jsx` using `createBrowserRouter`.

Examples:

- `/` — home  
- `/who-we-are`, `/what-we-do`, `/our-projects`  
- `/publications`, `/news-and-activities`  
- `/events`, `/staff`, `/teams`, `/board`  
- `/child-abuse-tracker`, `/covid-19`  
- `/projects/:slug`, `/archives/:slug` — project detail (current vs archived)  
- `/pdaafrica/*` — PDA Africa segment (donate, sub-pages, etc.)  

See `src/main.jsx` for the full list; new pages must be registered there **above** the catch-all `path: "*"` route.

---

## 4) Core functional modules

### 4.1 Home and shared layout

- `App.jsx`: menu switch (`Nav` vs `PDAAFRICAMenu` for `/pdaafrica` paths), footer, cookie consent, mailing-list popup (~60s), hash scrolling.

### 4.2 Projects system

- **Current projects:** `projectsRawContent.json` → `projectsCatalog.js` → `ProjectsData.jsx` exports `getProjectsForLocale`, `getProjectForSlug`.
- **UI:** `CurrentProjects.jsx` (home), `ProjectsPage.jsx`, `ProjectDetail.jsx`.
- **Archived:** `ArchivedProjectsData.jsx`, `ArchivesPage.jsx`, archive routes under `/archives`.

### 4.3 Publications & newsletters

- `FilterableTable.jsx` (filter + load more), `Publications.jsx`, `NewsletterForm.jsx`.

### 4.4 Staff

- `Staff.jsx` — departments, modals, scroll restoration on close.

### 4.5 News & activities

- Content in `newsArticlesContent.js`, wired through `newsAndActivitiesData.js`; `NewsAndActivities.jsx`, `NewsDetail.jsx`; sorted by date.

### 4.6 External embeds

- e.g. Power BI (COVID), Ushahidi (Child Abuse Tracker) where configured on those pages.

---

## 5) Internationalization (i18n)

- Context: `src/contexts/LanguageContext.jsx`  
- Hook: `src/hooks/useTranslation.js`  
- Dictionaries: `src/translations/en.js`, `src/translations/fr.js`  

For new UI copy: add keys in **both** languages, use `t("path.to.key")` in components.

---

## 6) Setup and local development

**Prerequisites:** Node.js 18+ recommended, npm. For a full walkthrough (VS Code, Git, clone, first run), see **[First-day checklist](#first-day-checklist)** above.

```bash
npm install          # install dependencies
npm run dev          # dev server (Vite)
npm run build        # production build → dist/
npm run preview      # serve dist/ locally
npm run lint         # ESLint
```

---

## 7) Content update guide

### Projects (current portfolio)

- Edit `src/data/projectsRawContent.json` (and optional `fr` blocks) per `src/data/PROJECTS_CONTENT_GUIDE.txt`.
- Images: add files under `src/assets/images/`, export in `src/assets/images/index.js`, set `imageKey` in JSON to match the export name.

### News & activities

- `src/data/newsArticlesContent.js` (see `NEWS_CONTENT_GUIDE.txt`).

### Publications / newsletters

- `FilterableTable.jsx` behavior; gallery/order in `Publications.jsx` as applicable.

### Staff

- Data in `Staff.jsx` (`name`, `position`, `image`, `bio`, optional `profileLink`).

---

## 8) UX / behavior notes

- Mailing list popup: ~60s after load; dismiss stored in `sessionStorage` (`mailing-list-popup-dismissed`).
- Staff modals: body scroll locked; previous scroll position restored on close.
- Projects listing: featured ordering via slugs in `ProjectsPage.jsx` where configured.

---

## 9) Deployment (Vercel)

- **Live URL:** [https://pdaltd.vercel.app/](https://pdaltd.vercel.app/)  
- **Build:** static export from `npm run build` → `dist/`.  
- **Config in repo:** `vercel.json`; `public/netlify.toml` exists if you mirror on Netlify.  
- Pushing to the branch connected in Vercel typically triggers a new deployment; confirm branch and “Production” branch in the Vercel project settings.

---

## 10) Git and large files

GitHub blocks files over 100 MB.

- Do not commit installers, raw bulk downloads, or huge binaries into `src/`.
- `src/assets/images/Downloads/` is gitignored; keep web-optimized assets in `src/assets/images/`.

---

## 11) Known build warnings

- `hero.svg` referenced from `src/index.css` may not resolve at build (warning only).  
- Large JS chunk warning (over 1000 kB) — consider code-splitting later.

---

## 12) Suggested next improvements

- Backend or form endpoint for newsletter/signup (replace `mailto` where used).  
- Image pipeline (compression, responsive sources).  
- Route-based `import()` for smaller initial bundles.  
- Smoke tests for routing, modals, and key content pages.

---

For substantial content or architecture changes, update this README in the same change so it stays accurate.
