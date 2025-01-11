import { TMDB_MOVIE_API_SEARCH_URL, gptQuery } from "./constants";
import { fetchMovieOrTvShowData } from "../api/content";
import { openai } from "./openai";

const gptSearchContent = async (searchValue) => {
    const searchQuery = gptQuery(searchValue);
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchQuery }],
        model: "gpt-4o-mini",
    });
    //Sholay, Deewar, Guide, Pakeezah, Mughal-e-Azam
    const contentGptResults = gptResults?.choices?.[0]?.message?.content?.split(",");
    if (!contentGptResults) {
        return { contentGptResults: [], movieOrTvShowResults: [] };
    }
    const contentPromiseResults = contentGptResults.map((result) =>
        fetchMovieOrTvShowData(
            `${TMDB_MOVIE_API_SEARCH_URL}?query=${result}&include_adult=false`
        )
    );
    const movieOrTvShowResults = await Promise.all(contentPromiseResults);
    return { contentGptResults, movieOrTvShowResults };
}

export default gptSearchContent