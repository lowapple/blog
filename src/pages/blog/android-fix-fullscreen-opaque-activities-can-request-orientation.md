---
layout: article
title: Android 8.0 Only fullscreen opaque activities can request orientation 에러 수정하기
date: 2018-12-02
tags: [Android]
comments: true
---

화면 잠금 어플리케이션을 제작 할 때 발생한 문제
Activity onCreate() 시 발생하는 문제로서 log 상으로는 
```
Only fullscreen opaque activities can request orientation
```
라고 뜬다.

이 문제는 Android 8.0 으로 업데이트 시 발생한다.
```xml
<style name="Theme.Transparent" parent="Theme.AppCompat.Light.NoActionBar">
    <item name="android:windowIsTranslucent">true</item>
</style>
```

화면 스타일 중 windowsIsTranslucent가 true일 때

```xml
<activity
    android:name=".LockscreenActivity"
    android:excludeFromRecents="true"
    android:launchMode="singleTop"
    android:screenOrientation="portrait" 
    android:theme="@style/Theme.Transparent"
    android:windowSoftInputMode="stateHidden|adjustResize" />
```

화면 방향을 강제 지정하면 오류가 발생하는데 screenOrientation을 unspecified 로 변경하면 오류가 사라진다.
```xml
android:screenOrientation="unspecified"
```