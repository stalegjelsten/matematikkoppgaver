---
{"oppgave":null,"aliases":null,"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":-3,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"dg-publish":true,"title":null,"author":"Ståle Gjelsten","date":"2024-05-27","modified":"","fag":["r2"],"eksamen":"v24","permalink":"/losningsforslag-r2-eksamen-v2024/","dgPassFrontmatter":true}
---


## Oppgave 2-6

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
Men løsningen $a_{1}=2$ stemmer selvsagt ikke siden $-\ln 2$ ikke ligger i konvergensområdet. Kanskje løsningen på denne oppgaven dermed er 
$$
a_{1}=\lim_{b \to 2^- } b
$$

>[!danger] Morsom løsning
>
«Verdien» $a_{1}=e^{-x}$ vil gi
>$$S(x)=a_{1} \cdot e^{x}=e^{-x} \cdot e^{x} = 1 $$
