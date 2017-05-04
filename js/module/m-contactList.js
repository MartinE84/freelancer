$(document).ready(function() {
    //collapsible
     $('#contactList__titleBox').click(function(){
        $('#contactList__collapsible').slideToggle('slow');
    });
    
    //hover input
    $('#contactList__searchBox').mouseenter(function(){
        $('#contactList__searchBox, #search__input').addClass('is-hover');
    });
    $('#contactList__searchBox').mouseleave(function(){
        $('#contactList__searchBox, #search__input').removeClass('is-hover');
    });
    
    //get JSON
   var box_contact;
    $.get('contact.html', function (data_c) {
              
            box_contact = data_c;
            $.getJSON('contact-list-users.json', function(data){
        
                $.each(data, function(i, usuario){
                    //console.log(usuario);
                    $.when( $("#contactList__collapsible-list").append(box_contact)).done(function(){
                        
                        var status_profileBox = (usuario.status == 'Offline') ? 'offBox' : 'onBox';
                        var obj = $("#contactList__collapsible-list .contactList__profileBox:last").addClass(status_profileBox);
                        obj.find('.profile__user').html(usuario.username);
                        obj.find('.profile__img').attr('src' , usuario.profileimage);
                        var status_class = (usuario.status == 'Offline') ? 'offline' : 'online';
                        obj.find('.profile__state .profile__state-circle').addClass(status_class);                
                        
                    });
                    
                });
                
            });               
    });
           
});
