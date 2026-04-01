---
{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["geometri","trigonometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"title":"Areal av firkant med trigonometri","status":1,"source":null,"todo":null,"poeng":5,"permalink":"/areal-av-firkant-med-trigonometri/","lf-source-claude":true,"dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-28","modified":"2026-03-15","aliases":[],"temaer":["geometri","trigonometri"],"fag":["1t"],"eksamen":"h25","del":2,"oppgave":3,"oppgavenummer":[{"fag":"1t","del":2,"oppgave":3}],"title":"Areal av firkant med trigonometri","status":1,"source":null,"todo":null,"poeng":5,"permalink":"/areal-av-firkant-med-trigonometri/","lf-source-claude":true}}
---


# Areal av firkant med trigonometri

![Figur med firkant ABCD](/img/user/_resources/1t-h25-2-3.jpeg)

Gitt figuren ovenfor.

>[!oppgave]
>a) Gjør beregninger og vis at $AC = 3$.
>
>b) Bestem arealet av firkanten $ABCD$. Gi svaret eksakt.

## Fasit

a) Vis ved beregning
b) $\dfrac{9 + 6\sqrt{3}}{4}$

## Løsningsforslag

### a

I trekant $ADC$: $\angle D = 120\degree$, $\angle DCA = 30\degree$, $DC = \sqrt{3}$.

$\angle DAC = 180\degree - 120\degree - 30\degree = 30\degree$

Sinussetningen: $\dfrac{AC}{\sin 120\degree} = \dfrac{\sqrt{3}}{\sin 30\degree} \implies AC = \dfrac{\sqrt{3} \cdot \frac{\sqrt{3}}{2}}{\frac{1}{2}} = 3 \qquad \square$

### b

**Areal av $ADC$:** Siden $\angle DAC = \angle DCA = 30\degree$ er $AD = DC = \sqrt{3}$.

$$T_{ADC} = \frac{1}{2} \cdot \sqrt{3} \cdot \sqrt{3} \cdot \sin 120\degree = \frac{3\sqrt{3}}{4}$$

**Areal av $ABC$:** $BC = \sqrt{6}$, $AC = 3$, $\angle BAC = 45\degree$.

$$\sin(\angle ABC) = \frac{AC \cdot \sin 45\degree}{BC} = \frac{3 \cdot \frac{1}{\sqrt{2}}}{\sqrt{6}} = \frac{\sqrt{3}}{2} \implies \angle ABC = 60\degree$$

$\angle ACB = 180\degree - 45\degree - 60\degree = 75\degree$

$$T_{ABC} = \frac{1}{2} \cdot \sqrt{6} \cdot 3 \cdot \sin 75\degree = \frac{3\sqrt{6}}{2} \cdot \frac{\sqrt{3}+1}{2\sqrt{2}} = \frac{9 + 3\sqrt{3}}{4}$$

**Totalt:**

$$T_{ABCD} = \frac{3\sqrt{3}}{4} + \frac{9 + 3\sqrt{3}}{4} = \underline{\underline{\frac{9 + 6\sqrt{3}}{4}}}$$
