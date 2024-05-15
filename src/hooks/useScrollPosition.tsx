import { useEffect, useState } from "react";

const useScrollPosition = (target: number) => {
  const [pastTarget, setPastTarget] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () =>
    window.scrollY <= target ? setPastTarget(false) : setPastTarget(true);

  return pastTarget
};

export default useScrollPosition