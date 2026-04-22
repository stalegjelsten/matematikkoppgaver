---
{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["figurtall","mønstre"],"fag":["1p"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":6}],"poeng":2,"title":"Figurtall med grønne kvadrater","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Telle og finne eksplisitt formel $F_n = n^2 + 2n + 1$ for figurtall bygget av tre deler.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Telle kvadrater i figur 5 ved å dele figuren i kvadrat, høyre side og undre del."}],"dg-permalink":"/figurtall-med-gronne-kvadrater/","permalink":"/figurtall-med-gronne-kvadrater/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-21","modified":"2026-03-26","aliases":[],"temaer":["figurtall","mønstre"],"fag":["1p"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":1,"oppgave":6}],"poeng":2,"title":"Figurtall med grønne kvadrater","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Telle og finne eksplisitt formel $F_n = n^2 + 2n + 1$ for figurtall bygget av tre deler.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Telle kvadrater i figur 5 ved å dele figuren i kvadrat, høyre side og undre del."}]}}
---


# Figurtall med grønne kvadrater

![Tre figurer satt sammen av grønne kvadrater](/img/user/_resources/1p-v25-1-6.jpeg){width=60%}

Ovenfor ser du tre figurer. Figurene er satt sammen av små grønne kvadrater. Tenk deg at du skal fortsette å lage figurer etter samme mønster.

>[!oppgave]
>a) Hvor mange små grønne kvadrater vil det være i figur 5?
>b) Lag en formel for antallet små grønne kvadrater i figur $n$.

## Fasit

a) 36
b) $F_{n}=n^{2}+2n+1$

## Løsningsforslag

### a

- Jeg ser at kvadratet i toppen vil ha $5\cdot5=25$ små grønne kvadrater.
- Jeg ser at delen på høyre side vil bestå av 5 kvadrater
- Jeg ser at delen nede til venstre vil bestå av 6 kvadrater

**Det er $25+5+6=\underline{\underline{ 36 }}$ kvadrater i figur 5.**

### b
Jeg deler opp figuren i tre deler, se figuren

![Oppdeling av figurtall](/img/user/_resources/1p-v25-1-6-losn.png){width=50%}

Jeg ser at kvadratet har størrelse $\textcolor{maroon}{n^{2}}$, den høyre siden har lengde $\textcolor{tomato}{n}$ og den siste delen har lengde $\textcolor{seagreen}{n+1}$. Antall kvadrater er summen av disse 3 delene.
$$
F_{n}=\textcolor{maroon}{n^{2}}+\textcolor{tomato}{n}+\textcolor{seagreen}{n+1}=\underline{\underline{ n^{2}+2n+1 }}
$$
