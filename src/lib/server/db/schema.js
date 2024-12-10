import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const category = sqliteTable('category', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	description: text('description')
});

export const item = sqliteTable('item', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	unit: text('unit').notNull(),
	price: integer('price').notNull(),
	slug: text('slug').notNull().unique(),
	description: text('description'),
	dailyDeal: integer('dailyDeal', { mode: 'boolean' }),
	categoryId: integer('category_id').references(() => category.id)
});

export const userItems = sqliteTable('userItems', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	userId: text('userId').references(() => user.id),
	itemId: integer('itemId').references(() => item.id)
});