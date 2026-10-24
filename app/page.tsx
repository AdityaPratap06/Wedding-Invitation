"use client";
import { useState } from "react";
import EnvelopeScreen from "@/Component/EnvelopeScreen";
import { TRANSLATIONS } from "@/Component/translations";

const events = [
  {
    time: "10:00 AM",
    name: "Haldi Ceremony",
    date: "18 February 2027",
    description: "A morning filled with marigolds, blessings and laughter.",
    place: "The Royal Courtyard",
  },
  {
    time: "7:00 PM",
    name: "Wedding Ceremony",
    date: "18 February 2027",
    description: "Join us as we begin our forever, surrounded by family.",
    place: "The Grand Palace",
  },
  {
    time: "8:00 PM",
    name: "Reception",
    date: "19 February 2027",
    description: "An evening of celebration, music and togetherness.",
    place: "The Grand Palace",
  },
];

const weddingDate = "18 February 2027";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Jaipur+Rajasthan";

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const whatsappUrl =
    "https://wa.me/?text=" +
    encodeURIComponent(
      "We are delighted to celebrate Ananya & Aarav's wedding. Please count us in!"
    );
  const t = TRANSLATIONS["en"];
  console.log(opened);
  if (!opened) {
    return (
      <EnvelopeScreen
        t={t}
        onOpen={() => setOpened(true)}
      />
    );
  }

  return (
    <main className="invitation">
      <section className="hero" id="home">
        <div className="hero-frame">
          <p className="eyebrow">✦ A CELEBRATION OF LOVE ✦</p>
          <p className="invitation-label">Together with their families</p>

          <h1 className="couple-names">
            Ananya
            <span>&amp;</span>
            Aarav
          </h1>

          <div className="ornament">❦ ❧ ❦</div>

          <p className="hero-copy">
            Two hearts, two families,
            <br />
            one beautiful beginning.
          </p>

          <div className="hero-divider" />

          <p className="date-label">SAVE THE DATE</p>
          <p className="hero-date">{weddingDate}</p>
          <p className="hero-location">JAIPUR · RAJASTHAN</p>

          <a className="outline-button" href="#celebration">
            EXPLORE THE INVITATION ↓
          </a>
        </div>
        <span className="corner corner-tl">✧</span>
        <span className="corner corner-tr">✧</span>
        <span className="corner corner-bl">✧</span>
        <span className="corner corner-br">✧</span>
      </section>

      <section className="welcome section" id="celebration">
        <p className="eyebrow">WITH LOVE AND BLESSINGS</p>
        <h2>A new chapter begins</h2>
        <div className="ornament">❦</div>
        <p className="body-copy">
          With the blessings of our families, we invite you to be part of
          a celebration that brings two hearts and two families together.
          Your presence will make our special days even more meaningful.
        </p>
        <p className="signature">Ananya &amp; Aarav</p>
      </section>

      <section className="events-section section" id="events">
        <p className="eyebrow">THE WEDDING FESTIVITIES</p>
        <h2>Days to remember</h2>
        <p className="muted-copy">
          Every ceremony, a memory. Every moment, a blessing.
        </p>

        <div className="event-grid">
          {events.map((event, index) => (
            <article className="event-card" key={event.name}>
              <span className="event-number">0{index + 1}</span>
              <div className="ornament">✧</div>
              <p className="event-date">{event.date}</p>
              <h3>{event.name}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-rule" />
              <p className="event-time">{event.time}</p>
              <p className="event-place">{event.place}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="venue-section section" id="venue">
        <p className="eyebrow">CELEBRATE WITH US</p>
        <h2>Meet us in Jaipur</h2>
        <p className="body-copy">
          We look forward to welcoming you for our wedding celebrations
          in the beautiful city of Jaipur, Rajasthan.
        </p>
        <p className="venue-name">The Grand Palace</p>
        <p className="muted-copy">Jaipur, Rajasthan, India</p>
        <a
          className="filled-button"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          VIEW LOCATION ↗
        </a>
      </section>

      <section className="gallery-section section" id="gallery">
        <p className="eyebrow">OUR LITTLE WORLD</p>
        <h2>Moments of forever</h2>
        <p className="muted-copy">
          A place for your favourite photographs and memories together.
        </p>
        <div className="gallery-grid">
          <div className="gallery-photo photo-one" role="img" aria-label="Romantic wedding floral detail" />
          <div className="gallery-photo photo-two" role="img" aria-label="Elegant wedding celebration" />
          <div className="gallery-photo photo-three" role="img" aria-label="Palace wedding architecture" />
        </div>
      </section>

      <section className="rsvp-section section" id="rsvp">
        <div className="rsvp-frame">
          <p className="eyebrow">YOUR PRESENCE IS OUR PRESENT</p>
          <h2>Celebrate our forever</h2>
          <div className="ornament">❦ ❧ ❦</div>
          <p className="body-copy">
            It would mean the world to have you with us as we begin
            this beautiful journey together.
          </p>
          <a
            className="filled-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            RSVP ON WHATSAPP ↗
          </a>
          <p className="rsvp-note">
            With love, gratitude and excitement for the days ahead.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="ornament">❦</div>
        <p>MADE WITH LOVE</p>
        <p className="footer-names">Ananya &amp; Aarav</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
