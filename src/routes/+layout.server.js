
import { categories } from '$lib/server/db/categories.js';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';

/**
categories.forEach((cat) => {
    db.insert(table.category).values(cat);
    let data = db.select().from(table.category);
    console.log(data.all());
});
 */


export function load() {
    return {
        //can do just categories if key name = variable
        categories,
    };
}