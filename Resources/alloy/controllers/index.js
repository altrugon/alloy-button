function Controller() {
    function doClick(e) {
        var controller = Alloy.createController("bye"), view = controller.getView();
        view.modal = !0;
        view.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        title: "Hello",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "#efefef",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.btnLogin = Ti.UI.createButton({
        color: "#fff",
        backgroundImage: "/button_orange.png",
        borderRadius: 5,
        left: 10,
        right: 10,
        width: Ti.UI.FILL,
        height: 57,
        font: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        id: "btnLogin",
        title: "Login"
    });
    $.__views.__alloyId1.add($.__views.btnLogin);
    doClick ? $.__views.btnLogin.addEventListener("click", doClick) : __defers["$.__views.btnLogin!click!doClick"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("android:back", function(e) {
        var win = Ti.UI.getCurrentWindow();
        win.close();
    });
    $.index.open();
    __defers["$.__views.btnLogin!click!doClick"] && $.__views.btnLogin.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;