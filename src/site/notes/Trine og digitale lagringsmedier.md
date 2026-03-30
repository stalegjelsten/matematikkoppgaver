---
{"tags":["oppgave"],"date":"2026-03-16","modified":"2026-03-16","aliases":[],"dg-publish":true,"temaer":["bits og bytes","store tall"],"fag":["1p-y el"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Trine og digitale lagringsmedier","status":3,"source":null,"todo":null,"permalink":"/trine-og-digitale-lagringsmedier/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-16","modified":"2026-03-16","aliases":[],"temaer":["bits og bytes","store tall"],"fag":["1p-y el"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Trine og digitale lagringsmedier","status":3,"source":null,"todo":null}}
---


# Trine og digitale lagringsmedier

Trine undersøker utviklingen av ulike lagringsmedier for digitale data. I tabellen nedenfor vises fire ulike fysiske lagringsmedier: diskett, CD, Blu-ray og minnepenn.

| Lagringsmedium | Diskett | CD | Blu-ray | Minnepenn |
|---|---|---|---|---|
| Lagringskapasitet | 1,44 MB | 650 MB | 46,6 GB | 1 TB |

Formelen for overføringshastighet er

$$\text{overføringshastighet} = \frac{\text{datamengde}}{\text{tid}}$$

Husk: $1 \mathrm{~B} = 8 \mathrm{~bit}$

>[!blue-box] Trine
>Hvor mange disketter er det plass til på en CD-plate?
>
>Hvor mange Blu-ray-plater er det plass til på en minnepinne på 1 TB?
>
>Hvor stor overføringshastighet i Mbit/s må et bredbånd ha dersom jeg skal laste ned all musikken fra en CD på 20 sekunder?
>
>Hvor lang tid vil den samme nedlastingen ta dersom bredbåndslinjen har en hastighet på 1000 Mbit/s?

På Spotify kan man strømme musikk via internett med en bitrate mellom 24 og 320 kbit/s.

På en CD-plate er det plass til 650 MB data, som gir 74 minutter med musikk.

>[!blue-box] Trine
>Hvordan er bitraten på musikk fra en CD-plate sammenliknet med bitraten på musikk som strømmes via internett?

>[!oppgave]
>Gjør beregninger og vurderinger og finn ut mest mulig om det Trine lurer på.

## Fasit

451 disketter på CD · 21 Blu-ray på 1 TB · 260 Mbit/s · 5,2 s · CD-bitrate 1171 kbit/s (høyere enn Spotify)

## Løsningsforslag

**Hvor mange disketter er det plass til på en CD?**

$$\frac{650 \, \mathrm{MB}}{1{,}44 \, \mathrm{MB}} \approx \underline{\underline{451 \text{ disketter}}}$$

**Hvor mange Blu-ray-plater er det plass til på en minnepinne på 1 TB?**

1 TB = 1000 GB:
$$\frac{1000 \, \mathrm{GB}}{46{,}6 \, \mathrm{GB}} \approx 21{,}5 \implies \underline{\underline{21 \text{ hele Blu-ray-plater}}}$$

**Overføringshastighet for å laste ned en CD på 20 sekunder:**

Datamengden er $650 \, \mathrm{MB} = 650 \cdot 8 \, \mathrm{Mbit} = 5200 \, \mathrm{Mbit}$.
$$\text{overføringshastighet} = \frac{5200 \, \mathrm{Mbit}}{20 \, \mathrm{s}} = \underline{\underline{260 \, \mathrm{Mbit/s}}}$$

**Tid med bredbånd på 1000 Mbit/s:**

$$t = \frac{5200 \, \mathrm{Mbit}}{1000 \, \mathrm{Mbit/s}} = \underline{\underline{5{,}2 \, \mathrm{s}}}$$

**Bitraten på musikk fra en CD-plate:**

$650 \, \mathrm{MB} = 5200 \, \mathrm{Mbit}$ for 74 minutter $= 74 \cdot 60 = 4440$ sekunder:
$$\text{bitrate} = \frac{5200 \, \mathrm{Mbit}}{4440 \, \mathrm{s}} \approx 1{,}171 \, \mathrm{Mbit/s} = \underline{\underline{1171 \, \mathrm{kbit/s}}}$$

**Sammenlikning:** Bitraten på en CD er omtrent 1171 kbit/s, som er langt høyere enn maksimal Spotify-bitrate på 320 kbit/s. En CD har altså vesentlig høyere lydkvalitet enn musikk strømmet via Spotify.
