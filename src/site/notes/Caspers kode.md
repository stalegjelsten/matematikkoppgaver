---
{"aliases":[],"date":"2025-05-14","del":1,"dg-permalink":"/caspers-kode/","dg-publish":true,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering"],"title":"Caspers kode","lf-source-claude":true,"todo":[],"permalink":"/caspers-kode/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-14","del":1,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering"],"title":"Caspers kode","lf-source-claude":true,"todo":[]}}
---


# Caspers kode

Casper har skrevet denne koden:

```python ln
def f(x):
	return x**3

def g(x):
	return -2*x**2

dx = 0.0001

s = 0
x = 0
while x <= 2:
	s = s + f(x)*dx + g(x)*dx
	x = x + dx

print(s)
```

>[!oppgave]
>Bestem verdien som skrives ut når koden kjøres.

## Fasit

$\underline{\underline{s \approx -\dfrac{4}{3} \approx -1{,}333}}$

## Løsningsforslag

Koden regner ut en **venstre-Riemann-sum** for summen $f(x) + g(x)$ over intervallet $[0, 2]$.

Løkken starter med $x = 0$ og øker med $\mathrm{d}x = 0{,}0001$ for hvert steg. For hvert $x$ legger den til

$$\bigl(f(x) + g(x)\bigr) \cdot \mathrm{d}x = \bigl(x^3 - 2x^2\bigr) \cdot \mathrm{d}x$$

Når $\mathrm{d}x \to 0$ nærmer summen seg det bestemte integralet

$$s \to \int_0^2 \bigl(x^3 - 2x^2\bigr) \, \mathrm{d}x$$

Vi beregner integralet:

$$\int_0^2 \bigl(x^3 - 2x^2\bigr) \, \mathrm{d}x = \left[ \frac{x^4}{4} - \frac{2x^3}{3} \right]_0^2$$

$$= \left(\frac{2^4}{4} - \frac{2 \cdot 2^3}{3}\right) - 0 = \frac{16}{4} - \frac{16}{3} = 4 - \frac{16}{3} = \frac{12}{3} - \frac{16}{3} = -\frac{4}{3}$$

Med $\mathrm{d}x = 0{,}0001$ (ikke null) vil koden gi en liten numerisk avrundingsfeil, og verdien som skrives ut er omtrent $-1{,}33333$.

**Verdien som skrives ut er $\underline{\underline{s \approx -\dfrac{4}{3} \approx -1{,}333}}$.**