---
title: 【JavaScript】素数の作成
date: 2022-02-12T17:16:57.676Z
description: 素因数分解がよく分からない、、
tag: JavaScript
---
```js
const to = 100
const from = 2
let numObj = {}

const makeArray = (from, to) => Array(to - from + 1).fill(from).map((x,i) => x + i)

makeArray(from, to).reduce((a,i) => {
  a[i] = true
  return a
}, numObj)

const turnFalse = num => {
  numObj[num] = false
  for(i = num * 2; i < to; i += num){
    numObj[i] = false
  }
}

const checkEachNum = num => {
  makeArray(from, num).forEach(x => {
    const len = makeArray(from, num).length +1
    if(x !== len && num % x === 0) {
      turnFalse(num)
    }
  })
}

makeArray(from, to).forEach(x => checkEachNum(x))

const isPrimeNum = obj => {
  for (let key in obj){
    if(obj[key]) {
      console.log(key)
    }
  }
}

isPrimeNum(numObj)
```