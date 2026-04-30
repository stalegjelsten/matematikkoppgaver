---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/luftforurensning-og-sinusfunksjon/","dg-publish":true,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["trigonometri","modellering","funksjoner"],"title":"Luftforurensning og sinusfunksjon","todo":[],"permalink":"/luftforurensning-og-sinusfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":4,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":4}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["trigonometri","modellering","funksjoner"],"title":"Luftforurensning og sinusfunksjon","todo":[]}}
---


# Luftforurensning og sinusfunksjon

I et veikryss varierer en type luftforurensning periodisk hvert døgn. Luftforurensningen øker ut over formiddagen og minker igjen mot kvelden. Mengden luftforurensning $M$ kan beskrives med funksjonen

$$M(t) = A \cdot \sin(ct + k) + d$$

der $t$ er antall timer etter midnatt.

Den største mengden luftforurensning i løpet av døgnet er $31{,}2 \text{ μg/m}^3$, og den minste mengden er $18{,}2 \text{ μg/m}^3$.

>[!oppgave]
>a) Bestem $A$, $c$ og $d$.

Ved to tidspunkter i løpet av døgnet er mengden luftforurensning $27 \text{ μg/m}^3$. Den første gangen er klokken 13:00.

>[!oppgave]
>b) Når er det andre tidspunktet?

## Fasit

a) $\underline{\underline{A = 6{,}5}}, \quad \underline{\underline{c = \dfrac{\pi}{12}}}, \quad \underline{\underline{d = 24{,}7}}$

b) Det andre tidspunktet er klokken $\underline{\underline{22:14}}$.

## Løsningsforslag

### a

Funksjonen $M(t) = A \cdot \sin(ct + k) + d$ har amplitude $A$ og midtlinje $d$. Siden maksimum er $31{,}2$ og minimum er $18{,}2$, får vi

$$A = \frac{31{,}2 - 18{,}2}{2} = \frac{13}{2} = \textcolor{seagreen}{6{,}5}$$

$$d = \frac{31{,}2 + 18{,}2}{2} = \frac{49{,}4}{2} = \textcolor{steelblue}{24{,}7}$$

Perioden er $24$ timer (ett døgn), og sammenhengen mellom periode $P$ og $c$ er $P = \dfrac{2\pi}{c}$:

$$c = \frac{2\pi}{24} = \textcolor{tomato}{\frac{\pi}{12}}$$

**Svar:** $\underline{\underline{A = 6{,}5}}$, $\underline{\underline{c = \dfrac{\pi}{12}}}$, $\underline{\underline{d = 24{,}7}}$

### b

Vi skal finne begge tidspunktene der $M(t) = 27$. Vi bruker GeoGebra CAS.

Vi definerer $M(t)$ med de kjente verdiene $A = 6{,}5$, $c = \frac{\pi}{12}$, $d = 24{,}7$, og løser først for $k$ ved å bruke at $M(13) = 27$. Deretter setter vi inn $k$ og løser $M(t) = 27$ for $t$.

![GeoGebra CAS – løsning for k og andre tidspunkt](/img/user/_resources/r2-h23-2-4.png)

CAS gir to løsningsgrener for $k$ (én for stigende, én for synkende fase ved $t = 13$). Oppgaven sier at luftforurensningen *øker ut over formiddagen og minker mot kvelden*, så $t = 13$ må ligge på den stigende grenen. Vi velger derfor

$$k = \sin^{-1}\!\left(\frac{23}{65}\right) - \frac{13\pi}{12} \approx -3{,}04$$

Med $k$ bestemt gir CAS de generelle løsningene

$$t = 24k_1 + 13 \qquad \text{og} \qquad t = \frac{24k_1\pi + 25\pi - 24\sin^{-1}\!\!\left(\tfrac{23}{65}\right)}{\pi}$$

I løpet av ett døgn ($0 \le t < 24$) bruker vi $k_1 = 0$:

- $t = 13$ (klokken 13:00 — oppgitt)
- $t = \dfrac{25\pi - 24\sin^{-1}\!\!\left(\tfrac{23}{65}\right)}{\pi} \approx 22{,}24 \approx 22:14$

**Svar:** Det andre tidspunktet er klokken $\underline{\underline{22:14}}$.