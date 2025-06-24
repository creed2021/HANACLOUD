sap.ui.define([
    'sap/fe/test/JourneyRunner',
    'project1/test/integration/FirstJourney',
    'project1/test/integration/pages/EmpleadosDirectoList',
    'project1/test/integration/pages/EmpleadosDirectoObjectPage'
], function (JourneyRunner, opaJourney, EmpleadosDirectoList, EmpleadosDirectoObjectPage) {
    'use strict';

    var oJourneyRunner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
    });

    oJourneyRunner.run(
        {
            pages: {
                onTheEmpleadosDirectoList: EmpleadosDirectoList,
                onTheEmpleadosDirectoObjectPage: EmpleadosDirectoObjectPage
            }
        },
        opaJourney.run
    );
});