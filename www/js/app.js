//
//Welcome to app.js
//This is main application config of project. You can change a setting of :
//  - Global Variable
//  - Theme setting
//  - Icon setting
//  - Register View
//  - Spinner setting
//  - Custom style
//
//Global variable use for setting color, start page, message, oAuth key.
var db = null; //Use for SQLite database.
window.globalVariable = {
    //custom color style variable
    color: {
        appPrimaryColor: "",
        dropboxColor: "#017EE6",
        facebookColor: "#3C5C99",
        foursquareColor: "#F94777",
        googlePlusColor: "#D73D32",
        instagramColor: "#517FA4",
        wordpressColor: "#28a54c"
    },// End custom color style variable
    startPage: {
        url: "/app/menuDashboard",//Url of start page.
        state: "app.menuDashboard"//State name of start page.
    },
    message: {
        errorMessage: "Ocurrión un problema técnico. Intentar más tarde.." //Default error message.
    }
};// End Global variable


angular.module('starter', ['ionic','ngIOS9UIWebViewPatch', 'starter.controllers', 'starter.services', 'ngMaterial', 'ngMessages', 'ngCordova'])
    .run(function ($ionicPlatform, $cordovaSQLite, $rootScope, $ionicHistory, $state, $mdDialog, $mdBottomSheet) {

        //Create database table of contracts by using sqlite database.
        //Table schema :
        //Column	   Type	     Primary key
        //  id	        Integer	    Yes
        //  contacto	Text	    No
        //  categoria	Text	    No
        //  telephone	Text	    No
        //  email	    Text	    No
        //  note	    Text	    No
        //  createDate	DateTime	No
        //  age	        Integer	    No
        //  isEnable	Boolean	    No
		function copysuccess()
		{
		alert("copysuccess");

		}

		function copyerror()
		{
		alert("copyerror");

		}
		
		function bdSQLite() {
			
		
			
			window.plugins.sqlDB.copy("contract.db", function() {
            db = $cordovaSQLite.openDB("contract.db");

        }, function(error) {
            console.error("There was an error copying the database: " + error);
            db = $cordovaSQLite.openDB("contract.db");

        });
		 };
        // End  SQLite database table.
		function initialSQLite2() {
           db = window.cordova ? $cordovaSQLite.openDB("contract.db") : window.openDatabase("contract.db", "1.0", "GuiaVlaDB", -1);
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contracts " +
                "( id           integer primary key   , " +
                "  contacto    text                  , " +
                "  categoria     text                  , " +
                "  telephone    text                  , " +
                "  email        text                   " +

                "  )                ");
				
				
				// Variable for prepare query statement to insert contracts.
				var query = "INSERT INTO contracts (       "    +
							"  contacto      ,            "    +
							"  categoria       ,            "    +
							"  telephone      ,            "    +
							"  email                     "    +
							"  VALUES (?,?,?,?,?)      ";						
				

   

				//var pathToFile = cordova.file.applicationDirectory + "www/guia.csv";		
				var pathToFile = "http://villalaangostura.org/guia.csv";

				window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(obtenerFS){
				obtenerFS.root.getFile(pathToFile, null,function(entrada){
				  entrada.file(function (fichero){
					  lector = new FileReader();
					  lector.readAsText(fichero)
					  lector.onload = function (evt){
					  var csv = evt.target.result
					  var data = $.csv.toArrays(csv);
					  
					   for (var i=1; i <data.length; i++){
					   

						   // Execute query statement from query variable.
							$cordovaSQLite.execute(db, query,
								[data[i][0]          ,
									data[i][1]        ,
									data[i][2]       ,
									data[i][3]               
								]);						   
										   
							//$cordovaSQLite.execute(db, 'INSERT INTO contracts (firstName, lastName, telephone, email, note, createDate, age) VALUES ( "' + data[i][0] + '", "' + data[i][1] + '","' + data[i][2] + '", "' + data[i][3] + '", "' + data[i][4] + '", ' + data[i][5] + ', ' + data[i][6]  + ')');
					   }	
				   
					  
					  }
				  });
						  
				});
			  });	
				
        };
        // End creating SQLite2 database table.			
        function initialSQLite() {
            db = window.cordova ? $cordovaSQLite.openDB("contract.db") : window.openDatabase("contract.db", "1.0", "GuiaVlaDB", -1);
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contracts " +
                "( id           integer primary key   , " +
                "  contacto    text                  , " +
                "  categoria     text                  , " +
                "  telephone    text                  , " +
                "  email        text                   " +

                "  )                ");
				
				
				// Variable for prepare query statement to insert contracts.
				var query = "INSERT INTO contracts (       "    +
							"  contacto      ,            "    +
							"  categoria       ,            "    +
							"  telephone      ,            "    +
							"  email                     "    +
							"  VALUES (?,?,?,?,?)      ";						
				

   

				//var pathToFile = cordova.file.applicationDirectory + "www/guia.csv";		
				var pathToFile = "http://villalaangostura.org/guia.csv";
				
				window.resolveLocalFileSystemURL(pathToFile, function(entrada){

				  entrada.file(function (fichero){
					  lector = new FileReader();
					  lector.readAsText(fichero)
					  lector.onload = function (evt){
					  var csv = evt.target.result
					  var data = $.csv.toArrays(csv);
					   $cordovaSQLite.execute(db, query, [data.length, 'categoria3','telephone4', 'email4', 'note4',,,true]);	
					   for (var i=1; i <data.length; i++){
						  
						   

						   // Execute query statement from query variable.
							$cordovaSQLite.execute(db, query,
								[data[i][0]          ,
									data[i][1]        ,
									data[i][2]       ,
									data[i][3]           ,
									data[i][4]      ,
									  ,
									  ,
									true       
								]);						   
										   
							//$cordovaSQLite.execute(db, 'INSERT INTO contracts (contacto, categoria, telephone, email, note, createDate, age) VALUES ( "' + data[i][0] + '", "' + data[i][1] + '","' + data[i][2] + '", "' + data[i][3] + '", "' + data[i][4] + '", ' + data[i][5] + ', ' + data[i][6]  + ')');
					   }	
				   
					  
					  }
				  });
				  
				  

						  

			  });				
		
        };
        // End creating SQLite database table.

        // Create custom defaultStyle.
        function getDefaultStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important; " +
                "   border-style            : none;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom defaultStyle

        // Create custom style for product view.
        function getProductStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important;" +
                "   border-style            : none;" +
                "   background-image        : url('img/background_cover_pixels.png') !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom style for product view.

        // Create custom style for contract us view.
        function getContractUsStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : transparent !important;" +
                "   border-style            : none;" +
                "   background-image        : none !important;" +
                "   background-position-y   : 4px !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        } // End create custom style for contract us view.

        // Create custom style for Social Network view.
        function getSocialNetworkStyle(socialColor) {
            return "" +
                ".material-background-nav-bar {" +
                "   background              : " + socialColor + " !important;" +
                "   border-style            : none;" +
                "} " +
                "md-ink-bar {" +
                "   color                   : " + socialColor + " !important;" +
                "   background              : " + socialColor + " !important;" +
                "}" +
                "md-tab-item {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle {" +
                "   border-left-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "    border-top-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-gap {" +
                "   border-top-color        : " + socialColor + " !important;" +
                "   border-bottom-color     : " + socialColor + " !important;" +
                "}" +
                "md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "  border-right-color       : " + socialColor + " !important;" +
                " }" +
                ".spinner-android {" +
                "   stroke                  : " + socialColor + " !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                "a.md-button.md-primary, .md-button.md-primary {" +
                "   color                   : " + socialColor + " !important;" +
                "}";
        }// End create custom style for Social Network view.


        function initialRootScope() {
            $rootScope.appPrimaryColor = appPrimaryColor;// Add value of appPrimaryColor to rootScope for use it to base color.
            $rootScope.isAndroid = ionic.Platform.isAndroid();// Check platform of running device is android or not.
            $rootScope.isIOS = ionic.Platform.isIOS();// Check platform of running device is ios or not.
        };

        function hideActionControl() {
            //For android if user tap hardware back button, Action and Dialog should be hide.
            $mdBottomSheet.cancel();
            $mdDialog.cancel();
        };


        // createCustomStyle will change a style of view while view changing.
        // Parameter :
        // stateName = name of state that going to change for add style of that page.
        function createCustomStyle(stateName) {
            var customStyle =
                ".material-background {" +
                "   background-color          : " + appPrimaryColor + " !important;" +
                "   border-style              : none;" +
                "}" +
                ".spinner-android {" +
                "   stroke                    : " + appPrimaryColor + " !important;" +
                "}";

            switch (stateName) {
                case "app.productList" :
                case "app.productDetail":
                case "app.productCheckout":
                case "app.clothShop" :
                case "app.catalog" :
                    customStyle += getProductStyle();
                    break;
                case "app.dropboxLogin" :
                case "app.dropboxProfile":
                case "app.dropboxFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.dropboxColor);
                    break;
                case "app.facebookLogin" :
                case "app.facebookProfile":
                case "app.facebookFeed" :
                case "app.facebookFriendList":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.facebookColor);
                    break;
                case "app.foursquareLogin" :
                case "app.foursquareProfile":
                case "app.foursquareFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.foursquareColor);
                    break;
                case "app.googlePlusLogin" :
                case "app.googlePlusProfile":
                case "app.googlePlusFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.googlePlusColor);
                    break;
                case "app.instagramLogin" :
                case "app.instagramProfile":
                case "app.instagramFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.instagramColor);
                    break;
                case "app.wordpressLogin" :
                case "app.wordpressFeed":
                case "app.wordpressPost" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.wordpressColor);
                    break;
                case "app.contractUs":
                    customStyle += getContractUsStyle();
                    break;
                default:
                    customStyle += getDefaultStyle();
                    break;
            }
            return customStyle;
        }// End createCustomStyle

        // Add custom style while initial application.
        $rootScope.customStyle = createCustomStyle(window.globalVariable.startPage.state);

        $ionicPlatform.ready(function () {
            ionic.Platform.isFullScreen = true;
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            //initialSQLite();
			//initialSQLite2();
			bdSQLite();

            initialRootScope();

            //Checking if view is changing it will go to this function.
            $rootScope.$on('$ionicView.beforeEnter', function () {
                //hide Action Control for android back button.
                hideActionControl();
                // Add custom style ti view.
                $rootScope.customStyle = createCustomStyle($ionicHistory.currentStateName());
            });
        });
		
		
		
		
		

		
		

    })

    .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $mdColorPalette, $mdIconProvider) {


        // Use for change ionic spinner to android pattern.
        $ionicConfigProvider.spinner.icon("android");
        $ionicConfigProvider.views.swipeBackEnabled(false);

        // mdIconProvider is function of Angular Material.
        // It use for reference .SVG file and improve performance loading.
        $mdIconProvider
            .icon('facebook', 'img/icons/facebook.svg')
            .icon('twitter', 'img/icons/twitter.svg')
            .icon('mail', 'img/icons/mail.svg')
            .icon('message', 'img/icons/message.svg')
            .icon('share-arrow', 'img/icons/share-arrow.svg')
            .icon('more', 'img/icons/more_vert.svg');

        //mdThemingProvider use for change theme color of Ionic Material Design Application.
        /* You can select color from Material Color List configuration :
         * red
         * pink
         * purple
         * purple
         * deep-purple
         * indigo
         * blue
         * light-blue
         * cyan
         * teal
         * green
         * light-green
         * lime
         * yellow
         * amber
         * orange
         * deep-orange
         * brown
         * grey
         * blue-grey
         */
        //Learn more about material color patten: https://www.materialpalette.com/
        //Learn more about material theme: https://material.angularjs.org/latest/#/Theming/01_introduction
        $mdThemingProvider
            .theme('default')
            .primaryPalette('green')
            .accentPalette('orange');

        appPrimaryColor = $mdColorPalette[$mdThemingProvider._THEMES.default.colors.primary.name]["500"]; //Use for get base color of theme.

        //$stateProvider is using for add or edit HTML view to navigation bar.
        //
        //Schema :
        //state_name(String)      : Name of state to use in application.
        //page_name(String)       : Name of page to present at localhost url.
        //cache(Bool)             : Cache of view and controller default is true. Change to false if you want page reload when application navigate back to this view.
        //html_file_path(String)  : Path of html file.
        //controller_name(String) : Name of Controller.
        //
        //Learn more about ionNavView at http://ionicframework.com/docs/api/directive/ionNavView/
        //Learn more about  AngularUI Router's at https://github.com/angular-ui/ui-router/wiki
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu/html/menu.html",
                controller: 'menuCtrl'
            })
            .state('app.dashboard', {
                url: "/dashboard",
                params:{
                    isAnimated:false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/material-user-interface/dashboard/html/dashboard.html",
                        controller: 'dashboardCtrl'
                    }
                }
            })
	
            .state('app.menuDashboard', {
                url: "/menuDashboard",
                params:{
                    isAnimated:true
                },				
                views: {
                    'menuContent': {
                        templateUrl: "templates/themes/menu-dashboard/html/menu-dashboard.html",
                        controller: "menuDashboardCtrl"
                    }
                }
            })	

            .state('app.buscarLocal', {
                url: "/buscarLocal",
                cache: true,
                params:{
                     isAnimated:(ionic.Platform.isAndroid()==false)
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/application-storage/sqLite/html/buscar-local.html",
                        controller: 'buscarLocalCtrl'
                    }
                }
            })		

            .state('app.contractlist', {
                url: "/contractlist",
                cache: false,
                params:{
                     isAnimated:(ionic.Platform.isAndroid()==false)
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/application-storage/sqLite/html/contract-list.html",
                        controller: 'contractListCtrl'
                    }
                }
            })
            .state('app.contractdetail', {
                url: "/contractdetail",
                params: {
                    contractdetail: null,
                    actionDelete: false
                },
                views: {
                    'menuContent': {
                        templateUrl: "templates/application-storage/sqLite/html/contract-detail.html",
                        controller: 'contractDetailCtrl'
                    }
                }
            })
            .state('app.contractsetting', {
                url: "/contractsetting",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/application-storage/sqLite/html/contract-setting.html",
                        controller: 'contractSettingCtrl'
                    }
                }
            })




			// End $stateProvider

        //Use $urlRouterProvider.otherwise(Url);
        $urlRouterProvider.otherwise(window.globalVariable.startPage.url);

    });