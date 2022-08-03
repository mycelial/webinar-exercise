// TODO: import mycelial packages for the nodejs platform
import readline from 'readline';

if (!process.argv[2]) {
  console.log('Namespace argument is required!');
  console.log('Usage: node index.mjs <namespace>');
  process.exit();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', handleInput);

function handleInput(input) {
  const [command, ...description] = input.split(' ');
  if (command === 'add') {
    addTodo(description.join(' '));
  } else if (command === 'remove') {
    removeTodo(description.join(' '));
  } else {
    view();
  }
}

let namespace = process.argv[2];
// TODO: create an instance of the CRDT library
// TODO: connect a websocket network adapter to the CRDT instance
// TODO: create a store
// TODO: listen for store 'change' events, and call the view function

function addTodo(description) {
  // TODO: add the todo to the store
}

function removeTodo(description) {
  // TODO: delete the todo from the store
}

function view() {
  console.clear();
  console.log('Todos');
  console.log('--------------------------------------------');
  // TODO: query for active todos and print the todo description to the console
  console.log('Commands: add <todo>, remove <todo>');
  process.stdout.write('> ');
}

view();
