<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB Schema
 * 
	{
		Name: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		Project: {
			type: Schema.ObjectId,
			ref : "Schema"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - FIND BY Project

$app->get('/schema/findByProject/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM schema WHERE Project = :key", $params);
	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>