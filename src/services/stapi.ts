const ROOT = "https://stapi.co/api/v1/rest";

export async function getEpisodes(term: string | null) {
  const url = `${ROOT}/episode/search`;
  let body = null;
  if (term) {
    body = new URLSearchParams({ title: term, name: term }).toString();
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body,
  })
    .then((response) => response.json())
    .then((response) => response);
}
