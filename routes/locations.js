import { Router } from "express"
const router = Router();

import {
    getLocation
} from "../controllers/locations.js"

router.route("/")
    .get(getLocation)