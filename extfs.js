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

module.exports = _.extend(fs, extfs);