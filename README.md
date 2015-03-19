jQuery UI Dialog Close on Click Outside
=============================

This plugin extends basic jQuery UI Dialog by adding a new option **closeOnClickOutside** that controls whether dialog should be closed when clicking outside of it.

## How to use
In order to use this plugin, include file *jquery.ui.dialog.closeOnClickOutside.js* after a javascript containing jQuery UI Dialog plugin. Usually, jQuery UI Dialog is included in the jQuery UI bundle.

This plugin is tested with jQuery v1.10.2 and jQuery UI 1.11.2, but it should work with other (relatively new) versions.

## Example

Include in your HTML file after jQuery UI bundle:

```javascript 
...
<script src="/prosolo/resources/javascript/jquery-ui-1.11.2.min.js"></script>
<script src="/prosolo/resources/javascript/jquery.ui.dialog-clickoutside.js"></script>
...
```

By default, jQuery UI dialogs are enhanced with this functionality and will be closed when clicked outside of it (on the overlay). If you want to manually control this feature, you can set **closeOnClickOutside** option when initializing a dialog.

```javascript
	$('#dialog').dialog({
		width: 600,
		modal: true,
		closeOnClickOutside: false
	});
```

## Credits

This plugin was inspired by the plugin [jQuery-UI-Dialog-ClickOutside](https://github.com/coheractio/jQuery-UI-Dialog-ClickOutside). It didn't work for me with my version of jQuery and jQuery UI, so I have reimplemented it and made the feature of closing a dialog when clicking outside of it default.