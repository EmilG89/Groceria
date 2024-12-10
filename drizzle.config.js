import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';

dotenv.config();

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.js',

	dbCredentials: {
		url: process.env.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite',
	out: "./src/lib/server/db/migrations",
});