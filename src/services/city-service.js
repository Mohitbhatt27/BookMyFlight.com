const {CityRepository} = require ('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity (data) {
        try {
            const city = await this.cityRepository.createCity({name: data.name});
            return city;
        } catch (error) {
            console.log("Some error occured in service while creating city");
            throw {error};
        }
    }

    async deleteCity (cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Some error occured in service while deleting city");
            throw {error};
        }
    }

    async updateCity (cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Some error occured in service while updating city");
            throw {error};
        }
    }

    async getCity (cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Some error occured in service while getting city");
            throw {error};
        }
    }

    async getAllCities () {
        try {
            const cities = await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Some error occured in service while getting all cities");
            throw {error};
        }
    }
}

module.exports = CityService;