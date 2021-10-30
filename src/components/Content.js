import Search from './Search';
import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import Download from './Download';

function Content(props) {
  const { brands, selectedBrands } = useContext(MainContext);
  const rowRenderer = ({ key, index, style }) => {
    <Brand style={style} brand={brands[index]} key={key} index={index} />;
  };
  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <Brand key={key} brand={brand} />
        ))}
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={75}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
}

export default Content;
