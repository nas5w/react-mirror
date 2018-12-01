const chai = require("chai");
const weather = require("../../routes/weather");

const expect = chai.expect;

let req = {
  body: {}
};

let res = {
  sendCalledWith: "",
  send: function(arg) {
    this.sendCalledWith = arg;
  },
  end: function() {},
  status: function(s) {
    this.statusCode = s;
    return this;
  }
};

describe("Weather API Route", function() {
  it("Should throw an error if no zip code is provided", () => {
    weather(req, res);
    return expect(res.sendCalledWith.message).to.equal(
      "A zip code is required."
    );
  });

  it("Should throw an error if the zip code is not five digits long", () => {
    let newReq = req;
    newReq.body.zip = "1234";
    weather(newReq, res);
    return expect(res.sendCalledWith.message).to.contain(
      "incorrectly formatted"
    );
  });
});
