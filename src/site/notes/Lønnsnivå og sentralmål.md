---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"dg-publish":true,"temaer":["statistikk","gjennomsnitt","median","sentralmål","grupperte data"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":5}],"poeng":null,"title":"Lønnsnivå og sentralmål","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3,"permalink":"/lonnsniva-og-sentralmal/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"temaer":["statistikk","gjennomsnitt","median","sentralmål","grupperte data"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":5,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":5},{"fag":"2p","del":2,"oppgave":5}],"poeng":null,"title":"Lønnsnivå og sentralmål","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":3,"permalink":"/lonnsniva-og-sentralmal/"}}
---


# Lønnsnivå og sentralmål

En bedrift vil gi ut en brosjyre som blant annet skal vise lønnsnivået til de ansatte. Nedenfor ser du en oversikt som viser årslønnen til de ansatte i bedriften.

|   Årslønn (i tusen kroner)   | Frekvens |
| :--------------------------: | :------: |
|  $\langle 250 - 350\rangle$  |    8     |
|  $\langle 350 - 450\rangle$  |    42    |
|  $\langle 450 - 500\rangle$  |    40    |
|  $\langle 500 - 550\rangle$  |    20    |
|  $\langle 550 - 600\rangle$  |    15    |
|  $\langle 600 - 650\rangle$  |    3     |
|  $\langle 650 - 750\rangle$  |    2     |
| $\langle 750 - 1000\rangle$  |    1     |
| $\langle 1000 - 2000\rangle$ |    15    |

Ledelsen diskuterer hvilket sentralmål som er best egnet til å beskrive bedriftens lønnsnivå.

>[!oppgave]
>a) Gjør nødvendige forutsetninger og bestem gjennomsnittet og medianen for datamaterialet.
>b) Argumenter for hvilket sentralmål du mener er best egnet til å beskrive bedriftens lønnsnivå.

## Fasit

a) Gjennomsnitt $\approx 575\,000 \, \mathrm{kr}$, median $\approx 479\,000 \, \mathrm{kr}$
b) Medianen er mest egnet (gjennomsnittet trekkes opp av noen svært høye lønninger).

## Løsningsforslag

### 2-5a

Vi regner med at alle i hvert intervall tjener midtpunktet i intervallet (midtpunktmetoden).

| Intervall (tusen kr)        | Midtpunkt | Frekvens | Midtpunkt × frekvens |
| :-------------------------: | :-------: | :------: | :------------------: |
| $\langle 250 - 350 \rangle$ | 300       | 8        | 2 400                |
| $\langle 350 - 450 \rangle$ | 400       | 42       | 16 800               |
| $\langle 450 - 500 \rangle$ | 475       | 40       | 19 000               |
| $\langle 500 - 550 \rangle$ | 525       | 20       | 10 500               |
| $\langle 550 - 600 \rangle$ | 575       | 15       | 8 625                |
| $\langle 600 - 650 \rangle$ | 625       | 3        | 1 875                |
| $\langle 650 - 750 \rangle$ | 700       | 2        | 1 400                |
| $\langle 750 - 1000 \rangle$| 875       | 1        | 875                  |
| $\langle 1000 - 2000 \rangle$| 1 500    | 15       | 22 500               |
| **Totalt**                  |           | **146**  | **83 975**           |

$$
\bar{x} = \frac{83\,975}{146} \approx 575 \text{ (tusen kr)}
$$

**Gjennomsnittslønnen er omtrent $\underline{\underline{575\,000 \, \mathrm{kr}}}$.**

Medianen er den midterste verdien. Med 146 ansatte er medianen mellom den 73. og 74. verdien. Kumulativ telling:

- Etter $\langle 250 - 350 \rangle$: 8 ansatte totalt
- Etter $\langle 350 - 450 \rangle$: 50 ansatte totalt
- Etter $\langle 450 - 500 \rangle$: 90 ansatte totalt ← her ligger den 73. og 74. verdien

Vi interpolerer i intervallet $\langle 450, 500 \rangle$:

$$
450 + \frac{73{,}5 - 50}{40} \cdot 50 = 450 + \frac{23{,}5}{40} \cdot 50 \approx 450 + 29 = 479 \text{ (tusen kr)}
$$

**Medianlønnen er omtrent $\underline{\underline{479\,000 \, \mathrm{kr}}}$.**

### 2-5b

Bedriften har 15 ansatte med årslønn mellom 1 000 000 og 2 000 000 kr. Disse trekker gjennomsnittet kraftig opp, til 575 000 kr, mens de fleste ansatte tjener i området 350 000–500 000 kr.

Medianen på 479 000 kr påvirkes ikke av de høye lønningene, og gir et mer representativt bilde av hva en typisk ansatt tjener.

**Medianen er det mest egnede sentralmålet for å beskrive bedriftens lønnsnivå.**
