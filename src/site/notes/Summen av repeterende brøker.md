---
{"tags":["oppgave"],"temaer":["rekker"],"aliases":null,"del":2,"oppgave":null,"fag":["s2"],"eksamen":null,"dg-publish":true,"title":"Summen av repeterende brøker","date":"2023-08-28","disabled rules":["all"],"modified":"2023-08-28","source":"Sinus S2 lærebok","permalink":"/summen-av-repeterende-broker/","dgPassFrontmatter":true}
---


# Summen av repeterende brøker
<p><span><em>Oppgaven er hentet fra Sinus S2 lærebok.</em></span></p>
Finn summen.

$$
\left( 1-\frac{1}{5} \right)+\left( \frac{1}{2}-\frac{1}{6} \right) + \left( \frac{1}{3}-\frac{1}{7} \right)+ \dots + \left( \frac{1}{996}-\frac{1}{1000} \right)
$$

>[!tip]- Tips
>For å løse oppgaven for hånd bør du skrive opp noen flere ledd enn hva du ser foreløpig. Se etter muligheter til å forkorte bort ledd.

>[!question]- Fasit
>**Løsning med CAS**
>Vi kan lage en eksplisitt formel for ledd nr. $i$ på denne måten:
>$a_{i}=\left( \frac{1}{i}-\frac{1}{i+4} \right)$
>Vi kan finne summen av denne rekka fra $i=1$ til $i=996$ ved hjelp av CAS: `Sum(((1)/(i))-((1)/(i+4)),i,1,996)`
>
>**Løsning for hånd**
>Vi kan fortsette rekka og legge til et par ekstra ledd. Da vil vi se at enkelte ledd kan strykes mot hverandre, og den resulterende rekka vil bli mye enklere.
>
>$$
>\begin{aligned}
\left( 1-\frac{1}{5} \right) &+\left( \frac{1}{2}-\frac{1}{6} \right) + \left( \frac{1}{3}-\frac{1}{7} \right)+ \left( \frac{1}{4}-\frac{1}{8} \right) + \left( \frac{1}{5}-\frac{1}{9} \right) + \dots + \left( \frac{1}{996}-\frac{1}{1000} \right) \\
\left( 1-\cancel{ \frac{1}{5} } \right)&+\left( \frac{1}{2}-\cancel{ \frac{1}{6} } \right) + \left( \frac{1}{3}-\cancel{ \frac{1}{7} } \right)+ \left( \frac{1}{4}-\cancel{ \frac{1}{8} } \right) + \left( \frac{1}{5}-\cancel{ \frac{1}{9} } \right) + \dots + \left( \cancel{ \frac{1}{996} }-\frac{1}{1000} \right) \\
1&+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}-\frac{1}{997}-\frac{1}{998}-\frac{1}{999}-\frac{1}{1000}\\
\end{aligned}
>$$
>

## Relatert
<h3><span>Tilfeldige oppgaver i samme fag</span></h3><p><span>Det er ofte best å blande hvilke type oppgaver man gjør dersom du skal forberede deg til en prøve eller eksamen. Her er tre tilfeldige oppgaver i S2.</span></p><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Simuler sannsynlighet for høyde over 175 cm.md" data-href="Simuler sannsynlighet for høyde over 175 cm.md" href="Simuler sannsynlighet for høyde over 175 cm.md" class="internal-link" target="_blank" rel="noopener">Simuler sannsynlighet for høyde over 175 cm S2 E22 Del 2 oppg 6</a></span></li><li><span><a data-tooltip-position="top" aria-label="Lykkehjulet.md" data-href="Lykkehjulet.md" href="Lykkehjulet.md" class="internal-link" target="_blank" rel="noopener">Lykkehjulet S2 H22 Del 1 oppg 8</a></span></li><li><span><a data-tooltip-position="top" aria-label="Levetiden til normalfordelte batterier.md" data-href="Levetiden til normalfordelte batterier.md" href="Levetiden til normalfordelte batterier.md" class="internal-link" target="_blank" rel="noopener">Levetiden til normalfordelte batterier S2 V23 Del 1 oppg 6</a></span></li></ul></div><h3><span>Lignende oppgaver sortert etter tema</span></h3><h4><span>Rekker</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">8</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program del 1 S2.md" data-href="Ukjent program del 1 S2.md" href="Ukjent program del 1 S2.md" class="internal-link" target="_blank" rel="noopener">Ukjent program del 1 S2</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig rekke med virkestoff fra legemiddel.md" data-href="Uendelig rekke med virkestoff fra legemiddel.md" href="Uendelig rekke med virkestoff fra legemiddel.md" class="internal-link" target="_blank" rel="noopener">Uendelig rekke med virkestoff fra legemiddel</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Summen av ukjent uendelig geometrisk rekke.md" data-href="Summen av ukjent uendelig geometrisk rekke.md" href="Summen av ukjent uendelig geometrisk rekke.md" class="internal-link" target="_blank" rel="noopener">Summen av ukjent uendelig geometrisk rekke</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>1-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Idas jakke.md" data-href="Idas jakke.md" href="Idas jakke.md" class="internal-link" target="_blank" rel="noopener">Idas jakke</a></span></td><td><span>S2</span></td><td><span>H22</span></td><td><span>1-5</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Hildegunns ukepenger.md" data-href="Hildegunns ukepenger.md" href="Hildegunns ukepenger.md" class="internal-link" target="_blank" rel="noopener">Hildegunns ukepenger</a></span></td><td><span>S2, R2</span></td><td><span>V23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Begrunn at uendelig rekke konvergerer.md" data-href="Begrunn at uendelig rekke konvergerer.md" href="Begrunn at uendelig rekke konvergerer.md" class="internal-link" target="_blank" rel="noopener">Begrunn at uendelig rekke konvergerer</a></span></td><td><span>S2</span></td><td><span>H22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Aritmetisk mur.md" data-href="Aritmetisk mur.md" href="Aritmetisk mur.md" class="internal-link" target="_blank" rel="noopener">Aritmetisk mur</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Annuitetslån.md" data-href="Annuitetslån.md" href="Annuitetslån.md" class="internal-link" target="_blank" rel="noopener">Annuitetslån</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>2-1</span></td></tr></tbody></table></div>
