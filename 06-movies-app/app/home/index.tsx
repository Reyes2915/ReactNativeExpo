import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeAre = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40}></ActivityIndicator>
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 mb-10" style={{ paddingTop: safeAre.top }}>
        <Text className="text-xl font-bold px-4 mb-2">MoviesApp</Text>
        <MainSlidesShow movies={nowPlayingQuery.data ?? []}></MainSlidesShow>
        <MoviesHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        ></MoviesHorizontalList>

        <MoviesHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        ></MoviesHorizontalList>

        <MoviesHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        ></MoviesHorizontalList>
      </View>
    </ScrollView>
  );
};

export default HomeScreen
