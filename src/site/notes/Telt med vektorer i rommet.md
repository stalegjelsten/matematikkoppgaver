---
{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["vektorer","areal"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":3}],"poeng":4,"title":"Telt med vektorer i rommet","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Areal av romtrekant via $\\tfrac12|\\vec{AB}\\times\\vec{AC}|$, og toppunkt på parameterframstilt linje via lengdebetingelse $|\\vec{CT}|=\\sqrt{17}$.","deloppgaver":[{"deloppgave":"a","kategori":1,"beskrivelse":"Kryssprodukt $\\vec{AB}\\times\\vec{AC}$ og halv lengde gir areal $\\tfrac{5}{2}\\sqrt{6}$."}],"dg-permalink":"/telt-med-vektorer-i-rommet/","permalink":"/telt-med-vektorer-i-rommet/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-20","modified":"2026-03-26","aliases":[],"temaer":["vektorer","areal"],"fag":["r2"],"eksamen":"h24","del":1,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":3}],"poeng":4,"title":"Telt med vektorer i rommet","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Areal av romtrekant via $\\tfrac12|\\vec{AB}\\times\\vec{AC}|$, og toppunkt på parameterframstilt linje via lengdebetingelse $|\\vec{CT}|=\\sqrt{17}$.","deloppgaver":[{"deloppgave":"a","kategori":1,"beskrivelse":"Kryssprodukt $\\vec{AB}\\times\\vec{AC}$ og halv lengde gir areal $\\tfrac{5}{2}\\sqrt{6}$."}]}}
---


# Telt med vektorer i rommet

Et telt står i en plan skråning. Teltet har tre rette teltstenger som er plassert i punktene $A(0, 0, 0)$, $B(3, 1, 2)$ og $C(-1, 3, 1)$. De tre teltstengene er samlet i toppunktet $T$.

>[!oppgave]
>a) Bestem arealet av bunnen i teltet.

Lengden av teltstanga fra punkt $C$ til punkt $T$ er $\sqrt{17}$. Teltstanga fra punkt $A$ til punkt $T$ følger linja $\ell$, gitt ved

$$
\ell: \begin{cases}
x=t &\\
y=t &\\
z=4t &
\end{cases}
$$

>[!oppgave]
>b) Bestem koordinatene til toppunktet $T$.

## Fasit

a) $\dfrac{5}{2}\sqrt{6}$
b) $T(1,\ 1,\ 4)$

## Løsningsforslag

### a
Jeg vet at arealet til et parallellogram utspent av $\vec{a}$ og $\vec{b}$ er gitt ved $\lvert \vec{a} \times \vec{b} \rvert$, derfor må arealet av  bunnen av teltet være gitt ved
$$
A_{\triangle}=\frac{1}{2} \left| \vec{AB} \times \vec{AC} \right|
$$
$$
\begin{aligned}
\vec{AB} \times \vec{AC} &=\begin{vmatrix}
\vec{e}_{x} &\vec{e}_{y} & \vec{e}_{z}\\
3 & 1 & 2\\
-1 & 3 & 1 
\end{vmatrix} \\
&=
\vec{e}_{x} \left(   1 \cdot 1 - 2 \cdot 3 \right)- \vec{e}_{y} \left( 3 \cdot 1 - 2 \cdot (-1) \right)+ \vec{e}_{z} ( 3 \cdot 3 - 1 \cdot (-1) ) \\
&=\begin{bmatrix}
-5, & -5, & 10
\end{bmatrix}
\end{aligned}
$$
Arealet er derfor
$$
A_{\triangle}=\frac{1}{2} \left| \vec{AB} \times \vec{AC} \right|=\frac{1}{2}\sqrt{ (-5)^{2}+(-5)^{2}+10^{2} }=\frac{1}{2}\sqrt{ 150 }=\frac{1}{2}\sqrt{ 25 \cdot 6 }=\frac{1}{2}5\cdot \sqrt{ 6 }=\underline{\underline{\frac{5}{2}\sqrt{ 6 }}}
$$
**Arealet av bunnen av teltet er $\underline{\underline{\frac{5}{2}\sqrt{ 6 }}}$.**

### b
$T$ ligger på linja $\ell$ med parameterframstillingen $T(t, t, 4t)$. Vi vet at lengden av teltstanga $CT$ er $\sqrt{17}$, altså $|\vec{CT}| = \sqrt{17}$. Vi setter opp:
$$
\begin{aligned}
|\vec{CT}|^{2} &= 17\\
(t-(-1))^{2}+(t-3)^{2}+(4t-1)^{2} &= 17\\
(t+1)^{2}+(t-3)^{2}+(4t-1)^{2} &= 17\\
t^{2}+2t+1+t^{2}-6t+9+16t^{2}-8t+1 &= 17\\
18t^{2}-12t+11 &= 17\\
18t^{2}-12t-6 &= 0\\
3t^{2}-2t-1 &= 0\\
(3t+1)(t-1) &= 0\\
t &= 1 \quad \vee \quad t=-\frac{1}{3}
\end{aligned}
$$
Fra figuren skal toppunktet befinne seg over $xy$-planet, så vi velger $t=1$.

**Koordinatene til toppunktet er $\underline{\underline{T(1,\,1,\,4)}}$.**
