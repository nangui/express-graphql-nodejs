import mongoose from 'mongoose'
import uuid from 'node-uuid'

const schema = mongoose.schema

const employeeSchema = new schema({
  id: {type: String, default: uuid.v1},
  firstname: String,
  lastname: String,
  phonenumber: Number,
  skills: [String]
})

const model = mongoose.model('employee', employeeSchema)