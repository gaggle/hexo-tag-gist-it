"use strict";
var expect = require("chai").expect
var index = require("../index")

describe("gist_it_script", function () {
  it("can be called with account, repo, and path", function () {
    var ideal = '<script src="https://gist-it.appspot.com/github/foo/bar/blob/master/blah.js"></script>'
    expect(index.gist_it_script("foo", "bar", "blob/master/blah.js"))
      .to.eql(ideal)
  })

  it("can specify line start", function () {
    var ideal = '<script src="https://gist-it.appspot.com/github/foo/bar/blob/master/blah.js?slice=10"></script>'
    expect(index.gist_it_script("foo", "bar", "blob/master/blah.js", "10"))
      .to.eql(ideal)
  })

  it("can specify line start and end", function () {
    var ideal = '<script src="https://gist-it.appspot.com/github/foo/bar/blob/master/blah.js?slice=10:20"></script>'
    expect(index.gist_it_script("foo", "bar", "blob/master/blah.js", "10:20"))
      .to.eql(ideal)
  })

  it("appends options to the url", function () {
    var ideal = '<script src="https://gist-it.appspot.com/github/foo/bar/blob/master/blah.js?footer=no"></script>'
    expect(index.gist_it_script("foo", "bar", "blob/master/blah.js", {footer: "no"}))
      .to.eql(ideal)
  })

  it("appends options to the url even when lines are specified", function () {
    var ideal = '<script src="https://gist-it.appspot.com/github/foo/bar/blob/master/blah.js?slice=10:20&footer=no"></script>'
    expect(index.gist_it_script("foo", "bar", "blob/master/blah.js", "10:20", {footer: "no"}))
      .to.eql(ideal)
  })

  it("errors if not called with required arguments", function () {
    var missing_arg = function () {
      index.gist_it_script("foo", "bar")
    }
    expect(missing_arg)
      .to.throw("Must call with account, repo, and path, got: (foo, bar, )")
  })
})
