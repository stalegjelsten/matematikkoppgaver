---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-04","aliases":null,"dg-publish":true,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"3a","oppgavenummer":[{"fag":"s2","del":2,"oppgave":"3a"}],"title":"Påstand om sum av rekke","source":null,"todo":null,"status":3,"permalink":"/pastand-om-sum-av-rekke/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2024-12-04","aliases":null,"temaer":["rekker","uendelig rekke"],"fag":["s2"],"eksamen":"h24","del":2,"oppgave":"3a","oppgavenummer":[{"fag":"s2","del":2,"oppgave":"3a"}],"title":"Påstand om sum av rekke","source":null,"todo":null,"status":3,"permalink":"/pastand-om-sum-av-rekke/"}}
---


# Påstand om sum av rekke


>[!oppgave]
>Avgjør om påstanden nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

En uendelig geometriske rekke er gitt ved $1+\left( \ln x -1 \right) + \left( \ln x -1 \right)^{2}\dots$

**Påstand**: Dersom $x=\frac{1}{e}$ vil summen av rekka være $\frac{1}{3}$.

## Fasit

Påstanden er usann. $k=-2$ og rekka konvergerer ikke.

## Løsningsforslag

Jeg vet at summen av en uendelig geometrisk rekke er gitt ved
$$
s=\frac{a_{1}}{1-k}
$$
dersom $-1<k<1$.

Hvis vi vi lar $x=\frac{1}{e}$ så vil rekka bli
$$
1+ \left( \ln \frac{1}{e}-1 \right) + \left( \ln \frac{1}{e}-1 \right)^{2} + \dots 
$$
La oss se hva $\ln \frac{1}{e}-1$ blir
$$
\ln \frac{1}{e}-1=\ln 1 - \ln e - 1=0-1-1=-2
$$
Det første leddet i rekka er $a_{1}=1$ og det andre leddet er $a_{2}=-2$, det vil si at
$$
k=\frac{-2}{1}=-2
$$
$k$ ligger ikke i intervallet $\langle-1,1\rangle$, og dermed konvergerer ikke rekka.

**Påstanden er usann, rekka konvergerer ikke når $\boldsymbol{x=\frac{1}{e}}$.**
