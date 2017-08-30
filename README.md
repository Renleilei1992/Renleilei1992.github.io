# Renleilei1992.github.io
My personal blog website :)

- Created by Renleilei
- Created for recording some increments of knowledge in C/C++/HTML5/JavaScript/Linux/Shell ...
- Maintain the Project and the server in AliCloud

> ***与其感慨路难行，不如马上出发***

```
    hello world
```

### [20170831-00:11:15] 为什么Linux服务器之间已经配置SSH公钥之后仍需要密码?

- 原因: 经过sshd -d调试，发现问题的原因在于登录的服务器默认目录权限被修改，不是umask默认的权限
- 解决措施: 使用sudo /usr/sbin/sshd -d -p 1111指定端口1111进行sshd调试，另开启一个窗口连接该端口，使用 ssh -p 1111 localhostIP(此服务器IP)
- 错误解决示例: 

```
    /*debug出的错误信息*/
    Authentication refused: bad ownership or modes for directory /home/Renleilei

    /*在服务器命令行输入*/
    [Johnny@iZuf6d04ypm5jaypk9o6uhZ ~]$ ll /home/Renleilei/ -ld
    drwxrwxrwx 9 Johnny root 4096 Aug 30 23:57 /home/Renleilei//
    /*在服务器命令行输入*/
    [Johnny@iZuf6d04ypm5jaypk9o6uhZ ~]$ umask
    0002
    /*系统默认权限是022,也即是755，目前是777权限*/
    /*在服务器命令行输入*/
    [Johnny@iZuf6d04ypm5jaypk9o6uhZ ~]$ chmod 775 /home/Renleilei/
    
```   
- [CSDN](http://zouqingyun.blog.51cto.com/782246/1874410/)

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

### 可以尝试使用github的markdown功能
- 使用方法其实很简单，创建一个仓库之后默认选择创建一个README.md，每次想要编辑markdown文档都可以修改这个.md文件
- 然后使用preview功能查看和修改，然后将preview里面的内容复制到知乎编辑器中即可
- 参考链接：
- [简书](http://www.jianshu.com/p/q81RER/)
- [github](https://github.com/Renleilei1992/Renleilei1992.github.io)
- [知乎回答](https://www.zhihu.com/question/64637193/answer/222595072)
