module.exports = {
    name: "wttr",
    description: "Get the weather forecast for today and the next 2 days.",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`You need to provide a location ${message.author}!`)
        }

        args = args.map(arg => arg.replace(/\-/, ''));

        let url = args[1] === 'f' ? `https://wttr.in/${args[0]}_Qu.png` : `https://wttr.in/${args[0]}_Qm.png`;

        message.channel.send(`The weather for ${args[0]}`, {files: [url]})

    }
}