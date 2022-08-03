import * as Mycelial from '@mycelial/nodejs';
import { Store, Entity } from '@mycelial/v0';
import { create } from '@mycelial/websocket';
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
  }
}

let namespace = process.argv[2];
// TODO: create an instance of the CRDT library
const instance = await Mycelial.create(namespace);
// TODO: connect a websocket network adapter to the CRDT instance
create(instance, {
  endpoint: 'wss://v0alpha-relay.fly.dev/v0alpha',
});
// TODO: create a store
const store = new Store(instance);
// TODO: listen for store 'change' events, and call the view function
store.events.addEventListener('change', (e) => {
  view();
});

function addTodo(description) {
  // TODO: add the todo to the store
  const todo = Entity.from(description, {
    kind: 'todo',
    description,
    deleted: false,
  });
  store.add(todo);
}

function removeTodo(description) {
  // TODO: delete the todo from the store
  const todo = Entity.from(description, {
    kind: 'todo',
    deleted: true,
  });
  store.add(todo);
}

function view() {
  console.clear();
  console.log('Todos');
  console.log('--------------------------------------------');
  // TODO: query for active todos and print the todo description to the console
  const todos = store.filter((e) => e.properties.deleted === false);
  for (const todo of todos) {
    console.log(todo.properties.description);
  }
  console.log('Commands: add <todo>, remove <todo>');
  process.stdout.write('> ');
}

view();
