/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 19.06.13
 * Time: 14:43
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $("table .btn.btn-primary").on('click', function(ev){
        var userId = $(this).data('id');
        console.log(userId);
    });
});
