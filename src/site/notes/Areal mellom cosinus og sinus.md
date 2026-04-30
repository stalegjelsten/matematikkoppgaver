---
{"aliases":[],"date":"2023-11-20","del":1,"dg-permalink":"/areal-mellom-cosinus-og-sinus/","dg-publish":true,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":2}],"poeng":null,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","areal under graf","trigonometri"],"title":"Areal mellom cosinus og sinus","todo":[],"permalink":"/areal-mellom-cosinus-og-sinus/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2023-11-20","del":1,"eksamen":"h23","fag":["r2"],"modified":"2026-04-01","oppgave":2,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":2}],"poeng":null,"lf-source-claude":true,"source":null,"status":0,"tags":["oppgave"],"temaer":["integral","areal under graf","trigonometri"],"title":"Areal mellom cosinus og sinus","todo":[]}}
---


# Areal mellom cosinus og sinus

Figuren nedenfor viser grafene til funksjonene $f$ og $g$, der $f(x) = \cos x$ og $g(x) = \sin x$.

![Grafene til f(x) = cos x og g(x) = sin x med fargelagt område](/img/user/_resources/r2-h23-1-2.jpeg){width=60%}

>[!oppgave]
>Bestem arealet av det fargelagte området vist på figuren.

## Fasit

$\underline{\underline{A = 2\sqrt{2}}}$

## Løsningsforslag

Fra figuren ser vi at det fargelagte området er mellom kurvene $g(x) = \sin x$ og $f(x) = \cos x$, der $\sin x \geq \cos x$.

Vi finner skjæringspunktene ved å løse $\sin x = \cos x$, det vil si $\tan x = 1$. I intervallet $[0, 2\pi]$ gir dette $x = \dfrac{\pi}{4}$ og $x = \dfrac{5\pi}{4}$.

I intervallet $\left\langle \dfrac{\pi}{4}, \dfrac{5\pi}{4} \right\rangle$ er $\sin x \geq \cos x$, så arealet er

$$A = \int_{\pi/4}^{5\pi/4} \bigl(\sin x - \cos x\bigr) \, \mathrm{d}x$$

Vi integrerer:

$$A = \left[ -\cos x - \sin x \right]_{\pi/4}^{5\pi/4}$$

Setter inn øvre grense $x = \dfrac{5\pi}{4}$:

$$-\cos\frac{5\pi}{4} - \sin\frac{5\pi}{4} = -\left(-\frac{\sqrt{2}}{2}\right) - \left(-\frac{\sqrt{2}}{2}\right) = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} = \sqrt{2}$$

Setter inn nedre grense $x = \dfrac{\pi}{4}$:

$$-\cos\frac{\pi}{4} - \sin\frac{\pi}{4} = -\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} = -\sqrt{2}$$

Dermed blir arealet

$$A = \sqrt{2} - \left(-\sqrt{2}\right) = \mathbf{2\sqrt{2}}$$

**Arealet av det fargelagte området er $\underline{\underline{2\sqrt{2} \approx 2{,}83}}$.**