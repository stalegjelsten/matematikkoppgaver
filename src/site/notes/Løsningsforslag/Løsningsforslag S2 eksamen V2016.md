---
{"temaer":null,"del":null,"oppgave":null,"fag":"s2","eksamen":"v16","tags":["matematikk","løsningsforslag","S2"],"alias":[null],"dg-publish":true,"title":"Løsningsforslag S2 eksamen V2016","date":"2023-09-19","modified":"2023-09-19","geometry":"margin=3cm","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}"],"permalink":"/losningsforslag/losningsforslag-s2-eksamen-v2016/","dgPassFrontmatter":true,"dg-note-properties":{"temaer":null,"del":null,"oppgave":null,"fag":"s2","eksamen":"v16","tags":["matematikk","løsningsforslag","S2"],"alias":[null],"title":"Løsningsforslag S2 eksamen V2016","date":"2023-09-19","modified":"2023-09-19","geometry":"margin=3cm","fontsize":"11pt","papersize":"a4","linestretch":1.25,"lang":"nb-NO","header-includes":["\\usepackage{mathtools,cancel,tgpagella,mathpazo,icomma,siunitx}","\\sisetup{output-decimal-marker = {,}}"]}}
---


# Løsningsforslag S2 eksamen V2016

## Oppgave 2-4


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/ole-magnus-sin-sparekonto/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





# Ole Magnus sin sparekonto

Da Ole Magnus ble født, ønsket foreldrene å åpne en sparekonto for ham med en fast årlig rente på 2,5 %. De ønsket at det skulle være 100 000 kroner på kontoen når han fylte 18 år.  

a) Hvor stort engangsbeløp måtte foreldrene sette inn på kontoen dersom det skulle vokse til 100 000 kroner i løpet av de 18 årene?

Foreldrene vurderte i stedet å sette inn 18 like store årlige beløp, første gang da Ole Magnus ble født.  

b) Bruk CAS til å bestemme hvor stort dette årlige beløpet måtte være.  

Foreldrene vurderte også en spareplan med 18 årlige innskudd, der beløpet som ble satt inn, økte med 2,0 % hvert år.  

c) Bruk CAS til å bestemme hvor stort det første beløpet måtte være.

>[!tip] Bruk Excel (selv om oppgaven spør etter CAS)
>Etter at læreplan LK20 ble innført for S2 i 2022 så får du som oftest lov til å velge framgangsmåte selv. b) og c) i denne oppgaven passer fint til å løses i Excel også.

## Fasit

a) 64117 kr
b) 4358,06 kr
c) 3712,01 kr

## Løsningsforslag

### 2-4a
For å finne ut hvor stort engangsbeløp foreldrene må betale så kan jeg sette opp en likning. Jeg lar $x$ kr være engangsbeløpet, vekstfaktoren til 2,5 % rente er 1,025 og vi skal la pengene stå på konto i 18 år.

$
\begin{aligned}
x\cdot 1{,}025^{18} &=100\,000 \\
x&= \frac{100\,000}{1{,}025^{18}}=64\,116{,}16\\
\end{aligned}
$

**Foreldrene må sette inn 64 116,16 kr for når Ole Magnus blir født, for at beløpet skal være 100 000 kr når han blir 18 år med 2,5 % årlig rente.**

### 2-4b

#### Løsning med CAS
Jeg tenker på dette som en rekke med 18 ledd (18 innbetalinger). Den første innbetalingen skjer når Ole Magnus er 0 år. Hvis vi lar $x$ kr være det årlige beløpet så vil den første innbetalingen ha forrentet seg til

$
x\cdot 1{,}025^{18}
$

etter 18 år. Den siste innbetalingen (som ble gjort da Ole Magnus fylte 17 år) vil ha forrentet seg til

$
x\cdot 1{,}025^{1}
$

Vi kan altså se på dette som en endelig geometrisk rekke med første ledd $a_{1}=x\cdot 1{,}025^{1}$ og $k=1{,}025$.

Jeg bruker `Sum`-funksjonen i <abbr>CAS</abbr> og skriver inn `Sum(x*1.025^(i),i,1,18)=100000`. CAS gir svaret $x=4358{,}06$.

**Foreldrene må sette inn 4358,06 kr hvert år dersom Ole Magnus skal ha 100 000 kr på kontoen når han fyller 18 år med 2,5 % årlig rente.**

>[!tip] Løsning med sumformel
>Oppgaveteksten ber oss løse oppgaven med <abbr>CAS</abbr>. Jeg tolker dette som at jeg skal bruke `Sum`-funksjonen i <abbr>CAS</abbr>, men det er også mulig å bruke sumformel for geometrisk rekke og sette opp likningen 
>
>$
>x \cdot 1.025 \cdot \frac{1.025^{18} - 1}{1.025 - 1} = 100000
>$

#### Løsning med Excel
For å løse denne oppgaven i Excel satte jeg opp et regneark med 18 innbetalinger. Jeg tok også med en rad for det året Ole Magnus fylte 18 år, men dette året var uten innbetaling. 

For hvert år regnet jeg ut ny saldo med renter ved å multiplisere forrige års saldo med vekstfaktoren. I tillegg lag jeg til årets innskudd. Se formlene jeg har brukt i *G6* og nedover.

For å finne riktig årlig beløp brukte jeg *Målsøking*-funksjonen, og ba Excel finne ut hva celle *C5* måtte endres til slik at celle *G23* ble 100 000 kr.

![s2-v16-2-4.png](/img/user/_resources/s2-v16-2-4.png)

### 2-4c

#### Løsning i CAS
Jeg lar $x$ kr være det første beløpet som settes inn. Jeg ser at det vil forrentes til $x\cdot 1{,}025^{18}$. Det andre beløpet vil kun få 17 år med renter, men det vil samtidig være 2 % større enn det første beløpet. Jeg kan skrive det andre og tredje beløpet som

$
\begin{aligned}
x\cdot 1{,}025^{17}\cdot 1{,}02^{1}\\
x\cdot 1{,}025^{16}\cdot 1{,}02^{2}\\
\end{aligned}
$

Når jeg legger sammen leddene får jeg en rekke. Jeg finner ut hva $x$ må være ved å sette rekka lik 100 000 i CAS med kommandoen `Sum(x*1.02^(i-1)*1.025^(19-i),i,1,18)=100000` og trykker på <kbd>x≈</kbd>. Det er det samme som å løse likningen

$
\sum_{i=1}^{18}x \cdot 1.02^{i - 1} \cdot 1.025^{19 - i} = 100000
$

CAS gir meg svaret $x=3712{,}01$

**Ved å sette inn 3712,01 kr når Ole Magnus blir født, vil han motta 100 000 kr når han blir 18 år gammel, dersom innskuddsbeløpet økes med 2 % per termin og renta er 2,5 %.**

#### Løsning med Excel
Se utklippet over. Jeg endret på formelen for innskuddsbeløpet fra oppgave b, slik at innskuddsbeløpet alltid er 1,02 ganger større enn fjorårets innskudd. I *J8* står det for eksempel `=J7*(1+$C$7)`. 

For å finne riktig årlig beløp brukte jeg *Målsøking*-funksjonen, og ba Excel finne ut hva celle *C6* måtte endres til slik at celle *K23* ble 100 000 kr.


</div></div>

