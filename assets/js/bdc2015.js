// global variables

var buildMap = false;
var map = null;
// map layers
var cubLayer = null;
var servicesLayer = null;
var thunderLayer = null;
var tornadoLayer = null;
var hazardLayer = null;
var nullLayer = null;  // should contain nothing

// location control
var lc = null;

// control markers
var markerMode='cub';
var markerColor='blue';

// various icons
var iconSize=[20,20];
var iconRestroom=L.divIcon({className:'div-icon-blue', html: "<i class='fa fa-male icon-rest'></i><i class='fa fa-female icon-rest'></i>", iconSize: iconSize});
var iconWater=L.divIcon({className:'div-icon-blue', html: "<i class='fa fa-tint icon-rest'></i>", iconSize: iconSize});
var iconFirstAid=L.divIcon({className:'div-icon-red', html: "<i class='fa fa-medkit icon-rest'></i>", iconSize: iconSize});
var iconOffice=L.divIcon({className:'div-icon-blue', html: "<i class='fa fa-info icon-rest'></i>", iconSize: iconSize});
var iconFlag=L.divIcon({className:'div-icon-blue', html: "<i class='fa fa-flag icon-rest'></i>", iconSize: iconSize});
var iconCar=L.divIcon({className:'div-icon-blue', html: "<i class='fa fa-car icon-rest'></i>", iconSize: iconSize});
var iconTradingPost=L.divIcon({className:'div-icon-green', html: "<i class='fa fa-shopping-basket icon-rest'></i>", iconSize: iconSize});
var iconTruck=L.divIcon({className:'div-icon-green', html: "<i class='fa fa-truck icon-rest'></i>", iconSize: iconSize});

var savedVariables=[["bdc_title","sets title of browser window"],
		    ["bdc_navbar_title","sets title in black navigation bar"],
		    ["markers","station markers in order from 1,2,3,...\n//  first entry of each row is lat/long of marker\n//  second entry is station name - should have four &nbsp; after to create space on popup"],
		    ["infomarkers","station markers in order from 1,2,3,...\n//  first entry of each row is lat/long of marker\n//  second entry is station name - should have four &nbsp; after to create space on popup\n//   third entry is type"],
		    ["other_locations","Other locations on camp that are not stations.  These will correspond to negative numbers in thunderstorm map (first is -1, second is -2...)"],
		    [null,"The following variables control the emergency map overlays (automatically generated)"],
		    ["thunderstorm","Go to the map location for each station in order (1,2,3...)\n// If the refuge ares is not a station, indicate using a negative number, which looks up in other locations"],
		    ["tornado","Tornadoes: all stations go to Amphitheater"],
		    ["hazard","Hazard on Rt. 23: all stations go to Exchange Lodge"],
		    ["documents","Documents to be listed as downloadable: each row contains array of title and file"],
		    [null,"About tab names"],
		    ["bdc_info","Info tab"],
		    ["bdc_emergency","Emergency tab"],
		    ["bdc_downloads","Downloads tab"],
		    [null,"Camp Information"],
		    ["welcome_message","Welcome message - will put each line in as a separate paragraph"],
		    ["staff_title_line","Title for the Camp Staff table"],
		    ["staff","Staff - each row is another position"],
		    ["denNames","Den Names in numerical order"]

] ;




if (getQueryVariable("build") == "true") {
    buildMap=true;
}

map = L.map('map').setView([40.2325,-83.0475], 16);

backgroundLayer = L.tileLayer('data/CampMapBackground/{z}/{x}/{y}.png', {
    minZoom: 16,
    maxZoom: 18,
    errorTileUrl: 'data/blank.png',		
    attribution: 'Background Imagery (c) State of Ohio',
    tms: true,
    continuousWorld: true,
    opacity: 0.5,
    noWrap: true
}).addTo(map);

L.tileLayer('data/CampMap/{z}/{x}/{y}.png', {
    minZoom: 16,
    maxZoom: 18,
    errorTileUrl: 'data/blank.png',		
    attribution: 'Line Imagery (c) Camp Lazarus/Simon Kenton Council BSA | EFL',
    tms: true,
    continuousWorld: true,
    opacity: 1,
    noWrap: true
}).addTo(map);

map.setMaxBounds(new L.latLngBounds([40.230,-83.0535],[40.235,-83.04]));

