# Vue.js Inject Attributes Directive


This directive help you to add new attributes in html elements.

This directive help you to add new attributes in html elements.
I create this directive for me but maybe would help you.
If you had a contribute don't hesitate to suggest.

With that said, if you write this:
```
<template> 
  <div id="demo" v-inject-attributes="attrs" >
      <h1>{{title}}</h1>
      <ul>
          <li v-for="friend in friends" :id="friend.name" >
              {{ friend.name }}
          </li>
      </ul>
  </div>
</template> 

<script>
  import VueInjectAttributes from 'vue-inject-attributes'
  Vue.use(VueInjectAttributes)

  var demo = new Vue({
      el: '#demo',
      data: {
          title: 'My friends',
          friends: [
            {name:"Stark"},
            {name:"Targaryen"},
            {name:"Lannister"}
          ],
          attrs: {
            'class':'content',
              '$child':{
                'h1':{
                    'class':'title'
                  },
                'ul':{
                    '$child':{
                        'li':{'class': 'friend'},
                        'li#Snow':{'class': 'snow'}
                      }
                  }
              }
          }
      }
  })
</script>
<style scope>
  .friend{
    color: red;
  }
  .green{
      color: #0F0 !important;
  }
  .title{
      color: blue;
  }
</style>
```

It produces:
```
<div id="demo" class="content">
  <h1 class="title">My friends</h1> 
  <ul>
    <li id="Stark" class="friend green">Stark</li>
    <li id="Targaryen" class="friend">Targaryen</li>
    <li id="Lannister" class="friend">Lannister</li>
  </ul>
</div>
```

### Installation

``` bash
$ npm install vue-inject-attributes
```

### Usage

First, import it...

``` javascript
import VueInjectAttributes from 'vue-inject-attributes'
```

Then register it globally...
``` javascript
Vue.use(VueInjectAttributes); 
```
