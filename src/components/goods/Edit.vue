<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 提示区域 -->
      <el-alert title="编辑商品信息" type="info" center show-icon :closable="false"> </el-alert>
      <!-- 步骤条区域 -->
      <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- tab栏区域 -->
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="100px" label-position="top">
        <el-tabs v-model="activeIndex" :tab-position="'left'" :before-leave="beforeTabLeave" @tab-click="tabClicked">
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="editForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model="editForm.goods_price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model="editForm.goods_weight" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number" type="number">
              <el-input v-model="editForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
              <el-cascader v-model="editForm.goods_cat" :options="catelist" :props="cateProps" props.expandTrigger="hover" @change="handleChange"></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <!-- 渲染表单的Item项 -->
            <el-form-item :label="item.attr_name" v-for="item in manyTableData" :key="item.attr_id">
              <!-- 复选框组 -->
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox :label="cb" v-for="(cb, i) in item.attr_vals" :key="i" border></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">
            <el-form-item :label="item.attr_name" v-for="item in onlyTableData" :key="item.attr_id">
              <el-input v-model="item.attr_vals"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <!-- action 表示图片要上传的后台API地址 -->
            <el-upload :action="uploadURL" :on-preview="handlePreview" :file-list="imgList" :on-remove="handleRemove" list-type="picture" :headers="headerObj" :on-success="handleSuccess">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <!-- 富文本编辑器 -->
            <quill-editor v-model="editForm.goods_introduce"></quill-editor>
            <!-- 编辑商品的按钮 -->
            <el-button type="primary" class="btnEdit" @click="edit">编辑商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>

    <!-- 图片预览 -->
    <el-dialog title="图片预览" :visible.sync="previewVisible" width="50%">
      <img :src="previewPath" alt="" class="previewImg" />
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      activeIndex: '0',
      // 编辑商品的表单数据对象
      editForm: {
        goods_name: '',
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        // 商品所属的分类数组
        goods_cat: [],
        // 图片的数组
        pics: [],
        // 商品的详情描述
        goods_introduce: '',
        attrs: []
      },
      editFormRules: {
        goods_name: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        goods_price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
        goods_weight: [{ required: true, message: '请输入商品重量', trigger: 'blur' }],
        goods_number: [{ required: true, message: '请输入商品数量', trigger: 'blur' }],
        goods_cat: [{ required: true, message: '请选择商品分类', trigger: 'blur' }]
      },
      // 商品分类列表
      catelist: [],
      cateProps: {
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态属性列表数据
      onlyTableData: [],
      // 已上传图片列表
      imgList: [],
      // 待上传图片列表
      tmpImgList: [],
      // 上传图片的URL地址 调整为接口文档
      uploadURL: 'https://api.naccl.top/vue/shop/api/private/v1/upload',
      // 图片上传组件的headers请求头对象
      headerObj: {
        Authorization: window.sessionStorage.getItem('token')
      },
      previewPath: '',
      previewVisible: false
    }
  },
  created() {
    this.getCateList()
    this.getGoodsInfo()
  },
  methods: {
    // 获取商品信息
    async getGoodsInfo() {
      const { data: res } = await this.$http.get(`goods/${this.$route.params.id}`)

      if (res.meta.status !== 200) {
        return this.$message.error('获取商品信息失败')
      }

      this.editForm = res.data
      console.log(this.editForm);
      // split 得到的字符数组不能绑定到级联选择器，用map转数字数组  ['1','3','6'] => [1,3,6]
      this.editForm.goods_cat = this.editForm.goods_cat.split(',').map(Number)
      this.getAttrData()
      this.getImgList()
    },
    // 获取所有商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories')

      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }

      this.catelist = res.data
      // console.log(this.catelist)
    },
    // 处理商品参数数据
    getAttrData() {
      this.editForm.attrs.forEach(item => {
        if (item.attr_sel === 'many') {
          // 全部参数
          item.attr_vals = item.attr_vals ? item.attr_vals.split(',') : []
          // 已选参数
          item.attr_value = item.attr_value ? item.attr_value.split(',') : []
          this.manyTableData.push(item)
        } else if (item.attr_sel === 'only') {
          this.onlyTableData.push(item)
        }
      })
    },
    // 获取图片信息
    getImgList() {
      this.editForm.pics.forEach(item => {
        this.imgList.push({
          name: item.pics_id,
          url: item.pics_big_url,
          pic: item.pics_big
        })
      })
    },
    // 级联选择框选中项变化，会触发这个函数
    handleChange() {
      // console.log(this.editForm.goods_cat)
      if (this.editForm.goods_cat.length !== 3) {
        this.editForm.goods_cat = []
      }
    },
    beforeTabLeave(activeName, oldActiveName) {
      // console.log('即将离开的标签页名字是:' + oldActiveName)
      // console.log('即将进入的标签页名字是:' + activeName)
      // return false
      if (oldActiveName === '0' && this.editForm.goods_cat.length !== 3) {
        this.$message.error('请先选择商品分类!')
        return false
      }
    },
    async tabClicked() {
      // console.log(this.activeIndex)
      // 证明访问的是动态面板参数
      if (this.activeIndex === '1') {
        const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes`, {
          params: { sel: 'many' }
        })

        if (res.meta.status !== 200) {
          return this.$message.error('获取动态参数列表失败!')
        }

        // console.log(res.data)
        res.data.forEach(item => {
          item.attr_vals = item.attr_vals.length === 0 ? [] : item.attr_vals.split(' ')
        })
        this.manyTableData = res.data
      } else if (this.activeIndex === '2') {
        const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes`, {
          params: { sel: 'only' }
        })

        if (res.meta.status !== 200) {
          return this.$message.error('获取静态属性失败!')
        }

        console.log(res.data)
        this.onlyTableData = res.data
      }
    },
    // 处理图片预览效果
    handlePreview(file) {
      // console.log(file)
      this.previewPath = file.response.data.url
      this.previewVisible = true
    },
    // 处理移除图片的操作
    handleRemove(file) {
      // console.log(file)
      if (file.response) {
        // 1. 获取将要删除的图片的临时路径
        const filePath = file.response.data.tmp_path
        // 2. 从 pics 数组中，找到这个图片对应的索引值
        const i = this.tmpImgList.findIndex(x => x.pic === filePath)
        // 3. 调用数组的 splice 方法，把图片信息对象， 从 pics 数组中移除
        this.tmpImgList.splice(i, 1)
      } else {
        const filePath = file.pic
        const i = this.imgList.findIndex(x => x.pic === filePath)
        this.imgList.splice(i, 1)
      }
    },
    // 监听图片上传成功的事件
    handleSuccess(response) {
      // console.log(response)
      // 1. 拼接得到一个图片信息对象
      const picInfo = { pic: response.data.tmp_path }
      // 2. 将图片信息对象, push 到 pics 数组中
      this.editForm.pics.push(picInfo)
      // console.log(this.editForm)
    },
    // 编辑商品
    edit() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) {
          return this.$message.error('请填写必要的表单项目!')
        }
        // 执行编辑的业务逻辑
        const pics = []
        this.imgList.forEach(item => {
          pics.push({ pic: item.pic })
        })
        pics.push(...this.tmpImgList)
        const form = {
          goods_name: _.cloneDeep(this.editForm.goods_name),
          goods_price: this.editForm.goods_price,
          goods_number: this.editForm.goods_number,
          goods_weight: this.editForm.goods_weight,
          goods_introduce: _.cloneDeep(this.editForm.goods_introduce),
          pics: _.cloneDeep(pics),
          attrs: _.cloneDeep(this.editForm.attrs)
        }
        // 处理动态参数
        this.manyTableData.forEach(item => {
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(' ')
          }
          this.editForm.attrs.push(newInfo)
        })
        // 处理静态属性
        this.onlyTableData.forEach(item => {
          const newInfo = { attr_id: item.attr_id, attr_value: item.attr_vals }
          this.editForm.attrs.push(newInfo)
        })
        form.attrs = this.editForm.attrs
        // console.log(form)

        // 发起请求编辑商品
        // 商品的名称必须是唯一的
        // 尚未解决
        const { data: res } = await this.$http.put(`goods/${this.editForm.goods_id}`, form)
        // console.log(res)
        if (res.meta.status !== 200) {
          return this.$message.error('编辑商品失败!')
        }

        this.$message.success('编辑商品成功!')
        this.$router.push('/goods')
      })
    }
  },
  computed: {
    cateId() {
      if (this.editForm.goods_cat.length === 3) {
        return this.editForm.goods_cat[2]
      }
      return null
    }
  }
}
</script>

<style lang="less" scoped>
.el-checkbox {
  margin: 0 10px 0 0 !important;
}

.previewImg {
  width: 100%;
}

.btnEdit {
  margin-top: 15px;
}
</style>
