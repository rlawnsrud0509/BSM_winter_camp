import { ReactNode, useEffect, useRef, useState } from "react";
import { Button, Flex } from "antd";
import JangpungEl from "./JangpungEl";

const Jangpung = () => {
  const [jangpungArr, setJangpungArr] = useState([]);
  const jangpungButtonRef = useRef < HTMLButtonElement > null;

  const handleAddJangpung = () => {
    setJangpungArr([
      ...jangpungArr,
      <JangpungEl
        key={jangpungArr.length}
        parentPosition={{
          x: jangpungButtonRef.current?.getBoundingClientRect().x || 0,
          y: jangpungButtonRef.current?.getBoundingClientRect().y || 0,
        }}
      />,
    ]);
  };

  useEffect(() => {
    const current = jangpungButtonRef.current;
    if (!current) return;

    const handleBlockEnterKey = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    current.addEventListener("keypress", handleBlockEnterKey);
    return () => {
      current.removeEventListener("keypress", handleBlockEnterKey);
    };
  }, [jangpungButtonRef]);

  return (
    <Flex style={{ position: "relative" }}>
      <Button onClick={handleAddJangpung} ref={jangpungButtonRef}>
        Shoot Jangpung
      </Button>
      {jangpungArr.map((jangpung) => jangpung)}
    </Flex>
  );
};

export default Jangpung;
