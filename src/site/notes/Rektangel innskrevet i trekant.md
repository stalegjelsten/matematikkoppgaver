---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/rektangel-innskrevet-i-trekant/","dg-publish":true,"eksamen":"h23","fag":["1p"],"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":5}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["geometri","areal","lineær vekst","optimering"],"title":"Rektangel innskrevet i trekant","kategori":3,"vanskegrad":3,"beskrivelse":"Bestem koordinatene til hjørnet P på linjestykket BC slik at arealet av rektangelet innskrevet i trekanten blir størst mulig.","lf-source-claude":true,"todo":[],"permalink":"/rektangel-innskrevet-i-trekant/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["1p"],"modified":"2026-04-29","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":5}],"poeng":null,"source":null,"status":1,"tags":["oppgave"],"temaer":["geometri","areal","lineær vekst","optimering"],"title":"Rektangel innskrevet i trekant","kategori":3,"vanskegrad":3,"beskrivelse":"Bestem koordinatene til hjørnet P på linjestykket BC slik at arealet av rektangelet innskrevet i trekanten blir størst mulig.","lf-source-claude":true,"todo":[]}}
---


# Rektangel innskrevet i trekant

Klassen til Maria og Marta arbeider med oppgaven nedenfor.

>[!yellow-box]
>Et rektangel er innskrevet i en likebeint, rettvinklet trekant. Trekanten har hjørner i punktene $A(-6, 0)$, $B(6, 0)$ og $C(0, 6)$.
>
>Punktet $P$ er et hjørne i rektangelet og ligger på linjestykket $BC$.
>
>Bestem koordinatene til punktet $P$ slik at arealet av rektangelet blir størst mulig.
>
> ![Rektangel innskrevet i likebeint rettvinklet trekant](/img/user/_resources/1p-h23-2-5.jpeg){width=50%}

Martin og Maria diskuterer hvordan de skal komme i gang, og vurderer ulike strategier.

>[!blue-box] Martin
>Skal vi begynne med å prøve oss litt fram? Vi lager en oversikt som viser arealet av ulike rektangler.

>[!green-box] Maria
>Ja, det kan vi gjøre. Vi kan starte med å velge $x = 1$. Da blir $y = 5$ fordi $y = 6 - x$

>[!blue-box] Martin
>Hvordan kan du se det? Og hvordan kan vi finne arealet dersom vi vet at $x = 1$ og $y = 5$?

>[!green-box] Maria
>Jeg kan vise deg det! Husk hva vi har lært om rette linjer.

>[!blue-box] Martin
>Jeg tror også vi bør sette opp et funksjonsuttrykk som viser arealet, og tegne en graf. Da kan vi bruke funksjonen til å vise at det vi kommer fram til når vi prøver oss fram, er riktig.

>[!oppgave]
>Ta utgangspunkt i samtalen mellom Martin og Maria, og løs oppgaven klassen har fått.

## Fasit

$P = (3, 3)$, maksimalt areal $= \underline{\underline{18}}$

## Løsningsforslag

**Steg 1: Finn likningen for linje BC**

Maria sier at $y = 6 - x$. Vi kan verifisere: linjen går gjennom $B(6, 0)$ og $C(0, 6)$.

Stigningstall: $\dfrac{6 - 0}{0 - 6} = -1$, og skjæring med $y$-aksen er $6$, så

$$y = -x + 6$$

Dermed: Velger vi et punkt $P$ med $x$-koordinat $x$, blir $y$-koordinaten $y = 6 - x$.

**Steg 2: Sett opp arealet**

Rektangelet er symmetrisk om $y$-aksen (trekanten er symmetrisk). Det betyr at:

- Bredde $= 2x$ (fra $-x$ til $x$ langs $x$-aksen)
- Høyde $= y = 6 - x$

Arealet blir:

$$A(x) = 2x \cdot (6 - x) = 12x - 2x^2$$

**Steg 3: Prøv deg fram (som Martin foreslår)**

| $x$ | $y = 6 - x$ | Bredde $= 2x$ | Areal $= 2x \cdot y$ |
|-----|-------------|---------------|----------------------|
| 1   | 5           | 2             | 10                   |
| 2   | 4           | 4             | 16                   |
| 3   | 3           | 6             | 18                   |
| 4   | 2           | 8             | 16                   |
| 5   | 1           | 10            | 10                   |

Tabellen viser at $x = 3$ gir størst areal.

**Steg 4: Tegn grafen i GeoGebra**

Vi setter inn $A(x) = 2x(6-x)$ i GeoGebra og ber programmet finne toppunktet:

![Graf av A(x) = 2x(6-x) med toppunkt B = (3, 18)](/img/user/_resources/1p-h23-2-5-graf.png){width=80%}

GeoGebra finner toppunktet $B = (3, 18)$, det vil si at $x = 3$ gir maksimalt areal.

**Steg 5: Finn koordinatene til P**

Når $x = 3$:

$$y = 6 - 3 = 3$$

Koordinatene til $P$ er $(3, 3)$, og det maksimale arealet er $A(3) = 2 \cdot 3 \cdot 3 = \underline{\underline{18}}$.