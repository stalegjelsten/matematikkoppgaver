---
{"tags":["eksamen"],"fag":["r2"],"eksamen":"v24","date":"2024-05-27","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2024","dg-publish":true,"contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["r2"],"eksamen":"v24","date":"2024-05-27","del1_tid":2,"del2_tid":3,"title":"R2 eksamen V2024","contentClasses":"eksamen-side","permalink":"/eksamener/r2-eksamen-v2024/"}}
---

## Oversikt

**Del 1** — 2 timer — uten hjelpemidler

| Oppgave | Navn | Temaer | Løsningsforslag |
| ------- | ---- | ------ | --------------- |
| 1-1 | [[Bestemt integral og areal\|Bestemt integral og areal]] | integral, areal under graf | ✔︎ |
| 1-2 | [[Ubestemt integral med substitusjon\|Ubestemt integral med substitusjon]] | integral | ❌ |
| 1-3 | [[Ukjent program S2 v24\|Ukjent program S2 v24]] | programmering, rekker | ✔︎ |
| 1-4 | [[Trekant og plan i rommet\|Trekant og plan i rommet]] | vektorer, geometri | ❌ |
| 1-5 | [[Sinusfunksjon og egenskaper\|Sinusfunksjon og egenskaper]] | trigonometri, funksjoner | ❌ |

**Del 2** — 3 timer — med hjelpemidler

| Oppgave | Navn | Temaer | Løsningsforslag |
| ------- | ---- | ------ | --------------- |
| 2-1 | [[Fotball hjørnespark og vektorer\|Fotball hjørnespark og vektorer]] | vektorer, modellering | ❌ |
| 2-2 | [[Volum av pære med omdreiningslegeme\|Volum av pære med omdreiningslegeme]] | omdreiningslegeme, integral, volum | ❌ |
| 2-3 | [[Sensor for utelys og trigonometri\|Sensor for utelys og trigonometri]] | trigonometri, modellering, derivasjon | ❌ |
| 2-4 | [[Kubikktall og induksjonsbevis\|Kubikktall og induksjonsbevis]] | rekursiv sammenheng, figurtall, programmering, bevis | ❌ |
| 2-5 | [[Kuleflate og plan\|Kuleflate og plan]] | vektorer, geometri | ❌ |
| 2-6 | [[Sum av integralrekke\|Sum av integralrekke]] | rekker, uendelig rekke, utforskning, funksjoner, integral | ❌ |

# Del 1

## Oppgave 1-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/bestemt-integral-og-areal/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Bestemt integral og areal


En funksjon $f$ er gitt ved
$$
f(x)=-x^{3}+3x
$$

>[!oppgave]
>
> a) Regn ut integralet
> $$\int_{-1}^{0} f(x) \, dx $$
> b) Bestem arealet av området som er avgrenset av grafen til $f$, $x$-aksen og linjene $x=-1$ og $x=1$

## Fasit

a) $-\frac{5}{4}$
b) $\frac{5}{2}$

## Løsningsforslag

### 1-1a

$$
\begin{aligned}
\int_{-1}^{0} \left( -x^{3}+3x \right)  \, dx& \\
\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{-1}^0& \\
0-\left( -\frac{1}{4}(-1)^{4} + \frac{3}{2}(-1)^{2} \right)& \\
-\left( -\frac{1}{4} + \frac{3}{2} \right)&=-\frac{5}{4} 
\end{aligned}
$$

**Integralet er $\underline{\underline{-\frac{5}{4}}}$.** 

### 1-1b
Jeg finner først nullpunktene ved å faktorisere uttrykket.

$$
f(x)=-x^{3}+3x=-x(x^{2}-3)=-x\left(x^{2}-\left(  \sqrt{ 3 } \right)^{2} \right) = -x(x+\sqrt{ 3 })(x-\sqrt{ 3 })
$$

Vi har nullpunkter når $f(x)=0$. Det vil si at vi har nullpunkter når $x=-\sqrt{ 3 }, x=0, x=\sqrt{ 3 }$. Det er kun nullpunktet $x=0$ som ligger mellom $x=-1$ og $x=1$. 

For å finne ut om funksjonen er positiv eller negativ i intervallene så sjekker jeg funksjonsverdien i $x=-1$ og $x=1$.

$$f(-1)=-(-1)^{3}+3(-1)=1-3=-2$$

