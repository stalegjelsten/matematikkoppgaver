---
{"alias":[null],"aliases":[null],"date":"2023-11-15","del":1,"dg-permalink":"/deriver-x-ln-x/","dg-publish":true,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":1,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":1}],"tags":["oppgave"],"temaer":["derivasjon","logaritmer"],"title":"Deriver x ln(x)","todo":null,"permalink":"/deriver-x-ln-x/","dgPassFrontmatter":true,"dg-note-properties":{"alias":[null],"aliases":[null],"date":"2023-11-15","del":1,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":1,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":1}],"tags":["oppgave"],"temaer":["derivasjon","logaritmer"],"title":"Deriver x ln(x)","todo":null}}
---


# Deriver x ln(x)

Deriver funksjonen

$$
f(x)=x^{2} \cdot \ln(x)
$$

## Fasit

$f'(x)=x(2\ln (x)+1)$

## Løsningsforslag

Vi bruker produktregelen $(uv)' = u'v + uv'$ med

$$u = x^2 \quad \Rightarrow \quad u' = 2x$$

$$v = \ln(x) \quad \Rightarrow \quad v' = \frac{1}{x}$$

Da får vi

$$f'(x) = \textcolor{seagreen}{2x} \cdot \ln(x) + x^2 \cdot \textcolor{steelblue}{\frac{1}{x}}$$

$$= 2x\ln(x) + x$$

$$= \mathbf{\underline{\underline{x(2\ln(x)+1)}}}$$