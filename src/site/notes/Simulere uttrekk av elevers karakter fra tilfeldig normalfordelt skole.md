---
{"aliases":null,"tags":null,"temaer":["programmering","simulering","sannsynlighet","normalfordeling","kontinuerlige sannsynlighetsfordelinger"],"alias":[],"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole","date":"2023-05-27","modified":"2025-09-21","permalink":"/simulere-uttrekk-av-elevers-karakter-fra-tilfeldig-normalfordelt-skole/","dgPassFrontmatter":true,"dg-note-properties":{"aliases":null,"tags":null,"temaer":["programmering","simulering","sannsynlighet","normalfordeling","kontinuerlige sannsynlighetsfordelinger"],"alias":[],"del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"fag":"s2","eksamen":"v23","title":"Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole","date":"2023-05-27","modified":"2025-09-21","permalink":"/simulere-uttrekk-av-elevers-karakter-fra-tilfeldig-normalfordelt-skole/"}}
---


# Simulere uttrekk av elevers karakter fra tilfeldig normalfordelt skole

Forskere ønsker å undersøke matematikkunnskapene til elever i videregående skole. Elever fra tre store skoler skal være med i undersøkelsen.

Karakterstatistikk fra de tre skolene viser at karakterene i matematikk er tilnærmet normalfordelt. Tabellen nedenfor viser forventningsverdi og standardavvik for hver av de tre skolene.

| Skole   | Forventningsverdi | Standardavvik |
| ------- |:-----------------:|:-------------:|
| Skole A |        3,8        |      1,2      |
| Skole B |        3,4        |      1,4      |
| Skole C |        4,1        |      1,1      |

Forskerne skal trekke ut 20 elever. For hver elev de skal trekke, trekker de først en tilfeldig skole og deretter en tilfeldig elev fra den skolen.

>[!oppgave]
>a) Lag et program som simulerer gjennomsnittskarakteren til 20 elever som er valgt ut på denne måten.
>b) Bruk simuleringer til å estimere sannsynligheten for at karaktersnittet til de 20 elevene er høyere enn 4. 

## Fasit

b) $P(X>4)\approx 0{,}205$

## Løsningsforslag

### a
 ```python
 from random import randint, gauss 
 # henter nødvendige pakker for uniform fordeling og normalfordeling 
 
 n = 20
 sum_karakterer = 0
 for i in range(n):
     # trekker et tilfeldig tall fra 1 til 3. Dette tilsvarer
     # skole A, B og C
     skole = randint(1,3)
     if skole == 1:
         # hvis det tilfeldige tallet er 1, så skal vi trekke 
         # tilfeldig elev fra skole A. I dette tilfellet har 
         # normalfordelingen my = 3.8 og sigma = 1.2             
         # # vi trekker en tilfeldig elev med gauss(mu, sigma)
         elev = gauss(3.8, 1.2)
     elif skole == 2:
         elev = gauss(3.4, 1.4)
     else:
         elev = gauss(4.1, 1.1)
     # vi legger til elevens karakter på summen
     sum_karakterer += elev
 
 print(f"Gjennomsnittskarakteren til de {n} elevene er {sum_karakterer/n:.3f}.")
 ```
 
### b
 ```python
 from random import randint, gauss 
 # henter nødvendige pakker for uniform fordeling og normalfordeling 
 
 N = 10_000
 antall_gunstige = 0
 for j in range(N):
     n = 20
     sum_karakterer = 0
     for i in range(n):
         # trekker et tilfeldig tall fra 1 til 3. 
         # Dette tilsvarer skole A, B og C
         skole = randint(1,3)
         if skole == 1:
             # hvis det tilfeldige tallet er 1, så skal vi trekke 
             # tilfeldig elev fra skole A. I dette tilfellet har 
             # normalfordelingen my = 3.8 og sigma = 1.2             
             # vi trekker en tilfeldig elev med gauss(mu, sigma)
             elev = gauss(3.8, 1.2)
         elif skole == 2:
             elev = gauss(3.4, 1.4)
         else:
             elev = gauss(4.1, 1.1)
         # vi legger til elevens karakter på summen
         sum_karakterer += elev
     if sum_karakterer/n > 4:
         # hvis snittkarakteren er over 4 så har vi et gunstig utfall
         antall_gunstige += 1
 
 print(f"Etter {N} simuleringer estimerer jeg at sannsynligheten for at"
       f"gjennomsnittskarakteren er over 4 til {antall_gunstige/N:.4f}.")
 ```
 
 Jeg brukte $10\,000$ simuleringer og testet programmet noen ganger. Jeg så at estimatene mine lå mellom 0,200 og 0,210. Siden avvikene er små og programmet allerede bruker 6-7 sekunder på å kjøre, så velger jeg å ikke øke antall simuleringer, $N$, for å oppnå bedre nøyaktighet.
 
 **Sannsynligheten for at gjennomsnittskarakteren til de 20 elevene er over 4 er estimert til 0,205 ved hjelp av programmet over.**
