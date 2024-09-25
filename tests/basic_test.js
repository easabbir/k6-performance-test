import { options } from '../k6-config.js';
import { userFlow } from '../scenarios/user_flow.js';

export { options };  // Import configuration options

export default function () {
    userFlow();  // Run the user flow scenario
}