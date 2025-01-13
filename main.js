let input1Value;
let input2Value;

$(".add").click(function () {
  input1Value = Number($("#input1").val());
  input2Value = Number($("#input2").val());
  let results = input1Value + input2Value;
  $("#result").val(results);
});
$(".minus").click(function () {
  input1Value = Number($("#input1").val());
  input2Value = Number($("#input2").val());
  let results = input1Value - input2Value;
  $("#result").val(results);
});

$(".times").click(function () {
  input1Value = Number($("#input1").val());
  input2Value = Number($("#input2").val());
  let results = input1Value * input2Value;
  $("#result").val(results);
});

$(".devid").click(function () {
  input1Value = Number($("#input1").val());
  input2Value = Number($("#input2").val());
  let results = input1Value / input2Value;
  $("#result").val(results);
});
