# Magix-UI

> Magix-UI is a React.js UI library that contains a set of high quality componets for interactive user interfaces.

[![NPM](https://img.shields.io/npm/v/magix-ui.svg)](https://www.npmjs.com/package/magix-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## How to Install

```bash
npm install --save magix-ui
```

## Usage

```jsx
import React from 'react'

import { MagixButton } from 'magix-ui'
import 'magix-ui/dist/ui-style.css'

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <MagixButton  >Submit</MagixButton>
    </div>
  )
}

```

## Availabe Components

### Buttons

```jsx
<MagixButton>Submit</MagixButton>
```
### Attributes

 |  | |
--- | --- | ---
**Shapes** | `default`, `round`, `circle` |
**Types** | `inverse` 
**Actions**| `submit`, `href`, `to` *(Comming Soon)*
**Options**| `disabled`

### Ex:

```jsx
      <MagixButton round inverse>Round</MagixButton>
      <MagixButton round >Round</MagixButton>
      <MagixButton round disabled={true}>Round</MagixButton>
      <MagixButton  inverse>Submit</MagixButton>
      <MagixButton  >Submit</MagixButton>
      <MagixButton  disabled={true}>Submit</MagixButton>
      <MagixButton  circle>+</MagixButton>
      <MagixButton  circle inverse>+</MagixButton>
      <MagixButton  circle inverse disabled={true}>+</MagixButton>
```