warning: LF will be replaced by CRLF in p4/package.json.
The file will have its original line endings in your working directory
[1mdiff --git a/p4/package-lock.json b/p4/package-lock.json[m
[1mindex e146fe6..0e75e8b 100644[m
[1m--- a/p4/package-lock.json[m
[1m+++ b/p4/package-lock.json[m
[36m@@ -923,12 +923,40 @@[m
         "glob-to-regexp": "^0.3.0"[m
       }[m
     },[m
[32m+[m[32m    "@nodelib/fs.scandir": {[m
[32m+[m[32m      "version": "2.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-eGmwYQn3gxo4r7jdQnkrrN6bY478C3P+a/y72IJukF8LjB6ZHeB3c+Ehacj3sYeSmUXGlnA67/PmbM9CVwL7Dw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@nodelib/fs.stat": "2.0.3",[m
[32m+[m[32m        "run-parallel": "^1.1.9"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@nodelib/fs.stat": {[m
[32m+[m[32m          "version": "2.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-bQBFruR2TAwoevBEd/NWMoAAtNGzTRgdrqnYCc7dhzfoNvqPzLyqlEQnzZ3kVnNrSp25iyxE00/3h2fqGAGArA==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@nodelib/fs.stat": {[m
       "version": "1.1.3",[m
       "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",[m
       "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "@nodelib/fs.walk": {[m
[32m+[m[32m      "version": "1.2.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-1V9XOY4rDW0rehzbrcqAmHnz8e7SKvX27gh8Gt2WgB0+pdzdiLV83p72kZPU+jvMbS1qU5mauP2iOvO8rhmurQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@nodelib/fs.scandir": "2.1.3",[m
[32m+[m[32m        "fastq": "^1.6.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@nuxt/opencollective": {[m
       "version": "0.3.0",[m
       "resolved": "https://registry.npmjs.org/@nuxt/opencollective/-/opencollective-0.3.0.tgz",[m
[36m@@ -1174,6 +1202,83 @@[m
         "@vue/cli-shared-utils": "^4.0.5"[m
       }[m
     },[m
[32m+[m[32m    "@vue/cli-plugin-unit-mocha": {[m
[32m+[m[32m      "version": "4.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/cli-plugin-unit-mocha/-/cli-plugin-unit-mocha-4.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RbWrkiDrstvAgmSZ0GLcNg5rErGLQEFRtxAXBDiJEcQHwB90jStPxutMCyb2lynCjhWh1VWTDHrjkmQejOKQZw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@vue/cli-shared-utils": "^4.1.1",[m
[32m+[m[32m        "jsdom": "^15.2.1",[m
[32m+[m[32m        "jsdom-global": "^3.0.2",[m
[32m+[m[32m        "mocha": "^6.2.2",[m
[32m+[m[32m        "mochapack": "^1.1.12"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@vue/cli-shared-utils": {[m
[32m+[m[32m          "version": "4.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/@vue/cli-shared-utils/-/cli-shared-utils-4.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-nsxNW8Sy9y2yx/r9DqgZoYg/DoygvASIQl0XXG+imQUDWEXKmD6UZA6y5ANfStCljzZ/wd7WgWP+txmjy6exOw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "@hapi/joi": "^15.0.1",[m
[32m+[m[32m            "chalk": "^2.4.1",[m
[32m+[m[32m            "execa": "^1.0.0",[m
[32m+[m[32m            "launch-editor": "^2.2.1",[m
[32m+[m[32m            "lru-cache": "^5.1.1",[m
[32m+[m[32m            "node-ipc": "^9.1.1",[m
[32m+[m[32m            "open": "^6.3.0",[m
[32m+[m[32m            "ora": "^3.4.0",[m
[32m+[m[32m            "request": "^2.87.0",[m
[32m+[m[32m            "request-promise-native": "^1.0.8",[m
[32m+[m[32m            "semver": "^6.1.0",[m
[32m+[m[32m            "string.prototype.padstart": "^3.0.0",[m
[32m+[m[32m            "strip-ansi": "^6.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ansi-regex": {[m
[32m+[m[32m          "version": "5.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "request-promise-core": {[m
[32m+[m[32m          "version": "1.1.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-QIs2+ArIGQVp5ZYbWD5ZLCY29D5CfWizP8eWnm8FoGD1TX61veauETVQbrV60662V0oFBkrDOuaBI8XgtuyYAQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "lodash": "^4.17.15"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "request-promise-native": {[m
[32m+[m[32m          "version": "1.0.8",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.8.tgz",[m
[32m+[m[32m          "integrity": "sha512-dapwLGqkHtwL5AEbfenuzjTYg35Jd6KPytsC2/TLkVMz8rm+tNt72MGUWT1RP/aYawMpN6HqbNGBQaRcBtjQMQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "request-promise-core": "1.1.3",[m
[32m+[m[32m            "stealthy-require": "^1.1.1",[m
[32m+[m[32m            "tough-cookie": "^2.3.3"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "semver": {[m
[32m+[m[32m          "version": "6.3.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "strip-ansi": {[m
[32m+[m[32m          "version": "6.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ansi-regex": "^5.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@vue/cli-plugin-vuex": {[m
       "version": "4.0.5",[m
       "resolved": "https://registry.npmjs.org/@vue/cli-plugin-vuex/-/cli-plugin-vuex-4.0.5.tgz",[m
[36m@@ -1488,6 +1593,16 @@[m
       "integrity": "sha512-8VCoJeeH8tCkzhkpfOkt+abALQkS11OIHhte5MBzYaKMTqK0A3ZAKEUVAffsOklhEv7t0yrQt696Opnu9oAx+w==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "@vue/test-utils": {[m
[32m+[m[32m      "version": "1.0.0-beta.29",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@vue/test-utils/-/test-utils-1.0.0-beta.29.tgz",[m
[32m+[m[32m      "integrity": "sha512-yX4sxEIHh4M9yAbLA/ikpEnGKMNBCnoX98xE1RwxfhQVcn0MaXNSj1Qmac+ZydTj6VBSEVukchBogXBTwc+9iA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "dom-event-types": "^1.0.0",[m
[32m+[m[32m        "lodash": "^4.17.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@vue/web-component-wrapper": {[m
       "version": "1.2.0",[m
       "resolved": "https://registry.npmjs.org/@vue/web-component-wrapper/-/web-component-wrapper-1.2.0.tgz",[m
[36m@@ -1682,6 +1797,12 @@[m
       "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "abab": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-tsFzPpcttalNjFBCFMqsKYQcWxxen1pgJR56by//QwvJc4/OUS3kPOOttx2tSIfjsylB0pYu7f5D3K1RCxUnUg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "accepts": {[m
       "version": "1.3.7",[m
       "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",[m
[36m@@ -1698,6 +1819,16 @@[m
       "integrity": "sha512-/czfa8BwS88b9gWQVhc8eknunSA2DoJpJyTQkhheIf5E48u1N0R4q/YxxsAeqRrmK9TQ/uYfgLDfZo91UlANIA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "acorn-globals": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "acorn": "^6.0.1",[m
[32m+[m[32m        "acorn-walk": "^6.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "acorn-jsx": {[m
       "version": "5.1.0",[m
       "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.1.0.tgz",[m
[36m@@ -1854,6 +1985,12 @@[m
       "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "array-equal": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "array-flatten": {[m
       "version": "1.1.1",[m
       "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",[m
[36m@@ -1934,6 +2071,12 @@[m
       "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "assertion-error": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "assign-symbols": {[m
       "version": "1.0.0",[m
       "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",[m
[36m@@ -2099,6 +2242,30 @@[m
         "resolve": "^1.4.0"[m
       }[m
     },[m
[32m+[m[32m    "babel-runtime": {[m
[32m+[m[32m      "version": "6.26.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "core-js": "^2.4.0",[m
[32m+[m[32m        "regenerator-runtime": "^0.11.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "core-js": {[m
[32m+[m[32m          "version": "2.6.11",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",[m
[32m+[m[32m          "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "regenerator-runtime": {[m
[32m+[m[32m          "version": "0.11.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "balanced-match": {[m
       "version": "1.0.0",[m
       "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",[m
[36m@@ -2348,6 +2515,18 @@[m
       "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "browser-process-hrtime": {[m
[32m+[m[32m      "version": "0.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-0.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-bRFnI4NnjO6cnyLmOV/7PVoDEMJChlcfN0z4s1YMBY989/SvlfMI1lgCnkFUs53e9gQF+w7qu7XdllSTiSl8Aw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "browser-stdout": {[m
[32m+[m[32m      "version": "1.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "browserify-aes": {[m
       "version": "1.2.0",[m
       "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",[m
[36m@@ -2703,6 +2882,20 @@[m
       "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "chai": {[m
[32m+[m[32m      "version": "4.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chai/-/chai-4.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-XQU3bhBukrOsQCuwZndwGcCVQHyZi53fQ6Ys1Fym7E4olpIqqZZhhoFJoaKVvV17lWQoXYwgWN2nF5crA8J2jw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "assertion-error": "^1.1.0",[m
[32m+[m[32m        "check-error": "^1.0.2",[m
[32m+[m[32m        "deep-eql": "^3.0.1",[m
[32m+[m[32m        "get-func-name": "^2.0.0",[m
[32m+[m[32m        "pathval": "^1.1.0",[m
[32m+[m[32m        "type-detect": "^4.0.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "chalk": {[m
       "version": "2.4.2",[m
       "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",[m
[36m@@ -2719,6 +2912,12 @@[m
       "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "check-error": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/check-error/-/check-error-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-V00xLt2Iu13YkS6Sht1sCu1KrII=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "check-types": {[m
       "version": "8.0.3",[m
       "resolved": "https://registry.npmjs.org/check-types/-/check-types-8.0.3.tgz",[m
[36m@@ -3554,6 +3753,29 @@[m
         "css-tree": "1.0.0-alpha.37"[m
       }[m
     },[m
[32m+[m[32m    "cssom": {[m
[32m+[m[32m      "version": "0.4.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cssstyle": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QXSAu2WBsSRXCPjvI43Y40m6fMevvyRm8JVAuF9ksQz5jha4pWP1wpaK7Yu5oLFc6+XAY+hj8YhefyXcBB53gg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "cssom": "~0.3.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "cssom": {[m
[32m+[m[32m          "version": "0.3.8",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",[m
[32m+[m[32m          "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32