import React from "react";
import styles from "../App.module.css";
import data from "./content.json";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

export default function Events() {
  const events = (data) => {
    return data.map((event, i) => {
      var cardstyle = {
        backgroundImage: ` linear-gradient(to top,rgb(14 12 27 / 70%),rgb(0 0 0 / 70%),rgb(36 33 36 / 70%) ),url(${event.img})`,
        color: "white",
        backgroundSize: "cover",
      };
      const flipcardstyle={
        "width":"40vh",
        "height":"50vh",
        "margin":"3px"
        }
      return (
        <div key={i} className={styles.eventcard}>
          <FlippingCard style={flipcardstyle}>
            <FlippingCardBack>
              <div key={i} className={styles.maincard} style={cardstyle}>
                <h3>{event.title}</h3>
                <p>{event.bref}</p>
                <p>{event.notes ? "(" + event.notes + ")" : ""}</p>
              </div>
            </FlippingCardBack>
            <FlippingCardFront>
              <div className={styles.maincard} style={cardstyle}>
                <h3>{event.title}</h3>
                <p>{event.shotdescription}</p>
                <span>Hover Me</span>
              </div>
            </FlippingCardFront>
          </FlippingCard>
        </div>
      );
    });
  };
  return (
    <div className={styles.events}>
      <h2>Technical Events</h2>
      <div className={styles.eventcards}>{events(data.technicalevents)}</div>
      <h2>Non-Technical Events</h2>
      <div className={styles.eventcards}>{events(data.nontechnicalevents)}</div>
      <h2>Workshop</h2>
      <div className={styles.workshop}>
        <div className={styles.workshopcard}>
          <h2>Workshop on python for AI & ML</h2>
          <p>
          "An interactive session focused on exploring and applying 
           artificial intelligence and machine learning techniques."
          </p>
        </div>
      </div>
    </div>
  );
}