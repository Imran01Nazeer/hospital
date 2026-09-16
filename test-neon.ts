import { db } from './lib/db/client';
import { appointments } from './lib/db/schema';
import { desc } from 'drizzle-orm';
async function run() {
  try {
    await db.select().from(appointments).orderBy(desc(appointments.createdAt)).limit(25).offset(0);
    console.log('success');
  } catch(e: any) {
    console.error('ERROR MESSAGE:', e.message);
    if (e.cause) console.error('CAUSE:', e.cause);
  }
}
run();
