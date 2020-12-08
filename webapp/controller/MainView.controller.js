sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise3.controller.MainView", {
		formatter: formatter,
		onInit: function () {

		},
		
		onFilterInvoices : function (Event) {

			// build filter array
			var aFilter = [];
			var sQuery = Event.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});