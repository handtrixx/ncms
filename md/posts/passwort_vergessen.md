---
{
"title": "Passwort vergessen in Windows 10? (Fast) kein Problem!",
"filename": "passwort_vergessen.md",
"imgurl":"finger.png",
"keywords": ["MacPC"],
"language": "de",
"date":"2022-01-06",
"published":true,
"excerpt":"In dieser Anleitung beschreibe ich in Kürze, wie man ein lokales Administratorkonto auch in der aktuellsten Windows 10 Version zurücksetzen kann."
}
---
## Vorwort
In einer besonders unglücklichen Situation bin ich kürzlich von einem Freund kontaktiert worden: Er hat sein Windows 10 Anmeldepasswort unwiederbringlich vergessen.
Also auf zu Google und siehe da; es gibt unzählige Lösungsvorschläge um ein Win10 Passwort zurückzusetzen. Dann aber die Ernüchterung: Microsoft hat schon nachgebessert und alle Tricks, die ich gefunden habe, funktionieren leider nicht mehr. Was nun?

Zeit für Eigeninitative :-) In dieser Anleitung beschreibe ich in Kürze, wie man ein Administratorkonto, auch in der aktuellsten Windows 10 Version, zurücksetzen kann.

So viel im Voraus: Microsoft muss hier weiter nachbessern, denn die beschriebene Methode kann dazu genutzt werden administrativen Zugriff auf jegliche Win10 PCs zu erlangen. Einzige Vorraussetzung ist der physische Zugriff auf den Rechner.


## Vorbereitung
Bildschirmfoto 2022-01-06 um 19.28.33.png

Mein Freund hat mir den betroffenen Computer vorbeigebracht, also hatte ich direkten Zugriff auf den Rechner.
Das Benutzerkonto auf das er nicht mehr zugreifen konnte, war ein lokales Konto.

Hinweis: Für ein Benutzerkonto, dass mit der Microsoft Cloud verknüpft ist, funktioniert diese Anleitung nur teilweise - Dort ist das zürücksetzen des Passworts aber auch kein Problem und kann von einem anderen Endgerät aus, Online erledigt werden.

Außerdem habe ich mir ein Windows 10 Installationsmedium auf einem USB-Stick erzeugt, weil ich während der ersten Recherechen darauf gestoßen bin, dass das erforderlich ist. Den offiziellen Windows 10 Download findet man unter in den Quellen am Ende des Artikels. Zum erstellen des Sticks brauchen wir natürlich irgendwo einen zweiten Rechner auf den wir Zugriff haben. Die heruntergeladene ISO Datei lässt sich je nach Betriebssystem unterschiedlich auf den Stick bringen. Google hilft.

## Vorgehensweise
Windows-Setup-Screen.png Untitled-2021-02-03T145912.webp restart01.webp restart02.webp restart03.webp restart04.webp restart05.webp netuser.webp utilman2.webp
Folgende Schritt-für-Schritt Anleitung umreißt die als funktionierend gestestete Vorgehensweise um das Passwort eines lokalen Windows 10 Benutzers zurückzusetzen.

Zunächst booten wir von unserem zuvor erzeugten Bootstick.
Im ersten Dialogfenster der Sprachauswahl etc. drücken wir gleichzeitig die SHIFT + F10 Tasten.
In der daraufhin erscheinenden Kommandozeile (oha; dass dürfte doch eigentlich gar nicht funktionieren), wechseln wir auf die Partition unserer lokalen Windows 10 Installation, also z.B. mit den Befehl "C:".
Nun "hangeln" wir uns ins lokale Systemverzeichnis. Das geht z.B. mit den Befehlen: "cd Windows" Enter Taste, dann "cd system32" Enter Taste.
Jetzt erstellen wir unser "magisches Tor" um später, beim normalen Hochfahren, ebenfalls in die Kommandozeile wechseln zu können. Mit "cp utilman.exe utilman_old.exe" sichern wir zunächst den Eingabehilfeassistenten um ihn später wiederherstellen zu können.
Mit "copy cmd.exe utilman.exe" erzeugen wir eine Kopie des Kommandzeilenprogramms unter dem Namen des Eingabehilfeassistenten.
Das war der erste Streich. Wir können nun die Windows Installationsroutine schließen und den Rechner wieder normal hochfahren.
Wir müssen am Anmeldebildschirm einen erneuten Reboot im abgesicherten Modus herbeiführen, da zumindest mir, sonst Aufrufe der Kommandozeile blockiert wurden (vermutlich vom im Hintergrund laufenden Systemschutz-Program...). Also die "SHIFT" Taste gedrückt halten, unten Rechts auf das Powersymbol drücken und Neustart auswählen.
Im nach kurzer Zeit erscheinenden Zwischendialog wählen wir "Advanced Options" bzw. "Erweiterte Optionen", und dann "Startup Settings" bzw. "Starteinstellungen". Nun auf "Restart" bzw. "Neustart" klicken. (Sorry, habe gerade nur Englische Screenshots)
Sobald der Rechner wieder oben ist, drücken wir die Taste 6 um den abgesicherten Modus mit Kommandzeile zu starten.
Leider startet sich die Kommandozeile nicht direkt, da wir zunächst unser Passwort eingeben sollen (haha), aber unser Trick den wir durch Schritt 6 ermöglicht haben, kann nun ausgeführt werden: Wir klicken auf das Symbol für die Eingabehilfe (das zweite Symbol rechts unten) und Voilà: Die Kommandozeile öffnet sich, und dieses mal mit vollen Berechtigungen!
Durch Eingabe des Befehls "net user", bekommen wir eine Liste aller lokalen Benutzerkonten angzeigt. Da fehlt mir anscheinend das Know-How, aber das Benutzerkonto um das es mir eigentlich geht, wird gar nicht angzeigt?! Macht nichts: Wir reaktivieren einfach das vorhandene "Administrator" Benutzerkonto und arbeiten mit diesem weiter. Wie? nächster Schritt:
Der Befehl "net user Administrator /active:yes" aktiviert das Konto und der Befehl "net user Administrator PASSWORD" setzt das Passwort PASSWORD für diesen. (mit angepassten Befehlen lässt sich so natürlich auch ein komplett neuer User als Admin einrichten, falls der User "Administrator" nicht verfügbar ist.)
Weil es so schön ist: Zeit für einen Reboot
Im Anmeldebildschirm unten links sehen wir nun mehrere Benutzer zur Auswahl, und eben auch den "Administrator" den wir soeben aktiviert haben. Auf diesen klicken wir jetzt und melden uns dann als dieser User am System, mit dem zuvor gestetzten Passwort, an.
Nachdem wir die Windows "Ersteinrichtungshölle" hinter uns gelassen haben, sehen wir jetzt einen mehr oder weniger augeräumten Desktop und haben uns erfolgreich mit Adminstratorberechtigungen angemeldet!
Jetzt können wir über die Systemsteuerung -> Benutzer -> Andere Konten das Passwort unseres eigentlichen Benutzer komfortabel ändern und ja; den PC neu starten.
Fertig: Jetzt können wir im Anmeldebildschirm von Windows wieder unseren eigentlichen Benutzer auswählen und uns mit dem neu gesetzten Passwort anmelden.
Aufräumen
Unsere gesetzten Spuren machen wir über folgende Befehle in der Windows Kommandozeile wieder rückgängig:

