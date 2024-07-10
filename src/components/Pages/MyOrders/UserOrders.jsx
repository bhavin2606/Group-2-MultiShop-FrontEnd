import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // Import Axios
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Breadcrumbs from "../../../Routes/Breadcrumbs";

export default function RowExpansionDemo() {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("./JSON/userOrders.json"); // Replace with your actual API endpoint
        setProducts(response.data); // Set products state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData function when component mounts
  }, []); // Empty dependency array to run only once   // eslint-disable-line react-hooks/exhaustive-deps

  const onRowExpand = (event) => {
    toast.current.show({
      severity: "info",
      summary: "Product Expanded",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: "success",
      summary: "Product Collapsed",
      detail: event.data.name,
      life: 3000,
    });
  };

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const amountBodyTemplate = (rowData) => {
    return formatCurrency(rowData.amount);
  };

  const statusOrderBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.status.toLowerCase()}
        severity={getOrderSeverity(rowData)}
      ></Tag>
    );
  };

  const searchBodyTemplate = () => {
    return <Button icon="pi pi-search" />;
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        width="64px"
        className="shadow-4"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getProductSeverity(rowData)}
      ></Tag>
    );
  };

  const getProductSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const getOrderSeverity = (order) => {
    switch (order.status) {
      case "DELIVERED":
        return "success";

      case "CANCELLED":
        return "danger";

      case "PENDING":
        return "warning";

      case "RETURNED":
        return "info";

      default:
        return null;
    }
  };

  const allowExpansion = (rowData) => {
    return rowData.orders.length > 0;
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="container">
        <div className="p-3">
          <h5>Orders for {data.name}</h5>
          <DataTable value={data.orders}>
            <Column field="id" header="Id" sortable></Column>
            <Column field="customer" header="Customer" sortable></Column>
            <Column field="date" header="Date" sortable></Column>
            <Column
              field="amount"
              header="Amount"
              body={amountBodyTemplate}
              sortable
            ></Column>
            <Column
              field="status"
              header="Status"
              body={statusOrderBodyTemplate}
              sortable
            ></Column>
            <Column
              headerStyle={{ width: "4rem" }}
              body={searchBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
    );
  };

  const header = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
      <Button
        icon="pi pi-minus"
        label="Collapse All"
        onClick={collapseAll}
        text
      />
    </div>
  );

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
              value={products}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              onRowExpand={onRowExpand}
              onRowCollapse={onRowCollapse}
              rowExpansionTemplate={rowExpansionTemplate}
              dataKey="id"
              header={header}
              tableStyle={{ minWidth: "60rem" }}
            >
              <Column expander={allowExpansion} style={{ width: "5rem" }} />
              <Column field="name" header="Name" sortable />
              <Column header="Image" body={imageBodyTemplate} />
              <Column
                field="price"
                header="Price"
                sortable
                body={priceBodyTemplate}
              />
              <Column field="category" header="Category" sortable />
              <Column
                field="rating"
                header="Reviews"
                sortable
                body={ratingBodyTemplate}
              />
              <Column
                field="inventoryStatus"
                header="Status"
                sortable
                body={statusBodyTemplate}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
}
