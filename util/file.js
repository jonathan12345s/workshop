jQuery(document).ready(function($) {
	var base_url = window.location.origin;

    $("#post").click(function(event) {
    	var first_name=$('#first_name').val();
    	var last_name=$('#last_name').val();
        var username=$('#username').val();
        var password=$('#password').val();

    debugger
    
        $.ajax({
            type: 'POST',
            url: base_url + "/ajaxLogin/crear",
            data: {
                'first_name': first_name,
                'last_name': last_name,
                'username': username,
                'password': password
            },
            success: function data(dato) {
            	$(".footer").text(dato);
            }
        })
    });
});