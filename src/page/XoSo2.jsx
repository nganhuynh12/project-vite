import React, { useState } from "react";
import _ from "lodash";
import { Button, Tag } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LayoutXoSo from "../components/LayoutXoSo"
import { Col, Row } from "antd";
import { Space, Table } from "antd";

function XoSo2() {
  const arr = [
    {
      tenGiai: "Giai DB",
      ketQua: [41383],
    },

    {
      tenGiai: "Giai nhat",
      ketQua: [74584],
    },

    {
      tenGiai: "Giai nhi",
      ketQua: [82824],
    },

    {
      tenGiai: "Giai ba",
      ketQua: [94021, 83201],
    },

    {
      tenGiai: "Giai tu",
      ketQua: [45624, 56425, 76897, 32355, 76574, 64783, 73642],
    },

    {
      tenGiai: "Giai nam",
      ketQua: [9138],
    },

    {
      tenGiai: "Giai sau",
      ketQua: [2993, 3820, 2890],
    },

    {
      tenGiai: "Giai bay",
      ketQua: [944],
    },

    {
      tenGiai: "Giai 8",
      ketQua: [23],
    },
  ];
  const num = [
    {
      value: 0,
      chuc: [],
      dv: [],
    },

    {
      value: 1,
      chuc: [],
      dv: [],
    },

    {
      value: 2,
      chuc: [],
      dv: [],
    },

    {
      value: 3,
      chuc: [],
      dv: [],
    },

    {
      value: 4,
      chuc: [],
      dv: [],
    },

    {
      value: 5,
      chuc: [],
      dv: [],
    },

    {
      value: 6,
      chuc: [],
      dv: [],
    },

    {
      value: 7,
      chuc: [],
      dv: [],
    },

    {
      value: 8,
      chuc: [],
      dv: [],
    },

    {
      value: 9,
      chuc: [],
      dv: [],
    },
  ];
  const [soDuocChon, setSoDuocChon] = useState([-1]);
  const [mainNum, setMainNum] = useState(-1);
  const [clickType, setClickType] = useState("all");

  const formatKetQua = (value) => {
    const soTimDuocDVMain = _.endsWith(
      `${value}`,
      `${mainNum}`,
      `${value}`.length
    );
    const soTimDuocChucMain = _.endsWith(
      `${value}`,
      `${mainNum}`,
      `${value}`.length - 1
    );

    const soTimDuocDV =
      soDuocChon.some((item) => {
        return _.endsWith(`${value}`, `${item}`, `${value}`.length);
      }) &&
      (clickType === "dv" || clickType === "all") &&
      (soTimDuocDVMain || soTimDuocChucMain);

    const soTimDuocChuc =
      soDuocChon.some((item) => {
        return _.endsWith(`${value}`, `${item}`, `${value}`.length - 1);
      }) &&
      (clickType === "chuc" || clickType === "all") &&
      (soTimDuocDVMain || soTimDuocChucMain);

    let highlightLastTwoDigits = "";

    if (soTimDuocDV) {
      highlightLastTwoDigits = "highlight-dv";
    }

    if (soTimDuocChuc) {
      highlightLastTwoDigits = "highlight-chuc";
    }

    return (
      <Tag style={{ fontSize: "20px" }} color="magenta">
        {`${value}`.substring(0, `${value}`.length - 2)}
        <span className={highlightLastTwoDigits}>
          {`${value}`.substring(`${value}`.length - 2)}
        </span>
      </Tag>
    );
  };

  const arrCheckNumber = num.map((item) => {
    const itemNew = {
      value: item.value,
      chuc: [],
      dv: [],
    };
    arr.forEach((i) => {
      i.ketQua.forEach((u) => {
        const checkSoDV = _.endsWith(`${u}`, `${itemNew.value}`, `${u}`.length);
        const checkSoChuc = _.endsWith(
          `${u}`,
          `${itemNew.value}`,
          `${u}`.length - 1
        );
        const soDv = `${u}`.substring(`${u}`.length - 1);
        const soChuc = `${u}`.substring(`${u}`.length - 2, `${u}`.length - 1);
        if (!checkSoChuc && checkSoDV) {
          itemNew.chuc.push(soChuc);
        }
        if (checkSoChuc && !checkSoDV) {
          itemNew.dv.push(soDv);
        }
      });
    });
    itemNew.chuc = _.sortBy(_.uniq(itemNew.chuc));
    itemNew.dv = _.sortBy(_.uniq(itemNew.dv));
    return itemNew;
  });

  const columns = [
    {
      title: "Ten Giai",
      dataIndex: "tenGiai",
      key: "tenGiai",
    },
    {
      title: "Ket Qua",
      dataIndex: "ketQua",
      key: "ketQua",
      render: (_, { ketQua }) => (
        <>
          {ketQua.map((number) => (
            <span>{formatKetQua(number)}</span>
          ))}
        </>
      ),
    },
  ];

  const columns1 = [
    {
      title: "Chuc",
      dataIndex: "chuc",
      key: "chuc",
      render: (_, { chuc, value }) =>
        chuc.map((number) => (
          <Tag
            style={{ fontSize: "20px" }}
            color="green"
            key={number}
            onClick={() => {
              setSoDuocChon(chuc);
              setClickType("chuc");
              setMainNum(value);
            }}
          >
            {number}
          </Tag>
        )),
    },
    {
      title: "So",
      dataIndex: "value",
      key: "value",
      render: (_, { value }) => (
        <>
          <Tag
            style={{ fontSize: "20px" }}
            color="purple"
            key={value}
            onClick={() => {
              setSoDuocChon([value]);
              setClickType("all");
              setMainNum(value);
            }}
          >
            {value}
          </Tag>
        </>
      ),
    },
    {
      title: "Don Vi",
      dataIndex: "dv",
      key: "dv",
      render: (_, { dv, value }) => (
        <>
          {dv.map((number) => (
            <Tag
              style={{ fontSize: "20px" }}
              color="geekblue"
              key={number}
              onClick={() => {
                setSoDuocChon(dv);
                setClickType("dv");
                setMainNum(value);
              }}
            >
              {number}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      <LayoutXoSo content= { 
        <Row className="table__xoSo2">
          <Col span={18}>
            <Table columns={columns} dataSource={arr} />
          </Col>
          <Col span={6}>
            <Table columns={columns1} dataSource={arrCheckNumber} />
          </Col>
        </Row>}>
      </LayoutXoSo>
    </>
  );
}
export default XoSo2;
