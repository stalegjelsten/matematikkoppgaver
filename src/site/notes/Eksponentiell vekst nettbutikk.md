---
{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-12-19","aliases":[],"dg-publish":true,"temaer":["regresjon","modellering","eksponentialfunksjoner","prosentvis endring","prosentvis endring i flere perioder"],"fag":["2p-y","2p"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Eksponentiell vekst nettbutikk","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"permalink":"/eksponentiell-vekst-nettbutikk/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-12-19","aliases":[],"temaer":["regresjon","modellering","eksponentialfunksjoner","prosentvis endring","prosentvis endring i flere perioder"],"fag":["2p-y","2p"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Eksponentiell vekst nettbutikk","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"permalink":"/eksponentiell-vekst-nettbutikk/"}}
---


# Eksponentiell vekst nettbutikk

Alex lager hårspenner og annen hodepynt. I februar 2025 åpnet han en liten nettbutikk. Tabellen nedenfor viser omsetningen de første fem månedene etter at nettbutikken åpnet.

| Måned              | Februar | Mars | April | Mai  | Juni |
| :----------------- | :-----: | :--: | :---: | :--: | :--: |
| Omsetning (kroner) |  1267   | 1431 | 1619  | 1788 | 2032 |

>[!oppgave]
>a) Lag en modell på formen $f(x)=a \cdot b^{x}$ for omsetningen $f(x)$ kroner $x$ måneder etter februar 2025.
>b) Omtrent hvor mange prosent øker omsetningen med per måned, ifølge modellen?

Alex har som mål å omsette for 20 000 kroner per måned.

>[!oppgave]
>c) Når kommer Alex til å nå målet, ifølge modellen?
>d) Hvor mange prosent må omsetningen øke med per måned etter juni 2025 dersom Alex skal nå målet i løpet av desember 2025?

## Fasit

a) $f(x)=1267 \cdot 1{,}124^{x}$
b) 12,4 %
c) I mars 2027 (24 måneder etter februar 2025)
d) 54,7 %

## Løsningsforslag

### 2-1a
![Regresjon for Alex sitt salg av hodepynt](/img/user/_resources/2py-h25-2-1-regr.png){width=60%}

Jeg la inn dataene i GeoGebra og brukte regresjon med en eksponentiell modell

**Modellen $\underline{\underline{f(x) = 1271 \cdot 1{,}124^{x}}}$ der $x$ er antall måneder etter februar 2025 passer godt for Alex' omsetning.**

### 2-1b

Vekstfaktoren $b = 1{,}124$ tilsvarer $112{,}4 \,\%$. Siden utgangspunktet vårt er 100 %, så blir økningen 12,4 %.

**Omsetningen øker med omtrent $\underline{\underline{12{,}4\,\%}}$ per måned ifølge modellen.**

### 2-1c

![$f$ skjærer $y=20000$ når omsetningen er 20 000 kr](/img/user/_resources/2py-h25-2-1c-graf.png){#fig:2-1c-graf width=40%}

Vi kan enten løse likningen $f(x)=20000$ i CAS i GeoGebra, eller så kan vi finne skjæringen med linjen $y=20000$ slik jeg har gjort i figur &fig:2-1c-graf, se punkt $A$.

**Alex kommer til å nå målet etter omtrent $\underline{\underline{23{,}5}}$ måneder, det vil si i $\underline{\underline{\text{januar 2027}}}$ ifølge modellen.**

### 2-1d

Vi skal finne hvor mange prosent omsetningen må øke med per måned etter juni 2025 for å nå målet i desember 2025.

**Framgangsmåte:**

- I juni (måned 4) er omsetningen: $2032$ kr
- Fra juni til desember er det 6 måneder
- Vi vil nå 20 000 kr i desember

Vi kaller vekstfaktoren til økningen $x$ og setter opp likningen
$$
2032 \cdot x^{6}=20\,000
$$

![CAS-løsning av oppgave 2-1d](/img/user/_resources/2py-h25-2-1d.png){width=40%}

Denne vekstfaktoren tilsvarer 46,4 % økning.

**Omsetningen må øke med omtrent $\underline{\underline{46{,}4\,\%}}$ per måned etter juni 2025 for at Alex skal nå målet i løpet av desember 2025.**
