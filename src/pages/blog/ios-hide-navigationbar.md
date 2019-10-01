---
layout: article
title: iOS NavigationBar 숨기는 방법
date: 2018-04-19
tags: [iOS]
comments: true
---

```swift
override func viewWillAppear(_ animated: Bool) {
    self.navigationController?.setNavigationBarHidden(true, animated: animated)
    super.viewWillAppear(animated)
}
    
override func viewWillDisappear(_ animated: Bool) {
    self.navigationController?.setNavigationBarHidden(false, animated: animated)
    super.viewWillAppear(animated)
}
```

<!--more-->