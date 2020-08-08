(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{416:function(t,v,_){"use strict";_.r(v);var r=_(12),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),_("h2",{attrs:{id:"java中的正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java中的正则表达式"}},[t._v("#")]),t._v(" Java中的正则表达式")]),t._v(" "),_("p",[t._v("正则表达式定义了字符串的模式，可以用来搜索、编辑或处理文本。")]),t._v(" "),_("p",[t._v("在Sun的Java JDK 1.4版本中，Java自带了支持正则表达式的包，位于"),_("code",[t._v("java.util.regex")]),t._v("，该包主要包括以下三个类：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("Pattern")]),t._v("类：Pattern对象是一个正则表达式的编译表示。Pattern类没有公共构造方法。要创建一个Pattern对象，必须要调用其公共静态的compile方法，它返回一个Pattern对象。该方法接收一个正则表达式作为它的第一个参数。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Matcher")]),t._v("类：Matcher对象是对输入字符串进行解释和匹配操作的引擎。与Pattern类一样，Matcher也没有公共构造方法，需要调用Pattern对象的matcher方法来获得一个Matcher对象。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("PatternSyntaxException")]),t._v("类：PatternSyntaxException是一个非强制异常类，它表示一个正则表达式模式中的语法错误。")])])]),t._v(" "),_("p",[t._v("Matcher类的常用方法：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("matches()：返回整个目标字符串与Pattern是否匹配")])]),t._v(" "),_("li",[_("p",[t._v("find()：返回与Pattern匹配的下一个子串")])]),t._v(" "),_("li",[_("p",[t._v("group()：返回上一次与Pattern匹配的子串中的内容。group是针对（）来说的，group（0）就是指的整个串，group（1） 指的是第一个括号里的东西，group（2）指的第二个括号里的东西")])]),t._v(" "),_("li",[_("p",[t._v("start()：返回上一次与Pattern匹配的子串在目标字符串中的开始位置")])]),t._v(" "),_("li",[_("p",[t._v("end()：返回上一次与Pattern匹配的子串在目标字符串中的结束位置加1")])])]),t._v(" "),_("h2",{attrs:{id:"正则表达式语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式语法"}},[t._v("#")]),t._v(" 正则表达式语法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("元字符")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("\\")]),t._v(" "),_("td",[t._v("将下一个字符标记符、或一个向后引用、或一个八进制转义符。例如，“\\n”匹配\\n。“\\n”匹配换行符。序列“\\”匹配“\\”而“(”则匹配“(”。即相当于多种编程语言中都有的“转义字符”的概念。")])]),t._v(" "),_("tr",[_("td",[t._v("^")]),t._v(" "),_("td",[t._v("匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“\\n”或“\\r”之后的位置。")])]),t._v(" "),_("tr",[_("td",[t._v("$")]),t._v(" "),_("td",[t._v("匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“\\n”或“\\r”之前的位置。")])]),t._v(" "),_("tr",[_("td",[t._v("*")]),t._v(" "),_("td",[t._v("匹配前面的子表达式任意次。例如，zo*能匹配“z”，“zo”以及“zoo”。*等价于{0,}")])]),t._v(" "),_("tr",[_("td",[t._v("+")]),t._v(" "),_("td",[t._v("匹配前面的子表达式一次或多次(大于等于1次）。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于{1,}。")])]),t._v(" "),_("tr",[_("td",[t._v("?")]),t._v(" "),_("td",[t._v("匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“do”或“does”中的“do”。?等价于{0,1}。")])]),t._v(" "),_("tr",[_("td",[t._v("{n}")]),t._v(" "),_("td",[t._v("n是一个非负整数。匹配确定的n次。例如，“o{2}”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个o。")])]),t._v(" "),_("tr",[_("td",[t._v("{n,}")]),t._v(" "),_("td",[t._v("n是一个非负整数。至少匹配n次。例如，“o{2,}”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有o。“o{1,}”等价于“o+”。“o{0,}”则等价于“o*”。")])]),t._v(" "),_("tr",[_("td",[t._v("{n,m}")]),t._v(" "),_("td",[t._v("m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次。例如，“o{1,3}”将匹配“fooooood”中的前三个o。“o{0,1}”等价于“o?”。请注意在逗号和两个数之间不能有空格。")])]),t._v(" "),_("tr",[_("td",[t._v("x|y")]),t._v(" "),_("td",[t._v('匹配x或y。例如，\'z|food\' 匹配"z"或"food"。\'(z|f)ood\' 匹配"zood"或"food"。')])]),t._v(" "),_("tr",[_("td",[t._v("[xyz]")]),t._v(" "),_("td",[t._v("字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”。")])]),t._v(" "),_("tr",[_("td",[t._v("[^xyz]")]),t._v(" "),_("td",[t._v("负值字符集合。匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”。")])]),t._v(" "),_("tr",[_("td",[t._v("[a-z]")]),t._v(" "),_("td",[t._v("字符范围。匹配指定范围内的任意字符。例如，“[a-z]”可以匹配“a”到“z”范围内的任意小写字母字符。")])]),t._v(" "),_("tr",[_("td",[t._v("[^a-z]")]),t._v(" "),_("td",[t._v("负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。")])]),t._v(" "),_("tr",[_("td",[t._v(".")]),t._v(" "),_("td",[t._v("可以匹配任何字符")])]),t._v(" "),_("tr",[_("td",[t._v("\\d")]),t._v(" "),_("td",[t._v("匹配一个数字字符。等价于[0-9]")])]),t._v(" "),_("tr",[_("td",[t._v("\\D")]),t._v(" "),_("td",[t._v("匹配一个非数字字符。等价于[^0-9]")])]),t._v(" "),_("tr",[_("td",[t._v("\\s")]),t._v(" "),_("td",[t._v("匹配所有的空白字符，包括空格、制表符、换页符、换行符、回车符 等等。等价于[ \\f\\n\\r\\t\\v]。")])]),t._v(" "),_("tr",[_("td",[t._v("\\S")]),t._v(" "),_("td",[t._v("匹配所有的非空白字符")])])])]),t._v(" "),_("p",[t._v("更多内容参考："),_("a",{attrs:{href:"http://www.runoob.com/java/java-regular-expressions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 正则表达式"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);