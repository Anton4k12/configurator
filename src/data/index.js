if (!import.meta.env.VITE_BACKEND_URL) {
  throw new Error("No VITE_BACKEND_URL in .env.local");
}

export const fetcher = (url, ...args) =>
  fetch(import.meta.env.VITE_BACKEND_URL + url, ...args).then((res) =>
    res.json(),
  );
