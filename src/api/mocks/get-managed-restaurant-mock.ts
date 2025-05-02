import { http, HttpResponse } from "msw";

import { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  console.log("testeeeeeeeeeeee");
  return new HttpResponse(
    JSON.stringify({
      id: "custom-restaurant-id",
      name: "Pizza Shop",
      createdAt: new Date(),
      updatedAt: new Date(),
      description: "Restaurant description",
      managerId: "custom-user-id",
    }),
    {
      status: 200,
    },
  );
});
