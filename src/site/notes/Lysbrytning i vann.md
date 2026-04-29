---
{"aliases":[],"date":"2024-05-23","del":2,"dg-permalink":"/lysbrytning-i-vann/","dg-publish":true,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":2}],"poeng":3,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["trigonometri","likninger"],"title":"Lysbrytning i vann","todo":[],"permalink":"/lysbrytning-i-vann/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-23","del":2,"eksamen":"v24","fag":["1t"],"modified":"2026-03-26","oppgave":2,"oppgavenummer":[{"del":2,"fag":"1t","oppgave":2}],"poeng":3,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["trigonometri","likninger"],"title":"Lysbrytning i vann","todo":[]}}
---


# Lysbrytning i vann

Når en lysstråle går fra luft til vann, skifter den retning.

På figuren står linjen $m$ vinkelrett på vannoverflaten og lysstrålen går fra å danne en vinkel $u$ med $m$ til å danne en vinkel $v$ med $m$.

Når lysstrålen går fra luft til vann, vil

$$\sin u = 1{,}33 \cdot \sin v$$

![Lysstråle som brytes fra luft til vann med vinkler u og v](/img/user/_resources/1t-v24-2-2.jpeg){width=60%}

>[!oppgave]
>a) Hvor stor må vinkelen $u$ være for at vinkelen $v$ skal bli $39\degree$?
>b) Hva vil skje med vinkelen $v$ dersom vinkelen $u$ nærmer seg $90\degree$?
>c) Kan vinklene $u$ og $v$ bli like store?
>
>Husk å begrunne svarene dine.

## Fasit

a) $\underline{\underline{u \approx 56{,}82\degree}}$

b) Vinkelen $v$ nærmer seg $\underline{\underline{v \approx 48{,}75\degree}}$ (og kan aldri bli $90\degree$).

c) $\underline{\underline{u = v = 0\degree}}$ er den eneste muligheten.

## Løsningsforslag

Vi bruker GeoGebra CAS til å løse oppgaven. Likningen for lysbrytning er gitt:

$$\sin u = 1{,}33 \cdot \sin v$$

![GeoGebra CAS-utregning for lysbrytning](/img/user/_resources/1t-v24-2-2.png){width=80%}

### a

Vi skal finne $u$ når $v = 39\degree$. Setter inn i likningen:

$$\sin u = 1{,}33 \cdot \sin 39\degree$$

$$u = \arcsin(1{,}33 \cdot \sin 39\degree)$$

Se linje 1–2 i CAS-utklippet: $u \approx 56{,}82\degree$.

**Vinkelen $u$ må være $\underline{\underline{u \approx 56{,}82\degree}}$.**

### b

Dersom $u \to 90\degree$, vil $\sin u \to 1$. Fra likningen får vi da:

$$\sin v \to \frac{1}{1{,}33} \approx 0{,}752$$

$$v \to \arcsin\!\left(\frac{1}{1{,}33}\right) \approx 48{,}75\degree$$

Se linje 3 i CAS-utklippet. Selv om $u$ nærmer seg $90\degree$, vil $v$ aldri nå $90\degree$ — den nærmer seg $48{,}75\degree$ som en grenseverdi. Dette er den kritiske vinkelen for totalrefleksjon.

**Vinkelen $v$ nærmer seg $\underline{\underline{v \approx 48{,}75\degree}}$ og kan aldri bli $90\degree$.**

### c

Vi antar $u = v$ og setter inn i likningen:

$$\sin u = 1{,}33 \cdot \sin u$$

$$0 = 1{,}33 \cdot \sin u - \sin u = 0{,}33 \cdot \sin u$$

$$\sin u = 0 \implies u = 0\degree$$

Se linje 4 i CAS-utklippet (løsningen $u = \pi \cdot k_1$ tilsvarer $u = 0\degree$ for ikke-negative vinkler). Da er også $v = 0\degree$.

Vinklene kan altså bare være like store når lysstrålen går rett gjennom langs linjen $m$.

**$\underline{\underline{u = v = 0\degree}}$ er den eneste muligheten.**