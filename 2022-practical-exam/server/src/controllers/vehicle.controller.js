import { Vehicle } from "../models/vehicle.model.js";
import { createSuccessResponse, successResponse } from "../utils/api.response.js";

export const registerVehicle = async (req, res) => {
  try {
    let checkChasisNumber = await Vehicle.findOne({
      chasisNumber: req.body.chasisNumber,
    });
    if (checkChasisNumber)
      return errorResponse(
        `Vehicle with chasis Number${req.body.chasisNumber} is already registered!`,
        res
      );

    let checkModelName = await Vehicle.findOne({
      modelName: req.body.modelName,
    });
    if (checkModelName)
      return errorResponse(
        `Vehicle with model name ${req.body.modelName} is already registered!`,
        res
      );

    let vehicle = new Vehicle(
      _.pick(req.body, [
        "chasisNumber",
        "manufactureCompany",
        "manufactureYear",
        "price",
        "modelName",
      ])
    );
    try {
      await vehicle.save();
      return createSuccessResponse(
        "Vehicle registered successfully",
        vehicle,
        res
      );
    } catch (ex) {
      return errorResponse(ex.message, res);
    }
  } catch (ex) {
    return serverErrorResponse(ex, res);
  }
};

export const getVehicles = async (req, res) => {
  try {

    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 5
    }

    const {docs,totalPages,totalDocs} = await Vehicle.paginate({},options)

    let returnObject = {
      data: docs,
      currentPage: options.page,
      totalPages,
      totalData: totalDocs
    }

    return successResponse("Vehicles", returnObject, res);
  } catch (ex) {
    return serverErrorResponse(ex, res);
  }
};
