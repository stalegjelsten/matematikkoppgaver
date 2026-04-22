---
{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["forventningsverdi","varians","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Insektskader på epletrær","status":1,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/insektskader-pa-epletraer/","permalink":"/insektskader-pa-epletraer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2019-11-19","modified":"2026-04-08","aliases":[],"temaer":["forventningsverdi","varians","normalfordeling","sannsynlighet"],"fag":["s2"],"eksamen":"h19","del":1,"oppgave":7,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":7}],"poeng":8,"title":"Insektskader på epletrær","status":1,"source":null,"todo":null,"lf-source-claude":true}}
---


# Insektskader på epletrær

En bestemt type insekt kan skade barken på et epletre.

La $X$ være antall skader som slike insekter har påført barken på et tilfeldig valgt epletre. På en bestemt eplegård er sannsynlighetsfordelingen til $X$ gitt i tabellen nedenfor.

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(X = k)$ | 0,45 | 0,30 | 0,10 | 0,10 | 0,05 |

>[!oppgave]
>a) Bestem forventningsverdien $\text{E}(X)$. Hva forteller $\text{E}(X)$ oss i denne situasjonen?
>b) Vis at $\text{Var}(X) = 1{,}4$.

På eplegården velger vi tilfeldig ut 400 epletrær og nummererer dem fra 1 til 400. Vi lar $X_i$ være antall insektskader på tre nummer $i$. Vi antar at $X_i$-ene er uavhengige.

Det totale antallet insektskader som finnes på de 400 trærne, er da gitt ved den stokastiske variabelen

$$S = X_1 + X_2 + \cdots + X_{400}$$

>[!oppgave]
>c) Begrunn at $S$ er tilnærmet normalfordelt.
>Bestem $\text{E}(S)$ og $\text{Var}(S)$.

Ved tilsyn på en eplegård blir 50 tilfeldig valgte trær kontrollert. Dersom det i gjennomsnitt er mer enn 1,2 skader per tre, får eplegården pålegg om å sette i verk tiltak.

På en bestemt eplegård er $Y$ det totale antallet insektskader på 50 tilfeldig valgte trær. Egne undersøkelser viser at $\mu_Y = 50$ og $\sigma_Y = 8$.

>[!oppgave]
>d) Bestem sannsynligheten for at denne eplegården må sette i verk tiltak dersom de får tilsyn.

## Fasit

a) $\text{E}(X) = 1$
b) Se løsningsforslag
c) $\text{E}(S) = 400$, $\text{Var}(S) = 560$
d) $P \approx 0{,}106$

## Løsningsforslag

### a

$$\text{E}(X) = 0 \cdot 0{,}45 + 1 \cdot 0{,}30 + 2 \cdot 0{,}10 + 3 \cdot 0{,}10 + 4 \cdot 0{,}05$$

$$= 0 + 0{,}30 + 0{,}20 + 0{,}30 + 0{,}20 = \underline{\underline{1{,}0}}$$

$\text{E}(X) = 1$ betyr at vi i gjennomsnitt forventer **én insektskade per epletre**.

### b

$$\text{E}(X^2) = 0^2 \cdot 0{,}45 + 1^2 \cdot 0{,}30 + 2^2 \cdot 0{,}10 + 3^2 \cdot 0{,}10 + 4^2 \cdot 0{,}05$$

$$= 0 + 0{,}30 + 0{,}40 + 0{,}90 + 0{,}80 = 2{,}4$$

$$\text{Var}(X) = \text{E}(X^2) - [\text{E}(X)]^2 = 2{,}4 - 1^2 = \underline{\underline{1{,}4}}$$

### c

Ifølge sentralgrensesetningen er $S = X_1 + X_2 + \cdots + X_{400}$ tilnærmet normalfordelt når $n = 400$ er tilstrekkelig stort (og $X_i$-ene er uavhengige og identisk fordelt).

$$\text{E}(S) = 400 \cdot \text{E}(X) = 400 \cdot 1 = \underline{\underline{400}}$$

$$\text{Var}(S) = 400 \cdot \text{Var}(X) = 400 \cdot 1{,}4 = \underline{\underline{560}}$$

### d

Eplegården må sette i verk tiltak dersom gjennomsnittet er mer enn $1{,}2$ skader per tre, altså dersom $Y > 50 \cdot 1{,}2 = 60$.

$Y$ er tilnærmet normalfordelt med $\mu_Y = 50$ og $\sigma_Y = 8$.

$$z = \frac{60 - 50}{8} = 1{,}25$$

$$P(Y > 60) = 1 - \Phi(1{,}25) = 1 - 0{,}8944 = \underline{\underline{0{,}106}}$$

Det er omtrent 10{,}6 % sannsynlighet for at eplegården får pålegg om tiltak.
