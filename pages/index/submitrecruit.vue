<template>

	<view>
		<el-steps  v-if="isSubmitVita ==false" :active="active" finish-status="success" align-center>
			  <el-step  title="" description="基本信息" ></el-step>
			  <el-step title=""></el-step>
			  <el-step title="" description="教育经历"></el-step>
			  <el-step title="" description="工作经历"></el-step>
			  <el-step title="" description="其他"></el-step>
			  <el-step title="" description="结果"></el-step>
		</el-steps>
		<el-steps v-if="isSubmitVita== true" :active="active" finish-status="success" align-center>
			  <el-step title="" description="基本信息" ></el-step>
			  <el-step title=""></el-step>
			  <el-step title="" description="简历"></el-step>
			  <el-step title="" description="结果"></el-step>
		</el-steps>
		<!--基础表单-->
		<el-card style="margin-top: 10%;" width="100%" v-if="active == 0">
			<el-form style="margin-top: 6%;" ref="baseform" :model="baseform" :rules="baseFromRules" label-width="80px" >
			  <el-form-item label="姓名" prop="name" >
			    <el-input v-model="baseform.name" placeholder="请输入姓名"></el-input>
			  </el-form-item>
			  <el-form-item label="性别" prop="sex">
			    <el-select v-model="baseform.sex" placeholder="请选择性别">
			      <el-option label="男" value="0"></el-option>
			      <el-option label="女" value="1"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="生日" prop="birthday">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="baseform.birthday" style="width: 130%;"></el-date-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="民族" prop="nation">
			    <el-select v-model="baseform.nation" placeholder="请选择民族">
			      <el-option label="汉族" value="汉族"></el-option>
			      <el-option label="壮族" value="壮族"></el-option>
				  <el-option label="回族" value="回族"></el-option>
				  <el-option label="满族" value="满族"></el-option>
				  <el-option label="维吾尔族" value="维吾尔族"></el-option>
				  <el-option label="苗族" value="苗族"></el-option>
				  <el-option label="彝族" value="彝族"></el-option>
				  <el-option label="土家族" value="土家族"></el-option>
			      <el-option label="藏族" value="藏族"></el-option>
			      <el-option label="蒙古族" value="蒙古族"></el-option>
				  <el-option label="侗族" value="侗族"></el-option>
				  <el-option label="布依族" value="布依族"></el-option>
				  <el-option label="瑶族" value="瑶族"></el-option>
				  <el-option label="白族" value="白族"></el-option>
				  <el-option label="朝鲜族" value="朝鲜族"></el-option>
				  <el-option label="哈尼族" value="哈尼族"></el-option>
			      <el-option label="黎族" value="黎族"></el-option>
			      <el-option label="哈萨克族" value="哈萨克族"></el-option>
				  <el-option label="傣族" value="傣族"></el-option>
				  <el-option label="畲族" value="畲族"></el-option>
				  <el-option label="傈僳族" value="傈僳族"></el-option>
				  <el-option label="东乡族" value="东乡族"></el-option>
				  <el-option label="仡佬族" value="仡佬族"></el-option>
				  <el-option label="拉祜族" value="拉祜族"></el-option>
			      <el-option label="佤族" value="佤族"></el-option>
			      <el-option label="水族" value="水族"></el-option>
				  <el-option label="纳西族" value="纳西族"></el-option>
				  <el-option label="羌族" value="羌族"></el-option>
				  <el-option label="土族" value="土族"></el-option>
				  <el-option label="仫佬族" value="仫佬族"></el-option>
				  <el-option label="锡伯族" value="锡伯族"></el-option>
				  <el-option label="柯尔克孜族" value="柯尔克孜族"></el-option>
			      <el-option label="景颇族" value="景颇族"></el-option>
			      <el-option label="达斡尔族" value="达斡尔族"></el-option>
				  <el-option label="撒拉族" value="撒拉族"></el-option>
				  <el-option label="布朗族" value="布朗族"></el-option>
				  <el-option label="毛南族" value="毛南族"></el-option>
				  <el-option label="塔吉克族" value="塔吉克族"></el-option>
				  <el-option label="普米族" value="普米族"></el-option>
				  <el-option label="阿昌族" value="阿昌族"></el-option>
			      <el-option label="怒族" value="怒族"></el-option>
			      <el-option label="鄂温克族" value="鄂温克族"></el-option>
				  <el-option label="京族" value="京族"></el-option>
				  <el-option label="基诺族" value="基诺族"></el-option>
				  <el-option label="德昂族" value="德昂族"></el-option>
				  <el-option label="保安族" value="保安族"></el-option>
				  <el-option label="俄罗斯族" value="俄罗斯族"></el-option>
				  <el-option label="裕固族" value="裕固族"></el-option>
			      <el-option label="乌孜别克族" value="乌孜别克族"></el-option>
			      <el-option label="门巴族" value="门巴族"></el-option>
				  <el-option label="鄂伦春族" value="鄂伦春族"></el-option>
				  <el-option label="独龙族" value="独龙族"></el-option>
				  <el-option label="赫哲族" value="赫哲族"></el-option>
				  <el-option label="高山族" value="高山族"></el-option>
				  <el-option label="珞巴族" value="珞巴族"></el-option>
				  <el-option label="塔塔尔族" value="塔塔尔族"></el-option>			  															
			    </el-select>
			  </el-form-item>
			  <el-form-item label="政治面貌" prop="politics">
			    <el-select v-model="baseform.politics" placeholder="请选择政治面貌">
			      <el-option label="中共党员" value="0"></el-option>
				  <el-option label="中共预备党员" value="1"></el-option>
			      <el-option label="共青团员" value="2"></el-option>
				  <el-option label="群众" value="3"></el-option>
				  <el-option label="其他" value="4"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="手机号码" prop="phoneNumber">
			    <el-input v-model="baseform.phoneNumber" placeholder="请输入手机号"></el-input>
			  </el-form-item>
			  <el-form-item label="电子邮箱" prop="email" >
			    <el-input v-model="baseform.email"  placeholder="请输入电子邮箱"
				></el-input>
			  </el-form-item>
			  <el-form-item label="现居住地" prop="currentAddress">
				<el-cascader placeholder="请选择现居住地"  :options="cityData"  v-model="baseform.currentAddress" clearable filterable></el-cascader>
			  </el-form-item>
			  <el-form-item label="户口" prop="registerdAddress">
			   <el-cascader placeholder="请选择所在地"  :options="cityData"  v-model="baseform.registerdAddress" clearable filterable></el-cascader>
			  </el-form-item>
			  <el-form-item label="最高学历" prop="education">
			    <el-select v-model="baseform.education" placeholder="请选择最高学历">
			      <el-option label="博士" value="0"></el-option>
			  	  <el-option label="硕士" value="1"></el-option>
			      <el-option label="学士" value="2"></el-option>
			  	  <el-option label="大专" value="3"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="毕业学校" prop="graducationInstitution">
			    <el-input v-model="baseform.graducationInstitution" placeholder="请输入最高学历毕业院校" ></el-input>
			  </el-form-item>
			  <el-form-item label="院校性质" prop="institutionType">
			    <el-select v-model="baseform.institutionType" placeholder="请选择院校性质">
			      <el-option label="985" value="0"></el-option>
			  	  <el-option label="211" value="1"></el-option>
			      <el-option label="普通本科" value="2"></el-option>
			  	  <el-option label="其他" value="3"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="专业名称" prop="major" >
			    <el-input v-model="baseform.major" placeholder="如:土木工程(道路桥梁)"></el-input>
			  </el-form-item>
			  <el-form-item label="自我评价" prop="evaluation" >
			    <el-input type="textarea" maxlength="100"  v-model="baseform.evaluation" :show-word-limit="true" placeholder="请简短的评价一下自己吧(100字内)~"></el-input>
			  </el-form-item>

			</el-form>
		</el-card>
			 <el-button  v-if="active == 1" type="danger" style="margin-top: 50%;margin-left: 10%; width: 80%;font-size: 20px;" @click="active = 2;isSubmitVita = true" round>已有简历 上传简历</el-button><br/>
			  <el-button  v-if="active == 1" type="danger" style="margin-top: 20%;margin-left: 10%; width: 80%;font-size: 20px;" @click="active= 2;isSubmitVita = false" round>尚无简历 生成简历</el-button>
			<el-button v-if="active == 1"  style="margin-top: 80%;margin-left: 40%" @click="before">上一步</el-button>
			<div v-if="active == 1" style="margin-top: 10%;"></div>
			
		<!--上传简历表单-->
			<el-upload v-if="isSubmitVita == true && active == 2"
			  style="margin-top: 30%;margin-left: 20%;margin-bottom: 10%;"
			  class="upload-demo"
			  ref="upload"
			  action='/apis/recruit/upload/pdf'
			  :on-success="handleSuccess"
			  :before-upload="beforeUpload"
			  :before-remove="beforeRemove"
			  :file-list="fileList"
			  :limit="1"
			  :on-exceed="handleExceed"
			  :data="baseform"
			  :auto-upload="false">
			  
			  <el-button style="margin-left: 10%;" slot="trigger" size="small" type="primary">选取文件</el-button>
			  <div slot="tip" class="el-upload__tip">为防止格式混乱，仅支持上传pdf，且不超过20M</div>
			</el-upload>
		<!--不上传简历表单-->
		
		<div  v-if="active == 2 && isSubmitVita == false" style="margin-left: 3%;">教育经历（从高中开始填写）</div>
		<el-row  v-if="active == 2 && isSubmitVita == false"   v-for="(item, index) in this.educationList " :key="item.key"  :data="educationList">
					<el-card  class="box-card " style="background-color: antiquewhite;width: 100%; height: 10%; margin-top: 3%;">
						<div slot="header" class="clearfix">
						<h3>{{item.graduationInstitution==''?'请录入信息':item.graduationInstitution}}
							<el-tag v-if="item.education!=''&&item.institutionType!=null&&item.institutionType!=''&&item.education!=null "  style="margin-left: 3%;" size="mini">{{item.education==''?'':item.education}}</el-tag>
							<el-tag v-if="item.education!=''&&item.institutionType!=null&&item.institutionType!=''&&item.education!=null " type="success" size="mini" style="margin-left: 3%;">{{item.institutionType==''?'':item.institutionType}}</el-tag>
							<i class="el-icon-remove-outline" style="float: right;" @click="handleEducationListDeleteRow(item)"></i>
							<el-button v-if="item.open == true" type="text" style="margin-top: 4%; font-size: min;height: 5px;float:right" @click ="item.open = false">保存</el-button>
							<el-button v-if="item.open == false" type="text" style="margin-top: 4%; font-size:min;height: 5px;float:right;" @click ="item.open = true">编辑</el-button>
							</h3>
	
						</div>

						<div class="text item" v-if="item.open ==true" > 
						<view class="list">
							<view class="list-item">
								<label>
								毕业院校：
								</label>
								<el-input v-model = "item.graduationInstitution" style="width: 70%;" placeholder="请输入院校"></el-input>
							</view>
							<view class="list-item">
								<label >
								学历：
								</label>
								<el-select v-model="item.education" placeholder="请选择学历" style="margin-top: 3%;width: 70%;">
								  <el-option label="本科" value="本科"></el-option>
								  <el-option label="研究生" value="研究生"></el-option>
								  <el-option label="博士" value="博士"></el-option>
								  <el-option label="其他" value="其他"></el-option>
								</el-select>
							</view>
							<view class="list-item" style="margin-top: 4%;">
								<label>
								入学时间：
								</label>	
								<el-date-picker  value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="item.startTime" style="width: 70%;"></el-date-picker>
							</view>
							<view class="list-item">
								<label>
								毕业时间：
								</label>
								<el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="item.endTime" style="width: 70%; margin-top: 3%;"></el-date-picker>
							</view>
							<view class="list-item">
								<label>
								院校性质：
								</label>
								<el-select v-model="item.institutionType" placeholder="请选择院校性质" style="margin-top: 3%;width: 70%;">
								  <el-option label="985" value="985" key=""></el-option>
								  <el-option label="211" value="211"></el-option>
								  <el-option label="普通本科" value="普通本科"></el-option>
								  <el-option label="其他" value="其他"></el-option>
								</el-select>
							</view>
							<view class="list-item">
									<label>
									专业名称：
									</label>
									<el-input v-model = "item.major" style="width: 70%;margin-top: 3%;" placeholder="如:土木工程(道路桥梁)"></el-input>
								</view>
							<view class="list-item">
									<label>
									主修课程：
									</label><br/>
									<el-input  type="textarea"  :show-word-limit="true" maxlength="100"  v-model = "item.course" style="width: 100%;margin-top: 3%;"  placeholder="填入不超过四行,每门课程以分号分开"></el-input>
								</view>
							</view>
						 </div>
					</el-card>
			</el-row>
		
		<el-button style="margin-top: 3%;width: 100%;" v-if="active == 2 && isSubmitVita == false"  size="small"  @click="addEducationListRow" ><i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;">新增教育经历</i></el-button>
		<!--工作经验-->
		<div  v-if="active == 3  && isSubmitVita == false" style="margin-left: 3%;">实习/工作经验</div>
		<el-row v-if="active == 3  && isSubmitVita == false"  v-for="(item, index) in this.workList " :key="item.key"  :data="workList">
					<el-card  class="box-card " style="background-color:lightcyan;width: 100%; height: 10%; margin-top: 3%;">
						<div slot="header" class="clearfix">
						<h3>{{item.company==''?'请录入岗位信息':item.company}}
							<el-tag v-if="item.post!=''&&item.post!=null"  style="margin-left: 3%;" size="mini">{{item.post==''?'':item.post}}</el-tag>
							<i class="el-icon-remove-outline" style="float: right;" @click="handleWorkListDeleteRow(item)"></i>
							<el-button v-if="item.open == true" type="text" style="margin-top: 4%; font-size: min;height: 5px;float:right" @click ="item.open = false">保存</el-button>
							<el-button v-if="item.open == false" type="text" style="margin-top: 4%; font-size:min;height: 5px;float:right;" @click ="item.open = true">编辑</el-button>
							</h3>
			
						</div>
						
							
						<div class="text item" v-if="item.open ==true" > 
						<view class="list">
							<view class="list-item">
								<label>
								任职公司：
								</label>
								<el-input v-model = "item.company" style="width: 70%;" placeholder="请输入全称"></el-input>
							</view>
							<view class="list-item">
								<label>
								所在岗位：
								</label>
							<el-input v-model = "item.post" style="width: 70%;margin-top: 4%;" placeholder="如:java后端开发" ></el-input>
							</view>
							<view class="list-item" style="margin-top: 4%;">
								<label>
								起始时间：
								</label>	
								<el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="item.startTime" style="width: 70%;"></el-date-picker>
							</view>
							<view class="list-item">
								<label>
								终止时间：
								</label>
								<el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="item.endTime" style="width: 70%; margin-top: 4%;"></el-date-picker>
							</view>
							<view class="list-item" style="margin-top: 3%;">
								<label>
								工作内容：
								</label>
								<el-input type="textarea" :show-word-limit="true" maxlength="300" v-model = "item.jobDescription" style="width: 100%;margin-top: 4%;"></el-input>
							</view>
							</view>
						 </div>
					</el-card>
			</el-row>
		<!-- 特长、证书、校园经历、项目经历 -->
		<!--技能特长-->
		<el-collapse  v-if="active==4 &&isSubmitVita ==false">
		  <el-collapse-item title="技能特长" name="1" style="color: lavenderblush;">
			<el-form :model="specialityList" ref="specialityList" label-width="auto">
				<el-form-item label="外语能力：">
				  <el-select v-model="specialityList.foreignLanguage" placeholder="请选择外语能力等级(选填)" style="margin-top: 3%;width: 70%;">
				    <el-option label="大学英语四级" value="0"></el-option>
				    <el-option label="大学英语六级" value="1"></el-option>
				    <el-option label="其他" value="3"></el-option>
				  </el-select>
				</el-form-item>
				<el-form-item label="计算机能力：">
					<el-select v-model="specialityList.computer" placeholder="请选择计算机等级(选填)" style="margin-top: 3%;width: 70%;">
					 <el-option label="计算机一级" value="0"></el-option>
					 <el-option label="计算机二级" value="1"></el-option>
					 <el-option label="计算机三级" value="2"></el-option>
					 <el-option label="计算机四级" value="3"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
				<label>其他：(技能水平不可填熟练、熟悉、掌握等模糊词)</label><br/>
					<el-form v-model="otherSpecialityList" ref="data" label-width="auto" style="margin-top: 2%;">
					        <el-table
					          border
					          :header-cell-style="{ 'text-align': 'center' }"
					          :cell-style="{ 'text-align': 'center' }"
					          :data="otherSpecialityList"
					          ref="table"
					          style="width: 100%"
					        >
								
					          <el-table-column align="center"   label="技能列表">
					            <template slot-scope="scope">
					            <!--表格里面嵌套表单-->
					              <el-form-item
					                :prop="scope.$index + '.specialityName'"
					              >
					              <el-input
					                v-model="otherSpecialityList[scope.$index].specialityName"
					                autocomplete="off"
					                size="small"
					                placeholder="如:日语能力"
					              ></el-input>
					              </el-form-item>
					            </template>
					          </el-table-column>
							<el-table-column align="center"   label="技能水平">
								  <template slot-scope="scope">
								  <!--表格里面嵌套表单-->
								    <el-form-item
								      :prop="scope.$index + '.specialityLevel'"
								    >
								    <el-input
								      v-model="otherSpecialityList[scope.$index].specialityLevel"
								      autocomplete="off"
								      size="small"
								      placeholder="N2"
								    ></el-input>
								    </el-form-item>
								  </template>
								</el-table-column>
								
								 <el-table-column fixed="right" label="操作" width="100">
								    <template slot-scope="scope">
								    <el-button
								        @click="handleOtherSpecialityListDeleteRow(certificateList[scope.$index])"
								        type="text"
								        size="small">
										删除
									</el-button>
								    </template>
								</el-table-column>
								 
								</el-table>
							</el-form>
							<el-button style="width: 100%;"  size="small"  @click="addOtherSpecialityListRow" >
								<i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;">添加其他特长</i>
								
							</el-button>
														
				</el-form-item>
			</el-form>  
			</el-collapse-item>
			    <el-divider></el-divider>
				
				<!--荣誉证书-->
		  <el-collapse-item title="荣誉证书" name="2" >
			  <el-form v-model="certificateList" ref="data" label-width="auto">
			          <el-table
			            border
			            :header-cell-style="{ 'text-align': 'center' }"
			            :cell-style="{ 'text-align': 'center' }"
			            :data="certificateList"
			            ref="table"
			            style="width: 100%"
			          >
			
			            <el-table-column align="center"   label="证书列表">
			              <template slot-scope="scope">
			              <!--表格里面嵌套表单-->
			                <el-form-item
			                  :prop="scope.$index + '.cretificate'"
			                >
			                <el-input
			                  v-model="certificateList[scope.$index].cretificate"
			                  autocomplete="off"
			                  size="small"
			                  placeholder="校级及以上"
			                ></el-input>
			                </el-form-item>
			              </template>
			            </el-table-column>
						<el-table-column align="center"   label="取证时间">
						  <template slot-scope="scope">
						  <!--表格里面嵌套表单-->
						    <el-form-item
						      :prop="scope.$index + '.obtainTime'"
						    >
						    <el-input
						      v-model="certificateList[scope.$index].obtainTime"
						      autocomplete="off"
						      size="small"
						      placeholder="如:2023-9"
						    ></el-input>
						    </el-form-item>
						  </template>
						</el-table-column>
						
						 <el-table-column fixed="right" label="操作" width="100">
						    <template slot-scope="scope">
						    <el-button
						        @click="handleCertificateListDeleteRow(certificateList[scope.$index])"
						        type="text"
						        size="small">
								删除
							</el-button>
						    </template>
						</el-table-column>
						 
						</el-table>
					</el-form>
					<el-button style="width: 100%;"  size="small"  @click="addCertificateListRow" >
						<i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;">添加证书</i>
						
					</el-button>
			</el-collapse-item>
			    <el-divider></el-divider>
				
		<!--校园经历-->
			<el-collapse-item title="校园经历" name="3">
				<el-row v-for="(item, index) in this.campusExperience " :key="item.key"  :data="campusExperience">
							<el-card  class="box-card " style="width: 100%; height: 10%; margin-top: 3%;">
								<div slot="header" class="clearfix">
								<h3>{{item.unit==''?'请录入经历信息':item.unit}}
									<i class="el-icon-remove-outline" style="float: right;" @click="handleCampusExperienceDeleteRow(item)"></i>
									<el-button v-if="item.open == true" type="text" style="margin-top: 4%; font-size: min;height: 5px;float:right" @click ="item.open = false">保存</el-button>
									<el-button v-if="item.open == false" type="text" style="margin-top: 4%; font-size:min;height: 5px;float:right;" @click ="item.open = true">编辑</el-button>
									</h3>
					
								</div>
								<div class="text item" v-if="item.open ==true" > 
								<view class="list">
									<view class="list-item">
										<label>
										单位：
										</label>
										<el-input v-model = "item.unit" style="width: 70%;" placeholder="如XX大学XX学院学生会组织部"></el-input>
									</view>
									<view class="list-item">
										<label>
										职务：
										</label>
									<el-input v-model = "item.duties" style="width: 70%;margin-top: 4%;" placeholder="如:部员/协会成员"></el-input>
									</view>
									<view class="list-item" style="margin-top: 4%;">
										<label>
										起始时间：
										</label>	
										<el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="item.startTime" style="width: 70%;"></el-date-picker>
									</view>
									<view class="list-item">
										<label>
										终止时间：
										</label>
										<el-date-picker value-format="yyyy-MM-dd"     type="date" placeholder="选择日期" v-model="item.endTime" style="width: 70%; margin-top: 4%;"></el-date-picker>
									</view>
									<view class="list-item" style="margin-top: 3%;">
										<label>
										经历内容：
										</label>
										<el-input type="textarea" :show-word-limit="true" maxlength="300" placeholder="不超过300字"  v-model = "item.content" style="width: 100%;margin-top: 4%;"></el-input>
									</view>
									</view>
								 </div>
							</el-card>
					</el-row>
					<el-button style="width: 100%;"  size="small"  @click="addCampusExperienceRow" >
						<i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;">添加校园经历</i>
						</el-button>
			</el-collapse-item>
			    <el-divider></el-divider>
				
			  <el-collapse-item title="项目经历" name="4">
				<el-row v-for="(item, index) in this.projectExperience " :key="item.key"  :data="projectExperience">
							<el-card  class="box-card " style="width: 100%; height: 10%; margin-top: 3%;">
								<div slot="header" class="clearfix">
								<h3>{{item.entryName==''?'请录入经历信息':item.entryName}}
									<i class="el-icon-remove-outline" style="float: right;" @click="handleProjectExperienceDeleteRow(item)"></i>
									<el-button v-if="item.open == true" type="text" style="margin-top: 4%; font-size: min;height: 5px;float:right" @click ="item.open = false">保存</el-button>
									<el-button v-if="item.open == false" type="text" style="margin-top: 4%; font-size:min;height: 5px;float:right;" @click ="item.open = true">编辑</el-button>
									</h3>
					
								</div>
								<div class="text item" v-if="item.open ==true" > 
								<view class="list">
									<view class="list-item">
										<label>
										项目名称：
										</label>
										<el-input v-model = "item.entryName" style="width: 70%;" placeholder="请输入项目名称"></el-input>
									</view>
									<view class="list-item">
										<label>
										项目简述：
										</label>
									<el-input v-model = "item.projectOverview" style="width: 70%;margin-top: 4%;" placeholder="简要介绍一下项目内容"></el-input>
									</view>
									<view class="list-item" style="margin-top: 4%;">
										<label>
										个人职责：
										</label>	
									<el-input v-model = "item.individualResponsibility" style="width: 70%;margin-top: 4%;" placeholder="您所承担的角色"></el-input>
									</view>
									<view class="list-item" style="margin-top: 3%;">
										<label>
										项目成果：
										</label>
										<el-input  type="textarea" :show-word-limit="true" maxlength="300" placeholder="需要清晰明了地描述目标和结果，并体现出项目的价值和意义,不超过300字。"  v-model = "item.projectResults" style="width: 100%;margin-top: 4%;"></el-input>
									</view>
									</view>
								 </div>
							</el-card>
					</el-row> 
					<el-button style="width: 100%;"  size="small"  @click="addProjectExperienceRow" >
						<i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;" >添加项目经验</i>
						</el-button>
			</el-collapse-item>  
		</el-collapse>
		</el-card>
		<!--投递界面-->
		<el-button v-if="active == 5 && isSubmitVita == false " type="danger" style="margin-left: 10%;margin-bottom: 40%;margin-top: 30%;font-size: 50px;width: 80%;" round>上传</el-button>
		
		<el-button style="margin-top: 3%;width: 100%;" v-if="active == 3 && isSubmitVita == false"  size="small"  @click="addWorkListRow" ><i class="el-icon-circle-plus-outline" style="margin-right: 3%; font-size: 15px;">新增实习/工作经历</i></el-button>
		<el-button v-if="active != 1"  style="margin-top: 3%;margin-left: 20%" @click="before">上一步</el-button>
		<el-button v-if="(active != 1 && active!= 2 )&&isSubmitVita == true" style="margin-top: 3%;margin-left: 15%;" @click="next">下一步</el-button>
		<el-button v-if="isSubmitVita == true && active == 2" style="margin-top: 3%;margin-left: 15%;" @click="submitVita">提交</el-button>
		
		<el-button v-if="active != 1&&isSubmitVita == false&&active != 4" style="margin-top: 3%;margin-left: 15%;" @click="next">下一步</el-button>
		<el-button v-if="active != 1&&isSubmitVita == false&&active == 4" style="margin-top: 3%;margin-left: 15%;" @click="submitNoVita">提交</el-button>
		
	</view>

