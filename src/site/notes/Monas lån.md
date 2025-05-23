---
{"tags":["oppgave"],"aliases":null,"dg-publish":true,"temaer":["programmering","lån"],"fag":["s2"],"eksamen":null,"del":2,"oppgave":"7","title":"Monas lån","source":"Mønster S2 terminprøve v23","date":"2024-01-01","modified":"2024-01-01","todo":["løsningsforslag"],"permalink":"/monas-lan/","dgPassFrontmatter":true}
---


# Monas lån
<p><span><em>Oppgaven er hentet fra Mønster S2 terminprøve v23.</em></span></p>
<p><span><em>Oppgaven er hentet fra Mønster S2 terminprøve v23.</em></span></p>
Mona låner 1 000 000 kroner i banken til 3 % rente per år. Hun får følgende nedbetalingsplan av banken:

| Restlån start | Terminbeløp | Rente | Avdrag | Restlån slutt |
| -------------:| -----------:| -----:| ------:| -------------:|
|       1000000 |      117230 | 30000 |  87230 |        912770 |
|        912770 |      117230 | 27383 |  89847 |        822922 |
|        822922 |      117230 | 24688 |  92543 |        730379 |
|        730379 |      117230 | 21911 |  95319 |        635060 |
|        635060 |      117230 | 19052 |  98179 |        536881 |
|        536881 |      117230 | 16106 | 101124 |        435757 |
|        435757 |      117230 | 13073 | 104158 |        331600 |
|        331600 |      117230 |  9948 | 107283 |        224317 |
|        224317 |      117230 |  6730 | 110501 |        113816 |
|        113816 |      117230 |  3414 | 113816 |             0 |

> a) Hva slags lån er dette, og hva kjennetegner et slikt lån?

Mona vil utforske lånet og begynner på en kode i Python som skal lage nedbetalingsplanen:

```python
lån = 1000000
rente = 0.03
antall_terminer = 10
terminbeløp = 117230.5
print('Restlån start    Terminbeløp   Rente   Avdrag  Restlån slutt')
for i in range(antall_terminer):
	restlån_start =
	rentebeløp = 
	avdrag = 
	lån = 
	print(f'{restlån_start:14.0f} {terminbeløp:12.0f}'
		  f' {rentebeløp:8.0f} {avdrag:8.0f} {lån: 12.0f}')
```

> [!tip] Skrive lange tekststrenger i Python
> Den siste linja i koden er brutt opp over to linjer. Legg merke til at parentesen etter print først avsluttes på neste linje. 
>
> For at dette skal fungere så er det viktig at man avslutter og starter hver linje med anførselstegn. Dersom man vil bruke variabler inni strengene må vi skrive *f* foran for å gjøre om strengen til en f-streng.

> b) Hjelp Mona med hva som skal stå i linjene 7, 8, 9 og 10.
> c) Hvor mye skal Mona betale inn i renter totalt i hele nedbetalingsperioden?

>[!question]- Fasit
> a) Annuitetslån. Like terminbeløp.
> b) 
> ```python
> restlån_start = lån
> rentebeløp = restlån_start * rente
> avdrag = terminbeløp - rentebeløp
> lån = restlån_start - avdrag
> ```
> c) 172 305 kr

