var mainexecutor = document.createElement("div"); document.body.appendChild(mainexecutor); mainexecutor.outerHTML=`<div id="mydivjs" style="border-radius: 6px; position: fixed; top: 32%; left: 70%;"><div style="background: url(&quot;https://media0.giphy.com/headers/jmckeehen/s2wy7iphPP98.gif&quot;); width: 500px; height: 70px; position: relative; top: 8px; left: -3px; border-radius: 15px; border-style: solid; border-color: black;"><center style="font-size:50px;position:relative;top:0%;color:#990099;font-weight:900;font-family:Xulu;">Xulu</center><a onclick="document.getElementById('mydivjs').hidden='true';document.getElementById('showjsbutton').hidden='';" style="font-family:Arial;cursor:pointer;font-size:25px;color:red;position:relative;top:-65%;left:92%;">[-]</a></div><div style="font-size:30px;background: linear-gradient(to bottom right, black, purple);font-family:Consolas;font-size:20px;border-color: black;width: 500px;height: 300px;color:black;border-style:solid;border-size:10px;border-color:black;border-radius:15px;position:relative;top:-15px;left:-3px" id="jsinp" placeholder="Enter javascript here..."><div style="height:20px"></div><center style="color:#ff00ff;font-family:Spotify;font-size:30px;opacity: 1;"><a>Xulu JS Editor</a><div style="height:10px"></div><textarea style="border-color:black;border-size:18px;border-radius:18px;border-style:solid;resize:none;color:#ff00ff;background:#130013;width:360px;height:167px;" placeholder="Enter javascript..." id="jsinputx"></textarea><div style="height:13px"></div><button style="cursor: pointer; border-style: none; width: 116px; height: 46px; background: rgb(35, 0, 35); color: rgb(255, 0, 255); border-radius: 15px; font-size: 20px;" onclick="this.style.background='#230023'; eval(document.getElementById('jsinputx').value);" onmousedown="this.style.background='#130013'">Execute</button></center></div></div><div style="cursor:pointer;border-right:0px;position:fixed;top:90%;left:97.7%;font-size:30px;color:#ff00ff;width:50px;height:50px;background: linear-gradient(to bottom right, black, purple);border-style:solid; border-color:black; border-radius:10px;" hidden id="showjsbutton" onclick="document.getElementById('mydivjs').hidden='';document.getElementById('showjsbutton').hidden='true';"><a style="position:relative;top:15%;left:15%;">JS</a></div>`
