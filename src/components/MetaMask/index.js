import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const MetaMask = () => {
    const [web3, setWeb3] = useState(null);
    const [networkId, setNetworkId] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const initWeb3 = async () => {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    const network = await web3Instance.eth.net.getId();
                    setNetworkId(network);
                    const accounts = await web3Instance.eth.getAccounts();
                    setUserAddress(accounts[0]);
                    window.ethereum.on('accountsChanged', handleAccountChange);
                } catch (error) {
                    setErrorMessage(error.message || 'User denied account access.');
                }
            };

            initWeb3();
        } else {
            setErrorMessage('MetaMask not detected.');
        }
    }, []);

    const handleAccountChange = (accounts) => {
        setUserAddress(accounts[0]);
    };

    const fetchUserBalance = async () => {
        if (web3 && userAddress) {
            try {
                const balance = await web3.eth.getBalance(userAddress);
                setUserBalance(web3.utils.fromWei(balance, 'ether'));
            } catch (error) {
                console.error('Error fetching user balance:', error);
                setErrorMessage('Error fetching user balance.');
            }
        }
    };

    useEffect(() => {
        fetchUserBalance();
    }, [web3, userAddress]);

    return (
        <div className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center pl-5 text-center">
            <h1 className="text-light w-100 fs-5 fs-md-4 fs-lg-3 fs-xl-2">MetaMask Connection</h1>
            <button type="button" className='btn btn-primary m-5' onClick={fetchUserBalance}>Fetch Balance</button>
            <div className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
            <h2 className="text-light" style={{ fontSize: "22px",  }}>
  Address: </h2>
  <p 
    className='d-inline-block p-3' 
    style={{
      color: "#fff222",
      fontSize: "18px",
      height: "auto",
      backgroundColor: "#111111",
      overflow: "hidden",
      whiteSpace: "break-spaces", 
      wordWrap: "break-word",
      width:"70%"
    }}
  >
    {userAddress}
  </p>

      <h3 className="text-light" style={{fontSize: "22px"}}>Balance: {userBalance} ETH</h3>
            {errorMessage && <p className='text-light'>{errorMessage}</p>}
            </div>
            
        </div>
    );
};

export default MetaMask;
