import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.SKILL_SPHERE_URI);
const db = client.db();
if (!process.env.AUTH_SECRET) {
  throw new Error("AUTH_SECRET missing in environment");
}
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client
  }),
});