$$f(1)=-(1)^{3}+3 \cdot 1=-1+3=2$$
>[!tip]- Alternativ måte å sjekke hvor funksjonen er positiv og negativ
>
>Siden integralet $\int_{-1}^{0} f(x) \, d < 0$ og det ikke finnes noen nullpunkter for $x \in \langle-1, 0 \rangle$, så må $f$ være negativ når $x \in \langle-1, 0 \rangle$

$f$ er altså negativ i intervallet $[-1, 0\rangle$ og positiv i intervallet $\langle 0 , 1]$. Vi finner arealet ved å ta integralene av hver del (og husker minustegn foran integralet til området som ligger under $x$-aksen).

$$
\begin{aligned}
A&=-\int_{-1}^{0} f(x) \, dx + \int_{0}^{1} f(x) \, dx  \\
A&=- \left( -\frac{5}{4} \right) +\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{0}^1 \\
A&=\frac{5}{4} + -\frac{1}{4}+\frac{3}{2}=\frac{10}{4}=\frac{5}{2}
\end{aligned}
$$

**Arealet av området er $\underline{\underline{\frac{5}{2}}}$.**

>[!tip] Antisymmetri
>
>Du kan utnytte antisymmetrien til $f$ til å argumentere for at arealet avgrenset av $x=-1$, $f$, $x$-aksen og $x=0$ vil være like stort som arealet avgrenset av $f$, $x$-aksen, $x=0$ og $x=1$.


</div></div>


## Oppgave 1-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ubestemt-integral-med-substitusjon/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ubestemt integral med substitusjon

>[!oppgave]
>Regn ut integralet.
>
>$$\int \sin^3(x) \cdot \cos(x) \, \mathrm{d}x$$

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-2\|Løsningsforslag R2 eksamen V2024#Oppgave 1-2]]


</div></div>


## Oppgave 1-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ukjent-program-s2-v24/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ukjent program S2 v24


En elev har laget programmet under. 

```python ln
n = 0
S = 0

while S <= 200:
	n = n + 1
	S = S + 4*n - 2

print(n)
```

>[!oppgave]
>a) Forklar hva eleven prøver å finne ut.
>b) Finn verdien eleven får skrevet ut når programmet kjøres.

## Fasit

a) Delsummer av aritmetisk rekke hvor hvert ledd er gitt ved $a_{n}=4n-2$
b) 11

## Løsningsforslag

### 1-3a
Programmet viser en aritmetisk følge hvor hvert ledd er gitt av $a_{n}=4n-2$ for $n>0$. Programmet regner ut delsummene, $S_{n}$, til den tilhørende rekka. 

**Programmet finner ut hvilket ledd i rekka som gjør at delsummen blir *over* 200.**

### 1-3b
Siden tallfølgen er aritmetisk kan vi regne ut summen av de $n$ første leddene med

$$
S_{n}=\frac{a_{1}+a_{n}}{2}n
$$

Jeg vet at summen skal være *over* 200, at $a_{1}=2$ og jeg kan erstatte $a_{n}$ med $4n-2$. Dette gir

$$
\begin{aligned}
200&=\frac{2+4n-2}{2}n\\
200&=2n^{2}\\
100&=n^{2}\\
10&=n
\end{aligned}
$$

$n=10$ gir oss altså nøyaktig delsummen $S_{10}=200$. $n=11$ gir oss den første delsummen som er over 200.

**Programmet skriver ut 11.**


</div></div>


## Oppgave 1-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/trekant-og-plan-i-rommet/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Trekant og plan i rommet

Vi har gitt punktene $A(1, 1, 0)$, $B(4, 1, 1)$ og $C(2, 0, -1)$.

>[!oppgave]
>a) Bestem arealet av trekanten $\triangle ABC$.
>b) Bestem avstanden fra punktet $C$ til linja gjennom $A$ og $B$.

$A$, $B$ og $C$ ligger i planet $\alpha$. Punktet $P$ har koordinatene $P(-2, 1, 4)$.

>[!oppgave]
>c) Lag en parameterframstilling for linja $\ell$ som går gjennom punktet $P$ og står vinkelrett på planet $\alpha$.

En rett linje $m$ går gjennom punktet $P$, er parallell med planet $\alpha$ og skjærer $z$-aksen i punktet $D$.

>[!oppgave]
>d) Bestem koordinatene til $D$.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-4\|Løsningsforslag R2 eksamen V2024#Oppgave 1-4]]


</div></div>


## Oppgave 1-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sinusfunksjon-og-egenskaper/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sinusfunksjon og egenskaper

Funksjonen $f$ er gitt ved

