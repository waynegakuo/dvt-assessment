export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album?: number;
  nb_fan?: number;
  radio: boolean;
  share?: string;
  tracklist?: string;
  type?: string;
}

export interface Contributor extends Artist {
  tracklist: string;
  type: string;
  role: string;
  share?: string
}

export interface SearchResponse {
  data: Artist[];
}


