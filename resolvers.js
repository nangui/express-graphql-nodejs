
const resolvers = {
    Query: {
        employees: () => {
            // return employees
        },
        employee: (root, {id}) => {
            // return employees.find(employee => employee.id === id)
        }
    }
}

export default resolvers