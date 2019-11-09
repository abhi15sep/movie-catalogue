export const config = {
    username: "jumboFED",
    password: "jumbofrontendcodeproject",
    api_base_url: "https://api.themoviedb.org/3",
    api_key: "6ed12e064b90ae1290fa326ce9e790ff",

    card_image_base: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/",
    backdrop_base: "https://image.tmdb.org/t/p/w1000_and_h563_face/",

    mobile_card_base: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
    mobile_backdrop_base: "https://image.tmdb.org/t/p/w500_and_h282_face",

    // Below was hard coded data from the request used for development
    // in order to avoid making unnecessary requests or hitting rate limits
    popular_example: {
        "page": 1,
        "total_results": 10000,
        "total_pages": 500,
        "results": [
            {
                "popularity": 403.525,
                "vote_count": 4936,
                "video": false,
                "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                "id": 475557,
                "adult": false,
                "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
                "original_language": "en",
                "original_title": "Joker",
                "genre_ids": [
                    80,
                    18,
                    53
                ],
                "title": "Joker",
                "vote_average": 8.5,
                "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                "release_date": "2019-10-04"
            }
        ]
    },

    details_examlpe: {
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "belongs_to_collection": null,
        "budget": 55000000,
        "genres": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 53,
                "name": "Thriller"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ],
        "homepage": "http://www.jokermovie.net/",
        "id": 475557,
        "imdb_id": "tt7286456",
        "original_language": "en",
        "original_title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "popularity": 394.256,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "production_companies": [
            {
                "id": 9993,
                "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
                "name": "DC Entertainment",
                "origin_country": "US"
            },
            {
                "id": 174,
                "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
                "name": "Warner Bros. Pictures",
                "origin_country": "US"
            },
            {
                "id": 429,
                "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
                "name": "DC Comics",
                "origin_country": "US"
            },
            {
                "id": 83036,
                "logo_path": null,
                "name": "Joint Effort",
                "origin_country": "US"
            },
            {
                "id": 79,
                "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
                "name": "Village Roadshow Pictures",
                "origin_country": "US"
            },
            {
                "id": 13240,
                "logo_path": "/aTc07YaNHo8WNgkQSnvLmG6w4nW.png",
                "name": "Bron Studios",
                "origin_country": "CA"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2019-10-02",
        "revenue": 936887108,
        "runtime": 122,
        "spoken_languages": [
            {
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Put on a happy face.",
        "title": "Joker",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 4991
    }
};