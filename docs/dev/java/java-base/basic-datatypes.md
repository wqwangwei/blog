# 基本数据类型

> 引用自[Java 基本数据类型](http://www.runoob.com/java/java-basic-datatypes.html)

变量就是申请内存来储存值。当创建变量得时候，需要在内存中申请空间。内存管理系统根据变量的类型为其分配存储空间，分配的空间只能用来储存该类型数据。

Java中有两大数据类型：内置数据类型、引用数据类型。

## 内置数据类型

Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。

|类型|长度|最小值|最大值|默认值|示例|备注|
|---|---|---|---|---|---|---|
|byte|8位|-128（-2^7）|127（2^7 - 1）|0|byte a = 100, byte b = -50|byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一|
|short|16位|-2^15|2^15 - 1|0|short s = 1000, short r = -20000|Short 数据类型也可以像 byte 那样节省空间，一个short变量是int型变量所占空间的二分之一|
|int|32位|-2^31|2^31 - 1|0|int a = 100000, int b = -200000|一般地整型变量默认为 int 类型|
|long|64位|-2^63|2^63 -1|0L|long a = 1000000L, long b = -2000000L|主要使用在需要比较大整数的系统上|
|float|32位、单精度、符合IEEE 754标准的浮点数|||0.0f|float f1 = 234.5f|float 在储存大型浮点数组的时候可节省内存空间，浮点数不能用来表示精确的值，如货币|
|double|64位、双精度、符合IEEE 754标准的浮点数|||0.0d|doble d1 = 123.4|浮点数的默认类型为double类型，double类型同样不能表示精确的值，如货币|
|boolean|1位|||false|boolean isReal = true|boolean类型只有两个取值：true 和 false；该类型只作为一种标志来记录 true/false 情况|
|char|16位Unicode字符|\u0000（0）|\uffff（65,535）|无|char letter = 'A'|char 数据类型可以储存任何字符|

float和double的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示E之前的数字要乘以10的多少次方。比如3.14E3就是`3.14 × 10^3 = 3140`，3.14E-3 就是 `3.14 x 10^-3 = 0.00314`。

实际上，Java中还存在一种基本类型void，它也有对应的包装类 `java.lang.Void`，不过我么无法直接对它们进行操作。

## 引用类型

- Java中的引用类型变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如Employee、Puppy等。

- 对象、数组都是引用数据类型。

- 所有引用类型的默认值都是null。

- 一个引用变量可以用来引用任何与之兼容的类型。

- 示例：Site site = new Site("http://xxxx.com/")

## Java常量

常量在程序运行时是不能被修改的。Java中使用 `final` 关键字来修饰常量，声明方式和变量类似：

```Java
final double PI = 3.14159;
```

## 十进制、16进制、8进制

byte、int、long、short都可以用十进制、16进制和8进制的方式来表示。前缀 `0` 表示8进制，前缀 `0x` 表示16进制。

## 转义字符

|符号|字符含义|
|---|---|
|\n|换行（0x0a）|
|\r|回车（0x0d）|
|\f|换页符（0x0c）|
|\b|退格（0x08）|
|\0|空字符（0x20）|
|\s|字符串|
|\t|制表符|
|\\"|双引号|
|\\'|单引号|
|\\\\|反斜杠|
|\ddd|八进制字符（ddd）|
|\uxxxx|16进制Unicode字符（xxxx）|

## 类型转换

运算中，不同类型的数据先转化为同一类型，然后进行运算。

转换从低级到高级：`byte, short, char -> int -> long -> float -> double`

数据类型转换必须满足如下规则：

- 不能对boolean类型进行类型转换。

- 不能把对象类型转换成不相关类的对象。

- 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。

- 转换过程中可能导致溢出或者损失精度。

- 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入。

自动类型转换：必须满足转换前的数据类型的位数要低于转换后的数据类型。例如：short数据类型的位数为16位，就可以自动转换成位数为32的int类型，同样float数据类型的位数为32，可以自动转换为64位的double类型。

强制类型转换：1、转换的数据类型必须是兼容的；2、格式：(type) value。type是要强制转换类型后的目标数据类型。

隐性强制类型转换：1、整数的默认类型是int；2、浮点型不存在这种情况，因为在定义float类型时必须在数字后面跟上F或者f。