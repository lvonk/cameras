$(function () {
  var images = {
    "DSC_0479": "DSC_0481",
    "DSC_0485": "DSC_0486"
  };
  var $cameras = $("#cameras");

  for (var image in images) {
    var $row = $("<div class='row'>");
    var $panel = $("<div class='panel panel-default'>");
    var $panelBody = $("<div class='panel-body'>");
    var $left = $("<div class='col-lg-6'>");
    var $right = $("<div class='col-lg-6'>");

    $left.append("<img width='100%' src='img/" + images[image] + ".JPG' class='img-rounded photo'>");
    $right.append("<img width='100%' src='img/" + image + ".JPG' class='img-rounded description'>");

    $panelBody.append($left);
    $panelBody.append($right);

    $panel.append($panelBody);

    $row.append($panel);
    $cameras.append($row);
  }

});
