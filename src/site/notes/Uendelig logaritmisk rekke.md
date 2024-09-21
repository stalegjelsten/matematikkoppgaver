---
{"tags":["oppgave"],"date":"2024-09-21","modified":"2024-09-21","aliases":null,"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2","r2"],"eksamen":null,"del":2,"oppgave":"2.158","title":"Uendelig logaritmisk rekke","source":"Sinus S2 lærebok","todo":null,"permalink":"/uendelig-logaritmisk-rekke/","dgPassFrontmatter":true}
---


# Uendelig logaritmisk rekke

<p><span><em>Oppgaven er hentet fra Sinus S2 lærebok.</em></span></p>

I en uendelig geometrisk følge $a_{1}, a_{2}, a_{3}, \dots , a_{n}$ er både $a_{1}$ og kvotienten $k$  positive. 

Vi danner en ny følge $b_{n}$ ved å la $b_{n}=\ln a_{n}$.

>a) Vis at følgen $b_{1},b_{2},b_{3},\dots$ er aritmetisk. Hva er differansen i følgen?
>b) Gjelder det samme dersom $a_{1}$ eller $k$ ikke er positive?

Vi ser nå kun på de følgene $a_{1},a_{2},a_{3},\dots$ som er slik at 
$$
\sum_{i=1}^\infty a_{i} =1
$$

>c) Bestem $k$ uttrykt ved $n$ når summen $b_{1}+b_{2}+b_{3}+\dots$ skal være størst mulig.



>[!question]- Fasit
>a) $\ln k$
>b) Nei, da ville mange av leddene vært negative og $\ln x$ er kun definert for $x>0$.
>c) $k=\frac{n-1}{n+1}$

