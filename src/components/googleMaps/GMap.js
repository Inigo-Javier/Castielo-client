import React, { useEffect, useRef, useState } from 'react';
import placesService from '../../services/Places.services'

const GMap = () => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    // list of icons
    const iconList = {
        icon: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
    }

    const [places, setPlaces] = useState([])

    const validLocations = []

    const loadPlaces = () => {
        placesService
            .getAllPlaces()
            .then(({ data }) => {
                data.forEach(place => {

                    const { coordinates } = place.address.location

                    if (coordinates[0] && coordinates[1]) {
                        validLocations.push({ lat: coordinates[0], lng: coordinates[1], icon: iconList.icon })
                    }
                })

                setPlaces(validLocations)

            })
            .catch(err => console.log(err))
    }


    const loadMarker = () => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        places?.map(x => {
            const marker = createMarker(x);
            return bounds.extend(marker.position)
        })
        googleMap.fitBounds(bounds); // the map to contain all markers
    }

    useEffect(() => {
        loadPlaces()
        initGoogleMap()
    }, []);

    useEffect(() => loadMarker())

    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            center: { lat: 40.45328506321756, lng: -3.800394610063071 },
            zoom: 14
        });
    }
    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: { lat: markerObj.lat, lng: markerObj.lng },
        map: googleMap,
        icon: {
            url: markerObj.icon,
            // set marker width and height
            scaledSize: new window.google.maps.Size(50, 50)
        }

    });

    return <div
        ref={googleMapRef}
        style={{ width: 1260, height: 500 }}
    />
}

export default GMap;