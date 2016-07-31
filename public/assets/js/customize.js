/*
configure.js: Configuration options for Buckeye Day Camp

Generated on: Thu Jun 16 2016 18:53:38 GMT-0400 (EDT)
*/

// sets title of browser window
var bdc_title="Buckeye District Day Camp 2016: Take Flight!";

// sets title in black navigation bar
var bdc_navbar_title="Buckeye Day Camp";

// station markers in order from 1,2,3,...
//  first entry of each row is lat/long of marker
//  second entry is station name - should have four &nbsp; after to create space on popup
var markers=[
	{"latlng":[40.23126593521331,-83.05161952972414],"message":"Creeking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23151985146616,-83.05209159851076],"message":"Disc Golf&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23270751162146,-83.05299282073975],"message":"Archery at the Range&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23142156141672,-83.0525314807892],"message":"Leatherwork&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23211777952705,-83.05179119110109],"message":"Whiffle Ball&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23211777952705,-83.05082559585573],"message":"Aquatics&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232871325180774,-83.05073976516725],"message":"Citizenship&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232166924064366,-83.05297136306763],"message":"BB at the Range&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23203587188553,-83.04893732070924],"message":"Fishing&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23136422548865,-83.04795026779176],"message":"Showmanship&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23085639086398,-83.04595470428468],"message":"Nature&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232101398006655,-83.04692029953004],"message":"Scoutcraft&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23436201036058,-83.04625511169435],"message":"Archery in the Woods&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23405077111034,-83.04696321487428],"message":"Woodworking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.233542956631084,-83.04481744766237],"message":"The Garden&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232838562500625,-83.04818630218507],"message":"Gaga&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23212597028573,-83.05041253566743],"message":"Aquatics&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23424734343481,-83.05176973342897],"message":"Games! Games! Games!&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.234640486371944,-83.05041790008546],"message":"BB in the Woods&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.233837817114924,-83.04835796356203],"message":"FlightLab&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232969613126166,-83.0468773841858],"message":"Handicraft&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23242902766126,-83.04977416992189],"message":"@TheLaunchpad&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"}
];

// station markers in order from 1,2,3,...
//  first entry of each row is lat/long of marker
//  second entry is station name - should have four &nbsp; after to create space on popup
//   third entry is type
var infomarkers=[
	{"latlng":[40.23264198608681,-83.0491626262665],"message":"Restroom&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"restroom"},
	{"latlng":[40.23301056639464,-83.04649114608766],"message":"Restroom&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"restroom"},
	{"latlng":[40.2332153323655,-83.0453109741211],"message":"Restroom&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"restroom"},
	{"latlng":[40.23128641236577,-83.0522793531418],"message":"Restroom&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"restroom"},
	{"latlng":[40.23270751162146,-83.0525851249695],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23144613394243,-83.05145859718324],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23129050779551,-83.0520272254944],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.230848199951716,-83.04626584053041],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23233073893132,-83.04928064346315],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23285494384268,-83.04775714874268],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.2332153323655,-83.04700613021852],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.233846007665576,-83.04696321487428],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23434562938309,-83.05041790008546],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.232871325180774,-83.0510187149048],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23211777952705,-83.04671645164491],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.2332399042404,-83.04560065269472],"message":"First Aid&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"firstaid"},
	{"latlng":[40.2332153323655,-83.04501056671144],"message":"Camp Office&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"office"},
	{"latlng":[40.23265017678211,-83.04881930351259],"message":"TradingPost&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"tradingpost"},
        {"latlng":[40.232809895142466,-83.04896950721742],"message":"Kona Ice&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"truck"},
        {"latlng":[40.23362076716124,-83.04619073867799],"message":"Check-In Location&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"flags"},
        {"latlng":[40.233399621209934,-83.04489254951478],"message":"Drop-off point&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"dropoff"}
];

// Other locations on camp that are not stations.  These will correspond to negative numbers in thunderstorm map (first is -1, second is -2...)
var other_locations=[[[40.23263789073878,-83.04899096488954],"Trading Post"],[[40.232478171972765,-83.04783761501314],"Kit Carson"]];

// The following variables control the emergency map overlays (automatically generated)

// Go to the map location for each station in order (1,2,3...)
// If the refuge ares is not a station, indicate using a negative number, which looks up in other locations
var thunderstorm=[2,2,3,4,5,5,7,8,-1,11,11,21,14,14,21,-2,5,-1,-1,21,21,7];

// Tornadoes: all stations go to Amphitheater
var tornado=1;

// Hazard on Rt. 23: all stations go to Exchange Lodge
var hazard=2;

// Documents to be listed as downloadable: each row contains array of title and file
var documents=[
    ["Day Camp Information Packet", "assets/pdf/DayCampInformationPacket.pdf"],
    ["What's new this year?","assets/pdf/NewThisYear.pdf"],
    ["What should I bring to day camp?","assets/pdf/WhatToBringToDayCamp.pdf"],
    ["Den Walker Roles","assets/pdf/DenWalkerRoles.pdf"],
    ["Friday Picnic Lunch Form","assets/pdf/LunchInvite.pdf"],
    ["Emergency Procedures","assets/pdf/EMERGENCY_PROCEDURES_Camp_Lazarus.pdf"],
    ["Printable Station Map","assets/pdf/PrintableMap.pdf"]
];

// About tab names

// Info tab
var bdc_info="Camp Info";

// Emergency tab
var bdc_emergency="Emergency Signals";

// Downloads tab
var bdc_downloads="Downloads";

// Camp Information

// Welcome message - will put each line in as a separate paragraph
var welcome_message=["Welcome to Buckeye District Day Camp 2016: Take Flight! We hope that you and your scouts have a great time this week.","Click here for <a href='assets/pdf/DayCampInformationPacket.pdf' target='_blank'>the Camp Information Packet,</a> or a <a href='assets/pdf/WhatToBringToDayCamp.pdf' target='_blank'>suggested packing list.</a>","If you have any questions do not hesitate to ask one of our executive staff members (who will be wearing blue shirts):"];

// Title for the Camp Staff table
var staff_title_line="Camp Executive Staff";

// Staff - each row is another position
var staff=[["Camp Director","Michelle Gibson"],["Program Director","Shannon Langer"],["Program Staff","Eric Fosler-Lussier, Johanna Johnson, Jodi Lipker, Josh Sizemore"],["Youth Staff Coordinator","Amy Kline"],["Health Officer","Erin Kirke"],["District Executive","Liz Handler"],["District Director","Chas Kenawell"]];

// Den Names
var denNames=["Puffins","Cardinals","Cranes","Pelicans","Ravens","Robins","Sparrows","Blue Jays","Kingfishers","Roadrunners","Sandpipers","Starlings","Thrashers","Buzzards","Condors","Eagles","Falcons","Hawks","Hummingbirds","Loons","Owls","Parrots"];
