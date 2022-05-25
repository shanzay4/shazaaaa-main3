import React from "react";
import {Accordion} from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-header text-center purple-text " id="faq">
      
        FAQ
      </div>
      
    
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Floaters Rewards
</Accordion.Header>
          <Accordion.Body>
          After Floaters sellout, 50% of the money made from the minting process will be put into different sources of income including: staking, yield farming, play to earn scholarships, marketing, launch pools,Floaters virtual (explained below) We will also use half of all secondary market revenue to constantly grow this portfolio. Each month holders can claim or compound their awards. The % of return will keep on growing depending on how many aftermarket sales there are so the earlier you get in the more money you will get back!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Q:How many ELE FANS NFTs do I need to hold to buy 5 Nano passes?</Accordion.Header>
          <Accordion.Body>
          The ELE FANS NFT will be your subscription to all competitions, <br/> Each NFT will whitelist you for the Nano Passes.
           To buy 5 nano passes you will need to hold 5 ELE FANS NFTs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Q:Following the prizes, charity donation and adding to the community fund, What happens to the rest of the funds?</Accordion.Header>
          <Accordion.Body>
          The funds will go towards salaries, partnerships and marketing. <br/> All aspects of the project that needs funding will be funded from that. <br/> The Community funds will be used strictly for <br/> the community giveaways nothing else and the charity funds will be used strictly for charities.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Q:How many NFTS can one buy on launch?</Accordion.Header>
          <Accordion.Body>
          There is no limit to how many NFTs can be bought per wallet. <br/> There will be a transaction limit of 10 NFTs per transaction.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Q:How can i mint the NFTs and the Nano passes?</Accordion.Header>
          <Accordion.Body>
          The minting of the ELE FANS
           NFT and all the nano passes will happen here on our website.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Q:What is the supply amounts of the Nano passes?</Accordion.Header>
          <Accordion.Body>
          The nano passes supply changes per competition. <br/> See the Roadmap for details on the competitions and the supply for each competition.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Q:Are there benefits to holding multiple ELE FANS NFTs?</Accordion.Header>
          <Accordion.Body>
          There is a few benefits. <br/>

1- ELE FANS NFTs are limited to 10,000 supply, <br/> 100 NFTS will be given back to the community throughout the first year.

<br/>2- ELE FANS NFTs will have Rarity traits and will be of different value

<br/> 3- ELE FANS NFT will be your lifetime subscription to enter all competitions and giveaways for the community.

<br/> 4- ELE FAN NFT is your entry to the first competition which up to two winners will WIN a Tesla Model 3.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Q:How and where will the competitions be drawn?</Accordion.Header>
          <Accordion.Body>
          All our competitions will be drawn LIVE on our YouTube channel. <br/> Make sure you subscribe to get all the notifications.
         <br/>All the draws will be done using random.org on live stream.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Q:How will the live draw work?</Accordion.Header>
          <Accordion.Body>
          The live draw will be done on random.org.<br/>

The process is:<br/>

1- we will state the LIVE TIME in GMT format to ensure that we are live and it's not recorded.

<br/>2- We will open random.org on a browser which is in 'private browsing mode' to ensure no cache data is in play.

<br/>3- We will draw a minimum of 5 numbers drawn to ensure that the software is random. <br/> it will be in a range of numbers that is not included in the actual draw.

<br/>4- we will then setup the draw numbers and pick the winners.

<br/> 4.1- If the draw is crowning multiple winners we will use the same draw.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Q:How will you know you are rewarding the prizes to the right winners?</Accordion.Header>
          <Accordion.Body>
          All winners of the competitions will need to be verified <br/> by ID to ensure we are rewarding the rightful winners.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>Q:The giveaways are the same as the competitions?</Accordion.Header>
          <Accordion.Body>
          The giveaways are not the same as the competitions, <br/> the competitions require nanopasses and will be minted from our website. <br/> The giveaways are done randomly on our discord, the prizes are ELE FANS NFT, ETH, BTC and many more. <br/> They are available for our community even if you are not an ELE FANS NFT holder.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
     
  );
};

export default FAQ;