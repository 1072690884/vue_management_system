<template>
  <div class="login-mode-box">
    <swiper class="login-swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="login-swiper-slide swiper-no-swiping">
        <div class="login-input-view">
          <div class="title">登录</div>
          <el-input class="inputText" maxlength="30" v-model="loginData.name" placeholder="请输入用户名">
            <template slot="prepend">
              <i class="el-icon-font-jieban"></i>
            </template>
          </el-input>
          <el-input
            type="password"
            class="inputText"
            maxlength="20"
            v-model="loginData.password"
            style="margin-top: 15px;"
            placeholder="请输入密码"
          >
            <template slot="prepend">
              <i class="el-icon-font-anquanzhongxin"></i>
            </template>
          </el-input>

          <div class="btnsView">
            <div class="confirmBtn" @click="lodinFn">登录</div>

            <div class="registerBtn">无账号？去注册</div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="login-swiper-slide swiper-no-swiping">
        <div class="register-input-view">
          <div class="title">账户注册</div>

          <el-input class="inputText" v-model="registerData.name" placeholder="设置用户名">
            <template slot="prepend">
              <i class="el-icon-font-jieban"></i>
            </template>
          </el-input>

          <div class="nameText">用户名5-25个字符</div>

          <el-input
            type="password"
            class="inputText"
            v-model="registerData.password"
            style="margin-top: 15px;"
            placeholder="设置你的登录密码"
          >
            <template slot="prepend">
              <i class="el-icon-font-anquanzhongxin"></i>
            </template>
          </el-input>

          <div class="nameText">密码6-20个字符，只包含字母、数字、标点符号(不包含空格)</div>

          <el-input
            type="password"
            class="inputText"
            v-model="registerData.npassword"
            style="margin-top: 15px;"
            placeholder="请再次输入你的密码"
          >
            <template slot="prepend">
              <i class="el-icon-font-anquanzhongxin"></i>
            </template>
          </el-input>
          <div class="btnsView">
            <div class="confirmBtn" @click="registerFn">立即注册</div>

            <div class="loginBtn">已有账号，去登录</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { setAxios } from "@/axios/config";
export default {
  data() {
    return {
      loginData: {
        name: "",
        password: ""
      },
      registerData: {
        name: "",
        password: "",
        npassword: ""
      },
      swiperOption: {
        direction: "vertical",
        noSwiping: true,

        navigation: {
          nextEl: ".registerBtn",
          prevEl: ".loginBtn"
        }
      }
    };
  },
  methods: {
    lodinFn() {
      var that = this;
      if (this.loginData.name != "" && this.loginData.password != "") {
        let loadingInstance = this.$loading({
          lock: true,
          text: "登陆中",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });

        localStorage.setItem("ms_username", that.loginData.name);

              that.$message({
                message: "登陆成功",
                type: "success",
                center: true
              });

              that.$router.push({ path: "/" });
              loadingInstance.close();
      //   setAxios("/api/login", "post", {
      //     username: this.loginData.name,
      //     password: this.loginData.password
      //   })
      //     .then(function(res) {
      //       // console.log(that, this);
      //       loadingInstance.close();

      //       if (res.data.code == "200") {
      //         localStorage.setItem("ms_username", that.loginData.name);

      //         that.$message({
      //           message: "登陆成功",
      //           type: "success",
      //           center: true
      //         });

      //         that.$router.push({ path: "/" });
      //         return;
      //       } else {
      //         that.$message({
      //           message: res.data.message,
      //           type: "warning"
      //         });
      //       }
      //     })
      //     .catch(function(err) {
      //       loadingInstance.close();
      //       that.$message({
      //         message: err,
      //         type: "warning"
      //       });
      //     });
      // } else {
      //   this.$message({
      //     message: "用户名与密码不能为空",
      //     type: "warning"
      //   });
      }
    },
    registerFn() {
      if (
        this.registerData.name != "" &&
        this.registerData.password != "" &&
        this.registerData.npassword != ""
      ) {
        if (
          this.registerData.name.length < 5 ||
          this.registerData.name.length > 25
        ) {
          this.$message({
            message: "用户名格式有误",
            type: "warning"
          });
          return;
        }

        if (!/^[\w_-]{6,16}$/.test(this.registerData.password)) {
          this.$message({
            message: "密码格式有误",
            type: "warning"
          });
          return;
        }

        if (this.registerData.password != this.registerData.npassword) {
          this.$message({
            message: "两次密码不一致",
            type: "warning"
          });
          return;
        }

        let loadingInstance = this.$loading({
          lock: true,
          text: "注册中",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        var that = this;
        setAxios("/api/register", "post", {
          username: this.registerData.name,
          password: this.registerData.password
        }).then(function(res) {
          loadingInstance.close();

          if (res.data.code == "200") {
            that.loginData.name = that.registerData.name;
            that.loginData.password = that.registerData.password;
            that.lodinFn();

            that.$message({
              message: "注册成功",
              type: "success",
              center: true
            });
          } else {
            that.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        });
      } else {
        this.$message({
          message: "用户名与密码，重复密码都不能为空",
          type: "warning"
        });
      }
    },
    nameBlur(e) {
      console.log(this.loginData.name);
    }
  },
  created() {}
};
</script>




<style lang="scss">
.login-mode-box {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/img/316911.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
}
.login-input-view {
  position: absolute;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px 17px 27px;
  background: #696969;
  border-radius: 30px;
  top: 80px;
  right: 10%;
  border: 15px solid #dbdbdb;
  box-shadow: -8px -1px 20px 0px rgba(0, 0, 0, 0.6), inset 0 0 17px 0px #000;
}
.title {
  margin-bottom: 15px;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}
.login-input-view i,
.register-input-view i {
  font-size: 24px;
}
.el-input--small .el-input__inner {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border: 1px solid #dcdfe6;
}
.registerBtn,
.loginBtn {
  cursor: pointer;
  color: #dedede;
  //   position: absolute;
  //   bottom: -88px;
  //   right: -73px;
  margin-top: 15px;
  padding: 0 20px;
  height: 40px;
  line-height: 33px;
  text-align: center;
  background: #000000;
  border: 4px solid #616161;
  border-radius: 10px;
  font-size: 14px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6),
    inset 0 0 8px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6),
    inset 0 0 8px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  outline: none;
}

.registerBtn:hover,
.loginBtn:hover {
  transform: scale(1.2);
}
.btnsView {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.login-swiper {
  width: 100%;
  height: 100%;
}
.confirmBtn {
  cursor: pointer;
  margin-top: 15px;
  width: 100px;
  height: 40px;
  background: #000000;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #000;
  transition: all 0.3s;
}
.confirmBtn:hover {
  background: #dddddd;
  color: #000;
}
.nameText {
  width: 100%;
  margin-top: 15px;
  line-height: 1.5;
  color: #dbdbdb;
  text-align: justify;
}

.register-input-view {
  position: absolute;
  top: 80px;
  left: 7%;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px 17px 27px;
  background: #696969;
  border-radius: 30px;
  border: 15px solid #dbdbdb;
  box-shadow: -8px -1px 20px 0px rgba(0, 0, 0, 0.6), inset 0 0 17px 0px #000;
}
</style>

