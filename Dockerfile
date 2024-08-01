# 基础镜像
FROM nginx:latest

# 标签替代 MAINTAINER 指令
LABEL maintainer="liuyaowen"

# 设置工作目录
WORKDIR /usr/share/nginx/html/dist

# 配置文件tail -f /usr/local/nginx/logs/error.log

COPY nginxconfig/nginx.conf /etc/nginx/nginx.conf

# 复制文件
COPY dist/ .

# 暴露端口
EXPOSE 80

# 启动命令
CMD ["nginx", "-g", "daemon off;"]
