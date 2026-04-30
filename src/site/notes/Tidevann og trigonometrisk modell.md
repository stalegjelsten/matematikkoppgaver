---
{"aliases":[],"date":"2023-11-20","del":2,"dg-permalink":"/tidevann-og-trigonometrisk-modell/","dg-publish":true,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":1}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["trigonometri","modellering","derivasjon"],"title":"Tidevann og trigonometrisk modell","todo":[],"permalink":"/tidevann-og-trigonometrisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":2,"eksamen":"h23","fag":["r2"],"lf-source-claude":true,"modified":"2026-04-01","oppgave":1,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":1}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["trigonometri","modellering","derivasjon"],"title":"Tidevann og trigonometrisk modell","todo":[]}}
---


# Tidevann og trigonometrisk modell

Tabellen nedenfor viser vannstanden (tidevannshøyden) ved Stord verft i Sunnhordland, for noen tidspunkter 24. april 2023.

> [!tip] Tidevann
> Tidevann er de periodiske endringene i havnivået som oppstår som et resultat av gravitasjonskreftene som månen og solen virker på jorden med.

| Antall timer etter midnatt | 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 |
|---|---|---|---|---|---|---|---|---|---|---|
| Vannstand (cm) | 99,6 | 119 | 94,3 | 60,5 | 53,4 | 76,0 | 96,7 | 115 | 99,9 | 68,1 |

En oljeplattform skal slepes ut fra verftet dagen etter. Dette må gjøres når vannstanden er mer enn 90 cm.

>[!oppgave]
>a) Lag en modell $f$ som du kan bruke til å bestemme vannstanden ved verftet i den aktuelle perioden.
>b) Når vil vannstanden øke raskest den 25. april, ifølge modellen?

Det vil ta 2 timer å slepe ut oljeplattformen.

>[!oppgave]
>c) Ved hvilket klokkeslett kan de senest starte med å slepe ut plattformen?

## Fasit

a) $f(t) = 31{,}04 \cdot \sin(0{,}5144t + 0{,}1898) + 83{,}59$

b) **kl. 00:04 og kl. 12:16** den 25. april

c) Senest kl. **15:59** (≈ kl. 16:00)

## Løsningsforslag

### a

Vi legger inn tabellverdiene i GeoGebra CAS og bruker `TrigReg` til å finne en sinusmodell. Alternativt kan vi bruke de forhåndsregnede parameterne fra regresjonen direkte:

$$f(t) = 31{,}04 \cdot \sin(0{,}5144t + 0{,}1898) + 83{,}59$$

Her er $t$ antall timer etter midnatt 24. april, og $f(t)$ er vannstanden i cm.

Modellen har periode $T = \dfrac{2\pi}{0{,}5144} \approx 12{,}2 \, \mathrm{timer}$, som er typisk for semidiurnalt tidevann (to høyvann og to lavvann per døgn).

**$\underline{\underline{f(t) = 31{,}04 \cdot \sin(0{,}5144t + 0{,}1898) + 83{,}59}}$**

### b

Vannstanden øker raskest når den deriverte $f'(t)$ er størst.

Vi deriverer $f$:

$$f'(t) = 31{,}04 \cdot 0{,}5144 \cdot \cos(0{,}5144t + 0{,}1898) \approx 15{,}967 \cdot \cos(0{,}5144t + 0{,}1898)$$

Denne er størst når $\cos(0{,}5144t + 0{,}1898) = 1$, det vil si når

$$0{,}5144t + 0{,}1898 = 2\pi n, \quad n \in \mathbb{Z}$$

$$t = \frac{2\pi n - 0{,}1898}{0{,}5144}$$

Den 25. april svarer til $t \in [24, 48]$. Vi setter inn $n = 2$ og $n = 3$:

$$n = 2: \quad t = \frac{4\pi - 0{,}1898}{0{,}5144} \approx 24{,}06 \, \text{(dvs. kl. 00:04)}$$

$$n = 3: \quad t = \frac{6\pi - 0{,}1898}{0{,}5144} \approx 36{,}27 \, \text{(dvs. kl. 12:16)}$$

Ifølge modellen øker vannstanden raskest den 25. april kl. **$\underline{\underline{00{:}04}}$** og kl. **$\underline{\underline{12{:}16}}$**.

### c

Vi må finne et 2-timers tidsvindu der $f(t) > 90 \, \mathrm{cm}$ gjennom hele perioden.

Vi løser $f(t) = 90$ for $t \in [24, 48]$ numerisk i GeoGebra CAS (`NLøs`):

![GeoGebra CAS: f(t)=90 og derivert](/img/user/_resources/r2-h23-2-1-tidevann.png)

CAS gir fire løsninger:

| $t$ (timer) | Klokkeslett 25/4 |
|-------------|-----------------|
| $t \approx 24{,}46$ | 00:28 |
| $t \approx 29{,}76$ | 05:46 |
| $t \approx 36{,}68$ | 12:41 |
| $t \approx 41{,}98$ | 17:59 |

Dette gir to vinduer der $f(t) > 90 \, \mathrm{cm}$:

- **Vindu 1:** kl. 00:28 – 05:46 (varighet $\approx 5{,}3 \, \mathrm{timer}$) → senest start kl. 03:46
- **Vindu 2:** kl. 12:41 – 17:59 (varighet $\approx 5{,}3 \, \mathrm{timer}$) → senest start kl. 15:59

Det siste mulige starttidspunktet på 25. april er i vindu 2:

$$t_{\text{senest}} = 41{,}98 - 2 = 39{,}98 \, \text{timer etter midnatt 24/4}$$

$$\Rightarrow \quad 39{,}98 - 24 \approx 15{,}98 \, \text{timer etter midnatt 25/4} \approx \text{kl. } 15{:}59$$

De kan senest starte å slepe ut oljeplattformen **$\underline{\underline{\text{ca. kl. } 16{:}00}}$** den 25. april.