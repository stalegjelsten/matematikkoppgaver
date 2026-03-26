---
{"tags":["oppgave"],"date":"2024-09-21","modified":"2024-09-21","aliases":null,"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2","r2"],"eksamen":null,"del":2,"oppgave":"2.158","oppgavenummer":[{"fag":"s2","del":2,"oppgave":2.158},{"fag":"r2","del":2,"oppgave":2.158}],"title":"Uendelig logaritmisk rekke","source":"Sinus S2 lærebok","todo":null,"permalink":"/uendelig-logaritmisk-rekke/","dgPassFrontmatter":true}
---


# Uendelig logaritmisk rekke


I en uendelig geometrisk følge $a_{1}, a_{2}, a_{3}, \dots , a_{n}$ er både $a_{1}$ og kvotienten $k$  positive. 

Vi danner en ny følge $b_{n}$ ved å la $b_{n}=\ln a_{n}$.

>[!oppgave]
>a) Vis at følgen $b_{1},b_{2},b_{3},\dots$ er aritmetisk. Hva er differansen i følgen?
>b) Gjelder det samme dersom $a_{1}$ eller $k$ ikke er positive?

Vi ser nå kun på de følgene $a_{1},a_{2},a_{3},\dots$ som er slik at 
$$
\sum_{i=1}^\infty a_{i} =1
$$

>[!oppgave]
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
>
>La oss anse summen av rekka som en funksjon av $k$. Vi kan maksimere denne funksjonen, $s_{n}(k)$, ved å derivere den og sette lik 0. Vi finner derfor først et uttrykk for summen av rekka $s_{n}(k)$
>
>$$
>\begin{aligned}
>s_{n}(k) &= \sum_{i=1}^{n}b_{i}\\
>s_{n}(k) &= \sum_{i=1}^{n}\left( \ln a_{1} +(i-1)\ln k\right)\\
>s_{n}(k) &= \sum_{i=1}^{n} \ln a_{1} +  \sum_{i=1}^{n} (i-1)\ln k \\
>s_{n}(k) &= n \cdot \ln a_{1} +  \ln k \cdot \sum_{i=1}^{n} (i-1)
>\end{aligned}
>$$
>
>Vi kjenner igjen $\sum_{i=1}^{n}(i-1)$ som en aritmetisk rekke med første ledd lik 0 og siste ledd lik $n-1$, vi kan derfor bruke formelen for sum av aritmetisk rekke. Vi kan også erstatte $a_{1}$ med $1-k$.
> 
>$$
>\begin{aligned}
>s_{n}(k) &= n \cdot \ln a_{1} +  \ln k \cdot \frac{0+(n-1)}{2}\cdot n\\
>s_{n}(k) &= n \cdot \ln a_{1} + \frac{\ln k}{2} \cdot (n^{2}-n)\\
>s_{n}(k) &= n \cdot \ln (1-k) + \frac{\ln k}{2} \cdot (n^{2}-n)\\
>\end{aligned}
>$$
>Nå kan vi derivere med hensyn på $k$
>$$
>\begin{aligned}
>s_{n}'(k) &= n \cdot \underset{ Kjerneregel }{ \frac{1}{1-k} \cdot (-1) } + \frac{1}{2} \frac{1}{k}(n^{2}-n)\\
>s_{n}'(k) &= -\frac{n}{1-k}+\frac{1}{2k}(n^{2}-n)
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
>-2k -nk+k &= -n+1\\
>k(-2-n+1) &= -n+1\\
>k(-n-1) &= -n+1\\
>k &= \frac{-n+1}{-n-1} \\
>k &= \frac{n-1}{n+1}
>\end{aligned}
>$$
>
>Vi har funnet en verdi for $k$ som gir et stasjonært punkt for summen $s_{n}(k)$, men vi vet enda ikke om denne verdien gir et minimum, et maksimum eller et terrassepunkt. Vi gjennomfører en andrederiverttest ved å først dobbeltderivere
>
>$$
>\begin{aligned}
>s_{n}''(k)&=\left( -\frac{n}{1-k} \right)'+ \left( \frac{1}{2k} \cdot (n^{2}-n) \right)'\\
>s_{n}''(k)&=n\left( \frac{1}{(1-k)^{2}}\cdot(-1) \right) - \left( \frac{1}{2k^{2}} (n^{2}-n) \right) \\
>s_{n}''(k)&= -\frac{n}{(1-k)^{2}}- \frac{n^{2}-n}{2k^{2}}
>\end{aligned}
>$$
>
>Hvis $s_{n}''(k)$ er negativ for $k=\frac{n-1}{n+1}$ så er $s_{n}(k)$ konkav, og vår verdi for $k$ **må** være et toppunkt som gir en maksimumsverdi for summen. Vi setter inn for $k$ og analyserer.
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
>Det andre leddet vil alltid være enten 0 (når $n=1$) eller negativt. Telleren i det andre leddet er 0 når $n=1$ og negativt så lenge $n\geq 1$ siden $n^{2}\geq n$. Nevneren i det andre leddet må alltid være positiv på grunn av kvadreringen.
>
>Vi har altså enten to negative ledd, eller ett negativt ledd og et null-ledd, og summen av disse må være negativ. $s_{n}(k)$ er derfor konkav og $k=\frac{n-1}{(n+1)}$ må gi en maksimumsverdi.
>
>Vi har vist at 
>$$\underline{\underline{k=\frac{n-1}{n+1}}}$$
>maksimerer summen av 
>$$
>\sum_{i=1}^{n}b_{i}=\sum_{i=1}^{n} \ln a_{i}
>$$
>når summen $\sum_{i=1}^{\infty}a_{i}=1$.

<!--
>[!oppgave]
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
