import { createAction } from "../../utils/firebase/reducer/reducer.utils";

import { CATEGORIES_TYPE } from "./categories.types";

export const setCategoriesMap = (categoryMap) =>
  createAction(CATEGORIES_TYPE.SET_CATEGORIES_MAP, categoryMap);
