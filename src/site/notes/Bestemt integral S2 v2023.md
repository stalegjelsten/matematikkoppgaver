---
{"tags":["oppgave","integrasjon","del1","s2"],"temaer":["integrasjon"],"alias":[null],"del":1,"oppgave":1,"fag":"s2","eksamen":"v23","dg-publish":true,"title":"Bestemt integral S2 v23","date":"2023-05-27","modified":"2023-05-27","permalink":"/bestemt-integral-s2-v2023/","dgPassFrontmatter":true}
---


# Bestemt integral S2 v23
Regn ut integralet

$$
\int_{0}^{1}\left(e^{x}+3 x^{2}\right) d x
$$

>[!question]- Fasit
>$e$
>[[Løsningsforslag/Løsningsforslag S2 eksamen V2023#Oppgave 1-1\|Løsningsforslag S2 eksamen V2023#Oppgave 1-1]]

```dataviewjs
const pg = dv.current()
dv.paragraph("Eksamen: " 
	+ pg.file.frontmatter.fag + " "
	+ pg.file.frontmatter.eksamen 
	+ ". Del " 
	+ pg.file.frontmatter.del
	+ " oppgave "
	+ pg.file.frontmatter.oppgave)
let rows = []
for (let tema of pg.file.frontmatter.temaer) {
	rows.push([tema, dv.pages().where(p => p.temaer && p.temaer.contains(tema)).file.link])
}
dv.paragraph("Oppgaver knyttet til samme temaer 👇")
dv.table(
	["Tema", "Oppgaver"], 
	rows)
