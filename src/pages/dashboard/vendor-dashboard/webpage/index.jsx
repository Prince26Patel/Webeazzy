import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/webpage";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Webpage",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function VendorWebpage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
