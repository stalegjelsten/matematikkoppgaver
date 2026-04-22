---
{"tags":["oppgave","uendelig rekke","rekker","del1","s2"],"temaer":["uendelig rekke","rekker","geometrisk rekke"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Uendelig rekke med virkestoff fra legemiddel","date":"2023-05-27","modified":"2023-05-29","dg-permalink":"/uendelig-rekke-med-virkestoff-fra-legemiddel/","status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Modellere daglig legemiddeldose som uendelig geometrisk rekke med $k=0{,}9$; grenseverdi $s=70$ mg.","permalink":"/uendelig-rekke-med-virkestoff-fra-legemiddel/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave","uendelig rekke","rekker","del1","s2"],"temaer":["uendelig rekke","rekker","geometrisk rekke"],"alias":[null],"del":1,"oppgave":4,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":4}],"fag":"s2","eksamen":"v23","title":"Uendelig rekke med virkestoff fra legemiddel","date":"2023-05-27","modified":"2023-05-29","status":3,"kategori":2,"vanskegrad":1,"beskrivelse":"Modellere daglig legemiddeldose som uendelig geometrisk rekke med $k=0{,}9$; grenseverdi $s=70$ mg."}}
---


# Uendelig rekke med virkestoff fra legemiddel

Knut må hver dag ta en tablett som inneholder $7 \,\mathrm{mg}$ av et virkestoff. I kroppen brytes 10 prosent av dette virkestoffet ned hvert døgn. Knut har lest at det kan være skadelig å ha mer enn $100 \,\mathrm{mg}$ av virkestoffet i kroppen. Legen beroliger Knut med at dette ikke vil skje med den dosen Knut tar.

Avgjør om det legen sier, stemmer.

## Fasit

Legen har rett. Vil aldri overstige 70 mg.

## Løsningsforslag

Den første dagen får Knut tilført 7 mg virkestoff, andre dag så er mengden virkestoff redusert til $7 \,\text{mg}\cdot 0.9 = 6.3 \,\text{mg}$, samtidig som han får tilført nye $7$ mg. 

På dag $n$ så vil derfor Knut ha den samlede mengden:

$$\sum_{i=0}^n 7\cdot 0{,}9^i$$

Dette er en geometrisk rekke som konvergerer når $n\to \infty$, siden $-1<k<1$. Derfor kan vi finne summen av rekka med:

$$s_n = \frac{a_1}{1-k}=\frac{7}{1-0,9}=70$$

Mengden virkestoff hos Knut vil aldri overstige 70 mg. **Legens påstand er riktig**.
