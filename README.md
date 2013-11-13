devlog
======

Working version of devlog for TYPO3 6.x


Usage
=====

**Log simple message:**  
<code>
\TYPO3\CMS\Core\Utility\GeneralUtility::devlog("Message","extension_key",$severity, array());</code>  
Severity can be a number between 0 and 3.

**Log message with array of debug variables**
<code>
\TYPO3\CMS\Core\Utility\GeneralUtility::devlog("Message","extension_key",$severity, array($debugVar1, $debugVarX));</code>  
