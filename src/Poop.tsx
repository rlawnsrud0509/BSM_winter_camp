import { ReactNode, useEffect, useRef, useState } from "react";
import { Button, Flex } from "antd";
import PoopEl from "./PoopEl";

const Poop = () => {
  const [poopArr, setPoopArr] = useState<ReactNode[]>([]);
  const poopButtonRef = useRef<HTMLButtonElement>(null);

  const handleAddPoop = () => {
    setPoopArr([
      ...poopArr,
      <PoopEl
        key={poopArr.length}
        parentPosition={{
          x: poopButtonRef.current?.getBoundingClientRect().x || 0,
          y: poopButtonRef.current?.getBoundingClientRect().y || 0,
        }}
      />,
    ]);
  };

  useEffect(() => {
    const current = poopButtonRef.current;
    if (!current) return;

    const handleBlockEnterKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    current.addEventListener("keypress", handleBlockEnterKey);
    return () => {
      current.removeEventListener("keypress", handleBlockEnterKey);
    };
  }, [poopButtonRef]);

  return (
    <Flex style={{ position: "relative" }}>
      <Button onClick={handleAddPoop} ref={poopButtonRef}>
        Shoot Poop
      </Button>
      {poopArr.map((poop) => poop)}
    </Flex>
  );
};

export default Poop;
