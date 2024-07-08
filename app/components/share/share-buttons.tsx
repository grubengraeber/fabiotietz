"use client"

import React from 'react';
import { FacebookShare, TwitterShare, LinkedinShare, EmailShare, WhatsappShare } from 'react-share-kit';

const ShareButtons = () => {
  const shareUrl = process.env.NEXT_PUBLIC_API_URL!;
  const title = 'Check out the Fabio TIETZ portfolio website!'; // TODO: update with language

  return (
    <div className="share-buttons">
      <FacebookShare 
        url={shareUrl} 
        quote={title} 
        hashtag="#awesomeWebsite" 
        bgColor="#3b5998"
        round
        size={50}
      />
      <TwitterShare 
        url={shareUrl} 
        title={title} 
        hashtags={["#awesomeWebsite", "#frontend"]}
        bgColor="#1DA1F2"
        round
        size={50}
      />
      <LinkedinShare 
        url={shareUrl} 
        title={title} 
        bgColor="#0077b5"
        round
        size={50}
      />
      <EmailShare 
        url={shareUrl} 
        subject={title} 
        body="Check out this link: " // TODO: update with language
        bgColor="#000000"
        round
        size={50}
      />
      <WhatsappShare 
        url={shareUrl} 
        title={title} 
        separator=" - " 
        bgColor="#25D366"
        round
        size={50}
      />
    </div>
  );
};

export default ShareButtons;