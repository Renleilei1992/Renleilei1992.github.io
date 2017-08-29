# Renleilei1992.github.io
My personal blog website :)

- Created by Renleilei
- Created for recording some increments of knowledge in C/C++/HTML5/JavaScript/Linux/Shell ...
- Maintain the Project and the server in AliCloud

> ***与其感慨路难行，不如马上出发***

```
    hello world
```


### [20170830-00:32:07] 为什么C++中cout不能直接输出字符型指针的地址?

- 原因：cout不同于C标准库中的printf带格式输出，在C++标准库中,cout后的 '<<' I/O操作符重载，在遇到字符型指针时会将其当作字符串名来处理，输出指针所指向的字符串
- 解决措施：为了避免'<<'操作符识别出字符型指针为字符串名，此处使用 ***强制类型转换*** 为无类型指针,C++的强制类型转换可以使用 ***static_cast*** 方式转换
- 解决示例：如下，从示例中也可以看出若指针类型不是字符型，cout可以直接输出其地址值
```
#include <iostream>
using namespace std;

int main(int argc,char **argv)
{
    const void *myVoidPointer = "131420";
    const char *myStr = "Hello Cpp!";

    // stdout the pointer
    cout << "[pointer's address]: "<< myVoidPointer << endl;
    cout << "[string]: " << myStr << endl;

    // stdout the string's pointer's address
    cout << "[string's address]:　" << static_cast<const void *>(myStr) << endl;

    return 0;
}

//输出结果:
[pointer's address]: 0x400a24
[string]: Hello Cpp!
[string's address]:　0x400a2b
```
