sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project3/test/integration/FirstJourney',
		'project3/test/integration/pages/EmpleadosDirectoList',
		'project3/test/integration/pages/EmpleadosDirectoObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmpleadosDirectoList, EmpleadosDirectoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project3') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmpleadosDirectoList: EmpleadosDirectoList,
					onTheEmpleadosDirectoObjectPage: EmpleadosDirectoObjectPage
                }
            },
            opaJourney.run
        );
    }
);