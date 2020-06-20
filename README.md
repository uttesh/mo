# mo.js

mo-clean is cli application to removes the unused node_modules from the system

<p align="center">
<img src="https://raw.githubusercontent.com/uttesh/mo/master/images/m-o.png" alt="logo" style="margin-left:20%" width="300"/>
</p>

### installation

Please install the package with flag '-g'.

```
 npm install -g mo-clean
```

### Execution

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

### Search Option

It will search all the node_modules present under the provided path.
![demo](https://raw.githubusercontent.com/uttesh/mo/master/images/search_screen.png)
