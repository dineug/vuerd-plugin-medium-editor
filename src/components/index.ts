import MediumEditor from "./MediumEditor.vue";
import { Command, Editor } from "vuerd-core";
import { Option } from "@/types";

export default {
  install(command: Command, option?: Option) {
    const editor: Editor = {
      name: "medium-editor",
      component: MediumEditor,
      scope: ["rich"],
      option: {
        readme: {
          owner: "vuerd",
          repo: "vuerd-plugin-medium-editor"
        }
      }
    };
    if (option) {
      if (option.scope !== undefined) {
        editor.scope = option.scope;
      }
      if (option.exclude !== undefined) {
        editor.exclude = option.exclude;
      }
      if (typeof option.imageUpload === "function") {
        MediumEditor.prototype.imageUpload = option.imageUpload;
      }
      if (option.editorOption) {
        MediumEditor.prototype.option = option.editorOption;
      }
    }
    command.editorAdd(editor);
  }
};
