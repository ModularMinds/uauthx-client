const uxc = require("./dist")

const client = new uxc.UAuthXClient("http://localhost:5000")

client.signIn("tanmayvaij22@gmail.com", "tejomay123").then((res) => {
    console.log(res);
})
