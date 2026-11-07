# Apartament za Rynkiem — strona wizytówka

Jednostronicowa strona apartamentu w Tyliczu, zbudowana w [Astro](https://astro.build) i publikowana na GitHub Pages.

## Struktura

```
src/pages/index.astro      strona główna
public/images/             zdjęcia i logo (kopiowane bez zmian do strony)
design/original-index.html oryginalny projekt HTML (tylko do wglądu, nie jest publikowany)
.github/workflows/         automatyczne wdrożenie po pushu na main
```

Planowane moduły (włączane osobno): mapa z lokalizacją, kalendarz dostępności (synchronizacja z iCal Airbnb), formularz kontaktowy.

## Praca lokalnie

Wymagany Node.js 20+.

```
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # wersja produkcyjna w dist/
```

## Wdrożenie

Każdy push na gałąź `main` buduje stronę i publikuje ją na GitHub Pages
(Settings → Pages → Source: **GitHub Actions**).
Ręcznie: zakładka Actions → „Deploy to GitHub Pages” → Run workflow.
