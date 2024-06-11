import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {

  const { section, onSectionChange, setSection } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const currentSection = useRef(0);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {

    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const scrollDirection = data.scroll.current - lastScroll.current;
    const curSection = Math.floor(data.scroll.current * data.pages);

    if (scrollDirection > 0) {

      if (curSection === currentSection.current + 1) {
        currentSection.current = curSection;
        onSectionChange(curSection);
        setSection(curSection);
        lastScroll.current = data.scroll.current;
      }
    } else if (scrollDirection < 0) {

      if (curSection === currentSection.current - 1) {
        currentSection.current = curSection;
        onSectionChange(curSection);
        setSection(curSection);
        lastScroll.current = data.scroll.current;
      }
    }

    lastScroll.current = data.scroll.current;
    
  });

  return null;
};