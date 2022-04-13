---
{
"title": "Die (beinahe) perfekte Website - Teil 1: Anforderungen",
"filename": "die-beinahe-perfekte-website-teil-1-anforderungen.md",
"imgurl":"headless1/setup_small.png",
"keywords": ["Projekte"],
"language": "de",
"date":"2020-11-30",
"published":true,
"excerpt":""
}
---
![übersicht](/media/full/headless1/setup_small.webp)

Willkommen zum ersten, wirklich langen Beitrag meiner Website, in dem ich darauf eingehe, was alles erforderlich ist um einen Internetauftritt besonders gut zu gestalten. Um zu beweisen, dass die gestellten Anforderungen auch erfüllt werden können, nutzen wir meine Domain niklas-stephan.de um das Gelernte, soweit möglich, auch gleich direkt umzusetzen.

---

Hinweis: Das hier beschriebene habe ich inzwischen durch nCMS https://github.com/handtrixx/ncms ersetzt.

---

## Was ist perfekt?
Was ist schon perfekt und wer definiert das? Im Falle eines Internetauftritts ist diese Frage vielleicht einfacher zu beantworten als in anderen Fällen. Denn, egal wie gut Gestaltung und Umsetzung gelungen sind, muss die Seite erst einmal von einem Besucher gefunden werden. Mit einem Markanteil von über 90% (https://blog.hubspot.de/marketing/google-trends-suche) ist da die Google Suchmaschine eigentlich der einzige ausschlaggebende Faktor. Als Schlussfolgerung kann mann also sagen, dass die Optimierung einer Website auf von Google definierte Faktoren gleichzeitig nah an eine perfekte Website führt. Welche Faktoren das sind und welche Weiteren noch eine wichtige Rolle spielen, sehen wir uns nun im ersten Teil unserer Artikelserie an.

## Aus Sicht des Besuchers
Faktoren zur Bewertung
Neben viel Literatur und Informationen gibt Google mit dem Werkzeug "Lighthouse", welches in jede Installation des Browsers Chrome integriert ist, einen Einblick auf die Kriterien die sie an eine Website Stellen. Diese sind:

- Performance (Geschwindigkeit)
- Accessibility (Erreichbarkeit/Zugiffsfähigkeit)
- Best Practices (Empfohlene Maßnahmen)
- Search Engine Optimization (SEO - Suchmaschinenoptimierung)

![Lighthouse](/media/full/headless1/lighthouse.webp)

Es taucht noch ein weiter Punkt "Progressive Web App" (PWA) in Lighthouse auf. Um aus HTML5 eine echte WebApp zu machen müssen nämlich eine Menge von Anforderungen erfüllt werden. Dazu später mehr in einem anderen Beitrag zu meiner App zur Hausautomatisierung. Für eine Website im eigentlichen Sinn ist der Punkt PWA jedenfalls irrelevant. Der Screenshot hier zeigt eine Lighthouse Bewertung einer im Internet tausendfach frequentierten Seite, die aber offensichtlich nicht die gestellten Kriterien zu Googles voller Zufriedenheit erfüllt. Dies ist durchaus üblich bzw. nicht ungewöhnlich, denn noch viele weitere Faktoren entscheiden über den Erfolg eines Internetauftritts.

Wen es interessiert wie diese Bewertung zustande kommt, der kann wie gesagt über die Entwicklertools von Google Chrome (Öffnen sich mit Taste F12) im Tab "Lighthouse" eine beliebige Seite bewerten lassen und sich das Ergenbis ansehen. Praktischerweise gibt Lighthouse auch gleich noch Tipps dazu aus, wie sich die Punktzahl weiter erhöhen bzw. die Seite optimieren lässt.

Deshalb orientieren wir uns in den nächsten Kapiteln genau an diesen Faktoren.

### Performance
Seit dem die Übertragungsgeschwindkeit der Endgeräte des Webseitenbesuchers nicht mehr der limitierende Faktor sind, müssen sich Webseiten mindestens genauso "schnell" anfühlen wie eine Applikation die auf unserem Endgerät fest installiert ist. Google gibt in seinem Playbook so den dringlichen Rat dazu, dass eine Seite innerhalb von 2 Sekunden geladen sein muss um die Benutzerfahrung nicht zu schmälern. Um unter diesen 2 Sekunden zu bleiben kann man sich vieler Stellschrauben bedienen:

- Starke Infrastruktur / Hardware mit einer guten Netzwerkanbindung
- Ein möglichst geringes Datenvolumen einer Seite
- Kompression von Dateien und während der Datenübertraung
- Reverse-Proxy Konfiguration und Caching
- Content Delivery Networks (CDN) für lokales Caching
- Kein/wenig Server-Side Rendering
- "Sauberer" und sparsamer Quellcode
- Auf das (nach)laden, besonders von externen Inhalten, sollte möglichst verzichtet werden

Jeder der aufgelisteten Punkte ist mindestens ein eigenes Kapitel Wert und wir werden in unsere Kapitelserie dementsprechend darauf eingehen.

### Accessibility
Egal wie schnell sich die von uns aufgesuchte Seite auch aufgebaut hat, wenn der Autor meinte es sei eine gute Idee alles in einer Schriftgröße von 5 Pixeln in hellgrauer Schrift unter Verwendung eines Comic Sans Fonts auf weißem Hintergrund anzuzeigen, ist der Spaß vorbei. Auch Laufschriften mit Telefonnummern zum Abschreiben und großzügige Nutzung von Neon-Farben sind Effekte die in einem höchstens die Gewaltbereitschaft steigern. Vielleicht nicht ganz so übetrieben aber ähnlich hat sicherlich jeder von uns schon einmal Erfahrungen im Internet gemacht. Um solchen Situationen entgegenzuwirken achtet man als Webseitenbetreiber, neben der generellen User Experience (UX - Benutzerfahrung), auch auf die Accessibility, sprich die Erreichbarkeit / Zugiffsfähigkeit seiner Inhalte. Dabei gilt es zu bedenken:

### Nicht jeder Mensch kann gut sehen
Manche Menschen können überhaupt nicht sehen und lassen sich die Inhalte von einer Maschine vorlesen
Menschen nutzen unterschiedliche Endgeräte mit unterschiedlichen Auflösungen
Auf die Verwendung evtl. verwirrender Effekte sollte man möglichst verzichten, wenn sie nicht ein Kernelement der Seite darstellen.
Die Seitenstruktur sollte klar und hierarchisch sein, z.B. nicht am Anfang der Seite mit einer h4 Überschrift anfangen und dann mitten im Text h2 verwenden.
Es sollten möglichst keine oder zumindest nur wenige Maßnahmen getroffen werden, die den Nutzer daran hindern die Darstellung seinen Bedürfnissen nach anzupassen.
Wenn mann sich daran hält, wird man auf modernen Endgeräten/Browsern automatisch durch die Bereitstellung seiner Seite mit der "Reader" Option belohnt, die ein eBook-artiges lesen der Artikel ermöglicht.

### Best Practices
Es gibt eine Reihe von empfohlenen Maßnahmen um die korrekte Darstellung der Seite beim Besucher zu Gewährleisten und um bestimmte Sicherheitsstandards einzuhalten. Außerdem prüft Lighthouse hier noch, dass die Seite keine offensichtlichen Fehler in der Programmierung enthält und gängige sowie akutelle Standardtechniken umgesetzt wurden. Insgesamt werden bis zu 17 Kriterien geprüft, von denen ich hier die wichtigsten Aufliste.

Verwendung von https zur Verschlüsselung der Datenübertragung zwischen Nutzer und Betreiber. Schon vor 2021 eigentlich ein absolutes Muss.

### Verzicht auf nicht unbedingt erforderliche JavaScript Features
Keine JavaScript Fehler auf der Seite.
Korrekte Formatierung des HTML Codes bezüglich wesentlicher Merkmale wie z.B. der eingesetzten Sprache.
Das klingt eigentlich nach nicht viel und leicht umzusetzen. Wer sich aber einmal die Mühe macht sich die Fehlerprotokolle durchzulesen die von einer großen Anzahl gängiger Websites "ausgespuckt" werden, staunt nicht schlecht. Offenbar ist es selbst großen Unternehmen nur schwer möglich, ihre Entwickler dahingehend zu motivieren, dass solche Fehler ausgeschlossen sind. Zur Vertreidigung der Entwickler aber vor allem deren Motivatoren, muss man allerdings sagen dass verschiedene Browser gerade mit JavaScript verschieden umgehen und manchmal Kompromisse geschlossen werden müssen.

### SEO
Wie schon zu Beginn des Artikels erläutert, bringt uns die schönste Website nichts, wenn sie niemand findet. Falls wir dann auch noch nicht gewillt sind tief in unsere Taschen zu greifen, um Werbekampagnen zu finanzieren, dann aber eigentlich auch immer müssen wir uns mit Search Engine Optimization (SEO) beschäftigen. Früher bestand die Optmierung für Suchmaschinen zum großen Teil darin, brav ein paar Schlüsselwörter (Keywords) in die Meta Informationen unseres Auftritts einzubauen. Das reicht heute bei weitem nicht mehr aus und die vergebenen Keywords werden sogar in der Regel von den gängigen Suchmaschinen gar nicht mehr beachtet. Dafür sind nun eine Vielzahl anderer Faktoren entscheidend dafür ob wir (gut) gefunden werden oder nicht. Einige der wichtigsten davon sind hier aufgelistet:

Die Seite enthält Metainformationen, wie: Beschreibung, Titel, Bild, Link, usw.

- Die Seite hat einen längeren wirklichen Inhalt in Textform
- Möglichst alle Links auf der Seite haben eine Beschreibung (Text)
- Alle Bilder auf der Seite haben eine Bezeichnung (alt)
- die Seite ist z.B. über eine robots.txt Datei so eingestellt, dass sie von Suchmaschinen indiziert werden darf
- die robots.txt enthält, wenn vorhanden, keine Fehler
- Es werden keine "Mini" Schriftgrößen verwendet um Inhalte vorzutäuschen (eine Zwischenzeitlich verbreitete Masche unseriöser Anbieter)
- Die Seite / Der Beitrag enthält interne und externe Links zu anderen Seiten

Wie man sieht zielen diese Kriterien darauf ab, dass neben den Metainformationen die auch für Soziale Netzwerke relevant sind, der komplette Seiteninhalt bei der Indizierung der Seite durch Suchmaschinen berücksichtigt wird. Das ist auch ein weiteres Argument, neben der Performance, Inhalte nicht dynamisch nachzuladen, weil eben diese dann von Google&Co nicht gefunden werden.

### Social Media
Aus Sicht eines Unternehmens heute beinahe überlebensnotwendig, aus Sicht einer Privatperson einfach eine hilfreiche Unterstützung um Inhalte bekannt zu machen und mit der Welt zu teilen, das ist Social Media Integration für eine Website. Die schon zuvor genannten Meta-Informationen ermöglichen es, dass beim Teilen eines Links automatisch ein Bild, eine Überschrift und eine Kurzbeschreibung generiert werden. Außerdem ermutigen Schaltflächen mit den Symbolen der verschiedenen Netzwerke in der Nähe eines Beitrags zum Teilen. Man kann auch berücksichtigen, dass je nach Endgerät unterschiedliche Kanäle genutzt werden. So macht ein Share Button zu WhatsApp in der Regel nur für mobile Endgeräte Sinn. Auch werden von unterschiedlichen Altersgruppen unterschiedliche Netzwerke bevorzugt. Dabei kann man sich hieran orientieren:

Facebook: Wird primär von Menschen mittleren bis höheren Alters genutzt, ist aber wohl jedem als Pionier bekannt.
Instagramm: Junge Erwachsene bis Menschen mittleren Alters nutzen dieses Netzwerk hauuptsächlich zum Teilen von Bildern und Geschichten dazu.
TikTok: Für die ganz jungen Mitmenschen. Da wird wohl hauptsächlich getanzt, geklatscht und dazu gesungen, um das Ganze dann auch noch als Video zu teilen.
Twitter: zum Austausch von Kurznachrichten und so richtig im sogenannten Arabischen Frühling weltweit bekannt geworden. Bis vor kurzem auch Stammsitz einer orangen Ente. Zielpublikum sind inzwischen eher Menschen mittleren bis höheren Alters.
YouTube: Mit etwas Aufwand auch als Soziales Netzwerk nutzbar, wird dafür aber altersgruppenübergreifend genutzt
WhatsApp: eher zum persönlichen Austausch in kleineren Zielgruppen, dafür aber ebenfalls altersgruppenübergreifend.
Natürlich gibt es auch regionale Unterschiede bei der Nutzung der Netzwerke, so sieht in China oder Indien das Bild schon wieder ganz anders aus. Z.B. tritt dort der Anbieter WeChat mit seiner App als eierlegende Wollmilchsau auf.

### Browser Kompatibilität
Hier muss man eine Entscheidung treffen. Leider nutzen nach wie vor viele Menschen den völlig veralteten Internetbrowser "Internet Explorer" (IE11) von Microsoft. Dieser wird schon seit längerem nicht mehr von Microsoft weiterentwickelt und wurde durch "Edge" ersetzt. Da nun aber viele trotzdem noch den IE11 nutzen, ist die zu treffende Entscheidung: Will ich diese Besucher ebenfalls mit einer fehlerfreien Darstellung bedienen oder schließe ich sie aus, damit ich mich bei der Erstellung der Seite an aktuelle Standards halten kann und diverse Altlasten nicht berücksichten muss. Ich habe mich gegen die Unterstüzung des IE11 entschieden, da selbst Microsoft nach Supportende von Wndows 7, an welches der IE11 gekoppelt ist, diesen als Sicherheitsrisiko einzustufen plant. Die anderen üblichen Browser wie Google Chrome, Chromium und Microsoft Edge oder auch Apple Safari liefern stets gute Ergebnisse. Das Open Source Projekt Firefox der Mozilla Gruppe ist die Wahl des Nutzers mit Wunsch nach Unabhängigkeit. Auch Firefox stellt die meisten Inhalte des akutellen HTML Standards korrekt dar und unterstüzt nur z.B. einige exotischere Parameter in CSS nicht.

### User Experience und Layout
Für ein Unternehmen sicherlich nicht nur ein Unterpunkt für mich als Privatperson mehr eine Hilfe. Unter User Experience (UX) wird die komplette Benutzerfahrung die der Besucher während des Besuchs unserer Website macht zusammengefasst. Dazu gehört das Layout oder auch User Interface (UI) unserer Seite als Kernelement. Sich wiederholende Elemente sollten auf allen (Unter)Seiten gleich aussehen und generell sollte während des kompletten Besuchs eine Wiedererkennungswert geschaffen werden. So sind Buttons immer an der gleichen Stelle zu finden, verhalten sich identisch und sehen gleich aus. Auch das Farbschema sowie die komplette Formatierung der Inhalte sollten durchgängig und ansprechend sein. Ich vertraue hierzu als Einstieg schon seit einigen Jahren auf das Open Source Projekt "Bootstrap" (Link) von Twitter. Dieses beinhaltet im wesentlichen vorgefertigte CCS (Styles) die nach belieben verwendet werden und ggfs. auch angepasst werden können. Bootstrap hatte zwischenzeitlich etwas an seinem guten Ruf eingebußt, weil es lange auf das JavaScript Framework "jQuery" gesetzt hat. Mit der aktuellen Version 5 ist das Geschichte und wir freuen uns über einen kleineren Quellcode bei der Einbindung.

## Aus Sicht des Betreibers
In den vorherigen Kapiteln haben wir herausgefunden, was aus Sicht von Google bei der Ausspielung einer Website relevant ist. Natürlich haben wir aber neben den Anforderungen aus Besucheresicht auch noch sowohl als Autor als auch als Administrator weitere Anforderungen. Einige davon werde ich hier anführen, andere später in der Artikelserie auch noch tiefgreifender ausführen.

### Server
Wie zuvor im Punkt Performance schon beschrieben ist ein schneller Server mit einer sehr guten Netzwerkanbindung ans Internet eines der Kernkriterien für eine performante Website. Anbieter für virtuelle oder physische Server gibt es viele. Einige der Bekanntesten sind Hetzner, 1blu, Netcup oder Strato. Man hat also die Qual der Wahl. Heute immer mehr üblich ist anstelle des Betriebs eines eigenen Servers, die Nutzung von Ressourcen eines Cloud Anbieters. Hier Stellen Google, Amazon und Microsoft die Platzhirsche dar. Aus Sicht des Datenschutzes stellen alle drei Anbieter mittlerweile auch Ressourcen aus Deutschland bereit und halten sich dementsprechend an die hier gültigen Regulierungen. Ich persönlich bin aber aufgrund der variablen Abrechnung kein Fan der Cloud Anbieter und bezahle lieber einen monatlichen fixen Betrag der sämtlichen Traffic sowie die Hardwarekosten beinhaltet.

### Monitoring & Alerting
Das Monitoring, also die Überwachng des Serves ist nicht nur in Problemfällen wichtig, sondern hilft auch dabei Problemen bereits entgegen zur wirken bevor sie auftreten. Ich nutze zum Monitoring das mit dem CentOS Betriebsystem ausgelieferte Open Source Tool Cockpit, welches eine schicke Weboberfläche für die meisten anliegen liefert. So lassen sich dort automatische Updates und eine Langzeit-Ressourcenüberwachung inkl. Dashboard mit ein paar Mausklicks aktivieren.

Viele setzen ein Alerting, also die Alarmierung im Fehlerfall, mit einem Monitoring gleich. Das ist so nicht ganz korrekt. Ein Alerting kann durchaus völlig unabhängig vom Monitoring konfiguriert und genutzt werden. So nutze ich z.B. nur Alerts die mir eine E-Mail senden wenn meine Website keinen gültigen Inhalt zurück liefert. Wem das reicht, der braucht keine schwergewichtige Softwarelösung zu installieren. Wichtig ist nur: Die Überwachung sollte auf keinen Fall auf dem gleichen Serversystem wie unsere Website laufen. Der Grund ist klar: Wenn der Server ausfällt kann er mir auch keine E-Mails mit der Info über den Ausfall liefern... Deshalb kommen meine Mails von einem kleinen Raspberry PI der zuhause auch schon vorher seienen 24-Stunden Dienst verrichtet hat. Und im Normalfall kommen eigentlich auch gar keine Mails, weil der Server einfach nicht ausfällt :-)

