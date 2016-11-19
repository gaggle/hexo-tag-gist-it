'use strict';
var Url = require("domurl")

exports.gist_it_script = function (args) {
  var account = args.shift()
  var repo = args.shift()
  var path = args.shift()
  if (!account || !repo || !path) {
    throw "Must call with account, repo, and path, got: (" + [account, repo, path].join(", ") + ")"
  }
  var slice = args.shift()
  var opts = args.shift()
  if (typeof slice === 'object' && opts == undefined) {
    opts = slice
    slice = undefined
  }
  var url = new Url("https://gist-it.appspot.com")
  url.paths(["github", account, repo, path])
  if (slice) {
    url.query.slice = slice
  }
  for (var key in opts) {
    url.query[key] = opts[key]
  }
  var cleaned_url = url.toString().replace(/%3A/g, ":").replace(/%2F/g, "/")
  return '<script src="' + cleaned_url + '"></script>'
}

/**
 * gistit tag
 *
 * Syntax:
 *   {% gistit account repo path [start:end] [opts] %}
 */
try {
  hexo.extend.tag.register('gistit', exports.gist_it_script)
} catch (err) {
}