>[!løsningsforslag]- Løsningsforslag oppgave c
>
>Vi vet at $0<k<1$ for at den uendelige rekka $a_{1}+a_{2}+a_{3}+\dots$ skal gi en endelig sum, og leddene i følgen $b_{1},b_{2},\dots$ skal være definert. Tillegg vet jeg at 
>$$
>\begin{aligned}
>s&=1\\
>\frac{a_{1}}{1-k} &= 1 \\
>a_{1} &=1-k
>\end{aligned}
>$$
>
>Hvert ledd i den geometriske rekka er gitt ved
>$$
>a_{i}=a_{1} \cdot k^{i-1}
>$$
>Leddene i den aritmetiske rekka blir altså
>$$
>\begin{aligned}
>b_{i}&=\ln(a_{1} \cdot k^{i-1})\\
>b_{i}&=\ln(a_{1})+ \ln(k^{i-1})\\
>b_{i}&=\ln(a_{1})+ (i-1)\ln k
>\end{aligned}
>$$
>Vi kan maksimere summen, $s_{n}$, av den aritmetiske rekka ved derivere et uttrykk for $\sum b_{i}$ og sette lik 0. Vi finner derfor først et uttrykk for summen av rekka $s_{n}$
>
>$$
>\begin{aligned}
>s_{n} &= \sum_{i=1}^{n}b_{i}\\
>s_{n} &= \sum_{i=1}^{n}\left( \ln a_{1} +(i-1)\ln k\right)\\
>s_{n} &= \sum_{i=1}^{n} \ln a_{1} +  \sum_{i=1}^{n} (i-1)\ln k \\
>s_{n} &= n \cdot \ln a_{1} +  \ln k \cdot \sum_{i=1}^{n} (i-1)
>\end{aligned}
>$$
>
>Vi kjenner igjen $\sum_{i=1}^{n}(i-1)$ som en aritmetisk rekke med første ledd lik 0 og siste ledd lik $n-1$, vi kan derfor bruke formelen for sum av aritmetisk rekke. Vi kan også erstatte $a_{1}$ med $1-k$.
> 
>$$
>\begin{aligned}
>s_{n} &= n \cdot \ln a_{1} +  \ln k \cdot \frac{0+(n-1)}{2}\cdot n\\
>s_{n} &= n \cdot \ln a_{1} + \frac{\ln k}{2} \cdot (n^{2}-n)\\
>s_{n} &= n \cdot \ln (1-k) + \frac{\ln k}{2} \cdot (n^{2}-n)\\
>\end{aligned}
>$$
>Nå kan vi derivere med hensyn på $k$
>$$
>\begin{aligned}
>(s_{n})' &= n \cdot \underset{ Kjerneregel }{ \frac{1}{1-k} \cdot (-1) } + \frac{1}{2} \frac{1}{k}(n^{2}-n)\\
>(s_{n})' &= -\frac{n}{1-k}+\frac{1}{2k}(n^{2}-n)
>\end{aligned}
>$$
>
>Vi setter uttrykket for den deriverte lik null for å finne en minimums- eller maksimumsverdi.
>
>$$
>-\frac{n}{1-k}+\frac{1}{2k}(n^{2}-n)=0
>$$
>Vi ganger med fellesnevneren $(1-k)(2k)$ for å forenkle uttrykket
>$$
>\begin{aligned}
>\frac{-n(1-k)(2k)}{1-k}+\frac{(1-k)(2k)}{2k}(n^{2}-n) &= 0\\
>-2nk+(1-k)(n^{2}-n) &= 0\\
>-2nk + n^{2}-n -n^{2}k+nk &= 0\\
>-2nk -n^{2}k+nk &= -n^{2}+n\\
>-2k -nk+k &= -n^{2}+n\\
>k(-2-n+1) &= -n+1\\
>k(-n-1) &= -n+1\\
>k &= \frac{-n+1}{-n-1} \\
>k &= \frac{n-1}{n+1}
>\end{aligned}
>$$
>
>Vi har funnet en verdi for $k$ som gir et stasjonært punkt for summen $s_{n}$, men vi vet enda ikke om denne verdien gir et minimum, et maksimum eller et terrassepunkt. Vi forsøker en andrederiverttest ved å først dobbeltderivere
>
>$$
>\begin{aligned}
>(s_{n})''&=\left( -\frac{n}{1-k} \right)'+ \left( \frac{1}{2k} \cdot (n^{2}-n) \right)'\\
>(s_{n})''&=n\left( \frac{1}{(1-k)^{2}}\cdot(-1) \right) - \left( \frac{1}{2k^{2}} (n^{2}-n) \right) \\
>(s_{n})''&= -\frac{n}{(1-k)^{2}}- \frac{n^{2}-n}{2k^{2}}
>\end{aligned}
>$$
>
>Hvis $(s_{n})''$ er negativ for $k=\frac{n-1}{n+1}$ så er $s_{n}$ konkav, og vår verdi for $k$ **må** være et toppunkt som gir en maksimumsverdi for summen. Vi setter inn for $k$ og analyserer.
>
>$$
>\begin{aligned}
>-\frac{n}{\left( 1-\frac{n-1}{n+1} \right)^{2}} - \frac{n^{2}-n}{2\left( \frac{n-1}{n+1} \right)^{2}}\\
>\frac{-n}{\left( 1-\frac{n-1}{n+1} \right)^{2}} + \frac{-(n^{2}-n)}{2\left( \frac{n-1}{n+1} \right)^{2}}\\
>
>\end{aligned}
>$$
>Det første leddet må være negativt siden $n$ er et positivt heltall. Det gjør at telleren i det første leddet er negativ, samtidig som nevneren alltid vil være positiv siden uttrykket i nevneren skal kvadreres.
>
>Det andre leddet vil alltid være enten 0 (når $n=1$) eller negativt. Siden $n^{2}>n$ for alle $n>1$ så er telleren vår negativ, mens nevneren alltid er positiv.
>
>Summen av disse to leddene må være negativ, og $s_{n}$ er derfor konkav. 
>
>Vi har vist at 
>$$k=\frac{n-1}{n+1}$$
>maksimerer summen av 
>$$
>\sum_{i=1}^{n}b_{i}=\sum_{i=1}^{n} \ln a_{i}
>$$
>når summen $\sum_{i=1}^{\infty}a_{i}=1$.

