Extension for Node.js fs module
=========

##Table of Contents:

	- [getDirs(path, cb)](#getDirs)
	- [getDirsSync(path)](#getDirsSync)
	- [isEmpty(path, cb)](#isEmpty)
	- [isEmptySync(path)](#isEmptySync)

# <a name="getDirs"></a>getDirs(path, cb)

Get all directories from a path

Example:

 ```javascript
var fs = require('extfs');

fs.getDirs('/home/myFolder', function (err, dirs) {
  if (err) {
    throw err;
  }
  console.log(dirs); // Array of directories
});
 ```

# <a name="getDirsSync"></a>getDirsSync(path)

(Synchronously) Get all directories from a path

Example:

```javascript
var fs = require('extfs');

var dirs = fs.getDirsSync('/home/myFolder');
console.log(dirs); // Array of directories
 ```

# <a name="isEmpty"></a>isEmpty(path, cb)

Check if a file or directory is empty.
A file is empty if not exists or not have any content.
A directory is empty if not exists or not have any file inside.

Example:

```javascript
var fs = require('extfs');

fs.isEmpty('/home/myFolder', function (empty) {
  console.log(empty);
});
 ```

# <a name="isEmptySync"></a>isEmptySync(path)

(Synchronously) Check if a file or directory is empty.
A file is empty if not exists or not have any content.
A directory is empty if not exists or not have any file inside.

Example:

```javascript
var fs = require('extfs');

var empty = fs.isEmptySync('/home/myFolder');
console.log(empty);
 ```