
# Performance testing with K6 and Graphana and Prometheus

This project sets up a monitoring and visualization system using Prometheus and Grafana with Docker Compose, enabling users to observe performance tests executed via k6. Prometheus, a time-series database, is configured to accept remote write requests from k6, allowing it to store and scrape performance metrics. Grafana, a powerful visualization tool, is then used to create dashboards for real-time analysis of the collected data. This setup provides an efficient and scalable way to monitor system performance and visualize test results, making it ideal for load testing and performance tracking.


# Hi, I'm Ehsanul Alam Sabbir! 👋


## 🚀 About Me
I'm a curious Software Quality Assurance Engineer who loves to experiment with different tools and technologies that helps me doing my job in a better way ...


## Features

- Framework - for k6 to do the performance tests.

- Automated Monitoring Setup: Uses Docker Compose to automate the deployment of Prometheus and Grafana.

- Remote Write Support: Prometheus is configured to accept remote write requests from k6, enabling seamless integration of performance test data.

- Performance Test Metrics: Collects and stores performance test metrics from k6 using Prometheus.

- Real-Time Visualization: Grafana dashboards allow real-time visualization and analysis of performance metrics.

- Custom Dashboards: Easily create and customize Grafana dashboards to monitor key metrics and test results.

- Persistent Data Storage: Grafana’s data is stored in named volumes to ensure persistence across container restarts.


## Documentation

k6 Performance Test Project
This repository contains a complete setup for running performance tests using k6, with Prometheus as the data collection backend and Grafana for visualizing the test results. By utilizing Docker Compose, this project automates the deployment of Prometheus and Grafana, allowing you to efficiently monitor and analyze the performance of your system under test.


Prerequisites:

Docker: Install Docker on your machine.

Docker Compose: Ensure Docker Compose is installed (it comes with Docker Desktop).

## Deployment

To deploy this project


Setup Instructions
1. Clone the Repository

git clone https://github.com/easabbir/k6-performance-test.git

cd k6-performance-test
2. Run the docker-compose.yml File
The docker-compose.yml file defines the services for Prometheus and Grafana. It also mounts the Prometheus configuration file (prometheus.yml).

3. Run Docker Compose
Run the following command to start Prometheus and Grafana:

```bash
  docker-compose up -d
```

Prometheus will be available at http://localhost:9090

Grafana will be available at http://localhost:3000 

(default credentials: admin/admin)

4. Configure Grafana
Go to Grafana (http://localhost:3000).


Log in with the default credentials (admin/admin), and skip setting password for now.


Add Prometheus as a data source:
Navigate to Configuration > Data Sources > Add Data Source.
Select Prometheus and set the URL to http://prometheus:9090.
Click Save & Test.




5. Run k6 Performance Tests
You can now run k6 tests and push the metrics to Prometheus.



Example 
```bash
k6 run -o experimental-prometheus-rw .\tests\basic_test.js
```

6. Create Grafana Dashboards
Go to Grafana's home page and click on Create > Dashboard.
Add a Graph panel.
Select the Prometheus data source and use queries like k6_http_req_duration_seconds_count to visualize k6 test results.

Alternatively Add dashboard eg 19665_rev3.json as added in the project as a json file


Conclusion

This project provides a fully automated setup to monitor and analyze performance tests using k6, Prometheus, and Grafana. With this setup, you can easily run load tests and visualize real-time data in customizable Grafana dashboards.

This documentation should be a great starting point for anyone looking to get up and running with your project. Let me know if you'd like to make any adjustments!
## Running Tests

To run tests, run the following command


Example 
```bash
k6 run -o experimental-prometheus-rw .\tests\basic_test.js
```
## Screenshots
![dashboard sample](https://github.com/user-attachments/assets/92317abf-2878-4fae-a7c5-4c2353bda976)


