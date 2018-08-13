(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{165:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("远程云服务器的管理是运维人员的必备技能，本文总结了阿里云linux服务器的基本环境的搭建过程，方便日后查看回顾。")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("目前windows平台上比较常见的SSH客户端有XShell、Putty等，这里选用比较熟悉的"),t("a",{attrs:{href:"https://www.netsarang.com/xshell_download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("XShell"),t("OutboundLink")],1),e._v("。官网需要填写个人信息之后才能下载，这里直接选择"),t("a",{attrs:{href:"http://rj.baidu.com/soft/detail/15201.html?ald",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度软件中心"),t("OutboundLink")],1),e._v("下载。")]),e._v(" "),t("p",[e._v("安装完成之后，开始登录远程的linux服务器。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("这里选用的是CentOS 7")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("CentOS 7 可以使用yum安装包管理器快速安装配置各种常用的软件工具。")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("在安装软件工具之前，先对yum进行更新。")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("首先检查是否已经安装其他版本JDK，如openjdk等。")]),e._v(" "),e._m(9),t("p",[e._v("这里显示的输出信息为：")]),e._v(" "),e._m(10),e._v(" "),t("p",[e._v("检查当前java版本信息")]),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),t("ul",[t("li",[e._v("下载"),t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK"),t("OutboundLink")],1)])]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),t("p",[e._v("在最下面添加以下信息：")]),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),e._m(21),e._v(" "),t("blockquote",[t("p",[e._v("MySQL的安装可以参考"),t("a",{attrs:{href:"http://www.cnblogs.com/XBlack/p/5178758.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云Centos7使用yum安装MySQL5.6的正确姿势"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("以下为主要代码。")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),t("blockquote",[t("p",[e._v("参考"),t("a",{attrs:{href:"http://www.redis.cn/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1),e._v("\n下载，解压，编译：")])]),e._v(" "),e._m(24),t("p",[e._v("make命令需要gcc，使用下列命令安装gcc：")]),e._v(" "),e._m(25),e._m(26),e._v(" "),t("p",[e._v("你可以使用内置的客户端命令redis-cli进行使用：")]),e._v(" "),e._m(27),t("blockquote",[t("p",[t("a",{attrs:{href:"https://my.oschina.net/indestiny/blog/197272",target:"_blank",rel:"noopener noreferrer"}},[e._v("Centos开机自启动redis"),t("OutboundLink")],1)])]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._m(30),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),e._m(36),e._v(" "),t("blockquote",[t("p",[e._v("参考"),t("a",{attrs:{href:"http://ju.outofmemory.cn/entry/53632",target:"_blank",rel:"noopener noreferrer"}},[e._v("yum安装Tomcat"),t("OutboundLink")],1)])]),e._v(" "),e._m(37),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),t("blockquote",[t("p",[e._v("参考"),t("a",{attrs:{href:"http://www.cnblogs.com/qianxiaoruofeng/p/5778733.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("yum 安装vim编辑器"),t("OutboundLink")],1)])]),e._v(" "),e._m(41),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://rj.baidu.com/soft/detail/18249.html?ald",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xftp"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Git"),t("br"),e._v(" "),t("a",{attrs:{href:"https://git-scm.com/download/linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git下载与安装"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://blog.csdn.net/laiahu/article/details/7516939",target:"_blank",rel:"noopener noreferrer"}},[e._v("centos上如何yum安装git?"),t("OutboundLink")],1),t("br"),e._v(" "),t("a",{attrs:{href:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git教程 - 廖雪峰的官方网站"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"阿里云服务器环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云服务器环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 阿里云服务器环境搭建")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"远程登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程登录","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程登录")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ol",[s("li",[s("p",[this._v("新建会话")]),this._v(" "),s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/XShell%E6%96%B0%E5%BB%BA%E4%BC%9A%E8%AF%9D.png')",alt:"XShell新建会话"}})]),this._v(" "),s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E4%BF%9D%E5%AD%98%E4%B8%BB%E6%9C%BASSH%E5%AF%86%E9%92%A5.png')",alt:"保存主机SSH密钥"}})])]),this._v(" "),s("li",[s("p",[this._v("输入用户名、密码，执行登录")]),this._v(" "),s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F.png')",alt:"登录成功"}})])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 操作系统")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境搭建")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E6%9F%A5%E7%9C%8Byum.png')",alt:"查看yum"}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ yum update\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk","aria-hidden":"true"}},[this._v("#")]),this._v(" JDK")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h4",{attrs:{id:"安装前的检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装前的检查","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装前的检查")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ rpm -qa | grep -E '^open[jre|jdk]|j[re|dk]'\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E6%A3%80%E6%9F%A5%E5%85%B6%E4%BB%96%E7%89%88%E6%9C%ACjdk.png')",alt:"检查是否存在其他版本jdk"}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ java -version\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("如果已经安装了openjdk，使用 "),s("code",[this._v("yum remove java-1.x.x-openjdk")]),this._v(" 命令卸载。")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h4",{attrs:{id:"下载并安装oracle-jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载并安装oracle-jdk","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载并安装Oracle JDK")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E4%B8%8B%E8%BD%BDjdk.png')",alt:"下载jdk"}})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("安装JDK")]),e._v(" "),t("p",[e._v("安装之前使用"),t("strong",[e._v("Xftp")]),e._v("工具将下载的rpm软件包上传到服务器。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ rpm -ivh jdk-8u121-linux-x64.rpm\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("使用 "),t("code",[e._v("java -version")]),e._v(" 检查是否成功安装")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h4",{attrs:{id:"设置jdk环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置jdk环境变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置JDK环境变量")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# cp /etc/profile /etc/profile.backup0831\n# vim /etc/profile\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("export JAVA_HOME=/usr/java/default\nexport PATH=$PATH:$JAVA_HOME/bin\nexport CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("查看JDK环境变量是否设置成功")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ echo $JAVA_HOME\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[t("p",[e._v("安装带有可用的mysql5系列社区版资源的rpm包")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ rpm -Uvh http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("查看当前可用的mysql安装资源")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ yum repolist enabled | grep "mysql.*-community.*"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("使用yum的方式安装MySQL")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ yum -y install mysql-community-server\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("加入开机启动")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl enable mysqld\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("启动mysql服务进程")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl start mysqld\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("重置密码")]),e._v(" "),t("p",[t("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E9%87%8D%E7%BD%AEmysql%E5%AF%86%E7%A0%81.png')",alt:"重置mysql密码"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"$withBase('/images/%E9%98%BF%E9%87%8C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/%E9%85%8D%E7%BD%AEmysql.png')",alt:"配置mysql"}})]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mysql_secure_installation\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ wget http://download.redis.io/releases/redis-3.2.6.tar.gz\n$ tar xzf redis-3.2.6.tar.gz\n$ cd redis-3.2.6\n$ make\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ yum -y install gcc\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("二进制文件是编译完成后在src目录下，通过下面的命令启动Redis服务："),s("br"),this._v(" "),s("code",[this._v("$ src/redis-server")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('$ src/redis-cli\nredis> set foo bar\nOK\nredis> get foo\n"bar"\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("修改redis.conf，打开后台运行选项：")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# By default Redis does not run as a daemon. Use 'yes' if you need it.\n# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.\ndaemonize yes\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("编写脚本，vim /etc/init.d/redis:")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# chkconfig: 2345 10 90\n# description: Start and Stop redis\n\nPATH=/usr/local/bin:/sbin:/usr/bin:/bin\n\nREDISPORT=6379 #实际环境而定\nEXEC=/usr/local/redis/src/redis-server #实际环境而定\nREDIS_CLI=/usr/local/redis/src/redis-cli #实际环境而定\n\nPIDFILE=/var/run/redis.pid\nCONF="/usr/local/redis/redis.conf" #实际环境而定\n\ncase "$1" in\n        start)\n                if [ -f $PIDFILE ]\n                then\n                        echo "$PIDFILE exists, process is already running or crashed."\n                else\n                        echo "Starting Redis server..."\n                        $EXEC $CONF\n                fi\n                if [ "$?"="0" ]\n                then\n                        echo "Redis is running..."\n                fi\n                ;;\n        stop)\n                if [ ! -f $PIDFILE ]\n                then\n                        echo "$PIDFILE exists, process is not running."\n                else\n                        PID=$(cat $PIDFILE)\n                        echo "Stopping..."\n                        $REDIS_CLI -p $REDISPORT SHUTDOWN\n                        while [ -x $PIDFILE ]\n                        do\n                                echo "Waiting for Redis to shutdown..."\n                                sleep 1\n                        done\n                        echo "Redis stopped"\n                fi\n                ;;\n        restart|force-reload)\n                ${0} stop\n                ${0} start\n                ;;\n        *)\n                echo "Usage: /etc/init.d/redis {start|stop|restart|force-reload}" >&2\n                exit 1\nesac\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("执行权限：")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("chmod +x /etc/init.d/redis\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("开机自启动：")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 尝试启动或停止redis\nservice redis start\nservice redis stop\n\n# 开启服务自启动\nchkconfig redis on\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat","aria-hidden":"true"}},[this._v("#")]),this._v(" Tomcat")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yum -y install tomcat8\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("使用yum命令安装完成之后，可以方便的使用 "),t("code",[e._v("$ tomcat start")]),e._v(" 和 "),t("code",[e._v("$ tomcat stop")]),e._v(" 命令开关tomcat。"),t("br"),e._v("\ntomcat的安装目录位于 "),t("code",[e._v("/usr/share/tomcat")]),e._v(" 下。")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"工具安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 工具安装")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("vim")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("pre",[s("code",[this._v("```\nyum -y install vim\n```\n")])])}],!1,null,null,null);n.options.__file="2.md";s.default=n.exports}}]);