async function getAmadeusAccessToken(): Promise<string> {
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': 'REACT_APP_AMADEUS_API_KEY', // TODO: replace with your own API key
            'client_secret': 'REACT_APP_AMADEUS_API_SECRET' // TODO: replace with your own API secret
        })
    });

    const data = await response.json();
    return data.access_token;
}


export async function searchFlights(
    origin: string,
    destination: string,
    departureDate: string
): Promise<unknown> {
    try {
        const accessToken = await getAmadeusAccessToken();

        if (!accessToken) {
            throw new Error('Unable to get access token');
        }

        const response = await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const flightOffers = await response.json();
        return flightOffers;
    } catch (error) {
        console.error('Error fetching flight data:', error);
    }
}