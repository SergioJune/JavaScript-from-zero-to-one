现在的爬虫越来越难了，不再和之前的那样，随便抓个包就可以找到相关的 url ，然后 post 一下或者 get 一下数据就出来了。还有一个可能就是可能你以前用来学习的爬虫网站太简单了，还没有看见过那些猛的。上两周我就想弄弄知乎登陆，参数的加密算是把 js 代码扣出来了，但是只能在浏览器上运行，一换到 Python 执行就各种报错，你不会 JavaScript 就什么都调不了，所以二话不说，开启了新的大陆。那就开始吧！ 

## 1\. JavaScript 介绍

JavaScript 是运行在 客户端的语言，和你们说的 Java 是很不一样的， Java 通常用于服务器端的。但是他们两者也有相似之处，比如 JavaScript 的命名规范和名称和 Java 相似。其他的好像就没有什么了，哈哈。

JavaScript 也是一门脚本语言，和 python 一样，都是解释性语言，即每运行一行代码就解释一行，只不过 JavaScript 的解释器在浏览器内部。

**JavaScript 最初被应用是为了处理与表单相关的验证，现在应用就更加广了，可以说是几乎无所不能，比如用来做服务端开发，命令行工具、桌面程序和游戏开发等。**

我在学了之后也跟着弄了两个小的页面游戏，怀念童年。

