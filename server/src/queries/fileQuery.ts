import { Pool } from "pg";

export const createFileQuery = async (
  name: string,
  size: number,
  mime: string,
  url: string,
  iv: string
) => {
  const query =
    "INSERT INTO files (name, size, mime, url, iv) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  const pool = new Pool({});

  const response = await pool.query(query, [name, size, mime, url, iv]);

  return response;
};
export const getFileToDecryptQuery = async (id: string) => {
  const query =
    "Select file_id, name, size, mime, url, iv from files where file_id = $1";

  const pool = new Pool({});

  const response = await pool.query(query, [id]);

  return response;
};
export const getFileInfoQuery = async (id: string) => {
  const query =
    "Select file_id, name, size, mime, iv from files where file_id = $1";

  const pool = new Pool({});

  const response = await pool.query(query, [id]);

  return response;
};

export const updateURL = async (id: string, url: string) => {
  const query = "Update files set url=$1 where file_id = $2 RETURNING *";

  const pool = new Pool({});

  const response = await pool.query(query, [url, id]);

  return response;
};
