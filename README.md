# deviceinfos : ![GitHub](https://img.shields.io/github/license/KM8Oz/deviceinfos?style=plastic) ![npms.io (quality)](https://img.shields.io/npms-io/quality-score/deviceinfos?style=plastic) ![npm](https://img.shields.io/npm/dw/deviceinfos?style=plastic) ![npm bundle size](https://img.shields.io/bundlephobia/min/deviceinfos?style=plastic)

> install : ``` yarn add deviceinfos ```

```native node module that provide device infos in different archs[arm7|64/x64]/platforms[darwin/windows]```
 
```
import test from 'ava'
import { realname, username, lang, devicename, hostname, distro, desktopEnv } from '../index.js'

test('realname from native', (t) => {
  if(realname()){
    t.pass()
  }
})
test('username from native', (t) => {
  if(username()){
    t.pass()
  }
})
test('lang from native', (t) => {
  if(lang()){
    t.pass()
  }
})
test('devicename from native', (t) => {
  if(devicename()){
    t.pass()
  }
})
test('hostname from native', (t) => {
  if(hostname()){
    t.pass()
  }
})
test('distro from native', (t) => {
  if(distro()){
    t.pass()
  }
})
test('desktopEnv from native', (t) => {
  if(desktopEnv()){
    t.pass()
  }
})
test('machineid from native', (t) => {
    if (machineid()) {
        t.pass()
    }
})

test('activeMacAddress from native', (t) => {
    if (activeMacAddress()) {
        t.pass()
    }
})

test('macAddressByName from native', (t) => {
    console.log(macAddressByName("lo"));
    if (macAddressByName("bridge0")) {
        t.pass()
    }
})


```

<img width="756" alt="Screen Shot 2022-04-23 at 2 51 33 AM" src="https://user-images.githubusercontent.com/5567515/164827512-16f06af5-d5cc-42ba-b1c1-55517e0e152a.png">
