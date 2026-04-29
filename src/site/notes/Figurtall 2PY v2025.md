---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":[],"dg-publish":true,"temaer":["figurtall"],"fag":["2p-y"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":6}],"title":"Figurtall 2PY v2025","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Telle grønne kvadrater, utlede formel for hvite $H_n=3n-2$, og formel for grønne via rektangelstørrelse minus hvite.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette opp systematisk tabell og lese av antall grønne kvadrater i figur 5."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finne formel for rektangelets areal $(2n+1)(n+2)$ og trekke fra $H_n$ for å få $G_n=2n^2+2n+4$."}],"dg-permalink":"/figurtall-2-py-v2025/","poeng":3,"permalink":"/figurtall-2-py-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2025-05-21","aliases":[],"temaer":["figurtall"],"fag":["2p-y"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":6}],"title":"Figurtall 2PY v2025","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Telle grønne kvadrater, utlede formel for hvite $H_n=3n-2$, og formel for grønne via rektangelstørrelse minus hvite.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Sette opp systematisk tabell og lese av antall grønne kvadrater i figur 5."},{"deloppgave":"c","kategori":3,"vanskegrad":3,"beskrivelse":"Finne formel for rektangelets areal $(2n+1)(n+2)$ og trekke fra $H_n$ for å få $G_n=2n^2+2n+4$."}],"poeng":3}}
---


# Figurtall 2PY v2025


![](/img/user/_resources/2py-v25-1-6-oppg.png)

Ovenfor ser du tre figurer. Figurene er satt sammen av små hvite og grønne kvadrater. Tenk deg at du skal fortsette å lage figurer etter samme mønster.

>[!oppgave]
> a) Hvor mange små grønne kvadrater vil det være i figur $5$?
> b) Lag en formel for antallet hvite kvadrater i figur $n$.  

## Fasit

a) $64$  
b) $H_n=3n-2$  
c) $G_n=2n^2+2n+4$

## Løsningsforslag

### a
>[!tip] Ulike måter å begrunne svaret på oppgave 1-6
>
>Her kan man tegne opp de neste kvadratene for å vise hvordan man finner svaret, eller så må man beskrive mønsteret eller finne formelen.
>
>Jeg velger å beskrive mønsteret ved å sette opp en oversikt.

Jeg ser at hele figuren er rektangler som øker med 2 i bredden og 1 i høyden for hver figur. De hvite feltene øker med 3 for hver figur. Jeg setter opp en oversikt.

| Figurnummer |  Antall totalt  | Antall hvite | Antall grønne |
| :---------: | :-------------: | :----------: | :-----------: |
|      1      |  $3 \cdot 3=9$  |      1       |       8       |
|      2      |  $5\cdot 4=20$  |      4       |      16       |
|      3      | $7 \cdot 5=35$  |      7       |      28       |
|      4      |  $9\cdot 6=54$  |      10      |      44       |
|      5      | $11 \cdot 7=77$ |      13      |      64       |

**Det er 64 grønne ruter i figur 5.**

### b
Antallet hvite kvadrater øker med 3 for hver figur, og det starter på 1. 

![Oppdeling av figur 3 i oppgave 1-6b](/img/user/_resources/2py-v25-1-6b.png){width=50% #fig:16b}

I figuren over har jeg delt opp figur nr 3 i 4 ulike deler. Jeg ser at vi har tre like deler med lengde 2 merket med lilla farge. Disse er altså 1 mindre enn figurtallet. I tillegg har vi en ekstra hvit rute som er fast i alle figurene, merket med rød farge. For figur 3 kunne vi altså skrevet opp antallet som $3 \cdot 2 + 1$ eller ved å bruke figurnummeret $\textcolor{seagreen}{3}$ kunne vi skrevet $3 \cdot (\textcolor{seagreen}{3}-1) + 1$. Et generelt uttrykk for hvite ruter i figur nummer $n$ blir derfor
$$
\underline{\underline{H_{n}=3 \cdot (n-1) + 1=3n-2}}
$$

### c
Jeg har allerede sett at det er mulig å finne størrelsen av hele rektangelet og trekke fra de hvite feltene for å finne ut hvor mange grønne ruter det er. Det store rektangelet øker med 2 i bredden og 1 i høyden, og vi ser at bredden er $2n+1$, mens høyden er $n+2$. Altså er antall ruter i hele rektangelet
$$
\begin{aligned}
\text{Antall ruter totalt} &= \left( 2n+1 \right) \cdot \left( n+2 \right)\\ &=2n \cdot n + 2n \cdot 2 + 1 \cdot n + 1 \cdot 2\\ &=2n^{2}+4n+n+2\\ &=2n^{2}+5n+2
\end{aligned}
$$
For å finne antallet grønne ruter så kan vi trekke fra antallet hvite ruter.
$$
\begin{aligned}
\text{Antall grønne} &= \text{Antall ruter totalt} - \text{Antall hvite} \\
&=\left(  2n^{2}+5n+2 \right) - \left( 3n-2 \right) \\
&= 2n^{2}+ 5n +2 -3n +2 \\
&= 2n^{2}+5n-3n+2+2\\
&= 2n^{2}+2n+4
\end{aligned}
$$
I figur nummer $n$ er antallet grønne kvadrater gitt ved:
$$
\underline{\underline{G_{n}=2n^{2}+2n+4}}
$$

![Oppdeling av figur 3 i oppgave 1-6c](/img/user/_resources/2py-v25-1-6-a.png){width=50%}

Vi kunne også funnet formelen for antallet grønne felter ved å dele opp de grønne feltene i mindre deler, se figuren.
