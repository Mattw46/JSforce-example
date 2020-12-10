var jsforce = require('jsforce');
var conn = new jsforce.Connection();
conn.login('username', 'password', function(err, res) {
    if (err) { return console.error(err); }
    conn.query('SELECT Id, Name FROM Account', function(err, res) {
      if (err) { return console.error(err); }
      console.log(res);
    });
  
    // Single record retrieval
    conn.sobject("Account").retrieve("0012w00000NC5rdAAD", function(err, account) {
    if (err) { return console.error(err); }
        console.log("Name : " + account.Name);
        // ...
    });
    
    conn.sobject("Account").create({ Name : 'My Account #1' }, function(err, ret) {
    if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
    // ...
    });
});
