---
{
"title": "Install Docker and Docker Compose",
"filename": "Docker_und_Docker_Compose_installieren_en.md",
"imgurl":"docker.png",
"keywords": ["IoT"],
"language": "en",
"date":"2021-12-28",
"published":true,
"excerpt":"How-To install Docker and Docker Compose to run your own virtual datacenter on a raspberry, PC or server."
}
---
By the utilization of containers Docker helps us to provide infrastructure and software required for hundereds of projects of any kind.
The isolated systems created that way are not only more simple to setup and create but also easier to backup and much more flexible. 
There are thousands of premade Docker images availabe, just waiting to be started by a simple command of you.
My short article desribes how to install Docker and Docker Compose in a Linux environment like we have it on a Raspberry Pi or a real server system.
Docker Compose helps us in so called orchestration of multiple services into easy to maintain `.yaml` text files.

## Assumptions
We assume we have a Debian based Linux system running, like a PC/Server with Ubuntu oder the Raspi with Raspberry Pi OS.
For sure docker works perfectly with Windows, Mac OS or any other Linux OS as well, that's just not part of this short article.

Am Besten handelt es sich um frisch installiertes System auf dem sonst nichts weiter läuft. Das ist aber nicht zwingend erforderlich. Wir sind entweder direkt über einen Terminal oder via SSH am Server als unser Benutzer (nicht root) angemeldet.

## Installation of Docker
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