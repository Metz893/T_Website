"use client";

import { useEffect, useState } from "react";

const introSlides = [
  "Hey Teagan...",
  "I made this little website for you.",
  "Because somehow, every normal day feels better with you in it.",
  "And every photo with you becomes one of my favorites.",
  "So before you keep going...",
  "turn around",
];

const photos = [
  "/photos/photo10.png",
  "/photos/photo12.png",
  "/photos/photo13.png",
  "/photos/photo14.png",
  "/photos/photo15.png",
  "/photos/photo6.png",
  "/photos/photo7.png",
  "/photos/photo8.png",
  "/photos/photo9.png",
];

const captions = [
  "double trouble",
  "unforgettable night",
  "star glasses moment",
  "cowboy hat era",
  "one of my favorites",
  "this picture makes me smile",
  "same day, better photo",
  "sleepy but cute",
  "even blurry pictures matter",
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [showMemories, setShowMemories] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const isLastSlide = slide === introSlides.length - 1;

  useEffect(() => {
    const introAlreadySeen = localStorage.getItem("teaganIntroSeen");

    if (introAlreadySeen === "true") {
      setShowMemories(true);
    }

    setLoaded(true);
  }, []);

  function nextSlide() {
    if (isLastSlide) {
      localStorage.setItem("teaganIntroSeen", "true");
      setShowMemories(true);
      return;
    }

    setSlide(slide + 1);
  }

  function resetIntro() {
    localStorage.removeItem("teaganIntroSeen");
    setSlide(0);
    setShowMemories(false);
  }

  if (!loaded) {
    return null;
  }

  if (!showMemories) {
    return (
      <main className="introPage">
        <div className="softGlow glowOne"></div>
        <div className="softGlow glowTwo"></div>

        <div className="floatingDecor flowerOne">🌸</div>
        <div className="floatingDecor flowerTwo">🌷</div>
        <div className="floatingDecor heartOne">💗</div>
        <div className="floatingDecor heartTwo">💕</div>

        <section className="introCard">
          <p className="tinyText">for teagan</p>

          <h1 className={isLastSlide ? "turnAroundText" : ""}>
            {introSlides[slide]}
          </h1>

          <div className="progressDots">
            {introSlides.map((_, index) => (
              <span
                key={index}
                className={index === slide ? "dot activeDot" : "dot"}
              />
            ))}
          </div>

          <button className="mainButton" onClick={nextSlide}>
            {isLastSlide ? "open this after" : "next"}
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="memoryPage">
      <button className="resetButton" onClick={resetIntro}>
        reset intro
      </button>

      <section className="heroSection">
        <div>
          <p className="tinyText">a little page for you</p>

          <h1>Teagan 💗</h1>

          <p className="heroText">
            I wanted this to feel cute, pink, and full of the little moments
            that make me smile. No big speech on here. Just us, some memories,
            and a reminder that you mean a lot to me.
          </p>
        </div>
      </section>

      <section className="flowerDivider">
        <span>🌸</span>
        <span>💗</span>
        <span>🌷</span>
        <span>💕</span>
        <span>🌸</span>
      </section>

      <section className="photoGrid">
        {photos.map((photo, index) => (
          <article className="photoCard" key={photo}>
            <img src={photo} alt={`Memory ${index + 1} with Teagan`} />
            <p>{captions[index]}</p>
          </article>
        ))}
      </section>

      <section className="endingCard">
        <h2>one more thing...</h2>

        <p>
          This whole thing was just my way of making the moment a little more
          special. So now that you made it to the end...
        </p>

        <h3>turn around 💐</h3>
      </section>
    </main>
  );
}