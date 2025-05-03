import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return new HttpResponse(
    JSON.stringify({
      id: params.orderId,
      customer: {
        name: "John Doe",
        email: "john@doe.com",
        phone: "123456789",
      },
      totalInCents: 4000,
      status: "pending",
      createdAt: new Date().toISOString(),
      orderItems: [
        {
          id: "order-item-1",
          priceInCents: 1000,
          product: {
            name: "Product 1",
          },
          quantity: 2,
          totalInCents: 2000,
        },
        {
          id: "order-item-2",
          priceInCents: 1000,
          product: {
            name: "Product 2",
          },
          quantity: 2,
          totalInCents: 2000,
        },
      ],
    }),
    {
      status: 200,
    },
  );
});
