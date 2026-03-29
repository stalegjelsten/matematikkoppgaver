---
{"title":null,"dg-publish":true,"fag":["1p-y el"],"eksamen":"v25","aliases":null,"author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"date":"2026-02-01","modified":"2026-02-01","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/losningsforslag/losningsforslag-1-p-y-el-eksamen-v2025/","dgPassFrontmatter":true,"dg-note-properties":{"title":null,"fag":["1p-y el"],"eksamen":"v25","aliases":null,"author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"date":"2026-02-01","modified":"2026-02-01","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"]}}
---


# Del 1

## Oppgave 1-2
**Påstand 1**  
Hvis påstand 1 stemmer så må $10 \cdot \sqrt{ 25 }$ bli lik $50$. Vi sjekker.
$$
10 \cdot \sqrt{ 25 }=10 \cdot 5 = 50
$$
**Påstand 1 stemmer, det tar 25 minutter å lade fra 0 % til 50 %.**

**Påstand 2**  
Vi vet at det tar 25 minutter å lade til 50 %. La oss tredoble tiden til 75 minutter og sjekke om dette gir oss 100 % lading.

$10\cdot \sqrt{ 75 }$ er vanskelig å regne ut, men jeg vet at svaret må være mellom $8$ og $9$ siden $8^{2}=64$ og $9^{2}=81$. 
$$
10 \cdot \sqrt{ 75 } \approx  10 \cdot 8{,}7 =87
$$

**Påstand 2 stemmer ikke. Vi får ikke ladet mer enn omtrent 87 % på tre ganger så lang tid som fra 0 til 50 %.**

## Oppgave 1-3

### 1-3a
Siden vi ikke betaler noe avdrag så blir rentene de samme hver måned.
$$400\,000 \cdot 0{,}015 = \underline{\underline{ 6\,000 \mathrm{~kr} }}$$

### 1-3b
Det er 12 måneder med 6 000 kr i hver måned. I tillegg betaler vi 50 kr per måned i gebyr.
$$12 \cdot 6\,000 + 12 \cdot 50 = 72\, 000 + 600 = \underline{\underline{ 72\,600 \mathrm{~kr}  }}$$


# Del 2
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

