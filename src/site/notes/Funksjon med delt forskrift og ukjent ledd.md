---
{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["kontinuitet","derivasjon","funksjoner"],"fag":["s1"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"poeng":3,"title":"Funksjon med delt forskrift og ukjent ledd","status":3,"source":null,"todo":null,"dg-permalink":"/funksjon-med-delt-forskrift-og-ukjent-ledd/","permalink":"/funksjon-med-delt-forskrift-og-ukjent-ledd/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-19","modified":"2026-03-26","aliases":[],"temaer":["kontinuitet","derivasjon","funksjoner"],"fag":["s1"],"eksamen":"v25","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"poeng":3,"title":"Funksjon med delt forskrift og ukjent ledd","status":3,"source":null,"todo":null}}
---


# Funksjon med delt forskrift og ukjent ledd

Amalie arbeider med en funksjon $f$ med delt forskrift og skal vise funksjonsuttrykket til de andre i klassen. Dessverre har hun sølt på arket sitt og klarer ikke å lese alt som står der.

$$
f(x) = \begin{cases} 
-9x - 15\text{,} & x \le -2 \\
\blacksquare\blacksquare\blacksquare\blacksquare \text{,} & -2 < x < 1 \\ 
\dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} \quad  & x \ge 1 \end{cases}$$

Hun husker at $f$ er kontinuerlig for alle $x \in \mathbb{R}$. Hun husker også at uttrykket i midten er et tredjegradspolynom. I tillegg husker hun at $f'(-2) = -9$ og $f'(1) = 0$.

>[!oppgave]
>Bruk dette til å bestemme hele funksjonsuttrykket til $f$.

## Fasit

Delen som mangler er $-\dfrac{13}{27}x^{3} + \frac{7}{9}x^{2}- \frac{1}{9}x - \frac{113}{27}$

## Løsningsforslag
For at $f$ skal være kontinuerlig så må funksjonsverdien for $f(-2)=\lim_{ x \to -2^{+} }f(x)$ og $f(1)=\lim_{ x \to 1^{-} }f(x)$. Vi sjekker funksjonsverdiene.
$$
\begin{aligned}
f(-2)&=-9 \cdot (-2)-15=18-15=3 \\
f(1)&= \frac{1^{2}}{2}-1-\frac{7}{2}=\frac{1}{2}-\frac{2}{2}-\frac{7}{2}=-\frac{8}{2}=-4
\end{aligned}
$$
Tredjegradsfunksjonen vår bør altså gå mot $3$ når $x\to-2^{+}$ og $-4$ når $x\to 1^{-}$. 

I tillegg skal $f'(-2)=-9$ og $f'(1)=0$. Disse opplysningen sier oss at $f$ må være deriverbar i $x=-2$ og $x=1$. Jeg setter opp uttrykket for en tredjegradsfunksjon i CAS i GeoGebra i linje 1 og legger inn de fire opplysningene våre i linje 2.

![Løsning i CAS](/img/user/_resources/s1-v25-2-2-cas.png){width=50%}

**Det fullstendige funksjonsuttrykket for $f$ er**
$$
\underline{\underline{ f(x) = \begin{cases} 
-9x - 15\text{,} & x \le -2 \\
-\dfrac{13}{27}x^{3} + \frac{7}{9}x^{2}- \frac{1}{9}x - \frac{113}{27}  \text{,} & -2 < x < 1 \\ 
\dfrac{x^2}{2} - x - \dfrac{7}{2}\text{,} \quad  & x \ge 1 \end{cases} }}
$$


