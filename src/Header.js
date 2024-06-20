import { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Cart from "./Cart";
import Backdrop from "./Backdrop";

function Header({ cartItems, emptyCart }) {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);

  function handleOpenDrawer() {
    setShowSideDrawer(true);
  }

  function handleCloseDrawer() {
    setShowSideDrawer(false);
  }

  function openLightBox() {
    setShowLightBox(true);
  }

  function closeLightBox() {
    setShowLightBox(false);
  }

  function toggleLightbox() {
    setShowLightBox((s) => !s);
  }

  return (
    <>
      {showSideDrawer && <Backdrop onClose={handleCloseDrawer} />}
      <header className="header">
        <SideDrawer show={showSideDrawer} onClose={handleCloseDrawer}>
          <div className="side-drawer__nav">
            <NavLinks />
          </div>
        </SideDrawer>

        <button className="btn btn-menu" onClick={handleOpenDrawer}>
          <img src="images/icon-menu.svg" alt="open" />
        </button>

        <img src="/images/logo.svg" alt="logo" className="logo" />

        <div className="main-nav">
          <NavLinks />
        </div>

        <button className="btn btn-cart" onClick={toggleLightbox}>
          <img src="images/icon-cart.svg" alt="cart" className="cartimg" />
          {cartItems > 0 && <span className="cart-items">{cartItems}</span>}
        </button>

        {showLightBox && (
          <Cart
            cartItems={cartItems}
            closeLightBox={closeLightBox}
            emptyCart={emptyCart}
          />
        )}

        <button className="btn btn-user">
          <img src="images/image-avatar.png" alt="avatar" className="user" />
        </button>
      </header>
    </>
  );
}

function NavLinks() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/">Collections</a>
        </li>
        <li className="nav__item">
          <a href="/">Men</a>
        </li>
        <li className="nav__item">
          <a href="/">Women</a>
        </li>
        <li className="nav__item">
          <a href="/">About</a>
        </li>
        <li className="nav__item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function SideDrawer({ children, show, onClose }) {
  return createPortal(
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">
        <button className="btn btn-close" onClick={onClose}>
          <img src="images/icon-close.svg" alt="close" />
        </button>
        {children}
      </aside>
    </CSSTransition>,
    document.getElementById("drawer-hook")
  );
}

export default Header;
