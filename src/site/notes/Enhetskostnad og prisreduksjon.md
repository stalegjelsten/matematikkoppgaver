---
{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"dg-publish":true,"temaer":["enhetskostnad","optimering","økonomi"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":8,"title":"Enhetskostnad og prisreduksjon","status":0,"source":null,"todo":null,"lf-source-claude":true,"dg-permalink":"/enhetskostnad-og-prisreduksjon/","permalink":"/enhetskostnad-og-prisreduksjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2021-05-26","modified":"2026-04-08","aliases":[],"temaer":["enhetskostnad","optimering","økonomi"],"fag":["s2"],"eksamen":"v21","del":2,"oppgave":1,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":1}],"poeng":8,"title":"Enhetskostnad og prisreduksjon","status":0,"source":null,"todo":null,"lf-source-claude":true}}
---


# Enhetskostnad og prisreduksjon

En bedrift produserer og selger en vare. De månedlige enhetskostnadene, $E$, ved å produsere og selge $x$ enheter av denne varen er gitt ved

$$E(x) = \frac{9000}{x} + 0{,}02x + 160, \quad x \in [100, 3000]$$

>[!oppgave]
>a) Tegn grafen til $E$.
>b) Hvor mange enheter av varen må bedriften produsere og selge for at enhetskostnaden skal bli minst mulig?

Varen selges for 270 kroner per enhet.

>[!oppgave]
>c) Bestem hvilken produksjonsmengde som gir størst overskudd. Hvor stort er dette overskuddet?

Bedriften vil sette ned prisen på varen for å øke sin markedsandel. Eieren av bedriften går med på dette, men krever at overskuddet må være minst 100 000 kroner per måned.

>[!oppgave]
>d) Hvilken pris per enhet vil gjøre at det største overskuddet kan bli 100 000 kroner? Hvor mange enheter må de selge da?

## Fasit

a) Se graf
b) Omtrent 671 enheter, $E \approx 186{,}83 \text{~kr}$
c) 2750 enheter, overskudd $142\,250 \text{~kr}$
d) Pris $\approx 253{,}38 \text{~kr}$, antall $\approx 2335$ enheter

## Løsningsforslag

### a

Vi tegner grafen til $E$ i GeoGebra.

![Graf av enhetskostnaden E](/img/user/_resources/s2-v21-2-1.png)

### b

Vi finner minimum av $E$ ved å derivere og sette lik null.

$$E'(x) = -\frac{9000}{x^2} + 0{,}02 = 0$$

Vi løser i CAS (se linje 2 i utklippet):

![CAS-utregning for enhetskostnad](/img/user/_resources/s2-v21-2-1-cas.png)

Vi får $x = 300\sqrt{5} \approx 671$ (vi ser bort fra den negative løsningen).

Se punkt `A` i grafen: $\underline{\underline{x \approx 671 \text{ enheter og } E \approx 186{,}83 \text{~kr}}}$

### c

Kostnadene er $K(x) = E(x) \cdot x = 9000 + 0{,}02x^2 + 160x$.

Overskuddet er

$$O(x) = 270x - K(x) = 270x - 9000 - 0{,}02x^2 - 160x = -0{,}02x^2 + 110x - 9000$$

Vi finner maksimum: $O'(x) = -0{,}04x + 110 = 0$, som gir $x = 2750$ (se linje 6 i CAS-utklippet).

$$O(2750) = -0{,}02 \cdot 2750^2 + 110 \cdot 2750 - 9000 = \underline{\underline{142\,250 \text{~kr}}}$$

### d

Med en ny pris $p$ per enhet blir overskuddet

$$O(x) = px - K(x) = (p - 160)x - 0{,}02x^2 - 9000$$

Maksimalt overskudd finner vi ved $O'(x) = 0$:

$$p - 160 - 0{,}04x = 0 \quad \Rightarrow \quad x = \frac{p - 160}{0{,}04}$$

Vi setter inn i $O$:

$$O_{\max} = (p-160) \cdot \frac{p-160}{0{,}04} - 0{,}02 \cdot \left(\frac{p-160}{0{,}04}\right)^2 - 9000 = \frac{(p-160)^2}{0{,}08} - 9000$$

Vi setter $O_{\max} = 100\,000$:

$$\frac{(p-160)^2}{0{,}08} = 109\,000 \quad \Rightarrow \quad (p-160)^2 = 8720$$

$$p - 160 = \sqrt{8720} \approx 93{,}38 \quad \Rightarrow \quad \underline{\underline{p \approx 253{,}38 \text{~kr}}}$$

Antall enheter: $x = \dfrac{93{,}38}{0{,}04} \approx \underline{\underline{2335 \text{ enheter}}}$