// create location control
lc = L.control.locate({keepCurrentZoomLevel: true, 
		       setView: 'once',
		       strings: { outsideMapBoundsMsg: "Currently you are not on the map." },
		       locateOptions: {enableHighAccuracy: true}}).addTo(map);


// markers moved to customize.js
cubLayer = new L.LayerGroup();

servicesLayer = new L.LayerGroup();
thunderLayer = new L.LayerGroup();
tornadoLayer = new L.LayerGroup();
hazardLayer = new L.LayerGroup();
nullLayer = new L.LayerGroup().addTo(map);

var baseMaps = null; //{ "Stations": cubLayer };

var overlayMaps = { "Layers": { "Background map": backgroundLayer, "Services": servicesLayer },
		    "Emergency Sirens": {"Thunderstorm Map (2 LONG)": thunderLayer, 
					 "Tornado Map (3 LONG)": tornadoLayer, 
					 "Hazardous Material Map (4 LONG)": hazardLayer, 
					 "(Overlays off)": nullLayer }};

var layerControl = L.control.groupedLayers(baseMaps, overlayMaps, {collapsed: true,
								   exclusiveGroups: ["Emergency Sirens"]}).addTo(map);

map.addLayer(cubLayer);
map.addLayer(servicesLayer);

/* Install previously found markers */
for (var i=0;i<markers.length;i++) {
    var num=i+1
    var markertype="station";
    var message=markers[i].message;
    
    var icon=L.divIcon({html: num, iconSize: [20,20]});
    var marker=L.marker(markers[i].latlng, {icon: icon, zIndexOffset: 100, draggable: buildMap, className: 'stationicon'}).addTo(cubLayer);
    marker.message=message;
    marker.markernum=num;
    marker.markertype=markertype;
    markers[i]=marker;
    marker.bindPopup(markers[i].message);
}

/* Install info markers */

for (var i=0;i<infomarkers.length;i++) {
    var num=i+1
    var markertype=infomarkers[i].markertype;
    var im=iconType(markertype);
    if (im != null) {
	var message=infomarkers[i].message;
	var icon = im[0];
	var marker=L.marker(infomarkers[i].latlng, {icon: icon, draggable: buildMap, className: 'stationicon'}).addTo(servicesLayer);
	infomarkers[i]=marker;
	marker.message=message;

	if (buildMap) {
	    bindBuildPopupInfoMarker(marker,num);
	} else {
	    marker.bindPopup(message);
	}
	marker.markertype=markertype;
    }
}



/* Larger screens get expanded layer control */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

/* Put bindings in for map building */
if (buildMap) {
    map.on('dblclick', onMapDoubleClick);
    map.on('keypress', onMapKeypress);
    map.doubleClickZoom.disable();
}

// jquery code for handling selectpicker selections

