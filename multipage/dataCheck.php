<!DOCTYPE html>
<html>
	<head>
		<title>Hello!</title>
		<meta charset="utf-8"/>
	</head>
	<body>
		<p>
			<?php if (array_key_exists("name", $_REQUEST)){
				$male = (!array_key_exists("geschlecht", $_REQUEST) || $_REQUEST["geschlecht"] == "m");?>
				Hallo, <em><?php echo $_REQUEST["name"];?></em>, du 
				<?php if (array_key_exists("extraschleim", $_REQUEST) && $_REQUEST["extraschleim"] == "an") {?>
					absolut unglaublich hervorstechend einzigartig
				<?php } ?>
				<?php if (array_key_exists("zusatz", $_REQUEST)) foreach($_REQUEST['zusatz'] as $zusatz) { 
					echo " " . $zusatz . ($male ? "er" : "e") . ", ";
				} ?>
				<?php if ($male){?>
					genialer Webentwickler!
				<?php } else {?>
					geniale Webentwicklerin!
				<?php }?>
			<?php } else { ?>
				Nun verrat mir doch deinen Namen =(
			<?php }?>
		</p>
	</body>
</html>