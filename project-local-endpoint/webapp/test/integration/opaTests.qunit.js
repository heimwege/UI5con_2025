sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectlocalendpoint/test/integration/FirstJourney',
		'projectlocalendpoint/test/integration/pages/TravelList',
		'projectlocalendpoint/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectlocalendpoint') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);