### Datensicherung
Das eine Datensicherung zwingend erforderlich ist, braucht man heute glücklicherweise niemanden mehr zu erklären. Ich nutze für die Website genauso wie vor andere Komponenten auf meinem Server eine mehrschichtige Backupstrategie: Eine tägliche Spiegelung der Inhalte innerhalb der Servers lässt mich versehentlich gelöschte Inhalte sehr schnell wiederherstellen. Diese Spiegelung ist dann auch die Quelle um die Daten imkrementell abgesichert an den zuvor erwähnten Raspberry Pi zuhause zu übertragen. Genau genommen an ein dahinter liegendes Hardware RAID Plattensystem. So habe ich zumindest alles mir mögliche getan um sowohl das versehentliche Löschen, einen Datenverlust oder einem Datenträgerausfall entgegen zu wirken.

### Domain und DNS
Die Adresse(n) unter denen wir im Internet erreichbar sein wollen werden als Domains bezeichnet. Diese sichert man sich für geringes Geld bei einer Vielzahl von Anbietern, wenn man einen kreativen und nicht bereits belgten Namen gefunden hat. Und genau da liegt die Schwierigkeit, die meisten "hübschen" Namen sind bereits vergeben und man muss wirklich kreativ werden. Eine Nacht darüber zu schlafen bevor man die Registrierung ansößt kann wirklich helfen.

