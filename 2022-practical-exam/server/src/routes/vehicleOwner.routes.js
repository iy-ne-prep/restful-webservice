import express from 'express'
import { validateVehicleRegistration } from '../validators/vehicle.validator.js'
import { assignVehicleToOwner, getVehicleOwners } from '../controllers/vehicleOwner.controller.js'
const router = express.Router()

router.get("/", getVehicleOwners)

router.post("/assign/vehicle/:vehicleId/owner/:ownerId",validateVehicleRegistration,assignVehicleToOwner)

export default router;