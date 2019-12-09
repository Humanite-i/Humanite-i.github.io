var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
}),
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var lyr_Densitdesaccidents_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densité des accidents",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densitdesaccidents_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-183895.320903, 1379300.986354, -159509.657924, 1394693.439670]
                            })
                        });var format_Routes_Accidentognes_1 = new ol.format.GeoJSON();
var features_Routes_Accidentognes_1 = format_Routes_Accidentognes_1.readFeatures(json_Routes_Accidentognes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_Accidentognes_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Routes_Accidentognes_1.addFeatures(features_Routes_Accidentognes_1);var lyr_Routes_Accidentognes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_Accidentognes_1, 
                style: style_Routes_Accidentognes_1,
                title: '<img src="styles/legend/Routes_Accidentognes_1.png" /> Routes_Accidentogènes'
            });var format_10_Accidents_et_Plus500m_2 = new ol.format.GeoJSON();
var features_10_Accidents_et_Plus500m_2 = format_10_Accidents_et_Plus500m_2.readFeatures(json_10_Accidents_et_Plus500m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_Accidents_et_Plus500m_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_10_Accidents_et_Plus500m_2.addFeatures(features_10_Accidents_et_Plus500m_2);var lyr_10_Accidents_et_Plus500m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_Accidents_et_Plus500m_2, 
                style: style_10_Accidents_et_Plus500m_2,
                title: '<img src="styles/legend/10_Accidents_et_Plus500m_2.png" /> 10_Accidents_et_Plus(500m)'
            });var format_Moins_de_10_Accidents500m_3 = new ol.format.GeoJSON();
var features_Moins_de_10_Accidents500m_3 = format_Moins_de_10_Accidents500m_3.readFeatures(json_Moins_de_10_Accidents500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moins_de_10_Accidents500m_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Moins_de_10_Accidents500m_3.addFeatures(features_Moins_de_10_Accidents500m_3);var lyr_Moins_de_10_Accidents500m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Moins_de_10_Accidents500m_3, 
                style: style_Moins_de_10_Accidents500m_3,
                title: '<img src="styles/legend/Moins_de_10_Accidents500m_3.png" /> Moins_de_10_Accidents(500m)'
            });var format_Moins_de_10_Accidents250m_4 = new ol.format.GeoJSON();
var features_Moins_de_10_Accidents250m_4 = format_Moins_de_10_Accidents250m_4.readFeatures(json_Moins_de_10_Accidents250m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moins_de_10_Accidents250m_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Moins_de_10_Accidents250m_4.addFeatures(features_Moins_de_10_Accidents250m_4);var lyr_Moins_de_10_Accidents250m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Moins_de_10_Accidents250m_4, 
                style: style_Moins_de_10_Accidents250m_4,
                title: '<img src="styles/legend/Moins_de_10_Accidents250m_4.png" /> Moins_de_10_Accidents(250m)'
            });var format_10_Accidents_et_Plus250m_5 = new ol.format.GeoJSON();
var features_10_Accidents_et_Plus250m_5 = format_10_Accidents_et_Plus250m_5.readFeatures(json_10_Accidents_et_Plus250m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10_Accidents_et_Plus250m_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_10_Accidents_et_Plus250m_5.addFeatures(features_10_Accidents_et_Plus250m_5);var lyr_10_Accidents_et_Plus250m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10_Accidents_et_Plus250m_5, 
                style: style_10_Accidents_et_Plus250m_5,
                title: '<img src="styles/legend/10_Accidents_et_Plus250m_5.png" /> 10_Accidents_et_Plus(250m)'
            });var format_Carrefours_Accidentogenes_6 = new ol.format.GeoJSON();
var features_Carrefours_Accidentogenes_6 = format_Carrefours_Accidentogenes_6.readFeatures(json_Carrefours_Accidentogenes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrefours_Accidentogenes_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Carrefours_Accidentogenes_6.addFeatures(features_Carrefours_Accidentogenes_6);cluster_Carrefours_Accidentogenes_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Carrefours_Accidentogenes_6
});var lyr_Carrefours_Accidentogenes_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Carrefours_Accidentogenes_6, 
                style: style_Carrefours_Accidentogenes_6,
                title: '<img src="styles/legend/Carrefours_Accidentogenes_6.png" /> Carrefours_Accidentogenes'
            });var format_Siege_Association_7 = new ol.format.GeoJSON();
var features_Siege_Association_7 = format_Siege_Association_7.readFeatures(json_Siege_Association_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siege_Association_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Siege_Association_7.addFeatures(features_Siege_Association_7);cluster_Siege_Association_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Siege_Association_7
});var lyr_Siege_Association_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Siege_Association_7, 
                style: style_Siege_Association_7,
                title: '<img src="styles/legend/Siege_Association_7.png" /> Siege_Association'
            });var format_VADS_8 = new ol.format.GeoJSON();
