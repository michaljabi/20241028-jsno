import chalk from "chalk";
import { programEventBus, PROGRAM_EVENTS } from "./program-bus.js";

programEventBus.on(PROGRAM_EVENTS.ON_RENDER, (data) => {
  if (data.eventName === PROGRAM_EVENTS.ON_DATA) {
    console.log("New data:");
  } else {
    console.log("Status changed:");
  }
  data.party.getAll().forEach((guest, idx) => {
    if (guest.confimed) {
      console.log(idx + 1, chalk.green(guest.fullName));
    } else {
      console.log(idx + 1, chalk.bgBlue(guest.fullName));
    }
  });
});
