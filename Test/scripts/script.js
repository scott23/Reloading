$(document).ready(function() {
  function compute() {
    var caseTotal = $('#casePrice').val() / $('#caseQty').val() || 0;
    var primerTotal = $('#primerPrice').val() / $('#primerQty').val() || 0;
    var powderTotal = $('#powderPrice').val() / ($('#powderQty').val() * 7000 / $('#grainsQty').val()) || 0;
    var bulletTotal = $('#bulletPrice').val() / $('#bulletQty').val() || 0;
    var total = (caseTotal + primerTotal + powderTotal + bulletTotal);
    var finalTotal = (total.toFixed(3));

    var rounds = $('#rounds').val();
    $('#roundsPrice').val(rounds * finalTotal);
    $('#onePrice').val(1 * finalTotal);
    $('#50Price').val(50 * finalTotal);
    $('#100Price').val(100 * finalTotal);
    $('#500Price').val(500 * finalTotal);
    $('#1000Price').val(1000 * finalTotal);

    console.log(caseTotal, primerTotal, powderTotal, bulletTotal, rounds, finalTotal);
  }
  $('.field').keyup(compute);
});