---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"dg-publish":true,"temaer":["hypotesetest","standard normalfordeling","normalfordeling","sentralgrenseteoremet"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Hypotesetest bensin","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Ensidig hypotesetest av gjennomsnittet fra $n=25$ via sentralgrenseteoremet; $z=2$ gir $p=0{,}0228<0{,}05$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Formulere $H_0:\\mu=20$, $H_A:\\mu>20$."},{"deloppgave":"b","beskrivelse":"Beregne $\\text{SD}(\\bar{X})=\\sigma/\\sqrt{n}=0{,}5$; standardisere og slå opp $\\Phi(2)=0{,}9772$."}],"dg-permalink":"/hypotesetest-bensin/","permalink":"/hypotesetest-bensin/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":[],"temaer":["hypotesetest","standard normalfordeling","normalfordeling","sentralgrenseteoremet"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":6}],"title":"Hypotesetest bensin","source":null,"todo":null,"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Ensidig hypotesetest av gjennomsnittet fra $n=25$ via sentralgrenseteoremet; $z=2$ gir $p=0{,}0228<0{,}05$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Formulere $H_0:\\mu=20$, $H_A:\\mu>20$."},{"deloppgave":"b","beskrivelse":"Beregne $\\text{SD}(\\bar{X})=\\sigma/\\sqrt{n}=0{,}5$; standardisere og slå opp $\\Phi(2)=0{,}9772$."}]}}
---


# Hypotesetest bensin


Benz A/S har utviklet en ny type bensin som de mener øker kjørelengden per liter. Den gamle bensinen gir en gjennomsnittlig kjørelengde på $20 \mathrm{~km} / \mathrm{L}$, med et standardavvik på $2{,}5 \mathrm{~km} / \mathrm{L}$.

Benz A/S ønsker å teste om den nye bensinen øker kjørelengden, og planlegger å gjennomføre en hypotesetest med 25 biler.

>[!oppgave]
> a) Sett opp en nullhypotese og en alternativ hypotese for testen.

Det viser seg at de 25 bilene kjører i gjennomsnitt $21 \mathrm{~km} / \mathrm{L}$. Gå ut fra at kjørelengden er normalfordelt med standardavvik $2{,}5 \mathrm{~km} / \mathrm{L}$.

>[!oppgave]
> b) Gjennomfør hypotesetesten, og bruk den til å avgjøre om Benz A/S kan si at den nye bensinen øker kjørelengden. Bruk et signifikansnivå på 5 \%.

## Fasit

a) $H_{0}: \, \mu=20, \quad H_{A}: \, \mu > 20$
b) Vi kan forkaste $H_{0}$ med $p$-verdien 0,0228

## Løsningsforslag

### a
Vi ønsker å teste om den nye bensinen gir bedre drivstofføkonomi enn den gamle. La $\mu$ være forventningsverdien for kjørelengde per L for den nye bensinen. Da er hypotesene våre:
$$
\begin{aligned}
H_{0}: \quad \mu=20\\
H_{A}: \quad \mu > 20
\end{aligned}
$$

### b
Denne hypotesetesten er av et gjennomsnitt. La $\bar{X}$ være gjennomsnittsverdien for drivstofføkonomien for et utvalg av biler. Etter sentralgrensesetningen er $\bar{X}$ normalfordelt med:
$$
\begin{aligned}
E(\bar{X}) &= \mu  = 20 \\
\text{SD}(\bar{X})&=\frac{\text{SD}(X)}{\sqrt{ n }} = \frac{2{,}5}{\sqrt{ 25 }}=\frac{2{,}5}{5}=\frac{1}{2}
\end{aligned}
$$
Observasjonen vår er $\bar{X}=21$. Vi gjør om til standard normalfordeling:
$$
z=\frac{\bar{X}-\mu}{\text{SD}(\bar{X})}=\frac{21-20}{0{,}5}=2
$$
Sannsynligheten for at $\bar{X}$ skal ligge mer enn 2 standardavvik over forventningsverdien er kan vi finne ved hjelp av den vedlagte normalfordelingstabellen.
$$
P(Z>2)=1-\Phi(2)=1-0{,}9772=0{,}0228
$$
***p*-verdien er 0,0228, som er mindre enn signifikansnivået vårt. Vi kan dermed forkaste nullhypotesen om at den nye bensinen er like god som den gamle.**
