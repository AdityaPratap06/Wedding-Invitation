function EnvelopeScreen({ t, onOpen }) {
  return (
    <div
      className="envelope-screen"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      // onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      <div className="envelope-sparkles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="sparkle sparkle--gold"
            style={{
              "--i": i,
              left: `${5 + ((i * 19) % 90)}%`,
              top: `${8 + ((i * 31) % 84)}%`,
            }}
          />
        ))}
      </div>
      <div className="envelope-wrap">
        <div className="envelope-card">
          <div className="envelope-body">
            <div className="envelope-flap" />
            <div className="envelope-letter">
              <span className="letter-ornament">✦</span>
            </div>
          </div>
          <div className="seal seal--glow">ॐ</div>
        </div>
        <div className="lang-buttons">
          <button type="button" className="lang-btn" onClick={() => onSelect("en")}>
            <span>English</span>
          </button>
          <button type="button" className="lang-btn" onClick={() => onSelect("hi")}>
            <span>हिंदी</span>
          </button>
        </div>
        <p className="tap-hint">{t.tap_open}</p>
        <span className="tap-hint-arrow" aria-hidden="true">↓</span>
      </div>
    </div>
  );
}

export default EnvelopeScreen;
