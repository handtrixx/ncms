---
{
"title": "Scientific researches at home with BOINC",
"filename": "Rechenkraft_fuer_die_Wissenschaft_en.md",
"imgurl":"boinc.png",
"keywords": ["IoT"],
"language": "en",
"date":"2021-01-31",
"published":true,
"excerpt":"You are a big fan of science? You have a computer or a server? Then feel free to contribute in one or many projects just by donating some of yours PC's CPU power."
}
---
You are a big fan of science? You have a computer or a server? Then feel free to contribute in one or many projects just by donating some of yours PC's CPU power. The open source tool BOINC will make that very easy for you. Basically you just start the tool, define to which projects you want to contribute and set how much of your PC's power you want to "donate".

![certificate](/media/boinc/boinc_certificate_2022-04-01.png)

## Volunteer computing?
> Volunteer computing is a type of distributed computing in which people donate their computers' unused resources to a research-oriented project. The fundamental idea behind it is that a modern desktop computer is sufficiently powerful to perform billions of operations a second, but for most users only between 10-15% of its capacity is used. Typical uses like basic word processing or web browsing leave the computer mostly idle.

Source: Wikipedia, 2022-04-02

## Attention
If you plan to use BOINC or any other tool for volunteer computing you should consider that an extended utilization of your CPU can reduce it's life span and also can increase it's eneregy consumption.
Additionally it's maybe not the best idea to run BOINC and similar on your cloud computing instanace at MS Azure or AWS, since there, in most cases, you are charged by the consumption of CPU capacity.

## What is BOINC?
BOINC provides you the chance to contribute to a selection of ca. 30 scientific projects by your CPU's and/or GPU's power and includes that into one single User interface. More details about the different projects can be found here: https://boinc.berkeley.edu/projects.php . Additionally the GUI also provides options for configuration and statistics.

![screenshot](/media/boinc/boinc_screenshot.png)


## How to start?
There are two basic ways to run BOINC; Either on your Desktop for example as a screensaver application, or on a server system in 24/7 mode. Personally I prefer the second option, by limiting the proided resources to an amount that does not cause issues of any kind.

If you like to run BOIN on your PC as a screensaver you can download the tool at: https://boinc.berkeley.edu/download.php .

In case you prefere to run it on your server system, you can find an example of the content for a `docker-compose.yml` file here:

```
version: "2.1"
services:
  boinc:
    image: lscr.io/linuxserver/boinc
    hostname: "boinc"
    container_name: boinc
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Berlin
      - PASSWORD=xxx
    volumes:
      - ./config:/config
    restart: unless-stopped
    #ports:
    #  - 8080:8080
    logging:
      options:
        max-size: "10m"
        max-file: "3"
    networks:
      - dmz
    deploy:
      resources:
        limits:
          cpus: 1.00
          memory: 2048M
networks:
  dmz:
    external: true
````

The paramaters below `resources:` are optional, since you could also use the settings dialogue inside the tool to restrict available resources. I just feel more comfortable by doing it that way. The value `cpus: 1.00` is equal to 1 CPU-Thread.
If you do not use an reverse proxy the parameter for ports and it's value need to be uncommented to be able to connect to the application.
Consider to set a strong password which then is used at the virtual desktop in your clients browser session. The standard username is `abc` .

## Conclusion
After starting and configuration of the tool and selecting one or more projects, nothing exiting will happen anymore here.  
You can check your current amount of contribution either on the projects website(s) or partly in BOINC itself.
The generation of the certificate can also be startet at BOINC our your projects website, if you like to do that as well.

Very straight forward research with BOING, enjoy!