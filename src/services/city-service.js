const {CityRepository} = require ('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity (data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Some error occured in service while creating city");
            throw {error};
        }
    }

    async deleteCity (cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
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
}

module.exports = CityService;