---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["programmering","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"title":"Programmering og numerisk integrasjon","status":1,"source":null,"todo":null,"permalink":"/programmering-og-numerisk-integrasjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["programmering","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"title":"Programmering og numerisk integrasjon","status":1,"source":null,"todo":null}}
---


# Programmering og numerisk integrasjon

Funksjonen $f$ er gitt ved

$$f(x) = 3^{2x}$$

Programmet nedenfor beregner arealet avgrenset av grafen til $f$, $x$-aksen og linjene $x = 0$ og $x = 2$ ved hjelp av to ulike metoder.


```python ln
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3**(2*x)

def areal_til_hoyre():
    areal = 0
    for i in range(n):
        x = start + i*dx
        areal = areal + f(x)*dx
    return areal

def areal_til_venstre():
    areal = 0
    for i in range(1, n+1):
        x = start + i*dx
        areal = areal + f(x)*dx
    return areal

print(areal_til_hoyre())
print(areal_til_venstre())
```

>[!oppgave]
>a) Forklar hvorfor den ene metoden vil gi en litt for høy verdi for arealet, og den andre metoden en litt for lav verdi.

>[!oppgave]
>b) Lag et program som beregner arealet mer nøyaktig uten å dele det opp i flere deler. Ta utgangspunkt i koden nedenfor, og skriv ferdig funksjonen «bedre\_metode()». Hvis du programmerer i et annet programmeringsspråk enn Python, må du først skrive en kode som samsvarer med koden nedenfor i språket du bruker.
>
>Husk å legge ved skjermbilde av programmet du lager, og resultatet du får når du kjører programmet.

```python ln
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3** (2*x)

def bedre_metode():
    areal = 0
    
    #Skriv ny kode her
    
    return areal
    
print(bedre_metode())
```

>[!question]- Fasit
>
> a) `areal_til_hoyre` bruker venstre endepunkter (for lav), `areal_til_venstre` bruker høyre endepunkter (for høy)
> b) Trapesmetode: `(f(x) + f(x+dx)) / 2 * dx`
> [[Løsningsforslag/Løsningsforslag R2 eksamen H2025#2-4\|Løsningsforslag R2 eksamen H2025#2-4]]