var features_VADS_8 = format_VADS_8.readFeatures(json_VADS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VADS_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VADS_8.addFeatures(features_VADS_8);cluster_VADS_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_VADS_8
});var lyr_VADS_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_VADS_8, 
                style: style_VADS_8,
                title: '<img src="styles/legend/VADS_8.png" /> VADS'
            });var format_PN_9 = new ol.format.GeoJSON();
var features_PN_9 = format_PN_9.readFeatures(json_PN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PN_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PN_9.addFeatures(features_PN_9);cluster_PN_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PN_9
});var lyr_PN_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PN_9, 
                style: style_PN_9,
                title: '<img src="styles/legend/PN_9.png" /> PN'
            });var format_BJVSER_10 = new ol.format.GeoJSON();
var features_BJVSER_10 = format_BJVSER_10.readFeatures(json_BJVSER_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BJVSER_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BJVSER_10.addFeatures(features_BJVSER_10);cluster_BJVSER_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BJVSER_10
});var lyr_BJVSER_10 = new ol.layer.Vector({
                declutter: true,
                source:cluster_BJVSER_10, 
                style: style_BJVSER_10,
                title: '<img src="styles/legend/BJVSER_10.png" /> BJVSER'
            });var format_ATUJB_11 = new ol.format.GeoJSON();
var features_ATUJB_11 = format_ATUJB_11.readFeatures(json_ATUJB_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATUJB_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATUJB_11.addFeatures(features_ATUJB_11);cluster_ATUJB_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ATUJB_11
});var lyr_ATUJB_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ATUJB_11, 
                style: style_ATUJB_11,
                title: '<img src="styles/legend/ATUJB_11.png" /> ATUJB'
            });var format_AJVSR_12 = new ol.format.GeoJSON();
var features_AJVSR_12 = format_AJVSR_12.readFeatures(json_AJVSR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AJVSR_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AJVSR_12.addFeatures(features_AJVSR_12);cluster_AJVSR_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AJVSR_12
});var lyr_AJVSR_12 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AJVSR_12, 
                style: style_AJVSR_12,
                title: '<img src="styles/legend/AJVSR_12.png" /> AJVSR'
            });var format_AJUDBF_13 = new ol.format.GeoJSON();
var features_AJUDBF_13 = format_AJUDBF_13.readFeatures(json_AJUDBF_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AJUDBF_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AJUDBF_13.addFeatures(features_AJUDBF_13);cluster_AJUDBF_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AJUDBF_13
});var lyr_AJUDBF_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AJUDBF_13, 
                style: style_AJUDBF_13,
                title: '<img src="styles/legend/AJUDBF_13.png" /> AJUDBF'
            });var format_AFOV_14 = new ol.format.GeoJSON();
var features_AFOV_14 = format_AFOV_14.readFeatures(json_AFOV_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFOV_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AFOV_14.addFeatures(features_AFOV_14);cluster_AFOV_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AFOV_14
});var lyr_AFOV_14 = new ol.layer.Vector({
                declutter: true,
                source:cluster_AFOV_14, 
                style: style_AFOV_14,
                title: '<img src="styles/legend/AFOV_14.png" /> AFOV'
            });var format_ABSER_15 = new ol.format.GeoJSON();
var features_ABSER_15 = format_ABSER_15.readFeatures(json_ABSER_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABSER_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ABSER_15.addFeatures(features_ABSER_15);cluster_ABSER_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ABSER_15
});var lyr_ABSER_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ABSER_15, 
                style: style_ABSER_15,
                title: '<img src="styles/legend/ABSER_15.png" /> ABSER'
            });

