var i=1;

  $(function(){

      MyInterval=setInterval("next()",5000);

      

      });     

   function next()

    { 

        a=i;

        i=i+1;

        if(i>3)

        {

            i=1;

            }

            $("#showimg"+i).fadeIn("slow");

            $("#showimg"+a).fadeOut("slow");

        } 

    function prov()

    {

     

        a=i;

        i=i-1;

        if(i<1)

        {

             i=3;

            }

            $("#showimg"+i).fadeIn("slow");

            $("#showimg"+a).fadeOut("slow");

        } 




$(function(){
		
	$("ul.tabmenu li:first-child").addClass("current");
	$("div.tabcontent").find("div.tablayout:not(:first-child)").hide();
	$("div.tabcontent div.tablayout").attr("id", function(){return idNumber("No")+ $("div.tabcontent div.tablayout").index(this)});
	$("ul.tabmenu li").mouseover(function(){
	var c = $("ul.tabmenu li");
	var index = c.index(this);
	var p = idNumber("No");
	show(c,index,p);
	});  
	function show(controlMenu,num,prefix){
	var content= prefix + num;
	$('#'+content).siblings().hide();
	$('#'+content).show();
	controlMenu.eq(num).addClass("current").siblings().removeClass("current");
	};
	function idNumber(prefix){
	var idNum = prefix;
	return idNum;
	};

    var speed = 0;
    $('.butt').click(function(){
    	if( speed ==0){	
	    	$(this).css('transform','rotate(180deg)');
	    	$('.icon').css('right','35px');
	    	$('.icon').fadeIn(200);
    		speed = 1;
    	}else{
	    	$(this).css('transform','rotate(0)');
	    	$('.icon').css('right','-65px');
	    	$('.icon').fadeOut(200);;
    		speed = 0;
    	}
    })

})

	