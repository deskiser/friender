var dbConnect = require('./database')

module.exports = {
  nextInFeed: function(userEmail, cb) {
    dbConnect(function(client, done) {
      client.query("SELECT * from users WHERE email_address <> $1 ", [userEmail], function(err, result) {
        done()
        if (err) {
          console.log(err)
          throw(err)
        }

        cb(result.rows[0])
      })
    })
  },

  decide: function(/*TODO: what parameters should this method take?*/ cb) {
    dbConnect(function(client, done) {
      client.query("TODO: what sql?", [], function(err, result) {
        done()
        if (err) {
          console.log(err)
          throw(err)
        }

        cb()
      })
    })
  }
}
