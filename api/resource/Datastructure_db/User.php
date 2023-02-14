<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB User
 * 
	{
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		password: {
			type: 'String', 
			required : true
		},
		roles: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		Creator: [{
			type: Schema.ObjectId,
			ref : "User"
		}],
		Users: [{
			type: Schema.ObjectId,
			ref : "Project"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/user',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'mail'	=> isset($body->mail)?$body->mail:'',
		'name'	=> isset($body->name)?$body->name:'',
		'password'	=> $body->password,
		'roles'	=> isset($body->roles)?$body->roles:'',
		'surname'	=> isset($body->surname)?$body->surname:'',
		'username'	=> $body->username,
		

	);

	$obj = makeQuery("INSERT INTO user (_id, mail, name, password, roles, surname, username )  VALUES ( null, :mail, :name, :password, :roles, :surname, :username   )", $params, false);
    
    
	// Delete not in array
	$in = " and id_Project NOT IN (:Creator)";
	$sql = "DELETE FROM User_Creator WHERE id_User=:id_User ";
		
	$params = array (
		'id_User'	=> $obj['id']
	);
	
	if (isset($body->Creator) && $body->Creator != null && sizeOf($body->Creator) > 0) {
		$sql = $sql.$in;
		$params['Creator'] = join("', '", $body->Creator);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_Project FROM User_Creator WHERE id_User=:id";
	$params = array (
		'id'	=> $obj['id'],
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_Project);
	}

	// Insert new
	if (isset($body->Creator)) {
    	foreach ($body->Creator as $id_Project) {
    		if (!in_array($id_Project, $actualArray)){
    			$sql = "INSERT INTO User_Creator (_id, id_User, id_Project ) VALUES (null, :id_User, :id_Project)";
    
    			$params = array (
    				'id_User'	=> $obj['id'],
    				'id_Project'	=> $id_Project
    			);
        		makeQuery($sql, $params, false);
    		}
    	}
	}
	
	    
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/user/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM user WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/user/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM user WHERE _id = :id LIMIT 1", $params, false);
	
	
	$list_Creator = makeQuery("SELECT id_Project FROM User_Creator WHERE id_User = :id", $params, false);
	$list_Creator_Array=[];
	foreach ($list_Creator as $val) {
		array_push($list_Creator_Array, $val->id_Project);
	}
	$obj->Creator = $list_Creator_Array;
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/user',	function () use ($app){
	makeQuery("SELECT * FROM user");
});


//CRUD - EDIT

$app->post('/user/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'mail'	    => isset($body->mail)?$body->mail:'',
		'name'	    => isset($body->name)?$body->name:'',
		'password'	    => $body->password,
		'roles'	    => isset($body->roles)?$body->roles:'',
		'surname'	    => isset($body->surname)?$body->surname:'',
		'username'	    => $body->username

	);

	$obj = makeQuery("UPDATE user SET  mail = :mail,  name = :name,  password = :password,  roles = :roles,  surname = :surname,  username = :username   WHERE _id = :id LIMIT 1", $params, false);
    
	// Delete not in array
	$in = " and id_Project NOT IN (:Creator)";
	$sql = "DELETE FROM User_Creator WHERE id_User=:id_User ";
	
	$params = array (
		'id_User'	=> $body->_id
	);
	
	if (isset($body->Creator) && $body->Creator != null && sizeOf($body->Creator) > 0) {
		$sql = $sql.$in;
		$params['Creator'] = join("', '", $body->Creator);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_Project FROM User_Creator WHERE id_User=:id";
	$params = array (
		'id'	=> $body->_id,
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_Project);
	}

	// Insert new
	if (isset($body->Creator)) {
    	foreach ($body->Creator as $id_Project) {
    		if (!in_array($id_Project, $actualArray)){
    			$sql = "INSERT INTO User_Creator (_id, id_User, id_Project ) VALUES (null, :id_User, :id_Project)";
    
    			$params = array (
    				'id_User'	=> $body->_id,
    				'id_Project'	=> $id_Project
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


/*
 Name: changePassword
 Description: Change password of user from admin
 Params: 
 */
$app->post('/user/:id/changePassword',	function ($key) use ($app){	
	makeQuery("SELECT 'ok' FROM DUAL");
});
	
			
?>