![image](http://upload-images.jianshu.io/upload_images/6474572-24ea6d0ef79f410c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-117254e7a2e586d5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2.JavaScript组成

![image](http://upload-images.jianshu.io/upload_images/6474572-86db2e9f78c081cf?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   EcmaScript：JavaScript 的核心，定义了 JavaScript 的基本语法和数据类型，也是我们今天所学的内容。

*   DOM：document odject model， 文档对象模型，用于操作网页中的页面元素的，比如可以控制相关元素的增删改查。

*   BOM：browser object model,， 浏览器对象模型， 用于操作浏览器窗口，比如弹出框，控制页面滑动等。

## 3.JavaScript 变量

**在了解变量之前，先要知道 JavaScript 代码写在那里：**  

1.  **行内**，即写在 html 的元素中，不建议

2.  **嵌入**，即写在 script标签内，这个练习时可以使用，但当代码量大的时候也不建议

3.  **外部**，即 js 代码都在另一个文件内，用链接的方式接入 html 文件即可，推荐使用这种方式。

还有注释：

1.  单行注释： **// 注释内容**

2.  多行注释： **/*  注释内容 */**

**3.1 变量的定义以及作用**

变量是计算机内存中存储数据的标识符，根据变量名称可以获取到内存中存储的数据。 

使用变量我们可以更方便的获取或修改内存中的数据。

**3.2 定义变量**

使用 var 关键字来声明变量，和 python 差不多，都是弱类型的语言，只不过 python 不需要使用关键字来声明。

![image](http://upload-images.jianshu.io/upload_images/6474572-f56459cf1ace3c38?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：console.log()这个方法只是在控制台打印一下变量而已。

**3.3 变量的命名规则和规范**

1)：规则-必须遵守的，不遵守就会报错，就好比人类的法律

*   由字母、数字、下划线和 $ 组成，但是不能以数字开头，如：12asd 这个名字就会报错

*   不能是关键字或保留字，比如 var、for等

*   严格区分大小写，就是说大写和小写都是不一样的变量

2)：规范-建议遵守的，但不遵守也不会报错，比如人类的道德 

*   **变量名必须有意义**，因为这样别人才能看得懂，而且也利于维护，没有意义的就像我们需要破解相关参数时看到的 js 混淆，想想就头痛。

*   **遵守驼峰命名法**，首字母小写，后面单词的首字母大写，如：userName

**3.4 小案例**

了解完变量之后可以做个小案例：交换两个值

![image](http://upload-images.jianshu.io/upload_images/6474572-4368776c0e0a41bc?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 4\. 数据类型

JavaScript 的数据类型分两种，一个为简单数据类型，另一个为复杂数据类型。

简单数据类型有 **Number、String、Boolean、undefined 和 null。**一共五种

复杂数据类型比如 **object**，这个以后遇到再说，慢慢来。

**4.1 Number**

Number 为数值固定的表示法，用来表示整数和浮点数的。它的字面量就是数值，那字面量是什么意思呢？字面量就是这个变量表示的值，

![image](http://upload-images.jianshu.io/upload_images/6474572-0e71b99a14be4712?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

比如上面变量 a 的字面量就是 12，b 的字面量就是 45。

我们还可以使用 **typeof** 关键字来判断这个数据类型

![image](http://upload-images.jianshu.io/upload_images/6474572-5ddb19092e21e184?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

除了使用上面的十进制来赋值，我们还可以使用八进制和十六进制

![image](http://upload-images.jianshu.io/upload_images/6474572-160a9a94d634ffa1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

八进制的数是以 **0 **开头的，而十六进制的是以** 0x** 开头的，其他的进制就不讨论了。

无论你写何种进制，它的存储还是以二进制来存储的，所以这样就弄成了浮点数的存储精确度，**浮点数只能精确到17位小数**。

![image](http://upload-images.jianshu.io/upload_images/6474572-2641cfe245c551d0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看到 两个浮点数的相加不是很准确，所以不**要在有浮点数的运算下做判断**，有可能会有你想不到的结果，如

![image](http://upload-images.jianshu.io/upload_images/6474572-ef2ac27c053b3164?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  浮点数除了直接表示我们还可以使用科学计数法，当然，整数也是一样可以使用的。

![image](http://upload-images.jianshu.io/upload_images/6474572-f64c3dcab6d15db6?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Number 数据类型是有范围的，但是不需要我们刻意去计，记住它的关键字就可以了。 

![image](http://upload-images.jianshu.io/upload_images/6474572-37be85eca021d68d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

最后再说一个关键字：**NaN**：not a number,这个表示不是数值，当有两个数据运算时，运算失败就会返回这个值。我们也可以判断一个数据类型是不是 NaN，使用 **isNaN()** 方法即可。

![image](http://upload-images.jianshu.io/upload_images/6474572-2bd0d5c8345aeb67?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**4.2 String**

String 类型就是用单引号或双引号括起来的内容就是了，和 python 的字符串类型也是差不多的。

![image](http://upload-images.jianshu.io/upload_images/6474572-52e3b79fce9efc54?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**length** 属性是获取字符串的长度。

连接两个字符串可以使用** +** 进行连接， + 号两边不需要全是 String 类型也可以进行连接

![image](http://upload-images.jianshu.io/upload_images/6474572-ea7fa5b06a85ed53?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

思考：如何打印出下列字符串

1.  我是一个"帅哥"

2.  我喜欢"学‘python’"

这里面有单引号和双引号，如果直接进行打印的话就会出错，这时候我们就需要把这些有意义的字符给转义符，转成普通的字符

![image](http://upload-images.jianshu.io/upload_images/6474572-052944797c6a7f0a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

根据上面的转义符，就可以写出下面语句了

![image](http://upload-images.jianshu.io/upload_images/6474572-a82bf4356bddd3ad?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**4.3 Boolean**

boolean 类型，字面量只有** true** 和 **false**，表示真假，即表示计算机的 1 和 0。

当我们描述只有两种结果的事物是可以使用这个。

**4.4 undefined 和 null**

1.  undefined 表示**一个声明了没有赋值的变量**，所以变量的默认值就是undefined。

2.  null 只是表示为空，如果要想把该值设为 null， 只能手动赋值。

## 5\. 数据类型转换

**5.1 其他类型转 String 类型**

*   使用** toString()** 方法 

![image](http://upload-images.jianshu.io/upload_images/6474572-73ad86653d13500a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**需要注意：undefined 和 null 类型不能使用这个方法**

*   使用 **String()** 强转，这个对任何类型都适用

![image](http://upload-images.jianshu.io/upload_images/6474572-ee87e38fb0e6af72?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   使用 **+ 连接符** 连接空字符，这是最方便的,也是支持所有类型

![image](http://upload-images.jianshu.io/upload_images/6474572-4e50f8c5e010c7d5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**5.2 其他类型转 Number 类型**

*   使用 **Number() **，当转不了的时候会返回 NaN,说明不是数值，在将 Boolean 类型转 Number 时，**true会转为 1， false 会转为 0**。这个方法不支持将数字开头带有其它字符的字符串转为数值类型，如 "12df"

![image](http://upload-images.jianshu.io/upload_images/6474572-81604dbe60c50fc5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   使用 **parseInt()** ，只能转为整数，而且**转不了Boolean**。但是**可以转以数字开头而带有字符的字符串**。这个就可以应用在比如需要将 "**16px**" 转为数值，就可以使用这个。转不了时也会返回 NaN。

*   使用** parseFloat()** 可以转为浮点数，当字符串为整数时也可以转为整数。需要注意的是：**当字符串中有两个小数点的时候，只会转第二个小数点之前的数字，后面的都当作字符串**

![image](http://upload-images.jianshu.io/upload_images/6474572-e1bd56d099b3c78e?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   **使用 + 或 - 来将值取正或取负**。这个的功能和 Number 差不多。

![image](http://upload-images.jianshu.io/upload_images/6474572-f8b76750e269f895?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   **使用 - 来进行减法运算来转**。这个使用运算符就会**先把左右两边的类型先转为数值类型再运算**，所以可以用来相减 0。**至于 + 不行，是因为这个用来做字符串的拼接**了。

![image](http://upload-images.jianshu.io/upload_images/6474572-7e9331f5e3d566a0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**5.3 其他类型转 Boolean 类型**

这个使用** Boolean()** 来转就可以了，所有类型都可以转。**转为 false 的情况为 null、undefined、NaN、0 和 空字符串**，其他情况均为 true。

其实这个还可以使用**隐式转换**，就是不需要自己手动转，解释器会自动帮我们转，隐式转换通常用在判断语句的情况，隐式转换可以减少代码的书写，等说到判断语句再说，下面就有！

## 6\. 操作符

操作符就是用来对数据类型进行操作的符号，每个语言的操作符都差不多，这里再说下可以更深刻一点！

**6.1 算术运算符**

有 **+ - * /  %** 五个，任何一个数 除 0 都为为无穷大，模 0 为 NaN

![image](http://upload-images.jianshu.io/upload_images/6474572-9993f73ffc110130?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.2 一元运算符**

一元运算符就是只需要一个操作数的运算符，有 **++、-- 和 !**

*   **前置++**：如 a++，变量在前，这个是**先将变量的结果返回再对自身加 1**，

*   **后置++**：如 ++a，变量在后，这个是**先将变量进行自身加 1，再把结果返回**

还有 -- 也是一样的，只是 它是自身减 1，在运算中需要注意变量在一元运算符的顺序。 

*   **! 就是对操作数取反，而且返回的是 Boolean 类型**  

![image](http://upload-images.jianshu.io/upload_images/6474572-715d69571c17ca6b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.3 逻辑运算符**

逻辑运算符有 **&& 、|| 和 !**，! 因为只对一个操作数操作所以也属于一元运算符。

*   &&：这个是与运算符，只有**当两边都为 true 的时候才会返回 true**，其他情况都返回 false。

*   ||：这个是或运算符，**只有当两边都为 false 的时候才返回 false**， 其他情况都返回 true。

![image](http://upload-images.jianshu.io/upload_images/6474572-336fa48555e1b65b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.4 关系运算符**

关系运算符有** < > <= >= == != === 和 !==**。运算完都是返回 Boolean 类型的，这里就不细说了，都差不多的，只说下 == 和 === 的区别，还有 !== 和 != 的区别。**== 只判断两值的字面量相等不相等，不会判断数据类型，而 === 会先去判断数据类型再判断字面量，**!= 和 !== 的区别也是这样。

![image](http://upload-images.jianshu.io/upload_images/6474572-694bfe8ed868a46f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.5 赋值运算符**

赋值运算符有 **+= -= *= /= %= =** 六个。

**+= 就是把左右两边的值相加起来再赋值给左边的值**，其他的也一样，就不多说了。

![image](http://upload-images.jianshu.io/upload_images/6474572-0f45fbf11d3eb8e2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**6.6 运算符优先级从高到低（运算顺序）**

1.  ()

2.  一元运算符

3.  算术运算符，**同级时先 * / 再 + -**

4.  关系运算符：> >= < <=

5.  相等运算符：== === != !==

6.  逻辑运算符：**同级时先 && 再 ||**

7.  赋值运算符 

## 7\. 流程结构

JavaScript 的流程结构有三种，分别是顺序结构，分支结构和循环结构，这个也和 python 差不多的。

顺序结构就是代码是按顺序从上到下执行的，分支结构就是按照给定条件的是否成立而执行不同的语句，循环结构就是重复执行某一段代码。

顺序结构就不多说了，我们刚才运行的代码就是顺序结构的，现在先说下分支结构。

**7.1 分支结构**

使用分支结构可以使用 if 和 else 组成的语句，写法和 python 差不多。

![image](http://upload-images.jianshu.io/upload_images/6474572-7be46fd74e6de701?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

单独 if 语句

说到判断，就有个**隐式转换，就是 if 括号里面的值会将任意类型的值隐式转换成 Boolean 类型**。如下：

![image](http://upload-images.jianshu.io/upload_images/6474572-90a31f34d8ea4bf1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

另一种形式的分支语句：

![image](http://upload-images.jianshu.io/upload_images/6474572-2dc1dbac30b3168b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

if-else 一起用

这个 if-else 合用还有个简单点的写法，叫做**三元运算符**，语法为

![image](http://upload-images.jianshu.io/upload_images/6474572-cffa5d68e34b7a46?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**当表达式1 为 true 的时候，就会把 表达式2 的值给返回，否则返回 表达式3 的值，这个有一个缺陷，就是必须要有结果返回**。

![image](http://upload-images.jianshu.io/upload_images/6474572-ee60bd8be6020d88?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

还有一种形式的分支语句：

![image](http://upload-images.jianshu.io/upload_images/6474572-c228e2c32e058d7b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

if-else if-if 三个合用

上面的 三个合用我们也可以使用 **switch **语句来改写，这个是选择关键词。语法为

![image](http://upload-images.jianshu.io/upload_images/6474572-ae0b3342222936d7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

改写后：

![image](http://upload-images.jianshu.io/upload_images/6474572-23d1382ff108bc37?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

因为 case 的值只能是一个值，不能是范围，所以用了个除法来解决，要不然需要写大量的 case，还需要注意一点是一定需要**记得写 break，否则在匹配到相应的值之后它会一直往下运行不管 case 值是否对应，直到遇到 break 或者 全部运行完**。

**7.2 循环结构**

JavaScript 的循环结构也有 **while** 和** for**语句，但他还有 **do-while**语句。

*   for语句：一般在**确定了循环的次数**就会使用这个比较方便，语法为：

![image](http://upload-images.jianshu.io/upload_images/6474572-ab48efbdb4e3ac4c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**这个先去执行初始化表达式1， 然后去执行判断表达式2，符合条件就会执行循环体，循环体执行完之后就执行自增表达式3，再去判断，接下来就是重复刚才的动作，直到不满足判断表达式2**。

![image](http://upload-images.jianshu.io/upload_images/6474572-ccb203e554a6e47b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   while 语句：在**无法确定循环次数**的时候就可以用这个，使用这个需要注意循环结束的条件，以免写了死循环。语法为：

![image](http://upload-images.jianshu.io/upload_images/6474572-d072d3afeb7b63a5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**满足循环条件之后就执行循环体，然后再去执行循环条件，接下来就是重复刚才的动作直到不满足条件**。

![image](http://upload-images.jianshu.io/upload_images/6474572-a80cc7d4c81e6227?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   do-while 语句：这个也是在不知道循环次数的时候使用，但是**当循环体无论如何都需要执行一次**的话就可以选择使用这个。语法为：

![image](http://upload-images.jianshu.io/upload_images/6474572-1275ef8e956c03ff?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**先去执行循环体，再去判断循环条件，接下来就是重复刚才的动作直到循环条件不满足**。

在循环结构中还可以使用 break 和 continue 来对循环进行跳出的操作。**break 就是跳出整个循环，就是循环结束，而 continue 是跳出本次循环，接着下一次的循环**。

学习了循环之后，我们也可以尝试着自己打印一个三角形，或者 99 乘法表来满足一下自己。

![image](http://upload-images.jianshu.io/upload_images/6474572-5027daa7cbb4436d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-e300fcfdae6849a2?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这两个的思路都是差不多的，只要你搞定了第一个三角形的思路，下面的乘法表自然就迎刃而解了，这里就不多说了。



## **1\. 数组**

数组，字面意思就是一堆数的组合，但是它是**有顺序**的，学了数组就不仅可以存储一个数据，还可以**存储一堆数据**，这就是我们为什么学了简单数据类型之后还要学数组的原因。

### **1.1 声明数组**

![image](http://upload-images.jianshu.io/upload_images/6474572-7ede45ce71ae53b5?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看到，数组里面的定义和 python 里的差不多，也可以存储不同数据类型。获取数组元素也是一样通过下标获取，下标**从 0 开始**，而且 JavaScript 的数组可以**随意根据下标进行赋值**，不管你的数组长度，因为 **JavaScript 的数组长度是动态**的。

![image](http://upload-images.jianshu.io/upload_images/6474572-5a33e90340a9f68b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### **1.2 遍历数组**

遍历数组，根据数组长度可以轻易知道循环次数，所以可以使用 for 循环，获取数组的长度可以通过 **length** 属性进行获取。

![image](http://upload-images.jianshu.io/upload_images/6474572-ad792b6f41c94926?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里有个提高效率的地方，就是在**获取数组的长度时放在了 for 语句的初始化表达式里，而不是放在判断表达式里**，当你这个值需要运算才能获得的时候，这样做就**可以不用在每次判断时都需要通过运算获得，减少运算**，也就提高效率了，当然，数组的长度在这里只是一个属性，不需要运算，放不放在初始化表达式都差不多。

### **1.3 清空数组**

JavaScript 这里清空数组简单粗暴，直接将**长度赋值为 0 **即可。

![image](http://upload-images.jianshu.io/upload_images/6474572-5c0bd5b4f895b34b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### **1.4 数组小练习**

*   找出数组中最大的值

这个直接通过遍历数组，然后将每个值进行比较即可，很容易。

![image](http://upload-images.jianshu.io/upload_images/6474572-fc43b2f06c29a013?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   翻转数组

这个就是将数组中的元素前后互相替换，也不多说了。

![image](http://upload-images.jianshu.io/upload_images/6474572-53d9f13cdecfdab1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## **2\. 函数**

当我们需要在对多个数组进行上面的其中练习之一，比如进行寻找最大值，我们总不能每个数组都各自写一段寻找最大值的代码，否则这样子的话代码的复用性太低了。

函数的出现就是解决这个问题的，**函数就是把一段相对独立的具有特定功能的代码抽取出来进行封装，形成一个独立的个体。当需要多次使用的时候，我们只需要使用函数名调用即可**。

### **2.1 函数的定义**

函数定义这里有两种方法，如下：

*   使用函数声明，语法为

![image](http://upload-images.jianshu.io/upload_images/6474572-5be4c5e588fc0e36?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-3011d5e6f9790118?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   使用函数表达式，语法为：

![image](http://upload-images.jianshu.io/upload_images/6474572-bb10dd07abf46e6a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-46f1a1dde9c2fdb1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上面只是函数的定义而已，并不会去执行，只有你调用函数的时候才会去执行。

### **2.2 函数调用**

调用函数的语法也比较简单，就是函数加上一个括号就行了。

![image](http://upload-images.jianshu.io/upload_images/6474572-4e57ecb047136b10?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-7734042c17b8816a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

所以当需要多次使用这段功能的时候，就多次调用即可，不需要每次都写一段相同的代码。

### **2.3 函数参数**

不需要多次写同一段代码解决了，但是当有不同的数据内容参与运算时，好像我还需要重复写呀！就比如前面说的求数组最大值。这个时候就需要我们的函数参数了，函数参数就是解决这个不确定的数据内容的。当我们需要对不确定数据内容进行操作时，只需要在调用函数的时候把数据内容当作参数传进去即可。

函数的参数定义与调用语法：

![image](http://upload-images.jianshu.io/upload_images/6474572-d11a102bb4971a46?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   **形参**：在声明函数时，有些值是固定的，而有些值不是固定的，对于这些不固定的值，我们可以给它们设置参数，但是这个参数不是具体的值，只是一个形式而已，所以叫做形参

*   **实参**：在函数声明设置的形参，我们调用函数就需要传入对应的参数，而这个参数就是实参。

了解了这个之后，是不是很容易就可以写出一个求数组最大值的函数了？

![image](http://upload-images.jianshu.io/upload_images/6474572-c9059a3db0e9cf5e?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

咦？上面的我都看明白了，但是 **return **那个语句又是什么？**return 后面跟的内容就是函数的返回值，当函数运行到这里的时候就会结束函数并且把该值返回给调用处，就相对于一段代码执行之后的反馈**。**所以 return 语句也会常常用于终止函数的运行，还有也可以不写 return 语句，但是会默认返回 undefined**

### **2.4 函数内部的 arguments 对象**

JavaScript 中，函数的内部都有一个 arguments 对象，**用来记录在调用函数时所传进来的参数**，可以说是一个伪数组。

![image](http://upload-images.jianshu.io/upload_images/6474572-910a10957265b010?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-2fe0065a2dfb1189?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个对象可以**用于当我们需要传进来的参数个数不确定**时就可以使用这个，就比如求一堆数的和。

![image](http://upload-images.jianshu.io/upload_images/6474572-0b3c46564f87ec45?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### **2.5 匿名函数**

匿名函数就是没有名字的函数，当我们只需要只需要调用一次的话就可以使用匿名函数，或者需要回调函数的时候就会使用匿名函数，至于什么是回调函数，以后遇到了就说，匿名函数声明如下：

![image](http://upload-images.jianshu.io/upload_images/6474572-60b8813aa2fdef35?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这是将匿名函数赋值给一变量，然后可以通过该变量进行调用，也可以传参的，除了这样子调用匿名函数，匿名函数还可以进行自调用。

![image](http://upload-images.jianshu.io/upload_images/6474572-c3b94d55484eeb2d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里需要注意的是在自调用的时候别忘了定义函数的部分需要加括号括起来。这自调用的匿名函数就常用于**防止全局被污染**，就是当你写的代码量大了，难免会有些全局变量会有重名的可能，这时候使用匿名函数自调用就可以新开辟了一个作用域，不同作用域的变量就算同名也不怕了，至于具体的后面我也会应用到，到时再详讲。

### **2.6 函数其他**

*   函数也是一种数据类型，可以说是一个对象吧，至于具体的后面再详讲，现在了解就好。

![image](http://upload-images.jianshu.io/upload_images/6474572-a3f4482335a6a7fe?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   函数不仅可以作为参数进行传递，还可以作为返回值，毕竟函数也是一种数据类型。作为参数传递主要就是我们所说的回调函数，遇到就会说，作为返回值的应用，闭包就是一个应用，也不多说，以后会讲。

### **2.7\. 作用域**

作用域就是变量可以起作用的范围，在 JavaScript 中定义的变量符合词法作用域，就是说变量的作用域是在定义时决定的，不是在执行时决定的，即变量作用域只需要通过源码分析就知道了。

1\. JavaScript 中 词法作用域的规则为：

*   函数内部的变量允许访问函数外部的。

*   整个代码结构只能函数限定作用域，这就是为什么上文说使用自调用函数来开辟新的作用域的原因了。

*   作用域规则首先使用提升规则分析，下文说的预解析就是这个

*   如果当前作用域有该变量了，就不会考虑外面的了。

2\. 下面再看看 JavaScript 中三种作用域

*   **全局作用域**：JavaScript 中认为在函数外部定义的变量就是全局变量，而这个全局变量所在的作用域就是全局作用域。

*   **局部作用域**：在函数内部就是局部作用域，在这里定义的内部变量也就是局部变量。

*   **块级作用域**：这个是 ES6 才有的，简单说下，就是只使用一对**大括号{}** 括起来的就是块级作用域。

3\. 作用域链

只有函数才可以限定作用域，那么在要有代码，这里就至少存在一个全局作用域，而写代码难免又会有函数，这里的函数就会构成另一个作用域，如果函数中还有函数，则他还会构成一个新的作用域，等等。**将上面的这些作用域列出来，就会形成一个结构，这个结构就是作用域链**。如下面代码：

![image](http://upload-images.jianshu.io/upload_images/6474572-6a57527c433b55a8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

按照**全局作用域就是 0 级链，函数就是 1 级链，函数的函数就是 2级链**，就会有下图：

![image](http://upload-images.jianshu.io/upload_images/6474572-cda19836ec6560f9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### **2.8 预解析**

JavaScript 的解释器在执行代码的时候有两个过程，就是**预解析和再从上往下执行代码过程**。预解析就是先把代码中的变量提升，然后函数提升，接着再执行代码。

*   **变量提升**：变量的声明会被提升到作用域的最上面，注不会将赋值提升。

*   **函数提升**：把当前作用域的函数声明提升到当前作用域的最上面。

如果你懂了再看看下面几段代码会不会报错？

1.

![image](http://upload-images.jianshu.io/upload_images/6474572-c026a092ca1ad3f4?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解答：不会报错，因为经过预解析后代码成这样

![image](http://upload-images.jianshu.io/upload_images/6474572-be5da179b4381676?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2.

![image](http://upload-images.jianshu.io/upload_images/6474572-dd64b2f404f8c4fb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解答：也不会报错，不过 a 打印的值为 undefined

![image](http://upload-images.jianshu.io/upload_images/6474572-0e2a231c01bb07ce?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.

![image](http://upload-images.jianshu.io/upload_images/6474572-53ddd6f3fa9b2dee?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解答：会报错，原因可以结合上下两张图看即可。

![image](http://upload-images.jianshu.io/upload_images/6474572-57644d837ce4f5ba?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## **3\. 对象 object**

对象是一个具体的事物，比如你和我都是对象，但是汽车和手机不是事物，可以说它们是一个类别。

JavaScript 中的对象可以说是一个无序的属性的集合，属性可以包括基本值、对象或函数，也可以把 JavaScript 中的对象想像为一组键值对。

把现实中的事物抽象为代码中的对象，其的特征可以作为对象的属性，其的行为可以作为方法。

### **3.1 创建对象**

JavaScript 中创建对象的方法有四种，并不像其他语言中只能通过 new 来创建。

*   **直接声明一个键值对的集合**

![image](http://upload-images.jianshu.io/upload_images/6474572-c03b8492283f2974?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个 obj 变量就是一个对象了里面有两个属性和一个方法。使用这种方法也只适合创建一个类，因为当需要创建大量同类型的对象时，使用这个方法就需要写大量的方法。

*   **使用 new Object() 创建**

![image](http://upload-images.jianshu.io/upload_images/6474572-1b1a17cb61bb5102?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个是先创建一个空对象，然后动态增加对象的属性和方法，也是只适合创建只有一个对象的类型，还不如第一种，也不推荐。

*   **使用工厂模式创建**

![image](http://upload-images.jianshu.io/upload_images/6474572-1201f3647fa5b7cc?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这种方法就是使用一个模板函数，就相当于一个工厂，还有记得返回创建的对象。当需要创建对象的时候只需要调用一下函数传参就可以了，就比上面两种代码的复用性提高了。

但是这有一个问题，我们在判断对象类型的时候，结果都是 Object

**判断对象类型使用 instanceof，而使用 typeof 判断对象，无论什么对象的结果都是 Object**

![image](http://upload-images.jianshu.io/upload_images/6474572-748f7f15a532aca8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   **自定义构造函数来创建**

![image](http://upload-images.jianshu.io/upload_images/6474572-14fcf04583c2869f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个**自定义构造函数名字需要首字母大写，当然这只是个规范而已**。

里面使用了 this 关键字，这个 **this 的指向就是使用构造函数创建的对象**，也不需要返回 对象了。

![image](http://upload-images.jianshu.io/upload_images/6474572-165abb97cad7a6c6?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注意：创建对象也需要使用 **new** 关键字，如上图，**通过这种方法就既可以创建大量同类型的对象，也可以判断所属类型**，非常方便。

这个 **new 创建对象的过程**为：

1.  在内存中先创建一个空的对象

2.  让构造函数的 this 指向刚刚创建的对象

3.  执行构造函数内部的属性和方法定义

4.  返回当前对象

### **3.2 对象属性和方法的相关操作**

*   访问属性语法为**对象.属性**，还可以 **对象['属性名']** 这样， 当然也可以通过这两个来修改对象属性的值

![image](http://upload-images.jianshu.io/upload_images/6474572-3bcd02cbd411263f?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image](http://upload-images.jianshu.io/upload_images/6474572-264151b405a8286a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当然，当对一个不存在的属性访问的时候就会返回 undefined，若是修改一个不存在的属性就是向该对象动态增加一个新的属性。

这两种方法推荐第二种，因为有时我们得到的属性是一个变量名，并不知道具体的名字，这时候就只能使用第二种方法

*   访问方法直接使用 **对象.函数名()** 即可

![image](http://upload-images.jianshu.io/upload_images/6474572-3ba45dded8b3b755?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   遍历对象成员

可以使用 for...in... 语句

![image](http://upload-images.jianshu.io/upload_images/6474572-8864c0dd3b8a25ce?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

*   删除对象成员

使用 **delete** 关键字

![image](http://upload-images.jianshu.io/upload_images/6474572-0ab0ffddc7b5e6b0?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### **3.3 简单数据类型和复杂数据类型的区别**

基本类型又叫做值类型，复杂类型又叫做引用类型

值类型：简单数据类型，基本数据类型，在存储时，变量中存储的是值本身，因此叫做值类型。

引用类型：复杂数据类型，在存储时，变量中存储的仅仅是地址（引用），因此叫做引用数据类型。

** 关注可观看更多精彩文章，欢迎扫描下面二维码关注。
![image](http://upload-images.jianshu.io/upload_images/6474572-34fd70c5e6da8947?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
