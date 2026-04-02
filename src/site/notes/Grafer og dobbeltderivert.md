---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["derivasjon","funksjonsdrøfting","eksponentialfunksjoner"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":6}],"title":"Grafer og dobbeltderivert","status":3,"source":null,"todo":null,"dg-permalink":"/grafer-og-dobbeltderivert/","permalink":"/grafer-og-dobbeltderivert/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["derivasjon","funksjonsdrøfting","eksponentialfunksjoner"],"fag":["r1"],"eksamen":"h25","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r1","del":2,"oppgave":6}],"title":"Grafer og dobbeltderivert","status":3,"source":null,"todo":null}}
---


# Grafer og dobbeltderivert

Nedenfor ser du åtte grafer.

- En av grafene er grafen til en funksjon på formen $a^x$, der $a$ er et positivt helt tall.
- Tre av grafene er grafer til funksjoner på formen $x^b - c$, der $b$ og $c$ er positive hele tall.
- Fire av grafene er grafene til den dobbeltderiverte til de fire funksjonene som er beskrevet ovenfor.

![Åtte grafer](/img/user/_resources/r1-h25-2-6.jpeg){width=100%}

>[!oppgave]
>a) Sorter grafene i par.
>- De to grafene i hvert par skal være grafen til en funksjon og grafen til den dobbeltderiverte av funksjonen.
>- Det må komme tydelig fram hvilken graf som er grafen til funksjonen, og hvilken som er grafen til den dobbeltderiverte.
>
>Husk å begrunne svarene.
>
>b) Hvilke av de åtte grafene ovenfor er grafer til funksjoner som har en omvendt funksjon?

## Fasit

a) Par: A–G, B–C, D–F, E–H
b) A, B, C og G har invers funksjon

## Løsningsforslag

### 2-6a

Vi analyserer de åtte grafene ut fra egenskapene til de fire funksjonstypene og deres andredeiverte:

| Funksjon | Andredeiverte |
| :--- | :--- |
| $a^x$ | $(\ln a)^2 \cdot a^x$ – samme form, alltid positiv |
| $x^2 - c$ | $2$ – en konstant, horisontal linje |
| $x^3 - c$ | $6x$ – lineær gjennom origo |
| $x^4 - c$ | $12x^2$ – parabel åpnende oppover gjennom origo |

**Parene er:**

- **A og G:** A er eksponentielt voksende (grafen til $a^x$, alltid positiv, konveks). G har samme form – dette er grafen til den andredeiverte $(\ln a)^2 a^x$, som er proporsjonal med $a^x$.

- **E og H:** E er en parabel med bunnpunkt under $x$-aksen, som passer med $x^2 - c$ for $c > 0$. H er en horisontal linje, noe som stemmer med den konstanteandredeiverte $f''(x) = 2$.

- **B og C:** B er en S-formet kurve (stigende gjennom hele definisjonsmengden), som passer med $x^3 - c$. C viser en rett stigende linje for $x > 0$, noe som stemmer med den lineære andredeiverte $f''(x) = 6x$.

- **D og F:** D er en U-formet kurve, flatere enn en parabel nær origo, som passer med $x^4 - c$. F er en parabel åpnende oppover med toppunkt i origo, noe som stemmer med $f''(x) = 12x^2$.

**Sammenstilling:**

| Par | Funksjon | Andredeiverte |
| :---: | :---: | :---: |
| 1 | A ($a^x$) | G |
| 2 | E ($x^2 - c$) | H |
| 3 | B ($x^3 - c$) | C |
| 4 | D ($x^4 - c$) | F |

### 2-6b

En funksjon har en invers funksjon dersom og bare dersom den er injektiv (en-til-en), dvs. strengt stigende eller strengt avtagende på hele definisjonsmengden.

- **A** ($a^x$): strengt stigende for alle $x$ → **har invers** ✓
- **B** ($x^3 - c$): strengt stigende for alle $x$ → **har invers** ✓
- **C** ($6x$): strengt stigende for alle $x$ → **har invers** ✓
- **G** ($(\ln a)^2 a^x$): strengt stigende for alle $x$ → **har invers** ✓
- **D** ($x^4 - c$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **E** ($x^2 - c$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **F** ($12x^2$): ikke monoton (avtar, deretter stiger) → har **ikke** invers
- **H** (konstant): ikke en-til-en → har **ikke** invers

**$\underline{\underline{\text{Grafene A, B, C og G er grafer til funksjoner med invers funksjon.}}}$**
