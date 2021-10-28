import './App.css';
import MainContext from './MainContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Copied from './components/Copied';
import BrandsData from "./brands.json";
import {useState, useEffect} from "react";

function App() {
  const brandsArray = [] 

    Object.keys(BrandsData).map(key => brandsArray.push(BrandsData[key]));

    const [brands, setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState(false);
    
    useEffect(() => {
      var timeOut = setTimeout(() => {
        setCopied(false)
      }, 500);
      return () => {
        clearTimeout(timeOut)
      }
    }, [copied]);
    
    
    const data = {
      brands,
      selectedBrands,
      setCopied,
      setSelectedBrands
    }

  return (
    <>
    <MainContext.Provider value={data}>
      {copied && <Copied color={copied}/>}
      <Sidebar />
      <Content />
    </MainContext.Provider>
    </>
  );
}

export default App;
