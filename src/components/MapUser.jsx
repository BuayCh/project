import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Input } from "./ui/input";
const MapUser = () => {
  return (
    <div className="flex pt-[200px]">
      <div className="flex justify-end  p-20 w-[160vh] h-[750px] rounded-md bg-black border ">
        <div className="flex flex-col  w-[650px] p-5 text-3xl gap-40 text-white bg-gray-800 font-extrabold border ">
          <h1 className="flex justify-center" >Contact Us</h1>
          <div className="flex flex-col gap-8">
            <Input />
            <Input />
            <Input />
          </div>
        </div>
        <MapContainer
          className="  h-[48.4vh] w-[50vh] z-0"
          center={[13.749559, 100.541224]}
          zoom={20}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[13.749559, 100.541224]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
export default MapUser;
