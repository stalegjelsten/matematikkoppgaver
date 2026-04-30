---
{"aliases":[],"date":"2023-05-24","del":1,"dg-permalink":"/tangens-derivert-og-integral/","dg-publish":true,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["trigonometri","derivasjon","integral"],"title":"Tangens, derivert og integral","todo":[],"permalink":"/tangens-derivert-og-integral/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-05-24","del":1,"eksamen":"v23","fag":["r2"],"lf-source-claude":true,"modified":"2026-03-30","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":2}],"poeng":null,"source":null,"status":0,"tags":["oppgave"],"temaer":["trigonometri","derivasjon","integral"],"title":"Tangens, derivert og integral","todo":[]}}
---


# Tangens, derivert og integral

>[!oppgave]
>a) Vis at dersom $f(x) = \tan x$, så er $f'(x) = 1 + \tan^2 x$.
>b) Regn ut
>$$\int \frac{1 + \tan^2 x}{\tan x} \, dx$$

## Fasit

a) $f'(x) = \dfrac{1}{\cos^2 x} = 1 + \tan^2 x$

b) $\underline{\underline{\ln|\tan x| + C}}$

## Løsningsforslag

### a

Vi skriver $f(x) = \tan x = \dfrac{\sin x}{\cos x}$ og bruker **kvotientregelen**
$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$
med $u = \sin x$, $u' = \cos x$, $v = \cos x$, $v' = -\sin x$:

$$f'(x) = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x}
= \frac{\cos^2 x + \sin^2 x}{\cos^2 x}$$

Siden $\cos^2 x + \sin^2 x = 1$ (Pytagoreisk identitet) får vi

$$f'(x) = \frac{1}{\cos^2 x}$$

Vi kan også skrive dette som

$$\frac{1}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = 1 + \frac{\sin^2 x}{\cos^2 x} = 1 + \tan^2 x$$

Dermed er $\mathbf{f'(x) = 1 + \tan^2 x}$. $\square$

### b

Vi kjenner igjen telleren fra del a): $f'(x) = 1 + \tan^2 x$ er den deriverte av $\tan x$.

Vi bruker **substitusjonen** $u = \tan x$, som gir $\mathrm{d}u = (1 + \tan^2 x)\,\mathrm{d}x$:

$$\int \frac{1 + \tan^2 x}{\tan x}\,\mathrm{d}x = \int \frac{\mathrm{d}u}{u} = \ln|u| + C = \underline{\underline{\ln|\tan x| + C}}$$