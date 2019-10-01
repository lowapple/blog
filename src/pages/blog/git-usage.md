---
layout: article
title: 자주사용하는 Git 명령어 정리
date: 2018-03-05
tags: [Git, Tool]
comments: true
---

최근에는 GUI 툴이 많이 나와서 쉽게 사용할 수 있지만 터미널 환경에서 Git 사용시 자주 사용하고, 잘 까먹을 수 있는 명령어들을 정리해 보았습니다.

<!--more-->

### 새로운 git저장소 생성

해당 프로젝트 폴더로 이동
~~~ bash
> git init
~~~

### 저장소 복제

해당 프로젝트 폴더로 이동
~~~ bash
로컬 저장소 명령어
> git clone /저장소

원격 저장소 명령어
> git clone 사용자명@호스트:/원격/저장소/경로
~~~

----

인덱스
> 준비 영역

HEAD
> 확정 영역

### 변경된 파일 (인덱스로)추가

~~~ bash
> git add 변경된 파일

변경된 파일 전부
> git add .
~~~

### 변경내용 확정하기

~~~ bash
> git commit -m "이번 확정 내용 작성"
~~~

변경된 파일이 HEAD에 저장됨

----

### 원격 서버에 작성
~~~ bash
git push origin master
~~~

### 원격 서버 추가
~~~ bash
> git remote add origin /원격지 주소
~~~

----

### 가지치기(branch)
가지는 안전하게 격리된 상태에서 무언가 작업할 때 사용한다.
기본적으로 master 가지가 만들어진다.
개발은 다른 가지를 이용하여 진행하고, 나중에 개발이 완료되면 master 가지로 돌아와 병합한다.

### 가지 만들기
~~~ bash
> git checkout -b "가지 이름"
~~~

### 가지 이동
~~~ bash
> git checkout "가지 이름"
~~~

### 가지 삭제
~~~ bash
> git checkout -d "가지 이름"
~~~

### 가지 원격 저장소로 전송
~~~ bash
> git push origin "가지 이름"
~~~

----

### 원격 -> 로컬 갱신
~~~ bash
> git pull
~~~

### 가지 병합하기
master 가지에 병합
~~~ bash
> git merge "가지 이름"
~~~

----

### 변경내용 되돌리기
~~~ bash
> git checkout -- "가지 이름"
~~~

### 내용 포기 후 되돌리기
~~~ bash
> git fetch
> git reset --hard origin/master
~~~

----

### 커밋할 시 날자를 수정하는 방법

```
git commit -m "Update : ..." --date 2018-05-26
```

```
--date 날자
```