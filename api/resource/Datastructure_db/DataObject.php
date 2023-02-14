<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB DataObject
 * 
	{
		Description: {
			type: 'String'
		},
		Name: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		DataEntity: [{
			type: Schema.ObjectId,
			ref : "DataObject"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - FIND BY DataEntity

$app->get('/dataobject/findByDataEntity/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM dataobject WHERE DataEntity = :key", $params);
	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>