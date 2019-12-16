---
type: archive
title: Python 비동기 http 모듈 사용
date: 2018-04-21
tags: [Python]
description: 크롤링을 하면서 비동기 처리 요청이 많을 때!
---

## 크롤링을 하다보면

보통 request를 많이 쓴다.
하지만 request를 사용하면 하나씩 요청을 하게 되므로 많은 시간이 소요된다.
threading을 사용하면 되지만 많은 비용이 소모되고, 또한 귀찮기 때문에 별로 쓰지 않는다.
asyncio를 이용하여 개발된 aiohttp를 사용하면 쉽게 해결이 가능하다.

Python 3.5부터 함수 앞에 async라는 예약어를 붙여서 해당 함수를 비동기적으로 처리할 수 있게 되었다. single thread에서 I/O 작업이 진행중이면 해당 작업을 이벤트 루프에 등록해두고 다른 작업이 끝난 후 그 이후의 작업을 진행하는 방식이다.

<!--more--> 

## Install

```bash
pip install aiohttp
pip install aiodns
```

## Example

기본적인 사용방법

`gist:lowapple/fd1fb9f620c37c70bc2f143beb072323#aiohttp_sample.py`

`gist:lowapple/fd1fb9f620c37c70bc2f143beb072323#aiohttp_atonce_sample1.py`

다른 방법
`gist:lowapple/fd1fb9f620c37c70bc2f143beb072323#aiohttp_atonce_sample2.py`