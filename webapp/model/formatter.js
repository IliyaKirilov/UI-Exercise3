sap.ui.define([], function () {
	"use strict";
	return {
		checkingStatus: function (status) {
			
			switch(status){
				case "Available":
					return 'Available';
				default:
					return 'Not Available';
			}
		}
	};
});