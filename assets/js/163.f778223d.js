(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{398:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"搭建基于-aria2-的下载机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建基于-aria2-的下载机"}},[s._v("#")]),s._v(" 搭建基于 Aria2 的下载机")]),s._v(" "),t("blockquote",[t("p",[s._v("参考："),t("a",{attrs:{href:"https://blog.csdn.net/kxwinxp/article/details/80288006",target:"_blank",rel:"noopener noreferrer"}},[s._v("树莓派3B+ 远程下载服务器（Aria2）"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"安装-aria2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-aria2"}},[s._v("#")]),s._v(" 安装 Aria2")]),s._v(" "),t("p",[s._v("使用以下命令安装 Aria2：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" aria2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"编辑-aria2-配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑-aria2-配置文件"}},[s._v("#")]),s._v(" 编辑 Aria2 配置文件")]),s._v(" "),t("p",[s._v("创建文件夹 "),t("code",[s._v("mkdir -p ~/.config/aria2")]),s._v("。")]),s._v(" "),t("p",[s._v("添加一个 Aria2 配置文件 "),t("code",[s._v("vim ~/.config/aria2/aria2.config")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("daemon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-user=user")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-passwd=passwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置加密的密钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("rpc-secret")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("secret\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许rpc")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable-rpc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许所有来源，web界面跨域权限需要设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("rpc-allow-origin-all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否启用https加密，启用之后要设置公钥、私钥的文件路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-secure=true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用加密设置公钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-certificate=/home/pi/.config/aria2/example.crt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用加密设置私钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-private-key=/home/pi/.config/aria2/example.key")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许外部访问，false的话只监听本地端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("rpc-listen-all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RPC端口，仅当默认端口被占用时修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpc-listen-port=6800")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最大同时下载数（任务数），建议值：3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max-concurrent-downloads")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#断点续传")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("continue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#同服务器连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max-connection-per-server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最小文件分片大小，下载线程数上限取决于能分出多少片，对于小文件重要")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("min-split-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("10M\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单文件最大线程数，建议值：5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载速度限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max-overall-download-limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单文件下载速度限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#max-download-limit=0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上传速度限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#max-overall-upload-limit=0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单文件上传速度限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("max-download-limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#断开速度过慢的连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#lowest-speed-limit=0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件保存路径，默认为当前启动位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/home/pi/downloads\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件预分配，能有效降低文件碎片，提高磁盘性能。缺点是预分配时间较长。所需时间：none < falloc ? truc << prealloc，falloc和trunc需要文件系统和内核支持")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("file-allocation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("prealloc\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不进行证书验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("check-certificate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存下载会话")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("save-session")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/home/pi/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config/aria2/aria2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("input-file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/home/pi/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config/aria2/aria2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#断电续传")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("save-session-interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("bt-tracker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br")])]),t("p",[s._v("设置好配置之后，还要创建该会话空白文件 "),t("code",[s._v("touch ~/.config/aria2/aria2.session")]),s._v("。")]),s._v(" "),t("p",[s._v("测试下 Aria2 是否启动成功 "),t("code",[s._v("aria2c --conf-path=/home/pi/.config/aria2/aria2.config")]),s._v("。用 "),t("code",[s._v("ps aux|grep aria2")]),s._v(" 看是否有进程启动，若有说明启动成功了。")]),s._v(" "),t("h2",{attrs:{id:"设置-aria2-开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-aria2-开机启动"}},[s._v("#")]),s._v(" 设置 Aria2 开机启动")]),s._v(" "),t("p",[s._v("Raspbian系统是使用 systemd 来管理服务的，所以我们需要创建并编辑 aria.service 文件："),t("code",[s._v("sudo nano /lib/systemd/system/aria.service")]),s._v("，输入以下内容并保存：")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Unit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("Aria2 Service\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("network"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("pi\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("forking\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/usr/bin/aria2c --conf-path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("/home/pi/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config/aria2/aria2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("multi-user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("重新载入服务，并设置开机启动：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" aria\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("查看 Aria2 服务状态：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status aria\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动、停止、重启 Aria2 服务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start、stop、restart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" aria\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"部署-ariang-web下载管理页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-ariang-web下载管理页面"}},[s._v("#")]),s._v(" 部署 AriaNg Web下载管理页面")]),s._v(" "),t("h3",{attrs:{id:"服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[s._v("#")]),s._v(" 服务端")]),s._v(" "),t("p",[s._v("安装 nginx："),t("code",[s._v("sudo apt install nginx")]),s._v("。")]),s._v(" "),t("p",[s._v("在 "),t("a",{attrs:{href:"https://github.com/mayswind/AriaNg/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("AriaNg下载页面"),t("OutboundLink")],1),s._v(" 下载最新的 "),t("code",[s._v("AraiNg-x.x.x-AllInOne.zip")]),s._v(" 压缩包。将压缩包内的 "),t("code",[s._v("index.html")]),s._v(" 解压到 "),t("code",[s._v("/var/www/html/aria-ng/")]),s._v(" 目录下。")]),s._v(" "),t("p",[s._v("创建并编辑 nginx 配置文件 "),t("code",[s._v("/etc/nginx/sites-enabled/aria")]),s._v("，输入以下内容并保存：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" aria2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("aria"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ng"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("使新增的 nginx 配置生效："),t("code",[s._v("sudo nginx -s reload")]),s._v("。")]),s._v(" "),t("p",[s._v("设置 nginx 开机启动："),t("code",[s._v("sudo systemctl enable nginx")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),t("p",[s._v("修改客户端 "),t("code",[s._v("hosts")]),s._v(" 文件以便使用 "),t("code",[s._v("aria2.pi.com")]),s._v(" 域名访问AriaNg管理界面。")]),s._v(" "),t("p",[s._v("例如："),t("code",[s._v("192.168.1.1\taria2.pi.com")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EAria2%E7%9A%84%E4%B8%8B%E8%BD%BD%E6%9C%BA/AriaNg%E4%B8%8B%E8%BD%BD%E9%A1%B5%E9%9D%A2.png",alt:"AriaNg下载页面"}})]),s._v(" "),t("p",[s._v("首次浏览时需要进入 AriaNg设置 -> RPC，填写服务端配置信息，特别是 Aria2 RPC 地址和Aria2 RPC 密钥。正确填写之后即可连接使用树莓派上的 Aria2 服务。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EAria2%E7%9A%84%E4%B8%8B%E8%BD%BD%E6%9C%BA/AriaNg-RPC%E8%AE%BE%E7%BD%AE.png",alt:"AriaNg-RPC设置"}})]),s._v(" "),t("h2",{attrs:{id:"设置-trackers-提升下载速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-trackers-提升下载速度"}},[s._v("#")]),s._v(" 设置 trackers 提升下载速度")]),s._v(" "),t("p",[s._v("trackers 清单地址："),t("a",{attrs:{href:"https://github.com/ngosang/trackerslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("trackerslist"),t("OutboundLink")],1),s._v("，推荐使用 "),t("strong",[s._v("tracker_best.txt")]),s._v("。")]),s._v(" "),t("p",[s._v("有两种设置 trackers 的方式：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("客户端进入 AriaNg -> Aria2 设置 -> BitTorrent 设置 -> BT 服务器地址（bt-tracker），填写 trackers 列表地址，多个地址以逗号 "),t("code",[s._v(",")]),s._v(" 分隔。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EAria2%E7%9A%84%E4%B8%8B%E8%BD%BD%E6%9C%BA/trackers%E8%AE%BE%E7%BD%AE.png",alt:"trackers设置"}})])]),s._v(" "),t("li",[t("p",[s._v("服务端编辑 "),t("code",[s._v("~/.config/aria2/aria2.config")]),s._v(" 配置文件中的 "),t("code",[s._v("bt-trakcer=udp://tracker.coppersurfer.tk:6969/announce,udp://tracker.opentrackr.org:1337/announce")]),s._v(" 项，多个地址用逗号 "),t("code",[s._v(",")]),s._v(" 分隔。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);