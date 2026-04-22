---
{"tags":["oppgave","likninger","identiteter","polynomdivisjon"],"temaer":["likninger","identiteter","faktorisering","polynomdivisjon"],"alias":[null],"del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"fag":"1t","eksamen":"v23","dg-publish":true,"title":"Faktorisering av tredjegradsuttrykk v23","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":2,"vanskegrad":3,"beskrivelse":"Bestemme $a$ og $b$ slik at $x^3-5x^2-8x+12=(x-1)(x+a)(x-b)$ er identitet via polynomdivisjon og heltallsmetoden.","dg-permalink":"/faktorisering-av-tredjegradsuttrykk-v2023/","permalink":"/faktorisering-av-tredjegradsuttrykk-v2023/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","likninger","identiteter","polynomdivisjon"],"temaer":["likninger","identiteter","faktorisering","polynomdivisjon"],"alias":[null],"del":1,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":1,"oppgave":3}],"fag":"1t","eksamen":"v23","title":"Faktorisering av tredjegradsuttrykk v23","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":2,"vanskegrad":3,"beskrivelse":"Bestemme $a$ og $b$ slik at $x^3-5x^2-8x+12=(x-1)(x+a)(x-b)$ er identitet via polynomdivisjon og heltallsmetoden."}}
---


# Faktorisering av tredjegradsuttrykk v23

Gitt likningen

$$x^{3}-5 x^{2}-8 x+12=(x-1)(x+a)(x-b)$$

> [!oppgave]
>  Bestem $a$ og $b$ slik at likningen blir en identitet. 

## Fasit

$a=2 \wedge b=6$

## Løsningsforslag

Hvis likningen skal være en identitet så må uttrykkene på høyre side og venstre side være like for alle $x$.

Vi ser av faktoriseringen at $(x-1)$ er en faktor i $x^3-5x^2-8x+12$. Det enkleste er nok derfor å dividere begge sider av likningen med $(x-1)$.[^3] Venstre side blir da:

$$
\begin{aligned}
(x^3-5x^2-8x+12&):(x-1)= \underline{x^2-4x+12}\\
\underline{x^3 -1x^2+0x+\,0}&\\
 -4x^2-8x+12&\\
\underline{-4x^2 +4x+0}&\\
 12x+12&\\
\underline{12x+12}&\\
0&
\end{aligned}
$$

Jeg utfører divisjonen på begge sider av den opprinnelige likningen og får

$$
\begin{aligned}
(x^3-5x^2-8x+12):(x-1)&= \cancel{ (x-1) }(x+a)(x-b):\cancel{ (x-1) }\\
\underbrace{ x^2-4x+12}_{ \text{heltallsmetoden gir }(x+2)(x-6) }&=(x+a)(x-b)\\
(x+2)(x-6)&=(x+a)(x-b)
\end{aligned}
$$

**Jeg ser at $\underline{\underline{a=2\wedge b=6}}$ for at likningen skal bli en identitet.**
