import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

interface GetOrdersReposponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
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
    const response = await api.get<GetOrdersReposponse>("/orders", {
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