$( document ).ready(function() {
    for(i=0;i<markers.length; i++) {
	var num=i+1;
	var name=markers[i].message.split("&");
	$('#StationSelect').append($('<option>').text('Station '+num+': '+name[0]));

	//programmatically creat arrows for thunderstorm map
	if (thunderstorm[i] == i+1) {  // stay in place
	    L.circle(markers[i].getLatLng(),25,{color:'red', fillOpacity: 0.2}).addTo(thunderLayer);
	} else if (thunderstorm[i] < 0) {
	    var latlngs=[markers[i].getLatLng(), other_locations[(-thunderstorm[i])-1][0]]
	    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(thunderLayer);
	} else {
	    var latlngs=[markers[i].getLatLng(), markers[thunderstorm[i]-1].getLatLng()]
	    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(thunderLayer);
	}

	// programatically create lines for tornado map
	if (tornado-1 == i) {
	    L.circle(markers[i].getLatLng(),25,{color:'orange', fillOpacity: 0.2}).addTo(tornadoLayer);
	} else {
	    var latlngs=[markers[i].getLatLng(), markers[(tornado)-1].getLatLng()]
	    var polyline = L.polyline(latlngs, {color: 'orange'}).addTo(tornadoLayer);
	}

	// programatically create lines for hazard map
	if (hazard-1 == i) {
	    L.circle(markers[i].getLatLng(),25,{color:'blue', fillOpacity: 0.2}).addTo(hazardLayer);
	} else {
	    var latlngs=[markers[i].getLatLng(), markers[(hazard)-1].getLatLng()]
	    var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(hazardLayer);
	}
    }

    // circle other_locations
    for (i=0;i<other_locations.length;i++) {
	L.circle(other_locations[i][0],25,{color:'red', fillOpacity:0.2}).addTo(thunderLayer);
    }

    // add den names to schedules
    for (i=0;i<denNames.length;i++) {
	dn=i+1
	$('#ScheduleSelect').append($('<option value='+i+'>').text(denNames[i]+' ('+dn+')'));
    }


    $('#bdc_title').text(bdc_title);
    $('#bdc_navbar_title').text(bdc_navbar_title);
    $('#aboutModalTitle').text(bdc_title);
    $('#bdc_info').text(bdc_info);
    $('#bdc_emergency').text(bdc_emergency);
    $('#bdc_downloads').text(bdc_downloads);
    $('#findModalTitle').text(bdc_title+' - Find a Station');

    // put these in backwards since we are prepending
    for (i=welcome_message.length-1;i>=0;i--) {
	$('#campInfo').prepend("<p>"+welcome_message[i]+"</p>");
    }
    
    $('#staffTitleLine').text(staff_title_line);
    
    for (i=0;i<staff.length;i++) {
	$('#staffList').append('<li class="list-group-item">'+staff[i][0]+': '+staff[i][1]+'</li>');
    }

    $('#StationSelect').on('change', function(){
	var selected = $('#StationSelect option:selected').val().split(" ");
	if (selected[0] == 'Station') {
	    var station = selected[1].slice(0,-1);
	
	    highlightMarker2('click',station); 
	    $('#StationSelect').selectpicker('val','').selectpicker('refresh');
	    $('#findStationModal').modal('hide'); 
	}
	return false;
    });

    $('#ScheduleSelect').on('change', function(){
	var selected = $('#ScheduleSelect option:selected').val();
	$("#ScheduleList").html(generateSchedule(selected));
	return false;
    });

    for (i=0; i<documents.length; i++) {
	$('#downloadsDropdown').append("<li><a href='#' onclick=\"openDocument('"+documents[i][1]+"');\">"+documents[i][0]+"</a></li>");
    }

});



/* Placeholder hack for IE */
if (navigator.appName == "Microsoft Internet Explorer") {
  $("input").each(function () {
    if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
      $(this).val($(this).attr("placeholder"));
      $(this).focus(function () {
        if ($(this).val() === $(this).attr("placeholder")) $(this).val("");
      });
      $(this).blur(function () {
        if ($(this).val() === "") $(this).val($(this).attr("placeholder"));
      });
    }
  });
}

//
// Helper functions
//



// this function is called from the about Modal via the signal tab
function turnOnEmergencyLayer(layer) {
    if (layer == 'tornado') {
	map.addLayer(tornadoLayer);
    } else if (layer == "thunder") {
	map.addLayer(thunderLayer);
    } else if (layer == "hazard") {
	map.addLayer(hazardLayer);
    }
    // hide the about modal
    $('#aboutModal').modal('hide'); 

    
}

function openDocument(doc) {
    $('#aboutModal').modal('hide');
    window.open(doc,'_blank');
    return false;
}

function onMapDoubleClick(e) {
    // now can use pulldown to change type
    if (e.originalEvent.shiftKey == true) {
	addInfoMarker(e,"restroom");
	return false;
    }

    // default - no keys pressed - add station
    var message=window.prompt('Enter station name',null);
    if (message != null && message != "") {
	var num=markers.length+1;
	var icon=L.divIcon({html: num, iconSize: [20,20]});
	var marker=L.marker(e.latlng, {icon: icon, draggable: buildMap, className: 'stationicon'}).addTo(cubLayer);
	marker.message=message;
	marker.markertype="station";
	marker.markernum=markers.length;
	marker.thunderstorm=markers.length;
	marker.bindPopup(message);
	markers.push(marker);
    }
}

function addInfoMarker(e,markertype) {
    var num=infomarkers.length+1;
    var im=iconType(markertype);
    if (im != null) {
	var icon=im[0];
	var message=im[1];
	var marker=L.marker(e.latlng, {icon: icon, draggable: buildMap, className: 'stationicon'}).addTo(servicesLayer);
	marker.message=message;
	marker.markertype=markertype;

	
	if (buildMap) {
	    bindBuildPopupInfoMarker(marker,num);
	} else {
	    marker.bindPopup(message);
	}
	infomarkers.push(marker);
    }
}

