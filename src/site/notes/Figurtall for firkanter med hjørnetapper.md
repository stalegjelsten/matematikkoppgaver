---
{"tags":["oppgave"],"date":"2025-09-26","modified":"2025-09-26","aliases":[],"dg-publish":true,"temaer":["figurtall","mønstre","lineær vekst"],"fag":["2p-y"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4}],"title":"Figurtall for firkanter med hjørnetapper","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Forlenge mønster for lineært figurtall og utlede formel $T(n) = 4n + 8$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Forlenge mønsteret med +4 per figur for å finne antall sirkler i figur 4 og 10."}],"dg-permalink":"/figurtall-for-firkanter-med-hjornetapper/","permalink":"/figurtall-for-firkanter-med-hjornetapper/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-09-26","modified":"2025-09-26","aliases":[],"temaer":["figurtall","mønstre","lineær vekst"],"fag":["2p-y"],"eksamen":"h24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4}],"title":"Figurtall for firkanter med hjørnetapper","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Forlenge mønster for lineært figurtall og utlede formel $T(n) = 4n + 8$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Forlenge mønsteret med +4 per figur for å finne antall sirkler i figur 4 og 10."}]}}
---


# Figurtall for firkanter med hjørnetapper


Her ser du tre figurer. Figurene er satt sammen av små sirkler.  

![](/img/user/_resources/2py-h24-figurtall.png)

Tenk deg at du skal fortsette å lage figurer etter samme mønster.  

>[!oppgave]
> a) Hvor mange små sirkler vil det være i figur 4 og i figur 10?  
> b) Lag en formel for antall sirkler i figur $n$.  

## Fasit

a) Figur 4: $24$, figur 10: $48$
b) $T(n) = 4n + 8$

## Løsningsforslag

### 1-4a

Vi teller sirkler i de tre figurene:

- Figur 1: $12$ sirkler
- Figur 2: $16$ sirkler
- Figur 3: $20$ sirkler

Mønsteret øker med $4$ sirkler for hvert figurnummer.

**Figur 4:**

$$12 + 3 \cdot 4 = 24$$

**Figur 10:**

$$12 + 9 \cdot 4 = 48$$

**Figur 4 har $\underline{\underline{24}}$ sirkler og figur 10 har $\underline{\underline{48}}$ sirkler.**

### 1-4b

Vi ser at $T(n) = 12 + (n-1) \cdot 4 = 4n + 8$.

**$\underline{\underline{T(n) = 4n + 8}}$**
