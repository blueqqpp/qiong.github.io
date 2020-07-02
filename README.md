# qiong.github.io

##  首次使用时

###  先克隆到本地，然后以后就在这个里面修改，提交即可。

![1593678061092](..\img\图片一.png)

###  创建SSH KEY 

 ####  先看一下你C盘用户目录下有没有.ssh目录，有的话看下里面有没有id_rsa和id_rsa.pub这两个文件，有就跳到下一步，没有就通过下面命令创建 

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

####   然后一路回车。这时你就会在用户下的.ssh目录里找到id_rsa和id_rsa.pub这两个文件   

![1593678205120](..\img\图片二.png)

#### 登录Github,找到右上角的图标，打开点进里面的Settings，再选中里面的SSH and GPG KEYS，点击右上角的New SSH key，然后Title里面随便填，再把刚才id_rsa.pub里面的内容复制到Title下面的Key内容框里面，最后点击Add SSH key，这样就完成了SSH Key的加密。