function iconType(markertype) {
    if (markertype == "restroom") {
	return [iconRestroom,"Restroom&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "water") {
	return [iconWater,"Water&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "firstaid") {
	return [iconFirstAid,"First Aid&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "office") {
	return [iconOffice,"Camp Office&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "flags") {
	return [iconFlag,"Check-In Location&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "dropoff") {
	return [iconCar,"Drop-off point&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "tradingpost") {
	return [iconTradingPost,"Trading Post&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else if (markertype == "truck") {
	return [iconTruck,"Kona Ice&nbsp;&nbsp;&nbsp;&nbsp;"];
    } else {
	return null;
    }
}

function changeIcon(event) {
    var values=event.target.id.split("_");
    var number=values[2]-1;
    var im=iconType(event.target.value);
    infomarkers[number].markertype=event.target.value;
    infomarkers[number].setIcon(im[0]);
    infomarkers[number].message=im[1];
    infomarkers[number].closePopup();
}

function bindBuildPopupInfoMarker(marker,num) {
    var _id="infomarker_popup_"+num;
    var _selected_restroom="";
    var _selected_water="";
    var _selected_firstaid="";
    var _selected_office="";
    var _selected_flags="";
    var _selected_dropoff="";
    var _selected_tradingpost="";
    var _selected_truck="";
    
    eval("_selected_"+markertype+"=' selected';")
    message="<select id=\""+_id+"\">"+
	"<option value=restroom "+_selected_restroom+">Restroom</option>"+
	"<option value=water "+_selected_water+">Water</option>"+
	"<option value=firstaid "+_selected_firstaid+">First Aid</option>"+
	"<option value=office "+_selected_office+">Camp Office</option>"+
	"<option value=flags "+_selected_flags+">Check-in Location</option>"+
	"<option value=dropoff "+_selected_dropoff+">Drop-off Point</option>"+
	"<option value=tradingpost "+_selected_tradingpost+">Trading Post</option>"+
	"<option value=truck "+_selected_truck+">Kona Ice</option>"+
	"</select>";
    marker.bindPopup($(message).change(function(e) { changeIcon(e);})[0]);
}

function bindBuildPopupMarker(marker,num) {
    var _id="infomarker_popup_"+num;
    var _selected_restroom="";
    var _selected_water="";
    var _selected_firstaid="";
    var _selected_office="";
    var _selected_flags="";
    var _selected_dropoff="";
    var _selected_tradingpost="";
    var _selected_truck="";
    
    message="<select id=\""+_id+"\">"+
	"<option value=restroom "+_selected_restroom+">Restroom</option>"+
	"<option value=water "+_selected_water+">Water</option>"+
	"<option value=firstaid "+_selected_firstaid+">First Aid</option>"+
	"<option value=office "+_selected_office+">Camp Office</option>"+
	"<option value=flags "+_selected_flags+">Check-in Location</option>"+
	"<option value=dropoff "+_selected_dropoff+">Drop-off Point</option>"+
	"<option value=tradingpost "+_selected_tradingpost+">Trading Post</option>"+
	"<option value=truck "+_selected_truck+">Kona Ice</option>"+
	"</select>";
    marker.bindPopup($(message).change(function(e) { changeIcon(e);})[0]);
}

function clearMarkers() {
    cubLayer.clearLayers();
    servicesLayer.clearLayers();

    markers.length=0;
    infomarkers.length=0;
}

function dumpMarkers(e) {
    var dumpStr="/*\nconfigure.js: Configuration options for Buckeye Day Camp\n\n"+
	"Generated on: "+ Date() + "\n*/\n\n";

    savedVariables.forEach(function(pair) {
	var typ = varType(pair[0]);
	if (typ == "null") {  // comment
	    dumpStr=dumpStr+"// "+pair[1]+"\n\n";
	} else {
	
	    dumpStr=dumpStr+"// "+pair[1]+"\n" + "var "+pair[0]+"=";
	    eval ("var val = "+pair[0]+";\n\n");
	    
	    if (typ == "string" || typ == "number" || typ == "array2d" || typ == "array") {
		dumpStr=dumpStr+JSON.stringify(val)+";\n\n";
	    } else if (typ == "marker") {
		dumpStr=dumpStr+"[\n";
		for (var i=0;i<val.length;i++) {
		    var ll=val[i].getLatLng();
		    v={latlng: [ll.lat,ll.lng], message: val[i].message, markertype: val[i].markertype}
		    //var	v = "[["+ll.lat+","+ll.lng+"],\""+val[i][1]+"\"]";
		    dumpStr=dumpStr+"\t"+JSON.stringify(v);
		    if (i<val.length-1) {
			dumpStr=dumpStr+",";
		    }
		    dumpStr=dumpStr+"\n";
		}
		dumpStr=dumpStr+"];\n\n";
	    }
	}
    });

    download(dumpStr,"configure_new.js","text/plain");
}

function varType(varName) {
    if (varName == null) {
	return "null";
    }

    eval("var _v = "+varName+";");
    var _typ = typeof(_v);

    if (_typ == "string") {
	return "string";
    } else if (_typ == "number") {
	return "number";
    } else {
	if (Array.isArray(_v)) {
	    if (_v.length > 0) {
		if (typeof(_v[0])=="object" && "markertype" in _v[0]) {
		    return "marker";
		}
	    } 
	    return "array";
	} else {
	    return "object";
	}
    }
}


	

function onMapKeypress(e) {
    if (e.originalEvent.which == 112) { // key = p
	dumpMarkers(e);
    } else if (e.originalEvent.which == 99) { // key = c
	clearMarkers(e);
    }
}


function highlightMarker2(type,markern) {
    var markernum=markern-1;
    //if (markernum==14) { markernum=4; }
    var curmarker=markers[markernum];
    if (markerMode=="web") {
	while(webmarkers[markernum]=="prev") {
	    markernum--;
	}
	if(webmarkers[markernum]!="same") {
	    curmarker=webmarkers[markernum][0];
	}
    }
    if (type == 'mouseover') {
	curmarker.setStyle({color: 'gold'});
    } else if (type == 'mouseout') {
	curmarker.setStyle({color: markerColor});
    } else if (type == 'click') {
	if (map.getZoom() > map.getMinZoom()) {
	    map.panTo(curmarker.getLatLng());
	}
	curmarker.openPopup();
    }
    
}

/* startup routines */


function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function showStation(station){
    /*$('#stationInfoModal').modal('show');*/
    $('.nav-tabs a[href="#siTab' + station + '"]').tab('show');
    return(false);
};

var dow=['Monday','Tuesday','Wednesday','Thursday','Friday'];
var times=['9:00-10:00','10:15-11:15','11:30-12:30','1:30-2:30','2:45-3:45'];
var prepool=['9:00-9:45','10:15-11:00','11:30-12:15','1:30-2:15',''];
var changein=['','9:50-10:05','11:05-11:20','1:15-1:25','2:20-2:35'];
var changeout=['10:05-10:20','11:20-11:35','12:30-12:45','2:35-2:50',''];
var postpool=['','10:30-11:15','11:45-12:30','1:45-2:30','3:00-3:45'];

var pool1=5
var pool2=16
var creeking=0

/* Generate schedule text for a den */
// note that denNumber is zero-indexed (1 less than published number
function generateSchedule(denNumber) {

    if (denNumber < 0) return "";

    var slotNumber=denNumber;
    //  In 2016, we shifted the schedules to keep Tigers from creeking on day 1 (=true)
    //  In 2017, we didn't do that. = false
    var useShiftedSchedule=true;    
    if (useShiftedSchedule) {
	var nDens=denNames.length;
	var split=Math.floor(nDens/2);
	var rem=1-(denNumber % 2); // so that tigers don't go creeking day 1
	slotNumber = Math.floor(denNumber/2)+rem*split;
    }

    var returntext="<ul>"
    
    for (day=0;day<=3;day++) {
	returntext+='<li>'+dow[day]+'</li><ul>'
	// morning
	// remind about wearing swimwear, creeking shoes
	//
	sl=slotNumber;
	for (j=0;j<5;j++) {
	    if (sl == creeking) {
		returntext+="<li><i>Remember to bring creeking shoes today!</i></li>";
		break;
	    }
	    sl = (sl + 1) % nDens;
	}
	
	sl=slotNumber;
	if (sl == pool1 || sl == pool2) {
	    returntext+="<li><i>Come to camp in swimwear today!</i></li>";
	} else {
	    for (j=1;j<5;j++) {
		sl = (sl + 1) % nDens;
		if (sl == pool1 || sl == pool2) {
		    returntext+="<li><i>Remember to bring swimwear today!</i></li>";
		    break;
		}
	    }
	}

	for(time=0;time<3;time++) {
	    //returntext+='<li>'+times[time]+'&nbsp;Station '+(slotNumber+1)+': '+markers[slotNumber].message+'</li>';
	    returntext+=_getTimeString(slotNumber,day,time);
	    slotNumber=slotNumber+1;
	    if (slotNumber>=nDens) { slotNumber = 0; }
	}
	returntext+=_getLunchString(slotNumber-1,day);
	for(time=3;time<5;time++) {
	    //returntext+='<li>'+times[time]+'&nbsp;Station '+(slotNumber+1)+': '+markers[slotNumber].message+'</li>';
	    returntext+=_getTimeString(slotNumber,day,time);
	    slotNumber=slotNumber+1;
	    if (slotNumber>=nDens) { slotNumber = 0; }
	}
	returntext+="</ul>";
    }
    // Friday is unusual
    day=4
    returntext+='<li>'+dow[day]+'</li><ul>'
    // check for reminders
    sl=slotNumber;
    for (j=0;j<2;j++) {
	if (sl == creeking) {
	    returntext+="<li><i>Remember to bring creeking shoes today!</i></li>";
	    break;
	}
	sl = (sl + 1) % nDens;
    }
    if (slotNumber == pool1 || slotNumber == pool2) {
	returntext+="<li><i>Come to camp in swimwear today!</i></li>";
    } else if (slotNumber+1 == pool1 || slotNumber+1 == pool2) {
	returntext+="<li><i>Remember to bring swimwear today!</i></li>";
    }


    returntext+='<li>9:00-10:00&nbsp;Campfire (Amphitheater)</li>';
    for(time=1;time<3;time++) {
	//returntext+='<li>'+times[time]+'&nbsp;Station '+(slotNumber+1)+': '+markers[slotNumber].message+'</li>';
	returntext+=_getTimeString(slotNumber,day,time);
	slotNumber=slotNumber+1;
	if (slotNumber>=nDens) { slotNumber = 0; }
    }
    returntext+='<li>12:30-1:30&nbsp;Picnic Lunch</li>';
    returntext+='<li>1:30-4:00&nbsp;Open Programming</li>';
    returntext+="</ul>";
    returntext+="</ul>";
   
    return returntext;
}


function _getTimeString(stationNumber,day,time) {
    var returnstring="";
    // if this is pool time, add in strings for changing
    if (stationNumber == pool1 || stationNumber == pool2) {
	if ((day<4 && time>0) || (day==4 && time>1)) {
	    returnstring+="<li>"+changein[time]+"&nbsp;Change into swimwear</li>";
	}
	returnstring+="<li>"+times[time]+"&nbsp Station "+(stationNumber+1)+": "+markers[stationNumber].message+"</li>";
	if ((day<4 && time<4) || (day==4 && time<2)) {
	    returnstring+="<li>"+changeout[time]+"&nbsp;Change out of swimwear</li>";
	}
	return returnstring;
    }


    var tm;
    // check if this is station before pool
    if ((stationNumber+1 == pool1 || stationNumber+1 == pool2) && time<4) {
	// if so, station ends early if not at end of day
	tm=prepool[time];
    } else if ((stationNumber-1 == pool1 || stationNumber-1 == pool2) && time>0) {
	// if so, station starts late if not a beginning of day
	tm=postpool[time];
    } else {
	tm=times[time];
    }

    return "<li>"+tm+"&nbspStation "+(stationNumber+1)+": "+markers[stationNumber].message+"</li>";

    // to do - lunch
}

// lunch is delayed if you are coming from pool
function _getLunchString(stationNumber,day) {
    if (day<4 && (stationNumber==pool1 || stationNumber==pool2)) {
	return "<li>12:45-1:45 Lunch</li>";
    } else if (day<4 && (stationNumber+1==pool1 || stationNumber+1==pool2)) {
	return "<li>12:15-1:15 Lunch</li>";
    } else {
	return "<li>12:30-1:30 Lunch</li>";
    }
}
	




