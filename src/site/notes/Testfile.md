---
{"tags":["oppgave"],"temaer":["derivasjon","rekker"],"aliases":null,"del":null,"oppgave":null,"fag":"1t","eksamen":null,"dg-publish":true,"title":"Testfile","date":"2023-11-15","modified":"2023-11-22","permalink":"/testfile/","dgPassFrontmatter":true}
---


# Testfile

## Test with traditional dataview

- [[templates/_2oppgave-template\|_2oppgave-template]]
- [[Vis at sin u delt på cos u er tan u\|Vis at sin u delt på cos u er tan u]]
- [[Vektorer til å bestemme sidekanter og vinkler i trekant\|Vektorer til å bestemme sidekanter og vinkler i trekant]]
- [[Ukjent programkode\|Ukjent programkode]]
- [[Tolk og fiks program som finner bunnpunkt\|Tolk og fiks program som finner bunnpunkt]]
- [[Sorter tallene i riktig rekkefølge\|Sorter tallene i riktig rekkefølge]]
- [[Ukjent program med kostnader for produksjon\|Ukjent program med kostnader for produksjon]]
- [[Ukjent program del 1 S2\|Ukjent program del 1 S2]]
- [[Uendelig rekke med virkestoff fra legemiddel\|Uendelig rekke med virkestoff fra legemiddel]]
- [[Ubestemt integral\|Ubestemt integral]]

{ .block-language-dataview}

## dataview med map links
- [[Algebra potensregning\|Algebra potensregning]]: [[Testfile\|Testfile]]

{ .block-language-dataview}

## dataview med link uten spesiell lenketekst
```
TABLE WITHOUT ID tema AS Tema, map(rows, (r) => link(r.file.link, r.file.title)) AS Oppgave
```

| Tema | Oppgave |
| ---- | ------- |
| \-   | \-      |
| \-   | \-      |
| \-   | \-      |
| \-   | \-      |
| \-   | \-      |

{ .block-language-dataview}


## dataview med uten map link
| tema |
| ---- |

{ .block-language-dataview}



### Lignende oppgaver i samme fag
Kildekode:
```
TABLE WITHOUT ID map(rows, (r) => link(r.file.link, r.file.title)) AS Oppgave
FROM #oppgave
limit 5
```

| Oppgave |
| ------- |
| \-      |
| \-      |
| \-      |
| \-      |
| \-      |

{ .block-language-dataview}

| Tema       | Oppgave                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| derivasjon | <ul><li>[[Skisser grafen ut fra den deriverte v2023.md\\|Skisser grafen ut fra den deriverte v23 1T-V23-1-5]]</li><li>[[Gjennomsnittstemperatur på Svalbard og den deriverte.md\\|Gjennomsnittstemperatur på Svalbard og den deriverte 1T-V23-2-1]]</li></ul> |

{ .block-language-dataview}


## med dataviewjs

2023-12-30: Dette ser lovende ut.

<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Tema</span><span class="dataview small-text">0</span></th><th class="table-view-th"><span>Oppgave</span></th></tr></thead><tbody class="table-view-tbody"></tbody></table><div class="dataview dataview-error-box"><p class="dataview dataview-error-message">Dataview: No results to show for table query.</p></div></div>


<p><span>Her prøver jeg å velge oppgaver med dv.pages</span></p><h4><span>Derivasjon</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">3</span></th><th class="table-view-th"><span>Eksamen</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Skisser grafen ut fra den deriverte v2023.md" data-href="Skisser grafen ut fra den deriverte v2023.md" href="Skisser grafen ut fra den deriverte v2023.md" class="internal-link" target="_blank" rel="noopener">Skisser grafen ut fra den deriverte v23 1t-v23-1-5</a></span></td><td><span>v23</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Gjennomsnittstemperatur på Svalbard og den deriverte.md" data-href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" class="internal-link" target="_blank" rel="noopener">Gjennomsnittstemperatur på Svalbard og den deriverte 1t-v23-2-1</a></span></td><td><span>v23</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile 1t-null-null-null</a></span></td><td><span>-</span></td></tr></tbody></table></div><h4><span>Rekker</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">1</span></th><th class="table-view-th"><span>Eksamen</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile 1t-null-null-null</a></span></td><td><span>-</span></td></tr></tbody></table></div>


