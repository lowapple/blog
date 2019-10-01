---
layout: article
title: MongoDB 기본적인 사용법
date: 2018-04-20
tags: [MongoDB]
comments: true
---
Cross-platform 데이터 베이스이며 뛰어난 확장성과 성능을 자랑합니다. NoSQL의 종류중 하나
NoSQL로서 고정된 형태의 스키마가 존재하지 않습니다.


## Install
```
# Mac homebrew user
brew install mongodb

# Window scoop user
scoop install mongodb
```

## Usage
### On Server
```
sudo mongod
```

### Mongodb Terminal
```
mongo
```

```
show dbs
```
```
use -db
```
```
show collections
```
```
collection.find()
collection.find({})
collection.find({}).count()
```

[Mongodb](https://docs.mongodb.com/getting-started/shell/client/)
