<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
var_dump($_GET);
  $cmd = 'echo "'.$_GET["name"]." : ".$_GET["phone"]." : ".$_GET["msg"]." : ".$_GET["email"].'"'. " | sendmail kwiley@gentechsolutions.com";
  // $cmd2 = 'echo "'.$_GET["name"]." : ".$_GET["phone"]." : ".$_GET["msg"]." : ".$_GET["email"].'"'. " | sendmail contact@gentechsolutions.com";
  $res = exec($cmd);
  // $res2 = exec($cmd2);
  header('Location: https://gentechsolutions.com/?submitted=ok');
?>
