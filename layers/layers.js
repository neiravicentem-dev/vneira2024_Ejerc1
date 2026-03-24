ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([709026.684991, 5843534.838835, 711881.962872, 5845466.605986]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_casareproyectada_1 = new ol.format.GeoJSON();
var features_casareproyectada_1 = format_casareproyectada_1.readFeatures(json_casareproyectada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_casareproyectada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casareproyectada_1.addFeatures(features_casareproyectada_1);
cluster_casareproyectada_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_casareproyectada_1
});
var lyr_casareproyectada_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_casareproyectada_1, 
                style: style_casareproyectada_1,
                popuplayertitle: 'casa reproyectada',
                interactive: true,
                title: '<img src="styles/legend/casareproyectada_1.png" /> casa reproyectada'
            });

lyr_OSMStandard_0.setVisible(true);lyr_casareproyectada_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_casareproyectada_1];
lyr_casareproyectada_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Porc_Corr': 'Porc_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_casareproyectada_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'N_Preg_Cor': 'TextEdit', 'Porc_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_casareproyectada_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'T_Pregunta': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Porc_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_casareproyectada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});