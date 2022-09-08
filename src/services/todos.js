import axios from 'axios'

const baseUrl = 'https://63185b09f6b281877c69e427.mockapi.io/todos'

const getAll = async () => {
  const { data: todos } = await axios.get(baseUrl)
  return todos
}

const create = async (todo) => {
  const { data: todoAdded } = await axios.post(baseUrl, todo)
  return todoAdded
}

const remove = async (id) => {
  const { data: todoRemoved } = await axios.delete(`${baseUrl}/${id}`)
  return todoRemoved
}

export default { getAll, create, remove }
