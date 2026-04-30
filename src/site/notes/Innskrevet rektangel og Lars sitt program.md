---
{"aliases":[],"date":"2024-05-24","del":2,"dg-permalink":"/innskrevet-rektangel-og-lars-sitt-program/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":7},{"del":2,"fag":"r1","oppgave":6}],"poeng":4,"source":null,"lf-source-claude":true,"status":1,"tags":["oppgave"],"temaer":["derivasjon","programmering","funksjonsdrøfting"],"title":"Innskrevet rektangel og Lars sitt program","todo":[],"permalink":"/innskrevet-rektangel-og-lars-sitt-program/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":2,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":7,"oppgavenummer":[{"del":2,"fag":"s1","oppgave":7},{"del":2,"fag":"r1","oppgave":6}],"poeng":4,"source":null,"lf-source-claude":true,"status":1,"tags":["oppgave"],"temaer":["derivasjon","programmering","funksjonsdrøfting"],"title":"Innskrevet rektangel og Lars sitt program","todo":[]}}
---


# Innskrevet rektangel og Lars sitt program

En funksjon $f$ er gitt ved

$$f(x) = -x^2 + 4, \quad 0 \le x \le 2.$$

Lars har tegnet grafen til $f$ med et innskrevet rektangel $ABCD$. Lars har også skrevet et program.

<!-- two-column start left-width=40% -->

![Grafen til $f(x)$](/img/user/_resources/s1-v24-2-7.jpeg){width=90%}

---

```python ln
def f(x):
    return -x**2 + 4

def areal(x):
    return x*f(x)

h = 0.0001
def der_areal(x):
    return (areal(x + h) - areal(x))/h

x = 0
dx = 0.01
while der_areal(x + dx) > 0:
    x = x + dx

print(areal(x))
```

<!-- two-column stop -->



>[!oppgave]
>a) Forklar hva Lars prøver å finne ut med programmet. Hva blir svaret hvis man kjører programmet?
>b) Hvilken strategi bruker Lars i programmet sitt? Vil strategien fungere uavhengig av hvilken funksjon $f$ er?

## Fasit

a) Programmet finner det største arealet av et rektangel innskrevet under grafen. Svaret er ca. $\underline{\underline{3{,}079}}$.

b) Lars bruker en numerisk trinnvis tilnærming der han leter fremover til deriverte av arealet skifter fortegn. Strategien er **ikke** universell.

## Løsningsforslag

### a

Rektangelet $ABCD$ har ett hjørne på grafen til $f$. Hjørnet over $x$-aksen befinner seg i punktet $(x,\, f(x))$. Siden rektangelet er symmetrisk om $y$-aksen, har det bredde $2x$ og høyde $f(x)$.

Av figuren leser vi imidlertid at bare halvparten av rektangelet vises (fra $x = 0$ til $x$-verdien på grafen), altså bredde $x$ og høyde $f(x)$. Arealet er:

$$A(x) = x \cdot f(x) = x(-x^2 + 4) = -x^3 + 4x$$

**Hva programmet gjør:**

- `areal(x)` beregner $A(x) = x \cdot f(x)$.
- `der_areal(x)` beregner den numeriske deriverte $A'(x) \approx \dfrac{A(x+h) - A(x)}{h}$ med $h = 0{,}0001$.
- Løkken starter på $x = 0$ og øker $x$ med $\mathtt{dx} = 0{,}01$ i hvert steg, så lenge den numeriske deriverte i neste steg er positiv (dvs. arealet fortsatt vokser).
- Løkken stopper når `der_areal(x + dx) <= 0`, altså når arealet er i ferd med å avta — ved et (lokalt) maksimum.

**Programmet prøver å finne $x$-verdien som maksimerer arealet**, og skriver deretter ut $A(x)$ i dette punktet.

**Kjøring:** $x$ øker fra $0$ i steg på $0{,}01$. Den eksakte maksimumsverdien er $x = \dfrac{2}{\sqrt{3}} \approx 1{,}1547$. Programmet stopper siste gang $\mathtt{der\_areal}(x + 0{,}01) > 0$, noe som gir $x = 1{,}15$ (siden $A'(1{,}16) < 0$).

Programmet skriver ut:

$$A(1{,}15) = 1{,}15 \cdot (-(1{,}15)^2 + 4) = 1{,}15 \cdot 2{,}6775 \approx \underline{\underline{3{,}079}}$$

(Det eksakte maksimale arealet er $\dfrac{16\sqrt{3}}{9} \approx 3{,}0792$.)

### b

**Strategi:** Lars antar at arealet begynner med å vokse fra $x = 0$, og leter trinnvis fremover til den numeriske deriverte skifter fra positiv til ikke-positiv. Han finner altså det første punktet der $A'(x)$ snur fra positiv til negativ — et lokalt toppunkt.

**Strategien er ikke universell.** Den kan feile i følgende situasjoner:

- Hvis $A'(x)$ allerede er negativ eller lik null for $x = 0$ (arealet avtar fra start), stopper løkken umiddelbart uten å finne noe maksimum.
- Hvis $A(x)$ har flere lokale maksimumspunkter, finner programmet bare det første og overser et eventuelt høyere globalt maksimum lenger ut.
- Steglengden $\mathtt{dx} = 0{,}01$ gir en numerisk tilnærming, ikke det eksakte maksimumet. Her gir programmet $x = 1{,}15$ istedenfor det eksakte $x = \dfrac{2\sqrt{3}}{3} \approx 1{,}1547$.

Strategien fungerer kun for funksjoner der arealet er positivt, starter med å vokse, og har nøyaktig ett lokalt maksimum.