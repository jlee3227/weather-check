module.exports = {
    name: "help",
    description: "Learn about how this bot works!",
    execute(message, args) {
        message.channel.send(
            '`!wttr -location -[f]` => Get the weather for a location' + 
            '\n\t`-[f]` => (Optional) Use Fahrenheit'
        )
    }
}