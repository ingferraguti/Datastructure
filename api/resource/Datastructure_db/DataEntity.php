<?php
	require_once './db/dbDatastructure_dbManager.php';
	
/*
 * SCHEMA DB DataEntity
 * 
	{
		Index: {
			type: 'Boolean'
		},
		Name: {
			type: 'String', 
			required : true
		},
		Nullable: {
			type: 'Boolean', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		DataEntity: [{
			type: Schema.ObjectId,
			ref : "DataObject"
		}],
		DataType: {
			type: Schema.ObjectId,
			ref : "DataEntity"
		},
		ValidationRule: [{
			type: Schema.ObjectId,
			ref : "DataEntity"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/dataentity',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Index'	=> isset($body->Index)?$body->Index:'',
		'Name'	=> $body->Name,
		'Nullable'	=> $body->Nullable,
		

		'DataType' => isset($body->DataType)?$body->DataType:'',

	);

	$obj = makeQuery("INSERT INTO dataentity (_id, Index, Name, Nullable , DataType )  VALUES ( null, :Index, :Name, :Nullable , :DataType   )", $params, false);
            
    
	// Delete not in array
	$in = " and id_ValidationRule NOT IN (:ValidationRule)";
	$sql = "DELETE FROM DataEntity_ValidationRule WHERE id_DataEntity=:id_DataEntity ";
		
	$params = array (
		'id_DataEntity'	=> $obj['id']
	);
	
	if (isset($body->ValidationRule) && $body->ValidationRule != null && sizeOf($body->ValidationRule) > 0) {
		$sql = $sql.$in;
		$params['ValidationRule'] = join("', '", $body->ValidationRule);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_ValidationRule FROM DataEntity_ValidationRule WHERE id_DataEntity=:id";
	$params = array (
		'id'	=> $obj['id'],
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_ValidationRule);
	}

	// Insert new
	if (isset($body->ValidationRule)) {
    	foreach ($body->ValidationRule as $id_ValidationRule) {
    		if (!in_array($id_ValidationRule, $actualArray)){
    			$sql = "INSERT INTO DataEntity_ValidationRule (_id, id_DataEntity, id_ValidationRule ) VALUES (null, :id_DataEntity, :id_ValidationRule)";
    
    			$params = array (
    				'id_DataEntity'	=> $obj['id'],
    				'id_ValidationRule'	=> $id_ValidationRule
    			);
        		makeQuery($sql, $params, false);
    		}
    	}
	}
	
	
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/dataentity/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM dataentity WHERE _id = :id LIMIT 1", $params);

});

//CRUD - FIND BY DataType

$app->get('/dataentity/findByDataType/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM dataentity WHERE DataType = :key", $params);
	
});

//CRUD - FIND BY ValidationRule

$app->get('/dataentity/findByValidationRule/:key',	function ($key) use ($app){	

	$params = array (
		'key'	=> $key,
	);
	makeQuery("SELECT * FROM dataentity WHERE ValidationRule = :key", $params);
	
});
	
//CRUD - GET ONE
	
$app->get('/dataentity/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM dataentity WHERE _id = :id LIMIT 1", $params, false);
	
	
	$list_ValidationRule = makeQuery("SELECT id_ValidationRule FROM DataEntity_ValidationRule WHERE id_DataEntity = :id", $params, false);
	$list_ValidationRule_Array=[];
	foreach ($list_ValidationRule as $val) {
		array_push($list_ValidationRule_Array, $val->id_ValidationRule);
	}
	$obj->ValidationRule = $list_ValidationRule_Array;
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/dataentity',	function () use ($app){
	makeQuery("SELECT * FROM dataentity");
});


//CRUD - EDIT

$app->post('/dataentity/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Index'	    => isset($body->Index)?$body->Index:'',
		'Name'	    => $body->Name,
		'Nullable'	    => $body->Nullable
,
		'DataType'      => isset($body->DataType)?$body->DataType:'' 

	);

	$obj = makeQuery("UPDATE dataentity SET  Index = :Index,  Name = :Name,  Nullable = :Nullable  , DataType=:DataType  WHERE _id = :id LIMIT 1", $params, false);
            
	// Delete not in array
	$in = " and id_ValidationRule NOT IN (:ValidationRule)";
	$sql = "DELETE FROM DataEntity_ValidationRule WHERE id_DataEntity=:id_DataEntity ";
	
	$params = array (
		'id_DataEntity'	=> $body->_id
	);
	
	if (isset($body->ValidationRule) && $body->ValidationRule != null && sizeOf($body->ValidationRule) > 0) {
		$sql = $sql.$in;
		$params['ValidationRule'] = join("', '", $body->ValidationRule);
	}
	
	makeQuery($sql, $params, false);
	
	
	// Get actual
	$sql="SELECT id_ValidationRule FROM DataEntity_ValidationRule WHERE id_DataEntity=:id";
	$params = array (
		'id'	=> $body->_id,
	);
    $actual = makeQuery($sql, $params, false);
	$actualArray=[];
	foreach ($actual as $val) {
		array_push($actualArray, $val->id_ValidationRule);
	}

	// Insert new
	if (isset($body->ValidationRule)) {
    	foreach ($body->ValidationRule as $id_ValidationRule) {
    		if (!in_array($id_ValidationRule, $actualArray)){
    			$sql = "INSERT INTO DataEntity_ValidationRule (_id, id_DataEntity, id_ValidationRule ) VALUES (null, :id_DataEntity, :id_ValidationRule)";
    
    			$params = array (
    				'id_DataEntity'	=> $body->_id,
    				'id_ValidationRule'	=> $id_ValidationRule
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