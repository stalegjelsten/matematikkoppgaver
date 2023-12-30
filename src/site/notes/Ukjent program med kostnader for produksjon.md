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

<p><span>Oppgaven er hentet fra eksamen S1 V23 del 1 oppgave 5</span></p><h3><span>Tilfeldige oppgaver i samme fag</span></h3><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Billetter til fotballkamp.md" data-href="Billetter til fotballkamp.md" href="Billetter til fotballkamp.md" class="internal-link" target="_blank" rel="noopener">Billetter til fotballkamp (v23-2-5)</a></span></li><li><span><a data-tooltip-position="top" aria-label="Kuler i krukke hypergeometrisk.md" data-href="Kuler i krukke hypergeometrisk.md" href="Kuler i krukke hypergeometrisk.md" class="internal-link" target="_blank" rel="noopener">Kuler i krukke hypergeometrisk (v23-1-4)</a></span></li><li><span><a data-tooltip-position="top" aria-label="Grenseverdi når x går mot 2.md" data-href="Grenseverdi når x går mot 2.md" href="Grenseverdi når x går mot 2.md" class="internal-link" target="_blank" rel="noopener">Grenseverdi når x går mot 2 (v23-1-3)</a></span></li></ul></div><h3><span>Lignende oppgaver</span></h3><h4><span>Programmering</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">7</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Tolk og fiks program som finner bunnpunkt.md" data-href="Tolk og fiks program som finner bunnpunkt.md" href="Tolk og fiks program som finner bunnpunkt.md" class="internal-link" target="_blank" rel="noopener">Tolk og fiks program som finner bunnpunkt</a></span></td><td><span>r1</span></td><td><span>h23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Areal under graf med programmering.md" data-href="Areal under graf med programmering.md" href="Areal under graf med programmering.md" class="internal-link" target="_blank" rel="noopener">Areal under graf med programmering</a></span></td><td><span>1t</span></td><td><span>v23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Billetter til fotballkamp.md" data-href="Billetter til fotballkamp.md" href="Billetter til fotballkamp.md" class="internal-link" target="_blank" rel="noopener">Billetter til fotballkamp</a></span></td><td><span>s1</span></td><td><span>v23</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Simuler sannsynlighet for høyde over 175 cm.md" data-href="Simuler sannsynlighet for høyde over 175 cm.md" href="Simuler sannsynlighet for høyde over 175 cm.md" class="internal-link" target="_blank" rel="noopener">Simuler sannsynlighet for høyde over 175 cm</a></span></td><td><span>s2</span></td><td><span>e22</span></td><td><span>2-6</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" data-href="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" href="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" class="internal-link" target="_blank" rel="noopener">Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program del 1 S2.md" data-href="Ukjent program del 1 S2.md" href="Ukjent program del 1 S2.md" class="internal-link" target="_blank" rel="noopener">Ukjent program del 1 S2</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent programkode.md" data-href="Ukjent programkode.md" href="Ukjent programkode.md" class="internal-link" target="_blank" rel="noopener">Ukjent programkode</a></span></td><td><span>s2</span></td><td><span>e22</span></td><td><span>1-7</span></td></tr></tbody></table></div><h4><span>Økonomi</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">4</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Timelønn og lønnsvekst.md" data-href="Timelønn og lønnsvekst.md" href="Timelønn og lønnsvekst.md" class="internal-link" target="_blank" rel="noopener">Timelønn og lønnsvekst</a></span></td><td><span>s1</span></td><td><span>v23</span></td><td><span>2-1</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Argumenter for hvorfor sette grensekostnad lik grenseinntekt.md" data-href="Argumenter for hvorfor sette grensekostnad lik grenseinntekt.md" href="Argumenter for hvorfor sette grensekostnad lik grenseinntekt.md" class="internal-link" target="_blank" rel="noopener">Argumenter for hvorfor sette grensekostnad lik grenseinntekt</a></span></td><td><span>s2</span></td><td><span>e22</span></td><td><span>1-6</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Enhetskostnader fra graf.md" data-href="Enhetskostnader fra graf.md" href="Enhetskostnader fra graf.md" class="internal-link" target="_blank" rel="noopener">Enhetskostnader fra graf</a></span></td><td><span>s2</span></td><td><span>h14</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Grensekostnader fra graf v23.md" data-href="Grensekostnader fra graf v23.md" href="Grensekostnader fra graf v23.md" class="internal-link" target="_blank" rel="noopener">Grensekostnader fra graf v23</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>1-2</span></td></tr></tbody></table></div>