$$f(x) = 2 \cdot \sin\!\left(\frac{\pi}{6}x - \frac{\pi}{3}\right) - 1, \quad D_f = \langle 0, 20 \rangle.$$

>[!oppgave]
>a) Løs likningen $f(x) = 0$.
>b) Finn amplituden, likevektslinja, perioden og forskyvningen langs likevektslinja.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 1-5\|Løsningsforslag R2 eksamen V2024#Oppgave 1-5]]


</div></div>


# Del 2

## Oppgave 2-1


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/fotball-hjornespark-og-vektorer/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Fotball hjørnespark og vektorer

En fotballspiller skal ta et hjørnespark (corner) på en fotballbane. Posisjonen $\vec{r}$ til ballen etter $t$ sekunder er gitt ved

$$\vec{r}(t) = [30t,\ 5t,\ 7t - 4{,}9t^2].$$

Her er posisjonen gitt i meter, og koordinatsystemet er lagt slik at origo er i hjørnet av fotballbanen, $x$-aksen går langs kortsiden og $y$-aksen går langs langsiden.

>[!oppgave]
>a) Hvor stor er farten til ballen idet den blir skutt?
>b) Hvor langt fra hjørnemerket er ballen når den treffer fotballbanen igjen?
>c) Hvor stor er farten til ballen når den er på sitt høyeste? Hvor høyt over fotballbanen er ballen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-1\|Løsningsforslag R2 eksamen V2024#Oppgave 2-1]]


</div></div>


## Oppgave 2-2


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/volum-av-paere-med-omdreiningslegeme/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Volum av pære med omdreiningslegeme

Bildet nedenfor viser halve snittflaten til en pære som er skåret over på midten. Bildet er satt inn i et koordinatsystem. Enheten langs begge aksene er centimeter.

![Pæresnitt i koordinatsystem](/img/user/_resources/r2-v24-2-2.jpeg)

>[!oppgave]
>Bruk informasjonen i bildet til å bestemme det omtrentlige volumet av pæra.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-2\|Løsningsforslag R2 eksamen V2024#Oppgave 2-2]]


</div></div>


## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sensor-for-utelys-og-trigonometri/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sensor for utelys og trigonometri

En sensor skal slå på utelyset foran ytterdøra til et hus. Lyset blir slått på $T(x)$ timer etter midnatt. $T(x)$ er gitt ved

$$T(x) = 4 \cdot \sin(0{,}0055\pi \cdot x - 0{,}5\pi) + 19.$$

$x$ er antall dager etter 31. desember 2023 slik at $x = 1$ svarer til 1. januar 2024. Tidspunktet sensoren slår på utelyset, varierer fra kl. 15:00 til kl. 23:00, og det varierer periodisk i løpet av et år. Den 1. april slår lyset seg på kl. 19:00.

>[!oppgave]
>a) Forklar hvordan de ulike verdiene i modellen $T(x)$ passer med opplysningene gitt ovenfor.
>b) Når i 2024 vil tidspunktet da lyset slår seg på, flytte seg 3 minutter per dag?
>c) Når endrer dette tidspunktet seg raskest, og hvor stor er endringen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-3\|Løsningsforslag R2 eksamen V2024#Oppgave 2-3]]


</div></div>


## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kubikktall-og-induksjonsbevis/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kubikktall og induksjonsbevis


