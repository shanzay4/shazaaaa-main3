import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact.js";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0x796da3da7c724a79803bab3abb7ef91df2c63925";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(contractABI, contractAddress);  

const mintNFT = async(amount, price) => {  
  const {address} = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false, 
      status: "❗Please make sure wallet connected.",           
    }
  }  
  else {      
    contract.methods.mint(amount).send({from: address, gasPrice: 80000000000, gas: 380000*amount, value: (amount * price)})
    .on("confirmation", function () {      
    })
    .on('error', async function (error, receipt) {
      console.log(error);      
    }); 

    return {
      status: "",
    }   
    
  }
}    

const Mint = () => {
  const [walletAddress, setWallet] = useState("");  
  const [show, setShow] = useState(false);
  const [tokenNumber, setTokenNumber] = useState(1);
  const [status, setStatus] = useState(""); 
  const publicsale = true;
  const [supply, setSupply] = useState(0);

  const handleClose = () => setShow(false);  
  const publicsale_price = 50000000000000000;

  const handleShow = async () => {  
    setShow(true);   
  };

  const onMintHandle = () => {       
    setStatus("Mint not allowed!");
  };

  const decreaseTokenNumber = () => {
    if (tokenNumber === 1) {
      return;
    }
    setTokenNumber(tokenNumber - 1);
  }

  const onMintPressed = async () => {          
    const { status } = await mintNFT(tokenNumber, publicsale_price); 
      setStatus(status);         
  };

  

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);          
        } else {
          setWallet("");          
        }
      });
    } else {
         
    }
  } 

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();    
    setWallet(walletResponse.address);
  };

  return (
    <div className="mint-container purple-text">
      <div className="mint-header text-center" id="mint">
      
      </div>
      <div className="mint-panel">
        <div className="mint-header text-center">
        <h1> Floaters </h1>
        </div>
        <div className="mint-narration text-center">
         <center> Welcome to Floaters NFT </center>
        </div>
       <div className="collage">
      <center><img src="./images/example.gif" alt="" width="150" height="150"/> </center>
        </div>
        <div className="mint-price"><br/>
         <center>Max per Tx 05</center>
         <center>Only 0.05 Eth Each</center>
        </div>
        <div className="text-center">
          <Button className="connect-btn mt-3" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (                    
              "" +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
              ) : (
                <span>Connect  Wallet</span>
              )
            } 
          </Button>
        </div>
        <div className="mint-status text-center">
         <center>{supply} / 987 Sold Out</center>  
        </div>



        
        <div className="text-center">
          <Button className="mint-btn mb-3 mb-md-5" onClick={handleShow} >
            Mint
          </Button>
        </div>
      </div>  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mint Some Floaters </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src="./images/example.gif" alt="" style={{maxWidth: "220px"}}/>
          <div className="mint-number">
            <button type="button" onClick={decreaseTokenNumber}><span aria-hidden="true">-</span></button>
            <Form>
              <Form.Label>
                { tokenNumber }
              </Form.Label>                  
              {status ? <div>{status}</div> 
                : <div></div>}
            </Form>
            {(tokenNumber < 987) ? <button type="button" onClick={() => setTokenNumber(tokenNumber + 1)}><span aria-hidden="true">+</span></button> 
              : <button type="button" onClick={() => setTokenNumber(tokenNumber)}><span aria-hidden="true">+</span></button>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          {(!publicsale) ? <Button variant="primary" onClick={onMintHandle}>Mint</Button> 
            : <Button variant="primary" onClick={onMintPressed}>Mint</Button>
          }              
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Mint;