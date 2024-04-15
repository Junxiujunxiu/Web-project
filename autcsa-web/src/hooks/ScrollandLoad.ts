import { useEffect } from "react";

export function ScrollandLoad(
  options: IntersectionObserverInit,
  targets: HTMLCollectionOf<Element>
) {
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        // Add the fadeIn class:
        if (entry.target.classList.contains("fadeInAni")) {
          entry.target.classList.add("motion-safe:animate-fadeIn");
          entry.target.classList.add("verticalUpAni");
        } else if (entry.target.classList.contains("floatUpAni")) {
          entry.target.classList.add("motion-safe:animate-floatUp");
        } else if (entry.target.classList.contains("floatLeftAni")) {
          entry.target.classList.add("motion-safe:animate-floatLeft");
        } else if (entry.target.classList.contains("floatRightAni")) {
          entry.target.classList.add("motion-safe:animate-floatRight");
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    for (let target of targets) {
      target.classList.add("opacity-0");
      observer.observe(target);
    }

    return () => {
      for (let target of targets) {
        observer.unobserve(target);
      }
    };
  }, [targets, options]);

  return;
}
