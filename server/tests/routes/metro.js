const chai = require("chai");
const metro = require("../../routes/metro");

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

describe("Metro API Route", function() {
  it("Should throw an error if no station code is provided", () => {
    metro(req, res);
    return expect(res.sendCalledWith.message).to.equal(
      "A metro station code is required."
    );
  });
});
