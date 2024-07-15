import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetOrdersQuery, useLazyGetOrderDetailsQuery } from "../../../Redux/Slices/OrdersApi";

export default function RowExpansionDemo() {
  const toast = useRef(null);
  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  const [triggerOrderItems, { data: orderItems, isFetching }] = useLazyGetOrderDetailsQuery();
  const [expandedRows, setExpandedRows] = useState(null);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (data) => {
    return formatCurrency(data.total_price);
  };

  const addressBodyTemplate = (data) => {
    const address = JSON.parse(data.shipping_address);
    return `${address.address_line_1}, ${address.city}, ${address.state}, ${address.country}, ${address.zipcode}`;
  };

  const onRowExpand = async (event) => {
    await triggerOrderItems(event.data.id);
    setExpandedRows([event.data])
    toast.current.show({
      severity: "info",
      summary: "Order Expanded",
      detail: `Order No: ${event.data.order_no}`,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    setExpandedRows([])
    toast.current.show({
      severity: "success",
      summary: "Order Collapsed",
      detail: `Order No: ${event.data.order_no}`,
      life: 3000,
    });
  };

  const rowExpansionTemplate = (data) => {
    const orderItemDetails = orderItems?.data || [];

if (isFetching) {
  return <div>Loading...</div>;
}

return (
  <div className="container">
    <div className="p-3">
      <h5>Order Items for {data.order_no}</h5>
      <DataTable value={orderItemDetails}>
        <Column field="id" header="Item ID" sortable />
        <Column field="product_detail.name" header="Product Name" sortable />
        <Column field="quantity" header="Quantity" sortable />
        <Column field="subtotal" header="Subtotal" body={(rowData) => formatCurrency(rowData.subtotal)} sortable />
        <Column header="Product Image" body={(rowData) => <img src={rowData.product_image} alt={rowData.product_detail.name} width="64px" />} />
      </DataTable>
    </div>
  </div>
);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">My Orders</span>
        </h2>
        <div className="container-xxl">
          <div className="card mx-4 ">
            <Toast ref={toast} />
            <DataTable
              value={orders?.data}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              onRowExpand={onRowExpand}
              onRowCollapse={onRowCollapse}
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
              tableStyle={{ minWidth: "60rem" }}
            >
              <Column expander style={{ width: "3em" }} />
              <Column field="order_no" header="Order No" sortable />
              <Column field="order_status" header="Status" sortable />
              <Column field="payment_method" header="Payment Method" sortable />
              <Column field="order_date" header="Order Date" sortable />
              <Column field="shipping_charge" header="Shipping Charge" sortable />
              <Column field="total_price" header="Total Price" body={priceBodyTemplate} sortable />
              <Column header="Shipping Address" body={addressBodyTemplate} />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}

