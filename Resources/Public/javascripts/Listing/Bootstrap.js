Ext.ns("TYPO3.Devlog.Listing");

/**
 * @class TYPO3.Devlog.Listing.Bootstrap
 * @namespace TYPO3.Devlog.Listing
 * @extends TYPO3.Newsletter.Application.AbstractBootstrap
 *
 * Bootrap module statistics
 *
 * $Id: Bootstrap.js 40423 2010-11-18 17:16:19Z fabien_u $
 */
TYPO3.Devlog.Listing.Bootstrap = Ext.apply(new TYPO3.Devlog.Application.AbstractBootstrap, {
	initialize: function() {

	}
});

TYPO3.Devlog.Application.registerBootstrap(TYPO3.Devlog.Listing.Bootstrap);