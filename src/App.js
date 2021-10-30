import MainContext from './MainContext';
import Sidebar from './components/Sidebar';
import Collection from './components/Collection';
import Content from './components/Content';
import Copied from './components/Copied';
import BrandsData from './brands.json';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let brandsArray = [];
  Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    var timeOut = setTimeout(() => {
      setCopied(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);

  const data = {
    brands,
    selectedBrands,
    setCopied,
    setSelectedBrands,
    search,
    setSearch,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/collection/:slugs">
              <Collection />
            </Route>
          </Switch>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
