---
layout: article
title: Python 에러 - too many file descriptors in select 해결하기
date: 2018-04-17
tags: [Python]
comments: true
---

웹 데이트 크롤링을 연습하다가 해당 에러가 나타났다.
>  too many file descriptors in select()

## 문제 원인
Windows의 asyncio루프에서는 기본적으로 64개의 소캣 만 사용할 수 있기 때문에 이 문제가 발생하는 것이다.

[ProactorEventLoop](https://docs.python.org/3/library/asyncio-eventloops.html#asyncio.ProactorEventLoop) 를 사용하면 이 문제를 해결할 수 있다.

# 문제 해결
```python
import asyncio, sys

if sys.platform == 'win32':
    loop = asyncio.ProactorEventLoop()
    asyncio.set_event_loop(loop)

loop = asyncio.get_event_loop()
loop.run_until_complete(crawler.main())
```

<!--more--> 
