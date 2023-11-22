import { model, Schema, models } from "mongoose";

const PropertySchema = new Schema({
    redirecturl: {
        type: String,
    },
    imagescr: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    TravelText: {
        type: String,
    },
    TravelText2: {
        type: String,
    },
    rating: {
        type: Number,
    },
    ratingStatus: {
        type: String,
    },
    reviews: {
        type: Number,
    },
    price: {
        type: Number,
    }
});

const PropertyModel = models.property || model("property", PropertySchema);
export { PropertyModel };