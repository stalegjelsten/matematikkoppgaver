---
{"id":"Alle oppgaver","aliases":[],"tags":["meta"],"date":"2023-05-31","dg-publish":true,"modified":"2023-06-01","title":"Alle oppgaver","permalink":"/alle-oppgaver/","dgPassFrontmatter":true,"dg-note-properties":{"id":"Alle oppgaver","aliases":[],"tags":["meta"],"date":"2023-05-31","modified":"2023-06-01","title":"Alle oppgaver","permalink":"/alle-oppgaver/"}}
---


# Alle oppgaver



```base
filters:
  and:
    - file.tags.contains("oppgave")
    - file.folder == "/"
    - note["dg-publish"] == true
    - "!eksamen.isEmpty()"
formulas:
  "": eksamen.title()
  Eksamen: eksamen.title()
  Oppgave: del+"–"+oppgave
  Status: if(status==3, "🟢 Løsningsforslag OK", if(status==2, "🟡 Fasit OK", if(staus==1, "🟠 Oppgavetekst OK", "🔴 Ikke kontrollert")))
  eksamensort: if(eksamen.slice(0,1) == "h", eksamen.slice(1,3)+"-"+eksamen.slice(0,1), eksamen.slice(1,3)+"_"+eksamen.slice(0,1))
properties:
  file.name:
    displayName: Oppgavenavn
  note.fag:
    displayName: Fag
  note.oppgave:
    displayName: Oppgave
  note.del:
    displayName: Del
views:
  - type: table
    name: Publisert
    order:
      - file.name
      - fag
      - formula.Eksamen
      - formula.Oppgave
      - formula.Status
    sort:
      - property: formula.eksamensort
        direction: DESC
      - property: fag
        direction: ASC
      - property: oppgave
        direction: ASC
    columnSize:
      note.fag: 110
      formula.Oppgave: 111
      formula.Status: 199

```
