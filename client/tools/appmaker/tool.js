var AppMaker = new Tool('AppMaker')
AppMaker.set('color', 'rgba(71, 41, 54, 1)')
AppMaker.set('description', 'Turn your project into a FirefoxOS app.')
AppMaker.set('beta', 'true')

AppMaker.on('open', function () {
  $('#AppMakerManifestUrlLink').html('http://' + document.location.host + '/manifest.webapp')
})

AppMaker.install = function () {
  
  $.ajax({
    url: "/nudgepad/tools/appmaker/manifest.webapp",
    type: "get",
    dataType : 'text'
  }).done(function (response, textStatus, jqXHR){
    Explorer.set('manifest.webapp', response.toString(), function () {
      Flasher.success('Manifest Created')
    })
  })

}

// http://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
AppMaker.selectText = function (containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}
