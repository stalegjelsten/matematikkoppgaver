---
{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["derivasjon","logaritmer"],"fag":["s1","r1"],"eksamen":"v24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":1},{"fag":"r1","del":1,"oppgave":1}],"poeng":2,"title":"Derivasjon med produktregel og ln","status":1,"source":null,"todo":null,"permalink":"/derivasjon-med-produktregel-og-ln/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-24","modified":"2026-03-26","aliases":[],"temaer":["derivasjon","logaritmer"],"fag":["s1","r1"],"eksamen":"v24","del":1,"oppgave":1,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":1},{"fag":"r1","del":1,"oppgave":1}],"poeng":2,"title":"Derivasjon med produktregel og ln","status":1,"source":null,"todo":null,"permalink":"/derivasjon-med-produktregel-og-ln/"}}
---


# Derivasjon med produktregel og ln


> [!oppgave] 
> 
> Deriver funksjonen.
> 
> $$f(x) = 4x^2 \cdot \ln(3x)$$

## Fasit

$f'(x)=4x \left( 2 \ln (3x) + 1  \right)$

## Løsningsforslag

Vi ønsker å bruke produktregelen, men da må vi kunne derivere begge faktorene. Jeg må derivere $\ln(3x)$ ved å bruke kjerneregelen først ved å sette $u=3x$
$$
\left( \ln (3x) \right)'= \left( \ln u \right)' \cdot u'=\frac{1}{u} \cdot 3 = \frac{3}{3x}=\frac{1}{x} 
$$

Vi bruker produktregelen.
$$
\begin{aligned}
f'(x)&=(4x^{2})' \cdot \ln(3x) + 4x^{2} \cdot  \left( \ln(3x) \right)' \\
&= 8x \cdot \ln (3x) + 4x^{2} \cdot \frac{1}{x} \\
&= 8x \cdot \ln (3x) + 4x \\
&= 4x \left( 2 \ln (3x) + 1  \right)
\end{aligned}
$$
