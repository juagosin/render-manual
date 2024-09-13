import { mockRepository } from "./casa.mock-repository.js";
import { dbRepository } from "./casa.db-repository.js";
import { envConstants } from "#core/constants/index.js";
export const casaRepository = envConstants.isApiMock ? mockRepository : dbRepository;
