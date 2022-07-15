# [Intelligent Materials and Systems](https://ims.ut.ee/) MediaWiki skin

To install put the repo into `mediawiki/skins`. In `LocalSettings.php`:

* add `wfLoadSkin( 'IMS' );` to load it
* set it as the default skin with `$wgDefaultSkin = 'IMS';`

Consult before copying.

# Deployment

```
cd /var/lib/mediawiki.v2/skins
sudo git clone https://iharsuvorau@bitbucket.org/iharsuvorau/ims-skin.git && sudo rm -rf IMS && sudo mv ims-skin IMS
```