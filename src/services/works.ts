import { Work, WorksList } from '@/types/works';
import axios from 'axios';

const url = process.env.NEXT_PUBLIC_URL;

export const worksService = {
  getWorksList(): Promise<WorksList> {
    return axios.get(`${url}/api/works`).then((res) => res.data);
  },

  getWorkById(id: string): Promise<Work> {
    return axios.get(`${url}/api/work/${id}`).then((res) => res.data);
  },
};

export type WorksService = typeof worksService;
