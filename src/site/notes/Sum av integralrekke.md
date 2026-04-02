---
{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"dg-publish":true,"temaer":["rekker","uendelig rekke","utforskning","funksjoner","integral"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":6}],"title":"Sum av integralrekke","source":null,"todo":null,"dg-permalink":"/sum-av-integralrekke/","status":3,"permalink":"/sum-av-integralrekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-29","modified":"2024-05-29","aliases":null,"temaer":["rekker","uendelig rekke","utforskning","funksjoner","integral"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":6}],"title":"Sum av integralrekke","source":null,"todo":null,"status":3}}
---


# Sum av integralrekke


La $a_{1}>0$ og la $S(x)$ være summen av ei rekke gitt ved 
$$
S(x)=\sum_{n=0}^{\infty}a_{1} \cdot \left( \int_{0}^{x} e^{-t} \, \mathrm{d}t  \right)^{n}
$$

Bestem $a_{1}$ slik at den minste mulige summen blir 1.

## Fasit

Kanskje $a_{1}=\lim_{b \to 2^- } b$. Usikker.

## Løsningsforslag


> [!warning] Usikker løsning
> Jeg skrev denne løsningen rett etter eksamen. Jeg husker jeg var veldig usikker på om dette var svaret de var ute etter, om jeg hadde gjort noe galt eller om det er noe galt med oppgaven. Hvis jeg får tid så skal jeg undersøke videre.


$$
S(x)=\sum_{n=0}^{\infty}a_{1} \cdot \left( \int_{0}^{x} e^{-t} \, \mathrm{d}t  \right)^{n}
$$
Jeg ser at jeg kan bestemme integralet, så jeg begynner med det
$$
\int_{0}^{x} e^{-t} \, dt =\left[ -e^{-t} \right]_{0}^{x}=-e^{-x}-(-e^{0})=1-e^{-x}=1-\frac{1}{e^{x}}
$$
Jeg ser også at rekka er geometrisk med første ledd $a_{1}$ og kvotient $k(x)=1-\frac{1}{e^{x}}$.

Geometriske rekker er konvergente dersom $-1<k<1$. 

Jeg ser at 
$$
\lim_{ x \to \infty } \left( 1-\frac{1}{e^{x}} \right) = 1-0= 1
$$
Jeg undersøker om $k(x)>-1$ ved å sette opp likningen
$$
\begin{aligned}
k(x)&>-1\\
1-\frac{1}{e^{x}}&>-1\\
-\frac{1}{e^{x}}&>-2\\
\frac{1}{2}&<e^{x}\\
x&>\ln\left( \frac{1}{2} \right)\\
x&>\ln 1- \ln 2 \\
x&>-\ln 2
\end{aligned}
$$

Konvergensområdet til rekka er altså $-\ln 2 < x < \infty$.

$k(x)$ er strengt voksende, så vi bør få den minste summen når $x$ nærmer seg $-\ln 2$ fra den positive siden.

Hvis vi lar $x=- \ln 2$ så får vi
$$
S(x)=a_{1} \cdot e^{x} \iff 1=a_{1}\cdot e^{-\ln 2} \iff \frac{1}{a_{1}}=2^{-1}\iff a_{1}=2
$$

Verdien $x = -\ln 2$ ligger utenfor konvergensområdet, så summen $S(x) = 1$ oppnås aldri. Men $S(x)$ kan komme vilkårlig nær $1$ når $x \to (-\ln 2)^+$, og summen kan aldri bli lavere enn $1$. Den minste mulige summen er derfor $1$, og $a_1 = 2$.


>[!danger] Morsom løsning
>
>«Verdien» $a_{1}=e^{-x}$ vil gi
>$$S(x)=a_{1} \cdot e^{x}=e^{-x} \cdot e^{x} = 1 $$
>
>*Det er selvsagt implisert at $a_{1}$ er et tall og ikke en funksjon. Dette er derfor ikke et svar på oppgaven.*

