// 1. Callback -> nasłuchuje na 1 rzecz, ona się wykonuje i jest Happy Path
// 2. Promise -> nasluchuje na 1 rzecz, ona się wykonuje i jest albo Crash... albo Happy Path
// 3. Streams (Events) -> nsałuchuje na wiele rzeczy, i tutaj jest albo Crash albo cały czas odbieramy

// po 3 sekundach wyślij "Hello"

const EventEmitter = require("events");

const helloEvents = new EventEmitter();

// Event LISTEN
// CONSUMER 1:
helloEvents.on("message", (msg) => {
  console.log(msg);
});

// Event FIRED
helloEvents.emit("message", "YOU CAN NOT SEE ME");

// CONSUMER 2:
helloEvents.on("message", (msg) => {
  console.log(msg);
});

// Provider:
setTimeout(() => {
  helloEvents.emit("message", "hello");
}, 3000);

helloEvents.emit("message", "welcome");
