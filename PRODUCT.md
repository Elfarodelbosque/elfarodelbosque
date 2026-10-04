# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: women aged roughly 40–65 from the Arturo Soria neighbourhood and surrounding areas of Madrid. They want quality clothing, footwear and accessories that "not everyone wears", and they value a trusted, unhurried relationship with the shop more than following trends. Many are loyal, repeat clientas; some have become friends of the owner.

Typical job on the site: see what is in the shop this season (LookBook, Catálogo), get a feel for Sandra and the shop (Nuestra Historia, Notas de Sandra), then come to the shop, call, or message on WhatsApp.

## Product Purpose

The website is a shop window for a physical boutique, not an online store. Success = women visit the shop at c/ Mesena 106 (28033 Madrid), call, or message via WhatsApp. There is no e-commerce and none is planned at this time.

## Positioning

A one-woman, neighbourhood boutique run by Sandra since 2008: she hand-picks every piece thinking of specific clientas, prioritises fabric quality, fit and longevity over trend, and the shop is a place of trust where nobody is ever pressured to buy ("solo un rato para una misma"). The community of women around the shop — a kind of sisterhood — is the thing chain stores and online platforms cannot copy.

## Operating Context

- Physical shop: Calle Mesena 106, 28033 Madrid (Arturo Soria). Phone/WhatsApp: 622 33 04 78.
- Contact channels on the site: `tel:` links, WhatsApp (`wa.me`, prefilled message to sign up for novedades y promociones), Instagram `@elfarodelbosque_`.
- Content sections: Inicio, LookBook, Catálogo, Nuestra Historia (`Contacto.html`), Notas de Sandra (style notes + "Newsletter 1–3" articles), plus a "Visítanos" band at the end of the home page.
- `Novedades.html` is deliberately hidden for now: it was removed from the menu on purpose. Do not link it from the menu or any page until asked.
- Catalogue and LookBook are photo-led; the catalogue explicitly points to "¡Más en la tienda!".
- Site language: Spanish (`lang="es"`). Domain: farodelbosque.es (GitHub Pages, `CNAME`).

## Capabilities and Constraints

- Existing codebase: static HTML/CSS/vanilla JS (`css/estilos.css`, `css/LookBook.css`, `css/carrusel.css`, `normalize.css`), served from GitHub Pages. The user did not mark static HTML as a binding constraint; changing stack would be a decision to ask about, not assume.
- No online sales, cart, prices or stock information.
- Undecided: whether the newsletter ("Notas de Sandra") is also sent by email or only lives on the site; sign-up currently happens via WhatsApp.

## Brand Commitments

- **Name and logo are fixed:** "El Faro del Bosque" and the current lighthouse logo stay as they are. The name joins Sandra's Cantabrian roots (sea, lighthouses) with the woods of Arturo Soria where the shop began.
- **Sandra's voice is fixed:** warm, close, first person, Spanish, practical style advice without fashion-industry jargon. Notes and story are signed "amor y estilo, Sandra".
- **Own photography only:** use real photos of the shop, its garments and its looks (`images/`). Never stock imagery.

## Evidence on Hand

- Sandra's full founding story in her own words (`Contacto.html`).
- Style notes and three newsletter articles written by Sandra (`NotasDeSandra.html`, `Newsletter 1–3.html`).
- Real product and look photography in `images/` (numbered shots, `IMG_*-Edit.jpg`, catalogue covers).
- Address, phone, Instagram and schema.org `ClothingStore` data in `index.html`.
- Opening hours (confirmed 2026-10-01): Monday–Friday 11:30–14:30 and 17:30–20:30; Saturday 11:30–14:30. Shown in the home "Visítanos" band and in the JSON-LD.
- Absent: customer testimonials, reviews, press, prices. Do not invent any of these.

## Product Principles

1. **Every page leads to the shop.** The web earns a visit, a call or a WhatsApp message; it never pretends to be an online store.
2. **Sandra is the brand.** Her voice, her choices and her story are the differentiator; keep them first-person and human.
3. **Calm, never pushy.** Mirror the shop's promise of no pressure: invitations, not hard sells or urgency tactics.
4. **Real over polished.** Real garments, real photos, real words; no fabricated claims or stock imagery.
5. **Readable for the actual clienta.** Women 40–65 browsing mostly on their phones: legible text, clear contact paths, nothing fiddly.

## Accessibility & Inclusion

No formal standard was specified. Given the 40–65 audience, comfortable text sizes, strong contrast and large tap targets for phone/WhatsApp links are product requirements, not polish.
