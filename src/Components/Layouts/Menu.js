import React, { Fragment, Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import $ from "jquery";

import dbrd from '../../assets/SVG/nav-dbrd.svg';
import cand from '../../assets/SVG/nav-cand.svg';
import srch from '../../assets/SVG/nav-srch.svg';
import jobs from '../../assets/SVG/nav-jobs.svg';
import comp from '../../assets/SVG/nav-comp.svg';
import spro from '../../assets/SVG/nav-spro.svg';
import digi from '../../assets/SVG/nav-dig.svg';
import rolls from '../../assets/SVG/nav-rolls.svg';
import sends from '../../assets/SVG/nav-sends.svg';

class Menu extends Component {
  componentDidMount() {
    $(document).ready(function() {
      responsiveClass();
    
      $(".hl-menubtn").click(function() {
        if ($(".menu").hasClass("ismobile")) {
          if ($(".menu").hasClass("opened")) {
            $(".menu").removeClass("opened");
            $(".menu").animate(
              {
                left: "-130px"
              },
              200
            );
          } else {
            $(".menu").addClass("opened");
            $(".menu").animate(
              {
                left: "0px"
              },
              200
            );
          }
        } else {
        }
      });
    
      $(window).resize(function() {
        responsiveClass();
      });
    
      /* Responsive Class */
      function responsiveClass() {
        if ($(window).width() <= 735) {
          $(".menu").addClass("ismobile");
        } else {
          $(".menu").removeClass("ismobile");
        }
        /* Responsive Class - MENU */
        if ($(".menu").hasClass("ismobile")) {
          $(".menu").removeClass("expanded");
          $(".main-cont .header .h-left").removeClass("grid-2fr-3fr");
          $(".hl-menubtn").css({
            position: "relative",
            left: "0px"
          });
          $(".menu")
            .stop(true)
            .animate(
              {
                left: "-130px"
              },
              200
            );
        } else {
          $(".menu").addClass("expanded");
          $(".main-cont .header .h-left").addClass("grid-2fr-3fr");
          $(".hl-menubtn").css({
            position: "absolute",
            left: "-100px"
          });
          $(".menu")
            .stop(true)
            .animate(
              {
                left: "0px"
              },
              200
            );
        }
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="menu expanded">
          <MenuLink to="/search" img={srch} label="Search" />
          <MenuLink to="/candidates" img={cand} label="Candidates" />
          <MenuLink to="/companies" img={comp} label="Companies" />
          <MenuLink to="/job-orders" img={jobs} label="Job Orders" />
          <MenuLink activeOnlyWhenExact={true} to="/dashboard" img={dbrd} label="Dashboard" />
          <MenuLink to="/projects" img={spro} label="S. Projects" />
          <MenuLink to="/map" img={digi} label="Map" />
          <MenuLink to="/taks-tool" img={rolls} label="Tasks Tool" />
          <MenuLink to="/sendouts" img={sends} label="Sendouts" />
        </div>
      </Fragment>
    );
  }
}

function MenuLink({ to, img, label, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link to={to} className={match ? "m-btn  mbtn-active" : "m-btn not-available"}>
      <img src={img} alt={label} />
      <p>{label}</p>
    </Link>
  );
}

export default Menu;