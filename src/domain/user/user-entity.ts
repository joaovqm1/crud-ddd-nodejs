import {
  InvalidUserEmail,
  InvalidUserName,
  InvalidUserUsername,
} from "@/commom";
import { StringUtilitiesImpl } from "@/utilities";

export class User {
  private _id: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _active = false;

  constructor(name: string, username: string, email: string) {
    this._id = StringUtilitiesImpl.createRandomUUID();
    this._name = name;
    this._username = username;
    this._email = email;
    this.validate();
  }

  private validate(): void {
    if (this._name?.length === 0) {
      throw new InvalidUserName();
    }

    if (this._username?.length === 0) {
      throw new InvalidUserUsername();
    }

    if (this._email?.length === 0) {
      throw new InvalidUserEmail();
    }
  }

  get name(): string {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
