import { httpService } from "../http/HttpService";

class ProjectService {
  async getIdsAndName(): Promise<any> {
    return await httpService.get(`/projects/idsAndName`).then((response) => {
      return response.data;
    });
  }
}

export const projectService = new ProjectService();
