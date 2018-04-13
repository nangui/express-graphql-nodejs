import mongoose from 'mongoose'
import employeeModel from './models/employee'

const resolvers = {
  Query: {
    employees: (root, {firstname}) => {
      return employeeModel.find({firstname: firstname})
      // return employees
    },
    employee: (root, { id }) => {
      return employeeModel.findOne({id: id})
      // return employees.find(employee => employee.id === id)
    }
  },
  Mutation: {
    addEmployee: (root, { firstname, lastname, phonenumber, skills }) => {
      const employee = employeeModel({
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        skills: skills
      });
      return employee.save();
    },
    deleteEmployee: (root, { id }) => {
      return employeeModel.findOneAndRemove({ id: id })
    },
    updateEmployee: (root, {id, firstname, lastname}) => {
      return employeeModel.findOneAndUpdate({id: id}, { firstname: firstname}, {lastname: lastname})
    }
  }
};

export default resolvers