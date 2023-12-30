---
{"temaer":null,"del":null,"oppgave":null,"tags":["matematikk","løsningsforslag"],"fag":["r1"],"eksamen":"h23","aliases":[],"dg-publish":true,"title":"Løsningsforslag R1 eksamen H2023","date":"2023-11-15","modified":"2023-11-15","geometry":"margin=3cm","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","author":"Ståle Gjelsten","header-includes":["\\usepackage{mathtools,cancel,gensymb,amsmath,amssymb,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}"],"permalink":"/losningsforslag/losningsforslag-r1-eksamen-h2023/","dgPassFrontmatter":true}
---


# Løsningsforslag R1 eksamen H2023

## Oppgave 1-1
Bruker produktregelen for derivasjon.

$$
\begin{aligned}
f(x)&=x^{2} \cdot \ln(x)\\
f'(x)&=2x \cdot \ln(x)+x^{2} \cdot \frac{1}{x}\\
f'(x)&=2x\ln (x)+x\\
f'(x)&=x(2\ln (x)+1)
\end{aligned}
$$

## Oppgave 1-2
Jeg prøver å skrive om de ulike uttrykkene.

$$
2 \ln e^{3}=2\cdot3 \ln e=6\cdot 1= 6
$$

$$
3 \lg 70 = 3 \log (7\cdot 10)=3(\log 7 + \log 10)=3(\log 7 + 1)=3 \log 7 + 3
$$

$$
e^{3 \ln 2}=\left( e^{\ln 2} \right)^{3}=2^3=8
$$

Jeg vet at $\log 10=1$ og $\log 1 =0$, derfor må 

$$0<\log 7<1 \iff 0 < 3\log 7 < 3$$

Uttrykk nummer 2 er må altså være mindre enn 6. 

**Rekkefølgen på uttrykkene er $3 \lg 70$, $2 \ln e^{3}$, $e^{3 \ln 2}$.**

## Oppgave 1-3
### 1-3a
Jeg definerer vektorene

$$
\begin{aligned}
\vec{AB}=\left[ 2-(-3), -2-(-1) \right] = \left[ 5, -1 \right] \\
\vec{BC}=\left[ 5-2, 2-(-2) \right] = \left[ 3, 4 \right] \\
\vec{AC}=\left[ 5-(-3), 2-(-1) \right] = \left[ 8, 3 \right] 
\end{aligned}
$$

Lengden av vektorene er da gitt ved:

$$
\begin{aligned}
\lvert \vec{AB} \rvert &= \sqrt{ 5^{2}+(-1)^{2} }=\sqrt{ 26 }\\
\lvert \vec{BC} \rvert &= \sqrt{ 3^{2} + 4^{2} } = \sqrt{ 25 } = 5\\
\lvert \vec{AC} \rvert &= \sqrt{ 8^{2} + 3^{2} } = \sqrt{ 64+9 } = \sqrt{ 73 }
\end{aligned}
$$

**Side $BC$ er kortest.**

### 1-3b
Vinkelen mellom $\vec{a}$ og $\vec{b}$ er $90 \degree$ hvis og bare hvis $\vec{a} \cdot \vec{b}=0$.

Beregner skalarproduktet mellom vektorene

$$
\begin{aligned}
 \vec{AB} \cdot  \vec{BC}&=5 \cdot 3 + (-1) \cdot 4 =15-4=11\\
 \vec{AB} \cdot  \vec{AC} &= 5 \cdot 8 + (-1) \cdot 3 = 40-3=37\\
 \vec{BC} \cdot  \vec{AC} &= 3\cdot 8 + 4 \cdot 3=36
\end{aligned}
$$

**Ingen av vinklene er $90 \degree$.**

## Oppgave 1-4
### 1-4a
Egil har forsøkt å sjekke når den deriverte skifter fortegn. Han vet tydeligvis at siden $f$ har positiv koeffisient foran $x^2$-leddet så vil andregradsfunksjonen ha et bunnpunkt. Han sjekker derfor den deriverte i punkter langs $x$-aksen helt til den deriverte blir positiv eller null.

### 1-4b
Problemet til Egil er at han kun sjekker den deriverte i heltallsverdier for $x$. Hvis vi endrer linja `a = a + 1` til for eksempel `a = a + 0.001` tar vi mye mindre steg i $x$-retningen og får et ganske nøyaktig svar.

```python
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 0.001
print("Bunnpunktet er", (a, f(a)))
```
