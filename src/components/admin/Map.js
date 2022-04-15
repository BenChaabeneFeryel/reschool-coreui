import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZmVyeWVsYmVuY2hhYWJlbmUiLCJhIjoiY2t6ZzA2bThoMHZkODJvbnl2ZzJocGN4aiJ9.vkpeWClxobUa6ePXqj9Ulg'

mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/styles/v1/feryelbenchaabene/ckzguu5wv009114l8ou3owuso.html?title=copy&access_token=pk.eyJ1IjoiZmVyeWVsYmVuY2hhYWJlbmUiLCJhIjoiY2t6ZzA2bThoMHZkODJvbnl2ZzJocGN4aiJ9.vkpeWClxobUa6ePXqj9Ulg&zoomwheel=true&fresh=true#12/48.8665/2.3176',
  null,
  true, // Lazy load the plugin
)

const Map = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(10.2179)
  const [lat, setLat] = useState(36.7702)
  const [zoom, setZoom] = useState(11.38)

  useEffect(() => {
    //'mapbox://styles/mapbox/streets-v11'
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/feryelbenchaabene/ckzguu5wv009114l8ou3owuso',
      center: [lng, lat],
      zoom: zoom,
    })
  })
  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  return (
    <main>
      <div className="container-fluid px-4">
        <h2 className="mt-4">Map</h2>
      </div>

      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </main>
  )
}

export default Map
