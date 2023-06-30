<!DOCTYPE html>
<html>
	<head>
		<title>Stapelzeug Produktsuche</title>
	</head>
	<style>
		table {
			border-collapse: collapse;
		}
		
		td, th{
			border: 1px solid #AAAAAA;
		}
		
		tr:nth-child(odd){
			background-color: #DDDDDD;
		}
	</style>
	<body>
		<p>
			<?php 

				$produkte = [
					["name" => "Kiste winzig", "kategorie" => "kisten", "instock" => true],
					["name" => "Kiste klein", "kategorie" => "kisten", "instock" => true],
					["name" => "Kiste groß", "kategorie" => "kisten", "instock" => false],
					["name" => "Frachtcontainer", "kategorie" => "kisten", "instock" => true],
					["name" => "Transportkiste für Frachtcontainer", "kategorie" => "kisten", "instock" => false],
					["name" => "Transportkiste für Transportkiste für Frachtcontainer", "kategorie" => "kisten", "instock" => true],
					["name" => "Bierflasche viereckig", "kategorie" => "flaschen", "instock" => true],
					["name" => "Bierflasche dreieckig", "kategorie" => "flaschen", "instock" => false],
					["name" => "Bierflasche sechseckig", "kategorie" => "flaschen", "instock" => true],
					["name" => "Weinflasche viereckig", "kategorie" => "flaschen", "instock" => true],
					["name" => "Weinflasche dreieckig", "kategorie" => "flaschen", "instock" => false],
					["name" => "Weinflasche sechseckig", "kategorie" => "flaschen", "instock" => false],
					["name" => "Kleinsche Flasche (nur begrenzt stapelbar)", "kategorie" => "flaschen", "instock" => false],
					["name" => "Mikadostäbchen", "kategorie" => "sonstige", "instock" => false],
					["name" => "Baumstämme", "kategorie" => "sonstige", "instock" => true],
					["name" => "Ziegelsteine", "kategorie" => "sonstige", "instock" => true],
					["name" => "Eiswürfel", "kategorie" => "sonstige", "instock" => true]
				];
				$suchwort = array_key_exists("suchwort", $_REQUEST) ? $_REQUEST["suchwort"] : "";
				$outofstock = array_key_exists("outofstock", $_REQUEST);
				$kategorie = array_key_exists("kategorie", $_REQUEST) ? $_REQUEST["kategorie"] : "";
				$format = array_key_exists("format", $_REQUEST) ? $_REQUEST["format"] : "";
				if ($format != "tabelle"){
					echo("Nur format tabelle funktioniert. Alles andere reparier ich nächste Ferien. Stefan.");
					die;
				}
				if (!in_array($kategorie, ["kisten", "flaschen", "sonstige", "alle"])){
					echo("Falsche Kategorie: " . $kategorie . " erlaubt: kisten, flaschen, sonstige, alle");
					die;
				}

			?>
			<table>
				<caption>Gefundene wunderbare Stapelware</caption>
				<thead>
					<tr>
						<th>Produktname</th>
						<th>Kategorie</th>
						<th>Auf Lager?</th>
					</tr>
				</thead>
				<tbody>
					<?php 
					$count=0;
					foreach($produkte as $zeile){
						if ($suchwort == "" || preg_match("/".$suchwort."/i", $zeile["name"])){
							if ($kategorie == "alle" || $kategorie == $zeile["kategorie"]){
								if ($outofstock || $zeile["instock"]){
									$count++;
									echo("<tr>");
									echo("<td>" . $zeile["name"] . "</td>");
									echo("<td style='text-align: center;'>" . $zeile["kategorie"] . "</td>");
									echo("<td style='text-align: center;'>" . ($zeile["instock"] ? "ja" : "nein") . "</td>");
									echo("</tr>");
								}
							}
						}
					}?>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="3" style="text-align: right;"><?php echo $count;?> Produkte</td>
					</tr>
				</tfoot>
			</table>
		</p>
	</body>
</html>