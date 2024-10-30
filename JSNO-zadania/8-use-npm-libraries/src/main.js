import { programEventBus, PROGRAM_EVENTS } from "./program-bus.js";
import { Party } from "./model/Party.js";
import "./render-on-console.js";

const party = new Party("Moje 30 urodziny");
party.addGuest("Kasia", "Kowalska");
party.addGuest("Jan", "Nowak");

let newUuid;

programEventBus.on(PROGRAM_EVENTS.ON_DATA, (data) => {
  newUuid = party.addGuest(data.name, data.lastName);
  programEventBus.emit(PROGRAM_EVENTS.ON_RENDER, {
    eventName: PROGRAM_EVENTS.ON_DATA,
    party: party,
  });
});

programEventBus.on(PROGRAM_EVENTS.ON_GUEST_CONFIRMED, (data) => {
  party.confirmByUuid(data.uuid, data.value);
  programEventBus.emit(PROGRAM_EVENTS.ON_RENDER, {
    eventName: PROGRAM_EVENTS.ON_GUEST_CONFIRMED,
    party: party,
  });
});

setTimeout(() => {
  // Symulacja (puszczamy event jak ktoś dopisał nowego gościa z klawiatury)
  programEventBus.emit(PROGRAM_EVENTS.ON_DATA, {
    name: "Michał",
    lastName: "Jabłoński",
  });
}, 1000);

setTimeout(() => {
  // Symulacja że ktoś zmienia status gościa:
  programEventBus.emit(PROGRAM_EVENTS.ON_GUEST_CONFIRMED, {
    uuid: newUuid,
    value: true,
  });
}, 2000);
