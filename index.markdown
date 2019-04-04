<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Sansita+One" />
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Caudex" />
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
<div id = "setMid">
<script
  src="http://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js">
</script>
<h2>Composite Images</h2>

<div>
  <p>This webpage is a simple prototype to demonstrate <a href="https://en.wikipedia.org/wiki/Chroma_key">Chroma Composting</a>. Upload two pictures, the first with the green screen and the second being the background you wish to have and hit "Create Composite". Have fun!!!</p>
  <canvas id = "fg"></canvas>
  <p>Foreground:<input type = "file" id = "fgLoad" multiple = "false" accept = "image/*" onchange  = "fgLoad()"></p>
</div>

<div>
  <canvas id = "bg"></canvas>
  <p>Background:<input type = "file" id = "bgLoad" multiple = "false" accept = "image/*" onchange = "bgLoad()"></p>
</div>

<p>
  <input type = "button" value = "Create Composite" id ="composite" onclick = "createComposite()">
  <input type = "button" value = "Clear Canvases" id="clear" onclick = "clear()">
</p>
</div>