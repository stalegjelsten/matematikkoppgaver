---
{"aliases":[],"date":"2023-05-24","del":1,"dg-permalink":"/bevis-for-grenseverdien-til-sin-v-delt-pa-v/","dg-publish":true,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["grenseverdi","trigonometri","bevis"],"title":"Bevis for grenseverdien til sin v delt på v","lf-source-claude":true,"todo":[],"permalink":"/bevis-for-grenseverdien-til-sin-v-delt-pa-v/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":1,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":5,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":5}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["grenseverdi","trigonometri","bevis"],"title":"Bevis for grenseverdien til sin v delt på v","lf-source-claude":true,"todo":[]}}
---


# Bevis for grenseverdien til sin v delt på v

I denne oppgaven skal du vise at $\lim_{v \to 0^+} \dfrac{\sin v}{v} = 1$.

I figuren nedenfor er $AB = AD = 1$, og buen $BD$ er del av en sirkel med sentrum i $A$. Vi lar $\angle BAC = v$ (målt i radianer).

![Figur til grenseverdibevis](/img/user/_resources/r2-v23-1-5.jpeg){width=60%}

>[!oppgave]
>a) Bruk arealbetraktninger til å begrunne at
>$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v$$
>b) Forklar at dette gir oss
>$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}$$
>c) Bruk ulikhetene fra oppgave b til å begrunne at $\lim_{v \to 0^+} \dfrac{\sin v}{v} = 1$.

## Fasit

Se løsningsforslag.

## Løsningsforslag

### a

Vi ser på tre figurer som alle befinner seg innenfor sirkelen med sentrum $A$ og radius $1$, og sammenligner arealene.

**Trekant $ABD$.**
$DC$ er høyden fra $D$ ned til grunnlinjen $AB$. Siden $AD = 1$ og $\angle DAB = v$, er $|DC| = \sin v$. Grunnlinjen $|AB| = 1$, og arealet er

$$T_{\triangle ABD} = \frac{1}{2} \cdot 1 \cdot \sin v = \frac{1}{2}\sin v.$$

**Sirkelsektor $ABD$.**
En sektor med radius $r = 1$ og sentralvinkel $v$ (i radianer) har areal

$$T_{\text{sektor}} = \frac{1}{2}r^2 v = \frac{1}{2} \cdot 1^2 \cdot v = \frac{1}{2}v.$$

**Trekant $ABE$.**
La $E$ være punktet på linjen gjennom $A$ og $C$ slik at $BE \perp AB$. Da $AB = 1$ og $\angle BAE = v$, gir tangens at $|BE| = \tan v$. Arealet er

$$T_{\triangle ABE} = \frac{1}{2} \cdot 1 \cdot \tan v = \frac{1}{2}\tan v.$$

**Innklusjonen av figurene.**
Trekant $ABD$ er en delfigur av sektoren (alle punkter i trekanten ligger innenfor sektoren), og sektoren er en delfigur av trekant $ABE$ (buen $BD$ er kortere enn siden $BE$). Derfor gjelder:

$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v. \qquad \square$$

### b

Vi starter fra ulikheten i a:

$$\frac{1}{2}\sin v < \frac{1}{2}v < \frac{1}{2}\tan v.$$

For $0 < v < \dfrac{\pi}{2}$ er $\sin v > 0$, så vi kan dele alle ledd med $\dfrac{1}{2}\sin v$ (positivt, ulikhetstegnene bevares):

$$1 < \frac{v}{\sin v} < \frac{\tan v}{\sin v}.$$

Vi forenkler høyre side:

$$\frac{\tan v}{\sin v} = \frac{\dfrac{\sin v}{\cos v}}{\sin v} = \frac{1}{\cos v}.$$

Dermed:

$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}. \qquad \square$$

### c

Fra b har vi for $0 < v < \dfrac{\pi}{2}$:

$$1 < \frac{v}{\sin v} < \frac{1}{\cos v}.$$

Vi tar grenseverdien når $v \to 0^+$ i ytterleddet:

$$\lim_{v \to 0^+} 1 = 1 \qquad \text{og} \qquad \lim_{v \to 0^+} \frac{1}{\cos v} = \frac{1}{\cos 0} = \frac{1}{1} = 1.$$

Begge yttergrensene er $1$, og $\dfrac{v}{\sin v}$ er klemt mellom dem. Av **skviseteoremet** (sandwich-teoremet) følger det at

$$\lim_{v \to 0^+} \frac{v}{\sin v} = 1.$$

Siden $\dfrac{v}{\sin v} \neq 0$ i en omegn av $0$, kan vi ta den gjensidige verdien:

$$\lim_{v \to 0^+} \frac{\sin v}{v} = \frac{1}{1} = \underline{\underline{1}}. \qquad \square$$