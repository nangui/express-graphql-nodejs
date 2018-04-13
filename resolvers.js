import mongoose from 'mongoose'
import employeeModel from './models/employee'

const resolvers = {
  Query: {
    employees: () => {
        // return employees
    },
    employee: (root, {id}) => {
        // return employees.find(employee => employee.id === id)
    }
  },
  Mutation: {
    addEmployee: (root, {firstname, lastname, phonenumber, skills}) => {
      const employee = employeeModel({
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        skills: skills
      })
      return employee.save()
    }
  }
}

export default resolvers