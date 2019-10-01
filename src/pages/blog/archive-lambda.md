---
layout: article
title: 람다식이란?
date: 2018-11-10
tags: [Archive]
comments: true
---

람다식, 또는 람다 함수라고 한다. 
프로그래밍 언어에서 개념으로 익명 함수를 지칭하는 용어이다. 

람다식을 사용함으로서 생기는 장점
* 코드의 간결함
* 지연 연산을 통한 퍼포먼스 향상
* 보일러 플레이트 코드 대체
* 필요한 정보만을 사용하는 방식을 통해 퍼포먼스 향상 가능

<!--more-->

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```
```java
IntStream.range(0, 10).forEach((int value) -> System.out.println(value));
IntStream.range(0, 10).forEach(value -> System.out.println(value));
IntStream.range(0, 10).forEach(System.out::println);
```