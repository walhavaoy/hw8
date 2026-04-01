# UI Specification

## Page Inventory

| Page | Route | Description |
|------|-------|-------------|
| Hello World | `/` | Main landing page with Hello World heading |

## Hello World Page

### Layout

- Centered content, vertically and horizontally
- Clean, minimal design with generous whitespace
- Responsive — works on mobile and desktop

### Component Hierarchy

```
<html>
  <head>
    <meta viewport>
    <style> (inline CSS) </style>
  </head>
  <body>
    <main>
      <h1>Hello World</h1>
    </main>
  </body>
</html>
```

### Styling

- Sans-serif font family (system font stack)
- Neutral color palette (dark text on light background)
- Centered layout using flexbox
- No external CSS frameworks or libraries

### Interaction

- Static page, no JavaScript required on the client
- No forms, buttons, or interactive elements
