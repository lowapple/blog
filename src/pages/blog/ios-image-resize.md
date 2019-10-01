---
layout: article
title: iOS 이미지 사이즈 조절하기
date: 2018-04-26
tags: [iOS]
comments: true
---

CheckBox를 제작하면서 이미지를 UIButton에 넣었다. 하지만 기존 이미지 사이즈가 생각보다 커서 직접 이미지 사이즈를 줄이기로 하였다. 하지만 Android처럼 간단하게 함수로 제공되지 않아서 개발자가 상황에 맞게 직접 작성해야 한다.

## SourceCode
```swift
func resizeImage(image: UIImage, width: CGFloat, height: CGFloat) -> UIImage {
    UIGraphicsBeginImageContext(CGSize(width: width, height: height))
    image.draw(in: CGRect(x: 0, y: 0, width: width, height: height))
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return newImage!
}
```

<!--more-->


위의 방법이 안되면 아래의 방법으로도 적용할 수 있다.
```swift
func resizeImage(image : UIImage, width : Float, height : Float) -> UIImage? {
    let cgWidth = CGFloat(width)
    let cgHeight = CGFloat(height)
    
    // Begine Context
    UIGraphicsBeginImageContext(CGSize(width: cgWidth, height: cgHeight))
    // Get Current Context
    let context = UIGraphicsGetCurrentContext()
    context?.translateBy(x : 0.0, y : cgHeight)
    context?.scaleBy(x: 1.0, y: -1.0)
    context?.draw(image.cgImage!, in: CGRect(x: 0.0, y: 0.0, width: cgWidth, height: cgHeight))
    let scaledImage : UIImage? = UIGraphicsGetImageFromCurrentImageContext()
    // End Context
    UIGraphicsEndImageContext()
    
    if (scaledImage != nil) {
        return scaledImage
    }
    else {
        return nil
    }
}
```
가로 세로 비율을 유지하면서 이미지 사이즈 줄이기
```swift
func resizeImage(image: UIImage, height: CGFloat) -> UIImage {
    let scale = height / image.size.height
    let width = image.size.width * scale

    UIGraphicsBeginImageContext(CGSize(width: width, height: height))
    image.draw(in: CGRect(x: 0, y: 0, width: width, height: height))
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return newImage!
}
```

사용
```swift
self.setImage(self.resizeImage(image: self.checkedImage, width: 16, height: 16), for: UIControlState.normal)
```

## 참고
http://pds0819.tistory.com/entry/iphone-UIButton-내-image-size-줄이는-방법

https://iosdevcenters.blogspot.com/2015/12/how-to-resize-image-in-swift-in-ios.html