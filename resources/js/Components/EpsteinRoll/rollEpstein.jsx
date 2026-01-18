import React, { useState, useEffect } from "react";
import contentEpstein from "./epsteinLink.jsx";


export default function RollEpstein() {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // setInterval возвращает ID таймера
    const intervalId = setInterval(() => {
      // меняем индекс на следующий
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentEpstein.length);
    }, 2000); // 2000 мс = 2 секунды

    // очистка таймера при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={contentEpstein[currentIndex]} alt="Slideshow" width={400} />
    </div>
  );
}
