(function (global) {
    var mobileSkin = "",
        app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { 
            layout: "tabstrip-layout",
        	transition:'zoom'
        });
    
    }, false);

    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            mobileSkin = "flat";
        }
        else {
            e.sender.element.text("Flat");
            mobileSkin = "";
        }

        app.application.skin(mobileSkin);
    };
    
})(window)


    function compute() {
          var a = $('#a').val();
          var b = $('#b').val();
          var total = a * b;
          $('#total').val(total);
        }

        $('#a, #b').keyup(compute);