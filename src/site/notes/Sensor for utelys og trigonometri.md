---
{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"dg-publish":true,"temaer":["trigonometri","modellering","derivasjon"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"poeng":6,"title":"Sensor for utelys og trigonometri","status":0,"source":null,"lf-source-claude":true,"dg-permalink":"/sensor-for-utelys-og-trigonometri/","permalink":"/sensor-for-utelys-og-trigonometri/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-05-27","modified":"2026-04-30","aliases":[],"temaer":["trigonometri","modellering","derivasjon"],"fag":["r2"],"eksamen":"v24","del":2,"oppgave":3,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":3}],"poeng":6,"title":"Sensor for utelys og trigonometri","status":0,"source":null,"lf-source-claude":true}}
---


# Sensor for utelys og trigonometri

En sensor skal slå på utelyset foran ytterdøra til et hus. Lyset blir slått på $T(x)$ timer etter midnatt. $T(x)$ er gitt ved

$$T(x) = 4 \cdot \sin(0{,}0055\pi \cdot x - 0{,}5\pi) + 19.$$

$x$ er antall dager etter 31. desember 2023 slik at $x = 1$ svarer til 1. januar 2024. Tidspunktet sensoren slår på utelyset, varierer fra kl. 15:00 til kl. 23:00, og det varierer periodisk i løpet av et år. Den 1. april slår lyset seg på kl. 19:00.

>[!oppgave]
>a) Forklar hvordan de ulike verdiene i modellen $T(x)$ passer med opplysningene gitt ovenfor.
>b) Når i 2024 vil tidspunktet da lyset slår seg på, flytte seg 3 minutter per dag?
>c) Når endrer dette tidspunktet seg raskest, og hvor stor er endringen da?

>[!question]- Fasit
>
>[[Løsningsforslag/Løsningsforslag R2 eksamen V2024#Oppgave 2-3\|Løsningsforslag R2 eksamen V2024#Oppgave 2-3]]

## Fasit

a) Se forklaring i løsningsforslaget.

b) Tidspunktet endrer seg 3 minutter per dag rundt **$\underline{\underline{16. \text{ februar}}}$**, **$\underline{\underline{14. \text{ mai}}}$**, **$\underline{\underline{16. \text{ august}}}$** og **$\underline{\underline{12. \text{ november}}}$**.

c) Tidspunktet endrer seg raskest rundt **$\underline{\underline{31. \text{ mars}}}$** (og 29. september) med ca. $\underline{\underline{4{,}1 \text{ min/dag}}}$.

## Løsningsforslag

### a

Modellen er $T(x) = 4 \cdot \sin(0{,}0055\pi \cdot x - 0{,}5\pi) + 19$.

**Likevektslinjen 19** svarer til gjennomsnittet av minimums- og maksimumsverdi:

$$\frac{15 + 23}{2} = 19 \checkmark$$

**Amplituden 4** svarer til halvparten av variasjonsbredden:

$$\frac{23 - 15}{2} = 4 \checkmark$$

Tidspunktet varierer altså mellom $19 - 4 = 15$ (kl. 15:00) og $19 + 4 = 23$ (kl. 23:00).

**Perioden** finner vi fra koeffisienten foran $x$ i argumentet:

$$P = \frac{2\pi}{0{,}0055\pi} = \frac{2}{0{,}0055} \approx 363{,}6 \text{ dager} \approx 1 \text{ år} \checkmark$$

**Faseforskyvningen** $-0{,}5\pi$ gir minimum der $\sin = -1$, altså når

$$0{,}0055\pi \cdot x - 0{,}5\pi = -0{,}5\pi \implies x = 0$$

$x = 0$ svarer til 31. desember 2023, og minimum $T = 15$ (kl. 15:00) tidligst på vinteren er rimelig.

**Kontroll 1. april** ($x = 91$, siden januar har 31 dager, februar 29 (skuddår) og mars 31):

$$T(91) = 4 \cdot \sin(0{,}0055\pi \cdot 91 - 0{,}5\pi) + 19 \approx 19{,}01 \approx 19 \checkmark$$

Lyset slår seg på ca. kl. 19:00 den 1. april.

### b

Vi bruker GeoGebra CAS til å definere $T(x)$, beregne den deriverte og løse $|T'(x)| = 0{,}05$ (siden $3 \text{ min/dag} = 0{,}05 \text{ t/dag}$).

![GeoGebra CAS: T(x), derivert og løsninger av T'(x)=±0,05](/img/user/_resources/r2-v24-2-3.png)

Fra CAS-utklippet ser vi:

$$T'(x) = \frac{11}{500}\pi \cdot \cos\left(\frac{11}{2000}\pi x - \frac{1}{2}\pi\right) \approx 0{,}06912 \cdot \cos(0{,}01728x - 1{,}5708)$$

**$T'(x) = 0{,}05$** (lyset slår seg på 3 min *senere* per dag):

$$x \approx 46{,}81 \quad \text{og} \quad x \approx 135{,}01$$

**$T'(x) = -0{,}05$** (lyset slår seg på 3 min *tidligere* per dag):

$$x \approx 228{,}62 \quad \text{og} \quad x \approx 316{,}83$$

Vi konverterer til datoer (med $x = 1$ som 1. januar 2024):

| $x$ | Dato | Beskrivelse |
|-----|------|-------------|
| $47$ | ca. 16. februar | Lyset slår seg på 3 min/dag *senere* |
| $135$ | ca. 14. mai | Lyset slår seg på 3 min/dag *senere* |
| $229$ | ca. 16. august | Lyset slår seg på 3 min/dag *tidligere* |
| $317$ | ca. 12. november | Lyset slår seg på 3 min/dag *tidligere* |

**Tidspunktet endrer seg 3 minutter per dag rundt 16. februar, 14. mai, 16. august og 12. november.**

### c

$|T'(x)|$ er størst når $|\cos(\ldots)| = 1$, altså når cosinus-leddet er $\pm 1$.

Maksimalt positiv endring (lyset slår seg på senest mulig per dag): $\cos(\ldots) = 1$, som gir

$$0{,}0055\pi \cdot x - 0{,}5\pi = 0 \implies x = \frac{0{,}5}{0{,}0055} = \frac{1000}{11} \approx 90{,}9$$

$x \approx 91$ svarer til ca. 31. mars / 1. april.

Fra CAS-utklippet: `xMaks := 90,909` og `Maks := 0,06912`.

Den største endringsraten er

$$|T'(x)|_{\max} = 0{,}022\pi \approx 0{,}06912 \text{ t/dag} = 0{,}06912 \cdot 60 \approx 4{,}1 \text{ min/dag}$$

Tilsvarende skjer den raskeste negative endringen (lyset slår seg på tidligere) en halv periode senere:

$$x \approx 90{,}9 + \frac{363{,}6}{2} \approx 272{,}7 \approx \text{29. september}$$

**Tidspunktet sensoren slår på lyset endrer seg raskest rundt 31. mars (og 29. september), med ca. $\underline{\underline{4{,}1 \text{ min/dag}}}$.**
