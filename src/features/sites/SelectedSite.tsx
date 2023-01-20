// Imports
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ResponsiveContainer, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


function SelectedSite() {

    const selectedSite = useSelector((state: RootState) => state.pages);
    
    const solarInfo = useSelector((state: RootState) => state.solar);
    const windmillInfo = useSelector((state: RootState) => state.windmills);

    const siteId: number = parseInt(selectedSite.selectedId) - 1;

    if(selectedSite.siteCategory === "windmill"){
        return(
            <>
                <div className="selected-site-chart">

                    <div style={{ width: "100%", height: "100%" }}>

                        <ResponsiveContainer>

                            <LineChart
                                width={500}
                                height={400}
                                data={windmillInfo[siteId].productionData}
                            >
                                
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="gwh" stroke="#ff7300" />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </div>
                <div className="selected-site-details">
                    Name: {windmillInfo[siteId].name}<br/>
                    Location: {windmillInfo[siteId].location}<br/>
                    <br/>
                    State <br/>
                    <br/>
                    Blades: {windmillInfo[siteId].state.blades}<br/>
                    Clutch: {windmillInfo[siteId].state.clutch}<br/>
                </div>
                <div className="selected-site-production">
                    Past production
                    Current: {windmillInfo[siteId].production.current}<br/>
                    Last Hour: {windmillInfo[siteId].production.lasthour}<br/>
                    Last 24H: {windmillInfo[siteId].production.last24h}<br/>
                </div>
            </>
            
        )
    } else if(selectedSite.siteCategory === "solarpanels"){
        return(
            <>
                
                <div className="selected-site-chart">
                    
                    <div style={{ width: "100%", height: "100%" }}>

                        <ResponsiveContainer>

                            <LineChart
                                width={500}
                                height={400}
                                data={solarInfo[siteId].productionData}
                            >
                                
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="gwh" stroke="#ff7300" />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </div>
                <div className="selected-site-details">
                    Name: {solarInfo[siteId].name}<br/>
                    Location: {solarInfo[siteId].location}<br/>
                    <br/>
                    State <br/>
                    <br/>
                    Panels: {solarInfo[siteId].state.panels}<br/>
                    Efficiency: {solarInfo[siteId].state.efficiency}<br/>
                    IHaveNoIdea: {solarInfo[siteId].state.ihavenoidea}<br/>
                </div>
                <div className="selected-site-production">
                    Past production
                    Current: {solarInfo[siteId].production.current}<br/>
                    Last Hour: {solarInfo[siteId].production.lasthour}<br/>
                    Last 24H: {solarInfo[siteId].production.last24h}<br/>
                </div>

            </>
        )
    } else {
        return(
            <>
                <h5>Nothing selected!</h5>
            </>
        )
    }

}

export default SelectedSite;