"net user administrator /active:no" - Wir deaktivieren den "Administrator" Benutzer wieder, brauchen wir nun ja nicht mehr.
"C:", "cd Windows", "cd system32", "del utilman.exe", "copy utilman_old.exe utilman.exe" - stell die Systedateien wieder auf ihren ursprünglichen Zustand.
Fazit
Um dem gestellten Problem von vornherein aus dem Wege zu gehen, könnte man z.B. ein Microsoft Account (wenn man dem Unternehmen traut) erstellen und mit dem Konto verknüpfen. Dann ist das zurücksetzen evtl. Online möglich, insofern der betroffene PC eine Internetverbindung hat.

Auch kann man mit kürzeren PINs arbeiten, die Microsoft seit geraumer Zeit für das Anmelden, neben der weiteren Option eines Erinnerungssatzes, bereitstellt.

Nichtsdestotrotz (ja, das schreibt sich wohl so): Mit der beschriebenen Vorgehensweise lässt sich nicht nur ein vergessenes Windows Passwort zurücksetzen, sondern auch Zugriff auf jeden Windows 10 PC, auf den physischer Zugriff besteht, beschaffen. Eine eklatante Sicherheitslücke die in anderen Betriebssystemen wie Linux und MacOS besser "gestopft" ist.

Naja, meinem Freund konnte ich so jedenfalls helfen :-)

## Nachtrag: Wie kann ich mich vor so einem "Angriff" schützen?
Eigentlich dürfte das beschriebene Szenario überhaupt nicht funktionieren, weil sich so jeder administrativen Zugang auf einen Windows PC verschaffen kann.

Ursache ist eine Verkettung von Umständen, die uns diese Sicherheitslücke öffnet. Um solch einen Angriff zu verhindern reicht es nicht aus, einfach auf ein Micorosoft Online Konto zu wechseln. Es kann sich ja trotzdem jeder über ein neues Benutzerkonto administrativen Systemzugriff verschaffen, sobald sie/er physischen Zugriff auf den Rechner hat.

Einen solchen Angriff zu verhindern ist nicht trivial, denn folgendes müsste in Kombination gemacht werden:

Setzen eines Passworts auf BIOS Ebene: Verhindert den Start eines anderen Bootmediums und ähnliches. Das werden viele aus Bequemlichkeit nicht machen wollen.
Aktivieren der Festplattenverschlüssung, z.B. mit Bitlocker: Sonst könnte man die Festplatte einfach aus dem Rechner herausschrauben/löten und den Inhalt woanders auslesen. Kontra: Das macht den Windows PC (noch) langsamer.
Microsoft selbst könnte wiederum nachbessern indem Sie in Windows:

den Zugriff auf die Kommandozeile während der Installationroutine unterbinden. Vermutlich ist das nicht so einfach umzusetzen, da die Kommandozeile hier und da ebenfalls für Spezialfälle benötigt werden könnte.
die Signaturen von Systemdateien, die vor dem erfolgreichen Login ausgeführt werden, prüfen. Das sollte sich auf jeden Fall umsetzen lassen und es ist verwunderlich das Microsoft das nicht schon lange tut. Unter Linux gibt es dafür schon seit Jahren Implementierungen wie z.B. SELinux.

## Quellen
https://adamtheautomator.com/reset-windows-10-password-command-prompt/ - funktionierte nicht, aber nützliche Tipps zum Prozessversändnis
https://www.avast.com/c-recover-windows-password#gref - funktionierte nicht, aber ebenso nützliche Tipps zum Prozessversändnis
https://www.makeuseof.com/tag/3-ways-to-reset-the-forgotten-windows-administrator-password/ - funktionierte auch nicht, noch mehr nützliche Tipps zum Prozessversändnis
https://www.sony.com/electronics/support/articles/00123047 - wie man einen deaktivierten Windows Account aus der Kommandzeile heraus aktiviert
https://www.microsoft.com/en-us/software-download/windows10ISO - Windows 10 ISO Download


