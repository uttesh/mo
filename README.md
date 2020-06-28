# mo.js

<p align="center">
<img src="https://raw.githubusercontent.com/uttesh/mo/master/images/logo.png" alt="logo" style="margin-left:2%" width="300"/>
</p>

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://gitHub.com/uttesh/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/uttesh/mo/blob/master/LICENSEs)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/uttesh/mo/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/uttesh/mo/issues/)
[![HitCount](http://hits.dwyl.com/uttesh/mo.svg)](http://hits.dwyl.com/uttesh/mo)
[![NPM](https://nodei.co/npm/mo-clean.png?downloads=true)](https://www.npmjs.com/package/mo-clean)  

<i>mo-clean</i> is cli application to removes the unused node_modules from the system.

<p align="center"><a href="#nastyox"><img src="https://github.com/uttesh/mo/blob/master/images/mo.gif" width="100%"/></a><a href="#uttesh"><img src="https://github.com/uttesh/mo/blob/master/images/dropShadow.png" width="100%"/></a></p><br/>

## What it does?
It identifies the unused node_modules of NodeJS application based on last used by days and provides the details
 1. When the project was last used.
 2. How much memory node_modules taken.
 3. Remove those node_modules from system.

## How to use
Just install the library, don't clone this repository and run! (you can do that but not required)
  
## Installation

Please install the package with the flag '-g'.

```
 npm install -g mo-clean
```

## Execution

Run the below command from the command prompt/terminal

```
> mo
```

that will prompt the user with the below options for the search or delete the node_modules

```
  __  __    ___
 |  \/  |  / _ \
 | |\/| | | | | |
 | |  | | | |_| |  _   _   _
 |_|  |_|  \___/  (_) (_) (_)

? Please select an option:

 1) Search all the node_modules present in the path and show the total memory taken?

 2) Search and delete all the node_modules present in the path?

 Enter the option(1 or 2):
```

after the option selected it will prompt the path for the search or delete

## Search Option

It will search for all the node_modules present under the provided path.

![demo](https://raw.githubusercontent.com/uttesh/mo/master/images/search_screen.png)

## Remove Option

It will search all the node_modules present under the provided path and delete them.

![demo](https://raw.githubusercontent.com/uttesh/mo/master/images/delete_screen.png)
