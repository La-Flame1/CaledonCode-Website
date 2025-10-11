# CaledonCode Website

## Overview

Welcome to the **CaledonCode Website**! This repository is dedicated to building a dynamic, team-based React website using Vite, TypeScript, and Tailwind CSS. The project emphasises structured collaboration, where multiple teams work on predefined tasks focused on key areas: Home Page, Services Page, Contact Page, and Growth Focused Tiers (e.g., pricing or feature tiers). We adhere to a fixed file structure and core libraries while allowing additions via `npm install` (without committing `node_modules`).

**Key Principles:**
- **Fixed Structure:** Do not alter the existing file structure or core libraries (Vite, React, TypeScript, Tailwind).
- **Library Additions:** New libraries can be added via `npm install` (updating `package.json`), but ensure `node_modules` remains uncommitted (handled by `.gitignore`).
- **Team Autonomy:** Each team focuses solely on their assigned tasks. Commits should only include your team's work.
- **Cross-Team Changes:** If adjustments to another team's work are needed, contact the team lead via [email/Slack/Discord] first and obtain explicit approval before proceeding.

## Project Features (Planned)
- Responsive UI built with React components and Tailwind CSS.
- TypeScript for type safety.
- Page-specific modules: Home, Services, Contact.
- Growth Focused Tiers: Dynamic tier components for features/pricing.
- Routing and navigation (e.g., via React Router).
- Integration of team-specific modules.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended for Vite)
- npm (v8 or higher)
- Git
- A GitHub account for forking/cloning the repo
- Access to the team's communication channel (e.g., Slack channel #caledoncode-project)
- VS Code (recommended) with extensions for TypeScript, Tailwind, and ESLint

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/[your-org]/caledoncode-website.git
   cd caledoncode-website
   ```
2. Install dependencies:
   ```
   npm install
   ```
   *Note:* This will fetch all libraries listed in `package.json`, including Vite, React, TypeScript, and Tailwind. Do not commit `node_modules`—it's ignored by `.gitignore`.

3. Start the development server:
   ```
   npm run dev
   ```
   The app will open at `http://localhost:5173` (default Vite port).

### Building for Production
```
npm run build
```
This generates an optimised build in the `dist/` folder.

### Linting and Testing
- Lint code: `npm run lint`
- Format code: `npm run format` (if configured)
- Type check: `npm run type-check`

## Project Structure
Adhere strictly to this structure. Do not rename, move, or delete files/folders without unanimous team approval. Team-specific work goes into designated subfolders (e.g., `pages/home/` for Team Home).

```
caledoncode-website/
├── public/                 # Static assets (e.g., index.html, favicon)
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   │   ├── common/         # Shared components (e.g., Button.tsx, Header.tsx)
│   │   ├── tiers/          # Growth Focused Tiers components (Team Growth: e.g., PricingTier.tsx)
│   │   └── ...             # Team-specific if needed
│   ├── pages/              # Page-level components
│   │   ├── home/           # Home Page (Team Home: e.g., Hero.tsx, Features.tsx)
│   │   ├── services/       # Services Page (Team Services: e.g., ServiceCard.tsx)
│   │   ├── contact/        # Contact Page (Team Contact: e.g., ContactForm.tsx)
│   │   └── ...             # Additional pages
│   ├── services/           # API calls and utilities (shared or team-specific)
│   ├── styles/             # Global CSS/Tailwind utilities (e.g., globals.css)
│   ├── utils/              # Helper functions (e.g., api.ts, hooks/)
│   ├── App.tsx             # Root component (with routing)
│   ├── main.tsx            # Entry point
│   └── globals.css         # Global styles (Tailwind imports)
├── dist/                   # Build output (git-ignored)
├── .gitignore              # Ignores node_modules, dist/, etc.
├── .eslintrc.js            # ESLint configuration
├── index.html              # Vite entry HTML
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS config for Tailwind
├── README.md               # This file
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.app.json       # TypeScript config for app
├── tsconfig.json           # Base TypeScript config
├── tsconfig.node.json      # TypeScript config for Node
├── vite.config.ts          # Vite configuration
└── ...                     # Other config files (e.g., .env.example)
```

