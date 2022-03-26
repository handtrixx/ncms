---
{
"title": "Web Analytics selbstgemacht mit Matomo",
"filename": "Web_Analytics_selbstgemacht.md",
"imgurl":"matomo.png",
"keywords": ["IoT"],
"language": "de",
"date":"2021-06-01",
"published":true,
"excerpt":"In diesem Artikel gehe ich auf die Vorteile bei der Nutzung von Matomo ein und liefere auch gleich ein Beispiel, wie es sich schnell nutzen lässt."
}
---
Jeder, der sich mit Internetauftritten und/oder WebApps beschäftigt, hat sicherlich schon von Google Analytics gehört. Damit kann man u.a. sehen von wo, unter welchen technischen Bedingungen, wann auf welche Seiten eben dieser zugegriffen wird. Matomo steht nicht für ein Mozarellasandwich mit Mayonaise und Tomaten, sondern ist ein Open Source Tool mit dem sich gleiches und teilweise sogar mehr erreichen lässt. Dem ein oder anderen ist es vielleicht noch unter seinem alten Namen Piwik bekannt. In diesem Artikel gehe ich auf die Vorteile bei der Nutzung von Matomo ein und liefere auch gleich ein Beispiel, wie es sich schnell nutzen lässt.

## Datenkrake - aber besucherfreundlich
Der wesentliche Vorteil bei der Nutzung von Matomo besteht darin, dass man es selbst betreiben (Hosten) kann, und man so die volle Kontrolle darüber hat welche Daten vom Besucher wo gespeichert werden. Ich selbst nutze das Tool nun schon seit vielen Jahren und habe nur positives darüber zu berichten. Es lässt sich ganz Datenschutzkonform und trotzdem granular einstellen, welche Informationen gespeichert werden. Für aussagekräftige Analysen braucht man z.B. nicht die komplette IP-Addresse des Besuchers zu speichern, um nur eine der vielen Optionen zu nennen. Auch setzen Tools wie Google Analytics stark auf den Einsatz von digitalen Fingerabdrücken (Cookies), dazu gleich mehr. Aber so viel vorab: mit Matomo lässt sich der Einsatz von Cookies komplett deaktivieren!

### Exkurs: Igitt Cookies, oder sind die gar nicht böse?
Cookies sind grundsätzlich nicht böse, können aber eventuell entgegen den Interessen eines Individuums eingesetzt werden. Ein Cookie ist eigentlich nichts anderes als ein kleiner Code-Schnipsel, der im Browser eines Besuchers verbleibt. Sie werden häufig genutzt um sich zu merken, dass wenn ich auf einer Seite einen "OK" Knopf betätigt habe, mir beim nächsten Besuch der gleichen Seite der zugehörige Dialog nicht mehr angezeigt wird. Also eigentlich total im Sinne des Benutzers. Aber ein Cookie lässt sich auch anders einsetzen, z.B. durch das Setzen einer eindeutigen ID, die mich bei jedem erneuten Besuch der Seite wieder identifiziert. Das will ich eventuell gar nicht oder sorgt bei mir zumindest für Unbehagen. So macht das z.B. Google bei YouTube oder eben Google Analytics.

## Wie kann ich mich vor ungewollter Datenspeicherung schützen?
Wir treffen hier auf zwei unterschiedliche Trends und Interessengruppen: Auf der einen Seite Unternehmen, Marketingagenturen und deren Dienstleister, die am liebsten Cookies und Vergleichbare dauerhaft und sogar über Seitengrenzen hinweg tauschen möchten. Argumentationsgrundlage ist die Steigerung der Benutzerfreundlichkeit durch Komfortfunktionen und in manchen Fällen der Weg zum "gläsernen Besucher". Auf der anderen Seite stehen die, zumindest in Deutschland und der EU starken, Datenschützer, viele Anwender, in Zukunft vielleicht sogar ein bisschen Google und interessanterweise schön etwas länger: Apple?!
Apple baut mehr und mehr Funktionen in seinen Browser Safari ein, die es Unternehmen zumindest deutlich erschweren Webseitenbesucher zu "verfolgen". Warum tun die das? Sicherlich nicht weil sie total liebe Menschen sind, sondern als Verkaufsargument für ihre Produkte. Eigentlich auch egal, sie tun auf jeden Fall ein Stück Gutes damit.
Wer nun denkt sich durch die Verwendung des Inkognito Modus seines Browsers vollständig vor Trackingmaßnahmen schützen zu können, liegt leider mächtig daneben. Es ist das Kernkonzepts des Internets (genauer: des HTTP Protokolls), dass immer eine bidirektionale Datenübertragung zwischen Anfragendem (Besucher) und Angefragten (Website) erfolgt. D.h. bestimmte technische Informationen kann ich als Webseitenbetreiber immer abgreifen, Inkognitomodus des Besuchers hin oder her. Für alle die das nicht wollen, gibt es Möglichkeiten, die sind aber nicht "komfortabel".

