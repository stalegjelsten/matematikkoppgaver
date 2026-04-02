---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["integral","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"title":"Volum av omdreiningslegeme – kopp","status":3,"source":null,"todo":null,"dg-permalink":"/volum-av-omdreiningslegeme-kopp/","permalink":"/volum-av-omdreiningslegeme-kopp/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["integral","geometri"],"fag":["r2"],"eksamen":"h25","del":1,"oppgave":2,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":2}],"title":"Volum av omdreiningslegeme – kopp","status":3,"source":null,"todo":null}}
---


# Volum av omdreiningslegeme – kopp

Funksjonen er gitt ved

$$f(x) = \sqrt{x+4} \quad , \quad D_f = [0,10]$$

Innsiden av en kopp har samme form som vi får når vi dreier grafen til $f$ om førsteaksen i et koordinatsystem der enheten langs aksene er cm.

>[!oppgave]
>Hvor mye kakao er det plass til i koppen dersom den fylles helt opp?

## Fasit

$V = 90\pi \approx 270 \, \mathrm{cm}^3$

## Løsningsforslag

Koppen dannes når grafen til $f(x) = \sqrt{x+4}$ dreies om $x$-aksen. Volumet av et omdreiningslegeme er gitt ved

$$V = \pi \int_a^b [f(x)]^2 \, \mathrm{d}x$$

Her er $a = 0$ og $b = 10$:

$$
\begin{aligned}
V &= \pi \int_0^{10} \left(\sqrt{x+4}\right)^2 \, \mathrm{d}x \\
  &= \pi \int_0^{10} (x+4) \, \mathrm{d}x \\
  &= \pi \left[\frac{x^2}{2} + 4x\right]_0^{10} \\
  &= \pi \left(\frac{100}{2} + 40\right) \\
  &= 90\pi
\end{aligned}
$$

**Koppen rommer $\underline{\underline{90\pi \, \mathrm{cm}^3}}$ kakao. Det tilsvarer litt over $\underline{\underline{ 270 \, \mathrm{cm}^{3} }}$.**