<!--
>**Alternativ løsning for å vise om vi har funnet maksimum eller minimum**
>
>Vi har funnet en maksimums- eller minimumsverdi for $k$, men hvordan kan vi vite at dette vil gi den *største* summen og ikke den minste summen? Det er selvsagt mulig å dobbeltderivere uttrykket for $s_{n}$ og gjøre en andrederiverttest, men vi kan også analysere hva som skjer med summen når vi endrer på $k$. Husk at $0<k<1$.
>
>Hvis det stasjonære punktet gitt av $k=\frac{n-1}{n+1}$ er et maksimum for summen $s_{n}$ så må en bittelitt høyere verdi for $k$ gi negativ vekstfart. La oss velge $k=\frac{n}{n+1}$ og prøve
>$$
>\begin{aligned}
>\left( s_{n}\left( k= \frac{n}{n+1} \right) \right)' &= -\frac{n}{1- \frac{n}{n+1}}+ \frac{1}{2 \frac{n}{n+1}}(n^{2}-n) \\
> &= -\frac{n(n+1)}{(n+1)- n}+ \frac{n+1}{2n}(n^{2}-n) \\
> &= -\frac{n(n+1)}{n-n+1}+ \frac{n+1}{2}(n-1) \\
> &= -n(n+1) + \frac{(n+1)(n-1)}{2}\\
> &=-n^{2}-n+ \frac{n^{2}-1^{2}}{2} \\
> &= \frac{-2n^{2}-2n+n^{2}-1^{2}}{2}\\
> &= \frac{-n^{2}-2n-1}{2 }
>\end{aligned}
>$$
>
>Vi ser kjapt at uttrykket over vil gi negative verdier for alle gyldige verdier av $n$ (husk at $n$ er antall ledd, slik at dette må være et positivt heltall). Vi kan derfor konkludere med at $k=\frac{n-1}{n+1}$ må gi en maksimumsverdi for $s_{n}$.
>
>Verdien $k=\frac{n-1}{n+1}$ gir en maksimumsverdi for $b_{1}+b_{2}+b_{3}+\dots$ gitt at rekka $\sum_{i=1}^{\infty}a_{i}=1$.
-->

