const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then((res) => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
{
    from: "Rahul",
    to: "Shiva",
    msg: "which skills u r learning",
    created_at: new Date()
},
{
    from: "neha",
    to: "kavita",
    msg: "send me english notes",
    created_at: new Date()
},
{
    from: "Dheeraj",
    to: "Satish",
    msg: "let's go for film",
    created_at: new Date()
},
{
    from: "Pawan",
    to: "Rahul",
    msg: "Will you eat muruku",
    created_at: new Date()
}
];

Chat.insertMany(allChats);