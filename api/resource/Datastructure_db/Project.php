<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB Project
 * 
	{
		Name: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		Creator: [{
			type: Schema.ObjectId,
			ref : "User"
		}],
		Project: {
			type: Schema.ObjectId,
			ref : "Schema"
		},
		Users: [{
			type: Schema.ObjectId,
			ref : "Project"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/project',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Name'	=> $body->Name,
		


	);

	$obj = makeQuery("INSERT INTO project (_id, Name )  VALUES ( null, :Name   )", $params, false);
            
    
	// Delete not in array
	$in = " and id_User NOT IN (:Users)";
	$sql = "DELETE FROM Project_Users WHERE id_Project=:id_Project ";
		
	$params = array (
		'id_Project'	=> $obj['id']
	);
	
	if (isset($body->Users) && $body->Users != null && sizeOf($body->Users) > 0) {
		$sql = $sql.$in;
		$params['Users'] = join("', '", $body->Users);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_User FROM Project_Users WHERE id_Project=:id";
	$params = array (
		'id'	=> $obj['id'],
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_User);
	}

	// Insert new
	if (isset($body->Users)) {
    	foreach ($body->Users as $id_User) {
    		if (!in_array($id_User, $actualArray)){
    			$sql = "INSERT INTO Project_Users (_id, id_Project, id_User ) VALUES (null, :id_Project, :id_User)";
    
    			$params = array (
    				'id_Project'	=> $obj['id'],
    				'id_User'	=> $id_User
    			);
        		makeQuery($sql, $params, false);
    		}
    	}
	}
	
	
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/project/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM project WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/project/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM project WHERE _id = :id LIMIT 1", $params, false);
	
	
	$list_Users = makeQuery("SELECT id_User FROM Project_Users WHERE id_Project = :id", $params, false);
	$list_Users_Array=[];
	foreach ($list_Users as $val) {
		array_push($list_Users_Array, $val->id_User);
	}
	$obj->Users = $list_Users_Array;
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/project',	function () use ($app){
	makeQuery("SELECT * FROM project");
});


//CRUD - EDIT

$app->post('/project/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Name'	    => $body->Name


	);

	$obj = makeQuery("UPDATE project SET  Name = :Name   WHERE _id = :id LIMIT 1", $params, false);
            
	// Delete not in array
	$in = " and id_User NOT IN (:Users)";
	$sql = "DELETE FROM Project_Users WHERE id_Project=:id_Project ";
	
	$params = array (
		'id_Project'	=> $body->_id
	);
	
	if (isset($body->Users) && $body->Users != null && sizeOf($body->Users) > 0) {
		$sql = $sql.$in;
		$params['Users'] = join("', '", $body->Users);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_User FROM Project_Users WHERE id_Project=:id";
	$params = array (
		'id'	=> $body->_id,
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_User);
	}

	// Insert new
	if (isset($body->Users)) {
    	foreach ($body->Users as $id_User) {
    		if (!in_array($id_User, $actualArray)){
    			$sql = "INSERT INTO Project_Users (_id, id_Project, id_User ) VALUES (null, :id_Project, :id_User)";
    
    			$params = array (
    				'id_Project'	=> $body->_id,
    				'id_User'	=> $id_User
    			);
        		makeQuery($sql, $params, false);
    		}
    	}
	}
	
	
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>