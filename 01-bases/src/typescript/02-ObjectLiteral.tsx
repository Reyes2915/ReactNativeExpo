interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiteral = () => {
  const person: Person = {
    age: 22,
    firstName: "Reyes",
    lastName: "Delgado",
    address: {
      country: "Spain",
      houseNo: 678,
    },
  };

  return (
    <>
      <h3>Objectos literales</h3>
      <pre>{JSON.stringify(person)}</pre>
    </>
  );
};
