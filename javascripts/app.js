$(function () {
  var images = {
    "DSC_0479": "DSC_0481",
    "DSC_0485": "DSC_0486",
    "DSC_0488": "DSC_0490",
    "DSC_0491": "DSC_0493",
    "DSC_0494": "DSC_0495",
    "DSC_0496": "DSC_0497",
    "DSC_0498": "DSC_0499",
    "DSC_0501": "DSC_0503",
    "DSC_0504": "DSC_0505",
    "DSC_0507": "DSC_0508",
    "DSC_0509": "DSC_0510",
    "DSC_0512": "DSC_0513",
    "DSC_0514": "DSC_0516",
    "DSC_0518": "DSC_0520",
    "DSC_0525": "DSC_0526",
    "DSC_0527": "DSC_0528",
    "DSC_0532": "DSC_0534",
    "DSC_0535": "DSC_0536",
    "DSC_0537": "DSC_0539",
    "DSC_0540": "DSC_0542",
    "DSC_0543": "DSC_0544",
    "DSC_0545": "DSC_0546",
    "DSC_0547": "DSC_0548",
    "DSC_0550": "DSC_0552",
    "DSC_0553": "DSC_0555",
    "DSC_0557": "DSC_0559",
    "DSC_0563": "DSC_0565",
    "DSC_0566": "DSC_0568",
    "DSC_0569": "DSC_0570",
    "DSC_0572": "DSC_0573",
    "DSC_0574": "DSC_0575",
    "DSC_0577": "DSC_0578",
    "DSC_0579": "DSC_0580",
    "DSC_0581": "DSC_0582",
    "DSC_0583": "DSC_0584",
    "DSC_0585": "DSC_0586",
    "DSC_0587": "DSC_0588",
    "DSC_0589": "DSC_0590",
    "DSC_0591": "DSC_0593",
    "DSC_0594": "DSC_0595",
    "DSC_0596": "DSC_0597",
    "DSC_0598": "DSC_0599",
    "DSC_0600": "DSC_0601",
    "DSC_0602": "DSC_0603",
    "DSC_0604": "DSC_0605",
    "DSC_0606": "DSC_0607",
    "DSC_0608": "DSC_0609",
    "DSC_0610": "DSC_0611",
    "DSC_0612": "DSC_0613",
    "DSC_0614": "DSC_0615",
    "DSC_0616": "DSC_0617",
    "DSC_0618": "DSC_0619",
    "DSC_0620": "DSC_0621",
    "DSC_0622": "DSC_0624",
    "DSC_0625": "DSC_0626",
    "DSC_0627": "DSC_0629",
    "DSC_0630": "DSC_0631",
    "DSC_0632": "DSC_0634",
    "DSC_0635": "DSC_0636",
    "DSC_0640": "DSC_0641",
    "DSC_0642": "DSC_0643",
    "DSC_0644": "DSC_0645",
    "DSC_0646": "DSC_0647",
    "DSC_0648": "DSC_0649",
    "DSC_0650": "DSC_0651",
    "DSC_0652": "DSC_0653",
    "DSC_0654": "DSC_0655",
    "DSC_0656": "DSC_0657",
    "DSC_0658": "DSC_0659",
    "DSC_0660": "DSC_0661",
    "DSC_0662": "DSC_0663",
    "DSC_0664": "DSC_0665",
    "DSC_0666": "DSC_0667",
    "DSC_0668": "DSC_0669",
    "DSC_0670": "DSC_0671",
    "DSC_0672": "DSC_0673",
    "DSC_0674": "DSC_0675",
    "DSC_0676": "DSC_0677",
    "DSC_0678": "DSC_0679",
    "DSC_0680": "DSC_0681",
    "DSC_0682": "DSC_0683",
    "DSC_0684": "DSC_0685"
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
