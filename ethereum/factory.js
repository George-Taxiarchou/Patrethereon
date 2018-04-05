import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x4c67c5F5ff516613A7cBcd81Bf09f682F0De6589'
);

export default instance;