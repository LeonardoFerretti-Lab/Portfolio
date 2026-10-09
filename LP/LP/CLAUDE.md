# Progetto: sito portfolio di Leonardo Ferretti

Questo file è il brief per Claude Code. Leggilo prima di iniziare.

## Obiettivo
Creare un **prototipo di sito portfolio one-page** per Leonardo Ferretti (Graphic & Web Designer, UX/UI, illustratore, storyboard artist) che riprenda lo stile grafico del suo progetto Behance "Portfolio Leonardo Ferretti – UX/UI".

## Materiale nella cartella
- `contenuti/contenuti.md` → TUTTI i testi (bio, contatti, formazione, esperienze, strumenti, 9 progetti con descrizione e goals). Usa solo questi testi, non inventarne.
- `contenuti/style-guide.md` → stile, componenti e struttura della pagina.
- `assets/css/tokens.css` → colori, font, spaziature come variabili CSS. Importalo e usalo.
- `assets/images/ux-ui/` → slide del portfolio UX/UI. **01 e 07 sono il riferimento di stile** (copertina e chiusura); 02 = about/CV; 03–06 = i 4 progetti UX/UI.
- `assets/images/illustration-portfolio/` → stessa grafica in variante viola: 02 = profilo; 03–08 = progetti di illustrazione e storyboard.
- `assets/images/lezioni-americane/`, `silvano-ferretti/`, `space-soda/`, `basketball/` → immagini singole dei progetti di illustrazione.

## Requisiti tecnici (prototipo)
- HTML + CSS + JavaScript vanilla, nessun build step: `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- Responsive (mobile first), accessibile (alt text, contrasto, focus visibile, navigazione da tastiera).
- Immagini con `loading="lazy"`.
- Animazioni leggere e rispettose di `prefers-reduced-motion`.
- Lightbox semplice per le immagini dei progetti.

## Note importanti
- Le immagini in `ux-ui/` e `illustration-portfolio/` sono **slide intere** (1920×1080) con testo incorporato: nel prototipo usale come segnaposto per i progetti; vanno poi sostituite con mockup e immagini singole.
- La foto profilo è solo dentro le slide: usa un segnaposto finché non arriva il file originale (`assets/images/profilo.jpg`).
- Il sito deve essere originale: riprendere lo stile delle slide di Leonardo (sono sue), non copiare siti di terzi.

## Prossimi passi dopo il prototipo
1. Sostituire i segnaposto con immagini originali.
2. Decidere lingua (IT / EN / bilingue).
3. Pubblicare su Netlify, Vercel o GitHub Pages ed eventualmente collegare un dominio.
