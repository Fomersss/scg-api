import request from 'request';

// options for place search api
export const placeSearch = {
    apiKey: 'AIzaSyBZr41RciPSMh5FEWBAt_N1139hJN8y9EA', //my google api key
    scg: {  // scg bang sue lat lang
        lat: 13.805389,
        lang: 100.538056,
    },
    radius: 1500, // radius 1.5 km
}

export const findRestuarant = async (req, res) => {
    const { apiKey, scg: { lat, lang }, radius } = placeSearch;
    // create payload
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
    ?location=${lat},${lang}&radius=${radius}&types=restaurant&key=${apiKey}`;
    //call google api using request(lib)
    await request(url, function (error, response, body) {
        if (error) {
            throw error; //error happen 
        }
        const responseBody = JSON.parse(body)
        return res.send({ data: responseBody.results, total: responseBody.results.length });
    });
};

// export const findValue = async (req, res) => {
//     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${scgLocation.lat},${scgLocation.lang}&radius=1000&types=restaurant&key=${apiKey}`;
//     await request(url, function (error, response, body) {
//         if (error) {
//             throw error; //error happen 
//         }
//         // const results = body.results && body.results.length body.results : {};
//         // console.log('body ==> ', body);
//         const responseBody = JSON.parse(body)
//         // const responseMessage = body.error_message || '';
//         return res.send({ data: responseBody.results, total: responseBody.results.length });
//     });
// };

