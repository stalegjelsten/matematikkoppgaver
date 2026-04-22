---
{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-11-14","aliases":[],"dg-publish":true,"temaer":["rekker","programmering","figurtall"],"fag":["2p-y"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":6}],"title":"Trekantmønster og programmering 2P-Y H25","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Figurtall: finne antall pinner i figur 4 og 10, finne formel $P(n)=2n+1$, og tolke akkumulasjonsprogram.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Fortsette +2-mønsteret til figur 4 (9) og figur 10 (21)."}],"dg-permalink":"/trekantmonster-og-programmering/","permalink":"/trekantmonster-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-11-14","aliases":[],"temaer":["rekker","programmering","figurtall"],"fag":["2p-y"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":6}],"title":"Trekantmønster og programmering 2P-Y H25","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Figurtall: finne antall pinner i figur 4 og 10, finne formel $P(n)=2n+1$, og tolke akkumulasjonsprogram.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Fortsette +2-mønsteret til figur 4 (9) og figur 10 (21)."}]}}
---


# Trekantmønster og programmering 2P-Y H25




![Tre figurer med trekanter](/img/user/_resources/2p-y-h25-trekanter.png){width=65%}

Ovenfor ser du tre figurer. Figurene er satt sammen av pinner.  
Tenk deg at du skal fortsette å lage figurer etter samme mønster.

>[!oppgave]
>a) Hvor mange pinner vil det være i figur 4?  
>   Hvor mange pinner vil det være i figur 10?

>[!oppgave]
>b) Lag en formel for antallet pinner i figur $n$.

Vivian har laget programmet nedenfor.

```python ln
n = 0
total = 0

figur = 3
grense = 1000

while total <= grense:
    n = n + 1
    total = total + figur
    figur = figur + 2

print("Resultat:")
print(n)
print(total)
```

```
Resultat:
31
1023
```

>[!oppgave]
>c) Hva vil Vivian finne ut?  
>   Hva forteller verdiene som skrives ut?  
>   Husk å begrunne svaret ditt.

## Fasit

a) Figur 4: 9 pinner. Figur 10: 21 pinner
b) $f(n)=2n+1$
c) Vivian vil finne den minste figuren som har mer enn 1000 pinner totalt. Figur 31 har 1023 pinner totalt.

## Løsningsforslag

### a

Vi skal finne antall pinner i figur 4 og figur 10.

**Framgangsmåte:**

La oss først se på mønsteret:

- Figur 1: 3 pinner (én trekant)
- Figur 2: 5 pinner (3 + 2)
- Figur 3: 7 pinner (5 + 2)

Vi ser at hver ny figur får 2 flere pinner enn den forrige.

**Figur 4:**
$$\text{Pinner i figur 4} = 7 + 2 = 9$$

**Figur 10:**

Vi kan fortsette mønsteret:

- Figur 4: 9 pinner
- Figur 5: 11 pinner
- Figur 6: 13 pinner
- Figur 7: 15 pinner
- Figur 8: 17 pinner
- Figur 9: 19 pinner
- Figur 10: 21 pinner

**Det vil være $\underline{\underline{9}}$ pinner i figur 4 og $\underline{\underline{21}}$ pinner i figur 10.**

### b

Vi skal lage en formel for antallet pinner i figur $n$.

**Framgangsmåte:**

Vi ser at:

$$
\begin{aligned}
\text{Figur 1: } & 3 = 3 + 2 \cdot 0 = &&3 + 2(1-1) \\
\text{Figur 2: } &5 = 3 + 2 \cdot 1 = &&3 + 2(2-1) \\
\text{Figur 3: } &7 = 3 + 2 \cdot 2 = &&3 + 2(3-1) \\
\text{Figur }n: & &&3 + 2(n-1)
\end{aligned}
$$

Vi kan forenkle dette:
$$P(n) = 3 + 2(n-1) = 3 + 2n - 2 = 2n + 1$$

**Formelen er $\underline{\underline{P(n) = 2n + 1}}$.**

### c

Vi skal forklare hva programmet finner ut og hva verdiene som skrives ut betyr.

**Analyse av programmet:**

Programmet starter med:

- `n = 0` (figurnummer)
- `total = 0` (totalt antall pinner brukt)
- `figur = 3` (antall pinner i neste figur)
- `grense = 1000` (grensen for total)

I løkken:

1. `n = n + 1`: Går til neste figur
2. `total = total + figur`: Legger til pinnene fra denne figuren
3. `figur = figur + 2`: Neste figur får 2 flere pinner

Løkken fortsetter til `total > 1000`.

**Resultat:**

- `n = 31`: Dette er figurnummeret
- `total = 1023`: Dette er totalt antall pinner brukt

**Programmet finner ut hvor mange figurer Vivian kan lage før hun har brukt over 1000 pinner totalt. Verdiene viser at etter å ha laget $\underline{\underline{31}}$ figurer har hun brukt $\underline{\underline{1023}}$ pinner totalt, som er første gang totalen overskrider 1000.**