Der DNS Eintrag ist das Bindeglied im Internet zwischene unseren registrierten Domains und der IP-Adresse unseres Servers. Oft übernehmen Anbieter von Domains auch gleichzeitig die Registrierung und Verteilung des DNS Eintrags für genauso geringes Geld.

### Sicherheit
Neben dem eigentlich schon verpflichtenden Einsatz von Verschlüsselung über https://, welche auf meinem Server über das Open Source Tool "Nginx Proxy Manager" (Link) einrichte, kann man noch mehr für die Sicherheit von Besuchern und uns als Betreibern tun. Ein großer Mehrwert zur Sicherheit ist während der Umsetzung als Nebeprodukt entstanden. Da ich auschließlich statische Seiten generiere und auf den Einsatz von Cookies verzichte, beschränkt sich der Besucher dieser Seiten fast vollständig auf den bloßen Download von Dateien ohne Nachladen weiterer Inhalte. Eine Ausname spielen die Assets (Bilder, Dokumente, etc.), aber dazu später mehr.

Außerdem sollte natürlich der Zugang zum Server gesichert werden. So ist eine Firewall zu aktivieren und Standardports z.B. für SSH sind zu vermeiden. Auch empfiehlt es sich z.B. mit dem Open Source Tool Google Authenticator eine 2-Faktor Ameldung am Server zu erzwingen. Eine Verschlüsselung der Daten auf dem Datenträgern des Servers ist, wenn möglich, sicherlich auch keine schlechte Idee. Für den Root user deaktivieren wir noch die Möglichkeit sich aus der Ferne anzumelden und führen selbst unsere Kommandos niemals direkt als dieser aus.

