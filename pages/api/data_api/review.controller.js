const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'ericagallery.cpi3i6d3shqc.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'databasepbl2!',
  database : 'ericagallery',
  port     : 3306
});

exports.postRating = (req, res) => {
  const body = req.body;
  const insert = `insert into review values (?, ?, ?, ?)`;
  const update = `update review set rate = ?, wr_date = ? where customer_id = ? and movie_id = ?`;
  const find_user = `select count(*) from review where customer_id = ? and movie_id = ?`;
  var flag = 0;
  connection.query(find_user, [body.user, body.movieCd], (err1, rows, fields) => { // find duplicate user_id
    flag = rows[0]['count(*)'];
    if(flag === 1) {
      connection.query(update, [body.rate, body.date, body.user, body.movieCd], (err2, result, fields) => { // update rate
        if(err2) {
          console.log('review update err!!');
          console.log(err2);
        }
        else console.log('review update done!!');
      });
    } else {
      connection.query(insert, [body.movieCd, body.user, body.rate, body.date], (err3, result, fields) => { // insert rate
        if(err3) {
          console.log('review isnert err!!');
          console.log(err3);
        }
        else console.log('review insert done!!');
      });
    }
  });
}

exports.getRating = (req, res) => {
  const body = req.body;
  const counting = `select count(*) from review where movie_id = ?`;
  const get = `select rate from review where movie_id = ?`;
  var cnt = 0, sum = 0, avg;
  connection.query(counting, [body.movieCd], (err, row, fields) => {
    cnt = row[0]['count(*)'];
    connection.query(get, [body.movieCd], (err1, rows, fields) => {
      for(var i=0; i<rows.length; i++) {
        sum += rows[i].rate;
      }
      avg = sum / cnt;
      console.log(avg);
    })
  })
}