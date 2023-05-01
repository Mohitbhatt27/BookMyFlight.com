const { CityService } = require('../services/index');

const cityService = new CityService();

/**
 *
 * POST request
 * data -> req.body
 */

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: 'City created successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Some error occured while creating city',
      err: error,
    });
  }
};

/*
 * PUT request
 * data -> req.body
 * id -> req.params.id
 */

const update = async (req, res) => {
  try {
    const cityId = req.params.id;
    const city = await cityService.updateCity(cityId, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: 'City updated successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Some error occured while updating city',
      err: error,
    });
  }
};

/*
 * DELETE request
 * id -> req.params.id
 */

const destroy = async (req, res) => {
  try {
    const cityId = req.params.id;
    const response = await cityService.deleteCity(cityId);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'City deleted successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Some error occured while deleting city',
      err: error,
    });
  }
};

/*
 * GET request
 * id -> req.params.id
 */

const get = async (req, res) => {
  try {
    const cityId = req.params.id;
    const response = await cityService.getCity(cityId);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'City fetched successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Some error occured while fetching city',
      err: error,
    });
  }
};

/*
 * GET request
 * query -> req.query
 * query params -> req.query.name
 * query limit -> req.query.limit
 * query offset -> req.query.offset
 * query sort -> req.query.sort
 * query order -> req.query.order
 * query attributes -> req.query.attributes
 * query group -> req.query.group
 */

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Cities fetched successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Some error occured while fetching cities',
      err: error,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  get,
  getAll,
};
