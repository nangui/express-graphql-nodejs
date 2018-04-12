const employees = [
  {
    id: 1001,
    firstname: "Adonai",
    lastname: "Nangui",
    skills: ["Developpeur web", "Analyste", "Developpeur mobile"]
  },
  {
    id: 1002,
    firstname: "Adja",
    lastname: "Kane",
    skills: ["Admin Rx", "Developpeur web"]
  },
  {
    id: 1003,
    firstname: "Marie",
    lastname: "Nangui",
    skills: ["Marketing digital", "Management"]
  }
]

const resolvers = {
    Query: {
        employees: () => {
            return employees
        },
        employee: (root, {id}) => {
            return employees.find(employee => employee.id === id)
        }
    }
}

export default resolvers