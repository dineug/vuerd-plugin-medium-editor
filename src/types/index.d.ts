import { Command } from "vuerd-core";

export interface Option {
  imageUpload?: (file: File, callback: (url: string) => void) => void;
  scope?: string[] | RegExp[];
  exclude?: string[] | RegExp[];
  editorOption?: EditorOption;
}

export interface EditorOption {
  delay?: number; // 0
  disableReturn?: boolean; // false
  disableDoubleReturn?: boolean; // false
  disableExtraSpaces?: boolean; // false
  disableEditing?: boolean; // false
  spellcheck?: boolean; // true
  targetBlank?: boolean; // false
  toolbar?: Toolbar | boolean;
  anchorPreview?: AnchorPreview | boolean;
  placeholder?: Placeholder | boolean;
  anchor?: Anchor;
  paste?: Paste;
  keyboardCommands?: { commands: Command[] } | boolean;
  autoLink?: boolean; // true
}

export interface Toolbar {
  allowMultiParagraphSelection?: boolean; // true
  buttons?: Buttons[] | any;
  diffLeft?: number; // 0
  diffTop?: number; // -10
  firstButtonClass?: string; // 'medium-editor-button-first'
  lastButtonClass?: string; // 'medium-editor-button-last'
  relativeContainer?: HTMLElement | null; // null
  standardizeSelectionStart?: boolean; // false
  static?: boolean; // false
  align?: Align; // 'center'
  sticky?: boolean; // false
  updateOnEmptySelection?: boolean; // false
}

export interface AnchorPreview {
  hideDelay?: number; // 500
  previewValueSelector?: string; // 'a'
  showWhenToolbarIsVisible?: boolean; // false
  showOnEmptyLinks?: boolean; // true
}

export interface Placeholder {
  text?: string; // 'Type your text'
  hideOnClick: boolean; // true
}

export interface Anchor {
  customClassOption?: string | null; // null
  customClassOptionText?: string; // 'Button'
  linkValidation?: boolean; // false
  placeholderText?: string; // 'Paste or type a link'
  targetCheckbox?: boolean; // false
  targetCheckboxText?: string; // 'Open in new window'
}

export interface Paste {
  forcePlainText?: boolean; // true
  cleanPastedHTML?: boolean; // false
  preCleanReplacements?: any;
  cleanReplacements?: any;
  cleanAttrs?: string[]; // ['class', 'style', 'dir']
  cleanTags?: string[]; // ['meta']
  unwrapTags?: string[]; // []
}

export interface Command {
  command: string;
  key: string;
  meta: boolean;
  shift: boolean;
  alt: boolean;
}

export type Buttons =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "subscript"
  | "superscript"
  | "anchor"
  | "image"
  | "quote"
  | "pre"
  | "orderedlist"
  | "unorderedlist"
  | "indent"
  | "outdent"
  | "justifyLeft"
  | "justifyCenter"
  | "justifyRight"
  | "justifyFull"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "removeFormat"
  | "html"
  | "table";

export type Align = "left" | "center" | "right";

export declare function install(command: Command, option?: Option): void;
declare const _default: {
  install: typeof install;
};

export default _default;
