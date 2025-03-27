import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
    roomNumber: String,
    type: String,
    price: Number,
    availability: Boolean
});
export default mongoose.model("Room", RoomSchema);
