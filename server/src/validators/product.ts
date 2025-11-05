import { body } from "express-validator";

export const createProductValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("price").isNumeric().withMessage("price is required"),
    body("instock_count").isInt().withMessage("instock count is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("sizes").isArray({ min: 1 }).withMessage("Sizes is must be array"),
    body("colors").isArray({ min: 1 }).withMessage("Colors is must be array"),
    body("images").isArray({ min: 1 }).withMessage("Colors is must be array"),
    body("images.*.url").notEmpty().withMessage("Each image must have url."),
    body("images.*.public_alt").notEmpty().withMessage("Each image must have public_alt"),
    body("is_new_arrival").isBoolean().withMessage("Is-new-arrival must be boolean"),
    body("is_feature").isBoolean().withMessage("is feature must be boolean"),
    body("rating_count ").isInt().withMessage("rating_count must be boolean"),  
]




// images,
// is_new_Arrival,
// is_Feature,
// rating_count,