Der Einsatz eines "gefälschten" sogenannten User Agents: Damit übertrage ich bewusst verfälschte Informationen zu meinem Endgerät. Um das zu erreichen gibt es für die meisten üblichen Browser Add-Ons, wie z.B. dieses für Chromium-basierte Browser wie Google Chrome, Microsoft Edge, etc.
Die Nutzung eines DNS-Blockers wie Pi-Hole oder ähnlichen. Durch den Einsatz von schwarzen Listen wird eine Kommunikation zu User Tackern (zumindest zu den Bekannten) und Werbeanzeigen direkt unterbunden.
Die Verwendung eines Netzwerks zum sogenannten "Onion-Routing": Alle Anfragen in das Internet werden hier über einen riesigen Verbund teilnehmender Server gesendet. So dass zum Schluss völlig unklar ist wer den eigentlichen Aufruf nun gestartet hat. Klingt wie aus einem Hacker-Film, ist auch so. Gerade in Ländern mit eingeschränkter Meinungsfreiheit wird auf diese Art kommuniziert. Bekanntester Vertreter ist das Tor Project, welches sogar einen darauf abgestimmten Browser auf Basis von Mozilla Firefox anbietet.
Und eine weitere, noch extremere, Möglichkeit ist die Verwendung eines (virtuellen) Betriebssystems, dass auf Anonymisierung ausgelegt ist. Bekanntester Vertreter: Tails. Berühmt geworden durch Edward Snowden, der es genutzt hat um als externer Dienstleister mit Netzwerkzugriff auf die NSA, allerlei Spionageskandale zu enthüllen.
Das Einzige was noch sicherer ist als diese vier Varianten in Kombination zu nutzen ist: Offline bleiben...

Ok, jetzt bin ich mächtig abgeschweift und beende diesen, hoffentlich wenigstens ein bisschen interessanten Exkurs, um wieder zurück zu Matomo zu kommen.

## Gut gut, wie installiere und benutze ich den Matomo nun?
Bei Matomo gibt es grundsätzlich zwei Arten des Betriebs und eine Weitere die dazwischen liegt.

Die Matomo Cloud - so verdient der Anbieter von Matomo, neben zusätzlichen erwerbsfähigen Plugins, sein Geld. Analog zu Google Analytics, vertraue ich die Daten meiner Benutzer einem Drittanbieter an. Irgendwie ja das, was wir genau nicht wollen.
Integriert als Plugin in ein Web Content Management System (WCMS) - Für Wordpress und andere gibt es eine komplette Installation von Matomo als Plugin, welches sich über den jeweilig verfügbaren Markplatz hinzufügen lässt. Hier haben wir keine Möglichkeit der Trennung von Webseiten-Content und Analytics. Das ist deshalb auch nicht besonders performant und nur für kleinere Installationen geeignet. Außerdem geht das natürlich nur, wenn man eines der unterstützten WCMS einsetzt.
Selbst Hosten - Das ist was ich hier beschreibe und mittels einem von Matomo selbst vorgefertigtem Container auch ganz einfach geht.
Eine "saubere" Möglichkeit Matomo zu installieren ist also über Docker Compose Container. Im Appendix habe ich eine entsprechende Beispieldatei angehangen. Was ich hier abermals unterschlage ist die Konfiguration des Reverse-Proxies samt seiner Konfiguration. Wir gehen einfach davon aus, dass ich für meine Subdomain stats.handtrixxx.com mit dem Nginx Reverse Proxy Manager die benötigten Einstellungen vorgenommen habe und auch von dort aus ein entsprechendes Zertifikat von Let's Encrypt bekommen habe.

