const LoginButton = () => {
  const handleClick = async () => {
    const data = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "tony@stark.com",
        password: "password123",
      }),
    });
    const response = await data.json();
    console.log(response);
  };
  return <button onClick={handleClick}>connexion</button>;
};

export default LoginButton;
