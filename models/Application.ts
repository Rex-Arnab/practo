import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  blood_group: {
    type: String,
    required: true
  },
  nearest_hospital: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  reportUrl: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
