# AxMap
A javascript map, only more compact and with other features that do not have in the standard javascript Map!

# Usage
**Set , get and remove functions**

```js
    const axmap = require("axmap")

    const map = new axmap()

    map.set("Hello","World") // Expected: Promise<void>
    map.get("Hello") // Expected: World

    map.remove("Hello") // Expected: Remove "Hello" element from map, returns the key | null
```

**Values and keys**
```js
    const axmap = require("axmap")

    const map = new axmap()
    map.set("Hello","World") // Expected: Promise<void>
    
    map.firstKey() // Expected: Hello
    map.firstValue() // Expected: World

    map.values() // Expected: [{key: "Hello", value: "World",index: 0}]
```

**JSONS**
*Load a map from JSON*
```js
   const axmap = require("axmap")

    const map = new axmap({load: require("path").resolve(__dirname,"path/to/json.json")})

    map.get("Hello") // Expected: World
```    

*Write a map to JSON*

```js
   const axmap = require("axmap")

    const map = new axmap()

    map.set("A","B")
    map.set("C","D")

     map.write(require("path").resolve(__dirname,"path/to/json.json")) // Expected: Promise<void>
```     

**Others functions**

*forEach*
```js
   const axmap = require("axmap")

    const map = new axmap()

    map.set(".",",")

    map.forEach((key, value, index) => /**Code*/)
```