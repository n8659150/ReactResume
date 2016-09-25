var Resume = React.createClass({
	render: function(){
		return (
			<div>
				<main className="container" style={{backgroundColor:this.props.BGColor}}>
				{/*
					ResumeHeader
					BGColor="头部背景颜色"
					TextColor="头部文字颜色"(需同时更改HeaderTitle和HeaderContact中的文字颜色) 
				*/}
				<ResumeHeader BGColor="#00487e" TextColor="#f6fff6" />
				<ResumeBody />
				</main>
				{/*
					底部计数器
					align,border无需更改
					YourAmazingCounterURL="你在amazingcounters.com上申请的地址"
				*/}
				<ResumeFooter 
					align="center" 
					border="0" 
					YourAmazingCounterURL="http://cc.amazingcounters.com/counter.php?i=3206089&c=9618580" />
			</div>
		);
	}
});

var ResumeHeader = React.createClass({
	render: function(){
		return (
		<div>
			<header style={{backgroundColor:this.props.BGColor,color:this.props.TextColor}}>
			{/*
				HeaderProfile
				ProfileIMG="你的头像地址"
			*/}
			<HeaderProfile 
				ProfileIMG="static/jackli-profile.jpg" 
				Alt="ooJacklioO"/>
			{/*
				HeaderTitle
				HeaderContact
				按需更改即可
				如没有此项账号，直接去除即可
			*/}
		    <HeaderTitle 
		    	Name="李暘"
		    	Position="前端工程师" 
		    	TextColor="#f6fff6" />
			<HeaderContact 
				MailTo="mailto:jackli900421@hotmail.com" 
				EmailAddress="jackli900421@hotmail.com"
				Alt="ooJacklioO" 
				Phone="86-13585976350"
				Github="https://github.com/n8659150" 
				TextColor="#f6fff6" />
			</header>
		</div>
		);
	}
});

var HeaderProfile = React.createClass({
	render: function(){
		return (
			<div>
			<figure className="header-profile"><img src={this.props.ProfileIMG} alt={this.props.Alt} className="profile-img visible-print" />
			</figure>
			</div>
		)
	}
});

var HeaderTitle = React.createClass({
	render: function(){
		return (
			<div>
			<section className="title">
		    <h1 style={{color:this.props.TextColor}}>{this.props.Name}</h1>
			<h2>{this.props.Position}</h2>
			</section>
			</div>
		)
	}
});

var HeaderContact = React.createClass({
	render: function(){
		return (
			<div>
			<address>
				<ul className="contact">
					<li className="contact-email"><a style={{color:this.props.TextColor}} href={this.props.MailTo}>{this.props.EmailAddress}</a></li>
					<li className="contact-phone">{this.props.Phone}</li>
					<li className="contact-github"><a href={this.props.Github}></a>{this.props.Github}</li>
				</ul>
			</address>
			</div>
		);
	}
});

var ResumeBody = React.createClass({
	render: function(){
		return (
			<div>
				<article className="content row">
				<article className="column-6 first column">
					<Education />
					<Language />
					<Experience />
				</article>
				<article className="column-6 last column">
					<Skill />
					{/*
						ContactMe
						QRCodeSrc="你的二维码地址"
					*/}
					<ContactMe Title="与我联系" EngTitle="ContactMe" QRCodeSrc="static/jackli_qr.png" Alt="ooJacklioO" />
				</article>
				</article>
			</div>
		);
	}
});

var Education = React.createClass({
	render: function(){
		return (
			<div>
				<section className="education">
				{/*
					以下各项按需更改即可
				*/}
				<EducationTitle 
					Title="教育经历" 
					EngTitle="Education" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						{/*
						Unit1And2,3And4
						传入的是数组
						一组2门课程
						*/}
						<Postgraduate 
							TimeFrom="2015" 
							TimeTo="2016" 
							UniName="昆士兰科技大学"
							UniLogo="static/QUT-logo.png" 
							Major="数据科学" 
							Degree="硕士" 
							YourGPA="5.91" 
							TotalGPA="7.0" 
							WellDoneUnits="高分科目"
							Units1And2={['移动网络工程，','学术研究实践']}
							Units3And4={['普适移动系统开发，','毕业设计项目1，2']} />
						<Undergraduate 
							TimeFrom="2012" 
							TimeTo="2014" 
							UniName="昆士兰科技大学" 
							UniLogo="static/QUT-logo.png" 
							Major="信息科技" 
							Degree="学士" 
							YourGPA="5.91" 
							TotalGPA="7.0" 
							WellDoneUnits="高分科目"
							Units1And2={['电子商业网站开发，','网页设计与开发']}
							Units3And4={['数据库设计，','游戏产业入门']} />
					</ul>
				</div>
				</section>
			</div>
		);
	}
});

var EducationTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
				<span className="sec-title-ch">{this.props.Title}</span>
				<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
			</div>
		)
	}
});

var Postgraduate = React.createClass({
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name" style={{backgroundImage:'url(' + this.props.UniLogo + ')'}}>{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major}<span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
});

var Undergraduate = React.createClass({
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name" style={{backgroundImage:'url(' + this.props.UniLogo + ')'}}>{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major}<span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
});

var Language = React.createClass({
	render: function(){
		return (
			<div>
				<section className="language">
				<LanguageTitle 
					Title="语言水平" EngTitle="Language" />
				<div className="sec-content">
					<dl className="language-certificates">
						{/*
						通过定义Percentage中的百分比数值来指定进度条高亮部分的长度,极值100%
						*/}
						<Language1 
							Name="国语" 
							Percentage="95%" 
							Level="精通" />
						<Language2 
							Name="英语" 
							Percentage="85%" 
							Level="熟练" />
						<Language3 
							Name="沪语" 
							Percentage="99%" 
							Level="地道" />
					</dl>
				</div>
				<AdditionalDesc />
				</section>
			</div>
		);
	}
});

var LanguageTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
				<span className="sec-title-ch">{this.props.Title}</span>
				<span className="sec-title-en">{this.props.EngTitle}</span></h3>
			</div>
			</div>
		)
	}
});

var Language1 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var Language2 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var Language3 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var AdditionalDesc = React.createClass({
	render: function(){
		return (
			<div>
			<ul className="language-description">
				{/*
					描述性文字需直接在下面3列li标签中更改，需要加粗的文字用strong标签包起
				*/}
				<li className="language-desc-item">能够<strong>流畅阅读</strong>大部分英文网页，理解<strong>技术类</strong>官方文档</li>
				<li className="language-desc-item">能够用英语交流并讨论技术类问题</li>
				<li className="language-desc-item">能够<strong>无字幕观看</strong>并<strong>理解</strong>英文版网课或技术类发布会视频</li>
			</ul>  
			</div>
		);
	}
});

var Experience = React.createClass({
	render: function(){
		return (
			<div>
			<section className="experience">
				<ExperienceTitle 
					Title="项目与工作经验" 
					EngTitle="Experience" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						<Job1 
							CompanyName="Tekkers" 
							Location="布里斯班" 
							TimeFrom="2015.07"
							TimeTo="至今"
							JobTitle="前端工程师"
							Subtitle="经手项目" />
						<Job2 
							CompanyName="广联达兴安得力" 
							Location="上海" 
							TimeFrom="2013.11" 
							TimeTo="2014.01" 
							JobTitle="网页设计与重构（实习）" />
						{/*
						Project 1,2 
						SourceCodeURL="源代码链接"
						DemoURL="Demo链接"
						若无,可省略
						*/}
						<Project1 
							Subtitle="个人项目" 
							ProjectName="ProjectMinder"
							SourceCodeURL="https://github.com/n8659150/ProjectMinderWebApp" 
							DemoURL="https://projectminder.firebaseapp.com" />
						<Project2 
							Subtitle="个人项目"
							ProjectName="ProjectMinderMobile"
							SourceCodeURL="https://github.com/n8659150/ProjectMinderMobile"/>
					</ul>
				</div>
			</section>
			</div>
		);
	}
});

var ExperienceTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
					<span className="sec-title-ch">{this.props.Title}</span>
					<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
			</div>
		);
	}
});

var Job1 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-internship">
				<h3 className="timeline-title"><span className="experience-place">{this.props.CompanyName}<span className="spaceFix"></span>-<span className="spaceFix"></span>{this.props.Location}</span><time className="experience-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}</time></h3>
				<dl className="experience-description timeline-content">
					<dt className="experience-position">{this.props.JobTitle}</dt>
					<dd className="experience-task">
					<strong>分析项目需求，制定计划</strong>并按主流项目开发流程<strong>（敏捷开发）</strong>实现前端<strong>组件</strong>的<strong>开发与维护</strong>，与后端工程师<strong>配合</strong>实现项目<strong>功能对接</strong>
					</dd>
					<dt className="experience-position">{this.props.Subtitle}</dt>
					<dd className="experience-task"><strong>手机扫码</strong>点餐应用（支持iOS<span className="spaceFix"></span>/<span className="spaceFix"></span>安卓）
					</dd>
					<dd className="experience-task">澳大利亚<strong>著名面包店BreadTop</strong>面包供应商的<strong>订单管理系统</strong>
					</dd>
					<dd className="experience-task">澳大利亚热销净水器品牌Shield<span className="spaceFix"></span>Filter<strong>电商官网</strong>
					</dd>
				</dl>
			</li>
		)
	}
});

