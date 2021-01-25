const moduleNpm = require("../src/module")
const path = require("path")

const api = new moduleNpm({load: path.resolve(__dirname,"../test.json")})

api.set("user1","Cool")
api.write(path.resolve(__dirname, "../test.json")).then((rs) => {
    console.log(api.firstValue())
})