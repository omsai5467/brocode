// const accountSid = "AC975fe3f86d866acfa45e70dd7ee90e5a";
// const authToken = "98e19bc9cb3b20dcb39ea99d1925b5b4";
// const client = require("twilio")(accountSid, authToken);

// async function sendmsg(num, msg) {
//   try {
//     client.messages
//       .create({
//         body: msg,
//         from: "whatsapp:+14155238886",
//         to: `whatsapp:+91${num}`,
//       })
//       .then((message) => console.log(message.sid))
//       .done();
//     return true;
//   } catch (EXP) {
//     await sleep(2000);
//     return false;
//   }
// }

// module.exports = sendmsg;
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
let whatsapp = false;
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    handleSIGINT: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  whatsapp = true;
  console.log("Client is ready!");
  const number = "+916301815817";

  // Your message.
  const text = "Hey john";

  // Getting chatId from the number.
  // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
  const chatId = number.substring(1) + "@c.us";

  // Sending message.
  client.sendMessage(chatId, text);
});
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.initialize();

async function sendWhatsapp_msg(number, msg) {
  console.log("in sendin msg");
  if (whatsapp) {
    try {
      console.log("in try bock");
      const chatId = number.substring(1) + "@c.us";
      await client.sendMessage(chatId, msg);
      return true;
    } catch (EXP) {
      console.log(EXP);
      console.log("in catch block bock");

      return false;
    }
  } else {
    console.log("in catch else block bock");
    return false;
  }
}
module.exports = sendWhatsapp_msg;
