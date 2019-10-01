---
layout: article
title: Kotlin을 왜 사용할까요?
date: 2018-11-08
tags: [Kotlin, Android]
comments: true
---

## 안드로이드를 개발하면서..
저는 안드로이드 개발을 할 때 코틀린 사용합니다. 그 이유는 아래와 같습니다.
* 안드로이드 개발을 코틀린으로 시작했다.
* 중간에 자바를 사용해 봤지만 뭔가 불편하더라
* NullPointerException 에러가 많이 난다.

큰 이유 없이 코틀린을 사용하였고, 이전에 스스로 왜 사용하는지에 대해서 큰 고민을 하지 않아 이번기회에 왜 사용하는지에 대해 스스로 생각해 볼 수 있었으면 좋겠습니다.

<!--more-->

### 안드로이드 보일러 플레이트 & 자바 표현력
#### 자바 표현력
안드로이드 프레임워크에서는 추상화보다는 저수준의 API를 제공합니다. 따라서 관련된 보일러 플레이트 코드가 많을 수밖에 없는데 자바의 다소 부족한 표현력이 더해져 실제 실행시키고 싶은 코드보다 보일러 플레이트 코드가 더 많게 되면서 전체적인 코드의 양이 늘어나게 됩니다. 자바 8로 넘어오게 되면서 람다나 메소드 레퍼런스를 사용할 수 있게 되었습니다.
```java
// 람다
button.setOnClickListener(view -> doSomething(view));

// 메소드 레퍼런스
button.setOnClickListener(this::doSomething);
```
보일러 플레이트 코드를 제거해 표현력을 높일 수 있는 부분에도 한계가 있으며 람다와 메소드 레퍼런스만으로는 전반적인 안드로이드 보일러 플레이트에 대응하기에는 무리가 있습니다.


#### 보일러 플레이트
XML 레이아웃 파일에 정의한 뷰 레퍼런스를 가지고 오는 부분이나 SQLite 트랜잭션을 처리하는 부분
```java
progressBar = (ProgressBar) findViewById(R.id.progress_bar);
textView = (TextView) findViewById(R.id.textView);
webView = (WebView) findViewById(R.id.web_view);
```
```java
db.beginTransaction();
try {
    db.delete("users", "family_name = ?", arrayOf("AB")); // 실행시키고 싶은 코드
    db.setTransactionSuccessful();
} finally {
    db.endTransaction();
}
```

이런 보일러 플레이트가 안드로이드 프로젝트 전반에 걸쳐있어서 소스코드의 양이 많아지고, 유지 보수시 어려움이 있게 됩니다.

### NullPointerException
* Default 값을 강제하지 않는다.
* 어느 시점에 초기화 되는지 찾아봐야 한다. (문서화 X)
* 비동기 통신을 많이 사용하면서 나타난다.

NPE에 사용하는 기본 대처 방법
```java
if(foobar != null) {
    // foobar is not null
}
try {
    foobar.doSomething()
} catch(NullPointerException e) {
    // Null Exception
}
```

이후 엄청난 **if / try** 문에 둘러싸이게 된다. Null 일수도 Null이 아닐 수도 있지만 Null 처리를 해주는게 안전할 수 있습니다. 앱이 죽는것보다는 낫기 때문에..


## 코틀린을 사용하면
#### 변수 정의
```kotlin
// 읽기 가능
val a: Int = 1
// 읽기 가능, 타입 추론
val b = 1
// 읽기 쓰기 가능
var c = 10
// 에러! 초기화 않음
val d:Int
// nullable이지만 생성자에서 반드시 초기화 해야함
val e: Int?
// nullable이지만 에러! 초기화하지 않음
var f:Int?
```

어떤 값을 가지는지 값이 바뀔 여지가 있느지에 대해 고민하고 코드를 작성하게 해 NPE를 막는 데 많은 도움을 줄 수 있습니다. Null을 가질 수 있는 변수를 올바르게 처리하지 않으면 컴파일러에서 에러를 발생시킵니다.

```kotlin
// foobar가 null이 아닌 경우 doSomething() 호출
foobar?.doSomething()
```
#### 보일러 플레이트 개선
```kotlin
button.setOnClickListener { view -> doSomething(view) }
button.setOnClickListener(this::doSomething)

// 파라미터 사용하지 않음
button.setOnClickLisnster { doSomething() }
```
자바 6버전 이상 호환되기 때문에 SDK에 제한적이지 않습니다.

#### Extension Function
확장 함수(Extension Function)는 이미 존재하는 클래스에 새로운 메소드를 추가할 수 있는 기능입니다.

```kotlin
fun Context.toast(message: CharSequence) {
    Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
}
```
```kotlin
context.toast("토스트 토스트 토스트")
```

#### View Injection
```xml
<!-- main.xml -->
<Button
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"/>
```
```kotlin
// main.xml 기준으로 뷰 인젝션
import kotlinx.android.synthetic.main.main.view.*

// Button
button.setOnClickListener {
    
}
```

#### Java 100% 호환
공식 사이트에서도 100% interoperable with Java and Android 라고 합니다. [공식 사이트](https://kotlinlang.org/)

일반 자바코드를 사용하는 데 있어 뭔가를 통할 필요가 없어 일반 자바 코드를 작성하듯이 사용할 수 있습니다.


## 정리
소스 코드를 더 간결하게 표현할 수 있고, 간결하게 표현함으로써 코드에서 발생할 수 있는 버그를 줄이며, 익숙해지면 자바 코드보다 더 나은 가독성을 가진 코드를 생산할 수 있습니다. 