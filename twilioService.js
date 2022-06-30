require("dotenv").config()
const twilio = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

/********************************************************************************************************/

// Prerequisite of using Twilio. Please refer official doc link of twilio -https://support.twilio.com/hc/en-us/articles/223136107-How-does-Twilio-s-Free-Trial-work-
async function sendSMS() {
    try {

        await twilio.messages.create({
            body: "Hello !!!  This is Nishant's twilio integration for github.",
            from: process.env.FROM_NUMBER,
            to: `+918888888888`, //Replace this with the number to which you want to send sms. And don't forget to append country code with it.
        })


    } catch (error) {
        console.log("Error ocurred in sending SMS: ", error)
    }
}

/*  NOTE--> If you want to send sms to any number with your trial account then you first need to add that number to verified numbers list.
    Please refer this article for more clarification - https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio
*/