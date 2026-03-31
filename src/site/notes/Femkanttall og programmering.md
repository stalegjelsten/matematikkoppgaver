---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["figurtall","programmering"],"fag":["1t","1p"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":6},{"fag":"1p","del":1,"oppgave":6}],"title":"Femkanttall og programmering","status":3,"source":null,"todo":null,"poeng":3,"permalink":"/femkanttall-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["figurtall","programmering"],"fag":["1t","1p"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":6},{"fag":"1p","del":1,"oppgave":6}],"title":"Femkanttall og programmering","status":3,"source":null,"todo":null,"poeng":3,"permalink":"/femkanttall-og-programmering/"}}
---


# Femkanttall og programmering

![De 4 første femkanttallene](/img/user/_resources/1t-h25-1-6.jpeg)

Siri arbeider med femkanttall. Hun har oppdaget en sammenheng og laget programmet nedenfor.

```python ln
tall = 1
differanse = 4

while tall <= 60:
	print(tall)
	tall = tall + differanse
	differanse = differanse + 3
```


>[!oppgave]
>Hvilke tall vil bli skrevet ut når programmet kjøres? Gjør rede for sammenhengen Siri har oppdaget.

## Fasit


## Løsningsforslag

Variabelen `tall` inneholder antall sirkler i et femkanttall slik `tall` utvikler seg slik tabellen viser.

| $n$ | tall | differanse |     |
| :-: | :--: | :--------: | --- |
|  1  |  1   |     4      |     |
|  2  |  5   |     7      |     |
|  3  |  12  |     10     |     |
|  4  |  22  |     13     |     |
|  5  |  35  |     16     |     |
|  6  |  51  |     19     |     |
|  7  |  70  |     22     |     |

**Tallene 1, 5, 12, 22, 35, 51 og 70 skrives ut av programmet.** 

**Siri har oppdaget at antallet nye sirkler i femkanttalene (de som er tegnet oppe mot høyre i figuren) øker med 3 for hvert femkanttall.**
