---
{"aliases":[],"date":"2024-11-14","del":2,"dg-permalink":"/fiskepopulasjon-og-logistisk-modell/","dg-publish":true,"eksamen":"h24","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-22","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":3}],"poeng":8,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","logistisk funksjon","derivasjon","modellering"],"title":"Fiskepopulasjon og logistisk modell","todo":[],"permalink":"/fiskepopulasjon-og-logistisk-modell/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-11-14","del":2,"eksamen":"h24","fag":["r1"],"lf-source-claude":true,"modified":"2026-04-22","oppgave":3,"oppgavenummer":[{"del":2,"fag":"r1","oppgave":3}],"poeng":8,"source":null,"status":0,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","logistisk funksjon","derivasjon","modellering"],"title":"Fiskepopulasjon og logistisk modell","todo":[]}}
---


# Fiskepopulasjon og logistisk modell

Forskere har registrert en ny fiskeart i en innsjø. I tabellen nedenfor ser du hvor mange fisk av arten det var i innsjøen noen måneder etter at arten først ble registrert.

| Måneder etter første registrering | 0 | 1   | 2   | 3 | 4  | 5  | 6  | 7  | 8  |
|-----------------------------------|---|-----|-----|---|----|----|----|----|-----|
| Antall tusen fisk                 | 1 | 2,5 | 5,5 | 9 | 14 | 22 | 32 | 45 | 60 |

Fiskepopulasjonen kan beskrives med en modell på formen

$$A(t) = A_0 \cdot k^t$$

der $A(t)$ er antall tusen fisk $t$ måneder etter første registrering.

>[!oppgave]
>a) Bestem $A_0$ og $k$, og gi en praktisk tolkning av disse verdiene.

Fiskepopulasjonen kan også beskrives med en logistisk modell på formen

$$N(t) = \frac{B}{1 + \dfrac{B - N_0}{N_0} e^{-r \cdot t}}$$

$B$ er bæreevnen, $N_0$ er antall tusen fisk ved $t = 0$ og $r$ er vekstparameteren.

>[!oppgave]
>b) Bestem $N_0$, $B$ og $r$.
>c) Bestem den deriverte til funksjonene du fant i oppgavene a) og b). Forklar hvordan vekstfarten endrer seg ifølge hver av de to modellene.
>d) Hvilken modell mener du beskriver den praktiske situasjonen best? Hvor mange fisk vil det være 12 måneder etter første registrering, ifølge denne modellen?

## Fasit

a) $A_0 \approx 1{,}60$, $k \approx 1{,}63$. Populasjonen starter på ca. 1 600 fisk og vokser med ca. 63 % per måned.
b) $N_0 \approx 1{,}92$, $B \approx 111{,}37$, $r \approx 0{,}52$.
c) $A'(t) = A_0 \cdot \ln(k) \cdot k^t \approx 0{,}782 \cdot 1{,}63^t$ — alltid voksende. $N'(t) = r \cdot N(t)\!\left(1 - \tfrac{N(t)}{B}\right)$ — øker til vendepunktet ved $t \approx 7{,}7$ ($N \approx 55{,}7$), deretter avtar den.
d) Den logistiske modellen passer best. $N(12) \approx 100{,}8$ tusen fisk.

## Løsningsforslag

GeoGebra CAS-sesjon (alle deloppgaver):

![GeoGebra CAS – eksponential og logistisk modell, deriverte og vendepunkt](/img/user/_resources/r1-h24-2-3.png)

Graf med begge modeller og datapunkter:

![Graf – eksponentialmodell (rød) og logistisk modell (blå) med datapunkter (grønn)](/img/user/_resources/r1-h24-2-3-graf.png)

### a

Vi legger inn datapunktene i GeoGebra og utfører eksponentiell regresjonsanalyse. GeoGebra gir (linje 3 i CAS):

$$A(t) = 1{,}60 \cdot 1{,}63^t$$

**$A_0 \approx 1{,}60$ og $k \approx 1{,}63$.**

Praktisk tolkning:

