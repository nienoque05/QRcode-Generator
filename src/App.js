import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
function App() {
  const [link, setLink] = useState("");
  const [dowload, setDownload] = useState("");


function handleGenerate(link_url){
  QRCodeLink.toDataURL(link_url,{
    width: 600,
    margin: 3,
  }, function(err, url){
    setDownload(url);
  })
}
function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value)
}
  return (
    <div className="container">
<input
      className="input"
        placeholder="Digite seu Link..."
        value={link}
        onChange={(e) => handleQrcode(e)}
    />
    <a href={dowload} download={`qrcode.png`}>
      BAIXAR

<BsFillArrowDownCircleFill size={24} color="#FFF"/> 

    </a>
   
    </div>
  );
}

export default App;
