---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/knut-og-sabrina-tallfolge/","dg-publish":true,"eksamen":"v24","fag":["1p"],"kategori":3,"lf-source-claude":true,"modified":"2026-03-28","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["mønstre","rekursiv sammenheng","argumentasjon"],"title":"Knut og Sabrina tallfølge","vanskegrad":3,"beskrivelse":"Beskrive rekursivt mønster i tallfølgen og argumentere for at alle ledd unntatt det første er oddetall.","todo":[],"permalink":"/knut-og-sabrina-tallfolge/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1p"],"kategori":3,"lf-source-claude":true,"modified":"2026-03-28","oppgave":5,"oppgavenummer":[{"del":2,"fag":"1p","oppgave":5}],"poeng":4,"source":null,"status":1,"tags":["oppgave"],"temaer":["mønstre","rekursiv sammenheng","argumentasjon"],"title":"Knut og Sabrina tallfølge","vanskegrad":3,"beskrivelse":"Beskrive rekursivt mønster i tallfølgen og argumentere for at alle ledd unntatt det første er oddetall.","todo":[]}}
---


# Knut og Sabrina tallfølge

Knut og Sabrina jobber med tallfølgen

$$2, 5, 11, 23, 47, \ldots$$

>[!blue-box] Knut
>Jeg tror jeg har oppdaget et mønster, og jeg er nokså sikker på at alle leddene bortsett fra det første er oddetall.

>[!green-box] Sabrina
>Har du funnet en formel som kan gi deg et hvilket som helst ledd i tallfølgen?

>[!blue-box] Knut
>Nei, det klarte jeg ikke, men jeg er nokså sikker på at jeg har funnet et mønster som gjør at jeg alltid kan finne det neste leddet i tallfølgen. Jeg er helt sikker på at det bare blir oddetall videre.

>[!oppgave]
>Ta utgangspunkt i det Knut og Sabrina sier og
>
>- beskriv et mønster for tallfølgen
>- argumenter for at alle leddene i tallfølgen bortsett fra det første er oddetall

## Fasit

Mønster: $a_{n+1} = 2 \cdot a_n + 1$. Neste ledd er **95**.

Alle ledd fra og med $a_2$ er oddetall fordi $2 \cdot (\text{oddetall}) + 1$ alltid gir et oddetall.

## Løsningsforslag

### Mønster

Vi undersøker forholdet mellom påfølgende ledd:

$$5 = 2 \cdot 2 + 1, \quad 11 = 2 \cdot 5 + 1, \quad 23 = 2 \cdot 11 + 1, \quad 47 = 2 \cdot 23 + 1$$

Mønsteret er at hvert ledd er det dobbelte av det forrige, pluss 1. Skrevet som en rekursiv formel:

$$a_{n+1} = 2 \cdot a_n + 1$$

Det neste leddet etter 47 er:

$$2 \cdot 47 + 1 = \mathbf{\underline{\underline{95}}}$$

### Argumentasjon for at alle ledd bortsett fra det første er oddetall

Det andre leddet er $a_2 = 5$, som er et oddetall.

Vi antar at ett ledd $a_n$ er et oddetall. Så ser vi på neste ledd:

$$a_{n+1} = 2 \cdot a_n + 1$$

Siden $a_n$ er et oddetall, er $2 \cdot a_n$ et partall (et partall ganger hva som helst er partall). Et partall pluss 1 er alltid et oddetall. Derfor er $a_{n+1}$ også et oddetall.

Siden $a_2 = 5$ er et oddetall, og hvert ledd gir et oddetall som neste ledd, vil $a_3, a_4, a_5, \ldots$ alle være oddetall.

**Alle ledd i tallfølgen bortsett fra det første er oddetall.**
