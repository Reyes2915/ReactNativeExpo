import { Redirect } from "expo-router";
import "../global.css";
const App = () => {
  //return <Redirect href="/products" />;
  //return <Redirect href="/tabs" />;
  //return <Redirect href="/drawer" />;
  return <Redirect href="/home" />;




  /* return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text
          className="text-3xl text-primary"
          style={{ fontFamily: "WorkSans-Black" }}
        >
          Welcome to Nativewind!
        </Text>
        <Text
          className="text-2xl font-work-medium
        text-secondary-200
        "
        >
          Welcome to Nativewind!
        </Text>
        <Text
          className="text-xl
        font-work-light
        text-tertiary
        "
        >
          Welcome to Nativewind!
        </Text>

        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView>
  ); */
};

export default App;
