import React, { useEffect, useState } from "react"
import axios from "axios"


export function useSearch(query, pageNumber, URL) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [animes, setAnimes] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setAnimes([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: "GET",
            url: URL,
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then(res => {
            setAnimes(prevAnime => {
                return [...new Set([...prevAnime, res.data])]
                //set removes all the duplicates
            })
            setHasMore(res.data.pagination.has_next_page)
            setLoading(false)


        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])
    return { loading, error, animes, hasMore }
}





export function useFilter(type, filter, pageNumber, URL,) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [animes, setAnimes] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setAnimes([])
    }, [type, filter])


    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: "GET",
            url: URL,
            params: { filter: type, type: filter, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then(res => {
            setAnimes(prevAnime => {
                return [...new Set([...prevAnime, res.data])]
                //set removes all the duplicates
            })
            setHasMore(res.data.pagination.has_next_page)
            setLoading(false)


        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [filter, type, pageNumber,])

    return { loading, error, animes, hasMore }



}







export function useFilter2(Type, filter = "tv", pageNumber,) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [animes, setAnimes] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [filtered, setFiltered] = useState("tv")
    const URL = "https://api.jikan.moe/v4/top/anime";
    const [type, setType] = useState(Type);
    const anime = animes.map((a) => a.data);
    useEffect(() => {
        setAnimes([])
    }, [type, filter])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: "GET",
            url: URL,
            params: { filter: type, type: filter, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then(res => {
            setAnimes(prevAnime => {
                return [...new Set([...prevAnime, res.data])]
                //set removes all the duplicates
            })
            setHasMore(res.data.pagination.has_next_page)
            setLoading(false)


        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [filter, pageNumber])
    return { loading, error, animes, hasMore }
}