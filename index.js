var Resume = React.createClass({
	render: function(){
		return (
			<div>
				<main>
				<ResumeHeader />
				<ResumeBody />
				</main>
			</div>
		);
	}
});

var ResumeHeader = React.createClass({
	render: function(){
		return (
		<div>
			<header>
			<HeaderProfile />
		    <HeaderTitle />
			<HeaderContact />
			</header>
		</div>
		);
	}
});

var HeaderTitle = React.createClass({
	getDefaultProps: function() {
	    return {
	      Name: '李暘',
	      Position: '前端工程师'
	    };
  	},
	render: function(){
		return (
			<div>
			<section className="title">
		    <h1>{this.props.Name}</h1>
			<h2>{this.props.Position}</h2>
			</section>
			</div>
		)
	}
})

var HeaderProfile = React.createClass({
	getDefaultProps: function() {
	    return {
	      ProfileIMG: 'static/jackli-profile.jpg',
	      Alt: 'ooJacklioO'
	    };
  	},
	render: function(){
		return (
			<div>
			<figure className="header-profile"><img src={this.props.ProfileIMG} alt={this.props.Alt} className="profile-img visible-print" />
			</figure>
			</div>
		)
	}
})

var HeaderContact = React.createClass({
	getDefaultProps: function() {
	    return {
	      MailTo: 'mailto:jackli900421@hotmail.com',
	      EmailAddress: 'jackli900421@hotmail.com',
	      Alt: 'ooJacklioO',
	      Phone: '86-13585976350',
	      Github: 'https://github.com/n8659150'
	    };
  	},
	render: function(){
		return (
			<div>
			<address>
				<ul className="contact">
					<li className="contact-email"><a href={this.props.MailTo}>{this.props.EmailAddress}</a></li>
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
				<EducationTitle />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						<Postgraduate />
						<Undergraduate />
					</ul>
				</div>
				</section>
			</div>
		);
	}
});

var EducationTitle = React.createClass({
	getDefaultProps: function() {
	    return {
	      Title: '教育经历',
	      EngTitle: 'Education'
	    };
  	},
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
})

var Postgraduate = React.createClass({
	getDefaultProps: function() {
	    return {
	      TimeFrom: '2015',
	      TimeTo: '2016',
	      UniName: '昆士兰科技大学',
	      Major: '数据科学 ',
	      Degree: '硕士',
	      YourGPA: '5.91',
	      TotalGPA: '7.0',
	      WellDoneUnits: '高分科目',
	      Units1And2: ['移动网络工程，','学术研究实践'],
	      Units3And4: ['普适移动系统开发，','毕业设计项目1，2']
	    };
  	},
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name">{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major} <span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
})

var Undergraduate = React.createClass({
	getDefaultProps: function() {
	    return {
	      TimeFrom: '2012',
	      TimeTo: '2014',
	      UniName: '昆士兰科技大学',
	      Major: '信息科技 ',
	      Degree: '学士',
	      YourGPA: '5.44',
	      TotalGPA: '7.0',
	      WellDoneUnits: '高分科目',
	      Units1And2: ['电子商业网站开发，','网页设计与开发'],
	      Units3And4: ['数据库设计，','游戏产业入门']
	    };
  	},
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name">{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major} <span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
})


var Language = React.createClass({
	render: function(){
		return (
			<div>
				<section className="language">
				<LanguageTitle />
				<div className="sec-content">
					<dl className="language-certificates">
						<Language1 />
						<Language2 />
						<Language3 />
					</dl>
				</div>
				<AdditionalDesc />
				</section>
			</div>
		);
	}
});

var LanguageTitle = React.createClass({
	getDefaultProps: function() {
	    return {
	      Title: '语言水平',
	      EngTitle: 'Language'
	    };
  	},
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
})

var Language1 = React.createClass({
	getDefaultProps: function() {
	    return {
	      Name: '国语',
	      Percentage: '95%',
	      Level: '精通'
	    };
  	},
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
})

var Language2 = React.createClass({
	getDefaultProps: function() {
	    return {
	      Name: '英语',
	      Percentage: '85%',
	      Level: '熟练'
	    };
  	},
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
})

var Language3 = React.createClass({
	getDefaultProps: function() {
	    return {
	      Name: '沪语',
	      Percentage: '99%',
	      Level: '地道'
	    };
  	},
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
})

var AdditionalDesc = React.createClass({
	render: function(){
		return (
			<div>
			<ul className="language-description">
				<li className="language-desc-item">能够<strong>流畅阅读</strong>大部分英文网页，理解<strong>技术类</strong>官方文档</li>
				<li className="language-desc-item">能够用英语交流并讨论技术类问题</li>
				<li className="language-desc-item">能够<strong>无字幕观看</strong>并<strong>理解</strong>英文版网课或技术类发布会视频</li>
			</ul>  
			</div>
		);
	}
})


ReactDOM.render(
      <Resume />,
      document.getElementById('Resume')
    );