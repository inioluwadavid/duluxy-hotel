import 'leaflet/dist/leaflet.css'

import {MapContainer, TileLayer} from 'react-leaflet'


export default function Map() {
  return (
    <MapContainer className=' w-full h-full' center={[6.524379, 3.379206]} zoom={10} scrollWheelZoom={true}>
        <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
             <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="http://127.0.0.1:8000/tiles/{z}/{x}/{y}.png"
            />
    </MapContainer>
  )
}
