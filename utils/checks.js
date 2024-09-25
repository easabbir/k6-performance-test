import { check } from 'k6';

// Reusable check for HTTP response codes
export function checkStatus(response, expectedStatus) {
    return check(response, {
        [`status is ${expectedStatus}`]: (res) => res.status === expectedStatus,
    });
}

// Generate random name from a list
export function getRandomName() {
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Tom', 'Fahim', 'Sabbir', 'Sarah'];
    return names[Math.floor(Math.random() * names.length)];
}



// Generate a random price between a min and max value
export function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random date between two ranges
export function getRandomDate(startYear, endYear) {
    const start = new Date(startYear, 0, 1); // e.g., Jan 1, 2015
    const end = new Date(endYear, 0, 1); // e.g., Jan 1, 2025
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

// Generate a random boolean value
export function getRandomBoolean() {
    return Math.random() > 0.5;
}