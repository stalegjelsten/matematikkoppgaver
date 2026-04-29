---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["programmering","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":4,"poeng":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"title":"Programmering og numerisk integrasjon","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Tolke venstre-/høyre-Riemann-summer for $3^{2x}$ og skrive en trapesmetode som bedre estimat.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Forklare hvorfor venstre endepunkt gir for lavt og høyre endepunkt for høyt areal når funksjonen er stigende."},{"deloppgave":"b","beskrivelse":"Skrive en trapesmetode $(f(x)+f(x+\\Delta x))/2 \\cdot \\Delta x$ som bedre estimat enn Riemann-summene."}],"dg-permalink":"/programmering-og-numerisk-integrasjon/","permalink":"/programmering-og-numerisk-integrasjon/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["programmering","integral"],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":4,"poeng":4,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":4}],"title":"Programmering og numerisk integrasjon","status":3,"source":null,"todo":null,"kategori":3,"vanskegrad":3,"beskrivelse":"Tolke venstre-/høyre-Riemann-summer for $3^{2x}$ og skrive en trapesmetode som bedre estimat.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":2,"beskrivelse":"Forklare hvorfor venstre endepunkt gir for lavt og høyre endepunkt for høyt areal når funksjonen er stigende."},{"deloppgave":"b","beskrivelse":"Skrive en trapesmetode $(f(x)+f(x+\\Delta x))/2 \\cdot \\Delta x$ som bedre estimat enn Riemann-summene."}]}}
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

## Fasit

a) `areal_til_hoyre` bruker venstre endepunkter (for lav), `areal_til_venstre` bruker høyre endepunkter (for høy)
b) Trapesmetode: `(f(x) + f(x+dx)) / 2 * dx`

## Løsningsforslag

### a

Funksjonen $f(x) = 3^{2x} = 9^x$ er strengt stigende på $[0, 2]$.

For en stigende funksjon gjelder:

- **`areal_til_hoyre()`** bruker venstre endepunkt ($x = 0, \Delta x, 2\Delta x, \ldots$) i hvert delintervall. Venstre endepunkt gir den minste funksjonsverdien → summerer **for lav** verdi.
- **`areal_til_venstre()`** bruker høyre endepunkt ($x = \Delta x, 2\Delta x, \ldots, 2$). Høyre endepunkt gir den største funksjonsverdien → summerer **for høy** verdi.

Det faktiske arealet (nøyaktig) er $\displaystyle\int_0^2 9^x \, \mathrm{d}x = \frac{9^2-1}{\ln 9} \approx 36{,}4$.

### b

En bedre metode er **trapesmetoden**: vi bruker gjennomsnittet av funksjonsverdiene i begge endepunktene av hvert delintervall.

```python
start = 0
slutt = 2
n = 100

dx = (slutt-start)/n

def f(x):
    return 3**(2*x)

def bedre_metode():
    areal = 0
    for i in range(n):
        x = start + i*dx
        areal = areal + (f(x) + f(x + dx)) / 2 * dx
    return areal

print(bedre_metode())
```

Trapesmetoden gir $\approx 36{,}415$, som er svært nær den eksakte verdien $\approx 36{,}410$.