## Relatert
<h3><span>Tilfeldige oppgaver i samme fag</span></h3><p><span>Det er ofte best å blande hvilke type oppgaver man gjør dersom du skal forberede deg til en prøve eller eksamen. Her er tre tilfeldige oppgaver i S2.</span></p><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Uendelig geometrisk rekke.md" data-href="Uendelig geometrisk rekke.md" href="Uendelig geometrisk rekke.md" class="internal-link" target="_blank" rel="noopener nofollow">Uendelig geometrisk rekke S2 H23 Del 1 oppg 2a</a></span></li><li><span><a data-tooltip-position="top" aria-label="Summen av ukjent uendelig geometrisk rekke.md" data-href="Summen av ukjent uendelig geometrisk rekke.md" href="Summen av ukjent uendelig geometrisk rekke.md" class="internal-link" target="_blank" rel="noopener nofollow">Summen av ukjent uendelig geometrisk rekke S2 E22 Del 1 oppg 3</a></span></li><li><span><a data-tooltip-position="top" aria-label="Integral med ukjent grense.md" data-href="Integral med ukjent grense.md" href="Integral med ukjent grense.md" class="internal-link" target="_blank" rel="noopener nofollow">Integral med ukjent grense S2 H24 Del 1 oppg 1b-c</a></span></li></ul></div><h3><span>Lignende oppgaver sortert etter tema</span></h3><h4><span>Programmering</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">16</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Areal under graf med programmering.md" data-href="Areal under graf med programmering.md" href="Areal under graf med programmering.md" class="internal-link" target="_blank" rel="noopener nofollow">Areal under graf med programmering</a></span></td><td><span>1T</span></td><td><span>V23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Tolk og fiks program som finner bunnpunkt.md" data-href="Tolk og fiks program som finner bunnpunkt.md" href="Tolk og fiks program som finner bunnpunkt.md" class="internal-link" target="_blank" rel="noopener nofollow">Tolk og fiks program som finner bunnpunkt</a></span></td><td><span>R1</span></td><td><span>H23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program med kostnader for produksjon.md" data-href="Ukjent program med kostnader for produksjon.md" href="Ukjent program med kostnader for produksjon.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent program med kostnader for produksjon</a></span></td><td><span>S1</span></td><td><span>V23</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Billetter til fotballkamp.md" data-href="Billetter til fotballkamp.md" href="Billetter til fotballkamp.md" class="internal-link" target="_blank" rel="noopener nofollow">Billetter til fotballkamp</a></span></td><td><span>S1</span></td><td><span>V23</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent programkode.md" data-href="Ukjent programkode.md" href="Ukjent programkode.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent programkode</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>1-7</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program h23.md" data-href="Ukjent program h23.md" href="Ukjent program h23.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent program h23</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program del 1 S2.md" data-href="Ukjent program del 1 S2.md" href="Ukjent program del 1 S2.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent program del 1 S2</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program S2 v24.md" data-href="Ukjent program S2 v24.md" href="Ukjent program S2 v24.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent program S2 v24</a></span></td><td><span>S2</span></td><td><span>V24</span></td><td><span>1-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program Mønster v23.md" data-href="Ukjent program Mønster v23.md" href="Ukjent program Mønster v23.md" class="internal-link" target="_blank" rel="noopener nofollow">Ukjent program Mønster v23</a></span></td><td><span>S2</span></td><td><span>Ingen</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" data-href="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" href="Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole.md" class="internal-link" target="_blank" rel="noopener nofollow">Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Simuler sannsynlighet for høyde over 175 cm.md" data-href="Simuler sannsynlighet for høyde over 175 cm.md" href="Simuler sannsynlighet for høyde over 175 cm.md" class="internal-link" target="_blank" rel="noopener nofollow">Simuler sannsynlighet for høyde over 175 cm</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>2-6</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Simuler sannsynlighet for høyden til 24 måneder gammelt barn.md" data-href="Simuler sannsynlighet for høyden til 24 måneder gammelt barn.md" href="Simuler sannsynlighet for høyden til 24 måneder gammelt barn.md" class="internal-link" target="_blank" rel="noopener nofollow">Simuler sannsynlighet for høyden til 24 måneder gammelt barn</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Rekursiv sammenheng mellom pentagontall.md" data-href="Rekursiv sammenheng mellom pentagontall.md" href="Rekursiv sammenheng mellom pentagontall.md" class="internal-link" target="_blank" rel="noopener nofollow">Rekursiv sammenheng mellom pentagontall</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Rekursiv formel og programmering.md" data-href="Rekursiv formel og programmering.md" href="Rekursiv formel og programmering.md" class="internal-link" target="_blank" rel="noopener nofollow">Rekursiv formel og programmering</a></span></td><td><span>S2</span></td><td><span>H24</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Miriam og Hermods sparing.md" data-href="Miriam og Hermods sparing.md" href="Miriam og Hermods sparing.md" class="internal-link" target="_blank" rel="noopener nofollow">Miriam og Hermods sparing</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>2-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Kubikktall.md" data-href="Kubikktall.md" href="Kubikktall.md" class="internal-link" target="_blank" rel="noopener nofollow">Kubikktall</a></span></td><td><span>S2, R2</span></td><td><span>V24</span></td><td><span>2-4</span></td></tr></tbody></table></div><h4><span>Lån</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">3</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Olivias annuitetslån.md" data-href="Olivias annuitetslån.md" href="Olivias annuitetslån.md" class="internal-link" target="_blank" rel="noopener nofollow">Olivias annuitetslån</a></span></td><td><span>S2</span></td><td><span>V24</span></td><td><span>2-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Oles studielån.md" data-href="Oles studielån.md" href="Oles studielån.md" class="internal-link" target="_blank" rel="noopener nofollow">Oles studielån</a></span></td><td><span>S2</span></td><td><span>H24</span></td><td><span>2-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Annuitetslån.md" data-href="Annuitetslån.md" href="Annuitetslån.md" class="internal-link" target="_blank" rel="noopener nofollow">Annuitetslån</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>2-1</span></td></tr></tbody></table></div>
