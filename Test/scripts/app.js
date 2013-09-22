(function (global) {
  app = global.app = global.app || {};
  document.addEventListener("deviceready", onDeviceReady, false);
})(window);

function onDeviceReady() {
  app.application = new kendo.mobile.Application(document.body, {
    layout: "tabstrip-layout",
    skin: "flat"
  });

  function compute() {
    var caseTotal = $('#casePrice').val() / $('#caseQty').val() || 0;
    var primerTotal = $('#primerPrice').val() / $('#primerQty').val() || 0;
    var powderTotal = $('#powderPrice').val() / ($('#powderQty').val() * 7000 / $('#grainsQty').val()) || 0;
    var bulletTotal = $('#bulletPrice').val() / $('#bulletQty').val() || 0;
    var total = (caseTotal + primerTotal + powderTotal + bulletTotal);

    var roundsPowder = ($('#powderQty').val() * 7000) / $('#grainsQty').val();
    $('#roundsPowder').val(roundsPowder.toFixed(0));

    var rounds = $('#rounds').val();
    $('#roundsPrice').val((total * rounds).toFixed(3));
    $('#onePrice').val((1 * total).toFixed(3));
    $('#50Price').val((50 * total).toFixed(3));
    $('#100Price').val((100 * total).toFixed(3));
    $('#500Price').val((500 * total).toFixed(3));
    $('#1000Price').val((1000 * total).toFixed(3));

    console.log(caseTotal, primerTotal, powderTotal, bulletTotal, total);
  }
  $('.field').keyup(compute);
}