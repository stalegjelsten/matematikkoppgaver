---
{"aliases":[],"date":"2024-11-14","del":2,"dg-permalink":"/optimalisering-av-parkeringsinntekt/","dg-publish":true,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["funksjonsdrøfting","derivasjon","økonomi"],"title":"Optimalisering av parkeringsinntekt","todo":[],"permalink":"/optimalisering-av-parkeringsinntekt/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":2,"eksamen":"h24","fag":["s1"],"modified":"2026-03-26","oppgave":5,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":5}],"poeng":4,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["funksjonsdrøfting","derivasjon","økonomi"],"title":"Optimalisering av parkeringsinntekt","todo":[]}}
---


# Optimalisering av parkeringsinntekt

Stephanie leier ut parkeringsplasser. Hun leier ut plasser for 1000 kroner per plass per måned. Med denne prisen er samtlige plasser utleid. Dersom hun øker prisen, vil antallet utleide plasser minke med én for hver gang prisen øker med 50 kroner. Hvis hun øker prisen til 1500 kroner per plass, vil hun ha samme inntekt som nå.

>[!oppgave]
>a) Vis at Stephanie har 30 parkeringsplasser.
>b) Hva er den største mulige månedlige inntekten som Stephanie kan få?

## Fasit

a) Stephanie har $\underline{\underline{30}}$ parkeringsplasser.
b) Maksimal månedlig inntekt er $\underline{\underline{31\,250 \, \mathrm{kr}}}$, med pris $1\,250 \, \mathrm{kr}$ per plass og 25 utleide plasser.

## Løsningsforslag

Vi bruker GeoGebra CAS.

![CAS-utregning](/img/user/_resources/s1-h24-2-5.png)

### a

La $n$ være totalt antall parkeringsplasser. Med pris $1\,000 \, \mathrm{kr}$ per plass er samtlige $n$ plasser utleid, og inntekten er $1\,000 \cdot n$.

Dersom prisen økes til $1\,500 \, \mathrm{kr}$ (en økning på $500 \, \mathrm{kr}$), minker antall utleide plasser med $500/50 = 10$. Antall utleide plasser blir da $n - 10$.

Vi setter opp likningen for at inntekten skal være lik:

$$1\,500 \cdot (n - 10) = 1\,000 \cdot n$$

CAS (linje 1) gir $n = 30$.

**Stephanie har $\underline{\underline{30}}$ parkeringsplasser.** $\square$

### b

La $p$ være prisen per plass i kroner. Antall plasser som er utleid ved en gitt pris $p$:

- Ved pris $1\,000 \, \mathrm{kr}$: alle 30 plasser utleid.
- For hver $50 \, \mathrm{kr}$ prisøkning over $1\,000 \, \mathrm{kr}$ minker antall utleide plasser med 1.
- Antall utleide plasser: $30 - \dfrac{p - 1\,000}{50} = 50 - \dfrac{p}{50}$

Inntektsfunksjonen blir:

$$I(p) = p \cdot \left(50 - \frac{p}{50}\right) = 50p - \frac{p^2}{50}$$

Vi definerer $I(p)$ i CAS (linje 2) og løser $I'(p) = 0$ (linje 3):

$$I'(p) = 50 - \frac{p}{25} = 0 \implies p = 1\,250$$

CAS bekrefter $p = 1\,250$.

Siden $I''(p) = -\dfrac{1}{25} < 0$ er dette et maksimum.

Maksimal inntekt (linje 4):

$$I(1\,250) = 50 \cdot 1\,250 - \frac{1\,250^2}{50} = 62\,500 - 31\,250 = 31\,250$$

Antall utleide plasser ved optimal pris: $50 - \dfrac{1\,250}{50} = 50 - 25 = 25$.

**Den største mulige månedlige inntekten er $\underline{\underline{31\,250 \, \mathrm{kr}}}$, med pris $1\,250 \, \mathrm{kr}$ per plass og 25 utleide plasser.**