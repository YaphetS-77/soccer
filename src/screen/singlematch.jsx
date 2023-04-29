import { useParams } from "react-router-dom";
import Header from "./components/header"
import { Tabs } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";

const Singlem = (key) => {
    const param = useParams();
    const id = param.id;
    const [match, setMatch] = useState(null);
    const fetchMatch = async () => {
        const params = {
            Eid: '702093',
            Category: 'soccer',
        }
        const nurs = await axios({
            url: 'https://livescore6.p.rapidapi.com/matches/v2/get-lineups',
            method: 'get',
            params: params,
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '3acc76c17dmshb1b742e5beeeea5p1eca63jsn7d438a2f4b79',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
            }
        })
        console.log('data', nurs);
        if (nurs.status == 200) {
            setMatch(nurs.data.Stages);
        }
    }
    useEffect(() => {
        fetchMatch();
    }, [])
    console.log(key);
    return (
        <div className="container-fluid">
            <Header></Header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 bg-light height">
                        <div className="row mt-3">
                            <div className="col-md-5 text-center">
                                <big className="pt-3"><b>Реал Мадрид</b></big> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" width={30} height={30}></img>
                            </div>
                            <div className="col-md-2 pt-1 text-center">
                                <big><b className="bg-secondary p-2">0</b></big> <big><b className="bg-secondary p-2">0</b></big>
                            </div>
                            <div className="col-md-5 text-center">
                                <big className="pt-3"><b>Барселона</b></big> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" width={30} height={30}></img>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <Tabs className="ps-5" defaultActiveKey="1">
                                    <Tabs.TabPane className="me-5" tab="Обзор" key="1">
                                        Content of Tab Pane 1
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Хронология" key="2">
                                        Content of Tab Pane 2
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Составы" key="3">
                                        {match != null ?
                                            <>
                                                {match.map((item) =>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-6">

                                                                </div>
                                                                <div className="col-md-6">

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                }</>
                                            : <></>
                                        }
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Рейтинг игроков" key="4">
                                        Content of Tab Pane 5
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}
export default Singlem;