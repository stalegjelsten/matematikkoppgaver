---
{"aliases":null,"tags":["løsningsforslag"],"dg-publish":true,"title":null,"date":"2023-12-06","modified":"2024-05-15","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title"],"geometry":"margin=3cm","fontsize":"11pt","papersize":"a4","author":"Ståle Gjelsten","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}"],"fag":["s2"],"eksamen":"v24","permalink":"/losningsforslag/losningsforslag-s2-eksamen-v2024/","dgPassFrontmatter":true}
---


## Oppgave 1-1

### 1-1a
Dette integralet trenger ingen spesielle regler eller teknikker for å løses.

$$
\begin{aligned}
\int_{-1}^{0} \left( -x^{3}+3x \right)  \, dx \\
\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{-1}^0 \\
0-\left( -\frac{1}{4}(-1)^{4} + \frac{3}{2}(-1)^{2} \right) \\
-\left( -\frac{1}{4} + \frac{3}{2} \right)=-\frac{5}{4} 
\end{aligned}
$$

**Integralet er $\underline{\underline{-\frac{5}{4}}}$.** 

### 1-1b
Jeg finner først nullpunktene ved å faktorisere uttrykket.
$$
f(x)=-x^{3}+3x=-x(x^{2}-3)=-x\left(x^{2}-\left(  \sqrt{ 3 } \right)^{2} \right) = -x(x+\sqrt{ 3 })(x-\sqrt{ 3 })
$$
Vi har nullpunkter når $f(x)=0$, altså ved $x=-\sqrt{ 3 }, x=0, x=\sqrt{ 3 }$. Det er kun nullpunktet $x=0$ som ligger mellom $x=-1$ og $x=1$. 

$$
f(-1)=-(-1)^{3}+3(-1)=1-3=-2
$$
$$f(1)=-(1)^{3}+3 \cdot 1=-1+3=2$$

$f$ må være negativ i intervallet $[-1, 0\rangle$ og positiv i intervallet $\langle 0 , 1]$.

$$
\begin{aligned}
A&=-\int_{-1}^{0} f(x) \, dx + \int_{0}^{1} f(x) \, dx  \\
A&=- \left( -\frac{5}{4} \right) +\left[ -\frac{1}{4}x^{4}+\frac{3}{2}x^{2} \right]_{0}^1 \\
A&=\frac{5}{4} + -\frac{1}{4}+\frac{3}{2}=\frac{10}{4}=\frac{5}{2}

\end{aligned}
$$
**Arealet av området er $\underline{\underline{\frac{5}{2}}}$.**
>[!tip] Symmetri
>Du kan utnytte symmetrien til $f$ til å argumentere for at arealet avgrenset av $x=-1$, $f$, $x$-aksen og $x=0$ vil være like stort som arealet avgrenset av $f$, $x$-aksen, $x=0$ og $x=1$.


## Oppgave 1-3
### 1-3a
Programmet viser en aritmetisk følge hvor hvert ledd for $n>0$ er gitt ved $a_{n}=4n-2$. Programmet regner ut delsummene, $S_{n}$, til den tilhørende rekka. 

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

>[!tip] Systematisk oversikt eller tabell
>
>Dersom du ikke har sett at tallfølga er aritmetisk kan du sette opp en tabell eller systematisk oversikt. Du trenger ikke regne ut så veldig mange ledd, så en slik løsning bør kunne gi full uttelling.

## Oppgave 1-6

### 1-6a
For å finne forventningsverdien lager jeg en tabell og regner ut $\sum_{i=1}^6 x \cdot P(X=x)$ 

| $x$ |   $P(X=x)$    |         $x \cdot P(X=x)$          |
| :-: | :-----------: | :-------------------------------: |
|  1  | $\frac{1}{6}$ | $1 \cdot \frac{1}{6}=\frac{1}{6}$ |
|  2  | $\frac{1}{6}$ | $2\cdot \frac{1}{6}=\frac{2}{6}$  |
|  3  | $\frac{1}{6}$ | $3\cdot \frac{1}{6}=\frac{3}{6}$  |
|  4  | $\frac{1}{6}$ | $4\cdot \frac{1}{6}=\frac{4}{6}$  |
|  5  | $\frac{1}{6}$ | $5\cdot \frac{1}{6}=\frac{5}{6}$  |
|  6  | $\frac{1}{6}$ | $6\cdot \frac{1}{6}=\frac{6}{6}$  |
| Sum |       1       | $\frac{21}{6}=\frac{7}{2}=3{,}5$  |
**Forventningsverdien er 3,5.**

### 1-6b
Standardavviket til ett kast er $SD(X)=1{,}7$. 

Vi lar $S$ være summen av $n$ forsøk med $X$ slik at
$$
S=X_{1}+X_{2}+X_{3}+ \dots + X_{n}
$$
Da er variansen og standardavviket til $S$
$$
\text{Var}(S)=n \cdot \text{Var}(X) \implies SD(S)=\sqrt{ n } \cdot SD(X)
$$

På grunn av sentralgrensesetningen vil $S$ være tilnærmet normalfordelt. 

Fra normalfordelingstabellen så kan jeg finne ut at 68 % av arealet under normalfordelingskurven ligger innenfor pluss/minus ett standardavvik fra forventningsverdien. Altså må det være 32 % sannsynlighet for å få observasjon *mer enn* ett standardavvik fra forventningsverdien.

![s2-v24-1-6b.png](/img/user/_resources/s2-v24-1-6b.png)

Vi skal finne antallet ganger vi må kaste for at det er 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen. Siden vi vet at 32 % tilsvarer ett standardavvik må 17 øyne være ett standardavvik.
$$
\begin{aligned}
17&=\sqrt{ n } \cdot SD(X)\\
17 &= \sqrt{ n }\cdot 1{,}7\\
10 &= \sqrt{ n }\\
100 &= n
\end{aligned}
$$
Hilde må kaste terningen 100 ganger før det er omtrent 32 % sannsynlighet for at summen av antall øyne er mer enn 17 unna forventningsverdien for summen.