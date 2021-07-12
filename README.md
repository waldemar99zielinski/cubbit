# Cubbit vault
Full stack project for encrypting, decrypting and storing files.

## Setup
### PostgreSQL
[Download and setup](https://www.postgresql.org/download/) for local usage.

To create database run following commads:
```
dropdb DATABASE_NAME
createdb DATABASE_NAME
```
To define relations in project */server/sql* directory run:
```
psql -U DATABASE_USERNAME -d DATABASE_NAME < file.ddl
```
### Server
In */server* directory run:
```
npm install
```
Provide server configuration (*server/template.conf.env* -> rename to conf.env): 
* AWS credentials and [bucket name](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html)
* PostgreSQL [user credentials](https://www.postgresql.org/docs/8.0/sql-createuser.html)

Run:
```
npm start
```

Server validates AWS and PostgreSQL connections, in case of failure with terminate with unpleasant error.

### Frontend
In */fronted* directory run:
```
npm install
```
In */frontend/src/constants/url.tsx* change **const apiUrl** to valid server address.

Run:
```
npm start
```
Open browser on *localhost:3000/*
