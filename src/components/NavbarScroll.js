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
        className="menu-link"
        to="four-steps"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
      >
        O co chodzi?
      </Link>
      <Link
        activeClass="active"
        className="menu-link"
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
        className="menu-link"
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
        className="menu-link"
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
