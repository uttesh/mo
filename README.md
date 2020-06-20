# mo.js

<p align="center">
<img src="https://raw.githubusercontent.com/uttesh/mo/master/images/logo.png" alt="logo" style="margin-left:2%" width="300"/>
</p>

<i>mo-clean</i> is cli application to removes the unused node_modules from the system.

Its an 8 hours hackathon development on the weekend (20th June 2020)!!! to challenging myself to write a simple application from scratch to live.

A little history on this utility app and the name is, I liked the character <b>'MO'</b> in the movie <b><i>'WALL E'</i></b>, MO is a simple cleaning robot in the movie. This 'MO' will clean the unused/practiced project node_modules.

My system was always complaining about low memory, most of the time node_modules of the unused/praticed application taken more memory. To clean that I wrote this simple JS CLI.

## Installation

Please install the package with flag '-g'.

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

? Please select a option:

 1) Search all the node_modules present in the path and show the total memory taken?

 2) Search and delete all the node_modules present in the path?

 Enter the option(1 or 2):
```

after the option selected it will prompt the path for the search or delete

## Search Option

It will search all the node_modules present under the provided path.

![demo](https://raw.githubusercontent.com/uttesh/mo/master/images/search_screen.png)

## Remove Option

It will search all the node_modules present under the provided path and delete them.

![demo](https://raw.githubusercontent.com/uttesh/mo/master/images/delete_screen.png)

# License

The MIT License

Copyright (c) 2020 Uttesh Kumar T.H. http://www.uttesh.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
