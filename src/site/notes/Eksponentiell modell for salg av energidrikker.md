---
{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"dg-publish":true,"temaer":["regresjon","eksponentiell vekst","prosentvis vekst"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6}],"poeng":null,"title":"Eksponentiell modell for salg av energidrikker","status":0,"lf-source-claude":true,"kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme eksponentiell regresjonsmodell $E(x)=a\\cdot b^{x}$, tolke konstantene og sammenlikne prosentvis vekst fra 2021 til 2022 med modellens vekstfaktor.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Eksponentiell regresjon på tabellverdiene."}],"source":null,"todo":null,"permalink":"/eksponentiell-modell-for-salg-av-energidrikker/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-26","modified":"2026-04-23","aliases":[],"temaer":["regresjon","eksponentiell vekst","prosentvis vekst"],"fag":["1p"],"eksamen":"v23","del":2,"oppgave":6,"oppgavenummer":[{"fag":"1p","del":2,"oppgave":6}],"poeng":null,"title":"Eksponentiell modell for salg av energidrikker","status":0,"lf-source-claude":true,"kategori":2,"vanskegrad":2,"beskrivelse":"Bestemme eksponentiell regresjonsmodell $E(x)=a\\cdot b^{x}$, tolke konstantene og sammenlikne prosentvis vekst fra 2021 til 2022 med modellens vekstfaktor.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Eksponentiell regresjon på tabellverdiene."}],"source":null,"todo":null}}
---


# Eksponentiell modell for salg av energidrikker

Tabellen nedenfor viser salg av energidrikker i Norge hvert år fra 2015 til 2021.

| Årstall            | 2015  | 2016  | 2017  | 2018  | 2019  | 2020  | 2021  |
| :----------------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Salg (tusen liter) | $18\,899$ | $21\,664$ | $25\,381$ | $31\,385$ | $41\,142$ | $55\,497$ | $67\,997$ |

La $x$ være antall år etter 2015.

>[!oppgave]
>a) Lag en modell på formen
>$$E(x) = a \cdot b^{x}$$
>som passer godt med tallene i tabellen.
>b) Hva forteller tallene $a$ og $b$ i modellen du fant i oppgave a)?

I 2022 var salget av energidrikk 73 109 tusen liter.

>[!oppgave]
>c) Hvor stor var økningen i salget av energidrikk i prosent fra 2021 til 2022? Vurder hvordan dette passer med modellen i oppgave a).

## Fasit

a) $\underline{\underline{E(x) = 17\,396 \cdot 1{,}248^x}}$

b) $a \approx 17\,396$: modellens estimat for salget i 2015 (tusen liter). $b \approx 1{,}248$: salget øker med ca. $\underline{\underline{24{,}8 \,\%}}$ per år ifølge modellen.

c) Faktisk økning fra 2021 til 2022: $\underline{\underline{\approx 7{,}5 \,\%}}$. Modellen passer dårlig for 2022 — veksten har avtatt kraftig.

## Løsningsforslag

### a

Vi legger inn datapunktene i GeoGebra og bruker eksponentiell regresjon med kommandoen `RegEksp`.

La $x$ = antall år etter 2015 og $y$ = salg i tusen liter.

Datapunktene er plottet som røde punkter i grafen under. GeoGebra gir regresjonsmodellen

$$\mathbf{E(x) = 17\,396 \cdot 1{,}248^x}$$

![Graf med datapunkter og regresjonsmodellen E(x)](/img/user/_resources/1p-v23-2-6-graf.png){width=90%}

Kurven passer godt med datapunktene fra 2015 til 2021 (se grafen).

### b

- $a \approx 17\,396$ er modellens verdi for $E(0)$, det vil si estimert salg i 2015: ca. $17\,400$ tusen liter. (Det faktiske salget i 2015 var $18\,899$ tusen liter — $a$ er altså et estimat, ikke den eksakte verdien.)

- $b \approx 1{,}248$ er vekstfaktoren. Det betyr at salget ifølge modellen **øker med ca. $24{,}8 \,\%$ per år**.

### c

Vi beregner faktisk prosentvis økning fra 2021 til 2022:

$$\frac{73\,109 - 67\,997}{67\,997} \cdot 100 \,\% \approx \frac{5\,112}{67\,997} \cdot 100 \,\% \approx 7{,}5 \,\%$$

**Den faktiske veksten fra 2021 til 2022 var altså ca. $7{,}5 \,\%$.**

Modellen vår anslår en vekst på ca. $24{,}8 \,\%$ per år. Det er langt mer enn den faktiske veksten på $7{,}5 \,\%$.

Vi kan også sammenligne modellens spådom for 2022 ($x = 7$) med det faktiske salget:

$$E(7) = 17\,396 \cdot 1{,}248^7 \approx 82\,000 \text{ tusen liter}$$

Faktisk salg i 2022 var $73\,109$ tusen liter (det grønne punktet `P2022` i grafen). Modellen overestimerer altså salget i 2022 med ca. 9 000 tusen liter.

**Modellen passer dårlig for 2022.** Veksten i salget har avtatt betydelig — fra rundt $25 \,\%$ per år (2015–2021) til bare $7{,}5 \,\%$ fra 2021 til 2022. Den eksponentielle modellen er best egnet for perioden den er basert på (2015–2021), men overestimerer kraftig når veksten bremser opp.
