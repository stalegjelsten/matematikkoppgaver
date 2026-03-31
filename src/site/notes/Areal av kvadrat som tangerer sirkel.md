---
{"tags":["oppgave"],"date":"2025-11-18","modified":"2026-03-14","aliases":[],"dg-publish":true,"temaer":null,"fag":["gruble"],"eksamen":null,"del":null,"oppgave":null,"oppgavenummer":[{"fag":"gruble"}],"title":"Areal av kvadrat som tangerer sirkel","source":null,"todo":null,"permalink":"/areal-av-kvadrat-som-tangerer-sirkel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-18","modified":"2026-03-14","aliases":[],"temaer":null,"fag":["gruble"],"eksamen":null,"del":null,"oppgave":null,"oppgavenummer":[{"fag":"gruble"}],"title":"Areal av kvadrat som tangerer sirkel","source":null,"todo":null,"permalink":"/areal-av-kvadrat-som-tangerer-sirkel/"}}
---


# Areal av kvadrat som tangerer sirkel

![Kvadrat og sirkel](/img/user/_resources/areal-av-kvadrat-som-kvadrerer-sirkel.png)

> [!oppgave]
>  Hva er arealet av kvadratet?

## Fasit

$A=16$

## Løsningsforslag
Jeg kaller sidekanten i kvadratet for $s$ og radiusen i sirkelen for $r$, slik at $s=2r-1$. 

Jeg flytter først kvadratet 0,5 mot høyre for å vise at avstanden fra sirkelen til den øvre sidekanten er 0,5:

![Flytter kvadratet](/img/user/_resources/areal-av-kvadrat-i-sirkel-lf.png)

Hvis vi lager en rettvinklet trekant fra sentrum av sirkelen til NØ-hjørnet får vi:

![Lager rettvinklet trekant](/img/user/_resources/areal-av-kvadrat-sirkel-lf-2.png)

Vi kan nå bruke Pytagoras og sette opp likningen for den rettvinklede trekanten
$$
\begin{aligned}
r^{2}&=(r-1)^{2}+\left( r-\frac{1}{2} \right)^{2} \\
r^{2}&=r^{2}-2r+1 + r^{2}-r+\frac{1}{4} \\
r^{2}&=2r^{2}-3r+\frac{5}{4} \\
0 &= r^{2}-3r+\frac{5}{4}
\end{aligned}
$$

Løsning med andregradsformelen gir
$$
r=\frac{3 \pm \sqrt{ (-3)^{2}-4 \cdot 1 \cdot \frac{5}{4} }}{2 \cdot 1}= \frac{3 \pm \sqrt{ 9-5 }}{2} = \frac{3\pm 2}{2} \implies r = \frac{5}{2} \vee r=\frac{1}{2}
$$
Løsningen $r=\frac{1}{2}$ gir oss sidekanten $s=2 \cdot \frac{1}{2} - 1 =0$. Dette gjør at kvadratet får areal 0, og denne løsningen gir ingen mening.

Løsningen $r=\frac{5}{2}$ gir oss sidekanten $s=2 \cdot \frac{5}{2}-1=4$. Dette gir oss et kvadrat med areal 16.

**Arealet av kvadratet er 16.**