import { useParams, Link, useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Download from './Download';
import Brand from './Brand';
import MainContext from '../MainContext';
import { GrLinkPrevious } from 'react-icons/gr';

function Collection() {
  const { slugs } = useParams();
  const history = useHistory();
  const { setSelectedBrands, selectedBrands, setSearch, brands } =
    useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    setSearch('');
    history.push('/');
  };
  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return <Brand brand={brand} />;
        })}
      </section>
    </main>
  );
}

export default Collection;
