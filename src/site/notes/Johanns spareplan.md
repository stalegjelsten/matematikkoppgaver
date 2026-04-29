---
{"aliases":[],"date":"2025-11-25","del":1,"dg-permalink":"/johanns-spareplan/","dg-publish":true,"eksamen":"h25","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-24","oppgave":8,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":8}],"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","sparing"],"title":"Johanns spareplan","todo":[],"permalink":"/johanns-spareplan/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-11-25","del":1,"eksamen":"h25","fag":["2p"],"lf-source-claude":true,"modified":"2026-03-24","oppgave":8,"oppgavenummer":[{"del":1,"fag":"2p","oppgave":8}],"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering","sparing"],"title":"Johanns spareplan","todo":[]}}
---


# Johanns spareplan

Johann har arvet penger. Han har en plan og har laget programmet nedenfor.


```python ln
konto = 1500000
uttak = 120000
vf = 1.056
år = 0

while konto >= 120000:
	konto = konto * vf - uttak
	år = år + 1

print("Resultat:")
print(år)
print(konto)
```

```
Resultat:
22
11183.702579092205
```

>[!oppgave]
>Hva forteller programmet om planen til Johann?  
>Hva forteller verdiene som skrives ut når programmet kjøres?

## Fasit

Programmet simulerer at Johann tar ut $120\,000 \, \mathrm{kr}$ per år fra kontoen, med $5{,}6\,\%$ rente. Etter $\mathbf{22}$ år har han tatt ut siste gang og da er det ca. $\mathbf{11\,184} \, \mathrm{kr}$ igjen på kontoen.

## Løsningsforslag

Programmet simulerer Johann sin spareplan steg for steg. Vi leser av variablene:

- `konto = 1500000` — Johann starter med $1\,500\,000 \, \mathrm{kr}$ på konto
- `uttak = 120000` — han tar ut $120\,000 \, \mathrm{kr}$ hvert år
- `vf = 1.056` — kontoen har $5{,}6\,\%$ rente per år (vekstfaktor $1{,}056$)

Hver runde i løkken beregner ny kontosaldo etter ett år:

$$\text{konto} = \text{konto} \cdot 1{,}056 - 120\,000$$

Det vil si: kontoen vokser med rente, og deretter tas det ut $120\,000 \, \mathrm{kr}$.

Løkken kjører så lenge `konto >= 120000`, altså så lenge det er nok penger til å ta ut $120\,000 \, \mathrm{kr}$.

**Hva forteller de to verdiene som skrives ut?**

- `22` — Johann kan ta ut $120\,000 \, \mathrm{kr}$ i **22 år** før pengene er nesten oppbrukt
- `11183.70...` — Etter det 22. uttaket er det ca. $11\,184 \, \mathrm{kr}$ igjen på kontoen

**Svarsetning:** Programmet viser at Johann kan ta ut $120\,000 \, \mathrm{kr}$ per år i $\underline{\underline{22 \text{ år}}}$. Etter det 22. uttaket har han ca. $\underline{\underline{11\,184 \, \mathrm{kr}}}$ igjen på kontoen.