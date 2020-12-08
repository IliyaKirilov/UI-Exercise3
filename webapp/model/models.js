sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
			createProductsModel: function () {
			var productsPath = jQuery.sap.getModulePath("kpmg.home.Exercise3", "/model/products.json");
			var productsModel = new JSONModel(productsPath);
			return productsModel;
		}

	};
});