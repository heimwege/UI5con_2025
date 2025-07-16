sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'virtualhtmlproject/test/integration/FirstJourney',
		'virtualhtmlproject/test/integration/pages/TravelList',
		'virtualhtmlproject/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('virtualhtmlproject') + '/index.html'
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