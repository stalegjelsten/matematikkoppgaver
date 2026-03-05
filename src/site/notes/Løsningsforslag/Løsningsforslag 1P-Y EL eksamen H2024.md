---
{"title":null,"dg-publish":true,"fag":["1p-y el"],"eksamen":"h24","aliases":null,"author":"Ståle Gjelsten","documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":null,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"date":"","modified":"","disabled rules":["format-tags-in-yaml","format-yaml-array","insert-yaml-attributes","move-tags-to-yaml","remove-yaml-keys","yaml-key-sort","file-name-heading","yaml-title","emphasis-style"],"permalink":"/losningsforslag/losningsforslag-1-p-y-el-eksamen-h2024/","dgPassFrontmatter":true}
---


# Del 2

## Oppgave 2-1

### 2-1a
Siden $\cos \phi =0{,}8$ så må $\phi = \cos ^{-1}(0{,}8)=\underline{\underline{ 36{,}9 \degree }}$.

Den tilførte effekten er
$$
P_{t}=U \cdot I \cdot \cos \phi \cdot \sqrt{ 3 } = 230 \cdot 7{,}5 \cdot 0{,}8 \cdot \sqrt{ 3 } = \underline{\underline{ 2390 \mathrm{~W} }}
$$

### 2-1b
Siden $\cos \phi = \frac{P}{S}$ så er 
$$
\cos \phi = \frac{2500}{3000}=0{,}8333
$$
Vi finner vinkelen ved å ta
$$
\phi = \cos ^{-1}(0{,}8333)=\underline{\underline{ 33{,}6 \degree }}
$$
Den reaktive effekten er en av kateten i effekttrekanten, så vi kan bruke Pytagoras for å finne den
$$
Q=\sqrt{ S^{2} - P_{t}^{2} }= \sqrt{ 3000^{2} - 2500^{2} }= \underline{\underline{ 1658 \mathrm{~VAr} }}
$$

### 2-1c
For å finne fasevinkelen trenger vi (for eksempel) $S$ og $P_{t}$. I tabellen finner vi verdier for $S$ og for $\eta$ og $P_{a}$. Vi er nødt til å bruke $\eta$ og $P_{a}$ for å beregne $P_{t}$ for motorene.

$$
\eta = \frac{P_{a}}{P_{t}} \iff P_{t}= \frac{P_{a}}{\eta}
$$

**For motor 1:**
$$
P_{t}=\frac{P_{a}}{\eta}=\frac{800}{0{,}7}=1143 \mathrm{~W}
$$
$$
\cos \phi = \frac{P_{t}}{S}=\frac{1143}{1297}=0{,}8813
$$
$$
\phi = \cos ^{-1}\left( 0{,}8813 \right)=28{,}2 \degree
$$

**For motor 2:**
$$
P_{t}=\frac{P_{a}}{\eta}=\frac{1556}{0{,}8}=1945 \mathrm{~W}
$$
$$
\cos \phi = \frac{P_{t}}{S}=\frac{1945}{2431}=0{,}8001
$$
$$
\phi = \cos ^{-1}\left( 0{,}8001 \right)=36{,}9 \degree
$$

**Fasevinkelen er størst for motor 2, hvor den er $36{,}9 \degree$.**