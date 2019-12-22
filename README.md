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
<VuerdCore/>
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
