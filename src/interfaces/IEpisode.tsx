interface IEpisode {
  uid: string;
  title: string | null;
  titleGerman: string | null;
  titleJapanese: string | null;
  titleItalian: string | null;
  usAirDate: string | null;
  yearFrom: number | null;
  yearTo: number | null;
}

export default IEpisode;
