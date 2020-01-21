import React, { Fragment, Component } from 'react';
import $ from "jquery";

import QuickActions  from './QuickActions';
import EntitySelect from './EntitySelect';

class ContentSearch extends Component {
  componentDidMount() {
    $(document).ready(function() {
      /* jQuery #FS-03 */
      $(".filters-toggle").click(function() {
        toggleFilters();
      });
      function toggleFilters() {
        if ($(".filters-box").hasClass("open")) {
          /* Quitar filtros y poner quicksearch */
          $(".filters-box").removeClass("open");
          $(".quickactions")
            .delay(200)
            .fadeIn("fast");
          $(".filters-box")
            .stop(true)
            .fadeOut("fast");
          $(".filters-btn-open")
            .stop(true)
            .delay(200)
            .fadeIn("fast");
          $(".filters-controls")
            .stop(true)
            .fadeOut("fast");
        } else {
          /* Poner filtros y quitar quicksearch */
          $(".filters-box").addClass("open");
          $(".quickactions").fadeOut("fast");
          $(".filters-controls")
            .stop(true)
            .delay(200)
            .fadeIn("fast");
          $(".filters-box")
            .stop(true)
            .delay(200)
            .fadeIn("fast");
          $(".filters-btn-open")
            .stop(true)
            .fadeOut("fast");
        }
      }
    
      /* #SwitchEntitySelector */
      $(".es-option").click(function() {
        if ($(this).hasClass("es-active") === false) {
          $(this)
            .siblings()
            .removeClass("es-active");
          $(this).addClass("es-active");
          if ($(this).hasClass("candidates-btn")) {
            $(".entity-selector-rect").animate({ left: "0" }, 200);
            $(".candidates-btn").addClass("es-active");
            $(".candidates-btn")
              .siblings()
              .removeClass("es-active");
            $(".fbx-candidates")
              .delay(200)
              .fadeIn("fast");
            $(".fbx-joborders").fadeOut("fast");
            $(".fbx-companies").fadeOut("fast");
          } else if ($(this).hasClass("joborders-btn")) {
            $(".entity-selector-rect").animate({ left: "160" }, 200);
            $(".joborders-btn")
              .siblings()
              .removeClass("es-active");
            $(".joborders-btn").addClass("es-active");
            $(".fbx-candidates").fadeOut("fast");
            $(".fbx-joborders")
              .delay(200)
              .fadeIn("fast");
            $(".fbx-companies").fadeOut("fast");
          } else if ($(this).hasClass("companies-btn")) {
            $(".entity-selector-rect").animate({ left: "320" }, 200);
            $(".companies-btn")
              .siblings()
              .removeClass("es-active");
            $(".companies-btn").addClass("es-active");
            $(".fbx-candidates").fadeOut("fast");
            $(".fbx-joborders").fadeOut("fast");
            $(".fbx-companies")
              .delay(200)
              .fadeIn("fast");
          }
        }
      });
    
      /* #ListEntitySelector */
      $(".esl-btn").click(function() {
        if ($(".esl-list").hasClass("opened")) {
          $(".esl-list").removeClass("opened");
          $(".esl-list").slideUp("fast");
          $(".w-arrow").css(
            {
              transform: "rotate(45deg)",
              top: "10px"
            },
            200
          );
        } else {
          $(".esl-list").addClass("opened");
          $(".esl-list").slideDown("fast");
          $(".w-arrow").css(
            {
              transform: "rotate(-135deg)",
              top: "15px"
            },
            200
          );
        }
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="content">
        <div className="content-new-search">
          <div className="cns-cell">
            <QuickActions />
            <div className="title-quote"><h2>What are you looking for?</h2></div>
            <EntitySelect />
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default ContentSearch;