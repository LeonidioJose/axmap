const path = require("path")
const fs = require("fs")
const InternalError = require("./errors/InternalError")

class AxMap {
    
    constructor(opt = {load: false}) {
        this.object = {}

        if(opt.load && typeof opt.load == 'string') {
            this.object = require(opt.load)
        } else if(opt.load && typeof opt.load == 'object') {
            this.object = opt.load
        }

        this.size = Object.keys(this.object).length
    }

    /**
     * 
     * @param {string} key 
     * @param {any} value 
     */

    async set(key,value) {
        this.object[key] = value

        this.size = Object.keys(this.object).length
    }

    /**
     * 
     * @param {string} key 
     */
    get(key) {
        if(Object.keys(this.object).includes(key)) {
            return this.object[key]
        } else {
            return null
        }
    }

    values() {
        let val = Object.keys(this.object)
        let obj = []

        let z = 0

        for(let x of val) {
           obj.push({
               value: this.object[x],
               key:  x,
               index: z
           })

           ++z
        }
        return obj
    }

    /**
     * 
     * @param {import("axmap").forEachFunc} func 
     */
    forEach(func) {
        let key
        let value
        let index

        for(let x in Object.keys(this.object)) {
            index = x
            key = Object.keys(this.object)[x]
            value = this.object[key]

            func(key,value,index)
        }
    }

    /**
     * @param {import("axmap").path} path 
     */
    async write(path) {
        if(!path || typeof path != 'string') {
            throw new InternalError("Expected \"string\" received \"" + typeof path+'"')
        }
         fs.writeFileSync(path, JSON.stringify(this.object))
    } 

    /**
     * @param {string} key 
     */
    remove(key) {
        if(Object.keys(this.object).includes(key)) {
            delete this.object[key] 
            -- this.size
            return key
        } else {
            return null
        }
    }

    firstKey() {
        return Object.keys(this.object)[0]
    }

    firstValue() {
        return this.size == 0 ? undefined  : Object.values(this.object)[0]
    }
}

module.exports = AxMap