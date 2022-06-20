		var penger = 0;
		var ctx;
		var oppstart;
		
		function start(){
			
		
			document.getElementById("start").innerHTML = "";
			
			var minutesLabel = document.getElementById("minutes");
			var secondsLabel = document.getElementById("seconds");
			var totalSeconds = 0;
			setInterval(setTime, 1000);

			function setTime() {
				++totalSeconds;
				secondsLabel.innerHTML = pad(totalSeconds % 60);
				minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
			}

			function pad(val) {
				var valString = val + "";
				if (valString.length < 2) {
				return "0" + valString;
				} else {
				return valString;
				}
			}
		
			oppstart = function oppstart(){
			penger++;
			document.getElementById("penger").innerHTML = penger;		
			
				ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
				}
		}
}
		
		function buyDoubleclick(){
			if (penger >= 100){
				
				
				penger = penger - 100;
				document.getElementById("penger").innerHTML = penger;
			
				oppstart = function oppstart(){
				penger++;
				penger++;
				document.getElementById("penger").innerHTML = penger;
				
				ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
				}
				
			}
		} else {
				document.getElementById("notEnough").innerHTML = "NOT ENOUGH MONEY";
				setTimeout(myTimer1, 1000);

				function myTimer1() {
					document.getElementById("notEnough").innerHTML = "";
				}
			}
		}
		
		/*function buyAutoclick(){
			if (penger >= 200){
				
				penger = penger - 200;
				
				window.setInterval(function(){
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
				}
					
				}, 1000);
				
				
				document.getElementById("penger").innerHTML = penger;
				
			} else {
				document.getElementById("notEnough").innerHTML = "NOT ENOUGH MONEY";
				setTimeout(myTimer1, 1000);

				function myTimer1() {
					document.getElementById("notEnough").innerHTML = "";
				}
			}
		}*/
		
		function buyQuadrupleclick(){
			if (penger >= 250) {
			
			
				penger = penger - 250;
				document.getElementById("penger").innerHTML = penger;
			
				oppstart = function oppstart(){
				penger++;
				penger++;
				penger++;
				penger++;
				document.getElementById("penger").innerHTML = penger;
				
				ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
				}
				
				}
				
			} else {
				document.getElementById("notEnough").innerHTML = "NOT ENOUGH MONEY";
				setTimeout(myTimer1, 1000);

				function myTimer1() {
					document.getElementById("notEnough").innerHTML = "";
				}
			}
		}
		
		
		function buy10xclick(){
				if (penger >= 1000) {
				
				penger = penger - 1000;
				document.getElementById("penger").innerHTML = penger;
			
				oppstart = function oppstart(){
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				penger++;
				document.getElementById("penger").innerHTML = penger;
				
				ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
				}
			}
					
		
		} else {
				document.getElementById("notEnough").innerHTML = "NOT ENOUGH MONEY";
				setTimeout(myTimer1, 1000);

				function myTimer1() {
					document.getElementById("notEnough").innerHTML = "";
				}
			}
		}

			
		
			function buySunglasses(){
			if (penger >= 2000){
			
			
				document.getElementById("end").innerHTML = "CONGRATZ! YOU'RE A TRUE CLICKERMASTER";
		
				penger = 0;
				document.getElementById("penger").innerHTML = penger;
		
				ctx = document.getElementById("tegneflate").getContext("2d");
		
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
				
				ctx.stroke();
				
				oppstart = function oppstart(){
					if (penger >= 20){
				
					document.getElementById("end").innerHTML = "OH, YOU'RE STILL CLICKING..?";

					if (penger >= 30){
						
					document.getElementById("end").innerHTML = "YOU DONT HAVE TO CLICK THE BOX ANYMORE, YOU'VE WON HAHA..";
					
					if (penger >= 40){
						
					document.getElementById("end").innerHTML = "AHH, I SEE. YOU WANT TO KNOW WHAT HAPPENS IF YOU KEEP ON CLICKING.";
				
					if (penger >= 50){
						
					document.getElementById("end").innerHTML = "WELL, NOTHING HAPPENS.";
				
					if (penger >= 60){
						
					document.getElementById("end").innerHTML = "OR DOES IT?";
					
					if (penger >= 70){
						
					document.getElementById("end").innerHTML = "NO, NOTHING HAPPENS. I'M JUST KIDDING HAHAH.";
					
					if (penger >= 80){
						
					document.getElementById("end").innerHTML = "OR AM I?";
					
					if (penger >= 90){
						
					document.getElementById("end").innerHTML = "YEAH, I'M JUST KIDDING. YOU CAN STOP WASTING YOUR PRECIOUS LIFE NOW.";
					
					if (penger >= 100){
						
					document.getElementById("end").innerHTML = "OR CAN YOU?!?!";
				
					if (penger >= 110){
						
					document.getElementById("end").innerHTML = "YES YOU CAN, PLEASE STOP WASTING IT.";
					
					if (penger >= 120){
						
					document.getElementById("end").innerHTML = "ALL JOKES ASIDE, YOU CAN STOP. NOTHING HAPPENS.";
					
					if (penger >= 130){
						
					document.getElementById("end").innerHTML = "I'M SERIOUS.";
					
					if (penger >= 140){
					
					document.getElementById("end").innerHTML = "HMM, I'VE DONE EVERYTHING IN MY POWER TO MAKE YOU STOP...";
						
					if (penger >= 150){
						
					document.getElementById("end").innerHTML = "AND YET YOU'RE STILL CLICKING.";
					
					if (penger >= 160){
					
					document.getElementById("end").innerHTML = "INTERESTING..";
					
					if (penger >= 170){
						
					document.getElementById("end").innerHTML = "..VERY VERY INTERESTING..";
					
					if (penger >= 180){
						
					document.getElementById("end").innerHTML = "..FASCINATING EVEN!";
				
					if (penger >= 190){
						
					document.getElementById("end").innerHTML = "GOD, I REGRET NOT STUDYING PSYCHOLOGI.";				
					
					if (penger >= 200){
						
					document.getElementById("end").innerHTML = "OKEY OKEY, I HAVE AN IDEA.";				
					
					if (penger >= 210){
						
					document.getElementById("end").innerHTML = "WHAT IF I STOP TALKING?";				
				
					if (penger >= 220){
						
					document.getElementById("end").innerHTML = "...";				
				
					if (penger >= 230){
						
					document.getElementById("end").innerHTML = "MY GOD, YOU'RE STILL CLICKING!";				
				
					if (penger >= 240){
						
					document.getElementById("end").innerHTML = "THATS ALMOST SAD.";				
				
					if (penger >= 250){
						
					document.getElementById("end").innerHTML = "BUT AT THE SAME TIME KINDA.. NO IT'S SAD.";				
				
					if (penger >= 260){
						
					document.getElementById("end").innerHTML = "WHAT IF I STOP THE ANIMATION?";				
				
					if (penger >= 270){
						
					document.getElementById("end").innerHTML = "...";		

					if (penger >= 280){
						
					document.getElementById("end").innerHTML = "HOW ABOUT NO ANIMATION AND NO MONEY??";	

					if (penger >= 330){
						
					document.getElementById("end").innerHTML = "GOD YOU'RE SO DRIVEN!";

					if (penger >= 340){
						
					document.getElementById("end").innerHTML = "I HAVE ONE MORE IDEA.";

					if (penger >= 350){
						
					document.getElementById("end").innerHTML = "...";

					if (penger >= 360){
						
					document.getElementById("end").innerHTML = "DEPRESSING ISN'T IT?";				
				
					if (penger >= 370){
						
					document.getElementById("end").innerHTML = "ARE YOU STILL CLICKING?";				
				
					if (penger >= 380){
						
					document.getElementById("end").innerHTML = "I GIVE UP.";				
				
					if (penger >= 390){
						
					document.getElementById("end").innerHTML = "IT'S LIKE YOU HATE THAT BOX.";				
				
					if (penger >= 400){
						
					document.getElementById("end").innerHTML = "WHAT THAT BOX EVER DO TO YOU HUH?";				
				
					if (penger >= 410){
						
					document.getElementById("end").innerHTML = "FUCK IT, I'M OUT.";				
				
					if (penger >= 420){
						
					document.getElementById("end").innerHTML = "...";
					
					if (penger >= 430){
						
					document.getElementById("end").innerHTML = "OMG YOU'RE HURTING IT.";
					
					if (penger >= 440){
						
					document.getElementById("end").innerHTML = "HOLY SHIT WHAT THE FUCK HAVE YOU DONE?";
					
					if (penger >= 450){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK.";
					
					if (penger >= 460){
						
					document.getElementById("end").innerHTML = "I'M SO GONNA LOSE MY JOB.";
					
					if (penger >= 470){
						
					document.getElementById("end").innerHTML = "FUCK";
					
					if (penger >= 471){
						
					document.getElementById("end").innerHTML = "FUCK FUCK";
					
					if (penger >= 472){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK";
					
					if (penger >= 473){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK FUCK";
					
					if (penger >= 474){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK FUCK FUCK";
					
					if (penger >= 475){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK FUCK FUCK FUCK";
					
					if (penger >= 476){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK FUCK FUCK FUCK FUCK";
					
					if (penger >= 477){
						
					document.getElementById("end").innerHTML = "FUCK FUCK FUCK FUCK FUCK FUCK FUCK FUCK";
					
					if (penger >= 480){
						
					document.getElementById("end").innerHTML = "WHAT ARE YOU TALKING ABOUT? OF COURSE THIS IS A REAL JOB!";
					
					if (penger >= 490){
						
					document.getElementById("end").innerHTML = "WHAT, DO YOU THINK THIS GAME RUNS ITSELF?";
					
					if (penger >= 500){
						
					document.getElementById("end").innerHTML = "OKEY OKEY THINK THINK THINK.";
					
					if (penger >= 510){
						
					document.getElementById("end").innerHTML = "FUCK IT EMERGENCY PONG BUTTON!";
					
					if (penger >= 520){
					window.location.href = "pong/pong.html";
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				}  else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#957fa5";
				ctx.lineWidth = 20;
				
				ctx.beginPath();
				ctx.arc(250,150, 23, 0, 2*Math.PI);
				ctx.fillStyle = "#957fa5";
				ctx.fill();
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				
		
				ctx.beginPath();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(260, 0);
				ctx.lineTo(260, 20);
				ctx.lineTo(260, 30);
				ctx.lineTo(270, 20);
				ctx.lineTo(270, 50);
				ctx.lineTo(280, 35);
				ctx.lineTo(300, 50);
				
				ctx.fillStyle = "#000000";
				ctx.fill();
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 200);
				ctx.lineTo(70, 220);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 12;
		
				ctx.beginPath();
				ctx.moveTo(65, 220);
				ctx.lineTo(65, 240);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(65, 250);
				ctx.lineTo(65, 270);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 200);
				ctx.lineTo(70, 220);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 12;
		
				ctx.beginPath();
				ctx.moveTo(65, 220);
				ctx.lineTo(65, 240);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 200);
				ctx.lineTo(70, 220);
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 10;
		
				ctx.beginPath();
				ctx.moveTo(70, 180);
				ctx.lineTo(70, 200);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 15;
		
				ctx.beginPath();
				ctx.moveTo(70, 150);
				ctx.lineTo(70, 180);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(70, 120);
				ctx.lineTo(70, 150);
				ctx.stroke();	
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#957fa5";
				ctx.lineWidth = 20;
				
				ctx.beginPath();
				ctx.arc(75,125, 50, 0,2*Math.PI);
				
				ctx.fillStyle = "#957fa5";
				ctx.fill();
				
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#FFFFFF";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(60, 120);
				ctx.lineTo(70, 130);
				ctx.lineTo(80, 125);
				ctx.lineTo(90, 140);
				ctx.lineTo(80, 145);
				ctx.lineTo(75, 135);
				ctx.lineTo(65, 140);
				ctx.lineTo(60, 120);
				
				ctx.fillStyle = "#FFFFFF";
				ctx.fill();
				
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
				
				ctx.beginPath();
				ctx.moveTo(200,270);
				ctx.lineTo(270,300);
				ctx.moveTo(230,260);
				ctx.lineTo(230,265);
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#8A0707";
				ctx.lineWidth = 20;
				
				ctx.beginPath();
				ctx.moveTo(200,200);
				ctx.lineTo(230,200);
				ctx.lineTo(230,250);
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
					
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = -penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = -penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = -penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				/*ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}*/
					
				}
				
				} else {
					penger++;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				/*ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}*/
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				/*ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}*/
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				/*ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}*/
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
			
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}
				
				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
					ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
					
				}

				} else {
					penger++;
					document.getElementById("penger").innerHTML = penger;
					
				ctx = document.getElementById("tegneflate").getContext("2d");
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,100);
				ctx.lineTo(300,100);
				ctx.moveTo(50,100);
				ctx.lineTo(50,150);
				ctx.lineTo(125,150);
				ctx.lineTo(125,100);
		
				ctx.moveTo(250,100);
				ctx.lineTo(250,150);
				ctx.lineTo(175,150);
				ctx.lineTo(175,100);
		
				ctx.fillStyle = "#000000";
				ctx.fill();
		
				ctx.stroke();
				
				ctx.strokeStyle = "#000000";
				ctx.lineWidth = 20;
		
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(300,0);
				ctx.lineTo(300,300);
				ctx.lineTo(0,300);
				ctx.lineTo(0,0);
				
				ctx.stroke();
				
				
			
				setTimeout(press, 100);

				function press() {
					
					ctx.strokeStyle = "#FFFFFF";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(300,0);
					ctx.lineTo(300,300);
					ctx.lineTo(0,300);
					ctx.lineTo(0,0);
					
					ctx.stroke();
					
					ctx.strokeStyle = "#000000";
					ctx.lineWidth = 20;
					
					ctx.beginPath();
					ctx.moveTo(0,100);
					ctx.lineTo(300,100);
					
					
					ctx.stroke();
				}
				
				}
				
				}
				
				} else{
				document.getElementById("notEnough").innerHTML = "NOT ENOUGH MONEY";
				setTimeout(myTimer1, 1000);

				function myTimer1() {
					document.getElementById("notEnough").innerHTML = "";
					}
				}
				}
		
		