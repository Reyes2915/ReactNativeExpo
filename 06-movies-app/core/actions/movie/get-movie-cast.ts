import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";
import { movieApi } from "../api/move.api";

export const getMovieCastAction = async (
  movieId: number 
) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
