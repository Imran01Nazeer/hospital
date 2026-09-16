"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./lib/db/client");
const schema_1 = require("./lib/db/schema");
const drizzle_orm_1 = require("drizzle-orm");
async function run() {
    try {
        await client_1.db.select().from(schema_1.appointments).orderBy((0, drizzle_orm_1.desc)(schema_1.appointments.createdAt)).limit(25).offset(0);
        console.log('success');
    }
    catch (e) {
        console.error('ERROR MESSAGE:', e.message);
        if (e.cause)
            console.error('CAUSE:', e.cause);
    }
}
run();
