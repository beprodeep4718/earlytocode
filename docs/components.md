# Components

## UI (shadcn/ui)
- Button, Card, Table, Input, Label, Dropdown, Checkbox, Avatar, Badge, etc.
- Custom spinner variants under `components/ui/shadcn-io/spinner`

## Custom sections
- Navbar: header with auth controls and dark mode toggle
- LoginForm: email/password + Google OAuth
- Hero, FeatureCards, QuotesSection, PricingSection, FaqSection, TechCareerLanding: marketing sections for the home page
- Meeting components: MeetingSetUp, MeetingRoom, EndCallButton

## Conventions
- Tailwind CSS for styling, `cn` helper in `lib/utils`
- Prefer server components by default; add `"use client"` where interaction is needed
- Keep components small and focused; colocate component-specific types
