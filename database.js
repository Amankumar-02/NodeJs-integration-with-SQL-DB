import mysql from 'mysql2';
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : '1234',
  database : 'vsCode_data'
});
 
connection.connect(
    (err)=>{
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);
      }
);
// connection.query(`CREATE TABLE vscode_test(id INT PRIMARY KEY, name VARCHAR(50), city VARCHAR(50))`, (err, result)=>{
//     if(err){console.log(err)}
//     console.log("table created" + result);
// });
// connection.query(`INSERT INTO vscode_test VALUE (101, 'Amir', 'UP'),(102, 'Neeraj', 'UK'),(103, 'Rishi', 'BIHAR'),(104, 'Sandhya', 'MUMBAI')`, (err, result)=>{
//         if(err){console.log(err)}
//         console.log("row created" + result);
//     });
connection.query(`SELECT * FROM test`, (err, result)=>{
  if(err){ return console.log(err)};
  console.log("Result: ", result);
})
export default connection;