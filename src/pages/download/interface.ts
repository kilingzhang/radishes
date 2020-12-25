import { SongsDetail } from '@/interface'

export interface Downloaded extends SongsDetail {
  dlt: number
}

export interface DownloadState {
  downloaded: Downloaded[]
}

export const enum DownloadActions {
  DOWNLOAD_MUSIC = 'DOWNLOAD_MUSIC'
}

export const enum DownloadMutations {
  SET_DOWNLOAD_MUSIC = 'SET_DOWNLOAD_MUSIC'
}