Nachdem das alles eingestellt und hochgefahren ist (Dauer ca. 20 Minuten), können wir uns and der Weboberfläche von Matomo für die initiale Konfiguration anmelden. Wie das funktioniert, ist ausführlich und gut hier https://matomo.org/docs/installation/ beschrieben. Dank Docker Container können wir den ersten Teil der Anleitung komplett überspringen und setzten ungefähr an der Stelle "Super User" an.

## Wie binde ich Matomo nun in meine Web-Seite/App ein?
Wie, wenn wir auf https://matomo.org/docs/installation/ ein bisschen gescrollt haben, an gleicher Stelle beschrieben lässt sich nun der Einsatz auf einer ersten Website durchführen. Damit wird auch deutlich, dass mit einer einzelnen Matomo Installationen auch mehrere Websites/Apps getrennt voneinander oder zusammen anbindbar sind.

Zur Einbindung in eine Website lässt sich, wie im Standard vorgeschlagen, entweder ein JavaScript Snippet verwenden oder aber ein "unsichtbares" Bild über den sogenannten Image Tracker einfügen. Auf diese Art lässt sich nun auch einstellen, dass KEIN Cookie beim Anwender zum Tracking genutzt werden soll. Prima!

## Welche Daten bekomme ich?

Ab jetzt werden wir mit folgenden Informationen zu den Besuchern von unserer Website belohnt.

Benutzerbezogen sind das:

Besucher-Log: Zeitpunkt, besuchte Seiten und weitere Informationen aus Besuchersicht.
Besucherkarte in Echtzeit: Eine zoombare Weltkarte, die über Datenpunkte darstellt, von wo aus auf unsere Seiten in den letzten 24h zugegriffen wurde.
Orte: Eine ähnliche Darstellung wie zuvor, aber aufgeteilt in verschiedene Bereiche die die Daten nach unterschiedlichen Dimensionen aufbereitet.
Geräte: Eine nach Endgeräten der Nutzer aufbereite Darstellung
Software: Betriebssystem, Browser und Plugins der Besucher werden hier übersichtlich dargestellt.
Zeiten: Was sind die "Stoßzeiten" zu denen meine Seiten besucht werden? Diese Darstellung liefert die Antwort auf diese Frage.
Benutzer-IDs (steht nur zur Verfügung wenn das Tracking-Cookie aktiviert ist): Eine tiefgreifendere Darstellung auf einzelne Nutzer bezogen.
Benutzerdefinierte Variablen: Im Standard leer, lassen sich hier individuelle Metriken tracken und aufbereiten.
Dashboard: Alle zuvor genannten Informationen übersichtlich und auf das nötigste zusammengefasst
Und auf das Besucherverhalten innerhalb unserer Seiten bezogen sind es:

Seiten: Welche URLs unserer Seite wurden wie oft aufgerufen? Hier die Antwort darauf
Einstiegsseiten: Über welche URL sind die Besucher auf unserer Seite gelandet. Beantwortet die Frage ob mehr z.B. über in Social Media integrierte sogenannte Deep-Links auf Artikel oder die Haupt-/Startseite aufgerufen wird.
Ausstiegsseiten: Nach dem Lesen welches Inhaltes hatten die Besucher genug von unserem Internetauftritt? Gut zu wissen.
Seitentitel (wird nur übergeben, wenn das Tracking Cookie aktiv ist): Anstelle nach URLs eine Auflistung der Besuche nach Seitennamen.
Interne Suche: Mit etwas zusätzlicher Konfiguration lässt sich Matomo auch so konfigurieren eine in die Seiten integrierte Suchfunktionalität und deren Nutzung auszuwerten. Im Standard ist hier erstmal nichts zu sehen.
Ausgehende Verweise, Downloads, Ereignisse und Inhalte: All diese Informationen stehen zur Verfügung, wenn entsprechend konfiguriert. Im Standard auch erstmal "leer".
Engagement: Hier lässt sich einsehen ob und wie oft bestimmte Besucher auf unsere Seiten wiederkehren. Das kann auch nach Besuchsdauer und Anzahl der besuchten Seiten sortiert/gefiltert werden. Das funktioniert natürlich nur, wenn wir das Tracking-Cookie aktivieren, ansonsten ist diese Auswertung nicht besonders hilfreich, da alle Besucher immer "neue" Besucher sind.
Transitionen: Von wo aus kommend wohin bewegend unsere Besucher navigieren wird hier grafisch gut nachvollziehbar angezeigt.
Leistung: Wie lang hat Seite X gebraucht, bis sie beim Benutzer dargestellt wird, und auf welcher technischen Ebene ist die größte Latenz. Wer an sie tiefgreifende Informationen heranwill, kommt ebenfalls nicht um die Aktivierung des Trackings über eine Cookie herum.
Das ist das Wesentliche. Es gibt aber außerdem noch die Bereiche Akquisition, Ecommerce und Ziele mit vielen Unterpunkten, welche einen eigenen Artikel wert wären. Zusätzlich gibt es noch erweiterte Optionen des Trackings, die über einen sogenannten Tag Manager bereitstehen. Neben dem detaillierten Konfigurationsbereich der Web-GUI ist erneut der integrierte Marktplatz für Erweiterungen zu erwähnen. Dort gibt es teils kostenlose, teils kostenpflichtige Ergänzungen, die den Funktionsumfang noch weiter bereichern.

