import express from 'express'
import { getVehicles, registerVehicle } from '../controllers/vehicle.controller.js'
import { validateVehicleRegistration } from '../validators/vehicle.validator.js'
const router = express.Router()

router.get("/", getVehicles)

router.post("/register",validateVehicleRegistration,registerVehicle)

export default router;