# Button

ECOTEQ action button. The green **primary** pill is the signature "Ajánlat kérés" CTA; keep one primary per view.

```jsx
<Button variant="primary">Ajánlatot kérek</Button>
<Button variant="secondary" iconRight={<ArrowRight/>}>Részletek</Button>
<Button variant="ghost" size="sm">Mégse</Button>
<Button variant="outline-light">Kapcsolat</Button>   {/* on navy/photo */}
```

- `variant`: `primary` (green) · `secondary` (navy) · `ghost` (text) · `outline-light` (dark bg).
- `size`: `sm | md | lg`. `pill={false}` for an 8px-radius rectangle.
- `iconLeft` / `iconRight` accept any icon node (e.g. a Lucide SVG).
