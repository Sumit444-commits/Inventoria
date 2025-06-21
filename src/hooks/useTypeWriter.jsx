import { useEffect, useState } from "react";

const useTypewriter = (text, speed = 100) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setInterval(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearInterval(timeout);
    }
  }, [index, text, speed]);

  return displayed ;
};

export default useTypewriter;