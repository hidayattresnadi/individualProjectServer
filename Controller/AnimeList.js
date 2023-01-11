const { default: axios } = require("axios")
class Characters {
    static showAnime(req, res) {
        let { q,limit,min_score } = req.query
        axios({
            method: 'get',
            url: `https://api.jikan.moe/v4/anime`,
            params: {
                q, limit, min_score
            }
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => console.log(error))
    }
    static showPopularAnime(req,res){
        axios({
            method: 'get',
            url: "https://api.jikan.moe/v4/top/anime",
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => console.log(error))
    }
    static showAnimeById(req,res){
        let id = req.params.animeId
        axios({
            method: 'get',
            url: `https://api.jikan.moe/v4/anime/${id}`,
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => console.log(error))
    }
}
module.exports = Characters