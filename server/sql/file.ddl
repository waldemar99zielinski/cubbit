CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE files (
    file_id     uuid DEFAULT uuid_generate_v4 (),
    name        VARCHAR(1000) NOT NULL,
    size        NUMERIC(15,0) NOT NULL,
    mime        VARCHAR(1000) NOT NULL,
    url         VARCHAR(2083),
    iv          VARCHAR(16) NOT NULL

);