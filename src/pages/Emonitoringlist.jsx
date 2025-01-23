/* eslint-disable react/prop-types */

import DataTable from "react-data-table-component";

// eslint-disable-next-line react/prop-types
const Emonitoringlist = ({ processData }) => {

    const columns = [
        {
            name: "Index",
            selector: (row, index) => index + 1,
            sortable: true,
            width: "80px", 
        },
        {
          name: "Tracking ID",
          selector: (row) => row["Tracking ID"],
          sortable: true,
        },
        {
          name: "Service Name",
          selector: (row) => row["Service Name"],
          sortable: true,
        },
        {
          name: "Last Status",
          selector: (row) => row["Last Status"],
          cell: (row) => <span dangerouslySetInnerHTML={{ __html: row["Last Status"] }} />,
        },
        {
          name: "Application Info",
          selector: (row) => row["Application Info"],
          cell: (row) => <span dangerouslySetInnerHTML={{ __html: row["Application Info"] }} />,
        },
        {
          name: "Initiate Request",
          selector: (row) => row.irms_request_initiate,
          cell: (row) => (row.irms_request_initiate === "0" ? "No" : "Yes"),
        },
      ];
    return (
        <div>
      <h2 className="bg-secondary text-white p-3">Emonitoring Data</h2>
      <DataTable
        columns={columns}
        data={processData}
        pagination
        highlightOnHover
        striped
      />
    </div>
    );
};

export default Emonitoringlist;