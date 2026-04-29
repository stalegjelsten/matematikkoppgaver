---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["lån","programmering"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":7}],"poeng":null,"title":"Sofies lån og nedbetalingsprogram","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/sofies-lan-og-nedbetalingsprogram/","permalink":"/sofies-lan-og-nedbetalingsprogram/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"temaer":["lån","programmering"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":7}],"poeng":null,"title":"Sofies lån og nedbetalingsprogram","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Sofies lån og nedbetalingsprogram

Sofie har tatt opp et forbrukslån på 100 000 kroner. Rentefoten er 2 % per måned. Hun skal betale ned på lånet hver måned, og terminbeløpet skal være 6378 kroner.

Sofie vil ha en nedbetalingsplan for lånet og har laget programmet nedenfor.

```python ln
# Definerer variabler
restlån = 100000
terminbeløp = 6378
rentefot = 2

# Overskrifter
print("Måned        Terminbeløp    Renter         Avdrag         Restlån")

for måned in range(1, 5):

    renter = 0
    avdrag = 0
    restlån = 0

    # Skriver ut i fem kolonner ved å bruke tabulatorer sep = "\t\t"
    # Runder av beløpene til to desimaler ved å bruke round
    print(måned,
        round(terminbeløp, 2),
        round(renter, 2),
        round(avdrag, 2),
        round(restlån, 2), sep = "\t\t")
```

Nedenfor ser du resultatet hun får når hun kjører programmet.

| Måned | Terminbeløp | Renter | Avdrag | Restlån |
|---|---|---|---|---|
| 1 | 6378 | 0 | 0 | 0 |
| 2 | 6378 | 0 | 0 | 0 |
| 3 | 6378 | 0 | 0 | 0 |
| 4 | 6378 | 0 | 0 | 0 |

>[!oppgave]
>a) Du skal hjelpe Sofie med å endre programmet. Sett inn formler i stedet for tallet null i linje 12, 13 og 14, og gjør endringer slik at hele den riktige nedbetalingsplanen skrives ut.
>b) Hvor mange måneder vil det ta før lånet er betalt ned?

## Fasit

a) Se løsningsforslag for rettet program.
b) $20$ måneder

## Løsningsforslag

### a

Problemet med Sofies program er at linje 12, 13 og 14 setter renter, avdrag og restlån til 0 i stedet for å beregne dem. Vi må også endre løkken slik at den kjører til lånet er nedbetalt.

De tre linjene skal erstattes med:

- **Linje 12:** `renter = restlån * rentefot / 100`
- **Linje 13:** `avdrag = terminbeløp - renter`
- **Linje 14:** `restlån = restlån - avdrag`

I tillegg endrer vi løkken fra `for måned in range(1, 5)` til en `while`-løkke som kjører så lenge restlånet er positivt. Det rettede programmet blir:

```python ln
# Definerer variabler
restlån = 100000
terminbeløp = 6378
rentefot = 2

# Overskrifter
print("Måned        Terminbeløp    Renter         Avdrag         Restlån")

måned = 0
while restlån > 0:
    måned = måned + 1

    renter = restlån * rentefot / 100
    avdrag = terminbeløp - renter
    restlån = restlån - avdrag

    # Skriver ut i fem kolonner ved å bruke tabulatorer sep = "\t\t"
    # Runder av beløpene til to desimaler ved å bruke round
    print(måned,
        round(terminbeløp, 2),
        round(renter, 2),
        round(avdrag, 2),
        round(restlån, 2), sep = "\t\t")
```

### b

Når vi kjører det rettede programmet, får vi denne nedbetalingsplanen:

| Måned | Terminbeløp | Renter | Avdrag | Restlån |
| :---: | ---: | ---: | ---: | ---: |
| 1 | 6 378,00 | 2 000,00 | 4 378,00 | 95 622,00 |
| 2 | 6 378,00 | 1 912,44 | 4 465,56 | 91 156,44 |
| 3 | 6 378,00 | 1 823,13 | 4 554,87 | 86 601,57 |
| 4 | 6 378,00 | 1 732,03 | 4 645,97 | 81 955,60 |
| 5 | 6 378,00 | 1 639,11 | 4 738,89 | 77 216,71 |
| 6 | 6 378,00 | 1 544,33 | 4 833,67 | 72 383,05 |
| 7 | 6 378,00 | 1 447,66 | 4 930,34 | 67 452,71 |
| 8 | 6 378,00 | 1 349,05 | 5 028,95 | 62 423,76 |
| 9 | 6 378,00 | 1 248,48 | 5 129,52 | 57 294,24 |
| 10 | 6 378,00 | 1 145,88 | 5 232,12 | 52 062,12 |
| 11 | 6 378,00 | 1 041,24 | 5 336,76 | 46 725,36 |
| 12 | 6 378,00 | 934,51 | 5 443,49 | 41 281,87 |
| 13 | 6 378,00 | 825,64 | 5 552,36 | 35 729,51 |
| 14 | 6 378,00 | 714,59 | 5 663,41 | 30 066,10 |
| 15 | 6 378,00 | 601,32 | 5 776,68 | 24 289,42 |
| 16 | 6 378,00 | 485,79 | 5 892,21 | 18 397,21 |
| 17 | 6 378,00 | 367,94 | 6 010,06 | 12 387,15 |
| 18 | 6 378,00 | 247,74 | 6 130,26 | 6 256,90 |
| 19 | 6 378,00 | 125,14 | 6 252,86 | 4,03 |
| 20 | 4,12 | 0,08 | 4,03 | 0,00 |

**Det tar $\underline{\underline{20 \text{ måneder}}}$ før lånet er betalt ned.**
