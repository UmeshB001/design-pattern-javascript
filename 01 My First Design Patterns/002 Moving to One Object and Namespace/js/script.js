//NameSpacing
// var com = com || {};
// com.chat = com.chat || {};
// com.chat.packt = com.chat.packt || {};
// com.chat.packt.JSDP = com.chat.packt.JSDP || {};
// com.chat.packt.JSDP.sudoChat ={}//following object
var o = {
		leadself : 'Me: ',
		_leadcomputer : "PC: ",
		aSaid : ["This is a Cyber Chat"],
		msgYes : "Yes, that's a great idea.",
		msgNo : "No, that must be a mistake.",
		aSassyStuff : ["Like mold on books, grow myths on history.",
						"She moved like a poem and smiled like a sphinx.",
						"As long as we don’t die, this is gonna be one hell of a story.",
						"She laughed, and the desert sang.",
						"You’ve got about as much charm as a dead slug."],

		talk : function(msg){
				this.echo(this.leadself + msg);
			},

		replayYesNo : function(){
						var msg = Math.random()>.6 ? this.msgYes : this.msgNo;
						this.echo(this._leadcomputer + msg);
		},

		saySassyStuff : function (){
						var msg = this.aSassyStuff[Math.floor(Math.random()*this.aSassyStuff.length)];
						this.echo(this._leadcomputer + msg);
		},

		echo : function(msg){
				this.aSaid.push("<div>"+msg+"</div>");

				var aSaidLenght = this.aSaid.length,
					start = Math.max(aSaidLenght - 6,0);
				out ="";
				for(var i=start; i<aSaidLenght;i++){
					out += this.aSaid[i];
				}
				$('.advert').html(out);
				$('#talk span').text(msg);
		}

};