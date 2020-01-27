sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function(Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App9.controller.MainView", {

    _createNewEntity: function (oView, isOnInit) {
			var oModel = isOnInit ? this.getOwnerComponent().getModel() : oView.getModel(),
				oListBinding = oModel.bindList("/Authors", undefined, undefined, undefined, {
					$$updateGroupId: "updateGroup"
				});

			var oContext = oListBinding.create({
        ID: "",
        name: ""
				
			});
			oView.setBindingContext(oContext);
		},
		onInit: function () {
			this._createNewEntity(this.getView(), true);
		},

		onCreate: function () {
			var that = this,
				oView = this.getView(),
				oModel = oView.getModel();
			
			oModel.submitBatch("updateGroup");

			oView.getBindingContext().created().then(function () {
				MessageToast.show("Author created");
        that._createNewEntity(oView, false);
        that.getView().byId("authors").getBinding("items").refresh();;
			});
		}

  });
});
