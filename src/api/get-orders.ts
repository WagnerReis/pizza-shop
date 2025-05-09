import { OrderStatus } from "@/components/order-status";
import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

export interface GetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: OrderStatus;
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  try {
    const response = await api.get<GetOrdersResponse>("/orders", {
      params: {
        pageIndex,
        orderId,
        customerName,
        status,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}
