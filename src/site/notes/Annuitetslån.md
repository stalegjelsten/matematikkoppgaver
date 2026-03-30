---
{"tags":["lån","rekker","oppgave","s2","del2","excel"],"temaer":["lån","rekker","excel"],"aliases":null,"del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"fag":["s2"],"eksamen":"v23","dg-publish":true,"title":"Annuitetslån","date":"2023-05-29","modified":"2023-05-29","permalink":"/annuitetslan/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["lån","rekker","oppgave","s2","del2","excel"],"temaer":["lån","rekker","excel"],"aliases":null,"del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"fag":["s2"],"eksamen":"v23","title":"Annuitetslån","date":"2023-05-29","modified":"2023-05-29"}}
---

# Annuitetslån

Anders tok opp et annuitetslån på 150 000 kroner for å kjøpe en bil. Lånet hadde en nedbetalingstid på 36 måneder med én termin per måned. Det hadde en månedlig rentesats på 0,49 prosent.

> [!oppgave]
> a) Hva var terminbeløpet?

Like etter at Anders hadde betalt inn terminbeløp 24 ble bilen totalskadet, og forsikringsselskapet betalte ut 55000 kroner.

> [!oppgave]
>  b) Var dette nok til å betale ned restlånet?

## Fasit

a) 4555,14 kr
b) Ja

## Løsningsforslag

### 2-1a
Annuitetslån har faste terminbeløp slik at lånebeløpet er lik produktet terminfaktoren multiplisert med terminbeløpet: $L=F\cdot T$.
Vi kan beregne terminfaktoren $F$ ved:

$$
\begin{aligned}
F &= \frac{1-\frac{1}{v^n}}{v - 1}\\
F &= \frac{1-\frac{1}{1,0049^{36}}}{1,0049 - 1}\\
F &= 32,93\\
\end{aligned}
$$

Og terminbeløpet blir da

$$
\begin{aligned}
L &= F\cdot T\\
T &= \frac{L}{F} = \frac{150\,000}{32,93}=\underline{\underline{4555,14}}
\end{aligned}
$$

**Terminbeløpet er 4555,14 kr.**

### 2-1b
Jeg bruker en ferdig regnearkmodell jeg hadde liggende til å løse denne oppgaven. Fra regnearket ser jeg at restlånet *før* 25. innbetaling er 52 959,79 kr. **Dermed vil erstatningen fra forsikringsselskapet dekke restlånet** (gitt at han betaler restlånet med en gang han får erstatningen). Se utklippet under.

![](/img/user/_resources/s2-v23-del2-oppg1a1.png)

![](/img/user/_resources/s2-v23-del2-oppg1a2.png)
