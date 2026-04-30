---
{"aliases":[],"date":"2023-05-24","del":2,"dg-permalink":"/parallelle-plan-og-kule/","dg-publish":true,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Parallelle plan og kule","todo":[],"permalink":"/parallelle-plan-og-kule/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":2,"eksamen":"v23","fag":["r2"],"modified":"2026-03-30","oppgave":2,"oppgavenummer":[{"del":2,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"lf-source-claude":true,"tags":["oppgave"],"temaer":["vektorer","geometri"],"title":"Parallelle plan og kule","todo":[]}}
---


# Parallelle plan og kule

Planet $\alpha$ er bestemt av punktene $A(1,0,3)$, $B(0,1,2)$ og $C(2,3,2)$.

>[!oppgave]
>a) Bestem en likning for planet $\beta$ som er parallelt med $\alpha$ og går gjennom punktet $P(2,-5,5)$.

En kule tangerer $\alpha$ i punktet $A$ og $\beta$ i et punkt $Q$.

>[!oppgave]
>b) Bestem eksakte verdier for koordinatene til $Q$.

## Fasit

a) $\underline{\underline{\beta\colon x - y - 2z + 3 = 0}}$

b) $\underline{\underline{Q = \left(\dfrac{4}{3},\, -\dfrac{1}{3},\, \dfrac{7}{3}\right)}}$

## Løsningsforslag

Vi bestemmer først en likning for planet $\alpha$ ved å finne normalvektoren.

**Normalvektor til $\alpha$**

Vi bruker GeoGebra CAS til å beregne $\vec{AB}$, $\vec{AC}$ og kryssprodukt:

```
A := (1, 0, 3)
B := (0, 1, 2)
C := (2, 3, 2)
AB := B - A          → AB := (-1, 1, -1)
AC := C - A          → AC := (1, 3, -1)
n := AB ⊗ AC         → n := (2, -2, -4)
```

![GeoGebra CAS – kryssprodukt, beta og Q](/img/user/_resources/r2-v23-2-2-parallelle-plan-kule.png)

Normalvektoren er $\vec{n} = (2, -2, -4)$, som vi forenkler til $\vec{n} = (1, -1, -2)$.

**Likning for $\alpha$**

Planet $\alpha$ har likning $x - y - 2z + d = 0$. Vi setter inn $A(1, 0, 3)$:

$$1 - 0 - 2 \cdot 3 + d = 0 \implies d = 5$$

$$\alpha\colon x - y - 2z + 5 = 0$$

### a

Planet $\beta$ er parallelt med $\alpha$, så det har samme normalvektor og likning på formen $x - y - 2z + d = 0$.

Vi setter inn $P(2, -5, 5)$ i GeoGebra CAS:

```
beta_d := Løs(2 - (-5) - 2*5 + d = 0, d)    → {d = 3}
```

$$\textbf{$\beta\colon$} \quad \underline{\underline{x - y - 2z + 3 = 0}}$$

### b

Kulen tangerer $\alpha$ i $A$ og $\beta$ i $Q$. Siden begge plan er parallelle og kulen tangerer begge, ligger sentrum midt mellom tangentpunktene på linjen gjennom $A$ med retning $\vec{n} = (1, -1, -2)$.

**Linjen gjennom $A$ med retning $\vec{n}$:**

$$\ell\colon \quad (x, y, z) = (1, 0, 3) + t(1, -1, -2) = (1+t,\; -t,\; 3-2t)$$

**Finn $Q$ på $\beta$:**

Vi setter linjeuttrykkene inn i likningen for $\beta$ i GeoGebra CAS:

```
Q_t := Løs((1 + t) - (-t) - 2*(3 - 2*t) + 3 = 0, t)    → {t = 1/3}
Q := (1 + 1/3, -1/3, 3 - 2/3)                           → Q := (4/3, -1/3, 7/3)
```

$$Q = \left(\frac{4}{3},\; -\frac{1}{3},\; \frac{7}{3}\right)$$

Vi kan verifisere at $Q$ ligger på $\beta$: $\frac{4}{3} - \left(-\frac{1}{3}\right) - 2 \cdot \frac{7}{3} + 3 = \frac{4}{3} + \frac{1}{3} - \frac{14}{3} + \frac{9}{3} = \frac{0}{3} = 0$. ✓

$$\underline{\underline{Q = \left(\frac{4}{3},\; -\frac{1}{3},\; \frac{7}{3}\right)}}$$