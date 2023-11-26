// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "a9i7aiaf",
  dataset: "production",
  apiVersion: "2023-11-26",
  useCdn: false,
  
  
};

const client = createClient(config);

export default client;

