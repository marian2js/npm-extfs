var expect = require('expect.js');
var path = require('path');
var fs = require('../extfs');

describe('extfs', function () {
  var rootPath = path.join(__dirname, '../');

	it('should return all directories', function (done) {
		fs.getDirs(rootPath, function (err, dirs) {
			expect(dirs).to.be.an(Array);
			expect(dirs.length).to.be.greaterThan(0);
			done();
		});
	});

	it('should return all directories sync', function () {
		var dirs = fs.getDirsSync(rootPath);
		expect(dirs).to.be.an(Array);
		expect(dirs.length > 0).to.be.ok();
	});

	it('should check if a file is empty', function (done) {
		var notEmptyFile = path.join(__dirname, '../README.md');
		var emptyFile = './AN EMPTY FILE';
		fs.isEmpty(notEmptyFile, function (empty) {
			expect(empty).to.be(false);
			fs.isEmpty(emptyFile, function (empty) {
				expect(empty).to.be(true);
				done();
			});
		});
	});

	it('should check if a file is empty sync', function () {
    var notEmptyFile = path.join(__dirname, '../README.md');
		var emptyFile = './AN EMPTY FILE';
		var empty = fs.isEmptySync(notEmptyFile);
		expect(empty).to.be(false);
		empty = fs.isEmptySync(emptyFile);
		expect(empty).to.be(true);
	});

	it('should check if a directory is empty', function (done) {
		var notEmptyDir = __dirname;
		var emptyDir = './AN EMPTY DIR';
		fs.isEmpty(notEmptyDir, function (empty) {
			expect(empty).to.be(false);
			fs.isEmpty(emptyDir, function (empty) {
				expect(empty).to.be(true);
				done();
			})
		});
	});

	it('should check if a directory is empty sync', function () {
		var notEmptyDir = __dirname;
		var emptyDir = './AN EMPTY DIR';
		expect(fs.isEmptySync(notEmptyDir)).to.be(false);
		expect(fs.isEmptySync(emptyDir)).to.be(true);
	});

	it('should extends to fs', function () {
		expect(fs.readdir).to.be.a(Function);
	});
});