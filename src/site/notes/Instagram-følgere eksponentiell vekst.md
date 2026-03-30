---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["eksponentiell vekst","vekstfaktor","prosentvis vekst"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":4},{"fag":"2p","del":2,"oppgave":1}],"title":"Instagram-følgere eksponentiell vekst","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/instagram-folgere-eksponentiell-vekst/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["eksponentiell vekst","vekstfaktor","prosentvis vekst"],"fag":["2p-y","2p"],"eksamen":"v24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":4},{"fag":"2p","del":2,"oppgave":1}],"title":"Instagram-følgere eksponentiell vekst","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Instagram-følgere eksponentiell vekst

Tuva har en profil på Instagram. Tabellen nedenfor viser hvor mange følgere hun har hatt de siste seks månedene.

| Måned   | November | Desember | Januar | Februar |  Mars  | April  |
| ------- | :------: | :------: | :----: | :-----: | :----: | :----: |
| Følgere |   5335   |   7035   |  9467  | 12 780  | 17 208 | 24 008 |

Tuva har laget en modell som viser at antallet følgere har økt med ca. 35 % hver måned i perioden november 2023–april 2024.

>[!oppgave]
>a) La $x$ være antall måneder etter november 2023, og vis hvordan Tuva kan ha laget denne modellen.

For å få antall følgere til å øke raskere vil Tuva gjøre noen endringer i innholdet hun legger ut. Hun har som mål at økningen i antall følgere ikke skal fortsette å være på 35 % etter april 2024, men øke med 5 prosentpoeng hver måned.

>[!oppgave]
>b) Vis at antall følgere vil være 33 611 i mai og 48 736 i juni dersom Tuva klarer å nå målet sitt for disse månedene.
>c) Hvor mange prosent flere følgere vil Tuva ha i august 2024 dersom hun klarer å nå det nye målet sitt for hver måned, sammenliknet med om økningen fortsetter å være på 35 % hver måned?

## Fasit

a) $f(x) = 5244 \cdot 1{,}35^x$
c) 43,6 % flere følgere

## Løsningsforslag

### 2-4a
Vi lar $x$ være antall måneder etter november og bruker regresjon i GeoGebra. Siden modellen skal stige med 35 % per måned bør vi velge eksponentiell modell, siden disse vokser med en fast prosent.

![Regresjon i GeoGebra av Tuvas følgere](/img/user/_resources/2py-v24-2-4a.png)

**Modellen $f(x)=5244 \cdot 1{,}35^{x}$ er en modell som vokser med 35 % per måned, og som kan være modellen Tuva har brukt.**

### 2-4b
Tuva har 24 008 følgere i april. Hvis økningen i mai skal være 35 % + 5 prosentpoeng så har hun $24008 \cdot 1{,}40=33 \,611$ følgere i mai.

I juni øker økningen med enda 5 prosentpoeng til 45 %. Antall følgere i juni vil derfor være $33 \,611 \cdot 1{,}45=48\, 736$.

### 2-4c
Vi kan bruke modellen $f(x)=5244 \cdot 1{,}35^{x}$ til å beregne hvor mange følgere hun har i august med 35 % økning. August tilsvarer $x=9$
$$
f(9)=5244 \cdot 1{,}35^9=78 \,922
$$

Dersom Tuva klarer å holde målet sitt med 5 prosentpoeng økning vil hun i juli ha
$48 \, 736 \cdot 1{,}50=73 \, 104$ følgere, og i august $73 \, 104 \cdot 1{,}55=113 \, 311$ følgere.

Vi finner den prosentvise forskjellen
$$
\frac{113 \,311-78\,922}{78\,922} = \frac{34 \,389}{78\,922}=43{,}6 \,\%
$$
**Tuva vil ha 43,6 % flere følgere i august om hun klarer å nå det nye målet sitt.**
