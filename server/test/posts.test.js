const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Posts API", () => {
  it("should GET all posts", (done) => {
    chai
      .request(server)
      .get("/posts")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should POST a new post", (done) => {
    chai
      .request(server)
      .post("/posts")
      .send({ title: "Test Post", content: "Test Content" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("_id");
        done();
      });
  });
});
