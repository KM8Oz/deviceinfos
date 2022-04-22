#![allow(dead_code)]
#![allow(unused_variables)]

#![deny(clippy::all)]
#[macro_use]
extern crate napi_derive;
extern crate whoami;
extern crate machine_uid;
extern crate mac_address;
// use napi::bindgen_prelude::*;
#[napi]
fn realname() -> String { 
  return whoami::realname();
}

#[napi]
fn username() -> String { 
  return whoami::username();
}

#[napi]
fn lang() -> String { 
  let s: String = whoami::lang().collect::<Vec<String>>().join(", ");
  return s;
}

#[napi]
fn devicename() -> String { 
  return whoami::devicename();
}

#[napi]
fn hostname() -> String { 
  return whoami::hostname();
}

#[napi]
fn distro() -> String { 
  return whoami::distro();
}

#[napi]
fn desktop_env() -> String { 
  return whoami::desktop_env().to_string();
}

#[napi]
fn machineid() -> String { 
  return machine_uid::get().unwrap();
}

#[napi]
fn active_mac_address() -> String { 
  return match mac_address::get_mac_address().unwrap().as_mut() {
    Some(v) => v.clone().to_string(),
    None => "no mac address found!".to_string(),
   };
}

#[napi]
fn mac_address_by_name(s:String) -> String { 
  let name: &str = &s[..];
  return match mac_address::mac_address_by_name(name).unwrap().as_mut() {
    Some(v) => v.clone().to_string(),
    None => "no mac address found!".to_string(),
   };
}
