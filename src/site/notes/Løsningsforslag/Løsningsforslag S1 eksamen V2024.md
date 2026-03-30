---
{"temaer":null,"del":null,"oppgave":null,"aliases":[],"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":-3,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"dg-publish":true,"title":"Løsningsforslag S1 eksamen V2024","author":"Ståle Gjelsten","date":"2024-12-04","modified":"2024-12-04","fag":null,"eksamen":null,"permalink":"/losningsforslag/losningsforslag-s1-eksamen-v2024/","dgPassFrontmatter":true,"dg-note-properties":{"temaer":null,"del":null,"oppgave":null,"aliases":[],"documentclass":"scrartcl","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}","\\usepackage[DIVS=18]{typearea}"],"toc":false,"highlight-style":"tango","numbersections":false,"shift-heading-level-by":-3,"pandoc-latex-environment":{"warning":["warning"],"danger":["danger"],"note":["note"],"tip":["tip"],"important":["important"],"info":["info"],"error":["error"],"fasit":["fasit"]},"tags":["løsningsforslag"],"title":"Løsningsforslag S1 eksamen V2024","author":"Ståle Gjelsten","date":"2024-12-04","modified":"2024-12-04","fag":null,"eksamen":null}}
---


# Løsningsforslag S1 eksamen V2024
## Oppgave 2-3


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/kombinatorikk-for-passord/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Kombinatorikk for passord

En skole har regler for å lage passord.

**Regelsett 1**

- Passordet må ha nøyaktig 6 tegn.
- Det er bare lov å bruke store og små bokstaver.
- Det må være minst én stor bokstav i passordet.
- Det må være minst én liten bokstav i passordet.

>[!oppgave]
>a) Hvor mange forskjellige passord er det mulig å lage ved å følge regelsett 1?

Skolen vil øke sikkerheten og legger til flere krav for å lage passord. De lager et nytt sett med regler.

**Regelsett 2**

- Passordet må ha nøyaktig 6 tegn.
- Det må være nøyaktig to store bokstaver i passordet.
- Det må være nøyaktig to små bokstaver i passordet.
- Det må være nøyaktig to sifre i passordet.

>[!oppgave]
>b) Gjør nødvendige beregninger for å vurdere effekten på sikkerheten av regelsett 2.

## Fasit


## Løsningsforslag

- Passordet må ha 6 tegn
- Kun store og små bokstaver
- Minst 1 stor bokstav
- Minst 1 liten bokstav

### 2-3a
Det er 29 små bokstaver og 29 store bokstaver, dette gir i utgangspunktet 58 ulike muligheter for hver av de 6 tegnene i passordet. Dersom vi ikke hadde hatt kravene om minst 1 liten og stor bokstav ville antallet kombinasjoner derfor ha vært $58^{6}$. 

Siden vi må minst ha 1 liten bokstav så kan vi ta bort de kombinasjonene som bare bruker store bokstaver ($29^6$) og de som bare bruker små bokstaver ($29^6$). Til sammen har vi da

$
58^6-29^6-29^6=58^6-2 \cdot 29^6=36 \, 879 \, 045 \, 902
$

**Det er 36,9 milliarder ulike passordet ifølge dette regelsettet.**

### 2-3b
Det finnes fremdeles 29 ulike store bokstaver, 29 ulike små bokstaver og det finnes 10 ulike siffer.

Hvis rekkefølgen ikke hadde spilt noen rolle ville vi fått $29^{2}\cdot 29^{2} \cdot 10^{2}=70\, 728\, 100$ kombinasjoner.

Rekkefølgen på de ulike tegnene spiller en rolle, siden vi har 6 tegn («ledige plasser») og skal plassere 3 $\times$ 2 ulike typer tegn så kan vi finne antallet permutasjoner med

$
\frac{6!}{2!\cdot 2! \cdot 2!}=\frac{720}{8}=90
$

Det finnes altså $70\, 728\, 100 \cdot 90=6\, 365\, 529\, 000$ ulike passord.

Det finnes omtrent 6 ganger så mange mulige passord med regelsett 1 som med regelsett 2. **Regelsett 2 vil derfor sannsynligvis gjøre sikkerheten en god del dårligere enn regelsett 1.**

>[!tip] Om passordsikkerheten ved bruk av disse reglene
>
> Selv om regelsett 1 er sikrere enn regelsett 2 betyr ikke det at det er et godt regelsett. Begge disse regelsettene vil være svært vanskelig å knekke ved manuell prøving og feiling, og svært enkle å knekke med «brute force»-metoder. Hvis en hacker hadde kjent til reglene på regelsett 1 ville hen nok først ha forsøkt alle passord som starter med 1 stor bokstav etterfulgt av 5 små bokstaver, det gir kun $29^6=94\,823\,321$ ulike passord.

>[!tip] Alternativ måte å finne antallet permutasjoner
>
>Vi kan bruke binomialkoeffisienter til å bestemme antallet permutasjoner. 
>
>- Vi vet at de to store bokstavene kan velge mellom 6 ulike ledige plasser.
>- Vi vet at de to små bokstavene kan velge mellom de 4 gjenværende ledige plassene
>- Sifrene må ta de siste to plassene
>
>$\text{Antall permutasjoner}=\binom{6}{2}\binom{4}{2}\binom{2}{2}=15 \cdot 6 \cdot 1=90$


</div></div>

