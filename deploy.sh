#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# 执行
git add -A
git commit -m 'deploy提交'
git push

# cd 到构建输出的目录下 
cd dist

git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:huxingyi1997/vue_shops.git master:gh-pages

cd -