- **Team Folders:** Use subfolders like `pages/home/` for Team Home's work. For Growth Tiers, use `components/tiers/`.
- **Libraries:** Core libraries (e.g., React, Vite, Tailwind) are pre-installed. Additions go in `package.json` but keep `node_modules` local.
- **TypeScript:** All new files should be `.tsx` (components) or `.ts` (utils/services).

## Team Tasks and Workflow
Teams are assigned specific tasks (detailed in [TASKS.md](TASKS.md) or shared via project board). Examples:
- **Team Home:** Home Page in `src/pages/home/` (e.g., hero section, testimonials).
- **Team Services:** Services Page in `src/pages/services/` (e.g., service listings, integrations).
- **Team Contact:** Contact Page in `src/pages/contact/` (e.g., form handling, map integration).
- **Team Growth:** Growth Focused Tiers in `src/components/tiers/` (e.g., pricing cards, upgrade modals).

### Commit Guidelines
- **Branching:** Work on feature branches: `git checkout -b feature/team-home-hero-update`.
- **Commit Messages:** Use clear, prefixed messages: `[TeamHome] Add hero animation to HomePage`.
- **Only Your Work:** Commits/PRs must contain *only* your team's changes. Cherry-pick if needed.
- **Pull Requests:** 
  1. Push branch: `git push origin feature/your-branch`.
  2. Create PR targeting `main`.
  3. Assign reviewers from your team + one cross-team approver if integrations are involved.
  4. Merge only after approvals (including type checks and linting).

### Cross-Team Collaboration
- **Requesting Changes:** If your task requires modifying another team's code:
  1. Message the team lead (e.g., "@TeamServices-Lead: Can we discuss updating ServiceCard props for tiers?").
  2. Get written approval (e.g., Slack thread or GitHub comment).
  3. Create a joint branch if approved (e.g., `feature/team-growth-team-services-integration`).
- **Reviews:** Always review your own team's PRs before merging. Ensure TypeScript compliance.

## Adding Libraries
1. Install locally: `npm install [library-name]` (for production) or `npm install [library-name] --save-dev` (for dev tools).
2. Commit only `package.json` and `package-lock.json` changes.
3. Update Tailwind/ESLint configs if needed (e.g., for new CSS libs).
4. `.gitignore` ensures `node_modules` is never committed—run `npm install` on fresh clones to restore.
5. Announce additions in `#libraries` channel for team awareness.

## Testing and Quality
- Run type check: `npm run type-check`.
- Lint code: `npm run lint`.
- Ensure all code is responsive (Tailwind mobile-first), accessible (WCAG basics), and type-safe.
- Add unit tests in `__tests__/` subfolders if applicable (e.g., via Vitest).

## Deployment
- Use GitHub Pages, Vercel, or Netlify for previews (Vite supports easy deployment).
- Production deploys on merge to `main` (automated via [CI/CD pipeline](https://github.com/[your-org]/caledoncode-website/actions)).

## Troubleshooting
- **Dependency Issues:** Delete `node_modules` and `package-lock.json`, then `npm install`.
- **Port Conflicts:** Edit `vite.config.ts` for custom port.
- **TypeScript Errors:** Run `npm run type-check` and fix imports.
- **Tailwind Issues:** Ensure `globals.css` imports `@tailwind` directives; rebuild Tailwind via `npm run build-css` if configured.
- **Merge Conflicts:** Resolve locally and communicate with affected teams.

## Contributing
Follow the guidelines above. Questions? Ping any members in the main channel. Let's build something awesome together!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Last Updated: October 11, 2025*
*Last Updated: October 11, 2025*
