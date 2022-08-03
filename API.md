# API Notes
## Creating an instance of the CRDT library

1. Import the `create` function from `@mycelial/nodejs`
2. Call the `create` function, passing in a unique namespace

## Connecting a websocket network adapter

1. Import the `create` function from `@mycelial/websocket`
2. Call the `create` function, passing in a CRDT instance and 
   an object with an endpoint property pointing to `wss://v0alpha-relay.fly.dev/v0alpha`

## Creating a store

1. Import `Store` from `@mycelial/v0`
2. Instantiate a new instance of a store, passing in the CRDT 
   instance.

## Listening for changes to the store

1. Add an event handler to the store by calling `<store>.events.addEventListener('change', cb)`

## Creating an Entity

1. Import `Entity` from `@mycelial/v0`
2. Call `Entity.from` passing in a unique id as the first 
   parameter, and an object literal as the second parameter.

## Adding an entity to a store

1. Call the `add` method on a store instance, passing in the 
   entity.

## Reading data from the store

1. You can read a stores data with `map`, `reduce`, `filter` 
   and `find`

## Looping over a collection

1. If you have a collection from calling `filter`, you can 
   iterate over the collection using a `for of` loop.


If you're struggling to complete the exercise, you can look at the file
`completed.mjs` to see a working example.