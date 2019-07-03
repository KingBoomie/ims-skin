<?php
/**
 * SkinTemplate class for the IMS skin
 *
 * @ingroup Skins
 */
class SkinIMS extends SkinTemplate {
	public $skinname = 'ims';
	public $stylename = 'IMS';
	public $template = 'IMSTemplate';

	/**
	 * Add CSS via ResourceLoader
	 *
	 * @param $out OutputPage
	 */
	public function initPage( OutputPage $out ) {
		$out->addMeta( 'viewport',
			'width=device-width, initial-scale=1.0, ' .
			'user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0'
		);

		$out->addModuleStyles( [
			// 'mediawiki.skinning.interface',
			// 'mediawiki.skinning.content.externallinks',
			'skins.ims'
		] );
		$out->addModules( [
			'skins.ims.js'
		] );
	}

	/**
	 * @param $out OutputPage
	 */
	function setupSkinUserCss( OutputPage $out ) {
		parent::setupSkinUserCss( $out );
	}
}
