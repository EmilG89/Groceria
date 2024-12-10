import { groceryStock } from '$lib/server/db/groceries.js';


//filter daily deal items from db and load them for the home page.
export function load() {
    return {
        dailyDeals: groceryStock.filter((item) => item.dailyDeal === 1)
    }
};