- $A_0 = 1{,}60$ betyr at det var ca. **1 600 fisk** i innsjøen da arten ble første gang registrert ($t = 0$).
- $k = 1{,}63 = 1 + 0{,}63$ betyr at populasjonen vokser med ca. **63 % per måned** ifølge denne modellen.

### b

Vi utfører logistisk regresjonsanalyse i GeoGebra og får (linje 4 i CAS):

$$N(t) = \frac{111{,}37}{1 + 56{,}88 \cdot e^{-0{,}5244\,t}}$$

Sammenlikner vi med oppgavens form $N(t) = \dfrac{B}{1 + \dfrac{B - N_0}{N_0} e^{-r\,t}}$, leser vi av:

$$B = 111{,}37, \qquad \frac{B - N_0}{N_0} = 56{,}88 \;\Rightarrow\; N_0 = \frac{B}{1 + 56{,}88} \approx 1{,}92, \qquad r = 0{,}5244$$

**$N_0 \approx 1{,}92$, $B \approx 111{,}37$, $r \approx 0{,}52$.**

### c

**Eksponentialmodellen** $A(t) = A_0 \cdot k^t$ deriveres med kjerneregelen ($k^t = e^{t \ln k}$):

$$A'(t) = A_0 \cdot \ln(k) \cdot k^t$$

Fra linje 5 i CAS:

$$A'(t) \approx 0{,}782 \cdot 1{,}63^t$$

Siden $A'(t) > 0$ for alle $t$ og faktoren $1{,}63^t$ vokser uten begrensning, **øker vekstfarten hele tiden** — eksponentialmodellen gir alltid raskere og raskere vekst.

**Den logistiske modellen** $N(t) = \dfrac{B}{1 + \frac{B-N_0}{N_0}e^{-rt}}$ har derivert (linje 4 viser formen, beregnet analytisk):

$$N'(t) = r \cdot N(t) \cdot \left(1 - \frac{N(t)}{B}\right)$$

Vekstfarten avhenger både av nåværende populasjonsstørrelse $N(t)$ og av hvor nær bæreevnen $B$ populasjonen er. Vekstfarten er størst i **vendepunktet**, som finnes der $N(t) = B/2$. Vi beregner (linje 6 og 7 i CAS):

$$t_{\text{vend}} = \frac{\ln(56{,}88)}{0{,}5244} \approx 7{,}7 \text{~måneder}, \qquad N(t_{\text{vend}}) = \frac{B}{2} \approx 55{,}7 \text{~(tusen fisk)}$$

Maksimal vekstfart (linje 8 i CAS):

$$N'(t_{\text{vend}}) = \frac{r \cdot B}{4} \approx \frac{0{,}5244 \cdot 111{,}37}{4} \approx 14{,}6 \text{~(tusen fisk per måned)}$$

**Oppsummering:** Den logistiske modellen gir vekstfart som øker frem til $t \approx 7{,}7$ måneder, deretter avtar vekstfarten mot null når populasjonen nærmer seg bæreevnen $B \approx 111{,}4$ tusen fisk.

### d

**Den logistiske modellen passer best** for denne praktiske situasjonen. Begrunnelse:

- En fiskepopulasjon i en avgrenset innsjø har ikke ubegrenset tilgang på mat og plass. Bæreevnen $B$ representerer den maksimale populasjonen som innsjøen kan bære — en biologisk realistisk øvre grense.
- Eksponentialmodellen forutsetter evig ubegrenset vekst, noe som er urealistisk i et lukket økosystem. Ved $t = 12$ gir den $A(12) \approx 266$ tusen fisk — mer enn dobbelt så mye som bæreevnen til den logistiske modellen.
- Datapunktene viser tydelig at vekstfarten bremser opp mot slutten av observasjonsperioden (jf. grafen), noe som stemmer med logistisk atferd.

Ifølge den logistiske modellen vil det være

$$N(12) = \frac{111{,}37}{1 + 56{,}88 \cdot e^{-0{,}5244 \cdot 12}} \approx \mathbf{\underline{\underline{100{,}8 \text{~(tusen fisk)}}}}$$

12 måneder etter første registrering — det vil si omtrent **100 800 fisk**.
