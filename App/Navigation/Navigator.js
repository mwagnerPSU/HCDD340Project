import * as React from 'react';

export const navigationRef = React.createRef();



export function navigate(name, params) {
    // paramsObj[0] = params[0];
    // paramsObj[1] = params[1];
    // paramsObj[2] = params[2];
    // paramsObj[3] = params[3];

    navigationRef.current?.navigate(name, params);
}

// let paramsObj = {
    
// }
//need to pass parameters of plants from plants.js