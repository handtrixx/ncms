---
{
"title": "Docker und Docker Compose installieren",
"filename": "Docker_und_Docker_Compose_installieren.md",
"imgurl":"docker.png",
"keywords": ["IoT"],
"language": "de",
"date":"2021-12-28",
"published":true,
"excerpt":"In diesem Artikel beschreibe ich wie Docker und das zusätzlich hilfreiche Docker Compose installiert werden."
}
---
Docker hilft uns durch sogenannte Container dabei die technische Serverinfrastruktur, die für verschiedenste Projekte benötigt wird, schnell und vom Basissystem isoliert aufzusetzen. Außerdem veringern wir durch den Einsatz von Docker den Wartungsaufwand z.B. für Systemaktualsierungen und Backups. Tausende von Projekten stehen vorgefertigt zur Verfügung, die mit einem einfachen Kommando nur gestartet werden können. In diesem Artikel beschreibe ich wie Docker und das zusätzlich hilfreiche Docker Compose installiert werden. Docker Compose hilft uns dabei ganze Containerlandschaften zur orchestrieren. Ein Beispiel: Bei der Installation von WordPress über Docker werden mehrere Container benötigt, einer für die App und einer für die Datenbank. Wenn wir diese nun alle einzeln starten und evtl. dabei noch bestimmte Parameter übergeben wollen, wird es schnell uünbersichtlich. Mit Compose können wir alle benötigten Parameter und Container in einer strukturierten Datei zusammenfassen und diese Umgebung mit einfachen Befehlen steuern.

## Vorraussetzungen
Wir gehen davon aus, dass wir ein Linuxsystem auf Basis von Debian als Betriebssystem nutzen. Das können z.B. das Raspberry Pi OS, Ubuntu oder eine der vielen anderen Varianten davon sein. Grunsätzlich funktioniert Docker aber auch unter allen anderen Linux Systemen und auch unter Windows oder MacOS.

Am Besten handelt es sich um frisch installiertes System auf dem sonst nichts weiter läuft. Das ist aber nicht zwingend erforderlich. Wir sind entweder direkt über einen Terminal oder via SSH am Server als unser Benutzer (nicht root) angemeldet.

## Installation von Docker
Wir wollen immer die aktuellste Version nutzen, weshalb wir erstmal alle evtl. vorhandenen Komponenten löschen:

```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

Nun aktualisieren wir die Paketbibliothek und installieren einige Basiskomponenten.

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
```

Wahrscheinlich bekommen wir, nach dem senden des zweiten Befehls, die Info dass einige der Komponenten bereits installiert waren. Das ist je nach Betriebssystem anders und normal.

Mit den folgenden zwei Befehlen fügen wir die Quellen von Docker und den zugehörigen Vertrauensschlüssel unserer Softwarebibliothek hinzu:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Jetzt sind wir soweit um endlich zu installieren:

```
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Zum Testen ob alles funktioniert hat, können wir nun folgenden Befehl ausprobieren und damit auch gleich unsereren ersten Container kurz starten:

```
sudo docker run hello-world
```

Konfiguration von Docker
Folgende Schritte sind alle optional, sollen uns aber das Leben etwas vereinfachen. Zunächst stellen wir sicher, dass während der Installation eine Benutzergruppe "Docker" angelegt wurde:

```
sudo groupadd docker
```

Nun fügen wir die Mitgliedschaft dieser Gruppe, unsere(n) Benutzer hinzu. Z.B. den aktuell angemeldeten Benutzer mit:

```
sudo usermod -aG docker $USER
```

Außerdem wollen wir, dass der Docker Dienst bei jedem Systemstart automatisch als Hintergrunddienst geladen wird, damit wir nicht jedes mal alle Container wieder von Hand starten müssen.

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Übrigens: Docker merkt sich ob ein Container vor dem Reboot gestartet war oder nicht, und reagiert dementsprechend von selbst.

Am Besten starten wir das System jetzt einmal neu und sollten dann in der Lage sein Container auch ohne "sudo" Befehl mit unseren eigengen Benutzerrechten zu starten.

## Installation von Docker Compose
Die Installation und Konfiguration von Docker Compose ist mit wenigen Befehlen schnell erledigt:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Abschließend einmal ab- und wieder anmelden oder das System einfach neustarten. Dann können wir mit folgendem Befehl testen, ob die Installation funktioniert hat:

```
docker-compose --version
```

## Verwendung von Docker (Compose) und nützliche Befehle