<h3><ul class="dataview dataview-ul dataview-result-list-root-ul"><li class="dataview-result-list-li"><span>derivasjon</span></li><li class="dataview-result-list-li"><span>funksjoner</span></li><li class="dataview-result-list-li"><span>funksjonsdrøfting</span></li></ul></h3><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">1</span></th><th class="table-view-th"><span>Eksamen</span></th><th class="table-view-th"><span>Fag</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Skisser grafen ut fra den deriverte v2023.md" data-href="Skisser grafen ut fra den deriverte v2023.md" href="Skisser grafen ut fra den deriverte v2023.md" class="internal-link" target="_blank" rel="noopener">Skisser grafen ut fra den deriverte v2023</a></span></td><td><span>v23</span></td><td><span>1t</span></td></tr></tbody></table></div><h3><ul class="dataview dataview-ul dataview-result-list-root-ul"><li class="dataview-result-list-li"><span>derivasjon</span></li><li class="dataview-result-list-li"><span>funksjonsdrøfting</span></li><li class="dataview-result-list-li"><span>funksjoner</span></li></ul></h3><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">1</span></th><th class="table-view-th"><span>Eksamen</span></th><th class="table-view-th"><span>Fag</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Gjennomsnittstemperatur på Svalbard og den deriverte.md" data-href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" class="internal-link" target="_blank" rel="noopener">Gjennomsnittstemperatur på Svalbard og den deriverte</a></span></td><td><span>v23</span></td><td><span>1t</span></td></tr></tbody></table></div><h3><ul class="dataview dataview-ul dataview-result-list-root-ul"><li class="dataview-result-list-li"><span>derivasjon</span></li><li class="dataview-result-list-li"><span>rekker</span></li></ul></h3><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">1</span></th><th class="table-view-th"><span>Eksamen</span></th><th class="table-view-th"><span>Fag</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile</a></span></td><td><span>-</span></td><td><span>1t</span></td></tr></tbody></table></div>

