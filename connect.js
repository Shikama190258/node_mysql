//MySQL モジュール読み込み
const mysql = require('mysql');

// const con = mysql.createConnection((err) => {
const con = mysql.createConnection({
    host: 'localhost', 
    port: '3306', 
    user: 'root',
    password: '',
});

//今度こそコールバック関数をかかｋないとだめ　(err)=>のやつ？
con.connect((err) => {

    if (err) throw err;
    console.log('connect success!');

});

con.end();


// 次に作るのが今度こそくりえいとでーびー



























