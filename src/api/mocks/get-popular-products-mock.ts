import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return new HttpResponse(
    JSON.stringify([
      { product: "Product 1", amount: 10 },
      { product: "Product 2", amount: 20 },
      { product: "Product 3", amount: 30 },
    ]),
    {
      status: 200,
    },
  );
});
