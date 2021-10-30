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
    const [hoverColor, setHoverColor] = useState(false);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
      var timeOut = setTimeout(() => {
        setCopied(false)
      }, 3000);
      return () => {
        clearTimeout(timeOut)
      }
    }, [copied]);
    
    useEffect(() => {
      setBrands(brands.filter(brand => brand.title.toLowerCase().includes(search)));
    }, [search])

    const data = {
      brands,
      selectedBrands,
      setCopied,
      setSelectedBrands,
      search,
      setSearch,
      hoverColor,
      setHoverColor
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