</template>
<script>
	import _lodash from 'lodash';
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue';
	import stepsList from '@/components/steps-list/steps-list.vue';
	import comboxSearch from "@/components/cuihai-combox/cuihai-combox.vue"
	import uniSection from "@/components/cuihai-combox/uni-section.vue"
	import AllAddress from '../../components/wangding-pickerAddress/address_level_5.js'
	import {
		buildTextData
	} from '../../common/indexed-list.js';
	import cityData from "@/common/citydata.js"
	export default {
		
		name: 'app',
		components: {
			uniIndexedList,
			stepsList,
			comboxSearch,
			uniSection
		},
		data() { 
			return {
				cityData, //中国省、市、县
				active: 0,//控制步骤条
				id:'',
				fileList:[],
				isSubmitVita: true, //是否上传简历
				educationList:[], //教育经历列表
				workList:[], //工作经历列表
				specialityList:{  //技能
					foreignLanguage:'',
					computer:'',
				},
				otherSpecialityList:[],
				certificateList:[], //荣誉证书列表
				campusExperience:[],//校园经历列表
				projectExperience:[],//项目经历列表
				baseform: { //基础信息表单
						  postId:'',
				          name: '',
						  sex:'',
				          birthday: '',
				          nation: '',
				          politics: '',
						  education:'',
				          phoneNumber:'',
				          email: '',
				          currentAddress: '',
						  registerdAddress:'',
						  graducationInstitution:'',
						  institutionType:'',
						  major:'',
						  evaluation:'',
				        },
				
				isSuccess:false,//是否上传成功
				baseFromRules:{
					name:[{
						required: true,
						message:
						"姓名不能为空",
						trigger: "blur",
					}],
					sex:[{
						required:true,
						message:'请选择一个选项',
						trigger:['change'],
						}],
					birthday:[{
						required:true,
						message:'请选择一个选项',
						trigger:['change'],
					}],
					nation:[{
						required:true,
						message:'请选择一个选项',
						trigger:['change'],
					}],
					politics:[{
						required:true,
						message:'请选择一个选项',
						trigger:['change'],
					}],
					education:[{
						required:true,
						message:'请选择一个选项',
						trigger:['change'],
					}],
					evaluation:[
						{
							required: true,
							message:
							"自我评价不能为空", 
							trigger: "blur",
						},
					],
					phoneNumber:[
						{
							required: true,
							message:
							"手机号码不能为空",
							trigger: "blur",
						},
						{
						    pattern:/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
						    message:"手机格式错误",
						}
					],
					email:[{
						required: true,
						message:
						"邮箱不能为空",
						trigger: "blur",
					},
					{
					    pattern:/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
					    message:"邮箱格式错误",
					},
					],
					currentAddress:[{
						required: true,
						message:
						"现居住地不能为空",
						trigger: "blur",
					}
					],
					registerdAddress:[{
						required: true,
						message:
						"户口不能为空",
						trigger: "blur",
					}
					],
					graducationInstitution:[{
						required: true,
						message:
						"毕业学校不能为空",
						trigger: "blur",
					}
					],
					institutionType:[{
						required: true,
						message:
						"现居住地不能为空",
						trigger: "change",
					}
					],
					major:[{
						required: true,
						message:
						"专业名称不能为空",
						trigger: "blur",
					}
					],
				},
					
				}
		},
		mounted(){
		this.id = this.$route.params.id;
			  },
		methods: {
			submitVita(){
				this.baseform.postId = this.id;
				this.submitUpload();
				},
			submitNoVita(){
				this.baseform.postId = this.id;
				var submitData={ basefrom:this.baseform,
									educationList:this.educationList,
									workList:this.workList,
									specialityList: this.specialityList,
									otherSpecialityList:this.otherSpecialityList,
									certificateList:this.certificateList, 
									campusExperienceList:this.campusExperience,
									projectExperienceList:this.projectExperience,
									};
				uni.request({
					method: 'POST',
					url: '/apis/recruit/upload/nopdf',
					data: submitData,
					
					// dataType:'json',
					success: (res) => {
						if (res.data.code == 0  && res.data.msg=='成功') {
							// console.log("返回结果：" + JSON.stringify(res.data));
							var that = this
							uni.showModal({
								title: '',
								content: '提交成功！',
								showCancel: false,
								success: function(res) {
									uni.navigateTo({
										inputIdCard :'',
										idCard:'',
										url: '/pages/index/index_examination',
									})
								}
							});
						}
						if (res.data.code == 0 && res.data.msg=='失败，你已提交过简历') {
							// console.log("返回结果：" + JSON.stringify(res.data));
							uni.showToast({
								title: '失败，你已提交过简历，勿重复提交！',
								icon: 'none',
								duration: 2000
							});	
						}
						if (res.data.code == 500) {
							uni.showToast({
								title: '系统异常，添加失败！',
								icon: 'none',
								duration: 2000
							});
						}
			}})
			},
			next() {
				if(this.isSubmitVita == true){
					if(this.active == 0 ){
						this.determineBaseFrom();
						}
					else {
						   if (this.active++ > 2) {
							  	this.active =3;
							  }
					   }
					}
					
				if(this.isSubmitVita == false){
					if(this.active == 0 ){
						this.determineBaseFrom();
						}
					else {
					if (this.active++ > 3) {
							this.active =4;
							}
						 }
					}
			  },
			determineBaseFrom(){
					var flag = true;
					if(this.baseform.name == ''||this.baseform.name == null ||
						this.baseform.sex == ''||this.baseform.sex == null ||
						this.baseform.birthday == ''||this.baseform.birthday == null ||
						this.baseform.nation == ''||this.baseform.nation == null ||
						this.baseform.politics == ''||this.baseform.politics == null ||
						this.baseform.phoneNumber == ''||this.baseform.phoneNumber == null ||
						this.baseform.email == ''||this.baseform.email == null ||
						this.baseform.currentAddress == ''||this.baseform.currentAddress == null ||
						this.baseform.registerdAddress == ''||this.baseform.registerdAddress == null ||
						this.baseform.graducationInstitution == ''||this.baseform.graducationInstitution == null ||
						this.baseform.institutionType == ''||this.baseform.institutionType == null ||
						this.baseform.major == ''||this.baseform.major == null
						) {
							this.$alert('有信息为空，请完整填写后进行下一步操作！', '提示', {
							confirmButtonText: '确定',})
							flag = false;
						  }
					if(this.baseform.email != null || this.baseform.email != ''){
						 let reg = new RegExp('^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$');
						 if(!reg.test(this.baseform.email)){
							 this.$alert('邮箱格式错误！', '提示', {
							 		confirmButtonText: '确定',});
									flag = false;
							 	  }
							
						 }
					if (this.baseform.phoneNumber == ''||this.baseform.phoneNumber == null){
		
						let reg = new RegExp('^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$');
						if(!reg.test(this.baseform.phoneNumber)){
							this.$alert('手机格式错误！', '提示', {
									confirmButtonText: '确定',});
									flag =false;
								  }
							
						}
					if(flag == true) {
						this.active++;
						console.log(this.active);
					}
			}
			  ,
			before() {
			    if (this.active-- <=  0) {
					this.active = 0;
					this.$router.push({
								path:'./recruitdetailmessage',
								params:{
								  id: this.id
							}
					})
				};
			  },
			 addEducationListRow() {
			    let index = this.educationList.length ;
			    this.educationList.push({
			      key: index,
			      startTime:'',
			      endTime:'',
			      education:'',
				  graduationInstitution:'',
				  institutionType:'',
				  major:'',
				  course:'',
				  open:true
			    });
			  },
			handleEducationListDeleteRow(row){
			      let datas = this.educationList;
			      for (var i = 0; i < datas.length; i++){
			        if (datas[i].key == row.key){
			          datas.splice(i,1);
			        }
			      }
			    },
			addWorkListRow() {
			      let index = this.workList.length ;
			      this.workList.push({
			        key: index,
			        startTime:'',
			        endTime:'',
			        company:'',
					post:'',
					jobDescription:'',
					open:true
			      });
			    },
			handleWorkListDeleteRow(row){
			        let workdatas = this.workList;
			        for (var i = 0; i < workdatas.length; i++){
			          if (workdatas[i].key == row.key){
			            workdatas.splice(i,1);
			          }
			        }
			      },
			addCertificateListRow() {
				      let index = this.certificateList.length ;
				      this.certificateList.push({
				        key: index,
				  	  cretificate:'',
					  obtainTime:'',
				      });
				    },
			handleCertificateListDeleteRow(row){
				    let certificateListdatas = this.certificateList;
				    for (var i = 0; i < certificateListdatas.length; i++){
				        if (certificateListdatas[i].key == row.key){
				          certificateListdatas.splice(i,1);
				        }
				      }
				    },
			addOtherSpecialityListRow() {
				      let index = this.otherSpecialityList.length ;
				      this.otherSpecialityList.push({
				        key: index,
				  	  specialityName:'',
					  specialityLevel:'',
				      });
				    },
			handleOtherSpecialityListDeleteRow(row){
			        let workdatas = this.otherSpecialityList;
			        for (var i = 0; i < workdatas.length; i++){
			          if (workdatas[i].key == row.key){
			            workdatas.splice(i,1);
			          }
			        }
			      },

			
					
			addProjectExperienceRow() {
				      let index = this.projectExperience.length ;
				      this.projectExperience.push({
				        key: index,
						open:true,
				  	    entryName:'',
					    projectOverview:'',
					    individualResponsibility:'',
					    projectResults:''
				      });
				    },
			handleProjectExperienceDeleteRow(row){
				    let certificateListdatas = this.projectExperience;
				    for (var i = 0; i < certificateListdatas.length; i++){
				        if (certificateListdatas[i].key == row.key){
				          certificateListdatas.splice(i,1);
				        }
				      }
				    },
			addCampusExperienceRow() {
				      let index = this.campusExperience.length ;
				      this.campusExperience.push({
				        key: index,
					    open:true,
				  	    startTime:'',
					    endTime:'',
					    unit:'',
					    duties:'',
					    content:'',
				      });
				    },
			handleCampusExperienceDeleteRow(row){
				    let certificateListdatas = this.campusExperience;
				    for (var i = 0; i < certificateListdatas.length; i++){
				        if (certificateListdatas[i].key == row.key){
				          certificateListdatas.splice(i,1);
				        }
				      }
				    },
					
			 handleExceed(files, fileList) {
			    this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			      },
			beforeUpload(file){
				const fileType = file.name.substring(file.name.lastIndexOf('.') + 1)
				const isPdf = fileType === 'pdf'
				const isLt = file.size / 1024 / 1024 < 20;
				if(!isPdf){
					this.$message.error('只能上传pdf文件');
				}
				if (!isLt) {
				    this.$message.error('上传头像图片大小不能超过 20MB!');
				}
				return isPdf && isLt;
			},
			handleSuccess(response , file , fileList){
				this.fileList = fileList;
				this.$message.success('上传成功');
			},
			beforeRemove(file, fileList) {
			        return this.$confirm(`确定移除 ${ file.name }？`);
			      },
			submitUpload() {
			      	 this.$refs.upload.submit();
			      }
				  
				
		}
		
		
}
</script>

<style scoped>
	.el-card {
	min-width: 380px;
	margin-right: 20px;
	transition: all .5s;
	}
	.el-card:hover{
	margin-top: -5px;
	}
	@import '@/pages/index/index5.css';
</style>
