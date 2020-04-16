# This file basically contains code for the debugger in node.js

> How to use debugger?

```javascript
node inspect filename //here it will start your debugger
```
//Immediately you will move to the debug mode

```javascript
>debug
```
//you can add debugger in your own commands 

```javascript
var conatiner = {
    name : "recentone"
}

container.years = 2;
debugger;
container.name ="karishma";
console.log(container);
```

Using debugger we can break the commands 

>we can use

* next
  //get the next command
* cont
  //continue with the program.

  //you can also goto repl mode
  with the repl you can edit the program and play around your code.