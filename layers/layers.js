var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Typedenseigne_1 = new ol.format.GeoJSON();
var features_Typedenseigne_1 = format_Typedenseigne_1.readFeatures(json_Typedenseigne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Typedenseigne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Typedenseigne_1.addFeatures(features_Typedenseigne_1);
var lyr_Typedenseigne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Typedenseigne_1, 
                style: style_Typedenseigne_1,
                popuplayertitle: 'Type d\'enseigne',
                interactive: true,
    title: 'Type d\'enseigne<br />\
    <img src="styles/legend/Typedenseigne_1_0.png" /> Locale<br />\
    <img src="styles/legend/Typedenseigne_1_1.png" /> Nationale<br />' });
var format_Notesdevanture_2 = new ol.format.GeoJSON();
var features_Notesdevanture_2 = format_Notesdevanture_2.readFeatures(json_Notesdevanture_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notesdevanture_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Notesdevanture_2.addFeatures(features_Notesdevanture_2);
var lyr_Notesdevanture_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Notesdevanture_2, 
                style: style_Notesdevanture_2,
                popuplayertitle: 'Notes devanture',
                interactive: true,
    title: 'Notes devanture<br />\
    <img src="styles/legend/Notesdevanture_2_0.png" /> 2 - 3<br />\
    <img src="styles/legend/Notesdevanture_2_1.png" /> 5 - 6<br />\
    <img src="styles/legend/Notesdevanture_2_2.png" /> 8 - 9<br />\
    <img src="styles/legend/Notesdevanture_2_3.png" /> 10 - 11<br />\
    <img src="styles/legend/Notesdevanture_2_4.png" /> 12 - 13<br />\
    <img src="styles/legend/Notesdevanture_2_5.png" /> 15 - 16<br />\
    <img src="styles/legend/Notesdevanture_2_6.png" /> 18 - 19<br />' });
var format_Emplacementn12_3 = new ol.format.GeoJSON();
var features_Emplacementn12_3 = format_Emplacementn12_3.readFeatures(json_Emplacementn12_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emplacementn12_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emplacementn12_3.addFeatures(features_Emplacementn12_3);
var lyr_Emplacementn12_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emplacementn12_3, 
                style: style_Emplacementn12_3,
                popuplayertitle: 'Emplacement n°1 & 2',
                interactive: true,
    title: 'Emplacement n°1 & 2<br />\
    <img src="styles/legend/Emplacementn12_3_0.png" /> n°1<br />\
    <img src="styles/legend/Emplacementn12_3_1.png" /> n°2<br />' });
var format_Locauxvacants_4 = new ol.format.GeoJSON();
var features_Locauxvacants_4 = format_Locauxvacants_4.readFeatures(json_Locauxvacants_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locauxvacants_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locauxvacants_4.addFeatures(features_Locauxvacants_4);
var lyr_Locauxvacants_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locauxvacants_4, 
                style: style_Locauxvacants_4,
                popuplayertitle: 'Locaux vacants',
                interactive: true,
    title: 'Locaux vacants<br />\
    <img src="styles/legend/Locauxvacants_4_0.png" /> Travaux<br />\
    <img src="styles/legend/Locauxvacants_4_1.png" /> Vacant<br />\
    <img src="styles/legend/Locauxvacants_4_2.png" /> Actif<br />' });
