<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog"
            >添加分类</el-button
          >
        </el-col>
      </el-row>

      <!-- 分类表格
        :data(设置数据源) :columns(设置表格中列配置信息) :selection-type(是否有复选框)
        :expand-type(是否展开数据) show-index(是否设置索引列) index-text(设置索引列头)
        border(是否添加纵向边框) :show-row-hover(是否鼠标悬停高亮) -->
      <tree-table
        :data="cateList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
      >
        <!-- 是否有效区域， 设置对应的模板列： slot="isok"(与columns中设置的template一致) -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color:lightgreen"
          ></i>
          <i class="el-icon-error" v-else style="color:red"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag
            size="mini"
            type="success"
            v-else-if="scope.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag size="mini" type="warning" v-else>三级</el-tag>
        </template>

        <!-- 操作 -->
        <template slot="opt" slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="showEditCateDialog(scope.row.cat_id)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="removeCateById(scope.row.cat_id)"
            >删除</el-button
          >
        </template>
      </tree-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="querInfo.pagenum"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="querInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加分类对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="50%"
      @close="addCateDialogClosed"
    >
      <!-- 添加分类表单 -->
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="100px"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="cat_pid">
          <!-- expandTrigger='hover'(鼠标悬停触发级联) v-model(设置级联菜单绑定数据) :options(指定级联菜单数据源)  :props(用来配置数据显示的规则)
  clearable(提供“X”号完成删除文本功能) change-on-select(是否可以选中任意一级的菜单) -->
          <el-cascader
            props.expandTrigger="hover"
            v-model="selectedKeys"
            :options="parentCateList"
            :props="cascaderProps"
            @change="parentCateChange"
            clearable
            props.checkStrictly="true"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑分类的对话框 -->
    <el-dialog
      title="编辑分类"
      :visible.sync="editCateDialogVisible"
      width="50%"
      @close="editCateDialogClosed"
    >
      <!-- 编辑分类的表单 -->
      <el-form
        :model="editCateForm"
        :rules="editCateFormRules"
        ref="editCateFormRef"
        label-width="100px"
      >
        <el-form-item label="分类名称：" prop="cat_name">
          <el-input v-model="editCateForm.cat_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      // 商品分类的数据列表，默认为空
      cateList: [],
      // 总数据条数
      total: 0,
      // 为table指定列的定义
      columns: [
        { label: '分类名称', prop: 'cat_name' },
        // type:'template'(将该列设置为模板列)，template:'isok'(设置该列模板的名称为isok)
        { label: '是否有效', type: 'template', template: 'isok' },
        { label: '排序', type: 'template', template: 'order' },
        { label: '操作', type: 'template', template: 'opt' }
      ],
      // 用来显示或隐藏添加分类对话框
      addCateDialogVisible: false,
      // 添加分类的表单数据对象
      addCateForm: {
        // 分类名称
        cat_name: '',
        // 添加分类的父级id，0则表示父级为0.添加一级分类
        cat_pid: 0,
        // 添加分类的等级，0则表示添加一级分类
        cat_level: 0
      },
      // 添加分类校验规则
      addCateFormRules: {
        // 验证规则
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      // 保存1,2级父级分类的列表
      parentCateList: [],
      // 配置级联菜单中数据如何展示
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children',
        expandTrigger: 'hover'
      },
      // 绑定用户选择的分类值
      selectedKeys: [],
      // 控制添加分类对话框的显示与隐藏
      editCateDialogVisible: false,
      // 添加分类的表单数据对象
      editCateForm: {
        // 将要修改的分类id
        cat_id: 0,
        // 将要修改的分类名称
        cat_name: '',
        // 父级分类的Id
        cat_pid: 0,
        // 分类的等级，默认要修改的是1级分类
        cat_level: 0
      },
      // 添加分类表单的验证规则对象
      editCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    // 获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.querInfo
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败!')
      }

      //   console.log(res.data)
      // 把数据列表，赋值给 cateList
      this.cateList = res.data.result
      // 为总数据条数赋值
      this.total = res.data.total
    },
    // 当pagesize发生改变时触发
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 当pagenum发生改变时触发
    handleCurrentChange(newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },
    // 点击按钮，展示添加分类的对话框
    showAddCateDialog() {
      // 调用getParentCateList获取分类列表
      this.getParentCateList()
      // 显示添加分类对话框
      this.addCateDialogVisible = true
    },
    // 获取父级分类的数据列表
    async getParentCateList() {
      // 获取父级分类数据列表
      const { data: res } = await this.$http.get('categories', {
        params: { type: 2 }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类列表数据失败！')
      }
      this.parentCateList = res.data
    },
    // 选择项发生变化触发这个函数
    parentCateChange() {
      // console.log(this.selectedKeys)
      // 如果 selectedKeys 数组中的 length 大于0， 证明选中的父级分类
      // 反之，就说明没有选中任何父级分类
      if (this.selectedKeys.length > 0) {
        this.addCateForm.cat_pid = this.selectedKeys[
          this.selectedKeys.length - 1
        ]
        // 为当前分类的等级赋值
        this.addCateForm.cat_level = this.selectedKeys.length
        return null
      } else {
        // 父级分类的Id
        this.addCateForm.cat_pid = 0
        // 为当前分类的等级赋值
        this.addCateForm.cat_level = 0
      }
    },
    // 点击按钮，添加新的分类
    addCate() {
      // console.log(this.addCateForm)
      this.$refs.addCateFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post(
          'categories',
          this.addCateForm
        )

        if (res.meta.status !== 201) {
          return this.$message.error('添加分类失败!')
        }

        this.$message.success('添加分类成功!')
        this.getCateList()
        this.addCateDialogVisible = false
      })
    },
    // 监听对话框的关闭事件，重置表单数据
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields()
      this.selectedKeys = []
      this.addCateForm.cat_level = 0
      this.addCateForm.cat_pid = 0
    },
    // 根据Id删除对应的用户信息
    async removeCateById(catId) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        '此操作将永久删除该商品, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)

      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消了删除，则返回值为字符串 cancel
      // console.log(confirmResult)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }

      const { data: res } = await this.$http.delete('categories/' + catId)

      if (res.meta.status !== 200) {
        return this.$message.error('删除商品失败！')
      }

      this.$message.success('删除商品成功！')
      this.getCateList()
    },
    // 展示编辑商品的对话框
    async showEditCateDialog(id) {
      // 先获取父级分类的数据列表
      this.getParentCateList()
      // console.log(id)
      const { data: res } = await this.$http.get('categories/' + id)

      if (res.meta.status !== 200) {
        return this.$message.error('查询商品信息失败！')
      }

      this.editCateForm = res.data
      this.editCateDialogVisible = true
    },
    // 点击按钮，编辑分类
    editCate() {
      this.$refs.editCateFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.put(
          'categories/' + this.editCateForm.cat_id,
          this.editCateForm
        )

        if (res.meta.status !== 200) {
          return this.$message.error('编辑分类失败!')
        }

        this.$message.success('编辑分类成功!')
        this.getCateList()
        this.editCateDialogVisible = false
      })
    },
    // 监听对话框的关闭事件，重置表单数据
    editCateDialogClosed() {
      this.$refs.editCateFormRef.resetFields()
      this.selectedKeys = []
      this.editCateForm.cat_level = 0
      this.editCateForm.cat_pid = 0
    }
  }
}
</script>

<style lang="less" scoped>
.zk-table {
  margin-top: 15px;
}

.el-cascader {
  width: 100%;
}
</style>
