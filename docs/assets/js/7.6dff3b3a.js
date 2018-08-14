(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{204:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("blockquote",[e("p",[s._v("引用自"),e("a",{attrs:{href:"http://www.itmuch.com/docker/23-docker-compose-commands/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Docker系列教程23-docker-compose常用命令》- 周立"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("和docker命令一样，docker-compose命令也有很多选项。下面我们来详细探讨docker-compose的常用命令。")]),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("构建或重新构建服务。服务被构建后将会以project_service 的形式标记，例如：composetest_db 。")]),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("查看指定命令的帮助文档，该命令非常实用。docker-compose所有命令的帮助文档都可通过该命令查看。")]),s._v(" "),s._m(3),e("p",[s._v("示例：")]),s._v(" "),s._m(4),s._m(5),s._v(" "),e("p",[s._v("通过发送SIGKILL 信号停止指定服务的容器。示例：")]),s._v(" "),s._m(6),e("p",[s._v("该命令也支持通过参数来指定发送的信号，例如：")]),s._v(" "),s._m(7),s._m(8),s._v(" "),e("p",[s._v("查看服务的日志输出。")]),s._v(" "),s._m(9),s._v(" "),e("p",[s._v("打印绑定的公共端口。示例：")]),s._v(" "),s._m(10),e("p",[s._v("这样就可输出eureka服务8761端口所绑定的公共端口。")]),s._v(" "),s._m(11),s._v(" "),e("p",[s._v("列出所有容器。示例：")]),s._v(" "),s._m(12),e("p",[s._v("也可列出指定服务的容器，示例：")]),s._v(" "),s._m(13),s._m(14),s._v(" "),e("p",[s._v("下载服务镜像。")]),s._v(" "),s._m(15),s._v(" "),e("p",[s._v("删除指定服务的容器。示例：")]),s._v(" "),s._m(16),s._m(17),s._v(" "),e("p",[s._v("在一个服务上执行一个命令。示例：")]),s._v(" "),s._m(18),e("p",[s._v("这样即可启动一个web服务，同时执行bash命令。")]),s._v(" "),s._m(19),s._v(" "),e("p",[s._v("设置指定服务运行容器的个数，以service=num的形式指定。示例：")]),s._v(" "),s._m(20),s._m(21),s._v(" "),e("p",[s._v("启动指定服务已存在的容器。示例：")]),s._v(" "),s._m(22),s._m(23),s._v(" "),e("p",[s._v("停止已运行的容器。示例：")]),s._v(" "),s._m(24),s._m(25),s._v(" "),s._m(26),s._v(" "),e("p",[s._v("构建、创建、重新创建、启动，连接服务的相关容器。所有连接的服务都会启动，除非它们已经运行。")]),s._v(" "),s._m(27),s._v(" "),s._m(28),s._v(" "),e("p",[s._v("TIPS\n(1) 本节仅讨论常用的docker-compose命令，其他命令可详见Docker官方文档："),e("a",{attrs:{href:"https://docs.docker.com/compose/reference/overview/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/compose/reference/overview/"),e("OutboundLink")],1),s._v(" 。")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"docker-compose命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose命令","aria-hidden":"true"}},[this._v("#")]),this._v(" docker-compose命令")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[this._v("#")]),this._v(" build")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[this._v("#")]),this._v(" help")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("help")]),this._v(" COMMAND\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("help")]),this._v(" build\t\t"),t("span",{attrs:{class:"token comment"}},[this._v("# 查看docker-compose build的帮助")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"kill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill","aria-hidden":"true"}},[this._v("#")]),this._v(" kill")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("kill")]),this._v(" eureka\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("kill")]),this._v(" -s SIGINT\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[this._v("#")]),this._v(" logs")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[this._v("#")]),this._v(" port")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose port eureka 8761\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"ps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ps","aria-hidden":"true"}},[this._v("#")]),this._v(" ps")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("ps")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("ps")]),this._v(" eureka\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"pull"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[this._v("#")]),this._v(" pull")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm","aria-hidden":"true"}},[this._v("#")]),this._v(" rm")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose "),t("span",{attrs:{class:"token function"}},[this._v("rm")]),this._v(" eureka\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[this._v("#")]),this._v(" run")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose run web "),t("span",{attrs:{class:"token function"}},[this._v("bash")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale","aria-hidden":"true"}},[this._v("#")]),this._v(" scale")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose scale user"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("3 movie"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("3\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[this._v("#")]),this._v(" start")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose start eureka\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[this._v("#")]),this._v(" stop")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker-compose stop eureka\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("停止后，可使用 "),t("code",[this._v("docker-compose start")]),this._v(" 再次启动这些容器。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#up","aria-hidden":"true"}},[this._v("#")]),this._v(" up")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("docker-compose up")]),this._v(" 命令会聚合所有容器的输出，当命令退出时，所有容器都会停止。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用 "),t("code",[this._v("docker-compose up -d")]),this._v(" 可在后台启动并运行所有容器。")])}],!1,null,null,null);r.options.__file="1.md";t.default=r.exports}}]);