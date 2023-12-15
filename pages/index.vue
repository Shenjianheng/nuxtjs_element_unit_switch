<template>
  <div class="container">
    <div class="header">
      <h1>{{ $t('header.h1_title') }}</h1>
    </div>
    <el-row type="flex" justify="center">
      <el-col :xs="20" :sm="16" :lg="16" :md="16" :xl="16">
        <el-row :gutter="0" class="select_language_box">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-select
              v-model="value"
              :placeholder="$t('select_box.select_placeholder')"
              @change="select_language"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :xs="20" :sm="16" :lg="16" :md="16" :xl="16">
        <el-row :gutter="20">
          <!-- px转换为vm的输入框 -->
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="vm_count">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <h2>{{ $t("vm_inputbox.h2_title") }}</h2>
              </div>
              <div class="vm_count_inputbox">
                <div class="input_box">
                  <span class="input_title">{{
                    $t("vm_inputbox.first_prompt")
                  }}</span>
                  <el-input
                    v-model="px_value1"
                    :placeholder="$t('vm_inputbox.first_placeholder')"
                  ></el-input>
                </div>
                <div class="input_box">
                  <span class="input_title">{{
                    $t("vm_inputbox.second_prompt")
                  }}</span>
                  <el-input
                    v-model="design_draft_value1"
                    :placeholder="$t('vm_inputbox.second_placeholder')"
                  ></el-input>
                </div>
                <div class="input_box">
                  <span class="input_title">{{
                    $t("vm_inputbox.third_prompt")
                  }}</span>
                  <el-input
                    v-model="result1"
                    :placeholder="$t('vm_inputbox.third_placeholder')"
                    disabled
                  ></el-input>
                </div>
                <el-divider></el-divider>
                <span class="explain">{{ $t("vm_inputbox.explain") }}</span>
              </div>
            </el-card>
          </el-col>
          <!-- px转换为rem的输入框 -->
          <el-col
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="12"
            class="rem_count"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <h2>{{ $t("rem_inputbox.h2_title") }}</h2>
              </div>
              <div class="rem_count_inputbox">
                <div class="input_box">
                  <span class="input_title">{{
                    $t("rem_inputbox.first_prompt")
                  }}</span>
                  <el-input
                    v-model="px_value2"
                    :placeholder="$t('rem_inputbox.first_placeholder')"
                  ></el-input>
                </div>
                <div class="input_box">
                  <span class="input_title">{{
                    $t("rem_inputbox.second_prompt")
                  }}</span>
                  <el-input
                    v-model="design_draft_value2"
                    :placeholder="$t('rem_inputbox.second_placeholder')"
                  ></el-input>
                </div>
                <div class="input_box">
                  <span class="input_title">{{
                    $t("rem_inputbox.third_prompt")
                  }}</span>
                  <el-input
                    v-model="result2"
                    :placeholder="$t('rem_inputbox.third_placeholder')"
                    disabled
                  ></el-input>
                </div>
                <el-divider></el-divider>
                <span class="explain">{{ $t("rem_inputbox.explain") }}</span
                ><code class="explain_code" @click="code_view"
                  >flexible.js</code
                >
                <el-divider v-if="showCode"></el-divider>
                <code v-if="showCode">
                  !function (window) { /* Design document width */ var docWidth
                  = 750; var doc = window.document, docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ?
                  'orientationchange' : 'resize'; var recalc = (function
                  refreshRem () { var clientWidth =
                  docEl.getBoundingClientRect().width; /* 8.55: No further
                  reduction below 320px, 11.2: No further amplification above
                  420px */ docEl.style.fontSize = Math.max(Math.min(20 *
                  (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px'; return
                  refreshRem; })(); /* Add double screen logo, Android is 1 */
                  docEl.setAttribute('data-dpr',
                  window.navigator.appVersion.match(/iphone/gi) ?
                  window.devicePixelRatio : 1); if
                  (/iP(hone|od|ad)/.test(window.navigator.userAgent)) { /* Add
                  IOS identifier */ doc.documentElement.classList.add('ios'); /*
                  Add hairline style to HTML for special processing above IOS 8
                  */ if (parseInt(window.navigator.appVersion.match(/OS
                  (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
                  doc.documentElement.classList.add('hairline'); } if
                  (!doc.addEventListener) return;
                  window.addEventListener(resizeEvt, recalc, false);
                  doc.addEventListener('DOMContentLoaded', recalc, false);
                  }(window);
                </code>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="reserved">
      <p>© 2023 Unit Conversion Tool Site. All rights reserved.</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      px_value1: "", // 计算vm的px值
      design_draft_value1: "750", // 计算vm时设计稿的宽度
      result1: "", // 计算出来的vm的值
      px_value2: "", // 计算rem的px值
      design_draft_value2: "750", // 计算rem时设计稿的宽度
      result2: "", // 计算出来的rem的值
      showCode: false,
      options: [
        {
          value: "en",
          label: "English",
        },
        {
          value: "mx",
          label: "Español",
        },
        {
          value: "ind",
          label: "हिंदीName",
        },
        {
          value: "de",
          label: "Deutsch",
        },
        {
          value: "zh",
          label: "中文（简体）",
        },
      ],
      value: "en",
    };
  },

  methods: {
    /**
     * 代码重现
     */
    code_view() {
      this.showCode = !this.showCode;
    },

    /**
     * 语言选择
     * @param {*} value
     */
    select_language(value) {
      this.$i18n.locale = value;
    },
  },

  watch: {
    /**
     * 动态监听px转换为vm值的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    px_value1(newValue, oldValue) {
      this.result1 =
        ((newValue / this.design_draft_value1) * 100)
          .toString()
          .match(/^\d+(?:\.\d{0,5})?/) + "vw";
    },

    /**
     * 动态监听转换为vw设计稿宽度的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    design_draft_value1(newValue, oldValue) {
      this.result1 =
        ((this.px_value1 / newValue) * 100)
          .toString()
          .match(/^\d+(?:\.\d{0,5})?/) + "vw";
    },

    /**
     * 动态监听转换出来的vm值的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    result1(newValue, oldValue) {
      if (this.px_value1 === "" || this.design_draft_value1 === "") {
        this.result1 = "";
      }
    },

    /**
     * 动态监听px转换为rem值的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    px_value2(newValue, oldValue) {
      this.result2 =
        (newValue / 100).toString().match(/^\d+(?:\.\d{0,5})?/) + "rem";
    },

    /**
     * 动态监听转换为rem设计稿宽度的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    design_draft_value2(newValue, oldValue) {
      this.result2 =
        (newValue / 100).toString().match(/^\d+(?:\.\d{0,5})?/) + "rem";
    },

    /**
     * 动态监听转换出来的rem值的变化
     * @param {*} newValue
     * @param {*} oldValue
     */
    result2(newValue, oldValue) {
      if (this.px_value2 === "" || this.design_draft_value2 === "") {
        this.result2 = "";
      }
    },
  },
};
</script>
  
<style lang="less" scoped>
.container {
  .header {
    h1 {
      background: #0a7edd;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
      color: #ffffff;
      font-family: "微软雅黑", "宋体", "黑体", Arial;
      font-size: 22px;
      font-weight: bold;
      height: 50px;
      line-height: 32px;
      margin-bottom: 30px;
      padding: 8px 0 5px 5px;
      text-shadow: 2px 2px 3px #222222;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .select_language_box {
    margin-bottom: 30px;
  }
  .vm_count {
    margin-bottom: 20px;
    .box-card {
      .vm_count_inputbox {
        .input_box {
          margin: 20px 0;
        }
        .explain {
          font-size: 16px;
          color: #2c449f;
        }
      }
    }
  }
  .rem_count {
    margin-bottom: 20px;
    .box-card {
      .rem_count_inputbox {
        .input_box {
          margin: 20px 0;
        }
        .explain {
          font-size: 16px;
          color: #2c449f;
        }
        .explain_code {
          background: #00c8fa;
          color: black;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
  .reserved {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 30px;
  }
}
</style>