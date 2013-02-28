Ti.App.addEventListener('android:back', function(e) {
    var win = Ti.UI.getCurrentWindow();
    //win.exitOnClose = true;
    win.close();
  });


function doClick(e) {  
    //alert($.label.text);
  var controller = Alloy.createController('bye');
  // if android then open the view as a new activity
  var view = controller.getView();
  view.modal = true;
  view.open();
}

$.index.open();
