const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');

module.exports = {
  bcryptCompare: function(saltRounds, passwd) {
    return new Promise((resolve, recject) => {
      bcryptjs.genSalt(saltRounds, function(err, salt) {
        if(err) return reject(err);
        bcryptjs.hash(passwd, salt,function(err, hash) {
          if(err) return reject(err);
          bcrypt.compare(passwd, hash, (err, res) => {
            if(err) return reject(err);
            return resolve(res);
          })
        })
      })
    })
  },
  bcryptjsCompare: function(saltRounds, passwd) {
    return new Promise((resolve, recject) => {
      bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) return reject(err);
        bcrypt.hash(passwd, salt,function(err, hash) {
          if(err) return reject(err);
          bcryptjs.compare(passwd, hash, (err, res) => {
            if(err) return reject(err);
            return resolve(res);
          })
        })
      })
    })
  } 
}