<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="772.01" height="197.095" viewBox="0 0 772.01 197.095">
<defs>
<clipPath id="clip-0">
<path clip-rule="nonzero" d="M 0 167 L 30 167 L 30 197.09375 L 0 197.09375 Z M 0 167 "/>
</clipPath>
<clipPath id="clip-1">
<path clip-rule="nonzero" d="M 17 174 L 51 174 L 51 197.09375 L 17 197.09375 Z M 17 174 "/>
</clipPath>
<clipPath id="clip-2">
<path clip-rule="nonzero" d="M 77 167 L 107 167 L 107 197.09375 L 77 197.09375 Z M 77 167 "/>
</clipPath>
<clipPath id="clip-3">
<path clip-rule="nonzero" d="M 105 167 L 135 167 L 135 197.09375 L 105 197.09375 Z M 105 167 "/>
</clipPath>
<clipPath id="clip-4">
<path clip-rule="nonzero" d="M 123 174 L 157 174 L 157 197.09375 L 123 197.09375 Z M 123 174 "/>
</clipPath>
<clipPath id="clip-5">
<path clip-rule="nonzero" d="M 134 163 L 168 163 L 168 197.09375 L 134 197.09375 Z M 134 163 "/>
</clipPath>
<clipPath id="clip-6">
<path clip-rule="nonzero" d="M 200 167 L 230 167 L 230 197.09375 L 200 197.09375 Z M 200 167 "/>
</clipPath>
<clipPath id="clip-7">
<path clip-rule="nonzero" d="M 228 167 L 258 167 L 258 197.09375 L 228 197.09375 Z M 228 167 "/>
</clipPath>
<clipPath id="clip-8">
<path clip-rule="nonzero" d="M 256 167 L 287 167 L 287 197.09375 L 256 197.09375 Z M 256 167 "/>
</clipPath>
<clipPath id="clip-9">
<path clip-rule="nonzero" d="M 274 174 L 308 174 L 308 197.09375 L 274 197.09375 Z M 274 174 "/>
</clipPath>
<clipPath id="clip-10">
<path clip-rule="nonzero" d="M 285 163 L 319 163 L 319 197.09375 L 285 197.09375 Z M 285 163 "/>
</clipPath>
<clipPath id="clip-11">
<path clip-rule="nonzero" d="M 366 167 L 396 167 L 396 197.09375 L 366 197.09375 Z M 366 167 "/>
</clipPath>
<clipPath id="clip-12">
<path clip-rule="nonzero" d="M 394 167 L 424 167 L 424 197.09375 L 394 197.09375 Z M 394 167 "/>
</clipPath>
<clipPath id="clip-13">
<path clip-rule="nonzero" d="M 423 167 L 453 167 L 453 197.09375 L 423 197.09375 Z M 423 167 "/>
</clipPath>
<clipPath id="clip-14">
<path clip-rule="nonzero" d="M 451 167 L 481 167 L 481 197.09375 L 451 197.09375 Z M 451 167 "/>
</clipPath>
<clipPath id="clip-15">
<path clip-rule="nonzero" d="M 468 174 L 503 174 L 503 197.09375 L 468 197.09375 Z M 468 174 "/>
</clipPath>
<clipPath id="clip-16">
<path clip-rule="nonzero" d="M 479 163 L 514 163 L 514 197.09375 L 479 197.09375 Z M 479 163 "/>
</clipPath>
<clipPath id="clip-17">
<path clip-rule="nonzero" d="M 574 167 L 605 167 L 605 197.09375 L 574 197.09375 Z M 574 167 "/>
</clipPath>
<clipPath id="clip-18">
<path clip-rule="nonzero" d="M 603 167 L 633 167 L 633 197.09375 L 603 197.09375 Z M 603 167 "/>
</clipPath>
<clipPath id="clip-19">
<path clip-rule="nonzero" d="M 631 167 L 661 167 L 661 197.09375 L 631 197.09375 Z M 631 167 "/>
</clipPath>
<clipPath id="clip-20">
<path clip-rule="nonzero" d="M 659 167 L 690 167 L 690 197.09375 L 659 197.09375 Z M 659 167 "/>
</clipPath>
<clipPath id="clip-21">
<path clip-rule="nonzero" d="M 688 167 L 718 167 L 718 197.09375 L 688 197.09375 Z M 688 167 "/>
</clipPath>
<clipPath id="clip-22">
<path clip-rule="nonzero" d="M 705 174 L 740 174 L 740 197.09375 L 705 197.09375 Z M 705 174 "/>
</clipPath>
<clipPath id="clip-23">
<path clip-rule="nonzero" d="M 716 163 L 751 163 L 751 197.09375 L 716 197.09375 Z M 716 163 "/>
</clipPath>
<clipPath id="clip-24">
<path clip-rule="nonzero" d="M 749 130 L 772.011719 130 L 772.011719 165 L 749 165 Z M 749 130 "/>
</clipPath>
<clipPath id="clip-25">
<path clip-rule="nonzero" d="M 749 102 L 772.011719 102 L 772.011719 136 L 749 136 Z M 749 102 "/>
</clipPath>
<clipPath id="clip-26">
<path clip-rule="nonzero" d="M 749 74 L 772.011719 74 L 772.011719 108 L 749 108 Z M 749 74 "/>
</clipPath>
<clipPath id="clip-27">
<path clip-rule="nonzero" d="M 749 45 L 772.011719 45 L 772.011719 80 L 749 80 Z M 749 45 "/>
</clipPath>
<clipPath id="clip-28">
<path clip-rule="nonzero" d="M 749 17 L 772.011719 17 L 772.011719 51 L 749 51 Z M 749 17 "/>
</clipPath>
<clipPath id="clip-29">
<path clip-rule="nonzero" d="M 749 0 L 772.011719 0 L 772.011719 23 L 749 23 Z M 749 0 "/>
</clipPath>
<clipPath id="clip-30">
<path clip-rule="nonzero" d="M 629 0 L 772.011719 0 L 772.011719 1 L 629 1 Z M 629 0 "/>
</clipPath>
<clipPath id="clip-31">
<path clip-rule="nonzero" d="M 771 0 L 772.011719 0 L 772.011719 143 L 771 143 Z M 771 0 "/>
</clipPath>
</defs>
<g clip-path="url(#clip-0)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 28.346437 0.0006875 L 56.694094 0.0006875 L 56.694094 28.348344 L 28.346437 28.348344 Z M 28.346437 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<g clip-path="url(#clip-1)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 56.694094 0.0006875 L 67.608156 10.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 56.694094 28.348344 L 67.608156 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 28.346437 28.348344 L 39.2605 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 39.2605 39.2585 L 67.608156 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 67.608156 10.91475 L 67.608156 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-2)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 105.768312 0.0006875 L 134.115969 0.0006875 L 134.115969 28.348344 L 105.768312 28.348344 Z M 105.768312 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 105.768312 28.348344 L 134.115969 28.348344 L 134.115969 56.692094 L 105.768312 56.692094 Z M 105.768312 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-3)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 134.115969 0.0006875 L 162.463625 0.0006875 L 162.463625 28.348344 L 134.115969 28.348344 Z M 134.115969 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 134.115969 28.348344 L 162.463625 28.348344 L 162.463625 56.692094 L 134.115969 56.692094 Z M 134.115969 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-4)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 162.463625 0.0006875 L 173.377688 10.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<g clip-path="url(#clip-5)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 173.377688 10.91475 L 184.287844 21.824906 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 162.463625 28.348344 L 173.377688 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 173.377688 39.2585 L 184.287844 50.172562 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 162.463625 56.692094 L 173.377688 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 173.377688 67.606156 L 184.287844 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 105.768312 56.692094 L 127.596437 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 134.115969 56.692094 L 155.944094 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 116.682375 67.606156 L 173.377688 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 127.596437 78.520219 L 184.287844 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 173.377688 10.91475 L 173.377688 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 184.287844 21.824906 L 184.287844 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-6)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 228.553469 0.0006875 L 256.901125 0.0006875 L 256.901125 28.348344 L 228.553469 28.348344 Z M 228.553469 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 228.553469 28.348344 L 256.901125 28.348344 L 256.901125 56.692094 L 228.553469 56.692094 Z M 228.553469 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 228.553469 56.692094 L 256.901125 56.692094 L 256.901125 85.03975 L 228.553469 85.03975 Z M 228.553469 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-7)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 256.901125 0.0006875 L 285.248781 0.0006875 L 285.248781 28.348344 L 256.901125 28.348344 Z M 256.901125 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 256.901125 28.348344 L 285.248781 28.348344 L 285.248781 56.692094 L 256.901125 56.692094 Z M 256.901125 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 256.901125 56.692094 L 285.248781 56.692094 L 285.248781 85.03975 L 256.901125 85.03975 Z M 256.901125 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-8)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 285.248781 0.0006875 L 313.596437 0.0006875 L 313.596437 28.348344 L 285.248781 28.348344 Z M 285.248781 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 285.248781 28.348344 L 313.596437 28.348344 L 313.596437 56.692094 L 285.248781 56.692094 Z M 285.248781 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 285.248781 56.692094 L 313.596437 56.692094 L 313.596437 85.03975 L 285.248781 85.03975 Z M 285.248781 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-9)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 313.596437 0.0006875 L 324.506594 10.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<g clip-path="url(#clip-10)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 324.506594 10.91475 L 335.420656 21.824906 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 335.420656 21.824906 L 346.334719 32.738969 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 313.596437 28.348344 L 324.506594 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 324.506594 39.2585 L 335.420656 50.172562 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 335.420656 50.172562 L 346.334719 61.086625 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 313.596437 56.692094 L 324.506594 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 324.506594 67.606156 L 335.420656 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 335.420656 78.520219 L 346.334719 89.434281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 313.596437 85.03975 L 324.506594 95.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 324.506594 95.953812 L 335.420656 106.867875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 335.420656 106.867875 L 346.334719 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 228.553469 85.03975 L 261.295656 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 256.901125 85.03975 L 289.639406 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 285.248781 85.03975 L 317.987062 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 239.467531 95.953812 L 324.506594 95.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 250.381594 106.867875 L 335.420656 106.867875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 261.295656 117.781937 L 346.334719 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 324.506594 10.91475 L 324.506594 95.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 335.420656 21.824906 L 335.420656 106.867875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 346.334719 32.738969 L 346.334719 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-11)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 394.819094 0.0006875 L 423.16675 0.0006875 L 423.16675 28.348344 L 394.819094 28.348344 Z M 394.819094 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 394.819094 28.348344 L 423.16675 28.348344 L 423.16675 56.692094 L 394.819094 56.692094 Z M 394.819094 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 394.819094 56.692094 L 423.16675 56.692094 L 423.16675 85.03975 L 394.819094 85.03975 Z M 394.819094 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 394.819094 85.03975 L 423.16675 85.03975 L 423.16675 113.387406 L 394.819094 113.387406 Z M 394.819094 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-12)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 423.16675 0.0006875 L 451.514406 0.0006875 L 451.514406 28.348344 L 423.16675 28.348344 Z M 423.16675 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 423.16675 28.348344 L 451.514406 28.348344 L 451.514406 56.692094 L 423.16675 56.692094 Z M 423.16675 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 423.16675 56.692094 L 451.514406 56.692094 L 451.514406 85.03975 L 423.16675 85.03975 Z M 423.16675 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 423.16675 85.03975 L 451.514406 85.03975 L 451.514406 113.387406 L 423.16675 113.387406 Z M 423.16675 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-13)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 451.514406 0.0006875 L 479.858156 0.0006875 L 479.858156 28.348344 L 451.514406 28.348344 Z M 451.514406 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 451.514406 28.348344 L 479.858156 28.348344 L 479.858156 56.692094 L 451.514406 56.692094 Z M 451.514406 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 451.514406 56.692094 L 479.858156 56.692094 L 479.858156 85.03975 L 451.514406 85.03975 Z M 451.514406 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 451.514406 85.03975 L 479.858156 85.03975 L 479.858156 113.387406 L 451.514406 113.387406 Z M 451.514406 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-14)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 479.858156 0.0006875 L 508.205812 0.0006875 L 508.205812 28.348344 L 479.858156 28.348344 Z M 479.858156 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 479.858156 28.348344 L 508.205812 28.348344 L 508.205812 56.692094 L 479.858156 56.692094 Z M 479.858156 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 479.858156 56.692094 L 508.205812 56.692094 L 508.205812 85.03975 L 479.858156 85.03975 Z M 479.858156 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 479.858156 85.03975 L 508.205812 85.03975 L 508.205812 113.387406 L 479.858156 113.387406 Z M 479.858156 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-15)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 508.205812 0.0006875 L 519.119875 10.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<g clip-path="url(#clip-16)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 10.91475 L 530.033937 21.824906 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 21.824906 L 540.948 32.738969 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 32.738969 L 551.858156 43.653031 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 508.205812 28.348344 L 519.119875 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 39.2585 L 530.033937 50.172562 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 50.172562 L 540.948 61.086625 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 61.086625 L 551.858156 72.000687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 508.205812 56.692094 L 519.119875 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 67.606156 L 530.033937 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 78.520219 L 540.948 89.434281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 89.434281 L 551.858156 100.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 508.205812 85.03975 L 519.119875 95.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 95.953812 L 530.033937 106.867875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 106.867875 L 540.948 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 117.781937 L 551.858156 128.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 508.205812 113.387406 L 519.119875 124.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 124.301469 L 530.033937 135.215531 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 135.215531 L 540.948 146.125687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 146.125687 L 551.858156 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 394.819094 113.387406 L 438.471437 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 423.16675 113.387406 L 466.819094 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 451.514406 113.387406 L 495.16675 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 479.858156 113.387406 L 523.514406 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 405.733156 124.301469 L 519.119875 124.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 416.647219 135.215531 L 530.033937 135.215531 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 427.561281 146.125687 L 540.948 146.125687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 438.471437 157.03975 L 551.858156 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 519.119875 10.91475 L 519.119875 124.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 530.033937 21.824906 L 530.033937 135.215531 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 540.948 32.738969 L 540.948 146.125687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 551.858156 43.653031 L 551.858156 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-17)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 0.0006875 L 631.615969 0.0006875 L 631.615969 28.348344 L 603.268312 28.348344 Z M 603.268312 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 28.348344 L 631.615969 28.348344 L 631.615969 56.692094 L 603.268312 56.692094 Z M 603.268312 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 56.692094 L 631.615969 56.692094 L 631.615969 85.03975 L 603.268312 85.03975 Z M 603.268312 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 85.03975 L 631.615969 85.03975 L 631.615969 113.387406 L 603.268312 113.387406 Z M 603.268312 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 113.387406 L 631.615969 113.387406 L 631.615969 141.735062 L 603.268312 141.735062 Z M 603.268312 113.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-18)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 0.0006875 L 659.963625 0.0006875 L 659.963625 28.348344 L 631.615969 28.348344 Z M 631.615969 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 28.348344 L 659.963625 28.348344 L 659.963625 56.692094 L 631.615969 56.692094 Z M 631.615969 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 56.692094 L 659.963625 56.692094 L 659.963625 85.03975 L 631.615969 85.03975 Z M 631.615969 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 85.03975 L 659.963625 85.03975 L 659.963625 113.387406 L 631.615969 113.387406 Z M 631.615969 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 113.387406 L 659.963625 113.387406 L 659.963625 141.735062 L 631.615969 141.735062 Z M 631.615969 113.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-19)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 0.0006875 L 688.311281 0.0006875 L 688.311281 28.348344 L 659.963625 28.348344 Z M 659.963625 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 28.348344 L 688.311281 28.348344 L 688.311281 56.692094 L 659.963625 56.692094 Z M 659.963625 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 56.692094 L 688.311281 56.692094 L 688.311281 85.03975 L 659.963625 85.03975 Z M 659.963625 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 85.03975 L 688.311281 85.03975 L 688.311281 113.387406 L 659.963625 113.387406 Z M 659.963625 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 113.387406 L 688.311281 113.387406 L 688.311281 141.735062 L 659.963625 141.735062 Z M 659.963625 113.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-20)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 0.0006875 L 716.655031 0.0006875 L 716.655031 28.348344 L 688.311281 28.348344 Z M 688.311281 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 28.348344 L 716.655031 28.348344 L 716.655031 56.692094 L 688.311281 56.692094 Z M 688.311281 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 56.692094 L 716.655031 56.692094 L 716.655031 85.03975 L 688.311281 85.03975 Z M 688.311281 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 85.03975 L 716.655031 85.03975 L 716.655031 113.387406 L 688.311281 113.387406 Z M 688.311281 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 113.387406 L 716.655031 113.387406 L 716.655031 141.735062 L 688.311281 141.735062 Z M 688.311281 113.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-21)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 0.0006875 L 745.002687 0.0006875 L 745.002687 28.348344 L 716.655031 28.348344 Z M 716.655031 0.0006875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 28.348344 L 745.002687 28.348344 L 745.002687 56.692094 L 716.655031 56.692094 Z M 716.655031 28.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 56.692094 L 745.002687 56.692094 L 745.002687 85.03975 L 716.655031 85.03975 Z M 716.655031 56.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 85.03975 L 745.002687 85.03975 L 745.002687 113.387406 L 716.655031 113.387406 Z M 716.655031 85.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 113.387406 L 745.002687 113.387406 L 745.002687 141.735062 L 716.655031 141.735062 Z M 716.655031 113.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-22)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 0.0006875 L 755.91675 10.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<g clip-path="url(#clip-23)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 10.91475 L 766.830812 21.824906 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 21.824906 L 777.744875 32.738969 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 32.738969 L 788.655031 43.653031 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-24)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 43.653031 L 799.569094 54.567094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 28.348344 L 755.91675 39.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 39.2585 L 766.830812 50.172562 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 50.172562 L 777.744875 61.086625 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 61.086625 L 788.655031 72.000687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-25)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 72.000687 L 799.569094 82.91475 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 56.692094 L 755.91675 67.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 67.606156 L 766.830812 78.520219 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 78.520219 L 777.744875 89.434281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 89.434281 L 788.655031 100.348344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-26)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 100.348344 L 799.569094 111.2585 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 85.03975 L 755.91675 95.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 95.953812 L 766.830812 106.867875 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 106.867875 L 777.744875 117.781937 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 117.781937 L 788.655031 128.692094 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-27)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 128.692094 L 799.569094 139.606156 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 113.387406 L 755.91675 124.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 124.301469 L 766.830812 135.215531 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 135.215531 L 777.744875 146.125687 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 146.125687 L 788.655031 157.03975 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-28)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 157.03975 L 799.569094 167.953812 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 745.002687 141.735062 L 755.91675 152.649125 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 152.649125 L 766.830812 163.559281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 163.559281 L 777.744875 174.473344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 174.473344 L 788.655031 185.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-29)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 185.387406 L 799.569094 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 603.268312 141.735062 L 657.834719 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 631.615969 141.735062 L 686.182375 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 659.963625 141.735062 L 714.530031 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 688.311281 141.735062 L 742.877687 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 716.655031 141.735062 L 771.221437 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 614.182375 152.649125 L 755.91675 152.649125 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 625.096437 163.559281 L 766.830812 163.559281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 636.0105 174.473344 L 777.744875 174.473344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 646.920656 185.387406 L 788.655031 185.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-30)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 657.834719 196.301469 L 799.569094 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 755.91675 10.91475 L 755.91675 152.649125 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 766.830812 21.824906 L 766.830812 163.559281 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 777.744875 32.738969 L 777.744875 174.473344 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 788.655031 43.653031 L 788.655031 185.387406 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
<g clip-path="url(#clip-31)">
<path fill="none" stroke-width="0.79701" stroke-linecap="butt" stroke-linejoin="miter" stroke="rgb(100%, 100%, 100%)" stroke-opacity="1" stroke-miterlimit="10" d="M 799.569094 54.567094 L 799.569094 196.301469 " transform="matrix(1, 0, 0, -1, -27.948, 196.696)"/>
</g>
</svg>


De fem første kubikktallene er $1^{3}, 2^{3}, 3^{3}, 4^{3}$ og $5^{3}$, se figuren over. La $S_{n}$ være summen av de $n$ første kubikktallene.

>[!oppgave]
>a) Beskriv den rekursive sammenhengen mellom $S_{n}$ og $S_{n+1}$. Bestem en eksplisitt formel for $S_{n}$.
>b) Lag et program som regner ut $S_{50}$ ved å bruke den rekursive sammenhengen du fant i oppgave a.
>c) Bruk induksjonsbevis til å bevise den eksplisitte formelen for $S_{n}$.

