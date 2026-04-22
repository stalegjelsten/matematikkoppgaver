---
{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"dg-publish":true,"temaer":["lineær vekst","modellering"],"fag":["1p-y el"],"eksamen":"v24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Stine hurtiglader elbil","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Proporsjonale beregninger rundt elbil-lading; tid, batterikapasitet og rekkevidde per time lading.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skalere ladetid proporsjonalt – 21 prosentpoeng vs. 31 prosentpoeng på 22 min."},{"deloppgave":"b","kategori":2,"beskrivelse":"Back-of-the-envelope estimat av total kapasitet fra 18,3 kWh på 31 prosentpoeng."},{"deloppgave":"c","kategori":2,"beskrivelse":"Regne ladeeffekt i kWh/t og dele på forbruk 0,17 kWh/km for km per time lading."}],"dg-permalink":"/stine-hurtiglader-elbil/","lf-source-claude":true,"permalink":"/stine-hurtiglader-elbil/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2026-03-15","modified":"2026-03-15","aliases":[],"temaer":["lineær vekst","modellering"],"fag":["1p-y el"],"eksamen":"v24","del":2,"oppgave":2,"oppgavenummer":[{"fag":"1p-y el","del":2,"oppgave":2}],"title":"Stine hurtiglader elbil","status":3,"source":null,"todo":null,"kategori":2,"vanskegrad":2,"beskrivelse":"Proporsjonale beregninger rundt elbil-lading; tid, batterikapasitet og rekkevidde per time lading.","deloppgaver":[{"deloppgave":"a","kategori":1,"vanskegrad":1,"beskrivelse":"Skalere ladetid proporsjonalt – 21 prosentpoeng vs. 31 prosentpoeng på 22 min."},{"deloppgave":"b","kategori":2,"beskrivelse":"Back-of-the-envelope estimat av total kapasitet fra 18,3 kWh på 31 prosentpoeng."},{"deloppgave":"c","kategori":2,"beskrivelse":"Regne ladeeffekt i kWh/t og dele på forbruk 0,17 kWh/km for km per time lading."}],"lf-source-claude":true}}
---


# Stine hurtiglader elbil

Stine har kjøpt ny elbil. Hun tester bilen med å ta en hurtiglading og noterer følgende data:

|       | Klokkeslett | Ladestatus batteri |     Levert energi      |
| :---: | :---------: | :----------------: | :--------------------: |
| Start |    12:33    |        28 %        |         0 kWh          |
| Slutt |    12:55    |        59 %        | $18{,}3 \mathrm{~kWh}$ |

>[!oppgave]
>Gjør beregninger og vurderinger, og hjelp Stine med å svare på:
>
>a) Hvis hun fortsetter å lade videre, hvor lang tid vil det ta å lade opp batteriet til 80 prosent dersom ladeeffekten er den samme som fra 28 prosent til 59 prosent?
>b) Reklamen sier at batteriet i bilen har en kapasitet på 60 kWh. Kan det stemme?
>c) Bilen bruker $0{,}17 \mathrm{~kWh}$ per kilometer. Hvor mange kilometer kan elbilen kjøre per time hurtiglading dersom ladeeffekten er den samme som da hun testet?

## Fasit

a) Ca. 15 minutter
b) Estimert kapasitet ≈ 59 kWh, som stemmer godt med reklamens 60 kWh.
c) Ca. 294 km per time hurtiglading

## Løsningsforslag

### 2-2a

Stine lader fra 28 % til 59 % = 31 prosentpoeng på 22 minutter (fra 12:33 til 12:55).

Rate:

$$
\frac{22 \, \mathrm{min}}{31 \, \%} \approx 0{,}71 \, \mathrm{min/\%}
$$

Fra 59 % til 80 % gjenstår $80 - 59 = 21$ prosentpoeng:

$$
21 \cdot \frac{22}{31} = \frac{462}{31} \approx 14{,}9 \, \mathrm{min} \approx 15 \, \mathrm{min}
$$

**Det vil ta omtrent $\underline{\underline{15 \, \mathrm{minutter}}}$ å lade fra 59 % til 80 %.**

### 2-2b

31 prosentpoeng tilsvarer 18,3 kWh. Vi beregner full kapasitet:

$$
\frac{18{,}3 \, \mathrm{kWh}}{31} \cdot 100 = \frac{1830}{31} \approx 59{,}0 \, \mathrm{kWh}
$$

**Ut fra målingene er batterikapasiteten omtrent $\underline{\underline{59 \, \mathrm{kWh}}}$**, som er nær reklamens påstand om 60 kWh. Det kan godt stemme – avviket er på under 2 %.

### 2-2c

Ladeeffekten er:

$$
P = \frac{18{,}3 \, \mathrm{kWh}}{\frac{22}{60} \, \mathrm{h}} = \frac{18{,}3 \cdot 60}{22} \approx 49{,}9 \, \mathrm{kWh/t}
$$

Bilen bruker $0{,}17 \, \mathrm{kWh/km}$. Per time lading kan bilen kjøre:

$$
\frac{49{,}9 \, \mathrm{kWh/t}}{0{,}17 \, \mathrm{kWh/km}} \approx 294 \, \mathrm{km}
$$

**Per time hurtiglading kan elbilen kjøre omtrent $\underline{\underline{294 \, \mathrm{km}}}$.**
