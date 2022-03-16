import React from "react";

const _nav = [
  {
    _tag: "CSidebarNavDropdown",
    name: "Invitation Adhy & Yenny",
    route: "/invitation",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Data Tamu Undangan",
        to: "/invitation/guests",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Konfirmasi Pengiriman Hadiah",
        to: "/invitation/gift",
      },
    ],
  },
];

export default _nav;
