const fs = require("fs");
const width = 3200;
const height = 3200;
const dir = __dirname;
const description = "RetroGang.";
const baseImageUri = "https://RetroPixels/nft";
const startEditionFrom = 1;
const endEditionAt = 5000;
const editionSize = 5000;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Cyan",
            path: `${dir}/Background/Cyan.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/Background/Oragne.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "White",
            path: `${dir}/Background/White.png`,
            weight: 60,
          },
          {
            id: 3,
            name: "Special",
            path: `${dir}/Background/NEW.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Skin",
        elements: [
          {
            id: 0,
            name: "Black",
            path: `${dir}/Skins/Skin_Black.png`,
            weight: 90,
          },
          {
            id: 1,
            name: "White",
            path: `${dir}/Skins/Skin_White.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "Brown",
            path: `${dir}/Skins/Skin_Brown.png`,
            weight: 70,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "White",
            path: `${dir}/Eyes/Eyes_White.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Bloodshot",
            path: `${dir}/Eyes/Eyes_Bloodshot.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Nose",
        elements: [
          {
            id: 0,
            name: "Nose",
            path: `${dir}/Nose/Nose.png`,
            weight: 100,
          },
         
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "Normal",
            path: `${dir}/Mouth/Mouth.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Tops",
        elements: [
          {
            id: 0,
            name: "Blue Hoodie",
            path: `${dir}/Tops/Top_Hoodie_Blue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Green Hoodie",
            path: `${dir}/Tops/Top_Hoodie_Green.png`,
            weight: 85,
          },
          {
            id: 2,
            name: "Red Hoodie",
            path: `${dir}/Tops/Top_Hoodie_Red.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "Blue Jacket",
            path: `${dir}/Tops/Top_Jacket_Blue.png`,
            weight: 75,
          },
          {
            id: 4,
            name: "Green Jacket",
            path: `${dir}/Tops/Top_Jacket_Green.png`,
            weight: 70,
          },
          {
            id: 5,
            name: "Red Jacket",
            path: `${dir}/Tops/Top_Jacket_Red.png`,
            weight: 60,
          },
          {
            id: 6,
            name: "Blue Suit",
            path: `${dir}/Tops/Top_Suit_Blue.png`,
            weight: 55,
          },
          {
            id: 7,
            name: "Pink Suit",
            path: `${dir}/Tops/Top_Suit_Pink.png`,
            weight: 50,
          },
          {
            id: 8,
            name: "Red Suit",
            path: `${dir}/Tops/Top_Suit_Red.png`,
            weight: 40,
          },
          {
            id: 9,
            name: "Tanktop",
            path: `${dir}/Tops/Top_tank.png`,
            weight: 35,
          },
          {
            id: 10,
            name: "Green Tshirt",
            path: `${dir}/Tops/Top_Tshirt_Green.png`,
            weight: 30,
          },
          {
            id: 11,
            name: "Red Tshirt",
            path: `${dir}/Tops/Top_Tshirt_Red.png`,
            weight: 25,
          },
          {
            id: 12,
            name: "Tshirt",
            path: `${dir}/Tops/Top_Tshirt.png`,
            weight: 20,
          },
          {
            id: 13,
            name: "Diamond Armor",
            path: `${dir}/Tops/Top_Diamond_Armor.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/Beard/No.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Black Beard",
            path: `${dir}/Beard/Beard_Black.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "Brown Beard",
            path: `${dir}/Beard/Beard_Brown.png`,
            weight: 40,
          },
          {
            id: 3,
            name: "Long Beard",
            path: `${dir}/Beard/Beard_Long.png`,
            weight: 30,
          },
          {
            id: 4,
            name: "Normal Beard",
            path: `${dir}/Beard/Beard_Normal.png`,
            weight: 20,
          },
          {
            id: 5,
            name: "Shadow Beard",
            path: `${dir}/Beard/Beard_Shadow.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/Mask/No.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Blue Mask",
            path: `${dir}/Mask/Mask_Blue.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "Black Mask",
            path: `${dir}/Mask/Mask_1.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Cigar",
            path: `${dir}/Mask/Mask_Cigar.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 5,
            name: "Bald",
            path: `${dir}/Hair/No.png`,
            weight: 100,
          },
          {
            
            id: 0,
            name: "Full Fade",
            path: `${dir}/Hair/Hair_Fade.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Hair1",
            path: `${dir}/Hair/Hair_Hair1.png`,
            weight: 40,
          },
          {
            id: 2,
            name: "Half Mowhawk",
            path: `${dir}/Hair/Hair_Half_Mowhawk.png`,
            weight: 30,
          },
          {
            id: 3,
            name: "Mowhawk",
            path: `${dir}/Hair/Hair_Mowhawk.png`,
            weight: 20,
          },
          {
            id: 4,
            name: "Fade",
            path: `${dir}/Hair/Hair_Transparent_Fade.png`,
            weight: 10,
          },
          
          
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Brows",
        elements: [
          {
            id: 0,
            name: "Black Brow",
            path: `${dir}/BRow/Brow_Black.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Brown Brow",
            path: `${dir}/BRow/Brow_Black.png`,
            weight: 90,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Glasses",
        elements: [
          {
            id: 0,
            name: "No Glasses",
            path: `${dir}/Glasses/No.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "3D Glasses",
            path: `${dir}/Glasses/Glasses_3D.png`,
            weight: 50,
          },
         
          {
            id: 2,
            name: "EyePatch Left",
            path: `${dir}/Glasses/Glasses_EyePatch_Left.png`,
            weight: 40,
          },
          {
            id: 3,
            name: "EyePatch Right",
            path: `${dir}/Glasses/Glasses_EyePatch.png`,
            weight: 30,
          },
          {
            id: 4,
            name: "Gold Glasses",
            path: `${dir}/Glasses/Glasses_Gold.png`,
            weight: 20,
          },
          {
            id: 5,
            name: "EyeBand",
            path: `${dir}/Glasses/Glasses_Headband.png`,
            weight: 15,
          },
          {
            id: 6,
            name: "OneEyed Glasses",
            path: `${dir}/Glasses/Glasses_OneEyed.png`,
            weight: 10,
          },
          {
            id: 7,
            name: "OverSized Glasses",
            path: `${dir}/Glasses/Glasses_OverSized.png`,
            weight: 5,
          },
          {
            id: 8,
            name: "OverSized Glasses 2",
            path: `${dir}/Glasses/Glasses_OverSized2.png`,
            weight: 4,
          },
          {
            id: 9,
            name: "ThugLife Glasses",
            path: `${dir}/Glasses/Glasses_ThugLife.png`,
            weight: 3,
          },
          
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
