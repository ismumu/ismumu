---
layout: blog
title: new Date 不同时区的转换
---

如下：


{% highlight ruby %}
function calcTime(city, offset) { 
  d = new Date(); 
  utc = d.getTime() + (d.getTimezoneOffset() * 60000); 
  nd = new Date(utc + (3600000*offset)); 
  return "The local time in " + city + " is " + nd.toLocaleString(); 
}

alert(calcTime('Singapore', '+8'));//强制转换成中国时间
alert(calcTime('Singapore', -(new Date()).getTimezoneOffset()/60));//各地当地时间
{% endhighlight %}