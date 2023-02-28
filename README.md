# SDK plataforma nodejs

- [Installation](#install)
- [Getting Started](#getting-started)

## Installation

npm

```
npm i @autodocdev/sdk-plataforma-nodejs
```

## Getting Started

Exemplo de importação e uso do método ping.

```js
import { Sso } from '@autodocdev/sdk-plataforma-nodejs';

var sso = new Sso();

sso.withUrl('https://host/v1').ping()
	.then(response => console.log('Hello', response, '!'))
	.catch(err => console.log('Got an error!', err));
```
