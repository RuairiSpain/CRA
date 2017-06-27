

        const BASE_API_URL = 'https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/';

        let stories = [];

        const getAuthor = (username) => request(newsDetails(username));
        const topURL = () => `${BASE_API_URL}topstories.json`;
        const buildURL = (url) => `${BASE_API_URL}${url}`;
        const newsDetails = (id) => buildURL('item/' + id);
        const userDetails = (id) => buildURL('user/' + id);

        function sortByScore(map) {
            return new Map([...stories.entries()].sort((a, b) => a.story.score > b.story.score));
        }

        function unsort(array, size = 10) {
            return array.slice(0, size).sort(() => .5 - Math.random());
        }

        function getStories(itemIds) {
            return axios.all(itemIds.map(id => axios.get(newsDetails(id), {
                    responseType: 'json'
                }))) //parrallel download of articles
                .then(function(articles) {
                    axios.all(articles.data.map(article => axios.get(getAuthor(article.by), {
                            responseType: 'json'
                        }))) //parrallel download of authors
                        .then(authors => ({
                                articles: articles.data,
                                authors: authors.data
                            }),
                            error => console.log(error));
                });
        }

        function getRandomNewsData() {
            axios.get(topURL(), {
                    responseType: 'json'
                })
                .then(ids => stories = getStories(unsort(ids.data)));
        }