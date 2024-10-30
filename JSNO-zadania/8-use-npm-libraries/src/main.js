import { programEventBus } from "./program-bus.js";
import { Party } from "./model/Party.js";
import chalk from "chalk";

const party = new Party("Moje 30 urodziny");
party.addGuest("Kasia", "Kowalska");
party.addGuest("Jan", "Nowak");

let newUuid;

programEventBus.on("new-data", (data) => {
  newUuid = party.addGuest(data.name, data.lastName);
});

programEventBus.on("guest-confirmed", (data) => {
  party.confirmByUuid(data.uuid, data.value);
});

setTimeout(() => {
  // Symulacja (puszczamy event jak ktoś dopisał nowego gościa z klawiatury)
  programEventBus.emit("new-data", { name: "Michał", lastName: "Jabłoński" });
}, 1000);

setTimeout(() => {
  // Symulacja że ktoś zmienia status gościa:
  programEventBus.emit("guest-confirmed", { uuid: newUuid, value: true });
}, 2000);

programEventBus.on("new-data", (data) => {
  console.log("New data:");
  party.getAll().forEach((guest, idx) => {
    if (guest.confimed) {
      console.log(idx + 1, chalk.green(guest.fullName));
    } else {
      console.log(idx + 1, chalk.bgBlue(guest.fullName));
    }
  });
});

programEventBus.on("guest-confirmed", (data) => {
  console.log("Status changed:");
  party.getAll().forEach((guest, idx) => {
    if (guest.confimed) {
      console.log(idx + 1, chalk.green(guest.fullName));
    } else {
      console.log(idx + 1, chalk.bgBlue(guest.fullName));
    }
  });
});
