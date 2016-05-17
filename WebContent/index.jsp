<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Ajax JSP Call Demo</title>

<!-- link rel="stylesheet" type="text/css" href="css/myStyle2.css"-->
<!--  working combinations : {myStyle2, myAjax}, {myStyle2, myAjax4}, {myAjax2} -->
<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="js/myAjax2.js"></script>
</head>
<body id="body">
<div> 
Enter you name here : <input type="text" id="nmeinput"></input>
<br/>
<input type="button" value="click me" id="btn1"></input>
</div>
<div>
<span id="msg"></span>
</div>
<div class="modal"><!-- Place at bottom of page --></div>
</body>
</html>