var Job2 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-internship">
				<h3 className="timeline-title"><span className="experience-place">{this.props.CompanyName}<span className="spaceFix"></span>-<span className="spaceFix"></span>{this.props.Location}</span><time className="experience-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}</time></h3>
				<dl className="experience-description timeline-content">
					<dt className="experience-position">{this.props.JobTitle}</dt>
					<dd className="experience-task">协助完成公司<strong>官网文库</strong>及公司旗下<strong>重要业务网站</strong>“平方建材网”的<strong>改版设计</strong>
					</dd>
					<dd className="experience-task">所设计的文库界面<strong>获得leader认可</strong>并列入征选范围
					</dd>
				</dl>
			</li>
		)
	}
});

var Project1 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-project">
			<h3 className="timeline-title"><span className="experience-project-type">{this.props.Subtitle}</span><span className="experience-title-aside"><a href={this.props.SourceCodeURL} className="experience-project-link">源代码</a><a href={this.props.DemoURL} className="experience-project-link">Demo</a></span></h3>
			<dl className="experience-description timeline-content">
				<dt className="experience-project-name">{this.props.ProjectName}</dt>
				<dd className="experience-task">专为<strong>昆士兰科技大学</strong>科技工程学院定制开发的<strong>项目信息管理系统</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>用户验证</strong>模块，项目信息<strong>增删改</strong>模块，系统<strong>界面</strong>，<strong>表单</strong>，<strong>注册/登录</strong>及其他相关页面的<strong>设计与开发</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成后端<strong>数据库</strong>与前端页面的<strong>对接</strong>与<strong>调试</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>20分钟英语</strong>项目汇报演讲及<strong>12000字英语</strong>项目报告
				</dd>
			</dl>
			</li>
		)
	}
});

var Project2 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-project">
			<h3 className="timeline-title"><span className="experience-project-type">{this.props.Subtitle}</span><span className="experience-title-aside"><a href={this.props.SourceCodeURL} className="experience-project-link">源代码</a></span></h3>
			<dl className="experience-description timeline-content">
				<dt className="experience-project-name">{this.props.ProjectName}</dt>
				<dd className="experience-task">Project<span className="spaceFix"></span>Minder项目信息管理系统的<strong>配套手机应用</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成系统<strong>原有模块</strong>，新增<strong>“用户会议管理”</strong>，<strong>“学生地点定位”模块</strong>，<strong>手机端</strong>界面的<strong>移植</strong>，<strong>设计</strong>，<strong>调试</strong>和<strong>二次开发</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>20分钟英语</strong>项目汇报演讲及<strong>10000字英语</strong>项目报告
				</dd>
				<dd className="experience-task">项目汇报演讲获导师<strong>满分好评</strong>并考虑作为<strong>学校现有系统的新模块部署</strong>
				</dd>
			</dl>
			</li>

		)
	}
});

