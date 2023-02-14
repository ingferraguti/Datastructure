<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db Datastructure_db
		require('./resource/Datastructure_db/custom/DataEntityCustom.php');
		require('./resource/Datastructure_db/DataEntity.php');
		require('./resource/Datastructure_db/custom/DataObjectCustom.php');
		require('./resource/Datastructure_db/DataObject.php');
		require('./resource/Datastructure_db/custom/DataTypeCustom.php');
		require('./resource/Datastructure_db/DataType.php');
		require('./resource/Datastructure_db/custom/ProjectCustom.php');
		require('./resource/Datastructure_db/Project.php');
		require('./resource/Datastructure_db/custom/SchemaCustom.php');
		require('./resource/Datastructure_db/Schema.php');
		require('./resource/Datastructure_db/custom/UserCustom.php');
		require('./resource/Datastructure_db/User.php');
		require('./resource/Datastructure_db/custom/ValidationRuleCustom.php');
		require('./resource/Datastructure_db/ValidationRule.php');
	

$app->run();


?>
