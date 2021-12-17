const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");
const User = require("./model/model");

const user1 = {
  id: 1,
  username: "Jaredtester",
  password: "1234",
};
const user2 = {
  id: 2,
  username: "Jaredtester2",
  password: "1234",
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("users").truncate();
});

afterAll(async () => {
  await db.destroy();
});

test('sanity', () => {
  expect(true).toBe(false)
})
