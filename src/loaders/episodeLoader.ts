import IEpisode from "../interfaces/IEpisode";
import { getEpisode } from "../services/stapi";

type TParams = {
  id?: string;
};
type TParamsString = {
  params?: TParams;
};

export default async function episodeLoader({ params }: TParamsString) {
  if (params?.id) {
    const item: IEpisode = await getEpisode(params.id);
    return { item };
  }
}
