---
{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["gjennomsnittlig vekstfart","grenseverdi","argumentasjon"],"fag":["s1"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"poeng":6,"title":"Vurder påstander om funksjoner","status":3,"source":null,"todo":null,"permalink":"/vurder-pastander-om-funksjoner/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-11-14","modified":"2026-03-26","aliases":[],"temaer":["gjennomsnittlig vekstfart","grenseverdi","argumentasjon"],"fag":["s1"],"eksamen":"h24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"s1","del":2,"oppgave":2}],"poeng":6,"title":"Vurder påstander om funksjoner","status":3,"source":null,"todo":null}}
---


# Vurder påstander om funksjoner

Avgjør om hver enkelt påstand nedenfor er sann eller usann. Forklar tydelig hvordan du har resonnert.

>[!oppgave]
>a) **Påstand:** Den gjennomsnittlige vekstfarten til funksjonen $f(x) = x^2 + 2$ i intervallet $[1, 4]$ er 5.
>b) **Påstand:** Hvis $\lim_{x\to\infty} f(x) = \lim_{x\to\infty} g(x)$ og $\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty} g(x)$, så er $f(x) = g(x)$.
>c) **Påstand:** For likningen $a^x = a^y$, der $a \in \mathbb{R}$, er løsningen alltid $x = y$.

## Fasit


## Løsningsforslag

### 2-2a
Vi kan finne gjennomsnittlig vekstfart i intervallet ved å beregne
$$
\frac{f(4)-f(1)}{3}=\frac{4^{2}+2-\left( 1^{2}+2 \right) }{3}=\frac{16+2-1-2}{3}=\frac{15}{3}=\underline{\underline{5}}
$$
**Påstanden stemmer. Den gjennomsnittlige vekstfarten i intervallet er 5.**

### Oppgave 2-2b
Påstanden sier at dersom to funksjoner har samme grenseverdier når $x \to \pm \infty$, så er de like.

Det er enkelt å finne eksempler som motbeviser dette, for eksempel vil $f(x)=\frac{1}{x}$ og $g(x)=\frac{2}{x}$ begge gå mot null når $x \to \pm\infty$.

**Påstanden er usann. Det finnes eksempler hvor $f(x)\neq g(x)$.**

### Oppgave 2-2c

>[!warning] Tolkning av påstanden
>Påstanden lyder: For likningen $a^{x}=a^{y}$, der $a \in \mathbb{R}$ så er løsningen alltid $x=y$.
>
>Her mener jeg at to ulike tolkninger begge er akseptable:
>
> 1. Det er kun én løsning på likningen, og denne er $x=y$.
> 2. Det kan finnes flere løsninger på likningen, men $x=y$ er alltid en løsning.

#### Alternativ 1: x = y er eneste løsning
Det finnes flere eksempler som motbeviser påstanden, for eksempel vil $a=1$ gjøre at $a^{x}=a^{y}$ for alle $x,y \in \mathbb{R}$. $a=-1$ og $a=0$ vil også gi mange løsninger.

**Påstanden er feil. For $a \in \{ -1,0,1 \}$ finnes det flere løsninger.**

#### Alternativ 2: x = y kan være en av flere løsninger
Avhengig av kontekst kan $0^{0}$ være definert på ulike måter

1. I kombinatorikk vil ofte $0^{0} \overset{\text{def}}{=} 1$
2. $0^{0}$ er en ubestemt form i de fleste andre deler av matematikken.

Hvis vi tolker at $0^{0}$ er en ubestemt form så vil likningen ha ingen løsninger for $a=0$.

**Påstanden er usann. For $a=0$ så er $x=y$ bare hvis $x,y\neq 0$.**
