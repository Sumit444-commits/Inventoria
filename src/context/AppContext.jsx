import { createContext, useContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
export const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [hasLoadedCart, setHasLoadedCart] = useState(false);

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [usersList, setUsersList] = useState(() => {
    const savedUser = localStorage.getItem("usersList");
    return savedUser ? JSON.parse(savedUser) : [];
  });

 const [currUser, setCurrUser] = useState(() => {
  try {
    const saved = localStorage.getItem("currUser");
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed && typeof parsed === "object" && parsed.email
      ? parsed
      : { name: "", email: "", status: false };
  } catch {
    return { name: "", email: "", status: false };
  }
});

  // fetching the current user cart
 useEffect(() => {
  // console.log("Loading cart for:", currUser);

  if (currUser?.email && currUser.email.trim() !== "") {
    const savedCart = localStorage.getItem(currUser.email);
    const savedCount = localStorage.getItem(currUser.email + ".cartCount");

    // console.log("Found cart in storage:", savedCart);
    // console.log("Found count in storage:", savedCount);

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart:", e);
      }
    }

    if (savedCount) {
      setCartCount(parseInt(savedCount, 10));
    }

    // Mark as loaded
    setHasLoadedCart(true);
  }
}, [currUser?.email]);



// Saving cart and cartCount whenever they change
useEffect(() => {
  if (
    currUser?.email &&
    currUser.email.trim() !== "" &&
    hasLoadedCart // Don't save until load is complete
  ) {
    // console.log("Saving cart for:", currUser.email);
    // console.log("Cart:", cart);
    // console.log("Cart count:", cartCount);

    localStorage.setItem(currUser.email, JSON.stringify(cart));
    localStorage.setItem(currUser.email + ".cartCount", cartCount.toString());
  }
}, [cart, cartCount, currUser?.email, hasLoadedCart]);




  const toastEffect = {
    position: "top-right",
    autoClose: 500,
    closeOnClick: false,
    draggable: true,
    pauseOnHover: false,
    theme: "dark",
    transition: Bounce,
  };

  const handleCart = (id) => {
    if (currUser.email === "" || currUser === null) {
      toast.info("Please Login First", toastEffect);
      return;
    }
    const matchedCarts = cart.find((c) => c.id === id);
    if (matchedCarts) {
      setCart(
        cart.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
      );
    } else {
      setCart([...cart, { id, count: 1 }]);
    }

    setCartCount((prev) => prev + 1);
    toast.success("Cart Added Successfully", toastEffect);
  };
  const handleDeleteCart = (id) => {
    const matchedCarts = cart.find((c) => c.id === id);

    if (matchedCarts.count > 1) {
      setCart(
        cart.map((c) => (c.id === id ? { ...c, count: c.count - 1 } : c))
      );
    } else {
      const changedCart = cart.filter((item) => item.id !== id);
      setCart(changedCart);
    }

    setCartCount((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
    toast.success("One cart removed Successfully", toastEffect);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartCount,
        setCartCount,
        price,
        setPrice,
        handleCart,
        handleDeleteCart,
        search,
        setSearch,
        filter,
        setFilter,
        toastEffect,
        usersList,
        setUsersList,
        currUser,
        setCurrUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
