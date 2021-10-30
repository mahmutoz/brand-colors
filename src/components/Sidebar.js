/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width="35" /> Brand
            <b>Colors</b>
          </Link>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>About BranColors</a>
            </li>
          </ul>
        </nav>
        <hr />
        <a
          className="external-link"
          href="https://www.designbombs.com/how-to-make-a-website/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Brand<strong>Colors</strong> + DesignBombs
          </span>
          <p>
            Learn how to make a website - we have put together an in-depth guide
            that will help you build your first website with WordPress.
          </p>
        </a>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
        ariaHideApp={false}
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by <strong>DesignBombs</strong>. The goal was
          to create a helpful reference for the brand color codes that are
          needed most often.
        </p>
        <br />
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <strong>2 million pageviews.</strong> There are now
          over <strong>600 brands</strong> with <strong>1600 colors</strong> and
          the collection is always growing.
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;
