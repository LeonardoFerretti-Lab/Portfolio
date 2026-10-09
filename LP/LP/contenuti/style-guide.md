# Style guide – dal progetto "Portfolio Leonardo Ferretti – UX/UI"

Riferimento visivo: `assets/images/ux-ui/ux-ui-01…07.webp` (tema nero/oro) e
`assets/images/illustration-portfolio/…` (stessa grafica in variante viola notte).
I valori sono pronti in `assets/css/tokens.css`.

## Mood
Elegante, premium, "dark luxury". Sfondo quasi nero con leggere sfumature calde, dettagli oro/champagne sottili, molto spazio negativo. Le immagini dei progetti sono le uniche zone di colore forte.

## Colori
| Ruolo | Valore |
|---|---|
| Sfondo | #030303 → #0a0a0a, sfumatura radiale calda (#23231d) in alto |
| Card | gradiente scuro semi-trasparente, bordo oro 1px (rgba(214,199,140,.55)) |
| Oro scuro / medio / chiaro | #8a7d4a · #b6a766 · #e2dbb4 · #f1eddc |
| Testo | #f5f3ea, secondario #bdb9ab |
| Variante "Illustration" | sfondo viola notte #1a162e → #332f55, stesso oro |

Idea: usare il nero per la sezione UX/UI e il viola per la sezione Illustrazione, così le due anime del portfolio sono riconoscibili ma coerenti.

## Tipografia
- **Montserrat** (Google Fonts, gratuito), unico font.
- Display "Leonardo Ferretti": Light 300, molto grande, riempimento a gradiente oro.
- Titoli di progetto (DEMOIT, NAIVE SHORE…): Regular 400, MAIUSCOLO, bianco.
- Etichette di sezione (ABOUT ME, CONTACTS, EDUCATION): Medium 500, maiuscolo, con linea oro sottile sotto.
- Testo: Regular 400, interlinea ~1.5.

## Componenti chiave
1. **Cornice titolo** – rettangolo scuro con bordo oro e angoli 12–16px; due cornici impilate per "Portfolio" / "Leonardo Ferretti".
2. **Linguetta trapezoidale** – piccolo tab con lati inclinati (es. "UX/UI", "Goals") attaccato sotto o sopra una card. In CSS: `clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%)` o bordo con pseudo-elementi.
3. **Card glass scura** – raggio ~22px, bordo oro, ombra profonda, leggero riflesso in alto.
4. **Card obiettivo (Goal)** – riquadro icona quadrato a sinistra (icona oro a linea/metallica) + testo centrato; le card sono collegate da un "binario" verticale scuro.
5. **Timeline** – colonne nome/data · pallino bianco su linea verticale · titolo in grassetto + descrizione (Formazione / Esperienze).
6. **Griglia bento dei progetti** – a sinistra colonna fissa (titolo, descrizione, goals), a destra mosaico di 3–5 immagini/mockup con bordo oro e angoli arrotondati.
7. **Pulsanti contatto** – pillola scura divisa in due: quadrato icona oro + testo.
8. **Icone strumenti** – riga di loghi app (Ai, Ps, Ae, Id, Pr, Xd, Figma, WordPress, Blender, C4D).

## Struttura pagina proposta (one-page)
1. Hero – cornici "Portfolio / Leonardo Ferretti" + linguetta con i ruoli
2. About + Contatti (bento 2 card)
3. Formazione · Esperienze · Altre esperienze (3 card timeline)
4. Strumenti
5. Progetti UX/UI – Demo IT, Naive Shore, Studio Lupi & Associated, Landing Weopera
6. Progetti Illustrazione (sfondo viola) – Lezioni americane, Contest Calendart, Silvano Ferretti, Various projects, Storyboard
7. Chiusura – "Thank you for your time…" + pulsanti contatto

## Interazioni suggerite
- Comparsa morbida delle card allo scroll (fade + translateY 20px).
- Hover sulle immagini: bordo oro più luminoso + leggero zoom (1.03).
- Lightbox per vedere le immagini a schermo intero.
- Menu fisso minimale in alto (About · Progetti · Illustrazione · Contatti).
- Mobile: tutte le griglie diventano una colonna; la colonna descrizione va sopra le immagini.
