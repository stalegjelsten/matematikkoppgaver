---
{"temaer":null,"del":null,"fag":"s1","eksamen":"v23","tags":["matematikk","løsningsforslag"],"alias":[null],"dg-publish":true,"title":"Løsningsforslag S1 eksamen V2023","date":"2023-05-23","modified":"2023-05-29","geometry":"margin=3cm","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","author":"Ståle Gjelsten","header-includes":["\\usepackage{mathtools,cancel,gensymb,amsmath,amssymb,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}"],"permalink":"/losningsforslag/losningsforslag-s1-eksamen-v2023/","dgPassFrontmatter":true}
---


# Løsningsforslag S1 eksamen V2023

## Oppgave 1-1
$$
\frac{\left( 2ab^{-1} \right)^3 \cdot \left( a^2b^{-2} \right)^{-1}  }{4a^2b^{-3}} = \frac{2^3a^3b^{-1\cdot3}a^{2\cdot(-1)}b^{(-2)\cdot(-1)}a^{-2}b^{3}}{4}=\frac{8}{4}\cdot a^{(3-2-2)}\cdot b^{(-3+2+3)}=\underline{\underline{\frac{2b^2}{a}}}
$$

## Oppgave 1-2
Bruker produktregelen med $u=x, v=\ln x$.

$$
f'(x)=(u'\cdot v+u\cdot v')=1\cdot \ln x+\cancelto{ 1 }{ x\cdot \frac{1}{x} }=\underline{\underline{\ln x + 1}}
$$

## Oppgave 1-3
Ser at både teller og nevner går mot null når $x\to 2$. Vi kan derfor bruke L'Hopitals regel. 

$$
\lim_{ x \to 2 } \frac{f(x)}{g(x)} = \lim_{ x \to 2 } \frac{f'(x)}{g'(x)}=\lim_{ x \to 2 }  \frac{3x^2}{2x}=\lim_{ x \to 2 } \frac{3x}{2}=\frac{3\cdot2}{2}=\underline{\underline{3}}
$$

## Oppgave 1-4

### 1-4a
Dette er et hypergeometrisk forsøk siden vi har to typer objekter og skal trekke $k_{1}=2$ av den ene typen og $k_{2}=1$ av den andre typen

$$
\frac{ \binom{n_{1}}{k_{1}}\binom{n_{2}}{k_{2}}}{\binom{n}{k}} = \frac{ \binom{3}{2}\binom{4}{1}}{\binom{7}{3}} = \frac{\frac{3!}{2!\cdot 1!}\cdot4}{\frac{7!}{3!\cdot4!}}=\frac{3\cdot4}{\frac{7\cdot6\cdot 5}{3\cdot2}}=\frac{12\cdot3\cdot2}{210}=\frac{72}{210}=\frac{12}{35}
$$

### 1-4b
La $X$ være antall hvite kuler. Da er 

$$P(X\geq 2)=1-P(X\leq 1)=1-\left( P(X=1) +P(X=0)\right)$$

Vi har allerede bestemt sannsynligheten for $P(X=1)=\frac{12}{35}$ i oppgave a).

$$
P(X=0)=\frac{3}{7}\cdot \frac{2}{6}\cdot \frac{1}{5} = \frac{3\cdot 2}{7\cdot6\cdot 5}=\frac{6}{210}=\frac{1}{35}
$$

$$
P(X\geq 2)=1-\left(  \frac{12}{35}+\frac{1}{35} \right)=1- \frac{13}{35}=\underline{\underline{\frac{22}{35}}}
$$

## Oppgave 1-5
Programmet regner ut en tilnærmingsverdi for den deriverte av $K(x)=0{,}2x^2+140x+7000$ i punktet $x$ helt fram til den deriverte når verdien 260.

Vi kan løse denne oppgaven for hånd ved å derivere $K$ og sette svaret lik 260.

$$
\begin{aligned}
K'(x)&=0{,}4x+140\\
260&=0{,}4x+140\\
120&=0{,}4x\\
x&= \frac{120}{0{,}4}\\
x&=300
\end{aligned}
$$

**Svaret fra programmet blir 300. Svaret forteller bedriften at ved produksjon av 300 enheter så stiger kostnadene med 260 kroner per enhet.**
