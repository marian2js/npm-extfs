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

	it('should return all directories sync', function (done) {
		var dirs = fs.getDirsSync('../');
		expect(dirs).to.be.an('array');
		expect(dirs.length > 0).to.be.ok();
		done();
	});

	it('should extends to fs', function (done) {
		expect(fs.readdir).to.be.a('function');
		done();
	});
});