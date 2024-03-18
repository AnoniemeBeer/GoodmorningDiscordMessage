require('dotenv').config()

const channels = ["561268151422025749", "574586061813055489"]

const body = {
    "content": "Goeiemorgen"
}

for (let channel of channels) {
    let response = fetch(`https://discord.com/api/v9/channels/${channel}/messages`, {
        method: "POST",
        headers: {
            'Authorization': process.env.API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
}