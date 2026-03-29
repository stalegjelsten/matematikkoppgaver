---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"dg-publish":true,"temaer":["lån","programmering"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":7}],"poeng":null,"title":"Sofies lån og nedbetalingsprogram","status":0,"source":null,"todo":["fasit","løsningsforslag"],"permalink":"/sofies-lan-og-nedbetalingsprogram/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2026-03-28","aliases":[],"temaer":["lån","programmering"],"fag":["2p"],"eksamen":"v23","del":2,"oppgave":7,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":7}],"poeng":null,"title":"Sofies lån og nedbetalingsprogram","status":0,"source":null,"todo":["fasit","løsningsforslag"]}}
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

>[!question]- Fasit
>
>[[Løsningsforslag 2P eksamen V2023#2-7\|Løsningsforslag 2P eksamen V2023#2-7]]
