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