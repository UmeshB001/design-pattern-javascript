//Module Design Pattern

//Create a real privacy control
//Having Clear Public API
//True Encapsulation

    var chatModule = (function(){
        var leadself = 'Me: ',
        leadcomputer = "PC: ",
        aSaid = ["This is a Cyber Chat"],
        msgYes = "Yes, that's a great idea.",
        msgNo = "No, that must be a mistake.",
        aSassyStuff = ["Like mold on books, grow myths on history.",
                        "She moved like a poem and smiled like a sphinx.",
                        "As long as we don’t die, this is gonna be one hell of a story.",
                        "She laughed, and the desert sang.",
                        "You’ve got about as much charm as a dead slug."];
    
        function echo(msg){
            aSaid.push("<div>"+msg+"</div>");
    
            var aSaidLenght = aSaid.length,
                start = Math.max(aSaidLenght - 6,0);
            out ="";
            for(var i=start; i<aSaidLenght;i++){
                out += aSaid[i];
            }
            $('.advert').html(out);
            $('#talk span').text(msg);
        }
    
        return{
    
            talk : function(msg){
            	echo(leadself + msg);
            },
    
            replayYesNo : function(){
            				var msg = Math.random()>.6 ? msgYes : msgNo;
            				echo(leadcomputer + msg);
            },
    
            saySassyStuff : function (){
            				var msg = aSassyStuff[Math.floor(Math.random()*aSassyStuff.length)];
            				echo(leadcomputer + msg);
            }		
        };
    })();

    $(document).ready(function(){
        chatModule.talk("this is great");
        chatModule.replayYesNo();
        chatModule.saySassyStuff();
        });