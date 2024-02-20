<p align="center">A package that can simplify developer experience working with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" target="_blank">Regular expressions</a>.</p>
    <p align="center">
<a href="#" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://www.paypal.com/donate/?hosted_button_id=DENZZAD4EPNYY" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://twitter.com/nebur242" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

[Nebur Regex](https://github.com/Nebur242/nebur-regex) Package TypeScript starter repository.


## Installation

```bash
$ npm install nebur-regex
```

## Example CommonJs

```typescript
const NBR = require('nebur-regex');

const constraints = 
NBR
.iWantRegex()
.toContains('@')
.toBeEmail()
.end();

const isValid = constraints.test("test@test.com");

console.log(isValid); //true
```

## Example ES6 module

```typescript
import NBR from 'nebur-regex';

const constraints = 
NBR
.iWantRegex()
.toBeAlphanumeric()
.end();

const isValid = constraints.test("hello00nebur_");

console.log(isValid); //false
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Support

nebur-regex is an MIT-licensed open source project.

## Stay in touch

- Author - [Ruben Merson Nzaou](https://nebur242.com)
- Twitter - [@nebur242](https://twitter.com/nebur242)

## License

MIT License

Copyright (c) 2024, Ruben Merson Nzaou / nebur242, <rm.nzaou.etudes@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.