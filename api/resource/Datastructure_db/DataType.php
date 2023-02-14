<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB DataType
 * 
	{
		Lenght: {
			type: 'Number'
		},
		Name: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		DataType: {
			type: Schema.ObjectId,
			ref : "DataEntity"
		},
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/datatype',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Lenght'	=> isset($body->Lenght)?$body->Lenght:'',
		'Name'	=> $body->Name,
		
	);

	$obj = makeQuery("INSERT INTO datatype (_id, Lenght, Name )  VALUES ( null, :Lenght, :Name   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/datatype/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM datatype WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/datatype/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM datatype WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/datatype',	function () use ($app){
	makeQuery("SELECT * FROM datatype");
});


//CRUD - EDIT

$app->post('/datatype/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Lenght'	    => isset($body->Lenght)?$body->Lenght:'',
		'Name'	    => $body->Name
	);

	$obj = makeQuery("UPDATE datatype SET  Lenght = :Lenght,  Name = :Name   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>