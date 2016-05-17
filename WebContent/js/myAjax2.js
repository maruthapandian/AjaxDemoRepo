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

$.ajaxSetup({
    error:function(x,e,xhr){
        if(x.status==0){
            alert('You are offline!!\n Please Check Your Network.');
        }else if(x.status==404){
            alert('Requested URL not found.');
        }else if(x.status==500){
            //alert('Internal Server Error.\n'+x.responseText+xhr.responseText);
        	alert("Issue in data retrevial. Contact Administrator. \n Reponse code : " + x.status);
        }else if(e=='parsererror'){
            alert('Error.\n Parsing JSON Request failed.');
        }else if(e=='timeout'){
            alert('Request Time out.');
        }else {
        	alert("Issue in data retrevial. Contact Administrator. \n Reponse code " + x.status);
            //alert('Unknown Error.\n'+x.responseText);
        }
    }
});

$(document).on({
    ajaxStart: function() { 
    	//$('#body').addClass("loading");
    	ajaxindicatorstart('Data retrevial in progress.. please wait..');
    	},
    ajaxStop: function() { 
    	//$('#body').removeClass("loading");
    	ajaxindicatorstop();
    	}    
});

function ajaxindicatorstart(text)
{
	if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
	jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="/AjaxDemo/images/page-loader.gif"><div>'+text+'</div></div><div class="bg"></div></div>');
	}
	jQuery('#resultLoading').css({
		'width':'100%',
		'height':'100%',
		'position':'fixed',
		'z-index':'10000000',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto'
	});
	jQuery('#resultLoading .bg').css({
		'background':'#000000',
		'opacity':'0.7',
		'width':'100%',
		'height':'100%',
		'position':'absolute',
		'top':'0'
	});
	jQuery('#resultLoading>div:first').css({
		'width': '250px',
		'height':'75px',
		'text-align': 'center',
		'position': 'fixed',
		'top':'0',
		'left':'0',
		'right':'0',
		'bottom':'0',
		'margin':'auto',
		'font-size':'16px',
		'z-index':'10',
		'color':'#ffffff'
	});
	jQuery('#resultLoading .bg').height('100%');
	jQuery('#resultLoading').fadeIn(300);
	jQuery('body').css('cursor', 'wait');
}

function ajaxindicatorstop()
{
jQuery('#resultLoading .bg').height('100%');
jQuery('#resultLoading').fadeOut(300);
jQuery('body').css('cursor', 'default');
}

/*
jQuery(document).ajaxStart(function () {
  //show ajax indicator
  ajaxindicatorstart('loading data.. please wait..');
}).ajaxStop(function () {
//hide ajax indicator
ajaxindicatorstop();
});


If you want to do an specific ajax request without having the loading indicator, you can do it like this by setting global:false
jQuery.ajax({
global: false,
// ajax stuff
});
*/