import request from 'request';

// options for place search api
 const placeSearch = {
    apiKey: 'AIzaSyBZr41RciPSMh5FEWBAt_N1139hJN8y9EA', //my google api key
    scg: {  // scg bang sue lat lang
        lat: 13.805389,
        lang: 100.538056,
    },
    radius: 2000, // radius 2 km
    keyword: 'บางซื่อ'
}

export const findRestuarant = async (req, res) => {
    const { apiKey, scg: { lat, lang }, radius, keyword } = placeSearch;
    // create payload
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lang}&radius=${radius}&types=restaurant&key=${apiKey}&keyword=${keyword}`;

    //call google api using request(lib)
    await request(encodeURI(url), function (error, response, body) {
        if (error) {
            throw error;
        }
        const responseBody = JSON.parse(body)
        return res.send({ data: responseBody.results, total: responseBody.results.length });
    });
};

export const findValue = async (req, res) => {
    const input = ['X', 5, 9, 15, 23, 'Y', 'Z'];
    //series function
    const series = (index) => 2 * (index + 1)
    let valueSeries = [];
    let result = {};
     input.map((i,index) => {
        if(index === 0){
            valueSeries.push(input[index+1] -  series(index))
        }else{
            valueSeries.push(valueSeries[index-1] + series(index-1))
        }
    })
     input.forEach((i,index) => {
        if(typeof i === 'string'){
            result[input[index]] = valueSeries[index]
        }
    });
    return res.send({ result });
};

