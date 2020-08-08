(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{412:function(t,a,e){"use strict";e.r(a);var s=e(12),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"package与jar包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package与jar包"}},[t._v("#")]),t._v(" package与jar包")]),t._v(" "),e("blockquote",[e("p",[t._v("引用自"),e("a",{attrs:{href:"https://blog.csdn.net/wu_lai_314/article/details/8654461",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA 包与包之间访问（package）"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"package的用处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package的用处"}},[t._v("#")]),t._v(" package的用处")]),t._v(" "),e("p",[t._v("Java中的package用处和特点有：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对类文件进行分类管理。")])]),t._v(" "),e("li",[e("p",[t._v("给类提供多层命名空间。")])]),t._v(" "),e("li",[e("p",[t._v("写在程序文件的第一行。")])]),t._v(" "),e("li",[e("p",[t._v("类名的全称是：包名.类名")])]),t._v(" "),e("li",[e("p",[t._v("包也是一种封装形式。")])])]),t._v(" "),e("h2",{attrs:{id:"package之间的访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package之间的访问"}},[t._v("#")]),t._v(" package之间的访问")]),t._v(" "),e("p",[t._v("包之间访问时，需要遵循以下规则：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("包与包之间进行访问，被访问的包中的类以及类中的成员，需要用public修饰。")])]),t._v(" "),e("li",[e("p",[t._v("不同包中的子类可以直接访问父类中被protected修饰的成员。")])]),t._v(" "),e("li",[e("p",[t._v("包与包之间可以使用的权限只有两种，public和protected。")])])]),t._v(" "),e("p",[t._v("访问权限具体的对应关系如下表：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("访问类-被访问类的修饰符-能否访问")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("public")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("protected")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("private")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("同一类中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),e("tr",[e("td",[t._v("同一包中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),e("tr",[e("td",[t._v("子类")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])]),t._v(" "),e("tr",[e("td",[t._v("不同包类中")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("×")])])])]),t._v(" "),e("h2",{attrs:{id:"import导入package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import导入package"}},[t._v("#")]),t._v(" import导入package")]),t._v(" "),e("p",[t._v("通过import可以简化类名的书写。包名一般使用url，因为url具有唯一性，例如："),e("code",[t._v("package com.qq.demo;")])]),t._v(" "),e("p",[t._v("导包的写法为："),e("code",[t._v("import com.qq.demo.*;")]),t._v("，其中 "),e("code",[t._v("*")]),t._v(" 是通配符，表示导入 com.qq.demo包下的所有类，开发中推荐使用导入具体类名的写法，需要哪个类就导入哪个类，可以节省内存开销，例如："),e("code",[t._v("import com.qq.demo.ClassA;")])]),t._v(" "),e("p",[t._v("当我们在一个类中导入了两个包，并且这两个包中有相同的类ClassA存在，那么在使用ClassA类的时候必须知名使用哪个包下的ClassA类。例如：")]),t._v(" "),e("div",{staticClass:"language-Java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("package1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassA")]),t._v(" a1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" package1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npackage2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassA")]),t._v(" a2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" package2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"jar包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jar包"}},[t._v("#")]),t._v(" jar包")]),t._v(" "),e("p",[t._v("jar包是Java的压缩包，主要作用有：1、方便项目的携带；2、方便使用，只要在classpath中设置jar路径即可使用jar中的Java类。")])])}),[],!1,null,null,null);a.default=r.exports}}]);