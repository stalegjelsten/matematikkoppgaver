---
{"tags":["oppgave"],"date":"2024-12-04","modified":"2025-09-24","aliases":[],"dg-publish":true,"temaer":["økonomi","grenseinntekt og grensekostnad","enhetskostnad","derivasjon","overskudd"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"title":"Grensekostnad og enhetskostnad del 1","source":null,"todo":[],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Finne $x$ der $K'(x)=E(x)$ algebraisk fra andregrads $K$; maksimere overskudd via $I'(x)=K'(x)$ med konstant pris.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Løse $0{,}6x+10 = 0{,}3x+10+3000/x$ for $x=100$; tolke som min enhetskostnad."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Løse $K'(x)=400$ for $x=650$ enheter."}],"dg-permalink":"/grensekostnad-og-enhetskostnad-del-1/","lf-source-claude":false,"permalink":"/grensekostnad-og-enhetskostnad-del-1/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-04","modified":"2025-09-24","aliases":[],"temaer":["økonomi","grenseinntekt og grensekostnad","enhetskostnad","derivasjon","overskudd"],"fag":["s2"],"eksamen":"h24","del":1,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":5}],"title":"Grensekostnad og enhetskostnad del 1","source":null,"todo":[],"status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Finne $x$ der $K'(x)=E(x)$ algebraisk fra andregrads $K$; maksimere overskudd via $I'(x)=K'(x)$ med konstant pris.","deloppgaver":[{"deloppgave":"a","beskrivelse":"Løse $0{,}6x+10 = 0{,}3x+10+3000/x$ for $x=100$; tolke som min enhetskostnad."},{"deloppgave":"b","vanskegrad":1,"beskrivelse":"Løse $K'(x)=400$ for $x=650$ enheter."}],"lf-source-claude":false}}
---


# Grensekostnad og enhetskostnad del 1


En bedrift produserer og selger en vare. Kostnaden $K(x)$ i kroner er gitt ved

$$
K(x)=0{,}3x^{2}+10x+3000
$$

Her er $x$ antall enheter produsert og solgt per uke.

>[!oppgave]
>a) For hvilken $x$-verdi er grensekostnaden lik enhetskostnaden? Gi en praktisk tolkning av svaret.

Bedriften regner med å selge varen for 400 kr per enhet.

>[!oppgave]
>b) Hvor mange enheter må bedriften produsere og selge for at overskuddet skal bli størst mulig?

## Fasit

a) 100 enheter
b) 650 enheter

## Løsningsforslag

### a
Vi kan finne grensekostnaden ved å derivere kostnadsfunksjonen
$$
K'(x)=2 \cdot 0{,}3x+10=0{,}6x+10
$$
Enhetskostnaden er gitt ved
$$
E(x)=\frac{K(x)}{x}=\frac{0{,}3x^{2}+10x+3000}{x}=0{,}3x+10+\frac{3000}{x}
$$
Vi setter disse lik hverandre
$$
\begin{aligned}
K'(x)&=E(x)\\
0{,}6x+10 &= 0{,}3x+10+\frac{3000}{x}\\
0{,}3x  &= \frac{3000}{x}\\
0{,}3x^{2} &= 3000 \\
x^{2} &= \frac{3000}{0{,}3}\\
x^{2} &= 10\,000\\
x&=100
\end{aligned}
$$
Vi ser bort fra den negative løsningen av likningen siden vi snakker om produksjon av $x$ enheter.

**Grensekostnaden er lik enhetskostnaden ved produksjon av 100 enheter. Dette er også den produksjonsmengden som gir de laveste enhetskostnadene.**

### b
Inntektene fra salget er gitt ved
$$
I(x)=\text{pris} \cdot x =400x \implies I'(x)=400
$$
Vi har største overskudd når grensekostnaden er lik grenseinntekten
$$
\begin{aligned}
K'(x)&=I'(x)\\
0{,}6x+10&=400\\
0{,}6x&=390\\
x&=\frac{390}{0{,}6}\\
x&=\frac{3900}{6}\\
x&=650\
\end{aligned}
$$
**Bedriften må produsere og selge 650 enheter for at overskuddet skal bli størst mulig.**
