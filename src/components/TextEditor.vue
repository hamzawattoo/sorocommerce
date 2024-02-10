<template>
      <ckeditor :editor="editor" v-model="editorData" @ready="onReady" @input="onChange"></ckeditor>
  </template>
  <script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import CKEditor from "@ckeditor/ckeditor5-vue"
  
    export default {
      name: 'app',
      components: {
        ckeditor: CKEditor.component
      },
      data() {
        return {
          editor: ClassicEditor,
          editorData: "<p>Hello from CKEditor 5!</p>"
        };
      },
      methods: {
        onReady( editor ) {
          console.log( "CKEditor5 Vue Component is ready to use!", editor );
        },
        onChange( data ) {
          console.log( data );
        }
      }
    }
  </script>
  