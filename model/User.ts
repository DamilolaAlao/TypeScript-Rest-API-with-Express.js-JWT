import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 4,
    max: 255
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 4,
    max: 255
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Never serialize the password
userSchema.set("toJSON", {
  transform: (_doc: any, ret: any) => {
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model("User", userSchema);