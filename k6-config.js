import { userFlow } from './scenarios/user_flow.js';

export const options = {
    vus: 100,           // Number of virtual users
    duration: '10s',   // Duration of the test
    thresholds: {
        http_req_duration: ['p(95)<150000'],  // 95% of requests must complete within 15000ms
    },
};

export default function () {
    userFlow();  // Execute the user flow
}