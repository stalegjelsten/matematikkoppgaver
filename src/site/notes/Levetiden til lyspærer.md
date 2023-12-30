---
{"tags":["oppgave"],"temaer":["kontinuerlige sannsynlighetsfordelinger","forventningsverdi","sannsynlighet"],"alias":[null],"del":2,"oppgave":2,"fag":"s2","eksamen":"e22","dg-publish":true,"title":"Levetiden til lyspærer","date":"2023-06-06","modified":"2023-06-06","todo":["fasit","løsningsforslag"],"permalink":"/levetiden-til-lyspaerer/","dgPassFrontmatter":true}
---


# Levetiden til lyspærer
Levetiden $T$ i timer til en tilfeldig lyspære av en bestemt type er en stokastisk variabel. Det viser seg at 

$$
P(T\leq t)= \int_{-\infty}^{t} f(x) \, \mathrm{d}x 
$$

der tetthetsfunksjonen $f$ er gitt ved

$$
f(t)=\begin{cases}
k\cdot e^{-0{,}005t} &,\quad t>0 \\
0 &,\quad t\leq 0
\end{cases}
$$

> a) Vis at $k=0{,}005$.

> b) Hva er sannsynligheten for at lyspærens levetid er mer enn 400 timer?

Forventningsverdien $\mu$ til en kontinuerlig stokastisk variabel med tetthetsfunksjonen $f$ er gitt ved

$$
\mu=\int_{-\infty}^{\infty} x\cdot f(x) \, \mathrm{d}x 
$$

> c) Bestem forventningsverdien til $T$.

>[!question]- Fasit
> 
>

## Relatert
<p><span>Oppgaven er hentet fra eksamen S2 E22 del 2 oppgave 2</span></p>

### Lignende oppgaver i samme fag
| Tema                                    | Oppgave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| forventningsverdi                       | <ul><li>[[Forventingsverdi og varians fra sannsynlighetsfordeling 2.md\\|Forventingsverdi og varians fra sannsynlighetsfordeling S2 S2-V23-1-3]]</li><li>[[Forventningsverdi og varians fra sannsynlighetsfordeling.md\\|Forventningsverdi og varians fra diskret sannsynlighetsfordeling S2-E22-1-4]]</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| kontinuerlige sannsynlighetsfordelinger | <ul><li>[[Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md\\|Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole S2-V23-2-5]]</li><li>[[Levetiden til normalfordelte batterier.md\\|Levetiden til normalfordelte batterier S2-V23-1-6]]</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| sannsynlighet                           | <ul><li>[[Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md\\|Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole S2-V23-2-5]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li><li>[[Normalfordelte hjortebukker.md\\|Normalfordelte hjortebukker S2-V15-1-7]]</li><li>[[Normalfordelt intelligens.md\\|Normalfordelt intelligens S2-E15-1-8]]</li><li>[[Lykkehjulet.md\\|Lykkehjulet S2-H22-1-8]]</li><li>[[Levetiden til normalfordelte batterier.md\\|Levetiden til normalfordelte batterier S2-V23-1-6]]</li><li>[[Forventingsverdi og varians fra sannsynlighetsfordeling 2.md\\|Forventingsverdi og varians fra sannsynlighetsfordeling S2 S2-V23-1-3]]</li><li>[[Forventningsverdi og varians fra sannsynlighetsfordeling.md\\|Forventningsverdi og varians fra diskret sannsynlighetsfordeling S2-E22-1-4]]</li></ul> |

{ .block-language-dataview}

### Lignende oppgaver i andre fag
| Tema          | Oppgave                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sannsynlighet | <ul><li>[[Sannsynligheter ved lottospill.md\\|Sannsynligheter ved lottospill S1-V23-2-2c]]</li><li>[[Kuler i krukke hypergeometrisk.md\\|Kuler i krukke hypergeometrisk S1-V23-1-4]]</li><li>[[Billetter til fotballkamp.md\\|Billetter til fotballkamp S1-V23-2-5]]</li></ul> |

{ .block-language-dataview}
