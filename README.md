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

Usage:
```bash
gendiff [options] <filepath1> <filepath2>
```
Options
```
-V, --version        output the version number
-f, --format <type>  output format (default: "stylish", also — "plain" and "json", examples below)
-h, --help           display help for command
```

Validate, format, and compare two JSON/YAML documents. Print the differences between two objects in various formats:
 - **Structured** (*'stylish'* format option), for **nested** and plain objects
 ```
 {
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
 ```
- **Plain** (*'plain'* format option)
```
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
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
