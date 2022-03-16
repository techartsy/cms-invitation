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
import { fetchGiftConfirmation } from "../../../store/action/action";

const fields = [
  {
    key: "No",
    sorter: true,
  },
  { key: "name" },
  {
    key: "category",
    label: "Kategori",
  },
  {
    key: "receipt",
    label: "No Resi",
  },
  {
    key: "notes",
    label: "Catatan",
  },
];

const Tables = () => {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.cmsReducer.gifts);
  useEffect(() => {
    dispatch(fetchGiftConfirmation());
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>Konfirmasi Pengiriman Hadiah</CCardHeader>
            <CCardBody>
              <CDataTable
                items={gifts && gifts}
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
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;
