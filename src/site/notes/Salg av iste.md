---
{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"dg-publish":true,"temaer":["eksponentialfunksjoner","prosentvis endring i flere perioder"],"fag":["2p-y","2p"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Salg av iste","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Anvende eksponentialmodellen $F(x) = 620 \\cdot 1{,}045^x$ regnemessig og grafisk, og regne prosentvis vekst over 24 måneder.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Regne $F(12)$ direkte og løse $F(x) = 2000$ med logaritme; samt grafisk avlesning i GeoGebra."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Prosentvis endring fra $F(0)=620$ til $F(24) \\approx 1783$; eller $1{,}045^{24} - 1$."}],"dg-permalink":"/salg-av-iste/","permalink":"/salg-av-iste/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-09-28","modified":"2025-09-28","aliases":[],"temaer":["eksponentialfunksjoner","prosentvis endring i flere perioder"],"fag":["2p-y","2p"],"eksamen":"h24","del":2,"oppgave":1,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":1},{"fag":"2p","del":2,"oppgave":1}],"title":"Salg av iste","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Anvende eksponentialmodellen $F(x) = 620 \\cdot 1{,}045^x$ regnemessig og grafisk, og regne prosentvis vekst over 24 måneder.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Regne $F(12)$ direkte og løse $F(x) = 2000$ med logaritme; samt grafisk avlesning i GeoGebra."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Prosentvis endring fra $F(0)=620$ til $F(24) \\approx 1783$; eller $1{,}045^{24} - 1$."}]}}
---


# Salg av iste


En bedrift produserer iste. Funksjonen gitt ved  

$$F(x) = 620 \cdot 1{,}045^x$$

er en modell som viser hvor mange flasker av isteen bedriften regner med å selge hver måned fra og med desember 2024.  

For å regne ut salget i desember 2024 kan vi sette $x = 0$, for å regne ut salget i januar 2025 kan vi sette $x = 1$, og så videre.  

>[!oppgave]
>a) Vis hvordan du på to ulike måter kan svare på spørsmål 1) og på spørsmål 2) nedenfor.  
>    1) Hvor mange flasker iste regner bedriften med å selge i desember 2025 ifølge modellen?  
>    2) Når vil bedriften for første gang selge mer enn 2000 flasker iste i løpet av en måned ifølge modellen?  

>[!oppgave]
>b) Hvor mange prosent vil salget øke med fra desember 2024 til desember 2026 ifølge modellen?  

## Fasit

a) Des. 2025: $\approx 1051$ flasker; selger $> 2000$ fra mars 2027 ($x = 27$)
b) $\approx 188 \,\%$ økning

## Løsningsforslag

### a

**Metode 1 – bruke modellen direkte:**

Desember 2025 er 12 måneder etter desember 2024, så vi setter $x = 12$:

$$F(12) = 620 \cdot 1{,}045^{12} \approx 1051 \text{ flasker}$$

For å finne når salget overstiger 2000 flasker løser vi $F(x) > 2000$:

$$620 \cdot 1{,}045^x = 2000 \implies 1{,}045^x = \frac{2000}{620} \approx 3{,}226$$

$$x = \frac{\lg 3{,}226}{\lg 1{,}045} \approx 26{,}6$$

Det vil si at fra og med $x = 27$ (mars 2027) vil salget overstige 2000 flasker.

**Metode 2 – grafisk løsning:**

Vi tegner $F(x) = 620 \cdot 1{,}045^x$ og leser av. For spørsmål 1 leser vi av $y$-verdien ved $x = 12$ (grønt punkt). For spørsmål 2 finner vi skjæringspunktet mellom $F(x)$ og linjen $y = 2000$ (rødt punkt).

![Graf av $F(x) = 620 \cdot 1{,}045^x$ med $y = 2000$ og $x = 12$ markert](/img/user/_resources/2p-y-h24-2-1-a-graf.png){width=70%}

Fra grafen leser vi av:

1) **I desember 2025 regner bedriften med å selge omtrent $\underline{\underline{1051 \text{ flasker}}}$ iste.**

2) **Fra og med $x = 27$, som tilsvarer mars 2027, vil bedriften for første gang selge mer enn $\underline{\underline{2000 \text{ flasker}}}$ i løpet av en måned.**

### b

Fra desember 2024 ($x = 0$) til desember 2026 ($x = 24$):

$$F(0) = 620 \qquad F(24) = 620 \cdot 1{,}045^{24} \approx 1783$$

$$\text{Prosentvis økning} = \frac{F(24) - F(0)}{F(0)} \cdot 100 = \frac{1783 - 620}{620} \cdot 100 \approx 187{,}6 \,\%$$

Vi kan også bruke at vekstfaktoren over 24 måneder er $1{,}045^{24} \approx 2{,}876$, dvs. $188 \,\%$ økning.

**Salget vil øke med omtrent $\underline{\underline{188 \,\%}}$ fra desember 2024 til desember 2026.**
