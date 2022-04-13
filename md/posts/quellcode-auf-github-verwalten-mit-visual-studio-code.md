---
{
"title": "Quellcode auf GitHub verwalten mit Visual Studio Code",
"filename": "quellcode-auf-github-verwalten-mit-visual-studio-code.md",
"imgurl":"github/github_pr_hero.png",
"keywords": ["MacPC"],
"language": "de",
"date":"2020-10-09",
"published":true,
"excerpt":"GIT und GitHub haben aber in den vergangenen Jahren zu einer kleinen Revolution im technischen Umfeld geführt und Firmen wie Microsoft oder SAP dazu gezwungen umzudenken."
}
---
![Github](/media/full/github/github_pr_hero.webp)

Visual Studio Code ist sicherlich einer der besten Texteditoren und inzwischen auch für so ziemlich jedes Betriebssystem verfügbar. Das Tool kann aber weitaus mehr als nur das. Z.B. hat es eine Quellcodeverwaltung über GIT inetegriert. Das klingt erstmal alles ziemlich trocken, GIT und GitHub haben aber in den vergangenen Jahren zu einer kleinen Revolution im technischen Umfeld geführt und Firmen wie Microsoft oder SAP dazu gezwungen umzudenken. Nun aber der Reihe nach.

## Was ist GIT?
Wikipedia sagt dazu: "Git [ɡɪt] ist eine freie Software zur verteilten Versionsverwaltung von Dateien, die durch Linus Torvalds initiiert wurde." So eine Versionsverwaltung ist aus vielerlei Hinsicht mehr als nützlich. Einige der Hauptgründe dafür sind:

Eine Art von Backup um fehlerhafte Änderungen Schrittweise rückgängig machen zu können und um vor lokalem Datenverlust zu schützen.
Viele Menschen können gemeinsam am gleichen Code arbeiten und diesen, wenn gewünscht, auch miteinander teilen.
Software Salat: Man kann einen exisitierenden Quellcode kopieren (fork) und darauf afbauend einen neues Projekt starten.
Dokumentation (oha!): im automatisch generierten Versionslog ist sichtbar was, wann, von wem geändert wurde.
...
Mehr dazu: https://de.wikipedia.org/wiki/Git

## Was ist GitHub?
GitHub ist eine über das Internet erreichbare Platform, welche es Privatpersonen und Unternehmen ermöglicht GIT ohne eigene Infrastruktur dafür zu nutzen. Außerdem hat sich GitHub innerhalb kurzer Zeit als Quasi-Standard-Standort für Open Source Projekte etabliert. Der Dienst ist so erfolgreich, dass Microsoft sich diesen vor einer Weile einverleibt hat. Das ist erstmal nicht so schlimm, da Microsoft seit einer Weile auch "cool" und "best-buddy" sein will. Die Nutzung für Privatpersonen ist außerdem weiterhin kostenfrei.

Mehr dazu: https://de.wikipedia.org/wiki/GitHub

## Toll, und wie spielt das jetzt alles zusammen?
Um die Dateien unseres "Projekts" nun komfortabel bearbeiten zu können und diese aber gleichzeitig bei GitHub gesichert zu wissen, gehen wir wie im Schaubild dargestellt vor. Schritt 1 sind wir, Schritt 2 unsere Visual Studio Code Installation, Schritt 3 die Dateien unseres Projekts und Schritt 4 die Anbindung bei GitHub.


![Github](/media/full/github/git_workflow.webp)
## Vorbereitung
Zunächst, falls nicht schon geschehen, installieren wir Microsoft Visual Studio Code von: https://code.visualstudio.com/. Außerdem müssen wir uns bei GitHub als Entwickler registrieren, was unter folgender Url erledigt wird: Link. Wer mag kann noch sein GitHub Profil etwas auf Vordermann bringen. Letztendlich haben wir so nun eine Url zu unserem Profil, in meinem Falle: https://github.com/handtrixx. Die Vorebereitungen abschließend legen wir uns noch lokal oder auf einem Server einen Ordner an, den wir künftig mit GitHub synchronisieren möchten.

## Visual Studio Code konfigurieren
Nun richten wir uns VS Code so ein, dass wir arbeitsfähig sind. Da meine Dateien auf einem Server liegen, muss ich noch das Plugin "Remote - SSH" (ebenfalls von Microsoft) installieren. Plugins können über das 5. bzw. 6. Symbol der linken Seitenleiste, wie im Screenshot zu sehen, installiert werden. Nun, oder spätestens nach einem Neustart von VS Code, hat die linke Symbolleiste ein Icon mehr. Über dieses können wir unsere Serververbindungen pflegen und dauerhaft speichern. Ein extrem hilfreiches Feature ist hier, dass wir so nicht nur Zugriff auf die gewählte Ordernstruktur haben, sondern auch noch innerhalb des Programms einen oder mehrere Terminals für Betriebssystemkommandos haben. Adé Putty, MacOS Terminal und wie auch immer das jetzt bei Windows 10 heisst!

![Remote SSH](/media/full/github/remote_ssh.webp)
## Verbindung zu GitHub aufnehmen
Ach ja, darum sollte es hier ja eigentlich gehen. Nachdem wir uns mit unserem zuvor erstellten Ordner verbunden haben bzw. diesen über den File/Datei Dialog von VS Code als "Workspace" geöffnet haben, kann es auch losgehen. Dazu öffnen wir in der Seitenleiste das 3. Symbol für den GIT Bereich. Hier könnt ihr euch nun entscheiden ob ihr zunächst eine neue lokales GIT Struktur aufbauen möchtet oder den Ordner direkt bei GitHub veröffentlichen möchtet. Ich wähle zweiteres. Evtl. werdet ihr bei der ersten Verwendung noch nach euren Zugangsdaten für GitHub gefragt, um den entsprechenden Link herzustellen. Bei der Auswahl der direkten Veröffentlichung auf GitHub, werden ihr noch nach den Projektnamen gefragt und ob ihr das Projekt öffentlich oder nur privat teilen möchtet. Öffentliches Teilen heisst nicht, dass jemand eure Dateien ändern kann, sondern nur dass diese für jeden sichtbar sind!


![VS Repo](/media/full/github/vs_repo.webp)
## Geschafft!
Das war es schon. Nun können wir alle Funktionalitäten die GIT bietet nutzen. Alle Änderungen an unseren Dateien werden automatisch erkannt und stehen für den "Commit" (Bestätigung) bereit. Falls das nicht auf Anhieb gelingt, kann ein Klick auf den Button zur Snychronisation unten links im Programm helfen. Alle weiteren Änderungen können dann, nach einem Commit, immer durch einen erneuten Klick auf diesen Button zu Github hochgeladen werden.

Als "Best Practice" empfiehlt es sich im Stammordner des Projekts noch eine im Markup Format mit einer Inhaltsbeschreibung gefüllte Datei "Readme.md", sowie eine entsprechende "LICENSE" Datei mit Lizeninformationen anzulegen.

Das Ergebnis und der Status dieses Ausflugs lässt sich jederzeit unter: https://github.com/handtrixx/ncms einsehen.