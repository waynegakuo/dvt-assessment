import {List} from "postcss/lib/list";
import {Artist, Contributor} from "../Artist/artist.model";
import {Album} from "../Album/album.model";

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  unseen: boolean;
  isrc: string;
  link: string;
  share: string;
  duration: number;
  track_position: number;
  disk_number: number;
  rank: number;
  release_date: Date;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  preview: string;
  bpm: number;
  gain: number;
  available_countries?: List;
  alternative: Track;
  contributors: Contributor[];
  md5_image: string;
  artist: Artist;
  album: Album;
}

export interface TrackResponse {
  data: Track[];
}
