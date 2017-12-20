sap.ui.define(['sap/ui/core/UIComponent'],
    function(UIComponent) {
    "use strict";

    var Component = UIComponent.extend("sap.viz.sample.Pie.Component", {

        metadata : {
            rootView : "sap.viz.sample.Pie.Pie",
            includes : ["../../css/exploredStyle.css"],
            dependencies : {
                libs : [
                    "sap.viz",
                    "sap.m"
                ]
            },
            config : {
                sample : {
                    stretch : true,
                    files : [
                        "Pie.view.xml",
                        "Pie.controller.js",
                        "InitPage.js"
                    ]
                }
            }
        }
    });

    return Component;

});
