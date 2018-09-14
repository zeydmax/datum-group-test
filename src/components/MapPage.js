import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import L from 'leaflet';
import './MapPage.css';
import 'leaflet-mouse-position';
import 'leaflet-mouse-position/src/L.Control.MousePosition.css'
import 'leaflet-draw';
import 'leaflet.measurecontrol/leaflet.measurecontrol';
import 'leaflet.measurecontrol/docs/leaflet.measurecontrol.css';
import 'leaflet-draw/dist/leaflet.draw-src.css';


const places = [
    {
        "name": "Студенческий парк ДГТУ",
        "descr": "Парк",
        "lat": 47.24010,
        "lng": 39.71067,
        "id": 1
    },
    {
        "name": "Футбольное поле",
        "descr": "Поле",
        "lat": 47.23937,
        "lng": 39.70914,
        "id": 2
    },
    {
        "name": "Общежитие РГСУ",
        "descr": "Общежитие",
        "lat": 47.23938,
        "lng": 39.71273,
        "id": 3
    },
    {
        "name": "Легко-атлетический манеж",
        "descr": "",
        "lat": 47.24099,
        "lng": 39.70946,
        "id": 4
    },
    {
        "name": "Детские площадки",
        "descr": "",
        "lat": 47.24010,
        "lng": 39.71128,
        "id": 5
    },
    {
        "name": "Памятник студентам и сотрудникам РИСХМ",
        "descr": "",
        "lat": 47.23929,
        "lng": 39.71045,
        "id": 6
    }]


class MapPage extends Component {

    state = {
        lat: 47.24010,
        lng: 39.71067,
        zoom: 17,
      }
    

    //Метод центрирования карты на маркере
    centerMarkersHandler = (lat, lng) => {
        let map = this.refs.map.leafletElement;
        if(this.state.lat !== lat && this.state.lng !== lng){
            this.setState({lat:lat, lng:lng})
        }
        else {
            map.panTo([lat,lng])
        }
        
    }

    componentDidMount() {
        let map = this.refs.map.leafletElement;
        
        L.control.mousePosition().addTo(map);
        L.Control.measureControl().addTo(map);
    }

    
    render() {

        const { lat, lng, zoom } = this.state;
        const position = [lat, lng];

        const markers = places.map(marker =>(
            <Marker key={marker.id} position={[marker.lat,marker.lng]}>
                <Popup>
                    <b>{marker.name}</b>
                    <p className="text-center">{marker.descr}</p>
                </Popup>
            </Marker>
        ))

        const cards = places.map(card => (
            <Card className='mt-2' key={card.id}>
                <CardBody>
                <CardTitle>{card.name}</CardTitle>
                <CardSubtitle>{card.descr}</CardSubtitle>
                <Button 
                    className='bg-info mt-2' 
                    onClick={this.centerMarkersHandler.bind(this, card.lat, card.lng)}>
                    Найти
                </Button>
                </CardBody>
            </Card>
        ))
        
        
        return (
            <React.Fragment>
                <Map ref='map' center={position} zoom={zoom}>
                    <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers}
                </Map>
                <div id="mapid"></div>
                <div className='card-box'>
                    {cards}
                </div>
                
            </React.Fragment>
            )
    }
}

export default MapPage;