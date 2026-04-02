---
{"tags":["oppgave"],"date":"2025-05-14","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["programmering"],"fag":["r2"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":6}],"poeng":2,"title":"Caspers kode","status":1,"source":null,"todo":null,"dg-permalink":"/caspers-kode/","permalink":"/caspers-kode/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-14","modified":"2026-03-25","aliases":[],"temaer":["programmering"],"fag":["r2"],"eksamen":"v25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"r2","del":1,"oppgave":6}],"poeng":2,"title":"Caspers kode","status":1,"source":null,"todo":null}}
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
