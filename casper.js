var casper = require('casper').create({
    viewportSize: { width: 1024, height: 600 },
    onWaitTimeout: 20000,
    clientScripts: ['vendor/jquery-1.12.4.min.js']
});

// $('.offer-listing:not(#flight-module-wl_) .t-select-btn').first()
// var $priceTrendGraph = jQuery('#price-trends-graph-module-container-full');
// console.log($priceTrendGraph);

casper.start('https://www.expedia.com/Flights-Search?trip=roundtrip&leg1=from:SFO,to:LON,departure:12/28/2016TANYT&leg2=from:ORD,to:SFO,departure:12/31/2016TANYT&passengers=children:0,adults:2,seniors:0,infantinlap:Y&mode=search', function(){
	this.echo(this.getTitle());
});


casper.waitForSelector('#price-trends-graph-module-container-full', function() {
    // this.captureSelector('twitter.png', 'html');
});

casper.then(function () {
	casper.capture('image.png');
});
casper.run();
