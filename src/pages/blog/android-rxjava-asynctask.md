---
layout: article
title: RxJava AsyncTask 비동기 처리
date: 2018-04-06
tags: [Android, RxJava]
comments: true
---

비동기 처리를 효율적으로 관리할 수 있음.
특히 작업 Schedule Thread를 선택할 수 있어 편리함

```java
// Ex ) HttpURLConnection 등을 사용할 시
Observable.fromCallable(() -> /* 비동기 처리 함수 */)
    .subscribeOn(Schedulers.io())   // 
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe(response -> {
        if (response != null) {
            
        }
    });
```

<!--more-->