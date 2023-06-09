import express from 'express'
import { getOwners, registerOwner } from '../controllers/owner.controller.js'
import { validateOwnerRegistration } from '../validators/owner.validator.js'
const router = express.Router()

router.get("/", getOwners)

router.post("/register",validateOwnerRegistration,registerOwner)

export default router;