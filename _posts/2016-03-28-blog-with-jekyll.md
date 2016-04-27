---
layout: blog
title: 使用Jekyll和github pages 搭建blog
---
### 第1步：创建github项目

1.创建登陆github帐号

2.新建一个项目

### 第2步：创建一个SSH Keys

1.首先下载RailsInstaller，里面已经包括了Rails 3.0.3 、Ruby 1.8.7、SQLite 3.7.3 、Git 1.7.3.1 、DevKit，这些工具都是你深入学习git所必备的。

2.输入下列语句，看看本地有没有ssh keys。

{% highlight ruby %}
cd ~/.ssh
{% endhighlight %}

如果有，则会进去；如果没有会返回找不到路径。

3.接下来创建SSH Keys，执行下列代码。

{% highlight ruby %}
ssh-keygen -t rsa -C "你的邮箱"
{% endhighlight %}

4.然后会要你选择保存的位置，直接回车即可。

5.接下来还要输入密码

6.完成后，你就可以在你刚才保存的文件路径中看到一个id_rsa.pub文件了，公钥就在这里。

7.用记事本打开id_rsa.pub，复制里面的东西，粘贴到Github项目的SSH Keys中。

8.输入以下代码，测试是否可以成功连接。

{% highlight ruby %}
ssh -T git@github.com
{% endhighlight %}

### 第3步：设置github项目

1.登陆github找到刚刚创建的项目

2.进设置里面设置github pages ，并且选择一套自己的模版

3.把代码clone到本地

### 第4步：安装使用jekyll

1.把gem的下载路径改成淘宝的，执行以下代码

{% highlight ruby %}
gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
{% endhighlight %}

2.安装jekyll
{% highlight ruby %}
gem install jekyll
{% endhighlight %}

3.进入刚才从git上clone下的文件夹（例：test）,创建一个_config.yml的文件，它是jekyll的设置文件，我们在里面填入如下内容，其他设置都可以用默认选项，具体解释参见<a href="http://jekyllrb.com/docs/configuration/" target="_blank">官方网页</a>。

目录结构变成：

{% highlight ruby %}
/test
  |-- _config.yml
{% endhighlight %}


4.在项目根目录下，创建一个_layouts目录，用于存放模板文件。

5.进入该目录，创建一个default.html文件，作为Blog的默认模板。并在该文件中填入以下内容。(***请无视花括号中间的斜杠***)

{% highlight ruby %}
<!DOCTYPE html>
　　<html>
　　<head>
　　　　<meta charset="utf-8">
　　　　<title>{\{ page.title }}</title>
　　</head>
　　<body>

　　　　{\{ content }}

　　</body>
</html>
{% endhighlight %}
Jekyll使用Liquid模板语言，{\{ page.title }}表示文章标题，{\{ content }}表示文章内容，更多模板变量请参考官方文档。
目录结构变成：
{% highlight ruby %}
/test
  |-- _config.yml
  |--　_layouts
	|--　default.html
{% endhighlight %}

6.创建一个_posts目录，用于存放blog文章。

进入该目录，创建第一篇文章。文章就是普通的文本文件，文件名假定为2012-08-25-hello-word.html。(注意，文件名必须为"年-月-日-文章标题.后缀名"的格式。如果网页代码采用html格式，后缀名为html；如果采用markdown格式，后缀名为md。）
在该文件中，填入以下内容：（注意，行首不能有空格）
{% highlight ruby %}
---
　　layout: default
　　title: hello word
---
<h2>{\{ page.title }}</h2>
<p>我的第一篇文章（请忽略上下花括号中奖的斜杠）</p>
<p>{\{ page.date | date_to_string }}</p>
{% endhighlight %}
目录结构变成：
{% highlight ruby %}
/test
　　　　|--　_config.yml
　　　　|--　_layouts
　　　　|　　　|--　default.html 
　　　　|--　_posts
　　　　|　　　|--　2012-08-25-hello-word.html
{% endhighlight %}

7.有了文章以后，还需要有一个首页。回到根目录，创建一个index.html文件，填入以下内容。
{% highlight ruby %}
---
　　layout: default
　　title: 我的Blog
---
<h2>{\{ page.title }}</h2>
<p>最新文章</p>
<ul>
　　{% for post in site.posts %}
　　　　<li>{\{ post.date | date_to_string }} <a href="{\{ post.url }}">{\{ post.title }}</a></li>
　　{% endfor %}
</ul>
{% endhighlight %}

8.启用本地服务
{% highlight ruby %}
jekyll server
{% endhighlight %}

9.访问：http://127.0.0.1:4000/

10.成功后把代码提交到github，等10分钟左右，访问http://username.github.com/test/就可以看到Blog已经生成了（将username换成你的用户名）

### 第5步：绑定域名

1.如果你不想用http://username.github.com/test/这个域名，可以换成自己的域名。

具体方法是在根目录下面，新建一个名为CNAME的文本文件，里面写入你要绑定的域名，比如example.com或者xxx.example.com。

2.将域名的DNS解析改成CNAME，ip改成username.github.io