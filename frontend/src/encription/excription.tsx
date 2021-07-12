import * as crypto from "crypto";

export const encryptFile = (file: Buffer, key: any, iv: any) => {
  try {
    const algo = "aes-256-ctr";
    //   key = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv(algo, Buffer.from(key), iv);
    const crypted = Buffer.concat([cipher.update(file), cipher.final()]);
    return crypted;
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
};

export const decryptFile = (file: Buffer, key: any, iv: any) => {
  try {
    const algo = "aes-256-ctr";
    const keyBuff = Buffer.from(key, "base64");
    const ivBuff = Buffer.from(iv, "ascii");

    const cipher = crypto.createDecipheriv(algo, keyBuff, ivBuff);
    const decrypted = Buffer.concat([cipher.update(file), cipher.final()]);
    return decrypted;
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
};
export function toBuffer(ab: ArrayBuffer) {
  let buf = Buffer.alloc(ab.byteLength);
  let view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}
