# vuerd-plugin-medium-editor

> [vuerd-core](https://github.com/vuerd/vuerd-core) plugin [medium-editor](https://github.com/yabwe/medium-editor)

[![npm version](https://img.shields.io/npm/v/vuerd-plugin-medium-editor.svg)](https://www.npmjs.com/package/vuerd-plugin-medium-editor) [![Build Status](https://travis-ci.com/vuerd/vuerd-plugin-medium-editor.svg?branch=master)](https://travis-ci.com/vuerd/vuerd-plugin-medium-editor)

## Document
[Storybook](https://vuerd.github.io/vuerd-docs/)   
[Live Demo](https://vuerd.github.io/vuerd-docs/iframe.html?id=demo-live--vuerd-core)

## Install
```bash
$ yarn add vuerd-core
$ yarn add vuerd-plugin-medium-editor
or
$ npm install vuerd-core
$ npm install vuerd-plugin-medium-editor
```
## Usage
```js
// main.js or main.ts
import Vue from 'vue';
import VuerdCore from 'vuerd-core';
import MediumEditor from 'vuerd-plugin-medium-editor';
import 'vuerd-core/dist/vuerd-core.css';
import 'vuerd-plugin-medium-editor/dist/vuerd-plugin-medium-editor.css';

VuerdCore.use(
  MediumEditor,
/*
  {
    imageUpload(file, callback) {
      // upload
      callback("URL");
    }
  }
*/
);

Vue.use(VuerdCore);
```
```html
<vuerd-core />
```
## CDN Quick Start
```html
<!DOCTYPE html>
<html>
<head>
  <title>vuerd-core demo</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vuerd-core/dist/vuerd-core.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vuerd-plugin-medium-editor/dist/vuerd-plugin-medium-editor.css">
</head>
<body>
  <div id="app">
    <vuerd-core />
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuerd-core/dist/vuerd-core.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuerd-plugin-medium-editor/dist/vuerd-plugin-medium-editor.umd.min.js"></script>
  <script>
    const VuerdCore = window['vuerd-core'].default
    const MediumEditor = window['vuerd-plugin-medium-editor'].default
    VuerdCore.use(MediumEditor)
    Vue.use(VuerdCore)
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```
## Option interface
```typescript
export interface Option {
  imageUpload?: (file: File, callback: (url: string) => void) => void;
  scope?: string[] | RegExp[];
  exclude?: string[] | RegExp[];
}
```
## Option
| Name | Type | Default | Describe |
| --- | --- | --- | --- |
| imageUpload | function | base64 | image upload |
| scope | [String \| RegExp] | ["rich"] | file designation(string extension) |
| exclude | [String \| RegExp] |  | exception file designation(string extension) |

## License
[MIT](https://github.com/vuerd/vuerd-plugin-medium-editor/blob/master/LICENSE)
