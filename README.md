# Makes UUIDs

[![TravisCI Build status](https://travis-ci.org/skyrpex/makes-uuids.svg?branch=master)](https://travis-ci.org/skyrpex/makes-uuids)

> Works with:
>
> <a href="https://github.com/vuejs/vue"><img src="https://img.shields.io/badge/vue-%5E2.0-green.svg" alt="Vue 2"></a>

Mixin for Vue that generates UUIDs. Each user ID has a unique UUID assigned to it.

## Installation

`npm install @skyrpex/makes-uuids`

## Usage

```html
<template>
  <form>
    <div class="form-group">
      <label :for="uuid('name')">Name</label>
      <input type="text" class="form-control" :id="uuid('name')" placeholder="Name">
    </div>
    <div class="form-group">
      <label :for="uuid('email')">Email</label>
      <input type="email" class="form-control" :id="uuid('email')" placeholder="Email">
    </div>
  </form>
</template>

<script>
import makesUuids from '@skyrpex/makes-uuids';

export default {
  mixins: [
    // The default method name is 'uuid'.
    makesUuids({ methodName: 'uuid' }),
  ],
};
</script>
```
