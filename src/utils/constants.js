export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg";
export const NETFLIX_USER_ICON = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const TMDB_BEARER = process.env.REACT_APP_TMDB_BEARER;
export const TMDB_MOVIE_API_URL = "https://api.themoviedb.org/3/movie";
export const TMDB_MOVIE_API_SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
export const TMDB_TV_SHOW_API_URL = "https://api.themoviedb.org/3/tv";
export const TMDB_POSTER_PATH = "https://image.tmdb.org/t/p/w500";
export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;
export const SIGNOUT_TEXT = ". Once you sign out, your session will end, and you'll be redirected to the login page. To continue using our services, you'll need to sign in again."
export const CAPTCHA_TEXT = "This page is protected by Google reCAPTCHA to ensure you're not a bot.";
export const IFRAME_TITLE = "Youtube Video Player.";

export const youtubeSrcUrl = (youtubeKey) => {
    return `https://www.youtube.com/embed/${youtubeKey}`;
}
export const gptQuery = (searchText) => {
    return `Please recommend some movies or tv shows based on provided searchtext name ${searchText} limit response to 5 movie names or tv shows names by comma seperated values.For example for movies Coolie,Kick,Namate London, Kill or for tv shows F.I.R,TMKOC`;
}