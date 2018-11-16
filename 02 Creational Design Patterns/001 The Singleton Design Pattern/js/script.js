//Check out the delayed instantiation of an object
//Take a look at a constant interface to gain access to the object
//See how only one instance of the object is needed     

(function(win, $){
    var CircleGeneratorSingleton = (function(circle,left,top){
        var instance;

        function init(){
            var _aCircle = [],
            _stage = $('.advert'); 

            function _position(circle,left,top){
                circle.css('left',left);
				circle.css('top',top);
            }

            function create(left, top){
                var circle = $('<div class="circle"></div>');
                _position(circle, left, top);
                return circle;
            }

            function add(circle){
                _stage.append(circle);
                _aCircle.push(circle);
            }

            function index(){
                return _aCircle.length;
            }
            return {index:index,
                    create:create,
                    add:add}; 
        }

        return{
            getInstance : function(){
                if(!instance){
                    instance = init();
                }
                return instance;
            }  
        }
    })();

	$(win.document).ready(function(){
		$('.advert').click(function(e){
         var cg = CircleGeneratorSingleton.getInstance();
         var circle = cg.create(e.pageX-25,e.pageY-25);
         cg.add(circle);	
        });
        
        $(document).keypress (function(e){
            if (e.key =='a'){
                var cg = CircleGeneratorSingleton.getInstance();
                var circle = cg.create(Math.floor(Math.random()*600),Math.floor(Math.random()*600));
                cg.add(circle);
            }
        });
    });
})(window, jQuery);

// })(window, jQuery);


// (function(win, $){
// 	$(win.document).ready(function(){
// 		$('.advert').click(function(e){
// 			var circle = $('<div class="circle"></div>');
// 				circle.css('left',e.pageX-25);
// 				circle.css('top',e.pageY-25)
// 			$('.advert').append(circle);
// 		});

// 	});

// })(window, jQuery);