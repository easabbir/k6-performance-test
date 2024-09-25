import http from 'k6/http';
import { check } from 'k6';
import { makeRequest } from '../utils/http_requests.js';
const data = JSON.parse(open('../testData/data.json'));

export function userFlow() {
    const createBookingPayload = data.createBooking;
    const authPayload = data.auth;
    const updateBookingPayload = data.updateBooking;
    
    //Login first attempt
    const loginResponse = makeRequest('POST', 'https://restful-booker.herokuapp.com/auth', { username: 'admin', password: 'password123' });
    check(loginResponse, {
        'Login Successful': (res) => res.status === 200,
    });

    //Login second attempt with data from the json file
    const loginResponse2 = makeRequest('POST', 'https://restful-booker.herokuapp.com/auth', authPayload);

    check(loginResponse2, {
        'Login2 Successful': (res) => res.status === 200,
    });
    
    // Create booking
    // POST request to the booking API
    const bookingResponse = makeRequest('POST', 'https://restful-booker.herokuapp.com/booking', createBookingPayload);

    check(bookingResponse, {
        'Create Booking': (res) => res.status === 200 || res.status === 201,
    });

    // Extracting booking id from authentication
    const bookingId= JSON.parse(bookingResponse.body).bookingid;

    // Get booking
    // GET request to the booking API
    makeRequest('GET', 'https://restful-booker.herokuapp.com/booking/${bookingId}');

    check(bookingResponse, {
        'Get Booking': (res) => res.status === 200
    });

   // Extract the response body for token
   const token = JSON.parse(loginResponse.body).token;
  
    // Update booking with PUT
    // Headers if needed to add
    const headersForPutRequest = { 
        'Content-Type': 'application/json', 
        Accept: '*/*', 
        Cookie: `token=${token}`}
    
    // PUT request to the booking API
    const UpdateBookingWithPUT = makeRequest(
        'PUT', 
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        updateBookingPayload, 
        { headers: headersForPutRequest } 
    );

    check(UpdateBookingWithPUT, {
        'Update Booking with PUT': (res) => res.status === 200
    });

    // Update booking with PUT
    // Headers if needed to add
    const headersForPatchRequest = { 
        'Content-Type': 'application/json', 
        Accept: '*/*', 
        Cookie: `token=${token}`}

    // PATCH request to the booking API
    const UpdateBookingWithPATCH = makeRequest(
        'PATCH', 
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        updateBookingPayload, 
        { headers: headersForPatchRequest } 
    );

    check(UpdateBookingWithPATCH, {
            'Update Booking with PATCH': (res) => res.status === 200
    });
    
    // DELETE a booking
    // Headers if needed to add
    const headersForDeleteRequest = { 
        'Content-Type': 'application/json', 
        Accept: '*/*', 
        Cookie: `token=${token}`}

    // Delete request to the booking API
    const deleteBooking = makeRequest(
        'DELETE', 
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {},
        { headers: headersForDeleteRequest }  
    );

    check(deleteBooking, {
            'Delete Booking': (res) => res.status === 201
    });
               
    //  Log the response for debugging
    //  console.log(bookingResponse.body);
    //  console.log(bookingResponse.status);
    //  console.log({bookingResponse})
}