import { useState, useEffect } from "react";

const informacoesComuns = (item) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (item) {
      setUsername(item.username);
      setAddress(item.address);
      setEmail(item.email);
      setPhone(item.phone);
    }
  }, [item]);

  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setAddress(inputValue);
    }
  };

  return {
    username,
    address,
    email,
    phone,
    setUsername,
    setAddress,
    setEmail,
    setPhone,
    handleAddressChange,
  };
};

export default informacoesComuns;
