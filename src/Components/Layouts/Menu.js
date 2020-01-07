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
    $(".menu").click(function() {
      $(".main-cont").toggleClass("menu-open");
    });

    $(".hl-menubtn").click(function() {
      if ($(".menu").hasClass("ismobile")) {
        /* - #OpenMenu - */
        if ($(".menu").hasClass("expanded")) {
          $(".menu").removeClass("expanded");
          $(".m-btn").fadeOut("fast");
          $(".m-btn p")
            .stop(true)
            .animate(
              {
                opacity: "0"
              },
              200
            );
          $(".menu")
            .stop(true)
            .delay(200)
            .animate(
              {
                width: "60px",
                left: "-60px"
              },
              200
            );
          $(".m-btn img")
            .stop(true)
            .animate(
              {
                marginLeft: "20px"
              },
              200
            );
        } else {
          $(".menu").addClass("expanded");
          $(".m-btn").fadeIn("fast");
          $(".menu")
            .stop(true)
            .animate(
              {
                width: "130px",
                left: "0px"
              },
              200
            );
          $(".m-btn img")
            .stop(true)
            .animate(
              {
                marginLeft: "15px"
              },
              200
            );
          $(".m-btn p")
            .delay(200)
            .animate(
              {
                opacity: "1"
              },
              700
            );
        }
      } else {
        if ($(".menu").hasClass("expanded")) {
          $(".menu").removeClass("expanded");
          $(".m-btn p")
            .stop(true)
            .animate(
              {
                opacity: "0"
              },
              200
            );
          $(".menu")
            .stop(true)
            .delay(200)
            .animate(
              {
                width: "60px"
              },
              200
            );
          $(".m-btn img")
            .stop(true)
            .animate(
              {
                marginLeft: "20px"
              },
              200
            );
        } else {
          $(".menu").addClass("expanded");
          $(".m-btn").fadeIn("fast");
          $(".menu")
            .stop(true)
            .animate(
              {
                width: "130px",
                left: "0px"
              },
              200
            );
          $(".m-btn img")
            .stop(true)
            .animate(
              {
                marginLeft: "15px"
              },
              200
            );
          $(".m-btn p")
            .delay(200)
            .animate(
              {
                opacity: "1"
              },
              700
            );
        }
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="menu">
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