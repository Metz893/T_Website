"use client";

import { useEffect, useState } from "react";

const introSlides = [
  "Hey Teagan...",
  "I may not be able to draw",
  "Or sing",
  "But I can build a website",
  "And every photo with you becomes one of my favorites.",
  "And every conversation makes my day",
  "So since you have been wanting me to",
  "And I have been wanting it more...",
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

const cuteMessages = [
  "you found a flower 🌸",
  "this one means you are cute 💗",
  "secret tulip unlocked 🌷",
  "extra heart just for you 💕",
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [showMemories, setShowMemories] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cuteMessage, setCuteMessage] = useState("");
  const [memorySurprise, setMemorySurprise] = useState("");
  const [sparkles, setSparkles] = useState<string[]>([]);

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

  function clickCuteIcon(message: string) {
    setCuteMessage(message);

    setTimeout(() => {
      setCuteMessage("");
    }, 1600);
  }

  function clickMemoryIcon(message: string) {
    setMemorySurprise(message);

    const newSparkles = Array.from({ length: 18 }).map((_, index) => {
      return `${Date.now()}-${index}`;
    });

    setSparkles(newSparkles);

    setTimeout(() => {
      setMemorySurprise("");
      setSparkles([]);
    }, 1800);
  }

  if (!loaded) {
    return null;
  }

  if (!showMemories) {
    return (
      <main className="introPage">
        {cuteMessage && <div className="cutePopup">{cuteMessage}</div>}

        <div className="softGlow glowOne"></div>
        <div className="softGlow glowTwo"></div>

        <button
          className="floatingDecor flowerOne"
          onClick={() => clickCuteIcon(cuteMessages[0])}
          aria-label="cute flower"
        >
          🌸
        </button>

        <button
          className="floatingDecor flowerTwo"
          onClick={() => clickCuteIcon(cuteMessages[2])}
          aria-label="cute tulip"
        >
          🌷
        </button>

        <button
          className="floatingDecor heartOne"
          onClick={() => clickCuteIcon(cuteMessages[1])}
          aria-label="cute heart"
        >
          💗
        </button>

        <button
          className="floatingDecor heartTwo"
          onClick={() => clickCuteIcon(cuteMessages[3])}
          aria-label="cute pink hearts"
        >
          💕
        </button>

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
      {memorySurprise && <div className="memoryPopup">{memorySurprise}</div>}

      <div className="sparkleLayer">
        {sparkles.map((sparkle, index) => (
          <span
            key={sparkle}
            style={{
              left: `${(index * 17 + 9) % 100}%`,
              top: `${(index * 23 + 14) % 100}%`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

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
        <div className="heroContent">
          <p className="tinyText">a little page for you</p>

          <h1>Teagan 💗</h1>

          <p className="heroText">
            Thank you for everything you do. I appreciate how sweet you are
            and how happy you make. Thank you for always smiling!
          </p>

          <div className="heroBadges">
            <span>🌸 favorite person</span>
            <span>💗 makes my day</span>
            <span>🌷 best smile</span>
          </div>
        </div>
      </section>

      <section className="flowerDivider">
        <button
          onClick={() => clickMemoryIcon("flower unlocked: you are very cute 🌸")}
          aria-label="flower surprise"
        >
          🌸
        </button>

        <button
          onClick={() => clickMemoryIcon("heart unlocked: you make me smile 💗")}
          aria-label="heart surprise"
        >
          💗
        </button>

        <button
          onClick={() =>
            clickMemoryIcon("tulip unlocked: this page was made for you 🌷")
          }
          aria-label="tulip surprise"
        >
          🌷
        </button>

        <button
          onClick={() => clickMemoryIcon("extra love unlocked 💕")}
          aria-label="extra love surprise"
        >
          💕
        </button>

        <button
          onClick={() => clickMemoryIcon("final flower unlocked 🌸")}
          aria-label="final flower surprise"
        >
          🌸
        </button>
      </section>

      <section className="noteSection">
        <div className="loveNote">
          <p className="noteLabel">tiny note</p>

          <h2>Some people just make everything better</h2>

          <p>
            You are one of those people. Your smile lights up my day. Even the random 
            moments, blurry pictures, and normal conversations somehow become things I remember.
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
            <p>I enjoy every moment with you</p>
          </div>

          <div>
            <span>02</span>
            <p>Every photo with you somehow becomes special</p>
          </div>

          <div>
            <span>03</span>
            <p>Talking to you always makes my day better</p>
          </div>

          <div>
            <span>04</span>
            <p>I wnat you to be my girlfired ;)</p>
          </div>
        </div>
      </section>
    </main>
  );
}