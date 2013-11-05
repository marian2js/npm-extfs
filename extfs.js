var fs = require('fs');
var _ = require('underscore');
var extfs = {};

/**
 * Get all directories
 *
 * @param path
 * @param cb
 */
extfs.getDirs = function (path, cb) {
	fs.readdir(path, function (err, files) {
		if (err) {
			return cb(err);
		}
		var arrDirs = [];
		files.forEach(function (item) {
			var stat;
			try {
				stat = fs.statSync(item);
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
 * @param path
 * @returns {Array}
 */
extfs.getDirsSync = function (path) {
	var files = fs.readdirSync(path);
	var arrDirs = [];
	files.forEach(function (item) {
		var stat;
		try {
			stat = fs.statSync(item);
		}
		catch (e) { }
		if (stat && stat.isDirectory()) {
			arrDirs.push(item);
		}
	});
	return arrDirs;
};

module.exports = _.extend(fs, extfs);