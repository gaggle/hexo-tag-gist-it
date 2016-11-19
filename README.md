# hexo-tag-gist-it
This is a [Hexo](http://hexo.io) tag plugin to embed [gist-it](https://gist-it.appspot.com) widgets to your posts.

## Installation
Install via NPM from root directory of your Hexo installation:
```
npm install gaggle/hexo-tag-gist-it --save
```

## Usage
```
{% gistit account repo path [start:end] [opts] %}
```

E.g.
```
{% gistit gaggle hexo-gist-it blob/master/README.md 1:2 %}
```
will output
```
<script src="https://gist-it.appspot.com/github/gaggle/hexo-gist-it/blob/master/README.md?slice=1:2"></script>
```
