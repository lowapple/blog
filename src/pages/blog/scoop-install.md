---
layout: article
title: Scoop 설치 & 사용
date: 2018-03-06
tags: [Tool]
comments: true
---
맥을 사용하다가 개발 OS를 윈도우로 변경시 터미널의 참맛을 잊지 못하고 다시 터미널을 사용할 수 있는 프로그램을 찾게 되거나 OS를 갈아타기도 한다.

간단한 명령어들을 수행할 수 있는 Command line tool을 설치해 봅시다.

<!--more--> 

# Scoop란?
> 'A command-line installer for Windows'

윈도우 터미널에서 brew처럼 간편하게 설치할 수 있는 Command line tool이다.

## 설치

파워쉘을 열고 입력한다.
```shell
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
> iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```
이제 brew 처럼 설치할 수 있다.

```shell
scoop install curl
```

## 테마
PowreShell theme
```shell
> scoop install concfg
> concfg import solarized small
```

하이라이팅
```shell
scoop install pshazz
```

이제 자유롭게 사용하면 된다.

**추천**
```shell
scoop install sudo
sudo scoop install 7zip git openssh --global
scoop install curl grep sed less tail touch
scoop install python ruby go perl
```

## 참고
* [scoop](http://scoop.sh/)
* [concfg](https://github.com/lukesampson/concfg)
* [pshazz](https://github.com/lukesampson/pshazz)