import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MovieScreen = () => {

  const {id}=useLocalSearchParams();
  const {movieQuery}=useMovie(+id);

if(movieQuery.isLoading || !movieQuery.data){
  return (
    <View className='flex flex-1 justify-center items-center'>
      <Text className='mb-4'>Espero por favor</Text>
      <ActivityIndicator color='purple' size={30}></ActivityIndicator>
    </View>
  )
}

  getMovieByIdAction(+id);
  return (
    <ScrollView>
      <MovieHeader
      originalTitle={movieQuery.data.originalTitle}
      poster={movieQuery.data.poster}
      title={movieQuery.data.title}
      ></MovieHeader>

      <MovieDescription movie={movieQuery.data}></MovieDescription>
    <MovieCast></MovieCast>
    </ScrollView>
  )
}

export default MovieScreen