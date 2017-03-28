const should = require('should');
const bcryptCheck = require('./index');

describe('bcrypt和bcryptjs通用', () => {
  describe('bcrypt生成hash值', () => {
    it('bcrypt生成hash值,bcryptjs校验密码', () => {
      return bcryptCheck.bcryptCompare(10, '123456').should.be.fulfilled().then(it => {
        it.should.equal(true);
      });
    })
  });

  describe('bcryptjs生成hash值', () => {
    it('bcryptjs生成hash值,bcrypt校验密码', () => {
      return bcryptCheck.bcryptjsCompare(10, '123456').should.be.fulfilled().then(it => {
        it.should.equal(true);
      });
    })
  })
})



