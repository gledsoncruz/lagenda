

import { login } from "@/actions/auth";

export default function Login() {

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = event.currentTarget.email.value; // Obtém o valor do campo username
    const password = event.currentTarget.password.value; // Obtém o valor do campo password
    login(email, password); // Chama a função de login com os valores obtidos
    // console.log(await response.json())
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}