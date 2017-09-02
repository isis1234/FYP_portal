var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var router = express.Router();
var dbFile = './config/db/FYP';
var sqlFile = './config/sql/FYP_db.sql';
var dbExists = fs.existsSync(dbFile);
var db;
var result = {};

/* GET home page. */
router.get('/', function(req, res, next) {
	//STEP1: If no DB, create DB
	if(!dbExists){
	    fs.openSync(dbFile, 'w');
	}
	//STEP2: connect DB
	db = new sqlite3.Database(dbFile);
	
	db.serialize(function() {
		//STEP3: If is the DB < 1KB, create table
		if(!(fs.statSync(dbFile).size)){
		    fs.readFileSync(sqlFile).toString().split('\n').forEach(function (sql) {
			    console.log(sql);
			    db.run(sql);
		    }) 
		}

		//STEP4: run sql query
		// stmt = db.prepare("UPDATE wheel SET mode=?, action=?, last_update=CURRENT_TIMESTAMP");
		// stmt.run("MENU", "s");
		// stmt.finalize();

		//STEP5: read table
		db.all("SELECT * FROM wheel", [], (err, rows) => {
			if(err){
				result.response_status = 'error';
				result.response_msg = err;
			}else{
				result.response_status = 'success';
				result.response_msg = {};
				result.response_msg.mode = rows[0].mode;
				result.response_msg.action = rows[0].action;
				result.response_msg.last_update = rows[0].last_update;
			}

			res.render('wheel_setting', { 
				page_title: 'Wheel Setting',
				cat1_link_path: '/',
				cat1_title: 'Wheel',
				cat2_link_path: 'wheel_setting',
				cat2_title: 'Setting',

				response_status: result.response_status,
				response_msg: result.response_msg
			})
		});
	});
});

router.post('/', function(req, res, next) {
	//STEP1: If no DB, create DB
	if(!dbExists){
	    fs.openSync(dbFile, 'w');
	}
	//STEP2: connect DB
	db = new sqlite3.Database(dbFile);
	
	db.serialize(function() {
		//STEP3: If is the DB < 1KB, create table
		if(!(fs.statSync(dbFile).size)){
		    fs.readFileSync(sqlFile).toString().split('\n').forEach(function (sql) {
			    console.log(sql);
			    db.run(sql);
		    }) 
		}

		//STEP4: run sql query
		stmt = db.prepare("UPDATE wheel SET mode=?, action=?, last_update=CURRENT_TIMESTAMP");
		stmt.run("MENU", "s");
		stmt.finalize();

		//STEP4: read table
		db.all("SELECT * FROM wheel", [], (err, rows) => {
			if(err){
				result.response_status = 'error';
				result.response_msg = err;
			}else{
				result.response_status = 'success';
				result.response_msg = {};
				result.response_msg.mode = rows[0].mode;
				result.response_msg.action = rows[0].action;
				result.response_msg.last_update = rows[0].last_update;
			}

			res.render('wheel_setting', { 
				page_title: 'Wheel Setting',
				cat1_link_path: '/',
				cat1_title: 'Wheel',
				cat2_link_path: 'wheel_setting',
				cat2_title: 'Setting',

				response_status: result.response_status,
				response_msg: result.response_msg
			})
		});
	});
});

module.exports = router;
