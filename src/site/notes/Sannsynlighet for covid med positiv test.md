---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["sannsynlighet"],"fag":["s1"],"eksamen":"h24","del":2,"oppgave":7,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":7}],"poeng":2,"title":"Sannsynlighet for covid med positiv test","status":3,"source":null,"todo":null,"permalink":"/sannsynlighet-for-covid-med-positiv-test/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"temaer":["sannsynlighet"],"fag":["s1"],"eksamen":"h24","del":2,"oppgave":7,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":7}],"poeng":2,"title":"Sannsynlighet for covid med positiv test","status":3,"source":null,"todo":null,"permalink":"/sannsynlighet-for-covid-med-positiv-test/"}}
---


# Sannsynlighet for covid med positiv test

En test for covid-19 har disse egenskapene:

- Dersom en person er smittet, så er det 99 % sikkert at testen vil vise dette.
- Dersom en person ikke er smittet, så er det 98 % sikkert at testen vil vise dette.

Anta at 99 % av befolkningen ikke er smittet. En tilfeldig valgt person tar en test, og testen viser at personen er smittet.

>[!oppgave]
>Bestem sannsynligheten for at personen faktisk har covid-19.

## Fasit


## Løsningsforslag

>[!tip] Bayes setning
>
>Denne oppgaven er enklest å løse dersom du kjenner til Bayes setning:
> $$ P(A\vert B )= \frac{P(B \vert A) \cdot P(A)}{P(B)} $$
> Der $P(A\vert B)$ betyr sannsynligheten for at $A$ inntreffer, gitt at vi har fått vite at $B$ inntreffer.
>
>I mitt løsningsforslag velger jeg å løse oppgaven uten å bruke Bayes setning

La oss først definere noen hendelser:

- $S:$ personen er smittet
- $\bar{S}:$ personen er ikke smittet
- $T_{S}:$ positiv test gitt at personen er smittet
- $T_{\bar{S}}$: positiv test gitt at personen er frisk

Ut fra opplysningene våre kan vi se at $P(T_{S})=0{,}99$ og $P(T_{\bar{S}})=0{,}02$.

Det er to ulike måter den tilfeldige valgte personen kan få utslag på testen, hen kan være smittet og få positiv test, eller hen kan være frisk og få en positiv test.

Sannsynligheten for en hendelse er $\dfrac{\text{gunstige utfall}}{\text{mulige utfall}}$

- Vi kan si at de gunstige utfallene (at personen er smittet og positiv test) er $P(T_{S})= \textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}$
	- $\textcolor{seagreen}{1 \,\%}$ kommer fra sannsynligheten for å være smittet (i hele befolkningen)
	- $\textcolor{steelblue}{99 \,\%}$ kommer fra sannsynligheten for at testen viser at du er smittet
- Vi har flere mulige utfall som gir positiv test
	- Smittet person og positiv test: $P(T_{S})=\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}$ 
	- Ikke-smittet person og positiv test: $P(T_{\bar{S}})=\textcolor{tomato}{99 \,\%}  \cdot \textcolor{maroon}{2} \,\%$ 
		- $\textcolor{tomato}{99 \,\%}$ er sannsynligheten for å ikke være smittet
		- $\textcolor{maroon}{2} \,\%$ er sannsynligheten for å få positiv test selv om du ikke er smittet
	- Når vi legger sammen alle mulighetene får vi
$$
P(T_{S})+P(T_{\bar{S}}) =\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%} + \textcolor{tomato}{99 \,\%}  \cdot \textcolor{maroon}{2} \,\%= \textcolor{darkblue}{3\,\% \cdot 99 \,\%}
$$

Sannsynligheten for at en person med positiv test er smittet er altså
$$
\frac{\text{gunstige utfall}}{\text{mulige utfall}}= \frac{\textcolor{seagreen}{1 \,\%}  \cdot \textcolor{steelblue}{99 \,\%}}{\textcolor{darkblue}{3\,\% \cdot 99 \,\%}}= \frac{1}{3}\approx \underline{\underline{ 33{,}3 \, \% }}
$$