var Skill = React.createClass({
	render: function(){
		return (
			<div>
			<section className="skills">
				<SkillTitle 
					Title="技能" 
					EngTitle="skill" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						<li className="timeline-item skills-frontend">
						<SkillType1 
							TypeName="Web前端" />
						{/*
							技能描述需直接在dt和dd标签中更改，需要加粗的部分用strong标签包起
						*/}
						<dl className="skills-description timeline-content">
							<dt className="skills-item-summary"><strong>HTML</strong><span className="spaceFix"></span>/<span className="spaceFix"></span><strong>CSS</strong></dt>
							<dd className="skills-item-description"><span>能够编写符合语义的<strong>HTML</strong>，模块化，高复用性的<strong>CSS</strong>并注重代码<strong>整洁和可读性</strong></span></dd><dd className="skills-item-description"><span>对于<strong>HTML5</strong>/<strong>CSS3</strong>的新特性有一定了解，并在以往项目中有使用经验</span></dd>
							<dt className="skills-item-summary"><strong>JavaScript</strong></dt>
							<dd className="skills-item-description"><span>熟悉<strong>Javascript</strong>语法规则，对<strong>JavaScript编译技术</strong>有基本的了解，大学所修编译原理课程中参与过<strong>JavaScript编译器</strong>DEMO（团队作业）的编写</span></dd>
							<dt className="skills-item-summary"><strong>DOM</strong><span className="spaceFix"></span>/<span className="spaceFix"></span><strong>BOM</strong><span className="spaceFix"></span>及常见<span className="spaceFix"></span><strong>Web<span className="spaceFix"></span>API</strong></dt>
							<dd className="skills-item-description"><span>熟悉原生<strong>DOM</strong>与<strong>BOM</strong>常见方法，并能根据实际情况分析，以<strong>性能</strong>为最高优先级挑选出<strong>最优方法</strong>，具有基于热门<strong>JS框架</strong>的<strong>WEB<span className="spaceFix"></span>APP</strong>以及<strong>手机端APP</strong>的开发经验</span></dd>
							<dt className="skills-item-summary">前端工程实践</dt>
							<dd className="skills-item-description"><span>使用<strong>Bootstrap</strong>+<strong>AngularJS</strong>编写过具有用户验证，用户分级，CRUD功能的单页应用，熟悉<strong>MVC</strong>模型并具有相关项目开发经验</span></dd><dd className="skills-item-description"><span>熟悉<strong>ng-Cordova</strong>/<strong>Ionic</strong>手机端框架的使用和定制，对于手机端/网页端应用的特性差异以及UI组件使用有自己的见解，具有混合类手机应用的项目开发经验</span></dd><dd className="skills-item-description"><span>对于<strong>Less</strong>/<strong>Sass</strong>等样式预处理语言有基本了解</span></dd><dd className="skills-item-description"><span>日常使用<strong>npm</strong>模块打包工具通过云端获取所需模块，提升开发效率</span></dd><dd className="skills-item-description"><span>对于网页<strong>兼容性处理</strong>、前端<strong>性能优化</strong>具有基本的了解并乐于在项目中尝试使用</span></dd>
						</dl>
						</li>
						<li className="timeline-item skills-backend">
						<SkillType2 
							TypeName="Web后端" />
						<dl className="skills-description timeline-content">
							<dt className="skills-item-summary"><strong>后端云数据库（FireBase）</strong></dt>
							<dd className="skills-item-description"><span>具有多次以<strong>Firebase</strong>作为云数据库的项目<strong>开发经验</strong></span></dd><dd className="skills-item-description"><span>能够使用<strong>Firebase官方API</strong>实现前端页面与后端数据库的<strong>基本交互</strong>，并可根据所需要的数据形式确定合适的数据类型并提出<strong>数据存取方案建议</strong></span></dd><dd className="skills-item-description"><span>对于相类似的后端云服务可以<strong>迅速上手</strong></span></dd>
						</dl>
						</li>
						<li className="timeline-item skills-miscellaneous">
						<SkillType3 
							TypeName="其他" />
						<ul className="skills-description skills-miscellaneous timeline-content">
							<li className="skills-item-description"><span>熟悉<strong>敏捷开发</strong>流程并具有相关项目管理经验</span></li>
							<li className="skills-item-description"><span>代码<strong>缩进强迫症</strong>患者</span></li>
							<li className="skills-item-description"><span>对于<strong>面向对象编程</strong>及相关编程语言（C#,PYTHON）具有一定程度的了解和实践</span></li>
							<li className="skills-item-description"><span>具备基本的<strong>Web安全</strong>知识和防范意识</span></li>
							<li className="skills-item-description"><span>日常使用<strong>Git</strong>和<strong>Sublime<span className="spaceFix"></span>Text</strong>作为开发工具</span></li>
							<li className="skills-item-description"><span>能够使用<strong>Photoshop</strong>完成切图任务，并可实现基本的网页设计，具有一定的审美能力</span></li>
							<li className="skills-item-description"><span>2008年开始<strong>自学吉他</strong>，2009年开始接触<strong>词曲创作</strong>，现创作歌曲超过<strong>20首</strong>，优秀作品已在热门音乐平台上线</span></li>
							<li className="skills-item-description"><span>素食主义者+基督徒</span></li>
						</ul>
						</li>
					</ul>
				</div>
			</section>
			</div>
		);
	}
});

var SkillTitle = React.createClass({
	render: function(){
		return (
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
					<span className="sec-title-ch">{this.props.Title}</span>
					<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
		);
	}
});

var SkillType1 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var SkillType2 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var SkillType3 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var ContactMe = React.createClass({
	render: function(){
		return(
			<div>
			<section className="language">
				<div className="sec-title-wrapper">
					<h3 className="sec-title">
						<span className="sec-title-ch">{this.props.Title}</span>
						<span className="sec-title-en">{this.props.EngTitle}</span>
					</h3>
				</div>
				<figure className="footer-qr"><img src={this.props.QRCodeSrc} alt={this.props.alt} className="qr-img visible-print" /></figure>
			</section>
			</div>
		);
	}
});

var ResumeFooter = React.createClass({
	render: function(){
		return (
		<div>
			<footer>
			<div align={this.props.align}>
			<img border={this.props.border} src={this.props.YourAmazingCounterURL} alt="AmazingCounters.com" />
			</div>
			</footer>
		</div>
		);
	}
});


ReactDOM.render(
	  //BGColor="页面主背景色"
      <Resume BGColor="#f6fff6" />,
      document.getElementById('Resume')
    );