### Content Mangagment System
Eine immer populärer werdende Praxis ist der Einsatz eines sogenannten Headless Content Management Systems (CMS) zur Datenhaltung, Verwaltung und ggfs. zum editieren von Beitragen wie diesem hier. Headless bedeutet dass das CMS die in ihm gepflegten Daten nicht direkt sondern nur über Webschnittstellen bereit stellt. Das hat, neben den Vorteilen der Modularisierung und Unabhängigkeit, den Vorzug dass wir unsere Inhalte zur Generierung von statischen Seiten an jedem Punkt unserer Prozesses abfragen können ohne dabei auf Limitierungen des CMS selbst gefesselt zu sein. Ich nutze hierfür das Open Source Tool "Cockpit" (Link), und bin nach einer kurzen Einarbeitungszeit von vielleicht 6 Stunden hellauf begeistert. Das einzig verwirrende ist der Name. Wir erinnern uns: Unser Monitoring Tool heisst ebenfalls Cockpit. Die beiden haben so rein gar nichts miteinander zu tun, sondern teilen sich einfach den Namen.

### Asset Management
Im Falle unserer Website sind unsere Assets vornehmlich Bilder. Und diese möchten wir gerne, ähnlich wie unsere Inhalte, autark gespeichert und verwaltet wissen. Außerdem soll unser Asset Management System dazu in der Lage sein, aus den von uns hochgeladenen Bildern automatisch Miniaturen (Thumbnails) zu erstellen. Glücklicherweise kann unser CMS System "Cockpit" (Link) das alles von Haus aus und bietet für den Zugriff auch noch Web Services, mit deren Verwertung wir bereits bekannt sind. In Cockpit ist das Asset Management ein vom CMS getrennter Bereich der aber von dort aus auch angesprochen werden kann, so dass wir Bilder beim Schreiben eines Artikels direkt hochladen und einfügen können.

