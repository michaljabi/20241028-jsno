import { EventEmitter } from "node:events";

export const programEventBus = new EventEmitter();

export const PROGRAM_EVENTS = {
  ON_DATA: "on-data",
  ON_GUEST_CONFIRMED: "on-confimed",
  ON_RENDER: "on-render",
};
