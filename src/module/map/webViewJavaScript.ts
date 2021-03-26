import {IMusics} from '../type/music';
import {IMapboxRecordMap} from '../type/recordContext';
import {BASE_URL, MAPBOX_TOKEN} from '../common';
import {IFeedImage} from '../type/feedContext';

interface IWebViewJavaScriptCode {
  coordinates: string;
  music: IMusics;
  map: IMapboxRecordMap;
  images: Array<IFeedImage>;
}

export const webViewJavaScriptCode = ({coordinates, music, map, images}: IWebViewJavaScriptCode) => {
  const features = [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [],
      },
    },
  ];

  images.map((image) => {
    features.push({
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [image.lat, image.lon]},
      url: `${BASE_URL}/${image.img}`,
    });
  });

  return `
    (function () {
          var coordinates = ${coordinates};
          var audioSource = '${music?.url}';
          var mapStyle = '${map.style}';
      
          mapboxgl.accessToken = '${MAPBOX_TOKEN}';
          var map = new mapboxgl.Map({
              container: 'map',
              style: mapStyle,
              center: coordinates[0],
              pitch: 60, // pitch in degrees
              bearing: -60, // bearing in degrees
              zoom: 15
          });
          var iPath = turf.linestring(coordinates);
          var geojson = {
              'type': 'FeatureCollection',
              'features' : ${JSON.stringify(features)}
              // 'features': [
              //   {
              //     'type': 'Feature',
              //     'geometry': {
              //       'type': 'LineString',
              //       'coordinates': []
              //     }
              //   },
              // ]
          };
          
          geojson.features.forEach(function (marker, index) {
              if (index === 0) {
                return;
              }
              // create a DOM element for the marker
              var el = document.createElement('div');
              el.className = 'marker';
              el.style.backgroundImage = 'url(' + marker.url + ')';
              el.style.width = '40px';
              el.style.height = '40px';
              el.style.backgroundSize = 'cover';
              el.style.borderRadius = '50%';

              // add marker to map
              new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
          });
          
          var iPathLength = turf.lineDistance(iPath, 'kilometers');
          var iPoint = turf.along(iPath, 0, 'miles');
          
          map.on('load', function () {
              map.addSource("path", {
                  "type": "geojson",
                  "data": iPath,
                  "maxzoom": 20
              });
              map.addSource('line', {
                  'type': 'geojson',
                  'data': geojson
              });
              // add the line which will be modified in the animation
              map.addLayer({
                  'id': 'line-animation',
                  'type': 'line',
                  'source': 'line',
                  'layout': {
                      'line-cap': 'round',
                      'line-join': 'round'
                  },
                  'paint': {
                      'line-color': '#007bf1',
                      'line-width': 8,
                      'line-opacity': 0.8
                  }
              });
      
              map.addSource('point', {
                  'type': 'geojson',
                  'data': iPoint
              });
      
              function animate () {
                  document.querySelector('.start').style.display = 'none';
                  var audio = new Audio();
                  audio.src = audioSource;
                  audio.play();
                  /**
                   * step : interval count
                   * numSteps : max interval count.
                   *    if step === numSteps || coordinates is end => interval end
                   * timePerStep : interval time
                   * */
                  var step = 0;
                  var numSteps = 500; //Change this to set animation resolution
                  var timePerStep = 30; //Change this to alter animation speed.
                  var pSource = map.getSource('point');
                  var interval = setInterval(function() {
                      step += 1;
      
                      var curDistance = step / numSteps * iPathLength;
      
                      var iPoint = turf.along(iPath, curDistance, 'miles');
      
                      /** End Animation */
                      if (iPoint.geometry.coordinates === coordinates[coordinates.length - 1]) {
                          var bounds = [
                            coordinates[0],
                            coordinates[Math.floor(coordinates.length / 2)],
                            coordinates[coordinates.length - 1]
                          ];
                          map.fitBounds(bounds);
                          audio.pause();
                          setTimeout(() => {
                              location.reload();
                          }, 2000)
                          return clearInterval(interval);
                      }
      
                      map.jumpTo({center:iPoint.geometry.coordinates})
                      geojson.features[0].geometry.coordinates.push(iPoint.geometry.coordinates);
                      map.getSource('line').setData(geojson);
                      pSource.setData(iPoint);
      
                  }, timePerStep);
              }
      
              // animate()
              document.getElementById('start').addEventListener('click', function () {
                  animate()
              })
          });
    })();
`;
};
