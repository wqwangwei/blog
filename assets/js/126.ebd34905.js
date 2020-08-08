(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{326:function(v,_,t){"use strict";t.r(_);var a=t(12),d=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"基本数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[v._v("#")]),v._v(" 基本数据类型")]),v._v(" "),t("blockquote",[t("p",[v._v("引用自"),t("a",{attrs:{href:"http://www.runoob.com/java/java-basic-datatypes.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 基本数据类型"),t("OutboundLink")],1)])]),v._v(" "),t("p",[v._v("变量就是申请内存来储存值。当创建变量得时候，需要在内存中申请空间。内存管理系统根据变量的类型为其分配存储空间，分配的空间只能用来储存该类型数据。")]),v._v(" "),t("p",[v._v("Java中有两大数据类型：内置数据类型、引用数据类型。")]),v._v(" "),t("h2",{attrs:{id:"内置数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置数据类型"}},[v._v("#")]),v._v(" 内置数据类型")]),v._v(" "),t("p",[v._v("Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("长度")]),v._v(" "),t("th",[v._v("最小值")]),v._v(" "),t("th",[v._v("最大值")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("示例")]),v._v(" "),t("th",[v._v("备注")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("byte")]),v._v(" "),t("td",[v._v("8位")]),v._v(" "),t("td",[v._v("-128（-2^7）")]),v._v(" "),t("td",[v._v("127（2^7 - 1）")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("byte a = 100, byte b = -50")]),v._v(" "),t("td",[v._v("byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一")])]),v._v(" "),t("tr",[t("td",[v._v("short")]),v._v(" "),t("td",[v._v("16位")]),v._v(" "),t("td",[v._v("-2^15")]),v._v(" "),t("td",[v._v("2^15 - 1")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("short s = 1000, short r = -20000")]),v._v(" "),t("td",[v._v("Short 数据类型也可以像 byte 那样节省空间，一个short变量是int型变量所占空间的二分之一")])]),v._v(" "),t("tr",[t("td",[v._v("int")]),v._v(" "),t("td",[v._v("32位")]),v._v(" "),t("td",[v._v("-2^31")]),v._v(" "),t("td",[v._v("2^31 - 1")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("int a = 100000, int b = -200000")]),v._v(" "),t("td",[v._v("一般地整型变量默认为 int 类型")])]),v._v(" "),t("tr",[t("td",[v._v("long")]),v._v(" "),t("td",[v._v("64位")]),v._v(" "),t("td",[v._v("-2^63")]),v._v(" "),t("td",[v._v("2^63 -1")]),v._v(" "),t("td",[v._v("0L")]),v._v(" "),t("td",[v._v("long a = 1000000L, long b = -2000000L")]),v._v(" "),t("td",[v._v("主要使用在需要比较大整数的系统上")])]),v._v(" "),t("tr",[t("td",[v._v("float")]),v._v(" "),t("td",[v._v("32位、单精度、符合IEEE 754标准的浮点数")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("0.0f")]),v._v(" "),t("td",[v._v("float f1 = 234.5f")]),v._v(" "),t("td",[v._v("float 在储存大型浮点数组的时候可节省内存空间，浮点数不能用来表示精确的值，如货币")])]),v._v(" "),t("tr",[t("td",[v._v("double")]),v._v(" "),t("td",[v._v("64位、双精度、符合IEEE 754标准的浮点数")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("0.0d")]),v._v(" "),t("td",[v._v("doble d1 = 123.4")]),v._v(" "),t("td",[v._v("浮点数的默认类型为double类型，double类型同样不能表示精确的值，如货币")])]),v._v(" "),t("tr",[t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("1位")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td",[v._v("false")]),v._v(" "),t("td",[v._v("boolean isReal = true")]),v._v(" "),t("td",[v._v("boolean类型只有两个取值：true 和 false；该类型只作为一种标志来记录 true/false 情况")])]),v._v(" "),t("tr",[t("td",[v._v("char")]),v._v(" "),t("td",[v._v("16位Unicode字符")]),v._v(" "),t("td",[v._v("\\u0000（0）")]),v._v(" "),t("td",[v._v("\\uffff（65,535）")]),v._v(" "),t("td",[v._v("无")]),v._v(" "),t("td",[v._v("char letter = 'A'")]),v._v(" "),t("td",[v._v("char 数据类型可以储存任何字符")])])])]),v._v(" "),t("p",[v._v('float和double的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示E之前的数字要乘以10的多少次方。比如3.14E3就是'),t("code",[v._v("3.14 × 10^3 = 3140")]),v._v("，3.14E-3 就是 "),t("code",[v._v("3.14 x 10^-3 = 0.00314")]),v._v("。")]),v._v(" "),t("p",[v._v("实际上，Java中还存在一种基本类型void，它也有对应的包装类 "),t("code",[v._v("java.lang.Void")]),v._v("，不过我么无法直接对它们进行操作。")]),v._v(" "),t("h2",{attrs:{id:"引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[v._v("#")]),v._v(" 引用类型")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Java中的引用类型变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如Employee、Puppy等。")])]),v._v(" "),t("li",[t("p",[v._v("对象、数组都是引用数据类型。")])]),v._v(" "),t("li",[t("p",[v._v("所有引用类型的默认值都是null。")])]),v._v(" "),t("li",[t("p",[v._v("一个引用变量可以用来引用任何与之兼容的类型。")])]),v._v(" "),t("li",[t("p",[v._v('示例：Site site = new Site("http://xxxx.com/")')])])]),v._v(" "),t("h2",{attrs:{id:"java常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java常量"}},[v._v("#")]),v._v(" Java常量")]),v._v(" "),t("p",[v._v("常量在程序运行时是不能被修改的。Java中使用 "),t("code",[v._v("final")]),v._v(" 关键字来修饰常量，声明方式和变量类似：")]),v._v(" "),t("div",{staticClass:"language-Java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("final")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("double")]),v._v(" PI "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("3.14159")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("h2",{attrs:{id:"十进制、16进制、8进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十进制、16进制、8进制"}},[v._v("#")]),v._v(" 十进制、16进制、8进制")]),v._v(" "),t("p",[v._v("byte、int、long、short都可以用十进制、16进制和8进制的方式来表示。前缀 "),t("code",[v._v("0")]),v._v(" 表示8进制，前缀 "),t("code",[v._v("0x")]),v._v(" 表示16进制。")]),v._v(" "),t("h2",{attrs:{id:"转义字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[v._v("#")]),v._v(" 转义字符")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("字符含义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("\\n")]),v._v(" "),t("td",[v._v("换行（0x0a）")])]),v._v(" "),t("tr",[t("td",[v._v("\\r")]),v._v(" "),t("td",[v._v("回车（0x0d）")])]),v._v(" "),t("tr",[t("td",[v._v("\\f")]),v._v(" "),t("td",[v._v("换页符（0x0c）")])]),v._v(" "),t("tr",[t("td",[v._v("\\b")]),v._v(" "),t("td",[v._v("退格（0x08）")])]),v._v(" "),t("tr",[t("td",[v._v("\\0")]),v._v(" "),t("td",[v._v("空字符（0x20）")])]),v._v(" "),t("tr",[t("td",[v._v("\\s")]),v._v(" "),t("td",[v._v("字符串")])]),v._v(" "),t("tr",[t("td",[v._v("\\t")]),v._v(" "),t("td",[v._v("制表符")])]),v._v(" "),t("tr",[t("td",[v._v('\\"')]),v._v(" "),t("td",[v._v("双引号")])]),v._v(" "),t("tr",[t("td",[v._v("\\'")]),v._v(" "),t("td",[v._v("单引号")])]),v._v(" "),t("tr",[t("td",[v._v("\\\\")]),v._v(" "),t("td",[v._v("反斜杠")])]),v._v(" "),t("tr",[t("td",[v._v("\\ddd")]),v._v(" "),t("td",[v._v("八进制字符（ddd）")])]),v._v(" "),t("tr",[t("td",[v._v("\\uxxxx")]),v._v(" "),t("td",[v._v("16进制Unicode字符（xxxx）")])])])]),v._v(" "),t("h2",{attrs:{id:"类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[v._v("#")]),v._v(" 类型转换")]),v._v(" "),t("p",[v._v("运算中，不同类型的数据先转化为同一类型，然后进行运算。")]),v._v(" "),t("p",[v._v("转换从低级到高级："),t("code",[v._v("byte, short, char -> int -> long -> float -> double")])]),v._v(" "),t("p",[v._v("数据类型转换必须满足如下规则：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("不能对boolean类型进行类型转换。")])]),v._v(" "),t("li",[t("p",[v._v("不能把对象类型转换成不相关类的对象。")])]),v._v(" "),t("li",[t("p",[v._v("在把容量大的类型转换为容量小的类型时必须使用强制类型转换。")])]),v._v(" "),t("li",[t("p",[v._v("转换过程中可能导致溢出或者损失精度。")])]),v._v(" "),t("li",[t("p",[v._v("浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入。")])])]),v._v(" "),t("p",[v._v("自动类型转换：必须满足转换前的数据类型的位数要低于转换后的数据类型。例如：short数据类型的位数为16位，就可以自动转换成位数为32的int类型，同样float数据类型的位数为32，可以自动转换为64位的double类型。")]),v._v(" "),t("p",[v._v("强制类型转换：1、转换的数据类型必须是兼容的；2、格式：(type) value。type是要强制转换类型后的目标数据类型。")]),v._v(" "),t("p",[v._v("隐性强制类型转换：1、整数的默认类型是int；2、浮点型不存在这种情况，因为在定义float类型时必须在数字后面跟上F或者f。")])])}),[],!1,null,null,null);_.default=d.exports}}]);