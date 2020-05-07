<template>
    <div id="form">
        <el-form ref="form" :model="form" label-width="80px">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="文章标题">
                        <el-input v-model="form.name" placeholder="必填项"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="发布时间">
                        <el-col :span="10">
                            <el-date-picker 
                                type="date" 
                                placeholder="选择日期" 
                                v-model="sizeForm.date1"
                                value-format="timestamp" 
                                style="width: 100%"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="10">
                            <el-time-picker 
                                placeholder="选择时间" 
                                v-model="sizeForm.date2"
                                style="width: 100%;">
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="文章分类">
                        <el-cascader
                            :options="options"
                            :props="{ expandTrigger: 'hover' }"
                            @change="handleChange">
                        </el-cascader>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="简介">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 1.1, maxRows: 2}"
                            placeholder="必填项"
                            v-model="form.textarea">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3" :offset="4">
                      <el-button type="primary" @click="commit">发表文章</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {options} from '../../api/cascader';//引入二级菜单
export default {
    data(){
        return{
            form: {
                name: '',//文章标题
                order: '',//文章分类选项
                author:'杨',//作者默认为杨
                textarea:''
            },
            sizeForm:{
                date1:'',
                date2:''
            },
            options:options,           
        }
    },
    methods:{
        handleChange(value) {
        console.log(value[1]);
        this.form.order = value[1]
      },
      //提交按钮验证
        commit(){
            if(!this.form.name){
                 this.$message({
                 showClose: true,
                 message: '文章标题不能为空',
                 type: 'warning'
                });
                return;
            };
            if(!this.sizeForm.date1 || !this.sizeForm.date2){
                 this.$message({
                 showClose: true,
                 message: '请选择发布时间',
                 type: 'warning'
                });          
                return;
            };
            if(!this.form.order){
                 this.$message({
                 showClose: true,
                 message: '请选择文章分类',
                 type: 'warning'
                });
                return;
            };
            if(!this.form.textarea){
                 this.$message({
                 showClose: true,
                 message: '简介不能为空',
                 type: 'warning'
                });
                return;
            }
            console.log(this.form,this.sizeForm)          
        },
    },
    mounted(){

    }
}
</script>
<style scoped>

</style>