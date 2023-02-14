<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB ValidationRule
 * 
	{
		Name: {
			type: 'String', 
			required : true
		},
		Rule: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		ValidationRule: [{
			type: Schema.ObjectId,
			ref : "DataEntity"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/validationrule',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Name'	=> $body->Name,
		'Rule'	=> $body->Rule,
		
	);

	$obj = makeQuery("INSERT INTO validationrule (_id, Name, Rule )  VALUES ( null, :Name, :Rule   )", $params, false);
    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/validationrule/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM validationrule WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/validationrule/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM validationrule WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/validationrule',	function () use ($app){
	makeQuery("SELECT * FROM validationrule");
});


//CRUD - EDIT

$app->post('/validationrule/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Name'	    => $body->Name,
		'Rule'	    => $body->Rule
	);

	$obj = makeQuery("UPDATE validationrule SET  Name = :Name,  Rule = :Rule   WHERE _id = :id LIMIT 1", $params, false);
    
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>