---
{"aliases":[],"date":"2025-05-14","del":1,"dg-permalink":"/caspers-kode/","dg-publish":true,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering"],"title":"Caspers kode","todo":["løsningsforslag"],"permalink":"/caspers-kode/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":[],"date":"2025-05-14","del":1,"eksamen":"v25","fag":["r2"],"modified":"2026-03-25","oppgave":6,"oppgavenummer":[{"del":1,"fag":"r2","oppgave":6}],"poeng":2,"source":null,"status":1,"tags":["oppgave"],"temaer":["programmering"],"title":"Caspers kode","todo":["løsningsforslag"]}}
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