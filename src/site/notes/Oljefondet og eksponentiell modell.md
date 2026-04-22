---
{"aliases":[],"date":"2025-05-19","del":2,"dg-permalink":"/oljefondet-og-eksponentiell-modell/","dg-publish":true,"eksamen":"v25","fag":["s1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6}],"poeng":6,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentiell vekst","modellering","gjennomsnittlig vekstfart"],"title":"Oljefondet og eksponentiell modell","todo":[],"permalink":"/oljefondet-og-eksponentiell-modell/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-19","del":2,"eksamen":"v25","fag":["s1"],"modified":"2026-03-26","oppgave":6,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":6}],"poeng":6,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentiell vekst","modellering","gjennomsnittlig vekstfart"],"title":"Oljefondet og eksponentiell modell","todo":[]}}
---


# Oljefondet og eksponentiell modell

Oljefondet (Statens pensjonsfond utland) ble opprettet etter at vi fant olje i Nordsjøen. Formålet med oljefondet er å sikre framtiden i norsk økonomi.

Figuren nedenfor viser utviklingen av oljefondet fra og med 1998 til og med 2024.

![Utvikling av oljefondet 1998–2024](/img/user/_resources/s1-v25-2-6.jpeg){width=60%}

>[!oppgave]
>a) Lag en modell $O(t)$ som tilnærmet viser utviklingen av den totale verdien av oljefondet i hele perioden. Husk å begrunne valg av modell.

I resten av oppgaven skal du bruke funksjonen $V$ gitt ved

$$V(t) = 330 \cdot 1{,}1787^{t}$$

som modell for den totale verdien av oljefondet i milliarder kroner $t$ år etter 1998.

>[!oppgave]
>b) Bestem $V(20)$ og $V'(20)$. Gi en praktisk tolkning av svarene.
>c) Sammenlign den gjennomsnittlige vekstfarten i intervallene $[0, 10]$ og $[16, 26]$.

## Fasit

a) $O(t) = 330 \cdot 1{,}18^{t}$ (eksponentiell modell, se begrunnelse)

b) $\underline{\underline{V(20) \approx 8843 \, \mathrm{mrd\,kr}}}$, $\underline{\underline{V'(20) \approx 1454 \, \mathrm{mrd\,kr/år}}}$

c) Gjennomsnittlig vekstfart $[0, 10]$: $\approx 138 \, \mathrm{mrd\,kr/år}$. Gjennomsnittlig vekstfart $[16, 26]$: $\approx 1913 \, \mathrm{mrd\,kr/år}$. Vekstfarten er ca. 14 ganger så stor i den siste perioden.

## Løsningsforslag

### a

Grafen viser en kurve som vokser stadig raskere — verdien mangedobles over perioden og øker prosentvis omtrent like mye hvert år. Det tyder på eksponentiell vekst, ikke lineær.

Vi avleser to punkter fra grafen:

$$t = 0 \text{ (1998): } O \approx 330 \text{ mrd kr}$$
$$t = 26 \text{ (2024): } O \approx 19\,700 \text{ mrd kr}$$

En eksponentiell modell har formen $O(t) = a \cdot b^{t}$. Vi setter $a = 330$ (startverdi) og bestemmer $b$ fra

$$330 \cdot b^{26} = 19\,700 \implies b = \left(\frac{19\,700}{330}\right)^{1/26} \approx 1{,}17$$

**Modell: $\underline{\underline{O(t) \approx 330 \cdot 1{,}18^{t}}}$**

Modellen passer godt med den gitte $V(t) = 330 \cdot 1{,}1787^{t}$.

### b

Vi bruker GeoGebra CAS med $V(t) = 330 \cdot 1{,}1787^{t}$:

![GeoGebra CAS — V(20) og V'(20)](/img/user/_resources/s1-v25-2-6-cas.png)

$$V(20) = 330 \cdot 1{,}1787^{20} \approx \underline{\underline{8843 \, \mathrm{mrd\,kr}}}$$

$$V'(t) = 330 \cdot 1{,}1787^{t} \cdot \ln(1{,}1787) \approx 54{,}26 \cdot e^{0{,}16441t}$$

$$V'(20) \approx \underline{\underline{1454 \, \mathrm{mrd\,kr/år}}}$$

**Tolkning:** I år 2018 ($t = 20$) var oljefondet verdt ca. $8843$ milliarder kroner, og verdien økte med ca. $1454$ milliarder kroner per år.

### c

Vi beregner gjennomsnittlig vekstfart i hvert intervall (se CAS-utklippet over):

$$\frac{V(10) - V(0)}{10} \approx \frac{1708 - 330}{10} \approx \underline{\underline{138 \, \mathrm{mrd\,kr/år}}}$$

$$\frac{V(26) - V(16)}{10} \approx \frac{19\,700 - 4581}{10} \approx \underline{\underline{1913 \, \mathrm{mrd\,kr/år}}}$$

Forholdet mellom vekstfartene:

$$\frac{1913}{138} \approx \underline{\underline{13{,}9}}$$

Vekstfarten i perioden $[16, 26]$ er ca. **14 ganger** så stor som i $[0, 10]$. Dette er som forventet for en eksponentiell funksjon — prosentveksten er konstant, men siden grunnlaget er mye større mot slutten, øker den absolutte veksten kraftig.