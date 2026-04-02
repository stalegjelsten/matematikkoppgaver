---
{"tags":["eksamen"],"fag":["s2"],"eksamen":"v19","del2_tid":3,"title":"S2 eksamen V2019","author":"matematikkoppgaver.vercel.app","dg-publish":true,"showheader":true,"contentClasses":"eksamen-side","dg-permalink":"/eksamener/s2-eksamen-v2019/","permalink":"/eksamener/s2-eksamen-v2019/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["eksamen"],"fag":["s2"],"eksamen":"v19","del2_tid":3,"title":"S2 eksamen V2019","author":"matematikkoppgaver.vercel.app","showheader":true,"contentClasses":"eksamen-side"}}
---

# Oversikt over eksamensoppgavene

**Del 2** — 3 timer — med hjelpemidler

Table: {.eksamen-oversikt rows=2.4em}

| **№** | **Navn** | **Temaer** | **LF** |
| :--: | :--------------------------- | :------------------------ | :--: |
| [2-5](#oppgave-2-5) | [Hypotesetest om russetid](https://matematikkoppgaver.vercel.app/hypotesetest-om-russetid/) | binomisk, normalfordeling, hypotesetest | ✔︎ |

# Del 2

## Oppgave 2-5


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/hypotesetest-om-russetid/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Hypotesetest om russetid

Tidligere statistikk fra en skole viser at 32 % av elevene i Vg3 hadde én eller flere timer fravær i russetiden.  

Vi trekker tilfeldig ut 27 elever i Vg3. Vi antar at sannsynligheten for at en tilfeldig valgt elev har fravær, er $p=0{,}32$ og er uavhengig av de andre elevenes fravær.  

>[!oppgave]
>a) Bestem sannsynligheten for at minst 20 av disse elevene ikke har fravær i russetiden.  

Ledelsen ved skolen hadde en mistanke om at det nye fraværsreglementet som ble innført i august 2016, ville føre til mindre fravær. Før russetiden startet, satte de derfor opp to hypoteser som de ønsket å teste.  

$$
\begin{aligned}
H_{0}&: \quad p=0{,}32 \\
H_{1}&: \quad p<0{,}32
\end{aligned}
$$

De ønsket å bruke et signifikansnivå på 5 %.  

Det var 120 elever i Vg3 på skolen dette skoleåret.  

>[!oppgave]
>b) Hva er det høyeste antall elever som kan ha fravær i russetiden, for at $H_{0}$ skal forkastes?

## Fasit

a) $P(X \leq 7) \approx 0{,}33$
b) Høyst 29 elever med fravær

## Løsningsforslag

### 2-5a

La $X$ = antall elever av de 27 som har fravær. $X$ er binomisk fordelt med $n = 27$ og $p = 0{,}32$.

«Minst 20 ikke har fravær» betyr at høyst $27 - 20 = 7$ elever har fravær, altså $X \leq 7$.

$$P(X \leq 7) \approx \underline{\underline{0{,}33}}$$

**Sannsynligheten for at minst 20 av 27 elever ikke har fravær er $\underline{\underline{0{,}33}}$.**

>[!tip] Alternativ metode
>
>La $Y$ = antall elever uten fravær. $Y$ er binomisk fordelt med $n = 27$ og $p = 0{,}68$.
>
>Da er «minst 20 ikke har fravær» direkte $Y \geq 20$:
>$$P(Y \geq 20) \approx 0{,}33$$
>
>Samme svar, men uten å måtte snu på problemstillingen.

### 2-5b

La $X$ = antall elever med fravær blant de 120. Under $H_0$ er $X$ binomisk fordelt med $n = 120$ og $p = 0{,}32$. Vi legger inn i GeoGebra og justerer på grensen helt fram til vi finner en sannsynlighet som ligger under signifikansnivået $\alpha$.

![](/img/user/_resources/s2-v19-2-5b-gg.png){width=40%}

$$P(X \leq 29) \approx 0{,}038 < 0{,}05 \quad \checkmark$$
$$P(X \leq 30) \approx 0{,}059 > 0{,}05 \quad \times$$

**Det høyeste antallet elever som kan ha fravær for at $H_0$ forkastes, er $\underline{\underline{29}}$.**


</div></div>

