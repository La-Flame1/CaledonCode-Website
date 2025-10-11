# CaledonCode Website

## Overview

Welcome to the **CaledonCode Website**! This repository is dedicated to building a dynamic, team-based React website using Vite, TypeScript, and Tailwind CSS. The project emphasises structured collaboration, where multiple teams work on predefined tasks focused on key areas: Home Page, Services Page, Contact Page, and Growth Focused Tiers (e.g., pricing or feature tiers). We adhere to the current file structure and core libraries while allowing additions via `npm install` (without committing `node_modules`).

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
   git clone https://github.com/La-Flame1/CaledonCode-Website.git
   cd CaledonCode-Website
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
This reflects the current structure. Teams should expand it by adding subfolders and files in their designated areas (see "Team Tasks and Workflow" below). Do not rename, move, or delete existing files/folders without unanimous team approval.

```
CaledonCode-Website/
├── dist/                   # Build output (git-ignored; auto-generated on npm run build)
├── public/                 # Static assets
│   ├── index.html          # Vite entry HTML
│   ├── favicon.svg         # Favicon
│   └── robots.txt          # SEO robots file
├── src/                    # Source code
│   ├── components/         # Reusable React components (current: contact-focused; expand with subfolders)
│   │   ├── forms.tsx       # Shared form utilities
│   │   ├── ContactHero.tsx # Contact page hero component
│   │   ├── InquiryForm.tsx # Inquiry form component
│   │   └── useToast.tsx    # Toast notification hook
│   ├── pages/              # Page-level components (current: basic index; add subfolders for teams)
│   │   └── Index.tsx       # Main index page (starter; evolve into home or router entry)
│   ├── App.tsx             # Root component (with routing)
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles (Tailwind imports)
│   └── vite-env.d.ts       # Vite TypeScript declarations
├── .gitignore              # Ignores node_modules, dist/, etc.
├── components.json         # VS Code component snippets (if used)
├── eslintrc.js             # ESLint configuration
├── package-lock.json       # Locked dependencies
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS config for Tailwind
├── README.md               # This file
├── tailwind.config.js      # Tailwind configuration (note: .js extension; update to .ts if needed)
├── tsconfig.app.json       # TypeScript config for app
├── tsconfig.json           # Base TypeScript config
├── tsconfig.node.json      # TypeScript config for Node
└── vite.config.ts          # Vite configuration
```

- **Current Focus:** Components are contact-oriented (e.g., forms, toasts), and pages has a basic Index.tsx. This is the starter scaffold—teams will add depth.
- **Libraries:** Core libraries (e.g., React, Vite, Tailwind) are pre-installed. Additions go in `package.json` but keep `node_modules` local.
- **TypeScript:** All new files should be `.tsx` (components) or `.ts` (utils/services). Use path aliases from `tsconfig.json` (e.g., `@/components`).

## Team Tasks and Workflow
Teams are assigned specific tasks (detailed in [TASKS.md](TASKS.md) or shared via project board). Build on the current structure by creating subfolders in `src/pages/` or `src/components/` for your focus area. Examples of how to add work:

- **Team 1: Home Page** (Maduvha Muluadzi, Ntsika Mpiko)
  - **Where to Add:** Create `src/pages/home/` folder. Add components like `Hero.tsx` (main title/subtitle), `Slider.tsx` (dynamic values), `ExpertiseSection.tsx` (UI/UX, Web Dev, Branding), and `Testimonials.tsx` (client feedback).
  - **Integration:** Update `src/pages/Index.tsx` or `App.tsx` to route to `/home` (install React Router if needed: `npm install react-router-dom`).
  - **Example File:** `src/pages/home/Hero.tsx` with Tailwind classes for responsive layout and "Contact Us" button.
  - **Workflow:** Branch: `git checkout -b feature/team-home-hero`. Commit only home-related changes.

- **Team 2: Services Page** (Kagiso Jiyane, Ndumiso Nkomo, Idris Adigun)
  - **Where to Add:** Create `src/pages/services/` folder. Add sections like `UserCentricDesign.tsx`, `WebDevelopment.tsx`, `BrandIdentity.tsx`, `DigitalInsights.tsx`, and `WorkplaceSolutions.tsx` (each with sub-descriptions and CTAs).
  - **Integration:** Link from navigation in `App.tsx`. Reuse `components/forms.tsx` for any interactive elements.
  - **Example File:** `src/pages/services/ServiceCard.tsx` as a reusable component for each core section.
  - **Workflow:** Branch: `git checkout -b feature/team-services-cards`. Test responsiveness in mobile view.

- **Team 3: Growth-Focused Tiers** (Donnel Oageng, Tokelo Mphonyo, Tshimologo Nhcoe)
  - **Where to Add:** Create `src/components/tiers/` subfolder under `components/`. Add `StartupTier.tsx`, `ElevateTier.tsx`, `ExcelTier.tsx` (each with descriptions, benefits, and "Learn More" buttons).
  - **Integration:** Import into a parent `TiersSection.tsx` in `src/pages/` (e.g., add to services or a dedicated tiers page). Ensure scalability with props for customization.
  - **Example File:** `src/components/tiers/PricingTier.tsx` using Tailwind grid for responsive cards.
  - **Workflow:** Branch: `git checkout -b feature/team-tiers-startup`. Coordinate with Team 2 if tiers link to services.

- **Team 4: Contact Page** (Ntsako Maluleke, Luyanda Ndlovu)
  - **Where to Add:** Expand on existing `components/` (e.g., enhance `ContactHero.tsx`, `InquiryForm.tsx`). Create `src/pages/contact/` for full page assembly, including divided forms (left/right), submit button, and contact info stack.
  - **Integration:** Add inquiry section with `Name/Email/Message` fields. Reuse `useToast.tsx` for form success/error notifications.
  - **Example File:** `src/pages/contact/ContactLayout.tsx` combining hero, forms, and info.
  - **Workflow:** Branch: `git checkout -b feature/team-contact-forms`. Since some contact components exist, pull latest before starting.

**General Workflow for All Teams:**
1. Pull latest: `git pull origin main`.
2. Create branch: `git checkout -b feature/[team-name]-[task]`.
3. Add files in your area (use `.tsx` for components, Tailwind for styling).
4. Test locally: `npm run dev` and check `http://localhost:5173`.
5. Commit: `git add . && git commit -m "[TeamName] Add [specific feature]"`.
6. Push and PR: `git push origin feature/[branch]` → Create PR to `main` with team reviewers.
7. Run checks: Ensure `npm run type-check` and `npm run lint` pass before merging.

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
- Production deploys on merge to `main`.

## Troubleshooting
- **Dependency Issues:** Delete `node_modules` and `package-lock.json`, then `npm install`.
- **Port Conflicts:** Edit `vite.config.ts` for custom port.
- **TypeScript Errors:** Run `npm run type-check` and fix imports (use `@/src/components` paths).
- **Tailwind Issues:** Ensure `index.css` imports `@tailwind` directives; rebuild Tailwind via `npm run build-css` if configured.
- **Merge Conflicts:** Resolve locally and communicate with affected teams.

## Contributing
Follow the guidelines above. Questions? Ping any members in the main channel. Let's build something awesome together!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Last Updated: October 11, 2025*