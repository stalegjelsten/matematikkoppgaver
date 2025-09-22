---
{"tags":["oppgave"],"temaer":null,"aliases":[],"del":null,"oppgave":null,"fag":null,"eksamen":null,"dg-publish":true,"title":"Offlineversjon av dette nettstedet","date":"2025-09-15","modified":"2025-09-22","permalink":"/offlineversjon-av-dette-nettstedet/","dgPassFrontmatter":true}
---


# Offlineversjon av dette nettstedet

Det er mulig å bruke denne nettsiden uten internettilkobling hvis du følger instruksjonene på denne siden. Det betyr at du kan ha med deg en løsningsforslag til mange ulike oppgaver på prøver og på eksamen.

## Forhåndskrav
Du må ha installert programvaren *NodeJS* på datamaskinen for å kunne bygge nettsiden.

### Installere NodeJS i Windows
- Åpne Terminal (trykk gjerne <kbd>⊞ Win</kbd>-knappen og søk etter det)
- Skriv inn kommandoen `winget install --source winget -e --id OpenJS.NodeJS`
- Godta eventuelle spørsmål og dialogbokser. Det kan være du må skrive inn `Y` eller `J` i Terminalen for å godta spørsmålene.
- Lukk terminalen etter at installasjonen er fullført.

### Installere NodeJS på macOS
- Åpne Terminal (bruk gjerne <kbd>⌘ Cmd</kbd> <kbd>Space</kbd> Spotlight til å søke etter programmet og starte det)
- Lim inn denne lange kommandoen og trykk Enter ⏎. Du kan også velge å lime inn de 5 kommandoene hver for seg.
```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.19.0".

# Verify npm version:
npm -v # Should print "10.9.3".
```

## Last ned siste versjon av nettsiden
1. Last ned hele denne nettsiden: [https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip](https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip)
2. Åpne filen du lastet ned (main.zip) og velg "Pakk ut alle".
3. Du skal nå ha fått en mappe som heter matematikkoppgaver.

## Bygg nettsiden i Windows
1. Trykk høyre museknapp på denne mappen og velg «Åpne i Terminal»[^1]
2. I Terminal så dobbeltsjekker du at du befinner deg i mappen "matematikkoppgaver" ved å se adressen
3. Skriv følgende kommandoer 
	1. `npm install`
	2. `npm run start`
4. Vent til nettsiden har bygd ferdig og du får opp melding `[11ty] Server at …`
5. Klikk på lenken etter `Server at` (sannsynligvis [http://localhost:8080/](http://localhost:8080/))

## Bygg nettsiden i macOS
1. Åpne Terminal
2. Skriv `cd` og et mellomrom
3. Dra mappen "matematikkoppgaver" fra Finder til Terminal
4. Nå skal det stå noe som `cd /Users/brukernavn/Downloads/matematikkoppgaver` i Terminal. Trykk <kbd>Enter ⏎</kbd>.
5. Skriv følgende kommandoer 
	1. `npm install`
	2. `npm run start`
6. Vent til nettsiden har bygd ferdig og du får opp melding `[11ty] Server at …`
7. Klikk på lenken etter `Server at` (sannsynligvis [http://localhost:8080/](http://localhost:8080/))

[^1]: Det kan være at dette valget er gjemt bak «Vis flere alternativer»
