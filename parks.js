function testData() {
    const apiKey = 'pwp4ilnozbfgPt8i0wpdmLf3nCmSJSTeK0tvDPGy';
    const url= 'https://developer.nps.gov/api/v1/parks?stateCode=PA';
    const auth = {
        headers: new Headers({
            "X-Api-Key": apiKey
        })
    };

    fetch(url, auth) 
     .then(response => response.json())
     .then(responseJson => console.log(responseJson));
}

function click() {
    $('button').click(event => {
        event.preventDefault();
        testData();
    })
}

$(click)
