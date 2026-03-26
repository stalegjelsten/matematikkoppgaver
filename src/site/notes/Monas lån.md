---
{"tags":["oppgave"],"aliases":null,"dg-publish":true,"temaer":["programmering","lån"],"fag":["s2"],"eksamen":null,"del":2,"oppgave":"7","oppgavenummer":[{"fag":"s2","del":2,"oppgave":7}],"title":"Monas lån","source":"Mønster S2 terminprøve v23","date":"2024-01-01","modified":"2024-01-01","todo":["løsningsforslag"],"permalink":"/monas-lan/","dgPassFrontmatter":true}
---


# Monas lån

Mona låner 1 000 000 kroner i banken til 3 % rente per år. Hun får følgende nedbetalingsplan av banken:

| Restlån start | Terminbeløp | Rente | Avdrag | Restlån slutt |
| -------------:| -----------:| -----:| ------:| -------------:|
|       1000000 |      117230 | 30000 |  87230 |        912770 |
|        912770 |      117230 | 27383 |  89847 |        822922 |
|        822922 |      117230 | 24688 |  92543 |        730379 |
|        730379 |      117230 | 21911 |  95319 |        635060 |
|        635060 |      117230 | 19052 |  98179 |        536881 |
|        536881 |      117230 | 16106 | 101124 |        435757 |
|        435757 |      117230 | 13073 | 104158 |        331600 |
|        331600 |      117230 |  9948 | 107283 |        224317 |
|        224317 |      117230 |  6730 | 110501 |        113816 |
|        113816 |      117230 |  3414 | 113816 |             0 |

>[!oppgave]
> a) Hva slags lån er dette, og hva kjennetegner et slikt lån?

Mona vil utforske lånet og begynner på en kode i Python som skal lage nedbetalingsplanen:

```python
lån = 1000000
rente = 0.03
antall_terminer = 10
terminbeløp = 117230.5
print('Restlån start    Terminbeløp   Rente   Avdrag  Restlån slutt')
for i in range(antall_terminer):
	restlån_start =
	rentebeløp = 
	avdrag = 
	lån = 
	print(f'{restlån_start:14.0f} {terminbeløp:12.0f}'
		  f' {rentebeløp:8.0f} {avdrag:8.0f} {lån: 12.0f}')
```

> [!tip] Skrive lange tekststrenger i Python
> Den siste linja i koden er brutt opp over to linjer. Legg merke til at parentesen etter print først avsluttes på neste linje. 
>
> For at dette skal fungere så er det viktig at man avslutter og starter hver linje med anførselstegn. Dersom man vil bruke variabler inni strengene må vi skrive *f* foran for å gjøre om strengen til en f-streng.

>[!oppgave]
> b) Hjelp Mona med hva som skal stå i linjene 7, 8, 9 og 10.
> c) Hvor mye skal Mona betale inn i renter totalt i hele nedbetalingsperioden?

>[!question]- Fasit
> a) Alle terminebeløpene er like.  
> **Dette er et annuitetslån.**
> b) ```python
>     restlån_start = lån
>     rentebeløp = restlån_start * rente
>     avdrag = terminbeløp - rentebeløp
>     lån = restlån_start - avdrag
>     ```
> c) Vi kan legge sammen alle rentebeløpene, eller vi kan regne ut
> $$10 \cdot 117\,230 - 1\,000\,000=1\,172\,300 - 1\,000\,000=\underline{\underline{ 172\,300 \mathrm{~kr} }}$$
