import {
ComposedChart,
XAxis,
YAxis,
Tooltip,
Legend,
CartesianGrid,
Area,
Bar,
Line,
ResponsiveContainer
} from 'recharts';

const AreaCharts = (props) => {
const {populationData} = props
return(
    <ResponsiveContainer width="100%" height={300} className='graph-con mb-5 p-4  rounded-3'>
        <ComposedChart width={730} height={250} data={populationData}>
        <CartesianGrid stroke="#f5f5f5" />
        <YAxis dataKey="Population" /> {/* X-axis displays "Population" */}
        <XAxis dataKey="Year" /> {/* Y-axis displays "Year" */}
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Nation" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="Population" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="Population" stroke="#ff7300" />
        </ComposedChart>

    </ResponsiveContainer>
    // </ResponsiveContainer>
)
}



export default AreaCharts