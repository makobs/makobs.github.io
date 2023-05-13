let app = angular.module('fp', ['ngRoute']); //module

const htmlHome = loadHTML('../csv-to-html-table/helper/home.html'); //`<h2>Home</h2><p>This is the Home Page.</p>`;
const htmlAbout = loadHTML('../csv-to-html-table/helper/index.html'); //`<h2>About</h2><p>This is the About Page.</p>`;
const htmlDataCleaning = `<h2>Data Cleaning</h2><p>This is the Data Cleaning Page.</p>`;
const htmlDataVisualizations = `<h2>Data Visualizations</h2><p>This is the Data Visualizations Page.</p>`;


app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix("");

	$routeProvider
	.when('/', {
		template: htmlHome
	})
	.when('/about', {
		template: htmlAbout
	})
	.when('/data-cleaning', {
		template: htmlDataCleaning
	})
	.when('/data-visualizations', {
		template: htmlDataVisualizations
	})
	.otherwise({
		redirectTo: '/'
	});
});



