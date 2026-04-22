---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["integral","volum","omdreiningslegeme","bevis"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":6}],"poeng":2,"title":"Omdreiningslegeme av sirkel om y-aksen","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Vise at volum av torus dannet ved rotasjon av sirkel (sentrum $(a,0)$, radius $R$) om $y$-aksen er $V=2\\pi^2 R^2 a$ via skall- eller skivemetoden.","dg-permalink":"/omdreiningslegeme-av-sirkel-om-y-aksen/","permalink":"/omdreiningslegeme-av-sirkel-om-y-aksen/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["integral","volum","omdreiningslegeme","bevis"],"fag":["r2"],"eksamen":"h24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":6}],"poeng":2,"title":"Omdreiningslegeme av sirkel om y-aksen","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Vise at volum av torus dannet ved rotasjon av sirkel (sentrum $(a,0)$, radius $R$) om $y$-aksen er $V=2\\pi^2 R^2 a$ via skall- eller skivemetoden."}}
---


# Omdreiningslegeme av sirkel om y-aksen

En sirkel har sentrum i $S(a, 0)$ og har radius $R < a$. Sirkelen roteres om $y$-aksen.

>[!oppgave]
>Vis at volumet av omdreiningslegemet blir $2\pi^2 R^2 a$.

## Fasit

$V = 2\pi^2 R^2 a$ (bevis)

## Løsningsforslag

![Flytting av sirkelen i oppgave 6](/img/user/_resources/r2-h24-2-6-sirkler.png){width=50%}

For å gjøre jobben enklere for meg selv så vil jeg flytte sirkelen fra $S(a,0)$ til $S^*(0,a)$ og rotere sirkelen om $x$-aksen istedenfor om $y$-aksen. Sirkelens radius er fremdeles $R<a$.

En sirkel har likningen $x^{2}+y^{2}=R^{2}$, eller omskrevet for $y$ får vi
$$
y=\pm \sqrt{ R^{2} - x^{2} }
$$

Der den positive løsningen vil gi oss den øvre halvsirkelen, og den negative løsningen gir oss den nedre halvsirkelen.

Vår sirkel er forskjøvet med $a$ enheter i positiv $y$-retning, derfor er uttrykket for sirkelen vår
$$
y=\pm \sqrt{ R^{2}-x^{2} }+a
$$

Vi kan bruke formelen for omdreiningslegeme for å finne volumet. Vi bruker først formelen for den øvre halvsirkelen og finner dermed volumet av en slags smultring uten hull. Deretter lager vi et hull i smultringen ved å trekke fra volumet av omdreiningslegemet definert av den nedre halvsirkelen.

Formelen for 360º omdreining rundt $x$-aksen er
$$
V=\pi \int_{a}^{b} \left( f(x) \right) ^{2} \, dx 
$$

Grensene for integrasjonen er $x=-R$ og $x=R$.

![](/img/user/_resources/r2-h24-2-6.png)

$R$ er positiv, så vi har $\text{sgn}(R)=1$ i vårt tilfelle (se faktaboks lenger nede for mer info). 

**Volumet av omdreiningslegemet er $2\pi^{2} R^{2}a$, som skulle vises.**

>[!warning] sgn-funksjonen
>
>GeoGebra gir oss en litt ukjent `sgn(R)`-funksjon i tillegg til uttrykket vi skulle finne. `sgn()`-funksjonen er definert slik >
>$$
>\text{sgn}(x)=\begin{cases} 1 &\quad \text{hvis } x>0 \\ 
> 0&\quad \text{hvis } x=0 \\ 
> -1&\quad \text{hvis } x<0
>\end{cases}
>$$
>Hvis du møter på slike ukjente funksjoner på eksamen, prøv å skrive inn `sgn(2)` og `sgn(-5)` i GeoGebra og sjekk hva du får som svar, eller forsøk å tegne funksjonen.
