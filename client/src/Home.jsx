function Home() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(9, 22, 121, 0.1), rgba(12, 67, 206, 0.3)), url('https://t4.ftcdn.net/jpg/08/41/16/79/360_F_841167914_6BCqWtPIGuHsv7baU4Ys8bxWZbelvKUi.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        style={{
          fontSize: "80px",
          fontFamily: "-moz-initial",
          color: "HighlightText",
        }}
      >
        WELCOME TO TECH WORLD!
      </h1>{" "}
      <br />
      <h4 style={{ color: "whitesmoke" }}>
        Let's make tomorrow better with new knowledge! 🚀
      </h4>
    </div>
  );
}

export default Home;