### Backend
Oft habe ich in diesem Artikel über die Generierung von satischen Seiten gesprochen. Aber womit machen wir das eigentlich? Hier bin ich einen unüblichen Weg gegangen, und verwende das Open Source Tool Node-RED (Link). Node-RED ist eine sogenannte Low-Code Programmierungebung auf die über den Browser zugegriffen wird. Low-Code heisst das man Abläufe von einfacher bis mittlerer Komplexität ohne eigentliche Programmierung abbilden kann. Allerdings lassen sich auch jederzeit eigene Funktionen einbinden, wovon ich auch häufig gebrauch machen. Verschiedene Proezsschritte lassen sich grafisch miteinander verbinden, so dass als Nebenprodukt gleich noch ein Ablaufdagramm entsteht. Ich nutze das Tool schon seit mehren Jahren z.B. zur Heimautomatisierung, was die Vielseitigkeit wiederspiegelt. Es gibt aber auch noch eine Vielzahl anderer Tools die auf die Generierung von satischen Websites spezialisiert sind.

### Reporting & Web Analytics
Wenn man so viel Arbeit in die Erstellung von Inhalten und Struktur steckt, möchte man natürlich auch wissen ob und wie diese bei den Besuchern ankommen. Auch wie viele Besucher es überhaupt in welchem Zeitraum gibt und ob sie längere Zeit auf unseren Seiten bleiben interessiert uns. Wenn unsere Inhalte außerdem in mehreren Sprachen oder zumindest auch in Englisch oder Spanisch angeboten werden, dann möchten wir auch wissen woher die Besucher kommen. Um all diese Fragen zu beantworten gibt es sogenannte Web Analytics Tool. Solch ein Tool bereitet die Aantworten auf diese Fragestellungen in der Regel auch gleich noch grafisch auf. Das bekannteste unter ihnen ist sicherlich Google Analytics, welches sich kostenfrei in eine Website einbinden lässt. Allerdings ist Google Analytics aus Gesichtspunkten des Datenschutzes nicht besonders sparsam und lässt sich auch nicht selbst betreiben, sondern greift auf die Google Cloud Services zurück. Als Freund des Datenschützers hat sich hingegen das Open Source Tool "Matomo" (Link) erwiesen. Außerdem lässt es sich selbst betreiben, ist flink und geht auf alle genannten Bedürfnisse ein. In Matomo lässt sich auch einstellen, dass Daten nur anonymisiert erhoben werden und z.B. keine IP-Adressen der Besucher gespeichert werden.

