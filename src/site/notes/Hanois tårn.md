---
{"tags":["oppgave"],"date":"2023-05-24","modified":"2026-04-22","aliases":[],"dg-publish":true,"temaer":["rekursiv formel","rekursiv sammenheng","utforskning","mønstre"],"fag":["s2"],"eksamen":"e22","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"poeng":null,"title":"Hanois tårn","status":1,"kategori":3,"vanskegrad":2,"beskrivelse":"Utforske Hanois tårn; etablere $F(n)=2F(n-1)+1$ rekursivt og finne eksplisitt formel $F(n)=2^n-1$.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":1,"beskrivelse":"Utforske $F(3)$ ved å telle minste antall flytninger."},{"deloppgave":"c","vanskegrad":3,"beskrivelse":"Gjette/utlede eksplisitt formel $F(n)=2^n-1$ fra rekursjonen eller tabell."}],"source":null,"todo":["fasit","løsningsforslag"],"dg-permalink":"/hanois-tarn/","permalink":"/hanois-tarn/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-05-24","modified":"2026-04-22","aliases":[],"temaer":["rekursiv formel","rekursiv sammenheng","utforskning","mønstre"],"fag":["s2"],"eksamen":"e22","del":2,"oppgave":5,"oppgavenummer":[{"fag":"s2","del":2,"oppgave":5}],"poeng":null,"title":"Hanois tårn","status":1,"kategori":3,"vanskegrad":2,"beskrivelse":"Utforske Hanois tårn; etablere $F(n)=2F(n-1)+1$ rekursivt og finne eksplisitt formel $F(n)=2^n-1$.","deloppgaver":[{"deloppgave":"a","kategori":2,"vanskegrad":1,"beskrivelse":"Utforske $F(3)$ ved å telle minste antall flytninger."},{"deloppgave":"c","vanskegrad":3,"beskrivelse":"Gjette/utlede eksplisitt formel $F(n)=2^n-1$ fra rekursjonen eller tabell."}],"source":null,"todo":["fasit","løsningsforslag"]}}
---


# Hanois tårn

Spillet «Hanois tårn» består av tre pinner og en mengde disker med ulik radius som skal tres på pinnene.

Når spillet starter, skal alle diskene være plassert på samme pinne. Ingen av diskene skal ha en større disk liggende oppå seg.

Målet er å flytte alle diskene over på én av de to ledige pinnene. Det er bare lov å flytte én disk av gangen. Diskene som ikke flyttes, må ligge på en pinne. Det er aldri lov å plassere en større disk oppå en mindre disk.

Det minste antallet forflytninger du må gjøre for å flytte $n$ disker kaller vi $F(n)$.

>[!oppgave]
>a) Bestem $F(3)$.

![Hanois tårn: tre disker skal flyttes fra venstre til høyre pinne](/img/user/_resources/s2-e22-2-5-1.jpeg){width=80%}

Det er en rekursiv sammenheng mellom $F(n)$ og $F(n-1)$.

>[!oppgave]
>b) Bestem den rekursive sammenhengen. Bruk denne til å bestemme $F(10)$.

![Hanois tårn med ti disker på venstre pinne](/img/user/_resources/s2-e22-2-5-2.jpeg){width=60%}

Det finnes også en eksplisitt formel for $F$.

>[!oppgave]
>c) Undersøk og finn denne formelen.

## Fasit



## Løsningsforslag

