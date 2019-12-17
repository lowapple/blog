---
type: archive
title: GooglePlay 앱 서명 (Key Hash)가져오기
date: 2018-04-06
tags: ['Tip']
description: 잘되던 Facebook 로그인이 GooglePlay에 올린뒤 작동이 안된다!
---

로컬에서 테스트 후 잘 돌아가는 어플리케이션을 GooglePlay에 올렸다. 잠시 뒤 앱을 다운로드 받아서 실행시켜 보니 Facebook 로그인이 갑자기 동작이 안되는것 급하게 노트북을 다시 열고, 원인들을 알아보았다. 해당 문제는 GooglePlay에 어플리케이션을 올릴 때 서버의 앱 서명을 사용한다고 체크할 시 KeyHash 값이 변하게 되는데 아무 생각 없이 확인 버튼을 누르고 Release 해서 발생한 문제였던것

변경됨에 따라서 Facebook이나 Kakao API에서 KeyHash를 바꿔야 정상작동이 됩니다.

## 문제 원인

Google에서 지원하는 [앱 서명 키 관리](https://support.google.com/googleplay/android-developer/answer/7384423?hl=ko) 기능으로 인해 앱의 HashKey가 달라진 것이다.

## 문제 해결

1. GooglePlayConsole -> 출시관리 -> 앱 서명
2. 앱 서명 인증서 SHA-1 인증서를 복사한다. ex ) **8A:CF:6C:08:D4:84:1D:77:D7:37:13:4C:BD:56:55:73:26:4D:79:E7**
3. 터미널 실행 뒤 해당 커맨드 작성

```bash
# echo [SHA-1 인증서] | xxd -r -p | openssl base64
$ echo 8A:CF:6C:08:D4:84:1D:77:D7:37:13:4C:BD:56:55:73:26:4D:79:E7 | xxd -r -p | openssl base64

# 결과
is9sCNSEHXfXNxNMvVZVcyZNeec=
```

해당 HashKey를 Facebook과 Kakao 등 앱 HashKey를 사용하는곳에 추가하면 된다.

## 참고

* https://stackoverflow.com/questions/44355452/google-play-app-signing-key-hash/44448437#44448437