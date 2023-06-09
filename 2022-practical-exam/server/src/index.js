import express,{json} from "express"
import { config } from "dotenv";
config({ path: "./.env" });
import "./utils/database.js"
import cors from "cors";
import { corsFunction } from "./utils/cors.js";
import userRoutes from "./routes/user.routes.js"
import ownerRoutes from "./routes/owner.routes.js"
import vehicleRoutes from "./routes/vehicle.routes.js"
import vehicleOwnerRoutes from "./routes/vehicleOwner.routes.js"
import authenticate from "./middlewares/auth.middleware.js";
import admin from "./middlewares/admin.middleware.js";

const app = express();

app.use(cors());
app.use(corsFunction);
app.use(json())

app.use("/users",userRoutes)
app.use("/owners",authenticate,admin,ownerRoutes)
app.use("/vehicles",authenticate,admin,vehicleRoutes)
app.use("/vehicle-owners",authenticate,admin,vehicleOwnerRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})