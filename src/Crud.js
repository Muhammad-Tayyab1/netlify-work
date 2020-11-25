var faunadb = require('faunadb'),
  q = faunadb.query;
(async()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAD7PnPw_ACB7ANIAGs49SEqMUap6Ly5kSQQdtE' });

    try {
      const result= await  adminClient.query(
            q.CreateDatabase({ name: 'my_app' })
          )
          .then((ret) => console.log(ret));
          console.log(result)
    
} catch (error) {
    console.log(error)
}
})();