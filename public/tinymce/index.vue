<template>
  <div class='tinymce'>
    <editor id='tinymce' v-model='tinymceHtml' @input="sendTinymce" :init='init'></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/save'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/textcolor'
import 'tinymce/skins/ui/oxide/skin.min.css'//解决引入之后不显示富文本
export default {
  name: 'tinymce',
  data () {
    return {
      tinymceHtml: '',
      init: {
        language_url: './tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        height: 450,
        plugins: 'link lists image code table  wordcount fullscreen',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat |fullscreen',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor},
  methods:{
    sendTinymce(){
        this.$emit('send',this.tinymceHtml)
    }
  }
}
</script>