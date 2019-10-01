---
layout: article
title: Android Studio 메모리 부족 문제 해결
date: 2018-04-01
tags: [AndroidStudio, Tip]
comments: true
---

Mac에서 작업중 많이 끊겨서 해결방법을 찾다가 Android Studio의 Heap size를 늘리면 덜 끊긴다길래 시도해보았다.
보통은 메모장을 열어서 작성하는데 Android Studio안에서도 해결할 수 있다.

## 방법
Android 상단 메뉴
**help** -> **edit custom vm option**

```
-Xms2048m
-Xmx4096m
-XX:MaxPermSize=1024m
-XX:ReservedCodeCacheSize=768m
-XX:+UseCompressedOops
```

<!--more-->