### Datenschutz & Rechtliche Bestimmungen
Wo wir schon das Thema Datenschutz angesprochen haben, ohne darauf gegenüber dem Webseitenbenutzer einzugehen geht es in Deutschland bzw. der EU nicht. Das ich mich gegen den Einsatz jeglicher Art von Cookies entscheide, vereinfacht diesen Teil aber ungemein (Stichwort: Cookie-Madness). So muss auf der gesamten Webseite aber trotzdem ein stets und einfach auffindbarer Bereich/Link zu den Datenschutzbestimmungen verfügbar gemacht werden. Das gute ist aber: Datenschützer sind keine Unnmenschen, im Gegenteil sogar. Sie wollen uns nur vor unlauteren Geschäftspraktiken der Betreiber schützen und sind gegen lange komplizierte "Paragraphenauflisterei". Das heisst, dass die Datenschutzbestimmungen möglichst kurz und verständlich formuliert sein sollen. Sie sollten außerdem keine Abschnitte enthalten die für die Website gar nicht relevanat sind und im Wesentlichen folgendes enthalten:

- Welche persönlichen Daten werden gespeichert?
- Wo werden die Daten gespeichert?
- Von wem werden die Daten gespeichert?
- Wer ist Verantwortlicher Ansprechpartner?
- Wer darf die Daten auswerten?
- Welche Drittparteien sind evtl. involviert?
- Wie kann eine Löschung meiner evtl. vom Betreiber gespeicherten Daten initiiert werden?

