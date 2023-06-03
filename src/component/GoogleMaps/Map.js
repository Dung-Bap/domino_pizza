import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

const Marker = () => {
    return <FontAwesomeIcon className={cx('icon')} icon={faMapMarkerAlt} />;
};

function Map() {
    const [coords, setCooords] = useState({});

    const defaultProps = {
        center: {
            lat: 21.0369277,
            lng: 105.8346576,
        },
        zoom: 15,
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCooords({ lat: latitude, lng: longitude });
        });
    }, []);

    return (
        // Important! Always set the container height explicitly
        <div className={cx('wrapper')}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD6EjRVGGUK_wbdAvRmzZKBx4RSFThf7BA' }}
                defaultZoom={defaultProps.zoom}
                // defaultZoom={15}
                defaultCenter={defaultProps.center}
                center={coords}
            >
                <Marker lat={coords.lat} lng={coords.lng} />
            </GoogleMapReact>
        </div>
    );
}

export default Map;
