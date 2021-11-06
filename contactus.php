<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
var_dump($_GET);
  $cmd = 'echo "'.$_GET["name"]." : ".$_GET["phone"]." : ".$_GET["msg"]." : ".$_GET["email"].'"'. " | sendmail kwiley@gentechsolutions.com";
  $res = exec($cmd);
  header('Location: https://gentechsolutions.com/?submitted=ok');
?>
