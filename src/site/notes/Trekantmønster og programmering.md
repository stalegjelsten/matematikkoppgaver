---
{"tags":["oppgave"],"date":"2025-11-14","modified":"2025-11-14","aliases":[],"dg-publish":true,"temaer":["rekker","programmering","figurtall"],"fag":["2p-y"],"eksamen":"h25","del":1,"oppgave":6,"oppgavenummer":[{"fag":"2p-y","del":1,"oppgave":6}],"title":"Trekantmønster og programmering 2P-Y H25","source":"Eksamen 2P-Y høst 2025","todo":null,"status":3,"permalink":"/trekantmonster-og-programmering/","dgPassFrontmatter":true}
---


# Trekantmønster og programmering 2P-Y H25




![Tre figurer med trekanter](/img/user/_resources/2p-y-h25-trekanter.png)

Ovenfor ser du tre figurer. Figurene er satt sammen av pinner.  
Tenk deg at du skal fortsette å lage figurer etter samme mønster.

>[!oppgave]
>a) Hvor mange pinner vil det være i figur 4?  
>   Hvor mange pinner vil det være i figur 10?

>[!oppgave]
>b) Lag en formel for antallet pinner i figur $n$.

Vivian har laget programmet nedenfor.

```python ln
n = 0
total = 0

figur = 3
grense = 1000

while total <= grense:
    n = n + 1
    total = total + figur
    figur = figur + 2

print("Resultat:")
print(n)
print(total)
```

```
Resultat:
31
1023
```

>[!oppgave]
>c) Hva vil Vivian finne ut?  
>   Hva forteller verdiene som skrives ut?  
>   Husk å begrunne svaret ditt.

>[!question]- Fasit
>
>a) Figur 4: 9 pinner. Figur 10: 21 pinner
>b) $f(n)=2n+1$
>c) Vivian vil finne den minste figuren som har mer enn 1000 pinner totalt. Figur 31 har 1023 pinner totalt.
>[[Løsningsforslag/Løsningsforslag 2P-Y eksamen H2025#Oppgave 1-6\|Løsningsforslag 2P-Y eksamen H2025#Oppgave 1-6]]


