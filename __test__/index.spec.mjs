import test from 'ava'

import { realname, username, lang, devicename, hostname, distro, desktopEnv } from '../index.js'

test('realname from native', (t) => {
  if(realname()){
    console.log(realname());
    t.pass()
  }
})
test('username from native', (t) => {
  if(username()){
    console.log(username());
    t.pass()
  }
})
test('lang from native', (t) => {
  if(lang()){
    console.log(lang());
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

