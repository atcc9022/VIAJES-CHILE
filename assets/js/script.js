// // TYPEFORM
(function () {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q)
    }
})()

// TOOLTIP(para iconos de "quienes somos")
$(document).ready(function(){
    $('fas fa-plane').tooltip({title:"AVION", trigger: "hover"});
    $('fas fa-mountain').tooltip({title:"MONTAÑA", trigger: "hover"});
    $('fas fa-route').tooltip({title:"RUTA", trigger: "hover"});


});

