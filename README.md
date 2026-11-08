# Apartament za Rynkiem — strona wizytówka

Jednostronicowa strona apartamentu w Tyliczu (PL + EN), zbudowana w [Astro](https://astro.build) i publikowana na GitHub Pages.

## Struktura

```
src/components/Home.astro          strona główna (wspólna dla obu języków)
src/components/PrivacyPage.astro   polityka prywatności
src/pages/                         adresy stron: /, /en/, /polityka-prywatnosci, /en/privacy-policy, 404
src/translations/pl.json, en.json  wszystkie teksty strony
src/data/reviews.json              ocena i opinie gości (Booking.com, Google)
src/data/gallery.json              zdjęcie główne i galeria (kolejność, opisy)
src/assets/photos/                 zdjęcia — Astro sam je zmniejsza i konwertuje do WebP
src/lib/contact.ts                 telefon, e-mail, linki
public/                            ikonka karty przeglądarki, podgląd do udostępniania (images/og-image.jpg)
.github/workflows/                 automatyczne wdrożenie po pushu na main
```

Nowe zdjęcie: wrzuć oryginał do `src/assets/photos/` i dopisz je w `src/data/gallery.json`.

Planowane moduły: kalendarz dostępności (synchronizacja z iCal Airbnb), wysyłka formularza kontaktowego e-mailem.

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
