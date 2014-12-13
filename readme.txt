
系统设计草稿


1.=======================功能特性=======================

查询控件=》https://www.digitalocean.com/community
socket.io,跨域问题


2.=======================非功能性特性=======================

在线人数
每个控件都是可以移除的，最后剩下骨骼代码
每份页面都可以有多份moban
渐变的工作区域
https
用户头像的显示


3.=======================wiki篇=======================


————————————————————————环境搭建————————————————————————
如果你不是linux开发环境，可能比较悲哀了，因为我是在centos7下玩的
首先安装
nodejs v0.10.33，参考http://nodejs.org/
bower
nginx
ideaj:ideaIC-14.0.1.tar.gz

init script:

install package，参考http://bower.io/
bower init
bower install jquery --save
bower install angular --save


add building system: gulp
参考
http://www.smashingmagazine.com/2014/06/11/building-with-gulp/
http://slides.com/contra/gulp#/1

npm install -g gulp
npm install --save-dev gulp
npm install --save-dev gulp-uglify
npm install --save-dev gulp-jshint
npm install --save-dev gulp-concat
npm install --save-dev gulp-del
npm install --save-dev gulp-imagemin
npm install --save-dev gulp-sourcemaps
npm install --save-dev gulp-coffee

好吧，现在开始打开idea进行编辑把


————————————————————————开发指南————————————————————————


npm包管理https://www.npmjs.org/doc/cli/npm-install.html
常用的几个有用的命令
npm install ***
npm install *** --save
npm install -g *** 

邮件列表指南!!!



#int project
npm install

#start project
npm start
http://localhost:8000/app/index.html

#test project
npm test
npm run update-webdriver
npm run protractor



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

开源模式指南

————————————————————————新手指南————————————————————————
为什么需要anglar

为什么需要requriejs
http://briantford.com/blog/huuuuuge-angular-apps
http://www.startersquad.com/blog/angularjs-requirejs/
Write small, focused, modular parts, and progressively combine them into bigger things to make your app


angularJS学习指南
https://docs.angularjs.org/tutorial
https://docs.angularjs.org/api
https://docs.angularjs.org/guide


state的route
https://github.com/angular-ui/ui-router（快速介紹了下）
https://github.com/angular-ui/ui-router/wiki(更詳細內容)
https://github.com/angular-ui/ui-router/wiki/Quick-Reference
http://bubkoo.com/2014/01/02/angular/ui-router/guide/index/(中文版)
http://angular-ui.github.io/ui-router/site/#/api/ui.router(看object結構的)



4。=======================每日轨迹=======================
9.8
今早在前海湾站等地铁，等了10多趟地铁才上去了
今天打算搭建开发环境，并弄一个首页/登陆/查询的页面骨骼（后者没作）

9.9
今天打算深入学习下angular
再做骨骼代码
https://www.humhub.org/ ：社交网站
https://elasticbox.com/
https://elasticbox.com/how-it-works/
http://www.surrealcms.com/：很简洁的页面
http://sae.sina.com.cn/：iframe和tab的结合
https://sendgrid.com/：菜单比较有特色。。
http://seanhalpin.io/：使用指南，比较Q
https://github.com/notifications：通知分类

9.10
耽误了一天，今天还是继续昨天的计划，angular！

9.11
加入requirejs，并初步划分页面

9.12
开始设计零散的具有共用性的部件，因为可以随意组装了,恩，重点是一个服务的展现，有图有文字

9.13
想找一个设计工具，另外把文档梳理下，如果时间充足，就找一个好看点的图表，d3js,你有我要的东西吗～

=========================
公司网站建设
myCarousel



http://bl.ocks.org/mbostock/1093025
可以摺疊的清單列表


http://bl.ocks.org/mbostock/1021841
數據劃分