Wie gesagt müssen aus der Liste nicht alle Punkte relevant sein, z.B. wenn überhaupt keine personalisierten Daten gespeichert werden. Das heisst dass vorgefertigte Texte nicht unbedingt gut sind und vor allem meistens Passagen enthalten die gekürzt/entfernt werden sollten. Natürlich bin ich kein Anwalt und die rechtlichen Grundlagen ändern sich zur Zeit quartalsweise, aber wenn man sich an diese Grundlagen zum Datenschutz hält ist man auf jedenfall gute dabei und handelt bedachter als viele andere Webseitenbetreiber.

Aus rechtlicher Sicht muss ebenso immer eine Impressum verfügbar sein. Hier kann man sich durchaus an Vorlagen aus dem Internet bedienen, da es sich im Gegensatz zur Datenschutzerklärung hier eher um unsere Absicherung gegenüber dem Nutzer und keine Dienstleistung für ihn handelt. Pflichtangaben sind:

- Verantwortlicher für das Angebot gemäß § 5 TMG / § 18 MStV
- Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV

Beide Angaben sollten den vollständigen Namen, ein Adresse und zumindest eine E-Mail Anschrift enthalten. Hier zählen leider keine Argumente aus Sicht des Datenschutzes für den Betreiber...

## Fazit und Ausblick
Wir kennen nun viele Kriterien die eine perferkte Website ausmachen und können bereits sagen, dass sich diese so mit einem Homepagebaukasten oder einem Web Content Managementsystem wie z.B. Wordpress nicht umsetzen lassen. In den Folgeartikeln meiner Serie werden wir allerdings auch sehen, dass zur Umsetzung teilweise tiefgreifendes IT-Verständnis benötigt wird. Deshalb Rate ich allen die sich nicht so tief mit dieser Materie auseinander setzen möchten trotzdem zum Einsatz von Wordpress. Bei Wordpress handelt es sich um ein millionenfach eingestztes WCMS mit dem man schnell zu passablen Ergebnissen kommen kann und der Umsetzungsaufwand sich auch von Laien bewältigen lässt.