lyr_Densitdesaccidents_0.setVisible(true);lyr_Routes_Accidentognes_1.setVisible(true);lyr_10_Accidents_et_Plus500m_2.setVisible(true);lyr_Moins_de_10_Accidents500m_3.setVisible(true);lyr_Moins_de_10_Accidents250m_4.setVisible(true);lyr_10_Accidents_et_Plus250m_5.setVisible(true);lyr_Carrefours_Accidentogenes_6.setVisible(true);lyr_Siege_Association_7.setVisible(true);lyr_VADS_8.setVisible(true);lyr_PN_9.setVisible(true);lyr_BJVSER_10.setVisible(true);lyr_ATUJB_11.setVisible(true);lyr_AJVSR_12.setVisible(true);lyr_AJUDBF_13.setVisible(true);lyr_AFOV_14.setVisible(true);lyr_ABSER_15.setVisible(true);
var layersList = [baseLayer,lyr_Densitdesaccidents_0,lyr_Routes_Accidentognes_1,lyr_10_Accidents_et_Plus500m_2,lyr_Moins_de_10_Accidents500m_3,lyr_Moins_de_10_Accidents250m_4,lyr_10_Accidents_et_Plus250m_5,lyr_Carrefours_Accidentogenes_6,lyr_Siege_Association_7,lyr_VADS_8,lyr_PN_9,lyr_BJVSER_10,lyr_ATUJB_11,lyr_AJVSR_12,lyr_AJUDBF_13,lyr_AFOV_14,lyr_ABSER_15];
lyr_Routes_Accidentognes_1.set('fieldAliases', {'Nb_acci': 'Nombre Accident', 'Nom_V': 'Nom', });
lyr_10_Accidents_et_Plus500m_2.set('fieldAliases', {'zone_acci': 'Nom lieu', 'nbasso': 'Nombre Association', 'nb_vads': 'Nombre VADS', 'nbacc': 'Nombre Accident', });
lyr_Moins_de_10_Accidents500m_3.set('fieldAliases', {'zone_acci': 'Nom lieu', 'nbasso': 'Nombre Association', 'nb_vads': 'Nombre VADS', 'nbacc': 'Nombre Accident', });
lyr_Moins_de_10_Accidents250m_4.set('fieldAliases', {'zone_acci': 'Nom lieu', 'nbasso': 'Nombre Association', 'nbvads': 'Nombre VADS', 'nbacc': 'Nombre Accident', 'nom_asso': 'Nom Association', });
lyr_10_Accidents_et_Plus250m_5.set('fieldAliases', {'zone_acci': 'Nom lieu', 'nbasso': 'Nombre Association', 'nbvads': 'Nombre VADS', 'nbacc': 'Nombre Accident', 'nom_asso': 'Nom Association', });
lyr_Carrefours_Accidentogenes_6.set('fieldAliases', {'Nom_carre_': 'Nom carrefour', });
lyr_Siege_Association_7.set('fieldAliases', {'Nom': 'Nom', 'Nom Resp': 'Nom du Responsable', 'Contacts d': 'Contact', 'Date CR': 'Date de creation', });
lyr_VADS_8.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_PN_9.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_BJVSER_10.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_ATUJB_11.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Presence': 'Presence observation?', });
lyr_AJVSR_12.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_AJUDBF_13.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_AFOV_14.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Present': 'Presence observation?', });
lyr_ABSER_15.set('fieldAliases', {'Nom du lie': 'Nom du lieu', 'Nom de l��': 'Nom Acteur', 'Presence': 'Presence observation?', });
lyr_Routes_Accidentognes_1.set('fieldImages', {'Nb_acci': 'TextEdit', 'Nom_V': 'TextEdit', });
lyr_10_Accidents_et_Plus500m_2.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nb_vads': 'TextEdit', 'nbacc': 'TextEdit', });
lyr_Moins_de_10_Accidents500m_3.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nb_vads': 'TextEdit', 'nbacc': 'TextEdit', });
lyr_Moins_de_10_Accidents250m_4.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nbvads': 'TextEdit', 'nbacc': 'TextEdit', 'nom_asso': 'TextEdit', });
lyr_10_Accidents_et_Plus250m_5.set('fieldImages', {'zone_acci': 'TextEdit', 'nbasso': 'TextEdit', 'nbvads': 'TextEdit', 'nbacc': 'TextEdit', 'nom_asso': 'TextEdit', });
lyr_Carrefours_Accidentogenes_6.set('fieldImages', {'Nom_carre_': 'TextEdit', });
lyr_Siege_Association_7.set('fieldImages', {'Nom': 'TextEdit', 'Nom Resp': 'TextEdit', 'Contacts d': 'TextEdit', 'Date CR': 'TextEdit', });
lyr_VADS_8.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_PN_9.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_BJVSER_10.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_ATUJB_11.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Presence': 'TextEdit', });
lyr_AJVSR_12.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_AJUDBF_13.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_AFOV_14.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Present': 'TextEdit', });
lyr_ABSER_15.set('fieldImages', {'Nom du lie': 'TextEdit', 'Nom de l��': 'TextEdit', 'Presence': 'TextEdit', });
lyr_Routes_Accidentognes_1.set('fieldLabels', {'Nb_acci': 'header label', 'Nom_V': 'header label', });
lyr_10_Accidents_et_Plus500m_2.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nb_vads': 'header label', 'nbacc': 'header label', });
lyr_Moins_de_10_Accidents500m_3.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nb_vads': 'header label', 'nbacc': 'header label', });
lyr_Moins_de_10_Accidents250m_4.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nbvads': 'header label', 'nbacc': 'header label', 'nom_asso': 'header label', });
lyr_10_Accidents_et_Plus250m_5.set('fieldLabels', {'zone_acci': 'header label', 'nbasso': 'header label', 'nbvads': 'header label', 'nbacc': 'header label', 'nom_asso': 'header label', });
lyr_Carrefours_Accidentogenes_6.set('fieldLabels', {'Nom_carre_': 'header label', });
lyr_Siege_Association_7.set('fieldLabels', {'Nom': 'header label', 'Nom Resp': 'header label', 'Contacts d': 'header label', 'Date CR': 'header label', });
lyr_VADS_8.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_PN_9.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_BJVSER_10.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_ATUJB_11.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Presence': 'header label', });
lyr_AJVSR_12.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_AJUDBF_13.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_AFOV_14.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Present': 'header label', });
lyr_ABSER_15.set('fieldLabels', {'Nom du lie': 'header label', 'Nom de l��': 'header label', 'Presence': 'header label', });
lyr_ABSER_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});