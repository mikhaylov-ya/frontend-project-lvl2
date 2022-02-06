### Tests and linter status:
[![Actions Status](https://github.com/mikhaylov-ya/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mikhaylov-ya/frontend-project-lvl2/actions)
![Node CI](https://github.com/mikhaylov-ya/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/cbc777f2dd912bc9390e/maintainability)](https://codeclimate.com/github/mikhaylov-ya/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cbc777f2dd912bc9390e/test_coverage)](https://codeclimate.com/github/mikhaylov-ya/frontend-project-lvl2/test_coverage)

# Difference finder
## Installation and launch
```
make install
npm link
```

To launch in your terminal use command
```bash
gendiff <filepath1> <filepath2>
```
Options
```
-V, --version        output the version number
-f, --format <type>  output format (default: "stylish", also — "plain" and "json", examples below)
-h, --help           display help for command
```

Validate, format, and compare two JSON/YAML documents. Print the differences between two objects in various formats:
 - **Structured** (*'stylish'* format option)
 ```
 {
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
 ```
- **Plain** (*'plain'* format option)
```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```
- **As JSON** (*'json'* format option)

## 'Stylish' format of plain JSON and YAML diff
[![asciicast](https://asciinema.org/a/qsR71MUeRODWVi18EGMHuXlj7.svg)](https://asciinema.org/a/qsR71MUeRODWVi18EGMHuXlj7)

## 'Stylish' format of nested JSONs diff
[![asciicast](https://asciinema.org/a/QNiYramQXVzUVCL1BzPf4cmGG.svg)](https://asciinema.org/a/QNiYramQXVzUVCL1BzPf4cmGG)

## 'Plain' format of nested JSONs diff
[![asciicast](https://asciinema.org/a/FQyA3W0d1rAnYPNuBssGRwThu.svg)](https://asciinema.org/a/FQyA3W0d1rAnYPNuBssGRwThu)

## 'JSON' format of nested JSONs diff
[![asciicast](https://asciinema.org/a/H8onbb2konM6D1il1iKG1sJfC.svg)](https://asciinema.org/a/H8onbb2konM6D1il1iKG1sJfC)
