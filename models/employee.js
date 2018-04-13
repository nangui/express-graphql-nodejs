import mongoose from 'mongoose'
import uuid from 'node-uuid'

const Schema = mongoose.Schema

const employeeSchema = new Schema({
  id: {type: String, default: uuid.v1},
  firstname: String,
  lastname: String,
  phonenumber: Number,
  skills: [String]
})

const model = mongoose.model('employee', employeeSchema)

export default model