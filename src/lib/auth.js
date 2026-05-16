import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.SKILL_SPHERE_URI);
const db = client.db('skill-sphere');
if (!process.env.SKILL_SPHERE_URI) {
  throw new Error("SKILL_SPHERE_URI missing in environment");
}
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client
  }),
});