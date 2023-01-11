const runFetch = async (method: string, url: string, request = {}) => {
  return await fetch(url, {
    method,
    body: method == "get" ? null : JSON.stringify(request),
  })
}

const get = async (url: string, request = {}) => {
  return await runFetch("get", url, request)
}
const post = async (url: string, request = {}) => {
  return await runFetch("post", url, request)
}
const del = async (url: string, request = {}) => {
  return await runFetch("delete", url, request)
}

export default { get, post, del }
