import http from 'k6/http';

// Helper function to send HTTP requests
export function makeRequest(method, url, payload = {}, params = {}) {
    let response;
    const headers = params.headers || { 'Content-Type': 'application/json', Accept: '*/*' };

    const requestParameter={...params}
    requestParameter.headers = headers;


    // Switch based on HTTP method
    switch (method.toUpperCase()) {
        case 'GET':
            response = http.get(url, requestParameter);
            break;
        case 'POST':
            response = http.post(url, JSON.stringify(payload), requestParameter);
            break;
        case 'PUT':
            response = http.put(url, JSON.stringify(payload), requestParameter);
            break;
        case 'PATCH':
            response = http.patch(url, JSON.stringify(payload), requestParameter);
            break;
        case 'DELETE':
            response = http.del(url, JSON.stringify(payload),requestParameter);
            break;
        default:
            throw new Error('Unsupported method: ${method}');
    }

    // Optional: Log the response for debugging purposes
    // console.log('Response from ${method} request to ${url}:', response.body);

    return response;
}