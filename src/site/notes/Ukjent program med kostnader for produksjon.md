---
{"tags":["oppgave","programmering","økonomi","s2","del1"],"temaer":["programmering","økonomi","vekstfart"],"alias":[null],"del":1,"oppgave":5,"fag":"s1","eksamen":"v23","dg-publish":true,"title":"Ukjent program med kostnader for produksjon","date":"2023-05-29","modified":"2023-05-29","permalink":"/ukjent-program-med-kostnader-for-produksjon/","dgPassFrontmatter":true}
---


# Ukjent program med kostnader for produksjon
For en bedrift er kostnaden $K$ i kroner ved produksjon av $x$ enheter per uke av en varetype gitt ved

$$
K(x)=0{,}2x^2+140x+7000
$$

Bedriften har laget følgende program.

```python
def K(x): 
	return 0.2*x**2 + 140*x + 7000

v = 260
h = 0.001
x = 0

while (K(x + h) - K(x))/h < v:
	x = x + 1

print(x)
```

Hva blir resultatet når programmet kjøres? Hva forteller dette svaret bedriften?

>[!question]- Fasit
> 300 fordi $K'(300) = 260$
>

## Relatert
<p><span>Oppgaven er hentet fra eksamen S1 V23 del 1 oppgave 5</span></p>

### Lignende oppgaver i samme fag
| Tema          | Oppgave                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| programmering | <ul><li>[[Billetter til fotballkamp.md\\|Billetter til fotballkamp S1-V23-2-5]]</li></ul> |
| økonomi       | <ul><li>[[Timelønn og lønnsvekst.md\\|Timelønn og lønnsvekst S1-V23-2-1]]</li></ul>       |

{ .block-language-dataview}

### Lignende oppgaver i andre fag
| Tema          | Oppgave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| programmering | <ul><li>[[Ukjent programkode.md\\|Ukjent programkode S2-E22-1-7]]</li><li>[[Tolk og fiks program som finner bunnpunkt.md\\|Tolk og fiks program som finner bunnpunkt R1-H23-1-4]]</li><li>[[Ukjent program del 1 S2.md\\|Ukjent program del 1 S2 S2-V23-1-4]]</li><li>[[Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md\\|Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole S2-V23-2-5]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li><li>[[Areal under graf med programmering.md\\|Areal under graf med programmering 1T-V23-2-4]]</li></ul> |
| økonomi       | <ul><li>[[Grensekostnader fra graf v23.md\\|Grensekostnader fra graf v23 S2-V23-1-2]]</li><li>[[Enhetskostnader fra graf.md\\|Enhetskostnader fra graf S2-H14-1-5]]</li><li>[[Argumenter for hvorfor sette grensekostnad lik grenseinntekt.md\\|Argumenter for hvorfor sette grensekostnad lik grenseinntekt S2-E22-1-6]]</li></ul>                                                                                                                                                                                                                                                                                                                                     |

{ .block-language-dataview}
