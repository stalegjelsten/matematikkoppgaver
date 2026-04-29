---
{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"dg-publish":true,"temaer":["prosentregning","vekstfaktor","geometrisk vekst","argumentasjon"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":3,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":3},{"fag":"2p","del":2,"oppgave":3}],"poeng":null,"title":"Prisvekst og prisfall sammenligning","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":1,"kategori":3,"vanskegrad":2,"beskrivelse":"Sammenligne $1{,}07^3$ og $1/0{,}93^3$ for å vurdere om prosentvis økning og nedgang gir samme pris over tre måneder.","dg-permalink":"/prisvekst-og-prisfall-sammenligning/","lf-source-claude":true,"permalink":"/prisvekst-og-prisfall-sammenligning/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-23","modified":"2023-05-23","aliases":[],"temaer":["prosentregning","vekstfaktor","geometrisk vekst","argumentasjon"],"fag":["2p-y","2p"],"eksamen":"v23","del":2,"oppgave":3,"oppgavenummer":[{"fag":"2p-y","del":2,"oppgave":3},{"fag":"2p","del":2,"oppgave":3}],"poeng":null,"title":"Prisvekst og prisfall sammenligning","source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"status":1,"kategori":3,"vanskegrad":2,"beskrivelse":"Sammenligne $1{,}07^3$ og $1/0{,}93^3$ for å vurdere om prosentvis økning og nedgang gir samme pris over tre måneder.","lf-source-claude":true}}
---


# Prisvekst og prisfall sammenligning

Malin og Gunnvor arbeider med en oppgave. De har fått opplysningene nedenfor.

- I mai kostet to varer, A og B, like mye.
- Prisen for vare A har økt med 7 % hver måned siden januar, og vi antar at den vil fortsette å øke med 7 % hver måned framover.
- Prisen for vare B har gått ned med 7 % hver måned siden januar, og vi antar at den vil fortsette å gå ned med 7 % hver måned framover.

Malin påstår at dette betyr at vare A vil koste det samme om tre måneder som vare B kostet for tre måneder siden. Gunnvor er ikke enig.

Gjør beregninger og undersøk om Malins påstand er riktig.

## Fasit

Malins påstand er feil. Vare A i august: $P \cdot 1{,}07^3 \approx 1{,}225P$, vare B i februar: $P / 0{,}93^3 \approx 1{,}243P$.

## Løsningsforslag

La prisen for begge varer i mai være $P$.

**Vare A i august** (tre måneder etter mai):

$$
P \cdot 1{,}07^3 = P \cdot 1{,}225
$$

**Vare B i februar** (tre måneder før mai): vi går tre måneder bakover fra mai. Siden B synker med 7 % per måned, betyr å gå bakover i tid at vi deler på $0{,}93$ per måned:

$$
\frac{P}{0{,}93^3} = P \cdot \frac{1}{0{,}8044} \approx P \cdot 1{,}243
$$

Vi sammenligner:

$$
1{,}07^3 \approx 1{,}225 \qquad \text{og} \qquad \frac{1}{0{,}93^3} \approx 1{,}243
$$

Disse er ikke like: $1{,}225 \neq 1{,}243$.

**Malins påstand er $\underline{\underline{\text{ikke riktig}}}$.** Vare A vil koste ca. 22,5 % mer enn maipris i august, mens vare B kostet ca. 24,3 % mer enn maipris i februar – de er ikke like.
