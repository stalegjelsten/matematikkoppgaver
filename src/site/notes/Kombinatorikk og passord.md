---
{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"dg-publish":true,"temaer":["kombinatorikk"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4}],"title":"Kombinatorikk og passord","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Multiplikasjonsprinsipp for passord med ulike siffer; komplementmetode $7^3-4^3-3^3$ for passord med minst én bokstav og ett siffer.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Multiplikasjonsprinsipp $6 \\cdot 9 \\cdot 8$ for bokstav + to ulike siffer."},{"deloppgave":"b","beskrivelse":"Komplementmetode $7^3-4^3-3^3$ for å sikre minst én bokstav og ett siffer."}],"source":null,"todo":null,"dg-permalink":"/kombinatorikk-og-passord/","permalink":"/kombinatorikk-og-passord/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-11-20","modified":"2026-03-25","aliases":[],"temaer":["kombinatorikk"],"fag":["s1"],"eksamen":"h25","del":1,"oppgave":4,"oppgavenummer":[{"fag":"s1","del":1,"oppgave":4}],"title":"Kombinatorikk og passord","status":3,"kategori":2,"vanskegrad":2,"beskrivelse":"Multiplikasjonsprinsipp for passord med ulike siffer; komplementmetode $7^3-4^3-3^3$ for passord med minst én bokstav og ett siffer.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Multiplikasjonsprinsipp $6 \\cdot 9 \\cdot 8$ for bokstav + to ulike siffer."},{"deloppgave":"b","beskrivelse":"Komplementmetode $7^3-4^3-3^3$ for å sikre minst én bokstav og ett siffer."}],"source":null,"todo":null}}
---


# Kombinatorikk og passord

Et passord skal bestå av tre tegn og lages av sifrene 1–9 og bokstavene A–F.  
Det første tegnet skal være en bokstav, og de to neste tegnene skal være to ulike siffer.

>[!oppgave]
>a) Hvor mange ulike passord er det mulig å lage med disse betingelsene?

Et annet passord skal også bestå av tre tegn.

- Hvert tegn skal være et av sifrene 1, 2, 3, 4 eller en av bokstavene A, B, C.
- Både sifrene og bokstavene kan forekomme flere ganger.
- Passordet må inneholde minst én bokstav og minst ett siffer.

>[!oppgave]
>b) Hvor mange ulike passord er det mulig å lage med disse betingelsene?

## Fasit

a) $432$
b) $252$

## Løsningsforslag

### a

- Første tegn: én av bokstavene A–F → $6$ valg
- Andre tegn: ett av sifrene 1–9 → $9$ valg
- Tredje tegn: ett av de **resterende** 8 sifrene → $8$ valg

$$6 \cdot 9 \cdot 8 = \underline{\underline{432}}$$

**Det er mulig å lage $432$ ulike passord.**

### b

Totalt $7$ tegn: $\{1, 2, 3, 4, A, B, C\}$. Uten begrensninger: $7^3 = 343$ passord.

Vi trekker fra de som **ikke** oppfyller kravet om minst én bokstav og minst ett siffer:

- Kun siffer $\{1,2,3,4\}$: $4^3 = 64$ passord
- Kun bokstav $\{A,B,C\}$: $3^3 = 27$ passord

$$343 - 64 - 27 = \underline{\underline{252}}$$

**Det er mulig å lage $252$ ulike passord.**
