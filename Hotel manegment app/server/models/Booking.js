import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    checkIn: Date,
    checkOut: Date
});
export default mongoose.model("Booking", BookingSchema);
