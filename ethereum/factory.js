import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x461B1118A8328Ac84211ed6D568867Dc873510F7'
);

export default instance;