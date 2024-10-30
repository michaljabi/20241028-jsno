import crypto from "node:crypto";

export class Guest {
  constructor(name, lastName) {
    this.uuid = crypto.randomUUID();
    this.name = name;
    this.lastName = lastName;
    this.confimed = false;
  }

  get fullName() {
    return this.name + " " + this.lastName;
  }
}
