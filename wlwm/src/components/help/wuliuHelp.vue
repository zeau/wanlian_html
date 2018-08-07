<template>
    <div class="frontBody">
    
        <div class="body" v-if="this.wuliuType == 1">
    
            <p>
                <b>
                                            <span style="font-size: 14pt; font-family: 宋体;">新用户注册</span>
                            </b>
                <br>
            </p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; font-family: tahoma, arial, 宋体;">
                <span style="color: rgb(102, 102, 102);">进入万联官网后，点击右上方的“免费注册”，将会出现新的页面</span>
                <span style="color: rgb(51, 51, 51); font-family: 微软雅黑, 宋体; line-height: 17.1429px;">：</span>
                <router-link to="/register" target="_blank"></router-link><span style="color: rgb(102, 102, 102);">，在相应提示处输入：</span>
            </p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（1）<span style="background-color: rgb(229, 51, 51);"><span style="color: rgb(229, 102, 0); background-color: rgb(255, 255, 255);">您的用户名</span></span>（手机号码）</p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（2）<span style="color: rgb(229, 102, 0);">验证码</span></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">（3）输入获取的"<span style="color: rgb(229, 102, 0);">短信校验码</span>”</p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; font-family: tahoma, arial, 宋体;"><span style="color: rgb(102, 102, 102);">（4）设置"</span><span style="color: rgb(229, 102, 0);">密码</span></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;">注册成功后会弹出提示信息，即可安全放心的购物</p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"><img style="" src="https://oss-cn-suzhou-gov.aliyuncs.com/picture-downroad/bbc_test/upload/image/201804/1523184229111.jpg"></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(102, 102, 102); font-family: tahoma, arial, 宋体;"><br></p><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe>
    
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 2">
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left">
                <b>
                                <span style="font-size:12.0pt;font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:
                    Tahoma;mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">账户安全
                    </span>
                    </b>
                <b>
                        <span style="font-size:12.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;
                    mso-fareast-font-family:宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">
                    
                    </span>
                    </b>
            </p>
    
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:
                    Tahoma;mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">1、如何修改账户密码<br>2、如何更改用户名<br>3、如何注销账户</span></p>
            <a id="tips1"></a>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="color: rgb(85, 85, 85); font-family: 宋体;">一、修改账户密码</span><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:
                    Tahoma;mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt"><br></span></p>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size:9.0pt;font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:
                    Tahoma;mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">进入会员中心</span><span style="font-stretch: normal;">，进入</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">“</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">账户中心</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">-</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">账户安全</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">”</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">，点击下图中</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">“</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">登录密码</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">”</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">后的</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">“</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">修改</span><span style="font-size:9.0pt;font-family:&quot;Tahoma&quot;,&quot;sans-serif&quot;;mso-fareast-font-family:
                    宋体;color:#555555;mso-font-kerning:0pt" lang="EN-US">”</span><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt">，根据引导即可完成密码修改；</span></p>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size:9.0pt;
                    font-family:宋体;mso-ascii-font-family:Tahoma;mso-hansi-font-family:Tahoma;
                    mso-bidi-font-family:Tahoma;color:#555555;mso-font-kerning:0pt"><img style="" src="../assets/personal.jpg"></span></p>
    
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">二、更换用户名</span></p>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">用户注册后是不可以修改用户名，用户名是识别用户身份的唯一标识，一经注册不能修改。</span><span style="font-stretch: normal;"><span style="color: rgb(85, 85, 85); font-family: 宋体;">因此，在注册会员时，请选择您喜欢的用户名，并请牢记。</span></span>
            </p>
            <a id="tips3"></a>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">三、账户注销</span></p>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-stretch: normal;"></span></p>
            <p class="MsoNormal" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"
                align="left"><span style="font-stretch: normal;"><span style="color: rgb(85, 85, 85); font-family: 宋体;">我们不建议您注销账户哦，如果您遇到什么问题，可以联系网站首页的客服人员，我们将尽心为您服务。</span></span>
            </p>
            <p></p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType ==3">
            <p class="MsoNormal" style="margin-bottom: 40px; padding: 0px; font-size: 14px; line-height: 20px;"><span style="line-height: 2;">1</span><span style="line-height: 2;">、如您遇到任何质量或服务问题，均可拨万联万民客服热线：400-xxxx-xxx</span><span style="line-height: 2;">，</span><span style="line-height: 2;">专职客服人员将为您及时处理；</span></p>
            <p><span style="font-size: 14px; line-height: 2;">2、在订单中心中，您可以对相关订单进行投诉，商城工作人员会在3-7个工作日之内受理您的投诉，并为您进行协调处理</span><br></p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 4">
            <p style="padding-left:25px;"><img alt="" src="../assets/intro.jpg" style="margin: 10px 0px 10px -2em; padding: 0px; text-align: center; max-width: 650px; color: rgb(0, 0, 0); font-family: Arial, Verdana, 宋体; line-height: 21px; text-indent: 24px; font-size: 16px;"><br></p>
        </div>
    
    
    
    
    
    
        <div class="body" v-if="this.wuliuType == 8">
            <h2 style="color: rgb(0, 0, 0); font-family: &quot;sans serif&quot;, tahoma, verdana, helvetica;"><strong style="color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">1.</strong>
                <strong style="color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">自营商品配送费收费标准</strong><br></h2>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">函百商城商品配送收费标准：苏州市内，二百元以下订单每笔加30元运费；二百元以上订单免邮费。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;"><strong>2. 配送费发票开具</strong></p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">配送费金额将单独列示在商品发票上。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;"><strong>3. 退货时配送费规则</strong></p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">发生非顾客原因退货时，分摊至该商品的运费将随货款一并退还。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">因顾客自身原因在发货后退货或收货当场拒收，如果同一顾客（账户）在30日内有过2次以上（含）或365日内有过5次以上（含）该行为， 该顾客（账户）将不再享有“百元以上免邮费”的权利。时间计算方法为：30日指顾客成功提交订单后向前推算30天，365日指顾客成功提交订单后向前推算365天，不以自然月和自然年计算。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">函百商城有权通过包括但不限于收货地址、绑定手机、联系方式等判定是否构成同一顾客（账户），若顾客对函百商城的判定有异议，可向函百商城客服提供相应证明，由函百商城核实处理。</p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 10">
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">依托强大的物流基地网络建设步伐，函百商城承诺合约制客户采购的商品，苏州全城一日内送达。函百商城的配送网络覆盖全苏州几乎全部地区，您可享受快捷安全的配送服务。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;"><br></p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;"><strong>一日配送的定义：</strong></p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">当日18:00前生成的订单，次日配送完成；</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">当日18:00后生成的订单，隔日配送完成。</p>
            <p class="MsoNormal" style="word-wrap: break-word; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(102, 102, 102); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Heiti SC&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; line-height: 28px;">例如，3月1日18:00前生成的订单，在3月2日完成配送；3月1日18:00后生成的订单，3月3日完成配送。</p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 11">
            <p>采用万联商城合作物流进行发货。</p>
    
            <h3>
                商品验货与签收
            </h3>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">一、</span>
                <span style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                </span><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">签收与验货须知：</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                        </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">商品务必本人签收。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">由于网站所售商品的特殊性，快递送货上门时，需先签收后再开箱验货。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">当快递员上门送货时，请注意检查商品外包装是否有破损，如出现以上情况，请不要打开包裹，及时与对应商品百货客服联系。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">商品外包装完好情况下，快递员会配合您打开包装验货（请您一定要小心开包，以免尖锐物件损伤到包裹内的商品）。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">包裹拆开后，如商品存在包装破损、商品发错、商品少发、商品表面质量问题等影响使用的情况，请您先签收商品，并当场联系客服说明情况，提供商品实物照片办理退货手续。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6. </span>
                <span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">根据相关法律规定，如因您未签收验货，产生的后续售后问题，我们有权不予处理。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">二、</span>
                <span style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                                                        </span><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">验货内容：</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                                        </span>
            </p>
            <p>
    
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">包括商品及配件、商品数量、发货清单、发票（如有）、三包凭证（如有）等。</span>
                <span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">
                                                                                        </span>
            </p>
    
        </div>
    
    
        <div class="body" v-else-if="this.wuliuType == 13">
            <h3>发票制度说明</h3>
            <p><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">万联所售商品都是正品行货，各百货均可开具正规发票，发票金额含配送费金额，另有说明的除外。各百货的发票开具和邮寄事项请联系百货商家确认。</span><br></p>
    
            <h3>优惠券说明</h3>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">万联平台有根据营销活动，发放与使用优惠券，可以参与订单结算享受优惠，优惠券金额一般不参与活动金额，不计入发票金额。</span>
                <span
                    lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"></span>
            </p>
    
            <p class="MsoNormal" align="left" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><b><span style="font-size: 12pt; font-family: 宋体; color: rgb(85, 85, 85);">在线支付</span></b><b><span lang="EN-US" style="font-size: 12pt; font-family: Tahoma, sans-serif; color: rgb(85, 85, 85);"></span></b></p>
            <p style="line-height: 17.1429px;"></p>
            <p class="MsoNormal" align="left" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">已开通</span><span style="font-size: 9pt; color: rgb(85, 85, 85);"><span style="font-family: Tahoma, sans-serif;">&nbsp;</span><span lang="EN-US" style=""><span style="font-family: Tahoma, sans-serif;">“</span>
                <span
                    style="font-family: 宋体;">支付宝</span><span style="font-family: Tahoma, sans-serif;">” 、“微信支付”、“银联支付”</span></span>
                    </span><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">支付网关，支持</span><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">所有已开通网银功能的银行卡，可实时到帐。</span></p>
        </div>
    
    
        <div class="body" v-else-if="this.wuliuType == 15">
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">商城承诺，自客户收到商品之日起7日内可以退货，15日内可以换货，客户可在线提交返修申请办理退换货事宜。</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">有下列情形的不予以办理退货：</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">1.任何非本商城出售的商品(序列号不符)；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">2.过保商品(超过三包保修期的商品);</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">3.未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装索造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">4.无法提供商品的发票、保修卡等三包凭证信息与商品不符及被涂改的；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">5.其他依法不应办理退换货的。</span></p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 16">
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(85, 85, 85); font-family: tahoma, arial, 宋体;"><span style="font-weight: bold;"><img src="../assets/baozhang.jpg" style="width: 81.0156px; height: 94.7198px;"></span></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(85, 85, 85); font-family: tahoma, arial, 宋体;"><img src="../assets/dianhua.jpg" style="font-weight: bold; line-height: 17.1429px; width: 29.1329px; height: 28px;"><span style="font-weight: bold;">投诉电话：400-8850-868</span></p>
            <p style="margin-bottom: 20px; padding: 0px; line-height: 20px; color: rgb(85, 85, 85); font-family: tahoma, arial, 宋体;"><span style="font-weight: bold;">函百商城平台确保所售卖的商品不会出现一品多价的情况，保护消费者的合法权益不收侵害。</span></p>
        </div>
    
    
        <div class="body" v-else-if="this.wuliuType == 17">
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">商城承诺，自客户收到商品之日起7日内可以退货，15日内可以换货，客户可在线提交返修申请办理退换货事宜。</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">1.任何非本商城出售的商品(序列号不符)；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">2.过保商品(超过三包保修期的商品);</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">3.未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装索造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">4.无法提供商品的发票、保修卡等三包凭证信息与商品不符及被涂改的；</span></p>
            <p style="line-height: 17.1429px; font-family: 宋体;"><span style="font-size: 14px; line-height: 21px;">5.其他依法不应办理退换货的。</span></p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 18">
            <p class="MsoNormal" align="left" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><b><span style="font-size: 12pt; font-family: 宋体; color: rgb(85, 85, 85);">取消订单说明</span></b><span lang="EN-US" style="font-size: 9pt; font-family: Tahoma, sans-serif; color: rgb(85, 85, 85);"><o:p></o:p></span></p>
            <p style="line-height: 17.1429px;"><span style="font-size: 9pt; font-family: 微软雅黑, sans-serif; color: rgb(102, 102, 102); background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">订单提交成功后，您可取消第三方卖家出售的服务商品订单。</span>
                <span
                    lang="EN-US" style="font-size: 9pt; font-family: Helvetica, sans-serif; color: rgb(102, 102, 102);"><br></span><span style="font-size: 9pt; font-family: 微软雅黑, sans-serif; color: rgb(102, 102, 102); background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">注：订单取消申请一旦提交成功，将无法进行任何修改或恢复，请您谨慎操作。</span>
                    <span
                        lang="EN-US" style="font-size: 9pt; font-family: Helvetica, sans-serif; color: rgb(102, 102, 102);"><br></span><span style="font-size: 9pt; font-family: 微软雅黑, sans-serif; color: rgb(102, 102, 102); background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">提交订单取消申请后，系统会确认商品包裹位置，拦截成功之后会为您办理退款。若订单取消失败，订单会继续为您配送服务，您可根据需要签收或拒收。</span></p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 20">
            <h3>联系我们的客服</h3>
            <p class="MsoNormal" align="left" style="margin-bottom: 5.25pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family:宋体;
    mso-ascii-font-family:微软雅黑;mso-fareast-font-family:宋体;mso-fareast-theme-font:
    minor-fareast;mso-hansi-font-family:微软雅黑;color:black">在线客服</span><span lang="EN-US" style="font-family:&quot;微软雅黑&quot;,sans-serif;mso-fareast-font-family:宋体;
    mso-fareast-theme-font:minor-fareast;color:black"><o:p></o:p></span></p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">服务时间：<span lang="EN-US">7*16</span>小时
                <span
                    lang="EN-US">
                    <o:p></o:p>
                    </span>
                    </span>
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">联系在线客服（在线客服入口）<span lang="EN-US"><o:p></o:p></span></span>
            </p>
            <p class="MsoNormal" align="left" style="margin-bottom: 5.25pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family:宋体;
    mso-ascii-font-family:微软雅黑;mso-fareast-font-family:宋体;mso-fareast-theme-font:
    minor-fareast;mso-hansi-font-family:微软雅黑;color:black">热线客服</span><span lang="EN-US" style="font-family:&quot;微软雅黑&quot;,sans-serif;mso-fareast-font-family:宋体;
    mso-fareast-theme-font:minor-fareast;color:black"><o:p></o:p></span></p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">服务时间：<span lang="EN-US">8</span>：
                <span
                    lang="EN-US">00 - 24</span>：<span lang="EN-US">00 7*16</span>小时<span lang="EN-US"><o:p></o:p></span></span>
            </p>
            <p>
    
            </p>
            <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">联系方式：<span lang="EN-US">xxxxxxxxx<o:p></o:p></span></span>
            </p>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 21">
            <h2 style="margin: 0px 0px 30px; padding: 0px; font-size: 36px; text-align: center; color: rgb(0, 0, 0); font-family: 微软雅黑;">万联平台简介</h2>
            <div class="word" style="line-height: 12px;">
                <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">xxxxxxxxxxxxxxxxxxxxxx<span lang="EN-US">25</span>xxxxxxxxx
                    <span
                        lang="EN-US">2017</span>xxxxxxxxxx<span lang="EN-US"><o:p></o:p></span></span>
                </p>
                <p style="text-indent: 28px; margin-bottom: 30px; padding: 0px; line-height: 30px;">
                </p>
                <p class="MsoNormal" style="text-indent:13.5pt;mso-char-indent-count:1.5"><span style="font-size: 9pt; font-family: 宋体; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">万联平台实行集线上精品、线下精品、为一体的独特发展模式，秉承美罗<span lang="EN-US">25</span>年高端百货经营理念，以
                    <span
                        lang="EN-US">100%</span>官方正品、根据最新的潮流趋势网罗各大时尚名品<span lang="EN-US">,</span>与全国众多高端百货战略结盟，为顾客提供一流的时尚精品购物体验，努力打造成为时尚精品网站的领导者。<span lang="EN-US"><o:p></o:p></span></span>
                </p>
            </div>
        </div>
    
        <div class="body" v-else-if="this.wuliuType == 22">
            <p class="MsoNormal" align="left" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><b><span style="font-size: 12pt; font-family: 宋体; color: rgb(85, 85, 85);">广告服务</span></b><b><span lang="EN-US" style="font-size: 12pt; font-family: Tahoma, sans-serif; color: rgb(85, 85, 85);"><o:p></o:p></span></b></p>
            <p style="line-height: 17.1429px;"></p>
            <p class="MsoNormal" align="left" style="margin-bottom: 15pt; line-height: 15pt; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><span style="font-size: 9pt; font-family: 宋体; color: rgb(85, 85, 85);">亲，可以联系我们的客服人员哦！</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wuliuHelp",
        props: ["wuliuType"]
    }
</script>

<style>
    
</style>
