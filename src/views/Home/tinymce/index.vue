<template>
  <div class="forms">
      <fromCtrol></fromCtrol>
      <tinymce-editor
        :disabled="disabled"
        @onClick="onClick"
        ref="editor"
        @send="getTinymce">
      </tinymce-editor>
  </div>
</template>

<script>
import TinymceEditor from '../../../../public/tinymce'
import fromCtrol from '@/components/formControl'
export default {
  components: {
    TinymceEditor,
    fromCtrol
  },
  data() {
    return {
      disabled: false,
      tinymce:''
    }
  },
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    getTinymce(data){
      this.tinymce = data
      console.log(this.tinymce)
    }
  }
}
</script>

<style scoped>
.forms{
  width: 94%;
  margin: 0 auto;
}
.forms>>>.el-form-item__label{
  text-align: center;
}
</style>
