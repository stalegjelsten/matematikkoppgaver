---
{"alias":null,"aliases":[null],"date":"2023-11-15","del":1,"dg-permalink":"/vektorer-til-a-bestemme-sidekanter-og-vinkler-i-trekant/","dg-publish":true,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":3,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":3}],"tags":["oppgave"],"temaer":["vektorer"],"title":"Vektorer til å bestemme sidekanter og vinkler i trekant","permalink":"/vektorer-til-a-bestemme-sidekanter-og-vinkler-i-trekant/","dgPassFrontmatter":true,"dg-note-properties":{"alias":null,"aliases":[null],"date":"2023-11-15","del":1,"eksamen":"h23","fag":["r1"],"lf-source-claude":true,"modified":"2023-11-15","oppgave":3,"oppgavenummer":[{"del":1,"fag":"r1","oppgave":3}],"tags":["oppgave"],"temaer":["vektorer"],"title":"Vektorer til å bestemme sidekanter og vinkler i trekant"}}
---


# Vektorer til å bestemme sidekanter og vinkler i trekant


I trekanten $ABC$ er $A(3, 1)$, $B(2, -2)$ og $C(5, 2)$.

>[!oppgave]
> a) Avgjør ved hjelp av vektorregning hvilken side av trekanten som er kortest.
> b) Avgjør ved hjelp av vektorregning om noen av vinklene er $90\degree$.

## Fasit

a) $AC$ er kortest ($|AC| = \sqrt{5} \approx 2{,}24$)
b) Nei, ingen av vinklene er $90\degree$.

## Løsningsforslag

### a

Vi finner lengden til alle tre sidene ved å beregne de tre sidevektorene.

$$\vec{AB} = B - A = (2-3, \; -2-1) = (-1, -3)$$

$$|\vec{AB}| = \sqrt{(-1)^2 + (-3)^2} = \sqrt{1+9} = \sqrt{10} \approx 3{,}16$$

$$\vec{AC} = C - A = (5-3, \; 2-1) = (2, 1)$$

$$|\vec{AC}| = \sqrt{2^2 + 1^2} = \sqrt{4+1} = \sqrt{5} \approx 2{,}24$$

$$\vec{BC} = C - B = (5-2, \; 2-(-2)) = (3, 4)$$

$$|\vec{BC}| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5$$

Vi sammenligner: $\sqrt{5} < \sqrt{10} < 5$, det vil si $|AC| < |AB| < |BC|$.

**$AC$ er den korteste siden med lengde $\underline{\underline{\sqrt{5} \approx 2{,}24}}$.**

### b

En vinkel i trekanten er $90\degree$ hvis og bare hvis de to sidevektorene ut fra det hjørnet er ortogonale, det vil si at prikkproduktet er null.

**Vinkel i $A$** — vektorene $\vec{AB}$ og $\vec{AC}$:

$$\vec{AB} \cdot \vec{AC} = (-1) \cdot 2 + (-3) \cdot 1 = -2 - 3 = -5 \neq 0$$

Ikke $90\degree$ i $A$.

**Vinkel i $B$** — vektorene $\vec{BA} = -\vec{AB} = (1, 3)$ og $\vec{BC} = (3, 4)$:

$$\vec{BA} \cdot \vec{BC} = 1 \cdot 3 + 3 \cdot 4 = 3 + 12 = 15 \neq 0$$

Ikke $90\degree$ i $B$.

**Vinkel i $C$** — vektorene $\vec{CA} = -\vec{AC} = (-2, -1)$ og $\vec{CB} = -\vec{BC} = (-3, -4)$:

$$\vec{CA} \cdot \vec{CB} = (-2) \cdot (-3) + (-1) \cdot (-4) = 6 + 4 = 10 \neq 0$$

Ikke $90\degree$ i $C$.

Siden intet prikkprodukt er null, er **ingen av vinklene $\underline{\underline{90\degree}}$**.