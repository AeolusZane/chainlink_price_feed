import { ChainlinkPlugin, MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink"
import { Web3,HttpProvider } from "web3"

const web3 = new Web3(new HttpProvider("YOUR_PROVIDER_URL"))
const chainlinkPlugin = new ChainlinkPlugin()

web3.registerPlugin(chainlinkPlugin)

web3.chainlink.getPrice(MainnetPriceFeeds.LinkEth).then(console.log)
// {
//     roundId: 73786976294838212867n,
//     answer: 4185000000000000n,
//     startedAt: 1674178043n,
//     updatedAt: 1674178043n,
//     answeredInRound: 73786976294838212867n
// }
