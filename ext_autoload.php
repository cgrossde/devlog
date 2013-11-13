<?php
/*
 * Register necessary class names with autoloader
 *
 * $Id: ext_autoload.php 39881 2010-11-05 14:41:57Z francois $
 */
$extensionPath = t3lib_extMgm::extPath('devlog');
return array(
	'tx_devlog_logwriter' => $extensionPath . 'interfaces/interface.tx_devlog_logwriter.php',
	'tx_devlog_writers_database' => $extensionPath . 'writers/class.tx_devlog_writers_database.php',
);
?>
