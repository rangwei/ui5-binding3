/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/myorg/myUI5App9/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
