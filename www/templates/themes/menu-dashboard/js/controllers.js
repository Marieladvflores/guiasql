// Controller of menu dashboard page.
appControllers.controller('menuDashboardCtrl', function ($scope, $mdToast) {
    // openMap is for open Google Map application.
    // Parameter :  
    // targetDestinationLocation = latitude,longitude of the destination location.
    $scope.openMap = function () {

    	// window.open is to link to URL.
        // The format is geo:?q=targetDestinationLocation(latitude,longitude)&z=15(Specifies the zoom level of the map).
        //  '_system' is for open map application
        window.open('geo:0,0?q=' + 'Villa La Angostura, Neuquen, Argentina' + '&z=15', '_system');
        // If you would like to custom map you can use this parameter below:
  		// latitude and longitude set the center point of the map.
		// z optionally sets the initial zoom level of the map. Accepted values range from 0 (the whole world) to 21 (individual buildings).
		// The upper limit can vary depending on the map data available at the selected location.
    };// End openMap
	
	// links exter
    $scope.openServicios = function () {
        window.open("https://villalaangostura.org/guia-servicios/", '_blank', 'location=no');
    };	
    $scope.openClasificados = function () {
        window.open("https://clasificados.villalaangostura.org/", '_blank', 'location=no');
    };		
    $scope.openBuscar = function () {
        window.open("https://villalaangostura.org/guia-app/", '_blank', 'location=no');
    };		
});// End of controller menu dashboard.