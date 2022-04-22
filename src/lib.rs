#![deny(clippy::all)]
#[macro_use]
extern crate napi_derive;
extern crate whoami;
extern crate machine_uid;

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