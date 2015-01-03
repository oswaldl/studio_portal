欢迎来到开发测试云的前台平台哈

有任何问题，或在讨论，请在http://gc.chinacloudapp.cn/projects/zycloud/issues提出
以下是主干开发过程中的设想/知识整理/开发指南，希望对你了解系统有用


=======================如何贡献代码=======================
首先了解系统，知道大概是做什么的，不清楚业务的可以在http://gc.chinacloudapp.cn/projects/zycloud查询相关信息，或在找负责人题问

然后fork一份代码下来，尝试运行代码，参考《环境搭建》

接着寻找系统不足之处，或在思考可以增强的功能模块，（最好发邮件到（未定的邮件列表地址），大家讨论认同该功能后），开始修改代码实现功能

最后，提交merge request~


=======================功能特性=======================
系统首页
系统登陆
个人中心
创建项目
申请服务
创建场景
后台配置管理

草稿：
查询控件=》https://www.digitalocean.com/community
socket.io,跨域问题


=======================非功能性特性=======================

在线人数
每个控件都是可以移除的，最后剩下骨骼代码
每份页面都可以有多份模板
渐变的工作区域
https
用户头像的显示，支持自动生成的
业务数据的加载都是异步的
安全性考虑



=======================环境搭建=======================
注意：如果你不是linux开发环境，可能比较悲哀了，因为我是在centos7下玩的哦

首先安装
nodejs v0.10.33，参考http://nodejs.org/
bower
nginx（可选项，因为你可以直接npm start，不需要使用nginx做容器）
ideaj:ideaIC-14.0.1.tar.gz

下载代码
git clone http://gc.chinacloudapp.cn:8089/{yourname}/studio_portal.git
注意，这里的url必须是你自己fork的代码库的url哦


运行初始化脚本
# install package，参考http://bower.io/
#bower init
#bower install jquery --save
#bower install angular --save
#bower install

#add building system: gulp
#http://www.smashingmagazine.com/2014/06/11/building-with-gulp/
#http://slides.com/contra/gulp#/1

npm install
#npm install -g gulp
#npm install --save-dev gulp
#npm install --save-dev gulp-uglify
#npm install --save-dev gulp-jshint
#npm install --save-dev gulp-concat
#npm install --save-dev gulp-del
#npm install --save-dev gulp-imagemin
#npm install --save-dev gulp-sourcemaps
#npm install --save-dev gulp-coffee

启动程序
npm start
浏览： http://localhost:8000/app

#测试项目（未完成）
npm test
npm run update-webdriver
npm run protractor

#构建项目（开发人员可以不用了解）
gulp

=======================开发指南=======================
npm包管理
https://www.npmjs.org/doc/cli/npm-install.html
常用的几个有用的命令
npm install ***
npm install *** --save
npm install -g *** 

邮件列表指南(没空搭建)

nginx安装指南(如果喜欢用nginx作静态服务器的同学可以用)
sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
sudo yum install nginx
sudo systemctl start nginx.service
sudo firewall-cmd --permanent --zone=public --add-service=http 
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
# enable Nginx to start when your system boots.
sudo systemctl enable nginx.service
使用参考https://www.linode.com/docs/websites/nginx/basic-nginx-configuration
sudo ln -s /etc/nginx/sites-available/studio.conf /etc/nginx/sites-enabled/studio.conf
sudo systemctl reload nginx.service


如果遇到permission的问题
getenforce
setenforce Permissive
chcon -Rt httpd_sys_content_t /home/oswaldl/IdeaProjects
sudo setsebool -P httpd_can_network_connect on
# 关闭
sudo setenforce Permissive
# 开启
sudo setenforce Enforcing

set user as root

=======================新手指南FAQ=======================
为什么需要bower？
这是一个js包管理神器，以后爸爸妈妈再也不担心我找不到js包了，想要jquery？直接bower install jquery即可～
这个比较简单就提供学习指导了

为什么需要requirejs？
你必须了解AMD规范，说白了就是解决js依赖问题的，我们要告诉系统要按照某种顺序加载js，貌似也对性能也有一定帮助，忽略～

requirejs学习指南
http://briantford.com/blog/huuuuuge-angular-apps
http://www.startersquad.com/blog/angularjs-requirejs/
Write small, focused, modular parts, and progressively combine them into bigger things to make your app


为什么要用bootstrap？
这是一个很好的页面表现框架，有了他，爸爸妈妈再也不用担心我写的页面在手机上或在其他平台上看到的效果相差甚远～
http://getbootstrap.com/css/

为什么需要angular？
这是一个纯粹的前台框架，我们用他组织html，一方面解决访问路由，一方面让页面可拆分为一片片可组装的代码片段
其他功能麻，不是非常重要～

请求如何路由的？
https://github.com/angular-ui/ui-router（快速介紹了下）
https://github.com/angular-ui/ui-router/wiki(更詳細內容)
https://github.com/angular-ui/ui-router/wiki/Quick-Reference
http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/(中文版)
http://angular-ui.github.io/ui-router/site/#/api/ui.router(看object結構的)

angularJS学习指南
https://docs.angularjs.org/tutorial
https://docs.angularjs.org/api
https://docs.angularjs.org/guide


为什么需要gulp？
这是一个构建工具，发布程序的时候要用到，他能压缩js/图片，还会检查js书写有没有问题等，其实我比较喜欢开发的时候也用～
使用简单，概念也很好
http://gulpjs.com/





=======================漂亮的报表=======================
http://bl.ocks.org/mbostock/1093025
可以摺疊的清單列表

http://bl.ocks.org/mbostock/1021841
數據劃分






