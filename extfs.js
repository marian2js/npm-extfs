var fs = require('fs');
var path = require('path');
var _ = require('underscore');

var extfs = {};

/**
 * Get all directories
 *
 * @param searchPath
 * @param cb
 */
extfs.getDirs = function (searchPath, cb) {
	fs.readdir(searchPath, function (err, files) {
		if (err) {
			return cb(err);
		}
		var arrDirs = [];
		files.forEach(function (item) {
			var stat;
			try {
				stat = fs.statSync(path.join(searchPath, item));
			}
			catch (e) { }
			if (stat && stat.isDirectory()) {
				arrDirs.push(item);
			}
		});
		return cb(null, arrDirs);
	});
};

/**
 * Get all directories sync
 *
 * @param searchPath
 * @returns {Array}
 */
extfs.getDirsSync = function (searchPath) {
	var files = fs.readdirSync(searchPath);
	var arrDirs = [];
	files.forEach(function (item) {
		var stat;
		try {
			stat = fs.statSync(path.join(searchPath, item));
		}
		catch (e) { }
		if (stat && stat.isDirectory()) {
			arrDirs.push(item);
		}
	});
	return arrDirs;
};

/**
 * Check if a file or directory is empty
 *
 * @param path
 * @param cb
 */
extfs.isEmpty = function (path, cb) {
	fs.stat(path, function (err, stat) {
		if (err) {
			return cb(true);
		}
		if (stat.isDirectory()) {
			fs.readdir(path, function (err, items) {
				if (err) {
					return cb(true);
				}
				cb(!items || !items.length);
			});
		}
		else {
			fs.readFile(path, function (err, data) {
				if (err) {
					cb(true);
				}
				cb(!data || !data.length)
			});
		}
	});
};

/**
 * Check if a file or directory is empty Sync
 *
 * @param path
 * @param cb
 */
extfs.isEmptySync = function (path) {
	var stat = fs.statSync(path);
	if (stat.isDirectory()) {
		var items = fs.readdirSync(path);
		return !items || !items.length;
	}
	else {
		var file = fs.readFileSync(path);
		return !file || !file.length;
	}
};

module.exports = _.extend(fs, extfs);