import React from "react";
import "./cards.css";
import ImgAI from "../../images/Block-2(card.img)/ai.png";
import ImgBlockchain from "../../images/Block-2(card.img)/blockchain.png";
import ImgDevOpsCloud from "../../images/Block-2(card.img)/devopscloud.png";
import ImgMobileDev from "../../images/Block-2(card.img)/Mobiledev.png";
import ImgGame from "../../images/Block-2(card.img)/game.png";
import ImgIot from "../../images/Block-2(card.img)/iot.png";
import ImgMarketing from "../../images/Block-2(card.img)/marketing.png";
import ImgMetaverse from "../../images/Block-2(card.img)/metaverse.png";
import ImgWeb from "../../images/Block-2(card.img)/web.png";

export default function CardStructure() {
  const cards = [
    {
      imgSrc: ImgAI,
      heading: "AI Development",
      context:
        "AI and ML Development specialist, services including Natural Language Processing, Robotic Process Automation, Consulting, Recommendation Engines, and Chatbot Development",
    },
    {
      imgSrc: ImgBlockchain,
      heading: "Blockchain Development",
      context:
        "Blockchain Solutions, we specialize in Public, Private, and Hybrid Blockchain Development, Smart Contract Audits, NFT Marketplace Creation, and DeFi Applications.",
    },
    {
      imgSrc: ImgDevOpsCloud,
      heading: "DevOps and Cloud",
      context:
        "DevOps and Cloud Services, enabling businesses to optimize Software Development and infrastructure. CI/CD pipelines, Infrastructure as Code, Cloud Migration.",
    },
    {
      imgSrc: ImgGame,
      heading: "Game Development",
      context:
        "Game Development, including design, sound design, AR/VR, HTML5, and NFT Integration. Services span across various platforms, delivering immersive, captivating experiences.",
    },
    {
      imgSrc: ImgIot,
      heading: "IoT Development",
      context:
        "Internet of Things solutions are offered, integrating IoT with AI/ML, Blockchain, Metaverse, and Gaming. These services extend to smart automation, enhancing everyday.",
    },
    {
      imgSrc: ImgMarketing,
      heading: "Marketing Services",
      context:
        "Your One-stop Marketing Solution for Crypto, Blockchain, and Fintech businesses. We offer a comprehensive range of services including SEO, SMO, PPC, Influencer Marketing, Content Creation and PR.",
    },
    {
      imgSrc: ImgMetaverse,
      heading: "Metaverse Development",
      context:
        "Metaverse Development Services offer a wide range of solutions, including AR, VR, WebGL-based Gaming, and 3D Space Development.",
    },
    {
      imgSrc: ImgMobileDev,
      heading: "Mobile Apps Development",
      context:
        "Mobile App Development expertise is utilized to specialize in creating Native, Hybrid, and Decentralized Applications for iOS and Android platforms.",
    },
    {
      imgSrc: ImgWeb,
      heading: "Web Apps Development",
      context:
        "Web Application Development solutions are provided for businesses of all sizes, specializing in E-commerce, CMS, E-learning Platforms, and API Development.",
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.imgSrc} alt={card.heading} />
          <h3>{card.heading}</h3>
          <div className="context">
            {card.context.split("/n").map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
