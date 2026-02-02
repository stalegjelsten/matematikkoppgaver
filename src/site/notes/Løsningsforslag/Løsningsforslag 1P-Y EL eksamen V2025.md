---
{"title":null,"dg-publish":true,"fag":null,"eksamen":null,"aliases":null,"author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"date":"2026-02-01","modified":"2026-02-01","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/losningsforslag/losningsforslag-1-p-y-el-eksamen-v2025/","dgPassFrontmatter":true}
---


## Oppgave 2-1

### 2-1a
Vi bruker formlene i oppgaveteksten og beregner:

$$
S=U \cdot I = 230 \cdot 7{,}5 = \underline{\underline{ 1725 \mathrm{~VA} }}
$$

$$
P=U \cdot I \cdot \cos \phi = 230 \cdot 7{,}5 \cdot 0{,}8 = \underline{\underline{ 1380 \mathrm{~W} }}
$$

### 2-1b
Hvis $P$ og $Q$ skal være like store så blir begge katetene i effekttrekanten like store. I så fall må $\phi$ være $45 \degree$.

Vi vet at motoren er mest effektiv når fasevinkelen er så nærme $0\degree$ som mulig, da er $\cos \phi$ nærme 1. Når $\cos \phi$ minker så øker $\phi$, altså vil den reaktive effekten øke hvis $\cos \phi$ minker.

**Hvis $P$ og $Q$ er like store så er $\phi=45\degree$. $Q$ øker hvis $\cos \phi$ minker.**

### 2-1c
Hvis den avgitte effekten er lik uavhengig av om spenningen er 230 V eller 400 V så må strømmen endre seg. 

Vi prøver først å beregne $P_{a}$ for 230 V:

Siden strømmen er ukjent så løser vi formelen for $I$ ved å dele på alle faktorene på høyre side av likhetstegnet som ikke er $I$.

$$
\begin{aligned}
P_{a} &=U \cdot I \cdot \cos \phi \cdot \sqrt{ 3 } \cdot \eta \\
I &= \frac{P_{a}}{U \cdot \cos \phi \cdot \sqrt{ 3 } \cdot \eta} \\
I &= \frac{250}{400 \cdot 0{,}7 \cdot \sqrt{ 3 } \cdot 0{,}64}\\
I &=0{,}8 \mathrm{~A}
\end{aligned}
$$

**Den ukjente verdien er 0,8 A.**

>[!tip] Enklere løsning
>
>Denne oppgaven kan løses mye enklere ved å sette opp forholdet
>
>$$ \frac{230}{400} = \frac{x}{1{,}4} \implies x = \frac{230}{400}\cdot 1{,}4 = 0{,}8$$
