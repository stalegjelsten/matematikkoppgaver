---
{"tags":["oppgave"],"date":"2023-11-28","modified":"2026-03-26","aliases":[],"dg-publish":true,"temaer":["lån","økonomi","rekursiv sammenheng"],"fag":["2p"],"eksamen":"h23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":null,"title":"Boliglån månedlige terminer","status":1,"source":null,"todo":null,"dg-permalink":"/boliglan-manedlige-terminer/","lf-source-claude":true,"permalink":"/boliglan-manedlige-terminer/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2023-11-28","modified":"2026-03-26","aliases":[],"temaer":["lån","økonomi","rekursiv sammenheng"],"fag":["2p"],"eksamen":"h23","del":2,"oppgave":4,"oppgavenummer":[{"fag":"2p","del":2,"oppgave":4}],"poeng":null,"title":"Boliglån månedlige terminer","status":1,"source":null,"todo":null,"lf-source-claude":true}}
---


# Boliglån månedlige terminer

Adam har tatt opp et lån på 2 500 000 kroner for å kjøpe bolig.

Han skal betale tilbake lånet i månedlige terminer. Renten er 0,33 % per måned. I tillegg må han betale et gebyr på 50 kroner per termin. Terminbeløpet skal være 13 385 kroner.

>[!oppgave]
>Lag en oversikt som viser hvor stort lånet hans vil være måned for måned de to første årene.

## Fasit

Se tabell. Lånet er $\approx 2\,373\,215 \, \mathrm{kr}$ etter 24 måneder.

## Løsningsforslag

Hver måned beregner vi:

- **Renter** = restlån $\cdot$ 0,0033
- **Avdrag** = terminbeløp $-$ gebyr $-$ renter = $13\,385 - 50 -$ renter
- **Nytt restlån** = gammelt restlån $-$ avdrag

Vi setter dette opp i et regneark:

| Mnd | Lån (start) | Renter | Avdrag | Lån (slutt) |
| :---: | ---: | ---: | ---: | ---: |
| 1 | $2\,500\,000$ | $8\,250$ | $5\,085$ | $2\,494\,915$ |
| 2 | $2\,494\,915$ | $8\,233$ | $5\,102$ | $2\,489\,813$ |
| 3 | $2\,489\,813$ | $8\,216$ | $5\,119$ | $2\,484\,695$ |
| 4 | $2\,484\,695$ | $8\,199$ | $5\,136$ | $2\,479\,559$ |
| 5 | $2\,479\,559$ | $8\,183$ | $5\,152$ | $2\,474\,407$ |
| 6 | $2\,474\,407$ | $8\,166$ | $5\,169$ | $2\,469\,237$ |
| 7 | $2\,469\,237$ | $8\,148$ | $5\,187$ | $2\,464\,051$ |
| 8 | $2\,464\,051$ | $8\,131$ | $5\,204$ | $2\,458\,847$ |
| 9 | $2\,458\,847$ | $8\,114$ | $5\,221$ | $2\,453\,626$ |
| 10 | $2\,453\,626$ | $8\,097$ | $5\,238$ | $2\,448\,388$ |
| 11 | $2\,448\,388$ | $8\,080$ | $5\,255$ | $2\,443\,133$ |
| 12 | $2\,443\,133$ | $8\,062$ | $5\,273$ | $2\,437\,860$ |
| 13 | $2\,437\,860$ | $8\,045$ | $5\,290$ | $2\,432\,570$ |
| 14 | $2\,432\,570$ | $8\,027$ | $5\,308$ | $2\,427\,263$ |
| 15 | $2\,427\,263$ | $8\,010$ | $5\,325$ | $2\,421\,938$ |
| 16 | $2\,421\,938$ | $7\,992$ | $5\,343$ | $2\,416\,595$ |
| 17 | $2\,416\,595$ | $7\,975$ | $5\,360$ | $2\,411\,235$ |
| 18 | $2\,411\,235$ | $7\,957$ | $5\,378$ | $2\,405\,857$ |
| 19 | $2\,405\,857$ | $7\,939$ | $5\,396$ | $2\,400\,461$ |
| 20 | $2\,400\,461$ | $7\,922$ | $5\,413$ | $2\,395\,048$ |
| 21 | $2\,395\,048$ | $7\,904$ | $5\,431$ | $2\,389\,616$ |
| 22 | $2\,389\,616$ | $7\,886$ | $5\,449$ | $2\,384\,167$ |
| 23 | $2\,384\,167$ | $7\,868$ | $5\,467$ | $2\,378\,700$ |
| 24 | $2\,378\,700$ | $7\,850$ | $5\,485$ | $2\,373\,215$ |

Vi ser at avdragene øker litt for hver måned (fordi rentene minker), og **etter to år er restlånet $\underline{\underline{\approx 2\,373\,215 \, \mathrm{kr}}}$.**
