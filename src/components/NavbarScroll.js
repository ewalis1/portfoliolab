import {
  Link,
  //   Element,
  //   Events,
  //   animateScroll as scroll,
  //   scrollSpy,
  //   scroller,
} from 'react-scroll';

const NavbarScroll = () => {
  return (
    <>
      <Link
        activeClass="active"
        className="menu-link three-columns"
        to="three-columns"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
      >
        O co chodzi?
      </Link>
      <Link
        activeClass="active"
        className="menu-link about-us"
        to="about-us"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
      >
        O nas
      </Link>
      <Link
        activeClass="active"
        className="menu-link who-we-help"
        to="who-we-help"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
      >
        Fundacja i organizacje
      </Link>
      <Link
        activeClass="active"
        className="menu-link contact"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
      >
        Kontakt
      </Link>
    </>
  );
};

export default NavbarScroll;
