---
{"aliases":[],"date":"2024-05-24","del":1,"dg-permalink":"/grenseverdier-av-eksponentialfunksjon/","dg-publish":true,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":3},{"del":1,"fag":"r1","oppgave":3}],"poeng":2,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","grenseverdi"],"title":"Grenseverdier av eksponentialfunksjon","todo":[],"permalink":"/grenseverdier-av-eksponentialfunksjon/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2024-05-24","del":1,"eksamen":"v24","fag":["s1","r1"],"modified":"2026-03-26","oppgave":3,"oppgavenummer":[{"del":1,"fag":"s1","oppgave":3},{"del":1,"fag":"r1","oppgave":3}],"poeng":2,"lf-source-claude":true,"source":null,"status":1,"tags":["oppgave"],"temaer":["eksponentialfunksjoner","grenseverdi"],"title":"Grenseverdier av eksponentialfunksjon","todo":[]}}
---


# Grenseverdier av eksponentialfunksjon

Funksjonen $f$ er gitt ved

$$f(x) = e^{-x+1}, \quad D_f = \mathbb{R}.$$

>[!oppgave]
>Bestem grenseverdiene $\lim_{x\to\infty} f(x)$ og $\lim_{x\to-\infty} f(x)$ dersom de eksisterer.

## Fasit

$\lim_{x\to\infty} f(x) = \mathbf{0}$

$\lim_{x\to-\infty} f(x)$ **eksisterer ikke** (vokser ubegrenset)

## Løsningsforslag

Vi bruker at $e^t \to 0$ når $t \to -\infty$, og at $e^t \to \infty$ når $t \to +\infty$.

La $t = -x + 1$. Da er $f(x) = e^t$.

**Når $x \to \infty$:** eksponenten $t = -x+1 \to -\infty$, og derfor

$$\lim_{x\to\infty} f(x) = \lim_{t\to-\infty} e^t = \mathbf{\underline{\underline{0}}}$$

**Når $x \to -\infty$:** eksponenten $t = -x+1 \to +\infty$, og derfor

$$\lim_{x\to-\infty} f(x) = \lim_{t\to+\infty} e^t = +\infty$$

Grenseverdien $\lim_{x\to-\infty} f(x)$ **eksisterer ikke** fordi $f(x)$ vokser ubegrenset.