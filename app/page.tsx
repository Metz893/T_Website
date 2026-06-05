"use client";

import { useEffect, useState } from "react";

const introSlides = [
  "Hey Teagan...",
  "I may not be able to draw",
  "Or sing",
  "But every photo with you becomes one of my favorites.",
  "And every conversation makes my day",
  "So before you keep going...",
  "Turn around",
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

      <div className="memoryBackground">
        <span>🌸</span>
        <span>💗</span>
        <span>🌷</span>
        <span>💕</span>
        <span>🌺</span>
        <span>💐</span>
      </div>

      <section className="heroSection">
        <div className="heroSticker stickerOne">made for teagan</div>
        <div className="heroSticker stickerTwo">pink warning</div>

        <div className="heroContent">
          <p className="tinyText">a little page for you</p>

          <h1>Teagan 💗</h1>

          <p className="heroText">
            No giant speech here. Just a pink little scrapbook of memories,
            favorite photos, and all the small things that make me smile.
          </p>

          <div className="heroBadges">
            <span>🌸 favorite person</span>
            <span>💗 makes my day</span>
            <span>🌷 best smile</span>
          </div>
        </div>
      </section>

      <section className="flowerDivider">
        <span>🌸</span>
        <span>💗</span>
        <span>🌷</span>
        <span>💕</span>
        <span>🌸</span>
      </section>

      <section className="noteSection">
        <div className="loveNote">
          <p className="noteLabel">tiny note</p>

          <h2>some people just make everything better</h2>

          <p>
            You are one of those people. Even the random moments, blurry
            pictures, and normal conversations somehow become things I remember.
          </p>
        </div>

        <div className="miniPolaroid">
          <img src={photos[0]} alt="A favorite memory with Teagan" />
          <p>favorite memory energy</p>
        </div>
      </section>

      <section className="photoGrid">
        {photos.map((photo, index) => (
          <article className="photoCard" key={photo}>
            <div className="tape"></div>
            <img src={photo} alt={`Memory ${index + 1} with Teagan`} />
            <p>{captions[index]}</p>
          </article>
        ))}
      </section>

      <section className="reasonsSection">
        <p className="tinyText">important evidence</p>

        <h2>reasons this page exists</h2>

        <div className="reasonGrid">
          <div>
            <span>01</span>
            <p>you make normal days feel less normal</p>
          </div>

          <div>
            <span>02</span>
            <p>every photo with you somehow becomes special</p>
          </div>

          <div>
            <span>03</span>
            <p>talking to you always makes my day better</p>
          </div>

          <div>
            <span>04</span>
            <p>you are very easy to make a pink website for</p>
          </div>
        </div>
      </section>

      <section className="endingCard">
        <p className="tinyText">final instruction</p>

        <h2>you made it to the end</h2>

        <p>
          This website was cute, but it was not the real point. The real point is
          not on the screen anymore.
        </p>

        <h3>turn around 💐</h3>
      </section>

      <button
        className="secretFlower"
        onClick={() => alert("secret message: you are really special to me 💗")}
      >
        🌸
      </button>
    </main>
  );
}