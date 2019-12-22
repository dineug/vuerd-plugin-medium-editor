<template>
  <div class="vuerd-plugin-medium-editor" ref="editor"></div>
</template>

<script lang="ts">
import "medium-editor/dist/css/medium-editor.min.css";
import "medium-editor/dist/css/themes/default.min.css";
import "medium-editor-tables/dist/css/medium-editor-tables.min.css";
import Medium from "medium-editor";
// @ts-ignore
import MediumEditorTable from "medium-editor-tables";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "MediumEditor"
})
export default class MediumEditor extends Vue {
  @Prop({ type: String, default: "" })
  private value!: string;

  private currentValue: string = "";
  private medium!: Medium.MediumEditor;
  private option = {
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "anchor",
        "h2",
        "h3",
        "quote",
        "table"
      ],
      diffLeft: 0,
      diffTop: -10,
      firstButtonClass: "medium-editor-button-first",
      lastButtonClass: "medium-editor-button-last",
      relativeContainer: null,
      standardizeSelectionStart: false,
      static: false,
      align: "center",
      sticky: false,
      updateOnEmptySelection: false
    },
    autoLink: true,
    imageDragging: true,
    placeholder: false,
    extensions: {
      table: new MediumEditorTable()
    }
  };

  @Watch("value")
  private watchValue(value: string) {
    if (this.currentValue !== value) {
      const editor = this.$refs.editor as HTMLElement;
      this.currentValue = value;
      editor.innerHTML = value;
    }
  }

  private onInput(event: Event, editable: HTMLElement) {
    this.currentValue = editable.innerHTML;
    this.$emit("input", editable.innerHTML);
  }

  private mounted() {
    const editor = this.$refs.editor as HTMLElement;
    this.medium = new Medium(editor, this.option as any);
    this.medium.subscribe("editableInput", this.onInput);
  }

  private destroyed() {
    this.medium.unsubscribe("editableInput", this.onInput);
    this.medium.destroy();
  }
}
</script>

<style scoped>
.vuerd-plugin-medium-editor {
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
