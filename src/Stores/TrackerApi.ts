import axios from "axios";
import appConfig from "../../appconfig";

const option = () => {
  return {
    baseURL: appConfig.ApiUrl,
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin' : '*',
    },
    withCredentials: false
  };
};

const apiClient = axios.create(option());

export interface DataTableRequest {
  pageNumber: number;
  pageSize: number;
  searchTerm?: string;
  sort?: string;
  sortType?: string;
}

export interface TrackerDto {
  key: string;
  search: string;
  url: string;
  engineType: string;
  histories: Array<{
    createDateTime: string;
    ranks: number[];
  }>;
}

export interface DataTableResult<T> {
  items: T[];
  totalCount: number;
}
export default {
  async GetAllTrackers(request: DataTableRequest): Promise<DataTableResult<TrackerDto>> {
    const response = await apiClient.get<DataTableResult<TrackerDto>>('api/tracker', {
      params: request,
    });
    return response.data;
  },

  async GetTrackerByKey(key: string): Promise<TrackerDto | null> {
    const response = await apiClient.get<TrackerDto>(`api/tracker/history?key=${encodeURIComponent(key)}`);
    return response.data;
  },
  async GetGoogleRank(search: string, url: string): Promise<number[]> {
    const response = await apiClient.get<number[]>(`api/tracker/google?search=${search}&url=${url}`, {
      params: { search, url },
    });
    return response.data;
  },
};
