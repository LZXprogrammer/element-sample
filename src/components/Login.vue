<template>

  <el-container>
    <el-header>A flowered world, a bodhi</el-header>
    <el-main>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-row type="flex" justify="center">
            <el-col>
              <el-card>
                <el-form-item label="UserName" prop="username">
                  <el-input v-model="ruleForm.username" status-icon="true"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                  <el-input v-model="ruleForm.email" status-icon="true"></el-input>
                </el-form-item>
                <el-form-item label="PassWord" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" status-icon="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-card>
            </el-col>
          </el-row>
        </el-form>
    </el-main>
    <el-footer>一花一世界，一叶一菩提</el-footer>
  </el-container>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        username: '',
        email: '',
        pass: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入email', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    width: 480px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .box-card {
    width: 500px;
  }

</style>
