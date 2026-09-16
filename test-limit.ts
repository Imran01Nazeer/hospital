import { db } from './lib/db/client';
import { appointments } from './lib/db/schema';
import { desc } from 'drizzle-orm';

async function run() {
  try {
    const res = await db.select().from(appointments).orderBy(desc(appointments.createdAt)).limit(25).offset(0);
    console.log('LIMIT 25 OFFSET 0 SUCCESS', res.length);
  } catch(e: any) {
    console.error('LIMIT 25 OFFSET 0 ERROR:', e.message);
  }
}
run();
