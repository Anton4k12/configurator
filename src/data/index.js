export const fetcher = (url, ...args) =>
  fetch(import.meta.env.VITE_BACKEND_URL + url, ...args).then((res) =>
    res.json(),
  );
