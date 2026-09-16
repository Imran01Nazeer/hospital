import { config } from 'dotenv';
config({ path: '.env.local' });
import { db } from './lib/db/client';
import { sql } from 'drizzle-orm';

async function main() {
  try {
    const result = await db.execute(sql`SELECT 1 as result`);
    console.log('Database connectivity successful:', result);
    process.exit(0);
  } catch (error) {
    console.error('Database connectivity failed:', error);
    process.exit(1);
  }
}

main();
