<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 94%;margin:0 auto;">
    <el-table-column
      label="注册时间"
      prop="date"
      align="center"
      >
    </el-table-column>
    <el-table-column
      label="用户名"
      prop="uname"
      align="center">
    </el-table-column>
    <el-table-column
      label="密码"
      prop="upwd"
      align="center">
    </el-table-column>
    <el-table-column
      align="center">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          uname: '王小虎',
          upwd: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          uname: '王小虎',
          upwd: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          uname: '王小虎',
          upwd: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          uname: '王小虎',
          upwd: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
<style scoped>
    
</style>