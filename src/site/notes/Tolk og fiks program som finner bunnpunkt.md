---
{"tags":["oppgave"],"temaer":["programmering","derivasjon"],"aliases":[],"del":1,"oppgave":4,"fag":["r1"],"eksamen":"h23","dg-publish":true,"title":"Tolk og fiks program som finner bunnpunkt","date":"2023-11-15","modified":"2023-11-15","permalink":"/tolk-og-fiks-program-som-finner-bunnpunkt/","dgPassFrontmatter":true}
---


# Tolk og fiks program som finner bunnpunkt

Funksjonen $f$ er gitt ved

$$
f(x)=2x^{2}-9x-2
$$

Egil ønsker å lage et program som regner ut koordinatene til bunnpunktet på grafen til $f$. Han har skrevet koden nedenfor.

```python
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 1
    
print("Bunnpunktet er", (a, f(a)))
```

Programmet gir utskriften `Bunnpunktet er (3, -11)`

> **a)** Forklar hvilken strategi Egil har brukt.

Svaret han får, er ikke riktig.

> **b)** Foreslå en endring i koden som vil gi Egil et riktigere svar.

>[!question]- Fasit
> b) Endre `a = a + 1` til `a = a + 0.01`
>

## Relatert
<p><span>Oppgaven er hentet fra eksamen R1 H23 del 1 oppgave 4</span></p>

### Lignende oppgaver i samme fag
| Tema       | Oppgave                                                               |
| ---------- | --------------------------------------------------------------------- |
| derivasjon | <ul><li>[[Deriver x ln(x).md\\|Deriver x ln(x) R1-H23-1-1]]</li></ul> |

{ .block-language-dataview}

### Lignende oppgaver i andre fag
| Tema          | Oppgave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| derivasjon    | <ul><li>[[Skisser grafen ut fra den deriverte v2023.md\\|Skisser grafen ut fra den deriverte v23 1T-V23-1-5]]</li><li>[[Regresjon på størrelsen av det norske musikkstrømmemarkedet.md\\|Regresjon på størrelsen av det norske musikkstrømmemarkedet S2, R2-V23-2-2]]</li><li>[[Grenseverdi når x går mot 2.md\\|Grenseverdi når x går mot 2 S1-V23-1-3]]</li><li>[[Gjennomsnittstemperatur på Svalbard og den deriverte.md\\|Gjennomsnittstemperatur på Svalbard og den deriverte 1T-V23-2-1]]</li><li>[[Grensekostnader fra graf v23.md\\|Grensekostnader fra graf v23 S2-V23-1-2]]</li><li>[[Deriver logaritmefunksjon.md\\|Deriver logaritmefunksjon S1-V23-1-2]]</li><li>[[Testfile.md\\|Testfile 1T-\--\--\-]]</li></ul>                              |
| programmering | <ul><li>[[Ukjent programkode.md\\|Ukjent programkode S2-E22-1-7]]</li><li>[[Ukjent program med kostnader for produksjon.md\\|Ukjent program med kostnader for produksjon S1-V23-1-5]]</li><li>[[Ukjent program del 1 S2.md\\|Ukjent program del 1 S2 S2-V23-1-4]]</li><li>[[Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md\\|Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole S2-V23-2-5]]</li><li>[[Simuler sannsynlighet for høyde over 175 cm.md\\|Simuler sannsynlighet for høyde over 175 cm S2-E22-2-6]]</li><li>[[Billetter til fotballkamp.md\\|Billetter til fotballkamp S1-V23-2-5]]</li><li>[[Areal under graf med programmering.md\\|Areal under graf med programmering 1T-V23-2-4]]</li></ul> |

{ .block-language-dataview}
