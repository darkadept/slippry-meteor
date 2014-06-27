Package.describe({
	summary: "Slippry packaged for Meteor"
});

Package.on_use(function(api) {

	api.use(['jquery'], 'client');

	var path = Npm.require('path');
	var assetPath = path.join('lib/slippry/dist/');
	var assetFiles = [
		assetPath + 'slippry.min.js',
		assetPath + 'slippry.css',
		assetPath + 'assets/img/arrows.svg',
		assetPath + 'assets/img/sy-loader.gif'
	];
	api.add_files(assetFiles, 'client');

});
