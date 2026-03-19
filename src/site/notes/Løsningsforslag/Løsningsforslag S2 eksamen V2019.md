---
{"title":"Løsningsforslag S2 eksamen V2019","dg-publish":true,"fag":["s2"],"eksamen":"v19","aliases":null,"author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","tags":["løsningsforslag"],"date":"2026-03-17","modified":"2026-03-17","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style","empty-line-around-math-blocks"],"permalink":"/losningsforslag/losningsforslag-s2-eksamen-v2019/","dgPassFrontmatter":true}
---


Dette løsningsforslaget er skrevet av [Claude](https://claude.ai/claude-code). Meld gjerne ifra om feil enten direkte til Ståle eller via forumet på [matematikk.net](https://matematikk.net/matteprat).

# Del 2

## Oppgave 2-5

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

![](/img/user/_resources/s2-v19-2-5b-gg.png)

$$P(X \leq 29) \approx 0{,}038 < 0{,}05 \quad \checkmark$$
$$P(X \leq 30) \approx 0{,}059 > 0{,}05 \quad \times$$

**Det høyeste antallet elever som kan ha fravær for at $H_0$ forkastes, er $\underline{\underline{29}}$.**