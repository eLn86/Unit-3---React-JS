export const setTodos = (Todos) => {
  // Check if Todos is an array and if so store the item in local storage
  if(Array.isArray(Todos)) {
    localStorage.setItem('Todos', JSON.stringify(Todos));
  }
}

export const getTodos = (Todos) => {
  // Get Todos JSON from local storage
  const todosJSON = localStorage.getItem('Todos');
  let todos = [];
  try {
    todos = JSON.parse(todosJSON);
  }catch(e) {
    console.log("Error: Could not decode Todos from local storage because: " + e)
  }
  return Array.isArray(todos) ? todos : []
}
