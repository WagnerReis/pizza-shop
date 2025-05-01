import { twMerge } from "tailwind-merge";

export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, { message: string; color: string }> =
  {
    pending: { message: "Pendente", color: "bg-slate-400" },
    canceled: { message: "Cancelado", color: "bg-rose-500" },
    delivered: { message: "Entregue", color: "bg-emerald-500" },
    delivering: { message: "Em entrega", color: "bg-amber-500" },
    processing: { message: "Em preparo", color: "bg-amber-500" },
  };

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={twMerge(
          "h-2 w-2 rounded-full",
          `${orderStatusMap[status].color}`,
        )}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].message}
      </span>
    </div>
  );
}
