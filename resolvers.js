const employees = [
  {
    numero: 1001,
    firstname: "Adonai",
    lastname: "Nangui",
    skills: ["Developpeur web", "Analyste", "Developpeur mobile"]
  },
  {
    numero: 1002,
    firstname: "Adja",
    lastname: "Kane",
    skills: ["Admin Rx", "Developpeur web"]
  }
]

const resolvers = {
    Query: {
        employee: () => {
            return employees
        }
    }
}

export default resolvers