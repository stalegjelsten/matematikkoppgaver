---
{"tags":["programmering","simulering","sannsynlighet","normalfordeling","kontinuerlige sannsynlighetsfordelinger","oppgave","s2","del2"],"temaer":["programmering","simulering","sannsynlighet","normalfordeling","kontinuerlige sannsynlighetsfordelinger"],"alias":[null],"del":2,"oppgave":5,"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole","date":"2023-05-27","modified":"2023-05-29","permalink":"/simulere-uttrekk-av-elevers-karakter-fra-tilfeldig-normalfordelt-skole/","dgPassFrontmatter":true}
---


# Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole
Forskere ønsker å undersøke matematikkunnskapene til elever i videregående skole. Elever fra tre store skoler skal være med i undersøkelsen.

Karakterstatistikk fra de tre skolene viser at karakterene i matematikk er tilnærmet normalfordelt. Tabellen nedenfor viser forventningsverdi og standardavvik for hver av de tre skolene.

| Skole   | Forventningsverdi | Standardavvik |
| ------- |:-----------------:|:-------------:|
| Skole A |        3,8        |      1,2      |
| Skole B |        3,4        |      1,4      |
| Skole C |        4,1        |      1,1      |

Forskerne skal trekke ut 20 elever. For hver elev de skal trekke, trekker de først en tilfeldig skole og deretter en tilfeldig elev fra den skolen.

>a) Lag et program som simulerer gjennomsnittskarakteren til 20 elever som er valgt ut på denne måten.

>b) Bruk simuleringer til å estimere sannsynligheten for at karaktersnittet til de 20 elevene er høyere enn 4. 

>[!question]- Fasit
>b) $P(X>4)\approx 0{,}205$
>[[Løsningsforslag/Løsningsforslag S2 eksamen V2023#Oppgave 2-5\|Løsningsforslag S2 eksamen V2023#Oppgave 2-5]]

## Relatert
<p><span><p>Oppgaven er hentet fra eksamen S2 V23 del 2 oppgave 5</p></span></p>

### Lignende oppgaver i samme fag
| Tema                                    | Oppgave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| kontinuerlige sannsynlighetsfordelinger | <ul><li>[[Levetiden til normalfordelte batterier.md\\|Levetiden til normalfordelte batterier S2-V23-1-6]]</li><li>[[Levetiden til lyspærer.md\\|Levetiden til lyspærer S2-E22-2-2]]</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| normalfordeling                         | <ul><li>[[Normalfordelte hjortebukker.md\\|Normalfordelte hjortebukker S2-V15-1-7]]</li><li>[[Normalfordelt intelligens.md\\|Normalfordelt intelligens S2-E15-1-8]]</li><li>[[Lykkehjulet.md\\|Lykkehjulet S2-H22-1-8]]</li><li>[[Levetiden til normalfordelte batterier.md\\|Levetiden til normalfordelte batterier S2-V23-1-6]]</li><li>[[Hypotesetest om russetid.md\\|Hypotesetest om russetid S2-V19-2-5]]</li><li>[[Forventningsverdi og varians fra graf av normalfordeling.md\\|Forventningsverdi og varians fra graf av normalfordeling S2-H13-1-2]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li></ul>                                                                                                                                                      |
| programmering                           | <ul><li>[[Ukjent program del 1 S2.md\\|Ukjent program del 1 S2 S2-V23-1-4]]</li><li>[[Ukjent programkode.md\\|Ukjent programkode S2-E22-1-7]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sannsynlighet                           | <ul><li>[[Normalfordelte hjortebukker.md\\|Normalfordelte hjortebukker S2-V15-1-7]]</li><li>[[Normalfordelt intelligens.md\\|Normalfordelt intelligens S2-E15-1-8]]</li><li>[[Lykkehjulet.md\\|Lykkehjulet S2-H22-1-8]]</li><li>[[Levetiden til normalfordelte batterier.md\\|Levetiden til normalfordelte batterier S2-V23-1-6]]</li><li>[[Forventningsverdi og varians fra sannsynlighetsfordeling.md\\|Forventningsverdi og varians fra diskret sannsynlighetsfordeling S2-E22-1-4]]</li><li>[[Forventingsverdi og varians fra sannsynlighetsfordeling 2.md\\|Forventingsverdi og varians fra sannsynlighetsfordeling S2 S2-V23-1-3]]</li><li>[[Levetiden til lyspærer.md\\|Levetiden til lyspærer S2-E22-2-2]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li></ul> |
| simulering                              | <ul><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

{ .block-language-dataview}

### Lignende oppgaver i andre fag
| Tema          | Oppgave                                                                                                                                                                                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| programmering | <ul><li>[[Ukjent program med kostnader for produksjon.md\\|Ukjent program med kostnader for produksjon S1-V23-1-5]]</li><li>[[Billetter til fotballkamp.md\\|Billetter til fotballkamp S1-V23-2-5]]</li><li>[[Areal under graf med programmering.md\\|Areal under graf med programmering 1T-V23-2-4]]</li></ul> |
| sannsynlighet | <ul><li>[[Sannsynligheter ved lottospill.md\\|Sannsynligheter ved lottospill S1-V23-2-2c]]</li><li>[[Kuler i krukke hypergeometrisk.md\\|Kuler i krukke hypergeometrisk S1-V23-1-4]]</li><li>[[Billetter til fotballkamp.md\\|Billetter til fotballkamp S1-V23-2-5]]</li></ul>                                  |

{ .block-language-dataview}
