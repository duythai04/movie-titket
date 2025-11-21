import * as UserModel from "../models/movie.model.js";

export const findAllMovies = async () => {
  const users = await UserModel.getAllMovies();
  return users;
};

export const findMovieId = async (movie_id) => {
  const user = await UserModel.getMovieById(movie_id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
