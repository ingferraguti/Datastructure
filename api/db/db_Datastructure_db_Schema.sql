--
-- Database: `datastructure_db`
--

CREATE DATABASE IF NOT EXISTS `datastructure_db`;
USE `datastructure_db`;


-- ENTITIES

--
-- Struttura della tabella `dataentity`
--

CREATE TABLE IF NOT EXISTS `dataentity` (
	`Index` bool ,
	`Name` varchar(130)  NOT NULL,
	`Nullable` bool  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `dataobject`
--

CREATE TABLE IF NOT EXISTS `dataobject` (
	`Description` varchar(130) ,
	`Name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `datatype`
--

CREATE TABLE IF NOT EXISTS `datatype` (
	`Lenght` numeric ,
	`Name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `project`
--

CREATE TABLE IF NOT EXISTS `project` (
	`Name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `schema`
--

CREATE TABLE IF NOT EXISTS `schema` (
	`Name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `datastructure_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `datastructure_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `validationrule`
--

CREATE TABLE IF NOT EXISTS `validationrule` (
	`Name` varchar(130)  NOT NULL,
	`Rule` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m DataType DataEntity - DataType
ALTER TABLE `dataentity` ADD COLUMN `DataType` int(11)  REFERENCES datatype(_id);

-- relation m:m ValidationRule DataEntity - ValidationRule
CREATE TABLE IF NOT EXISTS `DataEntity_ValidationRule` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_DataEntity` int(11)  NOT NULL REFERENCES dataentity(_id),
    `id_ValidationRule` int(11)  NOT NULL REFERENCES validationrule(_id)
);

-- relation m:m DataEntity DataObject - DataEntity
CREATE TABLE IF NOT EXISTS `DataObject_DataEntity` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_DataObject` int(11)  NOT NULL REFERENCES dataobject(_id),
    `id_DataEntity` int(11)  NOT NULL REFERENCES dataentity(_id)
);

-- relation m:m Users Project - User
CREATE TABLE IF NOT EXISTS `Project_Users` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Project` int(11)  NOT NULL REFERENCES project(_id),
    `id_User` int(11)  NOT NULL REFERENCES user(_id)
);

-- relation 1:m Project Schema - Project
ALTER TABLE `schema` ADD COLUMN `Project` int(11)  REFERENCES project(_id);

-- relation m:m Creator User - Project
CREATE TABLE IF NOT EXISTS `User_Creator` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_User` int(11)  NOT NULL REFERENCES user(_id),
    `id_Project` int(11)  NOT NULL REFERENCES project(_id)
);


