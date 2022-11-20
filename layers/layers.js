var wms_layers = [];


        var lyr_googleearth_0 = new ol.layer.Tile({
            'title': 'google earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_mukim_mlk_1 = new ol.format.GeoJSON();
var features_mukim_mlk_1 = format_mukim_mlk_1.readFeatures(json_mukim_mlk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mukim_mlk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mukim_mlk_1.addFeatures(features_mukim_mlk_1);
var lyr_mukim_mlk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mukim_mlk_1, 
                style: style_mukim_mlk_1,
                interactive: false,
                title: '<img src="styles/legend/mukim_mlk_1.png" /> mukim_mlk'
            });
var format_district_mlk_2 = new ol.format.GeoJSON();
var features_district_mlk_2 = format_district_mlk_2.readFeatures(json_district_mlk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_district_mlk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_mlk_2.addFeatures(features_district_mlk_2);
var lyr_district_mlk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_district_mlk_2, 
                style: style_district_mlk_2,
                interactive: false,
                title: '<img src="styles/legend/district_mlk_2.png" /> district_mlk'
            });
var format_TempatMenarik_3 = new ol.format.GeoJSON();
var features_TempatMenarik_3 = format_TempatMenarik_3.readFeatures(json_TempatMenarik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatMenarik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMenarik_3.addFeatures(features_TempatMenarik_3);
var lyr_TempatMenarik_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatMenarik_3, 
                style: style_TempatMenarik_3,
                interactive: true,
                title: '<img src="styles/legend/TempatMenarik_3.png" /> Tempat Menarik'
            });

lyr_googleearth_0.setVisible(true);lyr_mukim_mlk_1.setVisible(true);lyr_district_mlk_2.setVisible(true);lyr_TempatMenarik_3.setVisible(true);
var layersList = [lyr_googleearth_0,lyr_mukim_mlk_1,lyr_district_mlk_2,lyr_TempatMenarik_3];
lyr_mukim_mlk_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MUKIM': 'MUKIM', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'MUKIM_CODE': 'MUKIM_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Photo': 'Photo', });
lyr_district_mlk_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TempatMenarik_3.set('fieldAliases', {'qc_id': 'qc_id', 'image': 'image', 'name': 'name', 'latitude': 'latitude', 'longitud': 'longitud', 'build on': 'build on', 'background': 'background', 'address': 'address', 'opened on': 'opened on', 'time': 'time', 'ticket': 'ticket', 'link gmap': 'link gmap', '360': '360', });
lyr_mukim_mlk_1.set('fieldImages', {'OBJECTID': 'Range', 'MUKIM': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE_CODE': 'TextEdit', 'DISTR_CODE': 'TextEdit', 'MUKIM_CODE': 'TextEdit', 'FCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Photo': 'TextEdit', });
lyr_district_mlk_2.set('fieldImages', {'OBJECTID': 'Range', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE_CODE': 'TextEdit', 'DISTR_CODE': 'TextEdit', 'FCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TempatMenarik_3.set('fieldImages', {'qc_id': 'TextEdit', 'image': 'ExternalResource', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitud': 'TextEdit', 'build on': 'TextEdit', 'background': 'TextEdit', 'address': 'TextEdit', 'opened on': 'TextEdit', 'time': 'TextEdit', 'ticket': 'TextEdit', 'link gmap': 'TextEdit', '360': 'TextEdit', });
lyr_mukim_mlk_1.set('fieldLabels', {'OBJECTID': 'no label', 'MUKIM': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'MUKIM_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Photo': 'no label', });
lyr_district_mlk_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TempatMenarik_3.set('fieldLabels', {'qc_id': 'header label', 'image': 'header label', 'name': 'header label', 'latitude': 'header label', 'longitud': 'header label', 'build on': 'header label', 'background': 'header label', 'address': 'header label', 'opened on': 'header label', 'time': 'header label', 'ticket': 'header label', 'link gmap': 'header label', '360': 'header label', });
lyr_TempatMenarik_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});