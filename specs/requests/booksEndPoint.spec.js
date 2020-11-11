const app = require("../../app");
const supertest = require("supertest");
const expect = require("chai").expect;

let server, request, response;

before((done) => {
  server = app.listen(done);
  request = supertest.agent(server);
});

after((done) => {
  server.close(done);
});

describe("GET /api/v1/books", () => {
  before(async () => {
    response = await request.get("/api/v1/books");
  });

  it("it is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("it is expected to return a collection of books", () => {
    const expectedResponseBody = {
      books: [
        {
          author: "Emiliano",
          title: "Node JS Starting",
        },
        {
          author: "Someone",
          title: "Title for some book",
        },
      ],
    };
    expect(JSON.stringify(response.body)).to.equal(
      JSON.stringify(expectedResponseBody)
    );
  });
});
