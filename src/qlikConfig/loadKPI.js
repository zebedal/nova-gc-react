const loadKpis = ({app, kpiObjects}) => {
    console.log(app,kpiObjects)
    /* kpiObjects.forEach((item) => {
        app.getObjectProperties(item.qlikId).then(function(model){
            var newkpiObject = {
                "qInitialDataFetch": [{"qHeight": 100, "qWidth": 1}],
                "qDimensions": [],
                "qMeasures": [{
                    "qLibraryId": "",
                    "qDef": { "qLabelExpression": "=1",
                            "qDef": model.properties.qHyperCubeDef.qMeasures[0].qDef.qDef
                    }
                }],
                "qMode": "S",
                "qSuppressMissing": false,
                "qInterColumnSortOrder": [],
                "qNoOfLeftDims": 1,
            };

            app.createCube(newkpiObject, function (reply){
                if(reply){
                    document.getElementById(item.id).innerHTML = "";

                    reply.qHyperCube.qMeasureInfo.forEach(function(qv,o){
                        const _num = reply.qHyperCube.qGrandTotalRow[o].qText;
                        document.getElementById(item.id).innerHTML = _num;
                    })

                    window.qlik.resize();
                };
            });
        });
    }) */

    return (
        <div>
            
        </div>
    )
}

export default loadKpis