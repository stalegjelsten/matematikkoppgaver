---
{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"dg-publish":true,"temaer":["vektorer","geometri","derivasjon"],"kategori":3,"vanskegrad":3,"beskrivelse":"Parametriserte posisjonsvektorer i 3D – fart som $|\\vec r'(t)|$, minimumsdybde via $z'(t) = 0$, og minimumsavstand mellom to baner via $|\\vec r(t) - \\vec s(t)|$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Farten etter $2\\text{ s}$ som $|\\vec r'(2)|$ i CAS."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Minimum dybde via $z'(t) = 0$."},{"deloppgave":"c","beskrivelse":"Minimumsavstand mellom ubåt og fiskestim via $|\\vec r(t) - \\vec s(t)|$ sammenlignet med sum av radier."}],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"title":"Miniubåt, fart og kollisjon med fiskestim","status":3,"source":null,"todo":null,"dg-permalink":"/miniubat-fart-og-kollisjon-med-fiskestim/","permalink":"/miniubat-fart-og-kollisjon-med-fiskestim/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-17","modified":"2026-03-17","aliases":[],"temaer":["vektorer","geometri","derivasjon"],"kategori":3,"vanskegrad":3,"beskrivelse":"Parametriserte posisjonsvektorer i 3D – fart som $|\\vec r'(t)|$, minimumsdybde via $z'(t) = 0$, og minimumsavstand mellom to baner via $|\\vec r(t) - \\vec s(t)|$.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Farten etter $2\\text{ s}$ som $|\\vec r'(2)|$ i CAS."},{"deloppgave":"b","kategori":2,"vanskegrad":2,"beskrivelse":"Minimum dybde via $z'(t) = 0$."},{"deloppgave":"c","beskrivelse":"Minimumsavstand mellom ubåt og fiskestim via $|\\vec r(t) - \\vec s(t)|$ sammenlignet med sum av radier."}],"fag":["r2"],"eksamen":"h25","del":2,"oppgave":1,"oppgavenummer":[{"fag":"r2","del":2,"oppgave":1}],"title":"Miniubåt, fart og kollisjon med fiskestim","status":3,"source":null,"todo":null}}
---


# Miniubåt, fart og kollisjon med fiskestim

En miniubåt passerer 250 meter under en bøye som ligger på havoverflaten.

I et koordinatsystem der $x$-aksen og $y$-aksen ligger parallelt med havoverflaten, $z$-aksen står normalt på havoverflaten, og enheten langs aksene er meter, er posisjonen til miniubåten $t$ sekunder etter passeringen gitt ved

$$\vec{r}(t) = [6t,\ 7t,\ -250 - 5t + {,}1t^2] \quad , \quad t \in [0, 60]$$

>[!oppgave]
>a) Bestem farten til miniubåten etter 2 sekunder.
>b) Hvor langt under havoverflaten er miniubåten på det dypeste?

Posisjonen til en fiskestim i området $t$ sekunder etter at miniubåten passerte under bøyen, er gitt ved

$$\vec{s}(t) = [40+2t,\ 60+2t,\ -250] \quad , \quad t \in [0, 60]$$

Fiskestimen har en tilnærmet kuleform med radius på 15 meter. Miniubåten er 4 meter bred, 5 meter høy og 8 meter lang.

>[!oppgave]
>c) Gjør beregninger og vurder om miniubåten kommer til å kollidere med fiskestimen.

## Fasit

a) $\approx 10{,}3 \, \mathrm{m/s}$
b) $312{,}5 \, \mathrm{m}$ under havoverflaten
c) Minimumsavstand $\approx 39{,}8 \, \mathrm{m}$ — ingen kollisjon

## Løsningsforslag

### a

Vi definerer posisjonsvektoren, deriverer og beregner farten ved $t = 2$ i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-a-CAS.png){width=50%}

**Farten til miniubåten etter 2 sekunder er $\underline{\underline{\approx 10{,}3 \, \mathrm{m/s}}}$.**

### b

Vi definerer $z$-koordinaten, løser $z'(t) = 0$ og evaluerer minimumsposisjonen i GeoGebra CAS:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-b-CAS.png){width=50%}

CAS gir $t = 25$ og $\mathrm{dyp}(25) = -\frac{625}{2} = -312{,}5$.

**Miniubåten er dypest $\underline{\underline{312{,}5 \, \mathrm{m}}}$ under havoverflaten.**

### c

Vi definerer begge posisjonsvektorene, beregner differansevektoren $\vec{d}(t) = \vec{r}(t) - \vec{s}(t)$ og avstandsfunksjonen $A(t) = |\vec{d}(t)|$. Så bruker vi `Min(A, 0, 60)` for å finne minimumsavstanden numerisk:

![GeoGebra CAS](/img/user/_resources/r2-h25-2-1-c-CAS.png){width=50%}

CAS gir minimumsavstand $\approx 39{,}83 \, \mathrm{m}$ ved $t \approx 8{,}39 \, \mathrm{s}$.

For at miniubåten skal kollidere med fiskestimen, må avstanden mellom sentrene være mindre enn fiskestimens radius ($15 \, \mathrm{m}$) pluss halvparten av miniubåtens største tverrsnitt ($\approx 4 \, \mathrm{m}$), altså under $19 \, \mathrm{m}$.

Siden minimumsavstanden $\approx 39{,}8 \, \mathrm{m} \gg 19 \, \mathrm{m}$, vil miniubåten **ikke** kollidere med fiskestimen.
