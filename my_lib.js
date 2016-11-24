/**
 * Created by dchristo on 11/24/16.
 */

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

var escape_space = function(string){
    return (string.replace(" ", "+"));
};

var isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var get_page = function(document)
{
    var CheminComplet = document; // document.location.href
    return CheminComplet.substring(CheminComplet.lastIndexOf("/") + 1);
};

var date_today = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (second < 10){
        second = '0' + second;
    }
    today = yyyy + '/' + mm + '/' + dd + ',' + hours + ':' + minutes + ':' + second;
    return today;
};

var random = function(size) {
    var liste = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "0","1","2","3","4","5","6","7","8","9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","\\","|",";",":",",","<","\.",">","/","?"];
    var result = '';
    for (i = 0; i < size; i++) {
        result += liste[Math.floor(Math.random() * liste.length)];
    }
    return result;
};

var simple_ajax = function(method, url, data, callback){
    $.ajax({
        url: url,
        method: method,
        data: data
    })
        .done(function(res) {
            callback(res);
        });
};

var is_it_in_object = function(objet, to_find){
    for(var index in objet)
        if(objet[index] == to_find)
            return true;
    return false;
};

var reg_password = function(password) {
    var password_regex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-z^A-Z^0-9]).{8,}$/);
    return(!password_regex.test(password));
};

var reg_email = function(email) {
    var email_regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
    return (!email_regex.test(email));
};

var var_exist = function(variable) {
    if (variable === undefined || typeof variable === 'undefined' || variable === null)
      return true;
};