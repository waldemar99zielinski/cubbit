import crypto from "crypto";
import * as Encryption from "./excription";
import axios from "axios";
import * as URL from "../constants/url";

function toBuffer(ab: ArrayBuffer) {
  let buf = Buffer.alloc(ab.byteLength);
  let view = new Uint8Array(ab);
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i];
  }
  return buf;
}

export const encryptAndUpload = async (
  file: ArrayBuffer,
  fileName: string,
  fileType: string
) => {
  try {
    const key = crypto.randomBytes(32);
    //convert iv to string hex to simplify data exchange
    const iv = crypto.randomBytes(8).toString("hex");

    console.log("key: ", key.toString("base64"), key, "iv: ", iv);

    const encrypted = Encryption.encryptFile(toBuffer(file), key, iv);

    const blob = new Blob([encrypted as BlobPart]);

    const data = new FormData();
    data.append("file", blob, fileName);
    data.append("name", fileName);
    data.append("mime", fileType);
    data.append("iv", iv);

    const serverRes = await axios({
      method: "post",
      data: data,
      url: URL.postFile(),
    });
    console.log(serverRes);
    return [key];
  } catch (error) {
    throw new Error(error);
  }
};

export const decryptAndDownload = async (
  id: string,
  key: string,
  iv: string,
  name: string
) => {
  try {
    const serverRes = await axios({
      url: URL.getFile(id),
      method: "get",
      responseType: "arraybuffer",
    });
    console.log("data ", serverRes.data);
    const decrypted = Encryption.decryptFile(
      toBuffer(serverRes.data),
      key,
      "todo"
    );
    console.log("decrypted ", decrypted);
    const blob = new Blob([decrypted as BlobPart]);
    saveAs(blob, name);
  } catch (error) {
    throw new Error(error);
  }
};
