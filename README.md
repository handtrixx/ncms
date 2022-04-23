# nCMS - Niklas Stephan's Content Managment System

or Node-Red Content Managment System, or Not-Another Content Management System.

![ncms_logo](https://niklas-stephan.de/media/full/ncms/ncms_logo.webp)

The flat-file and Node Red based WCMS created for Niklas Stephan's Website. 
It also is a static site generator to provide frontend files to a a Webserver of your choice, e.g. nginx.

Link Frontend: https://niklas-stephan.de

Link Github: https://github.com/handtrixx/ncms 

## Installation
There is no one click installation (version 1.0) available and maybe there never will be.
Instead you setup Node-Red, in best case in a docker environment (example: docker-compose.yml in /backend).
Then you import the flow which also can be found at /backend/flows.json.

## Version
version 0.67

## Version Log & Features Included

version 0.67
- Optimized Search & Error Page Handling
- Translated/Migrated content from Old Website

version 0.65
- Type Ahead Search and integrated search in 404 page.

version 0.64
- Included docker compose file at /src/backend/docker-compose.yml as an example config

version 0.62
- Included automated copy of latest Node-Red flow to /src/backend/flows.json 

version 0.61
- Translataion of categories by id and new langval data attribute

version 0.60
- Fixing bug images not shown at social media share

version 0.59
- Deployed to Production
- Migrate posts from old website

version 0.58
- Ignore non-image files for media conversion, copy them instead
- Asynchronious media file conversion to speed up deployment

version 0.56
- Advanced Media Manager: auto image conversion to webp and thumbnail generation

version 0.53
- Links in Markup automatically open on new tab

version 0.52
- Show create/modify date on each post page
- Integrate create/modify date of post to blog page

version 0.50
- Rework Deployment for simplification and code cleanup by including node.js's fs and fs-extra

version 0.46
- Get rid of bash script for file operations in favor of node.js's fs and fs-extra

version 0.45
- compilation info from textfile to console log

version 0.44
- Exclude media files from Git repository
- Sidebar Navigation on index for md+ devices

version 0.42
- From parallel to serial deployment for better control

version 0.41
- ~~Deployment of static files to simple web server~~

version 0.40
- Automatic Link generation for images in posts

version 0.39
- animated backgrounds on index page

version 0.38
- GDPR Cookie & tracking mgmt.

version 0.37
- Source Code versioning via github integration

version 0.36
- comments support via self hosted remark42

version 0.35
- ~~comments support via Disqus integration~~

version 0.34
- Final Post Layout

version 0.33
- SEO and page meta integration
- favicon

version 0.31
- full-text search with local index

version 0.30
- import of posts in markdown and static page generation

version 0.29
- Multilanguage support for static pages

version 0.28
- Matomo WebAnalytics integration
- WebHook to start Page Deployment

version 0.26
- Simple Media Manager

version 0.25
- No/Remove any usage of any JS Framework
- Nerdish Console Log output

version 0.23
- 404 Error handling

version 0.22
- Filter unpublished Posts in Backend
- Blog page with Isotope filters and masonry Look

version 0.20
- Dynamic sitemap.xml and robots.txt by compilation
- ~~Bash script for stable file system based operations~~

version 0.15
- Keep each static page small
- Automatic Scrollspy in Posts

version 0.13
- More Nice Background Colors
- More Translations

version 0.12
- unify backend

version 0.04
- Nod-Red Backend

version 0.03
- Frontend Functions

version 0.02
- Custom CSS

version 0.01
- Prototype

## Todo's
- Optional CMS backend for frontend editing
- More Dynamic Page Titles
