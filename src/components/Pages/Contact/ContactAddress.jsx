import React from "react";
import { useGetSettingDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

export default function ContactAddress() {
  const { data: SettingData } = useGetSettingDataQuery();
  return (
    <>
      {SettingData?.footer?.map((data, index) => (
        <div className="bg-light p-30 mb-3" key={index}>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>{data?.address}
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>{data?.email}
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt text-primary mr-3"></i>{data?.contact}
          </p>
        </div>
      ))}
    </>
  );
}
