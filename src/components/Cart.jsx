import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { ITEM_IMG_CDN_URL } from "../utils/constants";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
  } = useContext(CartContext);

  const handleRemove = (itemName) => {
    removeFromCart(itemName);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrement = (itemName) => {
    incrementQuantity(itemName);
  };

  const handleDecrement = (itemName) => {
    decrementQuantity(itemName);
  };

  return (
    <div className="my-14">
      <div>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <div className=" h-[500px] flex flex-row-reverse">
              <div className=" flex w-5/12  overflow-y-scroll ">
                <div className=" h-2/5">
                  {cart.map((item, index) => (
                    <div
                      className="flex justify-center border-b-4 p-7 items-center w-full"
                      key={index}
                    >
                      <div className="w-9/12 flex flex-col items-start p-0">
                        <div className="m-0 text-xs text-left  sm:text-lg font-extrabold">
                          {item.name}
                        </div>
                        <div className="m-0 text-xs text-left  sm:text-lg font-semibold">
                          ₹{item.price / 100}
                        </div>
                        <div className="m-0 hidden md:flex md:text-left ">
                          {item.description}
                        </div>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => handleDecrement(item.name)}
                            className="bg-gray-300 text-black px-2 py-1 rounded"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrement(item.name)}
                            className="bg-gray-300 text-black px-2 py-1 rounded"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.name)}
                          className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="w-20 h-20 sm:w-40 sm:h-40 relative">
                        <img
                          src={item.imageId}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" mt-4 w-7/12 flex flex-col items-start ">
                <h2 className="text-4xl font-bold mt-4">Cart</h2>
                <button
                  onClick={handleClearCart}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-2 mb-4"
                >
                  Clear Cart
                </button>
                <div className="text-xl font-bold">
                  Total: ₹{calculateTotal() / 100}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
