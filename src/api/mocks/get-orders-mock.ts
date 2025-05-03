import { http, HttpResponse } from "msw";
import type { GetOrdersResponse } from "../get-orders";

type Orders = GetOrdersResponse["orders"];
type OrderStatus = Orders[number]["status"];

const statuses: OrderStatus[] = [
  "pending",
  "canceled",
  "processing",
  "delivering",
  "delivered",
];

const orders: Orders = Array.from({ length: 60 }).map((_, index) => ({
  orderId: `order-${index + 1}`,
  customerName: `Customer ${index + 1}`,
  total: 2400,
  createdAt: new Date().toISOString(),
  status: statuses[index % statuses.length],
}));

export const getOrderMock = http.get<never, never, GetOrdersResponse>(
  "/orders",
  async ({ request }) => {
    const query = new URL(request.url).searchParams;

    const pageIndex = query.get("pageIndex")
      ? Number(query.get("pageIndex"))
      : 0;

    const customerName = query.get("customerName");
    const orderId = query.get("orderId");
    const status = query.get("status");

    let filteredOrders = orders;

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.toLowerCase().includes(customerName.toLowerCase()),
      );
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.toLowerCase().includes(orderId.toLowerCase()),
      );
    }

    if (status) {
      filteredOrders = filteredOrders.filter(
        (order) => order.status.toLowerCase() === status.toLowerCase(),
      );
    }

    const pageSize = 10;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: pageSize,
        totalCount: filteredOrders.length,
      },
    });
  },
);
