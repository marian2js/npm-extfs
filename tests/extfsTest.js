var expect = require('expect.js');
var fs = require('../extfs');

describe('extfs', function () {
	it('should return all directories', function (done) {
		fs.getDirs('../', function (err, dirs) {
			expect(dirs).to.be.a('array');
			done();
		});
	});

	it('should return all directories sync', function (done) {
		expect(fs.getDirsSync('../')).to.be.a('array');
		done();
	});

	it('should extends to fs', function (done) {
		expect(fs.readdir).to.be.a('function');
		done();
	});
});