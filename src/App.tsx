import React from 'react';
import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcOrganization, FcPositiveDynamic, FcCloseUpMode, FcBiomass, FcRating,FcPuzzle} from "react-icons/fc";
import profileImage from './components/Simbolo-MoneyLand.png';

function App() {
  const items:SideBarMenuItem[]=[
    {
      id: "1",
      label: "Hogar",
      icon: FcOrganization,
      url:"/",
    },
    {
      id: "2",
      label: "Comercio",
      icon: FcPositiveDynamic,
      url:"/",
    },
    {
      id: "3",
      label: "Fincas ONI",
      icon: FcCloseUpMode,
      url:"/",
    },
    {
      id: "4",
      label: "Quiniales",
      icon: FcBiomass,
      url:"/",
    },
    {
      id: "5",
      label: "Loteria",
      icon: FcRating,
      url:"/",
    },
    {
      id: "6",
      label: "Juegos",
      icon: FcPuzzle,
      url:"https://github.com/Mr-DecodeBlock/zims",
    },
  ];
  const card: SideBarMenuCard={
    id: "card01",
    displayName: "Money Land",
    title:"Intercambia de manera rapida y segura",
    photoUrl:profileImage,
    url:"/",
  };

  return (<div>
    <SideBarMenu items={items} card={card}/>
  </div>);

  <div className="App">
    <header className="App-header">
      <h1>hola</h1>
    </header>
  </div>
}

export default App;
