import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Components/Icon";
import Animator from "../Components/Animator";

const Contact = () => {
  return (
    <>
      <div className="ContactPage">
        <Animator>
          <div className="close">
            <NavLink to={`/`}>
              <Icon icon="fa-solid fa-xmark" />
            </NavLink>
          </div>
          <div className="credits">
            <h1>الزعيم/ عمر خلف</h1>
            <button>
              <a href="https://www.instagram.com/the_mad_khalf/">
                <Icon icon="fa-brands fa-instagram" />
              </a>
            </button>
            <h1>فرونت اند / محمد حسام</h1>
            <button>
              <a href="https://www.instagram.com/mhmdhossam.1/">
                <Icon icon="fa-brands fa-instagram" />
              </a>
            </button>
          </div>
        </Animator>
      </div>
    </>
  );
};

export default Contact;