Zusammengefasst ist folgender Anforderungskatalog:

- Hosting (Bereitstellung) auf einem flinken Server als Basis
- Eine performante Netzwerkanbindung dieses Servers an das Internet
- DNS Einträge unser Domain(s)beim einem vertrauenswürdigem Anbieter
- Virtualisierung einzelner Komponenten in sogenannten Containern
- Server Monitoring mit Cockpit (nicht das CMS Tool)
- Alerting mit einer geeigneten schlanken Lösung
- Eine Reverse Proxy Konfiguration inkl. Zertifikatsmanagement mit NGINX Proxy Manager
- Ein Backend auf Basis von Node-Red zur Generierung statischer Seiten
- Content und Asset Management mit Cockpit (nicht das Monitoring Tool)
- Web Analytics mit Matomo
- Einen Texteditor und Zugriff auf eine Shell mit Microsoft Visual Studio Code
- HTML5 Quellcode mit Unterstützung von Twitter Bootstrap 5 (also ohne jQuery) Komponenten
- Individuelle Stylesheets mit CSS Variablen
- Vanilla (keine Framework wie jQuery oder Angular) Javascript im Frontend
- In dieser Reihenfolge werde ich die Themen in den folgenden Artikeln auch beschreiben. 

Um noch etwas Spannung aufzubauen: 
Eine Lighthouse Berwertung von 100% Punkten in allen Bereichen lässt sich umsetzen, diese Seite hier ist der Beweis :-).

Vielen Dank fürs lesen.