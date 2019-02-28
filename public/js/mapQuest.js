function initMap() {
	// add your code here
	L.mapquest.key = 'kB0YpZByHdgUZrCaNx35u6V5cBDxPmkH';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker([32.88,-117.236]).addTo(map);
}