---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"dg-publish":true,"temaer":["integral","areal under graf"],"fag":["s2","r2"],"eksamen":"v24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1},{"fag":"r2","del":1,"oppgave":1}],"title":"Bestemt integral og areal","source":"Eksamen S2 vår 2024","todo":null,"status":3,"permalink":"/bestemt-integral-og-areal/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2024-05-27","aliases":null,"temaer":["integral","areal under graf"],"fag":["s2","r2"],"eksamen":"v24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":1},{"fag":"r2","del":1,"oppgave":1}],"title":"Bestemt integral og areal","source":"Eksamen S2 vår 2024","todo":null,"status":3}}
---


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
