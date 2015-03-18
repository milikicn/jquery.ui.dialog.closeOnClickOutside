/**
 * jQuery UI Dialog Close on Click Outside - Extension to jQuery UI Dialog plugin that adds option to close dialog by clicking outside of the dialog
 * 
 * Version: 0.1
 * 
 * Copyright (c) 2015 Nikola Milikic
 * Released under the MIT license - http://opensource.org/licenses/MIT
*/

$.widget("ui.dialog", $.ui.dialog, {
	options : {
		closeOnClickOutside : true, // Additional option for determining whether dialog should be closed when clicked outside. Default is true.
	},

	open : function(event) {
		var $this = this;

		this._super(); // Invoke open on parent

		if (this.options.closeOnClickOutside) {
			jQuery('.ui-widget-overlay').on('click', function() {
				jQuery($this.originalPosition.parent.context).dialog('close');
			})
		}
	},

});