---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["figurtall"],"fag":["2p-y"],"eksamen":"v24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4}],"title":"Figurtall 2P-Y v2024","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/figurtall-2-p-y-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["figurtall"],"fag":["2p-y"],"eksamen":"v24","del":1,"oppgave":4,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":4}],"title":"Figurtall 2P-Y v2024","status":3,"source":null,"todo":null,"disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Figurtall 2P-Y v2024

![2py-v24-1-4.jpeg](/img/user/_resources/2py-v24-1-4.jpeg)

Ovenfor ser du tre figurer. Figurene er satt sammen av små sirkler. Tenk deg at du skal fortsette å lage figurer etter samme mønster.

>[!oppgave]
>a) Hvor mange små sirkler vil det være i figur 4 og i figur 9?
>b) Beskriv mønsteret, og bestem et uttrykk for antallet små sirkler i figur $n$.

## Fasit

a) Figur 4: 49 sirkler, figur 9: 199 sirkler
b) $2(n+1)^2 - 1$

## Løsningsforslag

### 1-4a
Jeg fortsetter mønsteret, som jeg ser består av to kvadrater hvor kvadratene overlapper med en sirkel.

Det er $5\cdot 5 + 5 \cdot 5 -1=49$ sirkler i figur 4.
Det er $10 \cdot 10 + 10\cdot 10 -1 =199$ sirkler i figur 9.

### 1-4b
Hver figur består av to kvadrater, hvor det er én mer sirkel i sidekanten enn figurnummeret. I figur $n$ har hvert kvadrat $(n+1)^{2}$ sirkler. Vi har to slike kvadrater slik at formelen blir $(n+1)^{2} \cdot 2$ også må vi huske å trekke fra 1 siden det er en sirkel som overlapper. Det ferdige uttrykket blir
$$
2(n+1)^{2}-1
$$