## Relatert
<h3><span>Tilfeldige oppgaver i samme fag</span></h3><p><span>Det er ofte best å blande hvilke type oppgaver man gjør dersom du skal forberede deg til en prøve eller eksamen. Her er tre tilfeldige oppgaver i S2, R2.</span></p><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="Forventingsverdi og varians fra sannsynlighetsfordeling 2.md" data-href="Forventingsverdi og varians fra sannsynlighetsfordeling 2.md" href="Forventingsverdi og varians fra sannsynlighetsfordeling 2.md" class="internal-link" target="_blank" rel="noopener">Forventingsverdi og varians fra sannsynlighetsfordeling 2 S2 V23 Del 1 oppg 3</a></span></li><li><span><a data-tooltip-position="top" aria-label="Hildes terningkast.md" data-href="Hildes terningkast.md" href="Hildes terningkast.md" class="internal-link" target="_blank" rel="noopener">Hildes terningkast S2 V24 Del 1 oppg 6</a></span></li><li><span><a data-tooltip-position="top" aria-label="Forventningsverdi og varians fra sannsynlighetsfordeling.md" data-href="Forventningsverdi og varians fra sannsynlighetsfordeling.md" href="Forventningsverdi og varians fra sannsynlighetsfordeling.md" class="internal-link" target="_blank" rel="noopener">Forventningsverdi og varians fra sannsynlighetsfordeling S2 E22 Del 1 oppg 4</a></span></li></ul></div><h3><span>Lignende oppgaver sortert etter tema</span></h3><h4><span>Rekker</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">16</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Sum av integralrekke.md" data-href="Sum av integralrekke.md" href="Sum av integralrekke.md" class="internal-link" target="_blank" rel="noopener">Sum av integralrekke</a></span></td><td><span>R2</span></td><td><span>V24</span></td><td><span>2-6</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program del 1 S2.md" data-href="Ukjent program del 1 S2.md" href="Ukjent program del 1 S2.md" class="internal-link" target="_blank" rel="noopener">Ukjent program del 1 S2</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Ukjent program S2 v24.md" data-href="Ukjent program S2 v24.md" href="Ukjent program S2 v24.md" class="internal-link" target="_blank" rel="noopener">Ukjent program S2 v24</a></span></td><td><span>S2</span></td><td><span>V24</span></td><td><span>1-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig rekke med virkestoff fra legemiddel.md" data-href="Uendelig rekke med virkestoff fra legemiddel.md" href="Uendelig rekke med virkestoff fra legemiddel.md" class="internal-link" target="_blank" rel="noopener">Uendelig rekke med virkestoff fra legemiddel</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Summen av ukjent uendelig geometrisk rekke.md" data-href="Summen av ukjent uendelig geometrisk rekke.md" href="Summen av ukjent uendelig geometrisk rekke.md" class="internal-link" target="_blank" rel="noopener">Summen av ukjent uendelig geometrisk rekke</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>1-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Summen av repeterende brøker.md" data-href="Summen av repeterende brøker.md" href="Summen av repeterende brøker.md" class="internal-link" target="_blank" rel="noopener">Summen av repeterende brøker</a></span></td><td><span>S2</span></td><td><span>Ingen</span></td><td><span>Ingen</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Rekursiv sammenheng mellom pentagontall.md" data-href="Rekursiv sammenheng mellom pentagontall.md" href="Rekursiv sammenheng mellom pentagontall.md" class="internal-link" target="_blank" rel="noopener">Rekursiv sammenheng mellom pentagontall</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Olivias annuitetslån.md" data-href="Olivias annuitetslån.md" href="Olivias annuitetslån.md" class="internal-link" target="_blank" rel="noopener">Olivias annuitetslån</a></span></td><td><span>S2</span></td><td><span>V24</span></td><td><span>2-3</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Miriam og Hermods sparing.md" data-href="Miriam og Hermods sparing.md" href="Miriam og Hermods sparing.md" class="internal-link" target="_blank" rel="noopener">Miriam og Hermods sparing</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>2-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Aritmetisk rekke.md" data-href="Aritmetisk rekke.md" href="Aritmetisk rekke.md" class="internal-link" target="_blank" rel="noopener">Aritmetisk rekke</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>1-2b</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Hildegunns ukepenger.md" data-href="Hildegunns ukepenger.md" href="Hildegunns ukepenger.md" class="internal-link" target="_blank" rel="noopener">Hildegunns ukepenger</a></span></td><td><span>S2, R2</span></td><td><span>V23</span></td><td><span>2-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig geomtrisk rekke.md" data-href="Uendelig geomtrisk rekke.md" href="Uendelig geomtrisk rekke.md" class="internal-link" target="_blank" rel="noopener">Uendelig geomtrisk rekke</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>1-2a</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Annuitetslån.md" data-href="Annuitetslån.md" href="Annuitetslån.md" class="internal-link" target="_blank" rel="noopener">Annuitetslån</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>2-1</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Aritmetisk mur.md" data-href="Aritmetisk mur.md" href="Aritmetisk mur.md" class="internal-link" target="_blank" rel="noopener">Aritmetisk mur</a></span></td><td><span>S2</span></td><td><span>E22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Begrunn at uendelig rekke konvergerer.md" data-href="Begrunn at uendelig rekke konvergerer.md" href="Begrunn at uendelig rekke konvergerer.md" class="internal-link" target="_blank" rel="noopener">Begrunn at uendelig rekke konvergerer</a></span></td><td><span>S2</span></td><td><span>H22</span></td><td><span>1-2</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Idas jakke.md" data-href="Idas jakke.md" href="Idas jakke.md" class="internal-link" target="_blank" rel="noopener">Idas jakke</a></span></td><td><span>S2</span></td><td><span>H22</span></td><td><span>1-5</span></td></tr></tbody></table></div><h4><span>Uendelig rekke</span></h4><div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Oppgave</span><span class="dataview small-text">3</span></th><th class="table-view-th"><span>Fag</span></th><th class="table-view-th"><span>År</span></th><th class="table-view-th"><span>Oppg</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Sum av integralrekke.md" data-href="Sum av integralrekke.md" href="Sum av integralrekke.md" class="internal-link" target="_blank" rel="noopener">Sum av integralrekke</a></span></td><td><span>R2</span></td><td><span>V24</span></td><td><span>2-6</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig rekke med virkestoff fra legemiddel.md" data-href="Uendelig rekke med virkestoff fra legemiddel.md" href="Uendelig rekke med virkestoff fra legemiddel.md" class="internal-link" target="_blank" rel="noopener">Uendelig rekke med virkestoff fra legemiddel</a></span></td><td><span>S2</span></td><td><span>V23</span></td><td><span>1-4</span></td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Uendelig geomtrisk rekke.md" data-href="Uendelig geomtrisk rekke.md" href="Uendelig geomtrisk rekke.md" class="internal-link" target="_blank" rel="noopener">Uendelig geomtrisk rekke</a></span></td><td><span>S2</span></td><td><span>H23</span></td><td><span>1-2a</span></td></tr></tbody></table></div>
