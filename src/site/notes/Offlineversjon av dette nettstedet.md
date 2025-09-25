---
{"tags":["oppgave"],"temaer":null,"aliases":[],"del":null,"oppgave":null,"fag":null,"eksamen":null,"dg-publish":true,"title":"Offlineversjon av dette nettstedet","date":"2025-09-15","modified":"2025-09-25","permalink":"/offlineversjon-av-dette-nettstedet/","dgPassFrontmatter":true}
---


# Offlineversjon av dette nettstedet

Det er mulig å bruke denne nettsiden uten internettilkobling hvis du følger instruksjonene på denne siden. Det betyr at du kan ha med deg en løsningsforslag til mange ulike oppgaver på prøver og på eksamen.

## Oppsett i Windows
For å sette opp nettsiden med Windows 11 så må du gjennomføre stegene
1. [[Offlineversjon av dette nettstedet#Installere NodeJS i Windows\|Installere NodeJS i Windows]]
2. [[Offlineversjon av dette nettstedet#Last ned siste versjon av nettsiden\|Last ned siste versjon av nettsiden]]
3. [[Offlineversjon av dette nettstedet#Bygg nettsiden i Windows\|Bygg nettsiden i Windows]]

### Installere NodeJS i Windows
- Åpne Terminal (trykk gjerne <kbd>⊞ Win</kbd>-knappen og søk etter det)
- Skriv inn kommandoen `winget install --source winget -e --id OpenJS.NodeJS`
- Godta eventuelle spørsmål og dialogbokser. Det kan være du må skrive inn `Y` eller `J` i Terminalen for å godta spørsmålene.
- Lukk terminalen etter at installasjonen er fullført.

### Last ned siste versjon av nettsiden
1. Last ned alle filene til denne nettsiden: [https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip](https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip)
2. Trykk høyre museknapp på filen du lastet ned (`matematikkoppgaver-main.zip`) og velg «Pakk ut alle».
3. Du skal nå ha fått en mappe som heter `matematikkoppgaver-main`. Gå inn i denne mappen. Du skal da finne enda en mappe som heter `matematikkoppgaver-main`. Gå til neste steg i instruksjonene.

### Bygg nettsiden i Windows
1. Trykk høyre museknapp på denne mappen `matematikkoppgaver-main` og velg «Åpne i Terminal»[^1]
2. I Terminal så dobbeltsjekker du at du befinner deg i mappen "matematikkoppgaver" ved å se adressen
3. Skriv følgende kommandoer 
	1. `npm install`
	2. `npm run start`
4. Vent til nettsiden har bygd ferdig og du får opp melding `[11ty] Server at …`
5. Klikk på lenken etter `Server at` (sannsynligvis [http://localhost:8080/](http://localhost:8080/))

## Videoinstruksjoner for Windows
Jeg har (svært raskt) spilt inn en video som viser stegene. Jeg anbefaler egentlig at du prøver å følge de skriftlige instruksjonene, men det kan være at videoen kan være til hjelp.

<iframe src="https://www.youtube.com/embed/awvkLAy0EZY" class="youtube" title="" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Oppsett i macOS
For å sette opp nettsiden med Windows 11 så må du gjennomføre stegene
1. [[Offlineversjon av dette nettstedet#Installere NodeJS på macOS\|Installere NodeJS på macOS]]
2. [[Offlineversjon av dette nettstedet#Last ned siste versjon av nettsiden (macOS)\|Last ned siste versjon av nettsiden (macOS)]]
3. [[Offlineversjon av dette nettstedet#Bygg nettsiden i macOS\|Bygg nettsiden i macOS]]

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

### Last ned siste versjon av nettsiden (macOS)
1. Last ned alle filene til denne nettsiden: [https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip](https://github.com/stalegjelsten/matematikkoppgaver/archive/refs/heads/main.zip)
2. Åpne filen du lastet ned (`matematikkoppgaver-main.zip`). macOS pakker ut innholdet.
3. Du skal nå ha fått en mappe som heter `matematikkoppgaver-main`. 

## Bygg nettsiden i macOS
1. Åpne Terminal
2. Skriv `cd` og et mellomrom
3. Dra mappen "matematikkoppgaver" fra Finder til Terminal
4. Nå skal det stå noe som `cd /Users/brukernavn/Downloads/matematikkoppgaver-main` i Terminal. Trykk <kbd>Enter ⏎</kbd>.
5. Skriv følgende kommandoer 
	1. `npm install`
	2. `npm run start`
6. Vent til nettsiden har bygd ferdig og du får opp melding `[11ty] Server at …`
7. Klikk på lenken etter `Server at` (sannsynligvis [http://localhost:8080/](http://localhost:8080/))

[^1]: Det kan være at dette valget er gjemt bak «Vis flere alternativer»
