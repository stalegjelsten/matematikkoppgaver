---
{"tags":["oppgave"],"date":"2024-12-14","modified":"2026-03-30","aliases":[],"dg-publish":true,"temaer":["programmering","rekursiv sammenheng"],"fag":["s2","r2"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":5}],"title":"Rekursiv formel og programmering","source":null,"todo":null,"status":3,"dg-permalink":"/rekursiv-formel-og-programmering/","permalink":"/rekursiv-formel-og-programmering/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2024-12-14","modified":"2026-03-30","aliases":[],"temaer":["programmering","rekursiv sammenheng"],"fag":["s2","r2"],"eksamen":"h24","del":2,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":4},{"fag":"r2","del":2,"oppgave":5}],"title":"Rekursiv formel og programmering","source":null,"todo":null,"status":3}}
---


# Rekursiv formel og programmering

>[!oppgave]
>a) Bestem en rekursiv formel for tallfølgen $1, 2, 6,15,31,56,\dots$
>b) Bruk den rekursive formelen du fant i oppgave a), og lag et program som regner ut summen av de 30 første leddene i tallfølgen.
>
>Husk å legge ved bilde av både koden og resultatet av kjøringen.

## Fasit

a) $a_{n+1}=a_{n}+n^{2}$
b) 67 455

## Løsningsforslag

### 2-4a
Jeg setter opp tallene i følgen og sjekker differansene mellom hvert ledd (*det er alltid et godt tips for å finne mønstre!*). Jeg fant ut at differansene mellom tallene var 1, 4, 9, 16, 25, og disse tallene kjenner jeg igjen som kvadrattallene.

Jeg sjekker om jeg finner en god sammenheng for et av leddene
$$a_{5}=31=15+16=15+4^2=a_{4}+4^{2}$$
Jeg ser at jeg kan generalisere denne sammenhengen som
$$
\underline{\underline{a_{n+1}=a_{n}+n^{2}}}
$$

>[!tip] Alternative rekursive sammenhenger
>
>Det finnes også andre rekursive sammenhenger som som gir samme rekke:
>
>- $a_{n}=a_{n-1}+(n-1)^{2}$ er den samme sammenhengen som vi nettopp fant, men den gjelder for $n\geq 2$
>- $a_{n}=\left( \sqrt{ a_{n-1}-a_{n-2}  } +1 \right)^{2} + a_{n-1}$ er en sammenheng som ikke bruker $n$, slik at du ikke er avhengig av å kjenne til hvor i rekka du befinner deg når du bruker formelen

### 2-4b

![Program for å regne ut ledd i rekke](/img/user/_resources/s2-h24-2-4b.png){width=60%}

Jeg brukte en `for`-løkke til å regne meg fram til delsummen til ledd nummer 30 og skrev ut svarene i konsollen. 

**Summen av de 30 første leddene er 67 455.**

>[!tip] Ulike løsninger på denne oppgaven
>
>Det finnes mange ulike løsninger på denne oppgaven – det viktigste er å passe på at ledd nr. 1 faktisk blir 1, ledd nr. 2 blir 2, ledd nr. 3 blir 6 og så videre. Derfor er det lurt å skrive ut alle leddene, og sjekke at de første leddene blir riktige sammelignet med oppgaveteksten. Her er ulike løsningsforslag til samme oppgave.
>```python
>a = 1
>sum = 0
>for n in range(1, 31):
>    a = a + (n - 1) ** 2  # regner ut nytt ledd
>    sum = sum + a         # finner delsummen
>    print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>
>a = 1
>sum = 1
>for n in range(1, 30):
>	a = a + n ** 2
>	sum = sum + a
>	print(f"Ledd {n + 1}: {a}. Delsum {n + 1}: {sum}")
>
>a = 1
>sum = 1
>for n in range(2, 31):
>    a = (n - 1) ** 2 + a  
>    sum = sum + a         
>    print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>
>
>a = 1
>sum = 1
>for n in range(1, 31):
>	print(f"Ledd {n}: {a}. Delsum {n}: {sum}")
>	a = a + n ** 2
>	sum = sum + a
>```