## Wartung
Abschließend ein paar Tipps zur Wartung unserer Installation. Wie ihr, falls ihr selbst eine Installation vorgenommen habt, evtl. schon gesehen habt wird die Verfügbarkeit eines Updates von Matomo direkt in der Web-GUI angezeigt und kann auch von dort aus durchgeführt werden.

Um die Container selbst auch aktuell zu halten, reicht das gelegentliche und auch automatisierbare Ausführen von "docker-compose pull", mit anschließendem "docker-compose up -d" aus dem Stammverzeichnis eurer Docker Compose Umgebung heraus.

Das ist einfach.

## Fazit
Definitiv hat das Schreiben dieses Artikels länger gedauert als eine Matomo Installation. Außerdem konnte ich hoffentlich verdeutlichen, dass es im Vergleich zu anderen Web-Analytic Tools mit Matomo keine wesentlichen Einschränkungen, aber jede Menge Vorteile gibt. Ein kleiner Wehmutstropfen ist vielleicht, dass sich die Art der Reports in der Web-GUI nicht besonders "verbiegen" lässt. Wahrscheinlich wäre das aber auch nur für größere Unternehmen überhaupt wünschenswert. Außerdem gibt es dafür, vielleicht als abschließender Lichtblick, eine großartige API die es uns erlaubt die über Matomo erfassten Daten in einer Applikation unserer Wahl zu verwenden! Siehe: https://developer.matomo.org/api-reference/reporting-api. Eigentlich war der Artikel nur als "kurze" Ergänzung zu einem Vorherigen (Mehr als nur Performance King - Headless CMS, APIs und IoT für die Website) gedacht, bei dem es u.a. um das Aufsetzen einer Website mit einem Headless CMS ging. Es ist aber nun doch "etwas" länger geworden. Ich bitte die vielen Fachbegriffe zu entschuldigen. Aufgrund des heterogenen Zielpublikums ist die Wortwahl nicht immer ganz einfach.

## Appendix
Hier ein Beispiel einer docker-compose.yml zur einfachen Inbetriebnahme von Matomo.


version: '3.3'
services:
    stats-db:
        image: mysql:5.7
        logging:
            options:
              max-size: "10m"
              max-file: "3"
        container_name: stats-db
        command: --max-allowed-packet=64MB
        restart: always
        environment:
            MYSQL_ROOT_PASSWORD: ADMINPASSWORD
            MYSQL_DATABASE: DBNAME
            MYSQL_USER: DBUSER
            MYSQL_PASSWORD: DBUSERPW
        volumes:
            - ./db_data:/var/lib/mysql
    stats-app:
        depends_on:
            - stats-db
        image: matomo:latest
        logging:
            options:
              max-size: "10m"
              max-file: "3"
        restart: always
        networks: 
            - jwilder_default
            - default
        environment:
            MATOMO_DATABASE_HOST: stats-db
            MATOMO_DATABASE_ADAPTER: mysql
            MATOMO_DATABASE_TABLES_PREFIX: matomo_
            MATOMO_DATABASE_USERNAME: DBUSER
            MATOMO_DATABASE_PASSWORD: DBUSERPW
            MATOMO_DATABASE_DBNAME: DBNAME
        volumes:
            - ./data:/var/www/html
volumes:
    db_data: {}
networks:
    jwilder_default:
        external: true
            