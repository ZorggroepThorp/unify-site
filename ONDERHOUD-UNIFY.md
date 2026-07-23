# Unify site onderhoud (snel)

Deze site draait op Netlify en deployt automatisch vanaf GitHub `main`.

## Huidige status (behouden)

- Live domein: `https://unify.nl`
- Project: `delightful-capybara-54dbad`
- Repo: `https://github.com/ZorggroepThorp/unify-site`
- Netlify auto-publish: aan op branch `main`

## Belangrijk voor domein/SSL

Laat deze DNS-config zo staan:

- `@` (apex) A -> `75.2.60.5`
- `www` CNAME -> `delightful-capybara-54dbad.netlify.app`

Niet opnieuw extra apex A-records toevoegen, anders kan SSL weer stuk gaan.

## Kleine tekstaanpassing doen

1. Pas de juiste `.html` file aan.
2. Commit en push naar `main`.
3. Netlify deployt automatisch.
4. Check live URL.

## Extra pagina toevoegen

1. Maak nieuwe pagina, bijvoorbeeld `unify-nieuwe-pagina.html`.
2. Voeg navigatielink toe in relevante pagina('s).
3. Voeg route toe in `_redirects` (optioneel, mooie URL):

```txt
/nieuwe-pagina /unify-nieuwe-pagina.html 200
```

4. Commit en push naar `main`.
5. Controleer op live site.

## Als live wijziging niet direct zichtbaar is

1. Kijk in Netlify -> Deploys of de laatste deploy `published` is.
2. Doe harde refresh in browser (`Cmd+Shift+R`).
3. Test direct de pagina-URL.

## Formulieren

Vervang placeholders in form actions door echte Formspree IDs:

- `unify-homepage.html` -> `https://formspree.io/f/...`
- `unify-intake.html` -> `https://formspree.io/f/...`
