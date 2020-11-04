import axios from 'axios';

const BaseUrl = "https://localhost:5001/api";

class MyApi  {
    static getAllRobots() {
        return axios.get(BaseUrl+ "/robots");
    }

    static createRobot(robot) {
        return axios.post(BaseUrl+ "/robots", robot )
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(err)
                }
            });
    }

    static updateRobot(robot) {
        return axios.put(BaseUrl + "/robots/" + robot.robotID, robot)
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(err)
                }
            });
    }

    static deleteRobot(robotID) {
        return axios.delete(BaseUrl + "/robots/" + robotID);
    }

    static getAllManufacturers() {
        return axios.get(BaseUrl+ "/manufacturers");
    }

    static createManufacturer(manufacturer) {
        return axios.post(BaseUrl + "/manufacturers", manufacturer)
    }

    static updateManufacturer(manufacturer) {
        return axios.put(BaseUrl + "/manufacturers/" + manufacturer.manufacturerID, manufacturer)
    }

    static deleteManufacturer(manufacturerID) {
        return axios.delete(BaseUrl + "/manufacturers/" + manufacturerID);
    }

    static getAllCategories() {
        return axios.get(BaseUrl+ "/categories")
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(err)
                }
            });
    }

    static createCategory (category) {
        return axios.post(BaseUrl + "/categories", category)
    }

    static updateCategory (category) {
        return axios.put(BaseUrl + "/categories/" + category.categoryID, category)
    }

    static deleteCategory (categoryID) {
        return axios.delete(BaseUrl + "/categories/" + categoryID);
    }
}

export default MyApi;

