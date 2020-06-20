const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");
const async = require("async");
const fs = require("fs");
const path = require("path");
const clui = require("clui");
const clc = require("cli-color");
const os = require("os");
const { search } = require("cli-color/beep");

/**
 * Get the size
 */

const getSize = async (item, callback) => {
  let totalSize = 0;

  fs.lstat(item, (err, stats) => {
    if (err) return callback(err);

    if (stats.isDirectory()) {
      fs.readdir(item, (err, list) => {
        if (err) return callback(err);

        async.each(
          list,
          (listItem, cb) => {
            getSize(path.join(item, listItem), (err, size) => {
              totalSize += size;
              cb();
            });
          },
          (err) => {
            if (err) return callback(err);

            callback(null, totalSize);
          }
        );
      });
    } else {
      process.nextTick(function () {
        callback(null, (totalSize += stats.size));
      });
    }
  });
};

formatBytes = async (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

generatePadding = (size) => {
  let space = " ";
  for (let z = 0; z < size; z++) {
    space = space + " ";
  }
  return space;
};

generateline = (size) => {
  let line = "-";
  for (let z = 0; z < size; z++) {
    line = line + "-";
  }
  return line;
};

printGenericTable = (data) => {
  let padding = generatePadding(100 - data[0].length);
  let lineData = " | " + data[0] + padding + "| " + data[1];
  let line = generateline(lineData.length);
  console.log(lineData);
  console.log(line);
};

Line = clui.Line;
printTableRow = (data) => {
  let tempValue = data[1].split(" ")[0];
  let value = tempValue > 200 ? chalk.red(data[1]) : chalk.green(data[1]);
  new Line().padding(2).column(data[0], 80).column(value, 20).fill().output();
};

processPath = async (paths) => {
  var uniqueItems = Array.from(new Set(paths));
  console.log("total items: ", uniqueItems.length);
  for (let i = 0; i < uniqueItems.length; i++) {
    let path = uniqueItems[i];
    if (path && path.length > 0) {
      await getPathSize(path);
    }
  }
};

getPathSize = async (path) => {
  await getSize(path, async (err, totalSize) => {
    if (!err) {
      let temparray = [];
      temparray.push(path);
      let size = await formatBytes(totalSize);
      temparray.push(size);
      printTableRow(temparray);
      // table.push(temparray);
      //console.log("path: ", path, "size: ", size);
    } else {
      console.err(err);
    }
  });
};

clear();

console.log(
  chalk.yellow(figlet.textSync("MO...", { horizontalLayout: "full" }))
);

const questions = [
  {
    name: "option",
    type: "input",
    message:
      "Please select option: \n 1) Search all the node_module present in the path and total memory take? \n 2) Search and delete the node_modules? \n Enter the option: ",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please select the option 1 or 2 and provide the proper path";
      }
    },
  },
  {
    name: "path",
    type: "input",
    message: "Please provide the root path: \n",
    validate: function (value) {
      if (value.length) {
        return true;
      } else {
        return "Please enter the path..";
      }
    },
  },
];

getSearchCommand = () => {
  let command = "";
  if (os.platform() === "win32") {
    command = `FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" echo %d `;
  } else {
    command = `find . -name "node_modules" -type d -prune -print | xargs du -chs`;
  }
  return command;
};

getRemoveCommand = () => {
  let command = "";
  if (os.platform() === "win32") {
    command = `FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rd /s /q "%d" `;
  } else {
    command = `find . -name "node_modules" -type d -prune -print -exec rm -rf '{}' \;`;
  }
  return command;
};

searchfn = (path) => {
  const exec = require("child_process").exec;
  let command = getSearchCommand();
  let paths = [];
  exec(command, { cwd: path }, async (error, stdout, stderr) => {
    stdout.split("\n").forEach((item) => {
      let line = item.substring(0, item.indexOf("node_modules") - 1);
      paths.push(line);
    });
    if (error | stderr) {
      console.err(error | stderr);
    }
    await processPath(paths);
  });
};

deletefn = (path) => {
  const exec = require("child_process").exec;
  let command = getRemoveCommand();
  exec(command, { cwd: path }, async (error, stdout, stderr) => {
    console.log("Deleted Successully: ", stdout);
    if (error | stderr) {
      console.err(error | stderr);
    }
  });
};

const run = async () => {
  const selection = await inquirer.prompt(questions);
  console.log("selection: ", selection);
  if (selection.option === "1") {
    searchfn(selection.path);
  }
  if (selection.option === "2") {
    deletefn(selection.path);
  }
};

run();