## Fasit

a) $S_{n+1}=S_{n}+(n+1)^{3}$ og $S_{n}=\frac{1}{4}\left( n^{4}+2n^{3}+n^{2} \right)$
b) $S_{50}=1625625$

## Løsningsforslag

### 2-4a
Jeg setter opp de første leddene og ser om jeg finner en rekursiv sammenheng som jeg kan bruke.

$$
\begin{aligned}
S_{1}&=1^{3}\\
S_{2}&=1^{3}+2^{3}=S_{1}+2^{3}\\
S_{3}&=1^{3}+2^{3}+3^{3}=S_{2}+3^{3}
\end{aligned}
$$

Jeg ser at hvert ledd er det forrige leddet, pluss det neste kubikktallet. En rekursiv sammenheng mellom summene er altså

$$
\underline{\underline{S_{n+1}=S_{n}+(n+1)^{3}}}
$$

For å bestemme en eksplisitt formel brukte jeg regresjon i GeoGebra.

![](/img/user/_resources/s2-v24-2-4a.png)

En eksplisitt formel for summene er

$$S_{n}=\underline{\underline{\frac{1}{4}\left( n^{4}+ 2n^{3}+n^{2} \right)}}$$

### 2-4b
Jeg bruker følgende program

```python
S = 0 # starter summen på 0

for n in range(1, 51):
	# kjører løkka 50 ganger
	S = S + n**3 #legger n^3 til S

print(S)
```

**Programmet gir at $S_{50}=1 \, 625 \, 625$.**


</div></div>


## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kuleflate-og-plan/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kuleflate og plan

Punktene $A(1, 2, 1)$ og $B(3, 0, -3)$ ligger på en kuleflate. $AB$ er en diameter til kuleflaten. Planet $\gamma$ er gitt ved likningen $x + 2y + 2z = 14$.

>[!oppgave]
>a) Finn den minste avstanden fra kuleflaten til planet $\gamma$.

Et plan $\alpha$ har samme avstand til kuleflaten og er parallelt med planet $\gamma$.

>[!oppgave]
>b) Bestem en likning for planet $\alpha$.

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-5\|Løsningsforslag R2 eksamen V2024#Oppgave 2-5]]


</div></div>


## Oppgave 2-6


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/sum-av-integralrekke/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Sum av integralrekke


La $a_{1}>0$ og la $S(x)$ være summen av ei rekke gitt ved 
$$
S(x)=\sum_{n=0}^{\infty}a_{1} \cdot \left( \int_{0}^{x} e^{-t} \, \mathrm{d}t  \right)^{n}
$$

Bestem $a_{1}$ slik at den minste mulige summen blir 1.

## Fasit


</div></div>

