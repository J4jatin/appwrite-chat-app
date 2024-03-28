// import { Client, Databases, Account } from "appwrite";

// export const PORJECT_ID = "660517f7e525ed6bcf40";
// export const DATABASE_ID = "66051befdaa4e6cdf9a5";
// export const COLLECTION_MSG_ID = "66051bfa319bf68bb895";

// const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("660517f7e525ed6bcf40");
// export const databases = new Databases(client);
// export const account = new Account(client);

// export default client;

import { Client, Databases, Account } from "appwrite";

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
export const COLLECTION_MSG_ID = import.meta.env.VITE_COLLECTION_ID_MESSAGES

const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('660517f7e525ed6bcf40');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
