var expect = require('expect.js');
var fs = require('../extfs');

describe('extfs', function () {
	it('should return all directories', function (done) {
		fs.getDirs('../', function (err, dirs) {
			expect(dirs).to.be.an('array');
			expect(dirs.length > 0).to.be.ok();
			done();
		});
	});

	it('should return all directories sync', function () {
		var dirs = fs.getDirsSync('../');
		expect(dirs).to.be.an('array');
		expect(dirs.length > 0).to.be.ok();
	});

	it('should check if a file is empty', function (done) {
		var notEmptyFile = '../README.md';
		var emptyFile = './AN EMPTY FILE';
		fs.isEmpty (notEmptyFile, function (empty) {
			expect(empty).to.be(false);
			fs.isEmpty (emptyFile, function (empty) {
				expect(empty).to.be(true);
				done();
			});
		});
	});

	it('should check if a file is empty sync', function () {
		var notEmptyFile = '../README.md';
		var emptyFile = './AN EMPTY FILE';
		var empty = fs.isEmptySync(notEmptyFile);
		expect(empty).to.be(false);
		empty = fs.isEmptySync(emptyFile);
		expect(empty).to.be(true);
	});

	it('should check if a directory is empty', function (done) {
		var notEmptyDir = './';
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
		var notEmptyDir = './';
		var emptyDir = './AN EMPTY DIR';
		var empty = fs.isEmptySync(notEmptyDir);
		expect(empty).to.be(false);
		empty = fs.isEmptySync(emptyDir);
		expect(empty).to.be(true);
	});

	it('should extends to fs', function (done) {
		expect(fs.readdir).to.be.a('function');
		done();
	});
});