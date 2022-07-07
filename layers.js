var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });var format_B3_1 = new ol.format.GeoJSON();
var features_B3_1 = format_B3_1.readFeatures(json_B3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B3_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B3_1.addFeatures(features_B3_1);var lyr_B3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B3_1, 
                style: style_B3_1,
                title: '<img src="styles/legend/B3_1.png" /> B3'
            });var format_B2_2 = new ol.format.GeoJSON();
var features_B2_2 = format_B2_2.readFeatures(json_B2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B2_2.addFeatures(features_B2_2);var lyr_B2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B2_2, 
                style: style_B2_2,
                title: '<img src="styles/legend/B2_2.png" /> B2'
            });var format_B1_3 = new ol.format.GeoJSON();
var features_B1_3 = format_B1_3.readFeatures(json_B1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B1_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B1_3.addFeatures(features_B1_3);var lyr_B1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B1_3, 
                style: style_B1_3,
                title: '<img src="styles/legend/B1_3.png" /> B1'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_B3_1.setVisible(true);lyr_B2_2.setVisible(true);lyr_B1_3.setVisible(true);
var layersList = [baseLayer,lyr_ADMINISTRASIDESA_AR_25K_0,lyr_B3_1,lyr_B2_2,lyr_B1_3];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_B3_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lat': 'lat', 'long': 'long', 'alamat': 'alamat', 'jam operasional': 'jam operasional', 'ket': 'ket', 'img': 'img', });
lyr_B2_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lat': 'lat', 'long': 'long', 'alamat': 'alamat', 'jam operasional': 'jam operasional', 'ket': 'ket', 'img': 'img', });
lyr_B1_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lat': 'lat', 'long': 'long', 'alamat': 'alamat', 'jam operasional': 'jam operasional', 'ket': 'ket', 'img': 'img', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_B3_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'alamat': 'TextEdit', 'jam operasional': 'TextEdit', 'ket': 'TextEdit', 'img': 'Photo', });
lyr_B2_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'alamat': 'TextEdit', 'jam operasional': 'TextEdit', 'ket': 'TextEdit', 'img': 'Photo', });
lyr_B1_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'alamat': 'TextEdit', 'jam operasional': 'TextEdit', 'ket': 'TextEdit', 'img': 'Photo', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_B3_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lat': 'no label', 'long': 'no label', 'alamat': 'no label', 'jam operasional': 'no label', 'ket': 'no label', 'img': 'no label', });
lyr_B2_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lat': 'no label', 'long': 'no label', 'alamat': 'no label', 'jam operasional': 'no label', 'ket': 'no label', 'img': 'no label', });
lyr_B1_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lat': 'no label', 'long': 'no label', 'alamat': 'no label', 'jam operasional': 'no label', 'ket': 'no label', 'img': 'no label', });
lyr_B1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});