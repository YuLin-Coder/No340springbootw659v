<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row >
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学校名称" prop="xuexiaomingcheng">
          <el-input v-model="ruleForm.xuexiaomingcheng" 
              placeholder="学校名称" clearable  :readonly="ro.xuexiaomingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学校名称" prop="xuexiaomingcheng">
              <el-input v-model="ruleForm.xuexiaomingcheng" 
                placeholder="学校名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="申请编号" prop="shenqingbianhao">
            <el-input v-model="ruleForm.shenqingbianhao" 
                placeholder="申请编号" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shenqingbianhao" label="申请编号" prop="shenqingbianhao">
              <el-input v-model="ruleForm.shenqingbianhao" 
                placeholder="申请编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="贷款名称" prop="daikuanmingcheng">
          <el-input v-model="ruleForm.daikuanmingcheng" 
              placeholder="贷款名称" clearable  :readonly="ro.daikuanmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="贷款名称" prop="daikuanmingcheng">
              <el-input v-model="ruleForm.daikuanmingcheng" 
                placeholder="贷款名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="银行名称" prop="yinxingmingcheng">
          <el-input v-model="ruleForm.yinxingmingcheng" 
              placeholder="银行名称" clearable  :readonly="ro.yinxingmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="银行名称" prop="yinxingmingcheng">
              <el-input v-model="ruleForm.yinxingmingcheng" 
                placeholder="银行名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="贷款金额" prop="daikuanjine">
          <el-input v-model="ruleForm.daikuanjine" 
              placeholder="贷款金额" clearable  :readonly="ro.daikuanjine"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="贷款金额" prop="daikuanjine">
              <el-input v-model="ruleForm.daikuanjine" 
                placeholder="贷款金额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="还款方式" prop="haikuanfangshi">
          <el-input v-model="ruleForm.haikuanfangshi" 
              placeholder="还款方式" clearable  :readonly="ro.haikuanfangshi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="还款方式" prop="haikuanfangshi">
              <el-input v-model="ruleForm.haikuanfangshi" 
                placeholder="还款方式" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="贷款时长" prop="daikuanshizhang">
          <el-select :disabled="ro.daikuanshizhang" v-model="ruleForm.daikuanshizhang" placeholder="请选择贷款时长">
            <el-option
                v-for="(item,index) in daikuanshizhangOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="贷款时长" prop="daikuanshizhang">
	      <el-input v-model="ruleForm.daikuanshizhang"
                placeholder="贷款时长" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="年利率" prop="nianlilv">
          <el-input v-model="ruleForm.nianlilv" 
              placeholder="年利率" clearable  :readonly="ro.nianlilv"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="年利率" prop="nianlilv">
              <el-input v-model="ruleForm.nianlilv" 
                placeholder="年利率" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info'&& !ro.shenqingziliao" label="申请资料" prop="shenqingziliao">
          <file-upload
          tip="点击上传申请资料"
          action="file/upload"
          :limit="1"
          :multiple="true"
          :fileUrls="ruleForm.shenqingziliao?ruleForm.shenqingziliao:''"
          @change="shenqingziliaoUploadChange"
          ></file-upload>
        </el-form-item>  
        <div v-else>
          <el-form-item v-if="ruleForm.shenqingziliao" label="申请资料" prop="shenqingziliao">
            <el-button type="text" size="small" @click="download($base.url+ruleForm.shenqingziliao)">下载</el-button>
          </el-form-item>
        </div>    
      </el-col>      
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="申请时间" prop="shenqingshijian">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.shenqingshijian" 
                type="datetime"
                :readonly="ro.shenqingshijian"
                placeholder="申请时间">
            </el-date-picker>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shenqingshijian" label="申请时间" prop="shenqingshijian">
              <el-input v-model="ruleForm.shenqingshijian" 
                placeholder="申请时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学号" prop="xuehao">
          <el-input v-model="ruleForm.xuehao" 
              placeholder="学号" clearable  :readonly="ro.xuehao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学号" prop="xuehao">
              <el-input v-model="ruleForm.xuehao" 
                placeholder="学号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="姓名" prop="xingming">
          <el-input v-model="ruleForm.xingming" 
              placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="姓名" prop="xingming">
              <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="状态" prop="zhuangtai">
          <el-select :disabled="ro.zhuangtai" v-model="ruleForm.zhuangtai" placeholder="请选择状态">
            <el-option
                v-for="(item,index) in zhuangtaiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="状态" prop="zhuangtai">
	      <el-input v-model="ruleForm.zhuangtai"
                placeholder="状态" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(98, 190, 84, 1)","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"4px","uploadLableFontSize":"14px","textareaBorderWidth":"5px 2px","inputLableColor":"#606266","addEditBoxColor":"#fff","dateIconFontSize":"14px","btnSaveBgColor":"rgba(98, 190, 84, 1)","uploadIconFontColor":"rgba(98, 190, 84, 1)","textareaBorderColor":"rgba(98, 190, 84, 1)","btnCancelBgColor":"rgba(255, 255, 255, 1)","btnSaveBorderStyle":"solid","dateBorderWidth":"5px 2px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"rgba(98, 190, 84, 1)","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"rgba(98, 190, 84, 1)","dateBorderColor":"rgba(98, 190, 84, 1)","dateIconFontColor":"rgba(98, 190, 84, 1)","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"5px 2px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"4px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(98, 190, 84, 1)","inputBorderColor":"rgba(98, 190, 84, 1)","uploadBorderColor":"rgba(98, 190, 84, 1)","textareaFontColor":"#606266","selectBorderWidth":"5px 2px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"5px 2px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"#606266","btnSaveBorderColor":"rgba(98, 190, 84, 1)","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	xuexiaomingcheng : false,
	shenqingbianhao : false,
	daikuanmingcheng : false,
	yinxingmingcheng : false,
	daikuanjine : false,
	haikuanfangshi : false,
	daikuanshizhang : false,
	nianlilv : false,
	shenqingziliao : false,
	shenqingshijian : false,
	xuehao : false,
	xingming : false,
	zhuangtai : false,
	sfsh : false,
	shhf : false,
      },
      ruleForm: {
        xuexiaomingcheng: '',
        shenqingbianhao: this.getUUID(),
        daikuanmingcheng: '',
        yinxingmingcheng: '',
        daikuanjine: '',
        haikuanfangshi: '',
        daikuanshizhang: '',
        nianlilv: '',
        shenqingziliao: '',
        shenqingshijian: '',
        xuehao: '',
        xingming: '',
       zhuangtai: '学校审核',
        shhf: '',
      },
          daikuanshizhangOptions: [],
          zhuangtaiOptions: [],
      rules: {
          xuexiaomingcheng: [
          ],
          shenqingbianhao: [
          ],
          daikuanmingcheng: [
          ],
          yinxingmingcheng: [
          ],
          daikuanjine: [
          ],
          haikuanfangshi: [
          ],
          daikuanshizhang: [
          ],
          nianlilv: [
          ],
          shenqingziliao: [
          ],
          shenqingshijian: [
          ],
          xuehao: [
          ],
          xingming: [
          ],
          zhuangtai: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {



  },
  created() {
	this.ruleForm.shenqingshijian = this.getCurDateTime()

	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='logistics'){
        this.logistics=false;
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='xuexiaomingcheng'){
            this.ruleForm.xuexiaomingcheng = obj[o];
	    this.ro.xuexiaomingcheng = true;
            continue;
          }
          if(o=='shenqingbianhao'){
            this.ruleForm.shenqingbianhao = obj[o];
	    this.ro.shenqingbianhao = true;
            continue;
          }
          if(o=='daikuanmingcheng'){
            this.ruleForm.daikuanmingcheng = obj[o];
	    this.ro.daikuanmingcheng = true;
            continue;
          }
          if(o=='yinxingmingcheng'){
            this.ruleForm.yinxingmingcheng = obj[o];
	    this.ro.yinxingmingcheng = true;
            continue;
          }
          if(o=='daikuanjine'){
            this.ruleForm.daikuanjine = obj[o];
	    this.ro.daikuanjine = true;
            continue;
          }
          if(o=='haikuanfangshi'){
            this.ruleForm.haikuanfangshi = obj[o];
	    this.ro.haikuanfangshi = true;
            continue;
          }
          if(o=='daikuanshizhang'){
            this.ruleForm.daikuanshizhang = obj[o];
	    this.ro.daikuanshizhang = true;
            continue;
          }
          if(o=='nianlilv'){
            this.ruleForm.nianlilv = obj[o];
	    this.ro.nianlilv = true;
            continue;
          }
          if(o=='shenqingziliao'){
            this.ruleForm.shenqingziliao = obj[o];
	    this.ro.shenqingziliao = true;
            continue;
          }
          if(o=='shenqingshijian'){
            this.ruleForm.shenqingshijian = obj[o];
	    this.ro.shenqingshijian = true;
            continue;
          }
          if(o=='xuehao'){
            this.ruleForm.xuehao = obj[o];
	    this.ro.xuehao = true;
            continue;
          }
          if(o=='xingming'){
            this.ruleForm.xingming = obj[o];
	    this.ro.xingming = true;
            continue;
          }
          if(o=='zhuangtai'){
            this.ruleForm.zhuangtai = obj[o];
	    this.ro.zhuangtai = true;
            continue;
          }
        }
       this.ruleForm.zhuangtai='学校审核'
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
		if(json.xuexiaomingcheng!=''&&json.xuexiaomingcheng){
                this.ruleForm.xuexiaomingcheng = json.xuexiaomingcheng
	    		this.ro.xuexiaomingcheng = true;
		}
		if(json.xuehao!=''&&json.xuehao){
                this.ruleForm.xuehao = json.xuehao
	    		this.ro.xuehao = true;
		}
		if(json.xingming!=''&&json.xingming){
                this.ruleForm.xingming = json.xingming
	    		this.ro.xingming = true;
		}
        } else {
          this.$message.error(data.msg);
        }
      });
            this.daikuanshizhangOptions = "6个月,1年,1-3年,3-5年".split(',')
            this.zhuangtaiOptions = "学校审核,银行审核".split(',')
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `shenqingdaikuan/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {


















	if(this.ruleForm.shenqingziliao!=null) {
		this.ruleForm.shenqingziliao = this.ruleForm.shenqingziliao.replace(new RegExp(this.$base.url,"g"),"");
	}













var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(!statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "shenqingdaikuan/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `shenqingdaikuan/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.shenqingdaikuanCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `shenqingdaikuan/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.shenqingdaikuanCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.shenqingdaikuanCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    shenqingziliaoUploadChange(fileUrls) {
	this.ruleForm.shenqingziliao = fileUrls;
	this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}
</style>
