const ROOT = "https://stapi.co/api/v1/rest";

export async function getEpisodes(term: string | null) {
  const url = `${ROOT}/episode/search`;
  let body = null;
  if (term !== null) {
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

export async function getEpisode(uid: string) {
  const url = `${ROOT}/episode/?uid=${uid}`;

  return await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => response.json())
    .then((response) => response.episode);
}
