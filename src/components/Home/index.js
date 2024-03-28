import MetaMask from '../MetaMask';
import CryptoCurrencyPrices from '../cryptoCurrencyPrices';
import GraphPopulationData from '../graphPopulationData';



const Home = () => (
<div className='container-fluid w-100 overflow-hidden pb-5 pl-5'>
    <div className='row'>
        <div className='col-12 p-0'>
            <div className='row'>
                <div className='col-12 m-0 p-0 w-100'>
                    <div>
                    <GraphPopulationData />
                    </div>
                    <div>
                    <CryptoCurrencyPrices />
                    </div>
                    <div>
                        <MetaMask />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default Home;
