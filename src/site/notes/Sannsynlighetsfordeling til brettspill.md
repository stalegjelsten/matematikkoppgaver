---
{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"dg-publish":true,"temaer":["diskrete sannsynlighetsfordelinger","varians","forventningsverdi"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Sannsynlighetsfordeling til brettspill","source":null,"todo":null,"status":3,"permalink":"/sannsynlighetsfordeling-til-brettspill/","dgPassFrontmatter":true,"dg-note-properties":{"tags":["oppgave"],"date":"2025-05-15","modified":"2025-05-15","aliases":null,"temaer":["diskrete sannsynlighetsfordelinger","varians","forventningsverdi"],"fag":["s2"],"eksamen":"v25","del":1,"oppgave":3,"oppgavenummer":[{"fag":"s2","del":1,"oppgave":3}],"title":"Sannsynlighetsfordeling til brettspill","source":null,"todo":null,"status":3,"permalink":"/sannsynlighetsfordeling-til-brettspill/"}}
---


# Sannsynlighetsfordeling til brettspill


Til et brettspill hører det med en spesiell terning med 6 sider. Det er en side med en ener, en side med en toer, en side med en treer og tre sider med seksere. Vi kaster terningen én gang. La $X$ være antall øyne terningen viser.

Table: {.tall}

|   $k$    |       1       |  2  |  3  |  6  |
| :------: | :-----------: | :-: | :-: | :-: |
| $P(X=k)$ | $\frac{1}{6}$ |     |     |     |

>[!oppgave]
>a) Skriv av og fyll ut tabellen. Vis at $E(X)=4$.
>b) Bestem $\text{Var}(X)$.

## Fasit

a) –
b) 13/3

## Løsningsforslag

### 1-3a

Table: {inset=0.7em}

|            $k$            |                  $\textcolor{orange}{1}$                  |                 $\textcolor{seagreen}{2}$                  |                 $\textcolor{steelblue}{3}$                  |                  $\textcolor{tomato}{6}$                  |             Sum             |
| :-------: | :----: | :----: | :----: | :----: | :----: |
|         $P(X=k)$          |             $\textcolor{orange}{\frac{1}{6}}$             |            $\textcolor{seagreen}{\frac{1}{6}}$             |            $\textcolor{steelblue}{\frac{1}{6}}$             |       $\textcolor{tomato}{\frac{3}{6}=\frac{1}{2}}$       |             $1$             |
|     $k \cdot P(X=k)$      |             $\textcolor{orange}{\frac{1}{6}}$             |            $\textcolor{seagreen}{\frac{2}{6}}$             |            $\textcolor{steelblue}{\frac{3}{6}}$             |            $\textcolor{tomato}{\frac{18}{6}}$             |      $\frac{24}{6}=4$       |
| $(k-\mu)^{2}\cdot P(X=k)$ | $\textcolor{orange}{3^{2} \cdot \frac{1}{6}=\frac{9}{6}}$ | $\textcolor{seagreen}{2^{2}\cdot \frac{1}{6}=\frac{4}{6}}$ | $\textcolor{steelblue}{1^{2}\cdot \frac{1}{6}=\frac{1}{6}}$ | $\textcolor{tomato}{2^{2}\cdot \frac{3}{6}=\frac{12}{6}}$ | $\frac{26}{6}=\frac{13}{3}$ |

Vi finner forventningsverdien ved å finne summen av rad 3 siden $E(X)=\sum k \cdot P(X=k)$
$$
E(X)=\textcolor{orange}{\frac{1}{6}}+ \textcolor{seagreen}{\frac{2}{6}}+ \textcolor{steelblue}{\frac{3}{6}}+ \textcolor{tomato}{\frac{18}{6}}=\frac{24}{6}=4
$$

**Forventningsverdien $\mathrm{E}(X)=\underline{\underline{4}}$**

### 1-3b
Vi finner variansen ved å summere rad 4 i tabellen siden $\text{Var}(X)=\sum (k-\mu)^{2}\cdot P(X=k)$
$$
\text{Var}(X)=\textcolor{orange}{\frac{9}{6}}+ \textcolor{seagreen}{\frac{4}{6}}+ \textcolor{steelblue}{\frac{1}{6}}+ \textcolor{tomato}{\frac{12}{6}}=\frac{26}{6}=\frac{13}{3}
$$

**Variansen er $\mathrm{Var}(X)=\underline{\underline{\frac{13}{3}}}$**
