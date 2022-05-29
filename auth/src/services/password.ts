import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(hashWithSalt: string, plainString: string) {
    const [hashedString, salt] = hashWithSalt.split(".");
    const buf = (await scryptAsync(plainString, salt, 64)) as Buffer;

    return buf.toString("hex") === hashedString;
  }
}
