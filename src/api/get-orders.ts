import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null;
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

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  try {
    const response = await api.get<GetOrdersReposponse>("/orders", {
      params: {
        pageIndex,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
}
