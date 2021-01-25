import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Locations from "../../pages/Locations";
import LocationCharacters from "../../components/compounds/locationCharacters";


const LocationsRoutes = ({filtered}) => {
    return (
        <div>
            <Switch>
                <Route exact  path={'/locations'} component={Locations}/>
                // <Route component={LocationCharacters}/>
                <Route exact  path={'/locations/location-characters'} >
                <LocationCharacters filtered={filtered}/>
                </Route>
            </Switch>
            
        </div>
    );
};

export default LocationsRoutes;