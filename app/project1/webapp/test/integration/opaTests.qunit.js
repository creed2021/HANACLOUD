sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/EmpleadosDirectoList',
		'project1/test/integration/pages/EmpleadosDirectoObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmpleadosDirectoList, EmpleadosDirectoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
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