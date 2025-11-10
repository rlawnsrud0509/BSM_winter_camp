import { useRef } from "react";

const JangpungEl = ({ parentPosition }) => {
  const ref = useRef(null);

  let movedDistance = 0;
  let Xpos = 0;
  let Ypos = 0;
  let reverse = 1;

  const jangpungAnimation = () => {
    if (!ref.current) return;

    const el = ref.current;
    const XposRandom = Math.floor(Math.random() * (10 - 5) + 5);
    const YposRandom = Math.floor(Math.random() * (3 + 2) - 2);
    const scaleRandom = Math.random() * (3 - 0.75) + 0.75;

    if (
      Xpos + XposRandom > window.innerWidth - parentPosition.x ||
      Ypos + YposRandom > window.innerHeight - parentPosition.y ||
      Xpos + XposRandom < 0 - parentPosition.x ||
      Ypos + YposRandom < 0 - parentPosition.y
    ) {
      reverse *= -1;
    }

    Xpos += XposRandom * reverse;
    Ypos += YposRandom * reverse;

    movedDistance += Math.abs(XposRandom);

    if (movedDistance > 10000 && animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      el.remove();
      return;
    }

    el.style.left = `${Xpos}px`;
    el.style.top = `${Ypos}px`;
    el.style.transform = `scale(${scaleRandom})`;

    requestAnimationFrame(jangpungAnimation);
  };

  const animationFrameId = requestAnimationFrame(jangpungAnimation);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        padding: "2px",
        border: "1px solid gray",
        borderRadius: "4px",
        lineHeight: "2.2",
        fontSize: "12px",
        zIndex: 999999999,
      }}
    >
      Jangpung
    </div>
  );
};

export default JangpungEl;
