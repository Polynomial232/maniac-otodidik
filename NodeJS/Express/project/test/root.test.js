const app = require("../app")
const request = require("supertest")

test("return End World", async () => {
    const res = await request(app).get("/")
    expect(res.text).toBe("End World")
})
