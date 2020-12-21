//カスタムモジュール読み込み

// const db = reqire('./');


const db = require('./lib/db');


let files = [

    './sql/01_create_table_users.sql'

];

files.forEach((file) => {

    db.importSQL(file);

});

































