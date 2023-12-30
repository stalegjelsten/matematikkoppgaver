---
{"tags":["oppgave"],"temaer":["programmering","derivasjon"],"aliases":[],"del":1,"oppgave":4,"fag":["r1"],"eksamen":"h23","dg-publish":true,"title":"Tolk og fiks program som finner bunnpunkt","date":"2023-11-15","modified":"2023-11-15","permalink":"/tolk-og-fiks-program-som-finner-bunnpunkt/","dgPassFrontmatter":true}
---


# Tolk og fiks program som finner bunnpunkt

Funksjonen $f$ er gitt ved

$$
f(x)=2x^{2}-9x-2
$$

Egil ønsker å lage et program som regner ut koordinatene til bunnpunktet på grafen til $f$. Han har skrevet koden nedenfor.

```python
def f(x):
    return 2*x**2 - 9*x - 2

def df(x,h):
    return (f(x+h) - f(x))/h

h = 0.001
a = 0

while df(a,h) < 0:
    a = a + 1
    
print("Bunnpunktet er", (a, f(a)))
```

Programmet gir utskriften `Bunnpunktet er (3, -11)`

> **a)** Forklar hvilken strategi Egil har brukt.

Svaret han får, er ikke riktig.

> **b)** Foreslå en endring i koden som vil gi Egil et riktigere svar.

>[!question]- Fasit
> b) Endre `a = a + 1` til `a = a + 0.01`
>

## Relatert

<pre class="dataview dataview-error">Evaluation Error: TypeError: Cannot read properties of null (reading 'contains')
    at eval (eval at &lt;anonymous&gt; (plugin:dataview), &lt;anonymous&gt;:35:47)
    at Array.filter (&lt;anonymous&gt;)
    at Proxy.where (plugin:dataview:8189:39)
    at eval (eval at &lt;anonymous&gt; (plugin:dataview), &lt;anonymous&gt;:35:28)
    at DataviewInlineApi.eval (plugin:dataview:18638:16)
    at evalInContext (plugin:dataview:18639:7)
    at asyncEvalInContext (plugin:dataview:18649:32)
    at DataviewJSRenderer.render (plugin:dataview:18670:19)
    at DataviewJSRenderer.onload (plugin:dataview:18260:14)
    at e.load (app://obsidian.md/app.js:1:1147632)</pre>