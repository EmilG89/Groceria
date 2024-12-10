import { groceryStock } from '$lib/server/db/groceries.js';
import { categories } from '$lib/server/db/categories.js';

export function load ({ params }) {
    return {
        categoryItems: groceryStock.filter((item) => item.category === params.slug),
        category: categories.find((cat) => cat.slug === params.slug),
    }
}