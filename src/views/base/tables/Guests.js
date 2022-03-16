import React, { useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { fetchParticipants } from "../../../store/action/action";
// import Excel from "../../Excel";

// const fields = ['nama', 'nomor', 'telepon', 'alamat', 'attend', 'pax', 'message', 'action'];
const fields = [
  {
    key: "No",
    sorter: true,
  },
  { key: "name" },
  {
    key: "address",
    label: "Alamat",
  },
  { key: "attend" },
  { key: "message" },
];

const Tables = () => {
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.cmsReducer.participants);
  useEffect(() => {
    dispatch(fetchParticipants());
  }, []);
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Tamu Undangan</CCardHeader>
            <CCardBody>
              <CDataTable
                items={participants && participants}
                fields={fields}
                itemsPerPage={5}
                dark
                pagination
                sorter
                tableFilter
                hover
                scopedSlots={{
                  No: (item, index) => {
                    return <td className="py-2">{index + 1}.</td>;
                  },
                }}
              />
            </CCardBody>
          </CCard>
          {/* <Excel csvData={participants} fileName={"Data Tamu Undangan"} /> */}
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;
