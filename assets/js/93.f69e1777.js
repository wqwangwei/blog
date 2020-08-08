(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{486:function(t,a,s){"use strict";s.r(a);var v=s(12),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"docker镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像命令"}},[t._v("#")]),t._v(" Docker镜像命令")]),t._v(" "),s("blockquote",[s("p",[t._v("引用自"),s("a",{attrs:{href:"http://www.itmuch.com/docker/04-docker-command-images/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Docker系列教程04-Docker镜像常用命令》- 周立"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"搜索镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[t._v("#")]),t._v(" 搜索镜像")]),t._v(" "),s("p",[t._v("可使用 "),s("code",[t._v("docker search")]),t._v(" 命令搜索存放在Docker Hub中的镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker search "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("TERM")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--automated")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("只列出自动构建的镜像")])]),t._v(" "),s("tr",[s("td",[t._v("--filter, -f")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("根据指定条件过滤结果")])]),t._v(" "),s("tr",[s("td",[t._v("--limit")]),t._v(" "),s("td",[t._v("25")]),t._v(" "),s("td",[t._v("搜索结果的最大条数")])]),t._v(" "),s("tr",[s("td",[t._v("--no-trunc")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("不截断输出，显示完整的输出")])]),t._v(" "),s("tr",[s("td",[t._v("--stars, -s")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("只展示Star不低于该数值的结果")])])])]),t._v(" "),s("p",[t._v("示例1：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker search java\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("执行该命令后，Docker就会在Docker Hub中搜索含有“java”这个关键词的镜像仓库。执行该命令后，可看到类似于如下的表格：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME                    DESCRIPTION                STARS     OFFICIAL   AUTOMATED\njava                    Java is a concurrent, ...   1281      [OK]       \nanapsix/alpine-java     Oracle Java 8 (and 7) ...   190                  [OK]\nisuper/java-oracle      This repository conta ...   48                   [OK]\nlwieske/java-8          Oracle Java 8 Contain ...   32                   [OK]\nnimmis/java-centos      This is docker images ...   23                   [OK]\n...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("该表格包含五列，含义如下：")]),t._v(" "),s("p",[t._v("① NAME：镜像仓库名称。")]),t._v(" "),s("p",[t._v("② DESCRIPTION：镜像仓库描述。")]),t._v(" "),s("p",[t._v("③ STARS：镜像仓库收藏数，表示该镜像仓库的受欢迎程度，类似于GitHub的Stars。")]),t._v(" "),s("p",[t._v("④ OFFICAL：表示是否为官方仓库，该列标记为[OK]的镜像均由各软件的官方项目组创建和维护。由结果可知，java这个镜像仓库是官方仓库，而其他的仓库都不是镜像仓库。")]),t._v(" "),s("p",[t._v("⑤ AUTOMATED：表示是否是自动构建的镜像仓库。")]),t._v(" "),s("p",[t._v("示例2：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker search -s "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" java\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"下载镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[t._v("#")]),t._v(" 下载镜像 *")]),t._v(" "),s("p",[t._v("使用命令 "),s("code",[t._v("docker pull")]),t._v(" 命令即可从Docker Registry上下载镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("@DIGEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--all-tags, -a")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("下载所有标签的镜像")])]),t._v(" "),s("tr",[s("td",[t._v("--disable-content-trust")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("忽略镜像的校验")])])])]),t._v(" "),s("p",[t._v("示例1：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull java\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("执行该命令后，Docker会从Docker Hub中的java仓库下载最新版本的Java镜像。")]),t._v(" "),s("p",[t._v("示例2：")]),t._v(" "),s("p",[t._v("该命令还可指定想要下载的镜像标签以及Docker Registry地址，例如：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull reg.itmuch.com/java:7\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这样就可以从指定的Docker Registry中下载标签为7的Java镜像。")]),t._v(" "),s("h2",{attrs:{id:"列出镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出镜像"}},[t._v("#")]),t._v(" 列出镜像 *")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("docker images")]),t._v(" 命令即可列出已下载的镜像。")]),t._v(" "),s("p",[t._v("执行该命令后，将会看到类似于如下的表格：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\njava                latest              861e95c114d6        4 weeks ago         643.1 MB\nhello-world         latest              c54a2cc56cbb        5 months ago        1.848 kB\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("该表格包含了5列，含义如下：")]),t._v(" "),s("p",[t._v("① REPOSITORY：镜像所属仓库名称。")]),t._v(" "),s("p",[t._v("② TAG：镜像标签。默认是latest，表示最新。")]),t._v(" "),s("p",[t._v("③ IMAGE ID：镜像ID，表示镜像唯一标识。")]),t._v(" "),s("p",[t._v("④ CREATED：镜像创建时间。")]),t._v(" "),s("p",[t._v("⑤ SIZE：镜像大小。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker images "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("REPOSITORY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--all, -a")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）")])]),t._v(" "),s("tr",[s("td",[t._v("--digests")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("显示摘要信息")])]),t._v(" "),s("tr",[s("td",[t._v("--filter, -f")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("显示满足条件的镜像")])]),t._v(" "),s("tr",[s("td",[t._v("--format")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("通过Go语言模板文件展示镜像")])]),t._v(" "),s("tr",[s("td",[t._v("--no-trunc")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("不截断输出，显示完整的镜像信息")])]),t._v(" "),s("tr",[s("td",[t._v("--quiet, -q")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("只显示镜像ID")])])])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker images\ndocker images java\ndocker images java:8\ndocker images --digests\ndocker images --filter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dangling=true"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 展示虚悬镜像")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"删除本地镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除本地镜像"}},[t._v("#")]),t._v(" 删除本地镜像 *")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("docker rmi")]),t._v(" 命令即可删除指定镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker rmi "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IMAGE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IMAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--force, -f")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("强制删除")])]),t._v(" "),s("tr",[s("td",[t._v("--no-prune")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("不移除该镜像的过程镜像，默认移除")])])])]),t._v(" "),s("p",[t._v("例1：删除指定名称的镜像。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker rmi hello-world\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("表示删除hello-world这个镜像。")]),t._v(" "),s("p",[t._v("例2：删除所有镜像。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker rmi -f "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker images"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("-f参数表示强制删除。")]),t._v(" "),s("h2",{attrs:{id:"保存镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存镜像"}},[t._v("#")]),t._v(" 保存镜像")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("docker save")]),t._v(" 即可保存镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker save "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IMAGE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IMAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--output, -o")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Write to a file, instead of STDOUT")])])])]),t._v(" "),s("p",[t._v("例1：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker save busybox "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" busybox.tar\ndocker save --output busybox.tar busybox\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"加载镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载镜像"}},[t._v("#")]),t._v(" 加载镜像")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("docer load")]),t._v(" 命令即可加载镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker load "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--input, -i")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("从文件加载而非STDIN")])]),t._v(" "),s("tr",[s("td",[t._v("--quiet, -q")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("静默加载")])])])]),t._v(" "),s("p",[t._v("例1：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker load "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" busybox.tar.gz\ndocker load --input fedora.tar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[t._v("#")]),t._v(" 构建镜像 *")]),t._v(" "),s("p",[t._v("通过Dockerfile构建镜像。")]),t._v(" "),s("p",[t._v("命令格式：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker build "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称，缩写")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--add-host")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("添加自定义从host到IP的映射，格式为（host:ip）")])]),t._v(" "),s("tr",[s("td",[t._v("--build-arg")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("设置构建时的变量")])]),t._v(" "),s("tr",[s("td",[t._v("--cache-from")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("作为缓存源的镜像")])]),t._v(" "),s("tr",[s("td",[t._v("--cgroup-parent")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("容器可选的父cgroup")])]),t._v(" "),s("tr",[s("td",[t._v("--compress")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("使用gzip压缩构建上下文")])]),t._v(" "),s("tr",[s("td",[t._v("--cpu-period")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("限制CPU CFS (Completely Fair Scheduler) 周期")])]),t._v(" "),s("tr",[s("td",[t._v("--cpu-quota")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("限制CPU CFS (Completely Fair Scheduler) 配额")])]),t._v(" "),s("tr",[s("td",[t._v("--cpu-shares, -c")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("CPU使用权重（相对权重）")])]),t._v(" "),s("tr",[s("td",[t._v("--cpuset-cpus")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("指定允许执行的CPU")])]),t._v(" "),s("tr",[s("td",[t._v("--cpuset-mems")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("指定允许执行的内存")])]),t._v(" "),s("tr",[s("td",[t._v("--disable-content-trust")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("忽略校验")])]),t._v(" "),s("tr",[s("td",[t._v("--file, -f")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("指定Dockerfile的名称，默认是‘PATH/Dockerfile’")])]),t._v(" "),s("tr",[s("td",[t._v("--force-rm")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("删除中间容器")])]),t._v(" "),s("tr",[s("td",[t._v("--iidfile")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("将镜像ID写到文件中")])]),t._v(" "),s("tr",[s("td",[t._v("--isolation")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("容器隔离技术")])]),t._v(" "),s("tr",[s("td",[t._v("--label")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("设置镜像使用的元数据")])]),t._v(" "),s("tr",[s("td",[t._v("--memory, -m")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("设置内存限制")])]),t._v(" "),s("tr",[s("td",[t._v("--memory-swap")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("设置Swap的最大值为内存+swap，如果设置为-1表示不限swap")])]),t._v(" "),s("tr",[s("td",[t._v("--network")]),t._v(" "),s("td",[t._v("default")]),t._v(" "),s("td",[t._v("在构建期间设置RUN指令的网络模式")])]),t._v(" "),s("tr",[s("td",[t._v("--no-cache")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("构建镜像过程中不使用缓存")])]),t._v(" "),s("tr",[s("td",[t._v("--pull")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("总是尝试去更新镜像的新版本")])]),t._v(" "),s("tr",[s("td",[t._v("--quiet, -q")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("静默模式，构建成功后只输出镜像ID")])]),t._v(" "),s("tr",[s("td",[t._v("--rm")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("构建成功后立即删除中间容器")])]),t._v(" "),s("tr",[s("td",[t._v("--security-opt")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("安全选项")])]),t._v(" "),s("tr",[s("td",[t._v("--shm-size")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("指定/dev/shm 目录的大小")])]),t._v(" "),s("tr",[s("td",[t._v("--squash")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("将构建的层压缩成一个新的层")])]),t._v(" "),s("tr",[s("td",[t._v("--tag, -t")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("设置标签，格式：name:tag，tag可选")])]),t._v(" "),s("tr",[s("td",[t._v("--target")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("设置构建时的目标构建阶段")])]),t._v(" "),s("tr",[s("td",[t._v("--ulimit")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Ulimit 选项")])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);