<pre class="dataview dataview-error">Evaluation Error: SyntaxError: Unexpected end of input
    at DataviewInlineApi.eval (plugin:dataview:18638:21)
    at evalInContext (plugin:dataview:18639:7)
    at asyncEvalInContext (plugin:dataview:18649:32)
    at DataviewJSRenderer.render (plugin:dataview:18670:19)
    at DataviewJSRenderer.onload (plugin:dataview:18260:14)
    at e.load (app://obsidian.md/app.js:1:1147632)
    at DataviewApi.executeJs (plugin:dataview:19198:18)
    at DataviewCompiler.eval (plugin:digitalgarden:10865:23)
    at Generator.next (&lt;anonymous&gt;)
    at fulfilled (plugin:digitalgarden:77:24)</pre>
## tester mathpad

```mathpad
3.535401^3.535401=~?
```


<h3><span>Lignende oppgaver i samme fag</span></h3><h4><span>Derivasjon</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">3</span></th><th class="table-view-th"><span>Eksamen</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Skisser grafen ut fra den deriverte v2023.md" data-href="Skisser grafen ut fra den deriverte v2023.md" href="Skisser grafen ut fra den deriverte v2023.md" class="internal-link" target="_blank" rel="noopener">Skisser grafen ut fra den deriverte v23 (1t-v23-1-5)</a></span></td><td><span>v23</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Gjennomsnittstemperatur på Svalbard og den deriverte.md" data-href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" class="internal-link" target="_blank" rel="noopener">Gjennomsnittstemperatur på Svalbard og den deriverte (1t-v23-2-1)</a></span></td><td><span>v23</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile (1t-null-null-null)</a></span></td><td><span>-</span></td></tr></tbody></table></div><h4><span>Rekker</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">1</span></th><th class="table-view-th"><span>Eksamen</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile (1t-null-null-null)</a></span></td><td><span>-</span></td></tr></tbody></table></div>


<h3><span>Tilfeldige oppgaver i samme fag</span></h3><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Areal av trekant i sirkel.md" data-href="Areal av trekant i sirkel.md" href="Areal av trekant i sirkel.md" class="internal-link" target="_blank" rel="noopener">Areal av trekant i sirkel (v23-2-5)</a></span></li><li><span><a data-tooltip-position="top" aria-label="Tredjegradsfunksjoner uten førstegradsledd.md" data-href="Tredjegradsfunksjoner uten førstegradsledd.md" href="Tredjegradsfunksjoner uten førstegradsledd.md" class="internal-link" target="_blank" rel="noopener">Tredjegradsfunksjoner uten førstegradsledd (v23-2-6)</a></span></li><li><span><a data-tooltip-position="top" aria-label="Begrunn hvorfor sin2 u + cos2 u = 1.md" data-href="Begrunn hvorfor sin2 u + cos2 u = 1.md" href="Begrunn hvorfor sin2 u + cos2 u = 1.md" class="internal-link" target="_blank" rel="noopener">Begrunn hvorfor sin² u + cos² u = 1 (v23-1-1)</a></span></li></ul></div><h3><span>Lignende oppgaver</span></h3><h4><span>Derivasjon</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">9</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Tolk og fiks program som finner bunnpunkt.md" data-href="Tolk og fiks program som finner bunnpunkt.md" href="Tolk og fiks program som finner bunnpunkt.md" class="internal-link" target="_blank" rel="noopener">Tolk og fiks program som finner bunnpunkt</a></span></td><td><span>r1</span></td><td><span>h23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Deriver x ln(x).md" data-href="Deriver x ln(x).md" href="Deriver x ln(x).md" class="internal-link" target="_blank" rel="noopener">Deriver x ln(x)</a></span></td><td><span>r1</span></td><td><span>h23</span></td><td><span>1-1</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Regresjon på størrelsen av det norske musikkstrømmemarkedet.md" data-href="Regresjon på størrelsen av det norske musikkstrømmemarkedet.md" href="Regresjon på størrelsen av det norske musikkstrømmemarkedet.md" class="internal-link" target="_blank" rel="noopener">Regresjon på størrelsen av det norske musikkstrømmemarkedet</a></span></td><td><span>s2, r2</span></td><td><span>v23</span></td><td><span>2-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Skisser grafen ut fra den deriverte v2023.md" data-href="Skisser grafen ut fra den deriverte v2023.md" href="Skisser grafen ut fra den deriverte v2023.md" class="internal-link" target="_blank" rel="noopener">Skisser grafen ut fra den deriverte v23</a></span></td><td><span>1t</span></td><td><span>v23</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Gjennomsnittstemperatur på Svalbard og den deriverte.md" data-href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" href="Gjennomsnittstemperatur på Svalbard og den deriverte.md" class="internal-link" target="_blank" rel="noopener">Gjennomsnittstemperatur på Svalbard og den deriverte</a></span></td><td><span>1t</span></td><td><span>v23</span></td><td><span>2-1</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile</a></span></td><td><span>1t</span></td><td><span>-</span></td><td><span>null-null</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Grenseverdi når x går mot 2.md" data-href="Grenseverdi når x går mot 2.md" href="Grenseverdi når x går mot 2.md" class="internal-link" target="_blank" rel="noopener">Grenseverdi når x går mot 2</a></span></td><td><span>s1</span></td><td><span>v23</span></td><td><span>1-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Deriver logaritmefunksjon.md" data-href="Deriver logaritmefunksjon.md" href="Deriver logaritmefunksjon.md" class="internal-link" target="_blank" rel="noopener">Deriver logaritmefunksjon</a></span></td><td><span>s1</span></td><td><span>v23</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Grensekostnader fra graf v23.md" data-href="Grensekostnader fra graf v23.md" href="Grensekostnader fra graf v23.md" class="internal-link" target="_blank" rel="noopener">Grensekostnader fra graf v23</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>1-2</span></td></tr></tbody></table></div><h4><span>Rekker</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">9</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Hildegunns ukepenger.md" data-href="Hildegunns ukepenger.md" href="Hildegunns ukepenger.md" class="internal-link" target="_blank" rel="noopener">Hildegunns ukepenger</a></span></td><td><span>s2, r2</span></td><td><span>v23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Testfile.md" data-href="Testfile.md" href="Testfile.md" class="internal-link" target="_blank" rel="noopener">Testfile</a></span></td><td><span>1t</span></td><td><span>-</span></td><td><span>null-null</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program del 1 S2.md" data-href="Ukjent program del 1 S2.md" href="Ukjent program del 1 S2.md" class="internal-link" target="_blank" rel="noopener">Ukjent program del 1 S2</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig rekke med virkestoff fra legemiddel.md" data-href="Uendelig rekke med virkestoff fra legemiddel.md" href="Uendelig rekke med virkestoff fra legemiddel.md" class="internal-link" target="_blank" rel="noopener">Uendelig rekke med virkestoff fra legemiddel</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Idas jakke.md" data-href="Idas jakke.md" href="Idas jakke.md" class="internal-link" target="_blank" rel="noopener">Idas jakke</a></span></td><td><span>s2</span></td><td><span>h22</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Begrunn at uendelig rekke konvergerer.md" data-href="Begrunn at uendelig rekke konvergerer.md" href="Begrunn at uendelig rekke konvergerer.md" class="internal-link" target="_blank" rel="noopener">Begrunn at uendelig rekke konvergerer</a></span></td><td><span>s2</span></td><td><span>h22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Aritmetisk mur.md" data-href="Aritmetisk mur.md" href="Aritmetisk mur.md" class="internal-link" target="_blank" rel="noopener">Aritmetisk mur</a></span></td><td><span>s2</span></td><td><span>e22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Annuitetslån.md" data-href="Annuitetslån.md" href="Annuitetslån.md" class="internal-link" target="_blank" rel="noopener">Annuitetslån</a></span></td><td><span>s2</span></td><td><span>v23</span></td><td><span>2-1</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Summen av repeterende brøker.md" data-href="Summen av repeterende brøker.md" href="Summen av repeterende brøker.md" class="internal-link" target="_blank" rel="noopener">Summen av repeterende brøker</a></span></td><td><span>s2</span></td><td><span>-</span></td><td><span>2-null</span></td></tr></tbody></table></div>


### Lignende oppgaver i samme fag
| Tema       | Oppgave                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| derivasjon | <ul><li>[[Skisser grafen ut fra den deriverte v2023.md\\|Skisser grafen ut fra den deriverte v23 1T-V23-1-5]]</li><li>[[Gjennomsnittstemperatur på Svalbard og den deriverte.md\\|Gjennomsnittstemperatur på Svalbard og den deriverte 1T-V23-2-1]]</li></ul> |

{ .block-language-dataview}

### Lignende oppgaver i andre fag
| Tema       | Oppgave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| derivasjon | <ul><li>[[Tolk og fiks program som finner bunnpunkt.md\\|Tolk og fiks program som finner bunnpunkt R1-H23-1-4]]</li><li>[[Regresjon på størrelsen av det norske musikkstrømmemarkedet.md\\|Regresjon på størrelsen av det norske musikkstrømmemarkedet S2, R2-V23-2-2]]</li><li>[[Grenseverdi når x går mot 2.md\\|Grenseverdi når x går mot 2 S1-V23-1-3]]</li><li>[[Grensekostnader fra graf v23.md\\|Grensekostnader fra graf v23 S2-V23-1-2]]</li><li>[[Deriver x ln(x).md\\|Deriver x ln(x) R1-H23-1-1]]</li><li>[[Deriver logaritmefunksjon.md\\|Deriver logaritmefunksjon S1-V23-1-2]]</li></ul>                                               |
| rekker     | <ul><li>[[Ukjent program del 1 S2.md\\|Ukjent program del 1 S2 S2-V23-1-4]]</li><li>[[Uendelig rekke med virkestoff fra legemiddel.md\\|Uendelig rekke med virkestoff fra legemiddel S2-V23-1-4]]</li><li>[[Idas jakke.md\\|Idas jakke S2-H22-1-5]]</li><li>[[Hildegunns ukepenger.md\\|Hildegunns ukepenger S2, R2-V23-2-4]]</li><li>[[Begrunn at uendelig rekke konvergerer.md\\|Begrunn at uendelig rekke konvergerer S2-H22-1-2]]</li><li>[[Aritmetisk mur.md\\|Aritmetisk mur S2-E22-1-2]]</li><li>[[Annuitetslån.md\\|Annuitetslån S2-V23-2-1]]</li><li>[[Summen av repeterende brøker.md\\|Summen av repeterende brøker S2-\--2-\-]]</li></ul> |

{ .block-language-dataview}
