import { Request, Response } from 'express';

import { CategoriesService } from '../services/categories.service';

export class CategoriesController {
  async create(Request: Request, Response: Response) {
    const service = new CategoriesService();

    const result = await service.create();

    return Response.status(201).json(result);
  }
}
