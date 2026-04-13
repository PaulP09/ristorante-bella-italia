# Ristorante Bella Italia – Statische Website

Authentische italienische Küche in Mailänder Tradition.

## GitHub Pages Deployment

### Schritt 1: Repository erstellen

1. Gehe zu [github.com](https://github.com) und erstelle ein **neues Repository**
2. Benenne es z.B. `ristorante-bella-italia`
3. Setze es auf **Public** (für kostenlose GitHub Pages)

### Schritt 2: Code hochladen

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/ristorante-bella-italia.git
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository → **Settings** → **Pages**
2. Unter **Source** wähle: **GitHub Actions**
3. Der Workflow wird automatisch ausgeführt und die Seite deployed

### Schritt 4: URL anpassen (wichtig bei Unterverzeichnis!)

Wenn dein Repository **nicht** `DEIN-USERNAME.github.io` heißt, sondern z.B. `ristorante-bella-italia`,
dann musst du in `vite.config.ts` die `base`-Option setzen:

```ts
// vite.config.ts
export default defineConfig({
  // ...
  base: "/ristorante-bella-italia/",  // <- Dein Repository-Name
});
```

Danach erneut committen und pushen.

### Deine Website-URL

Nach dem Deployment ist die Seite erreichbar unter:

```
https://DEIN-USERNAME.github.io/ristorante-bella-italia/
```

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Die fertige statische Website liegt dann im `dist/`-Ordner.
