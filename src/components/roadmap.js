import React, { useEffect } from "react";
import WebFont from 'webfontloader';
import {
  //Row,
 // Col,
  //Container,
  //Card,
 // ProgressBar
} from "react-bootstrap";

const Roadmap = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Purple Purse', 'Roboto']
      }
    });
  }, []);

  return (
    // <div className="roadmap-container purple-text">
    //   <div className="roadmap-header text-center" id="roadmap">
    //     Roadmap
    //   </div>    
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       October 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Artwork Development<br />
    //         Website Launch<br />
    //         Social Media Launch
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       November 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Artwork published<br />
    //         Minting accessible<br />
    //         10 Dirty Donkeys Giveaway at 10% minted<br />
    //         St.Judes Charity Wallet Created
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       December 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Top holder will get custom NFT<br />
    //         Art competition for Prizes<br />
    //         Interviews for new Dirty Donkey team members<br />
    //         New website development
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       January 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text2 text-center position-absolute">
    //         Dirty Donkey Merchandise store???<br />
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       February 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text1 text-center position-absolute">
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       March 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text1 text-center position-absolute">            
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    // </div>
  <center>  
    
    <div className="head text-center" id="roadmap">
         Roadmap
       </div>  
<div className="roadmap-container purple-text">
       
       <div className="roadmap-panel mb-2 mb-sm-5">
         <div className="roadmap-title text-center">
           Floaters Rewards
         </div>
         <div>
        <center> After Floaters sellout, 50% of the money made from the minting process will be put into different sources of income including: staking, yield farming, play to earn scholarships, marketing, launch pools,Floaters virtual (explained below) We will also use half of all secondary market revenue to constantly grow this portfolio. Each month holders can claim or compound their awards. The % of return will keep on growing depending on how many aftermarket sales there are so the earlier you get in the more money you will get back!
</center> <div >
             <br />
            
           </div>
         </div>
       </div>
       <div className="roadmap-panel mb-2 mb-sm-5">
         <div className="roadmap-title text-center">
         Floaters Membership
         </div>
         <div>
        <center> 
We will launch our official holder membership perks, Giving holders exclusive access to top NFT projects, airdrops & more!
</center> <div >
             <br />
            
           </div>
         </div>
       </div>
       <div class= "background-color: transparent">
       <div className="roadmap-panel mb-2 mb-sm-5" >
         <div className="roadmap-title text-center">
          
         Floaters Virtual

         </div>
         <div>
        <center> 
Aside from the great awards that floaters have to offer, we will also buy land in The Sandbox Metaverse, Axie Infinity, and Decentraland to really bring floaters to life, not only to create a place for all the floaters to unite but we will also monetize this land to create passive income so the holders can collect the awards.
</center> <div >
             <br />
            </div>
           </div>
         </div>
       </div>
       <div className="roadmap-panel mb-2 mb-sm-5">
         <div className="roadmap-title text-center">
         Floaters Community Polls
         </div>
         <div>
        <center>
Holders will make decisions on all our future plans. There will be polls multiple times per month to decide what are the next steps for the Floaters universe.
</center> <div >
             <br />
            
           </div>
         </div>
       </div>
      
      
     </div>


 

 
   
    </center>
  );
};

export default Roadmap;