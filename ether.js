import { Contract, AlchemyProvider } from "ethers";
import { AggregatorV3InterfaceABI } from "@chainsafe/web3-plugin-chainlink/lib/aggregator_v3_interface_abi.js"
import { MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink"
const provider = new AlchemyProvider("mainnet","your-api-key");
const contract = new Contract(MainnetPriceFeeds.LinkEth,
    AggregatorV3InterfaceABI,
    provider);

contract.latestRoundData().then(console.log)