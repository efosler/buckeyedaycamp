/*
configure.js: Configuration options for Buckeye Day Camp

Generated on: Wed Jul 05 2017 17:08:06 GMT-0400 (EDT)
*/

// sets title of browser window
var bdc_title="Buckeye District Day Camp 2017: Cub Scout Investigations";

// sets title in black navigation bar
var bdc_navbar_title="Buckeye Day Camp";

// station markers in order from 1,2,3,...
//  first entry of each row is lat/long of marker
//  second entry is station name - should have four &nbsp; after to create space on popup
var markers=[
	{"latlng":[40.23126593521331,-83.05161952972414],"message":"Creeking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23145432478238,-83.05241882801057],"message":"Leatherworking/Handicraft&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23220378244398,-83.05207014083864],"message":"Disabilities Awareness&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23269932093311,-83.05293381214143],"message":"Archery at the Range&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23285903917759,-83.05151760578157],"message":"Kickball&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23211777952705,-83.05082559585573],"message":"Aquatics&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.2328303718281,-83.05066466331483],"message":"Woodworking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.231917105629414,-83.05203258991243],"message":"STEM/Forensics&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232400360129766,-83.04979562759401],"message":"Human Foosball&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23215463793338,-83.05293381214143],"message":"BB at the Range&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},

	{"latlng":[40.232031776500854,-83.0489104986191],"message":"Fishing&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232899992512934,-83.04763913154603],"message":"Gaga&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23248226733044,-83.04777324199678],"message":"Cooking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23315390263927,-83.04724216461183],"message":"Citizenship&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23434972462782,-83.04630875587465],"message":"Archery in the Woods&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23405896163527,-83.04758548736574],"message":"Hiking&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23212597028573,-83.05041253566743],"message":"Aquatics&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23396886580674,-83.04904460906984],"message":"Obstacle Course&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23435791511659,-83.0502623319626],"message":"BB in the Woods&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.233972961074286,-83.0468934774399],"message":"Nature&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.232969613126166,-83.0468773841858],"message":"Showmanship&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"},
	{"latlng":[40.23424734343481,-83.05176973342897],"message":"Slingshots&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"station"}
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
	{"latlng":[40.23140517972793,-83.05150687694551],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23129050779551,-83.0520272254944],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23396886580674,-83.04892122745515],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23233073893132,-83.04928064346315],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23285494384268,-83.04775714874268],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.2332153323655,-83.04700613021852],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.233846007665576,-83.04696321487428],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23434562938309,-83.05041790008546],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.232871325180774,-83.0510187149048],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.23435381987232,-83.04645895957948],"message":"Water&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"water"},
	{"latlng":[40.2332399042404,-83.04560065269472],"message":"First Aid&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"firstaid"},
	{"latlng":[40.2332153323655,-83.04501056671144],"message":"Camp Office&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"office"},
	{"latlng":[40.23265017678211,-83.04881930351259],"message":"TradingPost&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"tradingpost"},
	{"latlng":[40.232809895142466,-83.04896950721742],"message":"Kona Ice&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"truck"},
	{"latlng":[40.23362076716124,-83.04619073867799],"message":"Check-In Location&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"flags"},
	{"latlng":[40.233399621209934,-83.04489254951478],"message":"Drop-off point&nbsp;&nbsp;&nbsp;&nbsp;","markertype":"dropoff"}
];

// Other locations on camp that are not stations.  These will correspond to negative numbers in thunderstorm map (first is -1, second is -2...)
//var other_locations=[[[40.23263789073878,-83.04899096488954],"Trading Post"],[[40.232478171972765,-83.04783761501314],"Kit Carson"]];
var other_locations=[[[40.23263789073878,-83.04899096488954],"Trading Post"]];

// The following variables control the emergency map overlays (automatically generated)

// Go to the map location for each station in order (1,2,3...)
// If the refuge ares is not a station, indicate using a negative number, which looks up in other locations
var thunderstorm=[2,2,3,4,3,2,7,8,-1,10,-1,21,13,21,20,21,2,13,-1,20,21,7];

// Tornadoes: all stations go to Amphitheater
var tornado=1;

// Hazard on Rt. 23: all stations go to Exchange Lodge
var hazard=2;

// Documents to be listed as downloadable: each row contains array of title and file
var documents=[["Day Camp Information Packet","assets/pdf/DayCampInformationPacket.pdf"],
	       //["What's new this year?","assets/pdf/NewThisYear.pdf"],
	       ["What should I bring to day camp?","assets/pdf/WhatToBringToDayCamp.pdf"],
	       ["Den Walker Roles","assets/pdf/DenWalkerRoles.pdf"],
	       ["Friday Picnic Lunch Form","assets/pdf/LunchInvite.pdf"],
	       ["Emergency Procedures","assets/pdf/EMERGENCY_PROCEDURES_Camp_Lazarus.pdf"],
	       ["Printable Station Map","assets/pdf/PrintableMap.pdf"]];

// About tab names

// Info tab
var bdc_info="Camp Info";

// Emergency tab
var bdc_emergency="Emergency Signals";

// Downloads tab
var bdc_downloads="Downloads";

// Camp Information

// Welcome message - will put each line in as a separate paragraph
var welcome_message=["Welcome to Buckeye District Day Camp 2017: Cub Scout Investigations. We hope that you and your scouts have a great time this week.","Click here for <a href='assets/pdf/DayCampInformationPacket.pdf' target='_blank'>the Camp Information Packet,</a> or a <a href='assets/pdf/WhatToBringToDayCamp.pdf' target='_blank'>suggested packing list.</a>","If you have any questions do not hesitate to ask one of our executive staff members (who will be wearing blue shirts):"];

// Title for the Camp Staff table
var staff_title_line="Camp Executive Staff";

// Staff - each row is another position
var staff=[["Camp Director","Michelle Gibson"],["Program Director","Shannon Langer"],["Program Staff","Johanna Johnson, Amy Kline"],["Health Officer","Erin Kirke"],["District Executive","Liz Handler"],["District Director","Chas Kenawell"]];

// Den Names in numerical order

var denNames=[
"The Absent Author",
"The Bald Bandit",
"The Canary Caper",
"The Deadly Dungeon",
"The Empty Envelope",
"The Falcon's Feather's",
"The Goose's Gold",
"The Haunted Hotel",
"The Invisible Island",
"The Jaguar's Jewel",
"The Kidnapped King",
"The Lucky Lottery",
"The Missing Mummy",
"The Ninth Nugget",
"The Orange Outlaw",
"The Panda Puzzle",
"The Quicksand Question",
"The Runaway Racehorse",
"The Talking T.Rex",
"The White Wolf",
"The X'ed-Out X-Ray",
"The Yellow Yacht "];

