(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(e,n,s){"use strict";s.r(n);var o=s(1),d=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"nodejs文件目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs文件目录","aria-hidden":"true"}},[e._v("#")]),e._v(" nodejs文件目录")]),s("h2",{attrs:{id:"dirname和-filename和process-cwd-三者的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dirname和-filename和process-cwd-三者的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" __dirname和__filename和process.cwd()三者的区别")]),s("p",[e._v("1.process cwd() 方法返回 Node.js 进程当前工作的目录")]),s("p",[e._v("例：我在F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process 这个文件加下面创建了一个test.js在该js文件中写下下面的代码，然后右键 run test.js")]),s("p",[e._v("const cwd = process.cwd();\nconsole.log(cwd);")]),s("p",[e._v("输出如下 F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process")]),s("p",[e._v("2.__dirname 是node的一个全局变量，获得当前文件所在目录的完整目录名\n还在上面的js文件中输入一下代码\nconsole.log(__dirname)\n输出如下 F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process")]),s("p",[e._v("现在一看感觉上面两个方法是一样的，其实不是。node.js进程当前工作的目录有可能不是该文件所在目录的完整目录。例如：我用node webpack ..打包了一个应用程序，\n我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中console.log(cwd)\n在完整的这个页面架构中执行启动这个项目的命令，则对应的cwd就是当前项目所在的绝对路径,而不是应用程序的路径")]),s("p",[e._v("3.__filename 也是node的全局变量 Node.js中，在任何模块文件内部，可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名")]),s("p",[e._v("console.log(__filename)\nF:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process\\test.js")])])}],!1,null,null,null);n.default=d.exports}}]);