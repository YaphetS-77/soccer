import { useEffect, useState } from "react";
import Header from "./components/header"
import Menuu from "./components/menu";
import axios from 'axios';

const Main = () => {
    const [matches, setMatches] = useState(null);
    const fetchMatches = async () => {
        const params = {
            timezone: '+6',
            category: 'soccer'
        }
        const nurs = await axios({
            url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
            method: 'get',
            params: params,
            headers: {
                'X-RapidAPI-Key': '3acc76c17dmshb1b742e5beeeea5p1eca63jsn7d438a2f4b79',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
            }
        })
        console.log('data', nurs);
        if (nurs.status == 200) {
            setMatches(nurs.data.Stages);
        }
    }
    const navigateTo = (id)=>{
        window.location.href = '/singlematch/'+id;
    }
    useEffect(() => {
        fetchMatches();
    }, [])
    return (
        <div className="container-fluid">
            <Header></Header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 bg-light height">
                        <div className="row">
                            <div className="col-md-4">
                                <Menuu></Menuu>
                            </div>
                            <div className="col-md-6">
                                <h1 className="wrift">FOOTBALL.kg</h1>
                                <img width={520} src="https://n2.cdn.trafficdok.com/uploads/media/7/4/69347/v1/Effect_M_global_980x90.gif"></img> <hr></hr>

                                <div className="row">
                                    {matches != null ?
                                        <>
                                            {matches.map((item) =>
                                                <div className="col-md-12 text-light bg-dark mb-3">
                                                    <div className="row p-2">
                                                        
                                                        <div className="col-md-12">
                                                            <b>{item.Sdn}</b><br></br>
                                                            <b className="pb-3">{item.Ccd}</b>
                                                        </div>
                                                       
                                                    </div>
                                                    {item.Events.map((i)=>
                                                    <div className="row bg-secondary p-2 radius mb-2" onClick={()=>navigateTo(i.Eid)}>
                                                        <div className="col-md-1 pt-3">
                                                            <b>{i.Eps}</b>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="row mb-2">
                                                                <div className="col-md-1">
                                                                    <img src={"https://lsm-static-prod.livescore.com/medium/"+i.T1[0].Img} width={25} height={25}></img>
                                                                </div>
                                                                <div className="col-md-10 ps-3">
                                                                    <b>{i.T1[0].Nm}</b>
                                                                </div>
                                                                <div className="col-md-1">
                                                                    <b>{i.Tr1}</b>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-1">
                                                                    <img src={"	https://lsm-static-prod.livescore.com/medium/"+i.T2[0].Img} width={25} height={25}></img>
                                                                </div>
                                                                <div className="col-md-10 ps-3">
                                                                    <b>{i.T2[0].Nm}</b>
                                                                </div>
                                                                <div className="col-md-1">
                                                                    <b>{i.Tr2}</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1">

                                                        </div>
                                                    </div>
)} 
                                                    
                                                    <br></br>
                                                    
                                                </div>
                                            )
                                            }</>
                                        : <></>
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 p-2">
                                <button className="btn btn-success"><b>Вход</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}
export default Main;