---
type: archive
title: Android Point Line 그리기
date: 2018-04-06
tags: ['Android']
description: Xml을 이용하여 Android Point Line 그리기 
---

## 문제 발생

이전에 항상 하던 방식으로 PointLine을 그리려 하니 그려지지 않아서 찾아보았다.

찾아보니 Android 3.0 부터 하드웨어 가속 옵션으로 2D의 사용여부를 결정할 수 있었다.
디폴트 값으로 None이 되어있다.

* None
* Hardware
* Software

최근에는 hardware 선택해도 되지만 지원하지 않는 API가 있을 수 있기 때문에 속도가 약간 떨어지더라도 software 방식을 선택하는것이 좋은것 같다.

## 문제 해결

layerType을 정해주었다.

~~~xml
// point_line.xml
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="line">
    <stroke
        android:width="1dp"
        android:color="#a8a8a8"
        android:dashGap="6dp"
        android:dashWidth="6dp" />
</shape>
~~~

~~~xml
<ImageView
    android:layout_width="match_parent"
    android:layout_height="2dp"
    android:layout_marginBottom="14dp"
    android:layout_marginTop="14dp"
    android:layerType="software"
    android:src="@drawable/gray_point_line" />
~~~