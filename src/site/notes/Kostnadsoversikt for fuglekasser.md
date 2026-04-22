---
{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"dg-publish":true,"temaer":["excel","økonomi"],"fag":["1p-y ba"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y ba","del":2,"oppgave":2}],"title":"Kostnadsoversikt for fuglekasser","source":null,"todo":null,"status":1,"lf-source-claude":true,"dg-permalink":"/kostnadsoversikt-for-fuglekasser/","permalink":"/kostnadsoversikt-for-fuglekasser/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-13","modified":"2026-03-13","aliases":[],"temaer":["excel","økonomi"],"fag":["1p-y ba"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y ba","del":2,"oppgave":2}],"title":"Kostnadsoversikt for fuglekasser","source":null,"todo":null,"status":1,"lf-source-claude":true}}
---


# Kostnadsoversikt for fuglekasser

En ungdomsbedrift lager og selger ulike ting.  
I starten av året kjøpte de inn materiell til 20 fuglekasser.  
Tabellen viser en oversikt over materiell og utstyr som er kjøpt inn til fuglekassene.

| Varer             | Pris per enhet uten mva. | Antall |
| :---------------- | :----------------------: | :----: |
| Plank             |          23 kr           |   20   |
| Håndsag           |          96 kr           |   5    |
| Meterstokk        |          68 kr           |   5    |
| Drill/boremaskin  |         1552 kr          |   1    |
| Bokser med skruer |          280 kr          |   4    |

Elevene i ungdomsbedriften gjør seg noen tanker og stiller noen spørsmål:  

> [!green-box]
>
> Vi lager et regneark som viser kostnader for innkjøpet til fuglekassene, men vi må huske å legge til $25 \,\% \mathrm{~mva}$.
> 
> Hva blir den totale kostnaden for innkjøpet?

> [!yellow-box]
>
> Hvor mye tjener eller taper vi hvis vi selger hver fuglekasse for 200 kroner?  
> Hva bør prisen være per fuglekasse hvis vi skal dekke inn alle utgiftene vi har hatt?

> [!blue-box]
>På slutten av året har bedriften en fortjeneste på 12 840 kroner. Vi vil utbetale $70 \%$ av dette beløpet til oss fire som jobber i bedriften.
>
>Cato har jobbet 25 timer, Bodil har jobbet 22 timer, Anita har jobbet 28 timer, og Johannes har jobbet 22 timer.
>
>Vi vil fordele pengene ut fra hvor mye hver av oss har jobbet. Hvor mye blir det til hver?

Gjør beregninger og vurderinger og finn ut mest mulig av det elevene lurer på.

## Fasit

Total kostnad med mva.: $4\,940 \, \mathrm{kr}$. Tap ved 200 kr/stk: $940 \, \mathrm{kr}$. Breakeven: $247 \, \mathrm{kr/stk}$. Utbetaling: Cato $2\,316 \, \mathrm{kr}$, Bodil $2\,039 \, \mathrm{kr}$, Anita $2\,594 \, \mathrm{kr}$, Johannes $2\,039 \, \mathrm{kr}$.

## Løsningsforslag

**Grønn boks – kostnadsoversikt med mva.**

Vi lager et regneark som beregner totalpris og totalpris inkludert 25 % mva. for hver vare:

![Regneark for kostnadsoversikt. Kilde: Udir](/img/user/_resources/1pyba-h24-2-2-regneark-udir.png){width=80%}

Formlene i regnearket:
- **Totalpris** (kolonne D): `=B3*C3` (pris per enhet × antall)
- **Totalpris inkl. mva.** (kolonne E): `=D3*1,25`
- **Sum** (rad 8): `=SUMMER(D3:D7)` og `=SUMMER(E3:E7)`

**Totalkostnad inkludert mva. er $\underline{\underline{4\,940 \, \mathrm{kr}}}$.**

---

**Gul boks – tjener eller taper ved 200 kr per fuglekasse?**

Totalinntekt ved salg: $200 \cdot 20 = 4\,000 \, \mathrm{kr}$

$$\text{Over/Underskudd} = 4\,000 - 4\,940 = -940 \, \mathrm{kr}$$

**De går med $\underline{\underline{940 \, \mathrm{kr}}}$ i underskudd** om fuglekassene selges for 200 kr per stk.

For at alle utgifter skal dekkes må hver kasse koste:

$$\frac{4\,940}{20} = \underline{\underline{247 \, \mathrm{kr}}}$$

---

**Blå boks – fordeling av fortjeneste etter arbeidstimer**

Beløpet som skal utbetales:

$$12\,840 \cdot 0{,}70 = 8\,988 \, \mathrm{kr}$$

Totalt antall timer: $25 + 22 + 28 + 22 = 97$ timer

Sats per time: $\dfrac{8\,988}{97} \approx 92{,}66 \, \mathrm{kr/time}$

Formel i regnearket: `=B31*(B$28/B$35)` (timer × utbetalingsbeløp / totaltimer)

| Navn | Timer | Lønn |
|---|:---:|---:|
| Cato | 25 | $2\,316{,}49 \, \mathrm{kr}$ |
| Bodil | 22 | $2\,038{,}52 \, \mathrm{kr}$ |
| Anita | 28 | $2\,594{,}47 \, \mathrm{kr}$ |
| Johannes | 22 | $2\,038{,}52 \, \mathrm{kr}$ |
| **Sum** | **97** | **$8\,988{,}00 \, \mathrm{kr}$** |
