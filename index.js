const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      return readFileSync('/usr/bin/ldd', 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'deviceinfos.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.android-arm64.node')
          } else {
            nativeBinding = require('deviceinfos-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'deviceinfos.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.android-arm-eabi.node')
          } else {
            nativeBinding = require('deviceinfos-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'deviceinfos.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.win32-x64-msvc.node')
          } else {
            nativeBinding = require('deviceinfos-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'deviceinfos.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('deviceinfos-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'deviceinfos.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('deviceinfos-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'deviceinfos.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.darwin-x64.node')
          } else {
            nativeBinding = require('deviceinfos-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'deviceinfos.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./deviceinfos.darwin-arm64.node')
          } else {
            nativeBinding = require('deviceinfos-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { realname, username, lang, devicename, hostname, distro, desktopEnv } = nativeBinding

module.exports.realname = realname
module.exports.username = username
module.exports.lang = lang
module.exports.devicename = devicename
module.exports.hostname = hostname
module.exports.distro = distro
module.exports.desktopEnv = desktopEnv
