import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Locations from "../../pages/Locations";
import LocationCharacters from "../../components/compounds/locationCharacters";


const LocationsRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact  path={'/locations'} component={Locations}/>
                <Route exact  path={'/locations/location-characters'} component={LocationCharacters}/>
            </Switch>
            
        </div>
    );
};

export default LocationsRoutes;