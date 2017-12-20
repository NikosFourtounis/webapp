sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog",
	"sap/ui/core/UIComponent"]
], function (UIComponent, JSONModel, HelloDialog,UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.wt.Component", {

		metadata : {
			manifest: "json",
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

