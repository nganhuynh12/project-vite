import React, {useEffect, useState} from "react";
import _ from 'lodash'

function XoSo(){
    const arr = [
        {
            tenGiai: "Giai DB",
            ketQua: [41383]
        },

        {
            tenGiai: "Giai nhat",
            ketQua: [74584]
        },

        {
            tenGiai: "Giai nhi",
            ketQua: [82824]
        },

        {
            tenGiai: "Giai ba",
            ketQua: [94021, 83201]
        },

        {
            tenGiai: "Giai tu",
            ketQua: [45624, 56425, 76897, 32355, 76574, 64783, 73642]
        },

        {
            tenGiai: "Giai nam",
            ketQua: [9138]
        },

        {
            tenGiai: "Giai sau",
            ketQua: [2993, 3820, 2890]
        },

        {
            tenGiai: "Giai bay",
            ketQua: [944]
        },

        {
            tenGiai: "Giai 8",
            ketQua: [23]
        },
    ];
    const num = [
        {
            value: 0,
            chuc: [],
            dv: []
        },

        {
            value: 1,
            chuc: [],
            dv: []
        },

        {
            value: 2,
            chuc: [],
            dv: []
        },

        {
            value: 3,
            chuc: [],
            dv: []
        },

        {
            value: 4,
            chuc: [],
            dv: []
        },

        {
            value: 5,
            chuc: [],
            dv: []
        },

        {
            value: 6,
            chuc: [],
            dv: []
        },

        {
            value: 7,
            chuc: [],
            dv: []
        },

        {
            value: 8,
            chuc: [],
            dv: []
        },

        {
            value: 9,
            chuc: [],
            dv: []
        },
    ];
    const [soDuocChon, setSoDuocChon] = useState(-1)
    const [displayResult, setDisplayResult] = useState('');
    const formatKetQua = (value) => {
        const soTimDuocDV = _.endsWith(`${value}`, `${soDuocChon}`, `${value}`.length)
        const soTimDuocChuc = _.endsWith(`${value}`, `${soDuocChon}`, `${value}`.length - 1)
        const highlightLastTwoDigits = soTimDuocDV || soTimDuocChuc;
        return (
            <span>
                {`${value}`.substring(0, `${value}`.length - 2)}
                <span className={highlightLastTwoDigits ? 'highlight-last-two-digits' : ''}>
                    {`${value}`.substring(`${value}`.length - 2)}
                </span>
            </span>
        );
    }

    const checkResult = () => {
        const inputElements = document.getElementsByClassName('input');
        const checkNumber = inputElements[0].value;
        let isMatch = false;
        let winner = null;
        arr.map((item) => {
            item.ketQua.map((number) => {
                if (checkNumber == number) {
                    winner = item.tenGiai;
                    isMatch = true;
                }
            });
        });
        if (isMatch) {
            setDisplayResult(`chuc mung ban da trung ${winner}`);
        } else {
            setDisplayResult('chuc ban may man lan sau');
        }
    };

    const arrCheckNumber = num.map(item => {
        const itemNew = {
            value: item.value,
            chuc: [],
            dv: []
        }
        arr.forEach(i => {
            i.ketQua.forEach(u => {
                const checkSoDV = _.endsWith(`${u}`, `${itemNew.value}`, `${u}`.length)
                const checkSoChuc = _.endsWith(`${u}`, `${itemNew.value}`, `${u}`.length - 1)
                const soDv = `${u}`.substring(`${u}`.length - 1)
                const soChuc = `${u}`.substring(`${u}`.length - 2, `${u}`.length - 1)
                if(!checkSoChuc && checkSoDV){
                    itemNew.chuc.push(soChuc)
                }
                if (checkSoChuc && !checkSoDV){
                    itemNew.dv.push(soDv)
                }
            })
        })
        itemNew.chuc =_.sortBy(_.uniq(itemNew.chuc))
        itemNew.dv = _.sortBy(_.uniq(itemNew.dv))
        return itemNew
    })

    return(
        <div>
            <div className="table__xoSo">
                <table>
                    <tr>
                        <td>Thu ba Ngay 09/01/2024</td>
                        <td>XSVT Loai ve: 1B</td>
                    </tr>
                    {
                        arr.map((item) => {
                            return (
                                <tr>
                                    <td>{item.tenGiai}</td>
                                    <td>{item.ketQua.map((number) => {
                                        {
                                            return (
                                                <span>{formatKetQua(number)}</span>
                                            )
                                        }
                                    })}</td>
                                </tr>
                            )
                        })
                    }
                </table>

                <table>
                    <tr>
                        <td>Chuc</td>
                        <td>So</td>
                        <td>D.Vi</td>
                    </tr>
                    {
                        arrCheckNumber.map((item) => {
                            return (
                                <tr>
                                    <td>
                                        {
                                            item.chuc.join(', ')
                                        }
                                    </td>
                                    <td onClick={() => setSoDuocChon(item.value)}>{item.value}</td>
                                    <td>
                                        {
                                            item.dv.join(', ')
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <div>
                <h1 className="display">{displayResult}</h1>
                <input className="input"/>
                <button onClick={checkResult}>Gui</button>
            </div>
        </div>
    )
}
export default XoSo