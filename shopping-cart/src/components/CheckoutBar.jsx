import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import CheckoutBarItem from "./Item/CheckoutBarItem";


export default function CheckoutBar({ isOpen, handleClick, items }) {
  const [closed, setIsClosed] = useState(true);
  const price = items.reduce((price, item) => price + item.price, 0).toFixed(2);

  useEffect(() => {
    if (!isOpen) {
      // Add a delay before setting isClosing to true
      const timeoutId = setTimeout(() => {
        setIsClosed(true);
      }, 250); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    } else {
      setIsClosed(false);
    }
  }, [isOpen]);

  return (
    <dialog
      className={`${isOpen ? "block" : closed ? "hidden" : ""
        } w-full h-full flex fixed opacity-[97%] h-dvh min-h-dvh z-20 right-0 left-0 top-0 bottom-0 bg-stone-200`}
    >
      <div className="w-full min-h-dvh z-30"></div>
      <div
        className={`${isOpen ? "open" : "closed"
          } w-96 check-out-bar min-h-dvh h-dvh fixed inset-y-0 right-0 z-40 bg-stone-50 p-4 shadow-lg overflow-y-auto `}
      >
        <div className="w-full flex flex-col gap-4">
          <div className="w-4 justify-center" onClick={handleClick}>
            <Icon name={"close"} />
          </div>
          <h2 className="text-xl font-semibold border-b">Items in the cart</h2>
          <div className="items flex flex-col gap-4">
            {items.length !== 0
              ? items.map((item, index) =>
                (<CheckoutBarItem image={item.image} price={item.price} name={item.title} key={index + item.id} />))
              : ""}
          </div>
          <div className="bottom flex justify-center items-center gap-8">
            <div className="price font-bold">Total Price: ${price}</div>
            <Button name={"Go to check-out"}/>
          </div>
        </div>
      </div>
    </dialog>
  );
}
