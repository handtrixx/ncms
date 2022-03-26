---
{
"title": "Rechenkraft für die Wissenschaft mit BOINC",
"filename": "Rechenkraft_fuer_die_Wissenschaft.md",
"imgurl":"boinc.png",
"keywords": ["IoT"],
"language": "de",
"date":"2021-01-31",
"published":true,
"excerpt":"In diesem Artikel berichte ich darüber, was Boinc eigentlich ist und wie man es einfach installieren kann."
}
---
Wenn man sich zum Einem für wissenschaftliche Projekte begeistern kann und zum Anderen ein wenig Rechenleistung übrig hat, dann sollte man sich das Open Source Projekt und Werkzeug Boinc einmal genauer anschauen. In diesem Artikel berichte ich darüber, was Boinc eigentlich ist und wie man es einfach installieren kann.

## Volunteer-Computing / Ehrenamtliches Rechnen?
Volunteer-Computing (zu deutsch: Ehrenamtliches / freiwilliges Rechnen) beschreibt eine Technik der Anwendungsprogrammierung, bei der einzelne Computernutzer Rechnerkapazitäten wie Rechenzeit und Speicherplatz auf freiwilliger Basis einem bestimmten Projekt zur Verfügung stellen, um unter Anwendung des verteilten Rechnens ein gemeinsames Ergebnis zu berechnen.

Quelle: Wikipedia
Das heisst, dass jeder der ein wenig Rechenleistung entbehren kann, sich an wissenschaftliche Projekten beteiligen kann, um diesen dabei zu helfen bestimmte Problemstellungen zu lösen. Um das zu tun muss man sich bloß ein bestimmtes Programm installieren, dass auf einem Computer läuft der möglichst oft/dauerhaft betrieben wird. Wer also z.B. zuhause einen Raspberry Pi oder so wie ich, sowieso einen Server betreibt, kann wissenschaftliche Arbeit leisten in dem er teile seiner freien Prozessorkapazität zur Verfügung stellt.

## Hinweis
Vor einem Betrieb auf einem Laptop oder einem klassischen PC sollte man bedenken, dass durch erhöhten CPU-Verbrauch die Betriebsdauer heruntergesetzt bzw. der Stromverbrauch gesteigert wird. Von einem Betrieb auf Cloud-Server Angeboten wie Microsoft Azure oder Amazon AWS, ist wegen der auf CPU-Leistung und Datenübertragung basierenden Abrechnungsmodelle, abzuraten.
Sonst kann es teuer werden!

Die dabei zur Verfügung gestellten Ressourcen können dabei über das entsprechende Programm oder, beim Betrieb in einem Container, über dessen Konfiguration gesteuert werden.

## Was ist Boinc?
Die Schaffer des Tools Boinc haben es sich zur Aufgabe gemacht ca. 30 wissenschaftliche Volunteer-Computing Projekte über eine Oberfläche verfügbar und konfigurierbar zu machen. Auch Einstellungen wie die zur Verfügung zu stellenden Ressourcen und Reports über bereits geleistete Arbeit stellt das Tool zur Verfügung. Eine genaue Liste mit Beschreibung der Projekte findet sich hier: Link. Dort wird auch schon ersichtlich, dass nicht jedes Projekt für jede Computerplattform existiert und andere nicht für jede Art von Plattform geeignet sind. So benötigen einige von Ihnen z.B. eine schnelle dezidierte Grafikkarte, da die angestellten Berechnung auf diesen Prozessortyp (GPU) optimiert sind.


## OK, gefällt mir. Wie starte ich?
Die Installation kann entweder manuell und direkt über das auf der Boinc Homepage verfügbare Installationsprogramm erfolgen oder, wie von mir bevorzugt und hier beschrieben, als orchestrierter Docker Container mit Docker Compose. Eine beispielhafte docker-compose.yml Datei:

version: "2.1"
services:
 boinc:
  image: ghcr.io/linuxserver/boinc
  container_name: boinc
  environment:
   - PUID=1000
   - PGID=1000
   - TZ=Europe/Berlin
  volumes:
   - ./config:/config
  restart: unless-stopped
  networks:
   - net
   - default
  deploy:
   resources:
    limits:
     cpus: 1.00
     memory: 2048M
networks:
 net:
  external: true
Die Angabe der zur Verfügung gestellten Ressourcen über deploy - resources - limits, ist optional. Eine Beschränkung der dem Program bereitgestellten Ressourcen lässt sich, wie schon zuvor erwähnt, auch direkt im Programm konfigurieren. Ich gehe hier auf Nummer sicher und schränke den Zugriff von vorn herein ein. Ein CPU Wert von 1 entspricht einem CPU-Thread. Bei z.B. vorhandenen 8 Threads, kann der hier definierte Container also auf 12,5% der verfügbaren CPU-Leistung zugreifen. Genau das von mir gewünschte "Grundrauschen".

## Anwendung und Fazit
Entweder durch starten der Anwendung oder durch Zugriff auf das Webinterface im Conatinerbetrieb, können wir uns nun im Program für die Projekte die uns intressieren anmelden und die Prozesse starten. Danach passiert eigentlich nichts spannendes mehr und eine weiteres eingreifen unserseits ist nicht erfordlich. Unseren Beitrag zum jeweiligen Projekt können wir über die im Program integrierten Berichte jederzeit einsehen. Einfacher geht es nicht!