var format_Secteurs_5 = new ol.format.GeoJSON();
var features_Secteurs_5 = format_Secteurs_5.readFeatures(json_Secteurs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_5.addFeatures(features_Secteurs_5);
var lyr_Secteurs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_5, 
                style: style_Secteurs_5,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_5_0.png" /> Centre-ville<br />\
    <img src="styles/legend/Secteurs_5_1.png" /> ZAE La Gouorgo<br />\
    <img src="styles/legend/Secteurs_5_2.png" /> Entrée de ville sud<br />' });
var format_Catgoriesen2026_6 = new ol.format.GeoJSON();
var features_Catgoriesen2026_6 = format_Catgoriesen2026_6.readFeatures(json_Catgoriesen2026_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catgoriesen2026_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catgoriesen2026_6.addFeatures(features_Catgoriesen2026_6);
var lyr_Catgoriesen2026_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catgoriesen2026_6, 
                style: style_Catgoriesen2026_6,
                popuplayertitle: 'Catégories en 2026',
                interactive: true,
    title: 'Catégories en 2026<br />\
    <img src="styles/legend/Catgoriesen2026_6_0.png" /> Alimentaire<br />\
    <img src="styles/legend/Catgoriesen2026_6_1.png" /> Culture loisirs santé<br />\
    <img src="styles/legend/Catgoriesen2026_6_2.png" /> Equip. de la maison<br />\
    <img src="styles/legend/Catgoriesen2026_6_3.png" /> Equip. de la personne<br />\
    <img src="styles/legend/Catgoriesen2026_6_4.png" /> Grand commerce<br />\
    <img src="styles/legend/Catgoriesen2026_6_5.png" /> Hôtellerie restauration<br />\
    <img src="styles/legend/Catgoriesen2026_6_6.png" /> Services entreprises<br />\
    <img src="styles/legend/Catgoriesen2026_6_7.png" /> Services non commerciaux<br />\
    <img src="styles/legend/Catgoriesen2026_6_8.png" /> Services personnels<br />\
    <img src="styles/legend/Catgoriesen2026_6_9.png" /> Véhicules<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Typedenseigne_1.setVisible(false);lyr_Notesdevanture_2.setVisible(false);lyr_Emplacementn12_3.setVisible(false);lyr_Locauxvacants_4.setVisible(false);lyr_Secteurs_5.setVisible(false);lyr_Catgoriesen2026_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Typedenseigne_1,lyr_Notesdevanture_2,lyr_Emplacementn12_3,lyr_Locauxvacants_4,lyr_Secteurs_5,lyr_Catgoriesen2026_6];
lyr_Typedenseigne_1.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', });
lyr_Notesdevanture_2.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', });
lyr_Emplacementn12_3.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', });
lyr_Locauxvacants_4.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', 'Fiche LV PDF': 'Fiche LV PDF', });
lyr_Secteurs_5.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', });
lyr_Catgoriesen2026_6.set('fieldAliases', {'fid': 'fid', 'ROWID_ID': 'ROWID_ID', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Activite': 'Activite', 'EN': 'EN', 'Surface': 'Surface', 'Note': 'Note', 'Mod2015': 'Mod2015', 'Code2015': 'Code2015', 'Mod2016': 'Mod2016', 'Code2016': 'Code2016', 'Code2017': 'Code2017', 'Mod2017': 'Mod2017', 'Mod2018': 'Mod2018', 'Code2018': 'Code2018', 'Mod2019': 'Mod2019', 'Code2019': 'Code2019', 'Surf totale': 'Surf totale', 'Etablissement': 'Etablissement', 'CODE POSTAL': 'CODE POSTAL', 'Emp': 'Emp', 'Mod2020': 'Mod2020', 'Code2020': 'Code2020', 'IDENTIFICATION': 'IDENTIFICATION', 'Ville': 'Ville', 'Mod2026': 'Mod2026', 'Surface en m²': 'Surface en m²', 'Date terrain': 'Date terrain', 'Code2026': 'Code2026', 'Catégorie': 'Catégorie', 'Activité': 'Activité', 'Secteur': 'Secteur', });
lyr_Typedenseigne_1.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'Range', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': '', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_Notesdevanture_2.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'TextEdit', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': '', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_Emplacementn12_3.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'TextEdit', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': '', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_Locauxvacants_4.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'TextEdit', 'ID': 'TextEdit', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'Range', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': 'Range', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', 'Fiche LV PDF': 'TextEdit', });
lyr_Secteurs_5.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'TextEdit', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': '', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_Catgoriesen2026_6.set('fieldImages', {'fid': 'TextEdit', 'ROWID_ID': 'Range', 'ID': 'TextEdit', 'Ordre': 'TextEdit', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Activite': 'TextEdit', 'EN': 'TextEdit', 'Surface': 'TextEdit', 'Note': 'TextEdit', 'Mod2015': 'TextEdit', 'Code2015': 'TextEdit', 'Mod2016': 'TextEdit', 'Code2016': 'TextEdit', 'Code2017': 'TextEdit', 'Mod2017': 'TextEdit', 'Mod2018': 'TextEdit', 'Code2018': 'TextEdit', 'Mod2019': 'TextEdit', 'Code2019': 'TextEdit', 'Surf totale': 'Range', 'Etablissement': 'TextEdit', 'CODE POSTAL': 'Range', 'Emp': 'TextEdit', 'Mod2020': 'TextEdit', 'Code2020': 'TextEdit', 'IDENTIFICATION': 'TextEdit', 'Ville': 'TextEdit', 'Mod2026': 'TextEdit', 'Surface en m²': 'Range', 'Date terrain': 'DateTime', 'Code2026': 'TextEdit', 'Catégorie': 'TextEdit', 'Activité': 'TextEdit', 'Secteur': 'TextEdit', });
lyr_Typedenseigne_1.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', });
lyr_Notesdevanture_2.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', });
lyr_Emplacementn12_3.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', });
lyr_Locauxvacants_4.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', 'Fiche LV PDF': 'inline label - visible with data', });
lyr_Secteurs_5.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'hidden field', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', });
lyr_Catgoriesen2026_6.set('fieldLabels', {'fid': 'hidden field', 'ROWID_ID': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'hidden field', 'Adresse': 'hidden field', 'Activite': 'inline label - visible with data', 'EN': 'hidden field', 'Surface': 'hidden field', 'Note': 'inline label - visible with data', 'Mod2015': 'hidden field', 'Code2015': 'hidden field', 'Mod2016': 'hidden field', 'Code2016': 'hidden field', 'Code2017': 'hidden field', 'Mod2017': 'hidden field', 'Mod2018': 'hidden field', 'Code2018': 'hidden field', 'Mod2019': 'hidden field', 'Code2019': 'hidden field', 'Surf totale': 'hidden field', 'Etablissement': 'inline label - visible with data', 'CODE POSTAL': 'hidden field', 'Emp': 'hidden field', 'Mod2020': 'hidden field', 'Code2020': 'hidden field', 'IDENTIFICATION': 'hidden field', 'Ville': 'hidden field', 'Mod2026': 'hidden field', 'Surface en m²': 'inline label - visible with data', 'Date terrain': 'hidden field', 'Code2026': 'hidden field', 'Catégorie': 'inline label - visible with data', 'Activité': 'hidden field', 'Secteur': 'hidden field', });
lyr_Catgoriesen2026_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});