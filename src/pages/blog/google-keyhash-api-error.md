---
layout: article
title: GooglePlay 앱 서명 (Key Hash)가져오기
date: 2018-04-06
tags: [Tip]
comments: true
---

GooglePlay에 어플리케이션을 올릴 때 서버의 앱 서명을 사용한다고 체크할 시 KeyHash 값이 변하게 되는데 아무 생각없이 어플리케이션을 올리다가 발생한 문제입니다. 

변경됨에 따라서 Facebook이나 Kakao API에서 KeyHash를 바꿔야 정상작동이 됩니다.

<!--more--> 

## 문제 원인
Google에서 지원하는 [앱 서명 키 관리](https://support.google.com/googleplay/android-developer/answer/7384423?hl=ko) 기능으로 인해 앱의 HashKey가 달라진 것이다.

## 문제 해결
Stackoverflow를 [참고](https://stackoverflow.com/questions/44355452/google-play-app-signing-key-hash/44448437#44448437)하여 해결할 수 있었다.

1. GooglePlayConsole -> 출시관리 -> 앱 서명
2. 앱 서명 인증서 SHA-1 인증서를 복사한다. ex ) **8A:CF:6C:08:D4:84:1D:77:D7:37:13:4C:BD:56:55:73:26:4D:79:E7**
3. 터미널 실행 뒤 해당 커맨드 작성
~~~
# echo [SHA-1 인증서] | xxd -r -p | openssl base64
echo 8A:CF:6C:08:D4:84:1D:77:D7:37:13:4C:BD:56:55:73:26:4D:79:E7 | xxd -r -p | openssl base64
~~~
~~~
# 결과
is9sCNSEHXfXNxNMvVZVcyZNeec=
~~~

해당 HashKey를 Facebook과 Kakao 개발자 페이지에 등록하면 해결된다.
