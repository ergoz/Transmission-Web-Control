#Transmission Web Control (github fork)

## Installation

### Debian

Install Transmission and Transmission Daemon if you haven't yet:

`$ apt-get install transmission transmission-daemon`

Clone git repo, dont forget backup files in : `/usr/share/transmission/web`

`$ git clone git://github.com/barif/Transmission-Web-Control.git /usr/share/transmission/web`

or download latest version from [official source](http://code.google.com/p/transmission-control/downloads/list) and untar to target dir:

`$ wget https://transmission-control.googlecode.com/svn/resouces/transmission-control-full.tar.gz`

`$ tar xvzf transmission-control-full.tar.gz -C /usr/share/transmission/`

Access to web interface.  (Example: http://127.0.0.1:9091/transmission/web/)

Default user and password "transmission" for change edit settings.json:

`$ nano /etc/transmission-daemon/settings.json`

### Other systems

Install [Transmission and Transmission Daemon](http://www.transmissionbt.com/download/)

Download latest version of Transmission Web Control from [official project page](http://code.google.com/p/transmission-control/downloads/list) or [clone git repo](https://github.com/barif/Transmission-Web-Control/archive/master.zip).

Extract to transmission web directory.

Visit web interface. (Example: http://127.0.0.1:9091/transmission/web/)

### SVN trunk

`svn checkout http://transmission-control.googlecode.com/svn/trunk/transmission-control-read-only`

## About

Author: [Ronggang Zhou](http://code.google.com/p/transmission-control/)

### Translatios

Russian: Barif

Spanish: Adrián González

Polish: Daniel Kolek

Hungarian: Swartzy

Romanian: Laurentiu Dinulescu

##Code license

[GNU GPL v3](http://www.gnu.org/licenses/gpl.html)