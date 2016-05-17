$(document).ready(function(){
	//alert("inside line 1");
	$('#btn1').click(function(){
		//alert("inside btn click");
		$.ajax({
			type:"POST",
			url:"/AjaxDemo/AjaxContainer",
			data:"",
			success:function(result){
				//alert("inside success")
				$('#msg').html(result);
			}			
		});
	});
});

$(document).on({
    ajaxStart: function() { $('#body').addClass("loading"); $('#body').css('cursor', 'wait');    },
    ajaxStop: function() { $('#body').removeClass("loading"); $('#body').css('cursor', 'default'); }    
});