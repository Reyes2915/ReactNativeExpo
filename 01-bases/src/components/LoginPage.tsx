import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando sesión</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button className="bg-blue-500 p-2 text-white" onClick={() => logout}>
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la app</h3>
          <button
            className="bg-blue-500 p-2 text-white"
            onClick={() => loginWithEmailPassword("prueba@gmail.com", "ABC")}
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
