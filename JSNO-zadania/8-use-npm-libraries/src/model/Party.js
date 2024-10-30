import { Guest } from "./Guest.js";

export class Party {
  name = "";
  #guests = [];

  constructor(name) {
    this.name = name;
  }

  addGuest(name = "", lastName = "") {
    const guest = new Guest(name, lastName);
    this.#guests.push(guest);
    return guest.uuid;
  }

  confirmByUuid(uuid, value = true) {
    // jak szukać w Arrray:
    const myGuest = this.#guests.find((g) => g.uuid === uuid);
    if (myGuest) {
      myGuest.confimed = value;
    }
  }

  /**
   * @returns {Guest[]}
   */
  getAll() {
    return this.#guests;
  }
}
