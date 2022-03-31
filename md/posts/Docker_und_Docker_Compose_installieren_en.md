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
By the utilization of containers, Docker helps us to provide infrastructure and software required for hundereds of projects of any kind.
The isolated systems created that way are not only more simple to setup and create, but also easier to backup and much more flexible. 
There are thousands of premade Docker images availabe, just waiting to be started by a simple command of you.
My short article desribes how to install Docker and Docker Compose in a Debian based Linux environment like we have it on a Raspberry Pi or a real server system.
Docker Compose helps us in so called orchestration of multiple services into easy to maintain `.yaml` text files.

## Basics
As mentioned we assume we have a Debian based operating system, like Ubuntu or Raspberry Pi OS installed on our host machine.
For sure docker is fine on Windows, MacOS or any other Unix based operating system as well, but there the installation and configuration can be slightly different. 

In best case we have a fresh installation of our system with no other additional software installed. That's not a basic requirement, but keeps things more simple. Additionally we asume we have access to the terminal of our host machine, most likely via ssh session.

## Installation of Docker and Docker Compose 

To ensure we install the latest version we follow the official installation guidline of the docker website. 

1. Install Docker: https://docs.docker.com/engine/install/debian/
2. Configuration for comfortable usage of Docker: https://docs.docker.com/engine/install/linux-postinstall/ 
3. Installation of Docker Compose: https://docs.docker.com/compose/install/ 

It looks like much more to do then there actually is. It's actually not more then a copy & paste operation in 3-4 steps.
To keep it clean, after installation of the components a reboot is recommended.

## Simple Orchestration with Docker Compose

Composing with Docker-Composses starts by building up a single file called `docker-compose.yml`.
It's best not to place that file just somewhere but in a structured way, since we could come up with many of them. That's why it's called orchestration.
An example: 
- In directory `/opt/` we create a subfolder `/opt/docker/` . 
- And there we create more subfolders for our projects or subdomains. Let's say we make a start with `/opt/docker/wordpress/`. 
- And in this subfolder we finally place our `/opt/docker/wordpress/docker-compose.yml` .
- If we stick with the example of a Wordpress installation, there is an example for the content of the `docker-compose.yml` available at https://hub.docker.com/_/wordpress . 

We extend/change this example by some additional parameters for permament usage and a bit more of comfort in operation. D
Finally it could look like the following example (consider to keep the tab spaces, since they are mandatory in a .yml file):
````
version: '3.1'
services:
  wordpress-app:
    container_name: wordpress-app
    hostname: wordpress-app
    image: wordpress
    restart: always
    ports:
      - 8080:80
    environment:
      WORDPRESS_DB_HOST: wordpress-db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
      TZ: Europe/Berlin
    volumes:
      - ./wordpress:/var/www/html
    logging:
      options:
        max-size: "10m"
        max-file: "3"

  wordpress-db:
    container_name: wordpress-db
    hostname: wordpress-db
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'      
      TZ: Europe/Berlin
    volumes:
      - ./db:/var/lib/mysql
    logging:
      options:
        max-size: "10m"
        max-file: "3"
````
Some description of what we did here
- service, container_name, hostname: just the service name is mandatory, but we set the other 2 parameters for easier access and better overview.
- image: Fixes the application we want to run. Without additional changes we can use any public image from the Docker Hub https://hub.docker.com/search?q=%20%20 
- restart: always means, the container will be restarted in any kind of eventual error.
- environment: contains any kind of variable passed to the container. Can be slightly different depending on the the type of application we run.
- volumes: Our persistent data, we want always to keep and maybe consider for backup. By the leading `./` we say it's a subfolder of the current directory. If that directory doesn't exist, docker would create it on first start. But it's better to create those directories in advance to avoid file system permissions issues and similar.
- logging: Some apps tend to write a lot of operations into the log. By this parameter we limit this to 3 files each with a size of 10MB. Once that storage is completly used, the oldest entry will be overwritten and so on.
- ports: required in case we do not utilize a reverse proxy. 8080:80 means that the port 80 of the application is made availabe at port 8080 of our host machine. So, if you want to open you wordpress application after start you would open: http://HOST:8080  in your clients browser. By the way: for internal communication between the containers, no additional ports need to be shared. They run in the same hidden networrk, which increases security by making only public what we want to have public.

## Usefull commands
All the following commands should be started from the directory our `docker-compose.yml`file is stored at. By `docker-compose up -d` we will start our first application. It will start both defined services/containers, while `docker-compose down` wil shut all of them down again. By `docker-compose pull`we would provoke to download (pull) the newest version of our images from Docker Hub. To make this update reflected in our environment we just run another `docker-compose up -d` . The data at the volumes we defined before will not just be overwritten by this. Our wordpress example is a bit special about this since its actually refering to a internal folder of the container, which actually get's updated, too. Still your custom data stays "alive". Also because of that, updates eventually could fail, especially if there are major changes in the version of our services. There are different ways to handle this, which I will describe another day.