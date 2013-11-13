Ext.ns("TYPO3.Devlog.Store");

TYPO3.Devlog.Store.initExtensionListStore = function() {
	return new Ext.data.ArrayStore({
		fields: ['key', 'value', 'className'],
		data : TYPO3.Devlog.Data.ExtensionList
	});
}
