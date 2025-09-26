export const BasicTypes = () => {
  const name: string = "Reyes";
  const age: number = 22;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} -{age}-{isActive ? "Activo" : "Inactuvi"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
