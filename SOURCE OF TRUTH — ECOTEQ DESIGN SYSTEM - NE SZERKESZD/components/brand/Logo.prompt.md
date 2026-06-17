# Logo

The ECOTEQ logo lockup — inline geometric mark + ExtraBold wordmark. Use on any background; pick `tone` for contrast.

```jsx
<Logo tone="white" size={36} href="/" />
<Logo tone="navy" size={28} showWordmark={false} /> {/* mark only */}
```

- `tone`: `"navy"` (light bg — navy bars + green accent dot, default) · `"white"` (navy/photo bg — white bars + green dot) · `"green"` (mono green) · `"mono-white"` (all white, e.g. on a green fill).
- `size`: mark px; the wordmark scales from it.
- `showWordmark={false}` for a compact mark-only mark (favicon, rail).
