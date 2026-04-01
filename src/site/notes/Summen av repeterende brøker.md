---
{"tags":["oppgave"],"temaer":["rekker"],"aliases":null,"del":2,"oppgave":null,"oppgavenummer":[{"fag":"s2","del":2}],"fag":["s2"],"eksamen":null,"dg-publish":true,"title":"Summen av repeterende brøker","date":"2023-08-28","disabled rules":["all"],"modified":"2023-08-28","source":"Sinus S2 lærebok","permalink":"/summen-av-repeterende-broker/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"temaer":["rekker"],"aliases":null,"del":2,"oppgave":null,"oppgavenummer":[{"fag":"s2","del":2}],"fag":["s2"],"eksamen":null,"title":"Summen av repeterende brøker","date":"2023-08-28","disabled rules":["all"],"modified":"2023-08-28","source":"Sinus S2 lærebok","permalink":"/summen-av-repeterende-broker/"}}
---


# Summen av repeterende brøker

Finn summen.

$$
\left( 1-\frac{1}{5} \right)+\left( \frac{1}{2}-\frac{1}{6} \right) + \left( \frac{1}{3}-\frac{1}{7} \right)+ \dots + \left( \frac{1}{996}-\frac{1}{1000} \right)
$$

>[!tip]- Tips
>For å løse oppgaven for hånd bør du skrive opp noen flere ledd enn hva du ser foreløpig. Se etter muligheter til å forkorte bort ledd.

## Fasit

**Løsning med CAS**
Vi kan lage en eksplisitt formel for ledd nr. $i$ på denne måten:
$a_{i}=\left( \frac{1}{i}-\frac{1}{i+4} \right)$
Vi kan finne summen av denne rekka fra $i=1$ til $i=996$ ved hjelp av CAS: `Sum(((1)/(i))-((1)/(i+4)),i,1,996)`
**Løsning for hånd**
Vi kan fortsette rekka og legge til et par ekstra ledd. Da vil vi se at enkelte ledd kan strykes mot hverandre, og den resulterende rekka vil bli mye enklere.
$$\begin{aligned}
\left( 1-\frac{1}{5} \right) &+\left( \frac{1}{2}-\frac{1}{6} \right) + \left( \frac{1}{3}-\frac{1}{7} \right)+ \left( \frac{1}{4}-\frac{1}{8} \right) + \left( \frac{1}{5}-\frac{1}{9} \right) + \dots + \left( \frac{1}{996}-\frac{1}{1000} \right) \\
\left( 1-\cancel{ \frac{1}{5} } \right)&+\left( \frac{1}{2}-\cancel{ \frac{1}{6} } \right) + \left( \frac{1}{3}-\cancel{ \frac{1}{7} } \right)+ \left( \frac{1}{4}-\cancel{ \frac{1}{8} } \right) + \left( \frac{1}{5}-\cancel{ \frac{1}{9} } \right) + \dots + \left( \cancel{ \frac{1}{996} }-\frac{1}{1000} \right) \\
1&+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}-\frac{1}{997}-\frac{1}{998}-\frac{1}{999}-\frac{1}{1000}
\end{aligned}
$$
