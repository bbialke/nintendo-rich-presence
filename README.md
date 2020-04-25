# Nintendo Rich Presence

Nintendo Rich Presence is... well, it's self explanatory. It's a simple ElectronJS application to update your status to fellow friends or server members when you're playing a Nintendo Switch game. The supported game library, as well as different options for each game, will continue to grow over time. Have an idea or suggestion for a game? Feel free to open an issue to discuss an addition!

## Installation

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org) (which comes with [npm](https://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/bbialke/nintendo-rich-presence.git
# Go into the repository
cd nintendo-rich-presence
# Install dependencies
npm install
# Run the app
npm start
```
## Usage

As soon as the program starts, you'll be able to see your status on Discord updated to "Getting Ready". You can then select a game to have your status updated to show that you're playing. You can take it a step further for some games though, and you can display additional info along with the game you're playing.

Please keep in mind that the Discord API has a rate-limit in place of 5 updates per 20 seconds, or 1 update per 4 seconds. The program has a built-in timer that will prevent you from triggering this ratelimit, you are required to wait 5 seconds in between each update of your presence. If you don't see your status update on click, try again in a few seconds.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
