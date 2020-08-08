(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{541:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("引用自："),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/25426.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 格式化和挂载数据盘"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"操作须知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作须知"}},[s._v("#")]),s._v(" 操作须知")]),s._v(" "),a("p",[s._v("单独购买的数据盘需要先挂载数据盘，然后才能格式化。")]),s._v(" "),a("p",[s._v("随实例时一起购买的数据盘，无需挂载，直接格式化。")]),s._v(" "),a("p",[s._v("您需要知道挂载到实例的数据盘的设备名：您可以通过 "),a("strong",[s._v("ECS 管理控制台")]),s._v(" > "),a("strong",[s._v("磁盘详情")]),s._v(" > "),a("strong",[s._v("磁盘挂载信息")]),s._v(" 查到数据盘的设备名。数据盘的设备名由系统默认分配，从 "),a("strong",[s._v("/dev/xvdb")]),s._v(" 开始往后顺序排列，分布范围包括 "),a("code",[s._v("/dev/xvdb−/dev/xvdz")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[s._v("#")]),s._v(" 操作步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("远程连接实例。")])]),s._v(" "),a("li",[a("p",[s._v("运行 "),a("code",[s._v("fdisk -l")]),s._v(" 命令查看实例是否有数据盘。如果执行命令后，没有发现 "),a("code",[s._v("/dev/vdb")]),s._v("，表示您的实例没有数据盘，无需格式化数据盘，请忽略本文后续内容。")]),s._v(" "),a("p",[s._v("如果您的数据盘显示的是 "),a("code",[s._v("dev/xvd?")]),s._v("，表示您使用的是非 I/O 优化实例。\n其中 ? 是 a−z 的任一个字母。")])]),s._v(" "),a("li",[a("p",[s._v("创建一个单分区数据盘，依次执行以下命令：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("运行 "),a("code",[s._v("fdisk /dev/vdb")]),s._v("：对数据盘进行分区。")])]),s._v(" "),a("li",[a("p",[s._v("输入 "),a("code",[s._v("n")]),s._v(" 并按回车键：创建一个新分区。")])]),s._v(" "),a("li",[a("p",[s._v("输入 "),a("code",[s._v("p")]),s._v(" 并按回车键：选择主分区。因为创建的是一个单分区数据盘，所以只需要创建主分区。")]),s._v(" "),a("blockquote",[a("p",[s._v("如果要创建 4 个以上的分区，您应该创建至少一个扩展分区，即选择 "),a("code",[s._v("e")]),s._v("。")])])]),s._v(" "),a("li",[a("p",[s._v("输入分区编号并按回车键。因为这里仅创建一个分区，可以输入 1。")])]),s._v(" "),a("li",[a("p",[s._v("输入第一个可用的扇区编号：按回车键采用默认值 1。")])]),s._v(" "),a("li",[a("p",[s._v("输入最后一个扇区编号：因为这里仅创建一个分区，所以按回车键采用默认值。")])]),s._v(" "),a("li",[a("p",[s._v("输入 "),a("code",[s._v("wq")]),s._v(" 并按回车键，开始分区。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk /dev/vdb")]),s._v("\nDevice contains neither a valid DOS partition table, nor Sun, SGI or OSF disklabel\nBuilding a new DOS disklabel with disk identifier 0x5f46a8a2.\nChanges will remain "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" memory only, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" you decide to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" them.\nAfter that, of course, the previous content won"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be recoverable.\nWarning: invalid flag 0x0000 of partition table 4 will be corrected by w(rite)\nWARNING: DOS-compatible mode is deprecated. It'")]),s._v("s strongly recommended to\nswitch off the mode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" and change display "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("units")]),s._v(" to\nsectors "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'u'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nCommand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": n\nCommand action\ne   extended\np   primary partition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np\nPartition number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nFirst cylinder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-41610, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nLast cylinder, +cylinders or +size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("K,M,G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-41610, default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41610")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nUsing default value "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41610")]),s._v("\nCommand "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": wq\nThe partition table has been altered"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nCalling ioctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to re-read partition table.\nSyncing disks.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("查看新的分区：运行命令 "),a("code",[s._v("fdisk -l")]),s._v("。如果出现以下信息，说明已经成功创建了新分区 "),a("code",[s._v("/dev/vdb1")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l")]),s._v("\nDisk /dev/vda: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42.9")]),s._v(" GB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42949672960")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5221")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16065")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8225280")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisk identifier: 0x00053156\nDevice Boot      Start         End      Blocks   Id  System\n/dev/vda1   *           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5222")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41942016")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\nDisk /dev/vdb: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.5")]),s._v(" GB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21474836480")]),s._v(" bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" heads, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v(" sectors/track, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41610")]),s._v(" cylinders\nUnits "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cylinders of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1008")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("516096")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisk identifier: 0x5f46a8a2\nDevice Boot      Start         End      Blocks   Id  System\n/dev/vdb1               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41610")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20971408")]),s._v("+  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("  Linux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在新分区上创建一个文件系统：运行命令 "),a("code",[s._v("mkfs.ext4 /dev/vdb1")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("本示例要创建一个 ext4 文件系统。您也可以根据自己的需要，选择创建其他文件系统，例如，如果需要在 Linux、Windows 和 Mac 系统之间共享文件，您可以使用 "),a("code",[s._v("mkfs.vfat")]),s._v(" 创建 VFAT 文件系统。")])]),s._v(" "),a("blockquote",[a("p",[s._v("创建文件系统所需时间取决于数据盘大小。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkfs.ext4 /dev/vdb1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mke2fs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.41")]),s._v(".12 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("-May-2010"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFilesystem "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nOS type: Linux\nBlock "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFragment "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Stride")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blocks, Stripe "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blocks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1310720")]),s._v(" inodes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5242852")]),s._v(" blocks\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("262142")]),s._v(" blocks "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.00")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" reserved "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the super user\nFirst data "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("block")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nMaximum filesystem "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967296")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("160")]),s._v(" block "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" blocks per group, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" fragments per group\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),s._v(" inodes per group\nSuperblock backups stored on blocks:\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("98304")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163840")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("229376")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("294912")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("819200")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("884736")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1605632")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2654208")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096000")]),s._v("\nWriting inode tables: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating journal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v(" blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nWriting superblocks and filesystem accounting information: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nThis filesystem will be automatically checked every "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(" mounts or\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),s._v(" days, whichever comes first.  Use tune2fs -c or -i to override.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("（建议）备份 "),a("strong",[s._v("etc/fstab")]),s._v("：运行命令 "),a("code",[s._v("cp /etc/fstab /etc/fstab.bak")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("向 "),a("strong",[s._v("/etc/fstab")]),s._v(" 写入新分区信息：运行命令 "),a("code",[s._v("echo /dev/vdb1 /mnt ext3 defaults 0 0 >> /etc/fstab")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：Ubuntu 12.04 不支持 barrier，所以对该系统正确的命令是："),a("code",[s._v("echo '/dev/vdb1 /mnt ext3 barrier=0 0 0' >> /etc/fstab")]),s._v("。")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果需要把数据盘单独挂载到某个文件夹，比如单独用来存放网页，可以修改以上命令中的 "),a("code",[s._v("/mnt")]),s._v(" 部分。")])])]),s._v(" "),a("li",[a("p",[s._v("查看 "),a("strong",[s._v("/etc/fstab")]),s._v(" 中的新分区信息：运行命令 "),a("code",[s._v("cat /etc/fstab")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/fstab")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/fstab")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Created by anaconda on Thu Feb 23 07:28:22 2017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Accessible filesystems, by reference, are maintained under '/dev/disk'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3d083579-f5d9-4df5-9347-8d27925805d4 /                       ext4    defaults        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ntmpfs                   /dev/shm                tmpfs   defaults        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndevpts                  /dev/pts                devpts  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("620")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nsysfs                   /sys                    sysfs   defaults        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nproc                    /proc                   proc    defaults        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n/dev/vdb1 /mnt ext3 defaults "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("挂载文件系统：运行命令 "),a("code",[s._v("mount /dev/vdb1 /mnt")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("查看目前磁盘空间和使用情况：运行命令 "),a("code",[s._v("df -h")]),s._v("。如果出现新建文件系统的信息，说明挂载成功，可以使用新的文件系统了。")]),s._v(" "),a("blockquote",[a("p",[s._v("挂载操作完成后，不需要重启实例即可开始使用新的文件系统。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/vdb1 /mnt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iXXXXXXX ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        40G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".6G   31G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("% /\ntmpfs           499M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  499M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/vdb1        20G  173M   19G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /mnt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);