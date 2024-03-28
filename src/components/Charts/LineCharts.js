import { PieChart, Pie, Cell, Tooltip,ResponsiveContainer } from 'recharts';

// Assuming the API response is stored in a variable named 'apiData'
const apiData = {
"time": {
  "updated": "Mar 27, 2024 11:54:10 UTC",
  "updatedISO": "2024-03-27T11:54:10+00:00",
  "updateduk": "Mar 27, 2024 at 11:54 GMT"
},
"disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
"chartName": "Bitcoin",
"bpi": {
  "USD": {
    "code": "USD",
    "symbol": "&#36;",
    "rate": "70,272.936",
    "description": "United States Dollar",
    "rate_float": 70272.9358
  },
  "GBP": {
    "code": "GBP",
    "symbol": "&pound;",
    "rate": "55,625.105",
    "description": "British Pound Sterling",
    "rate_float": 55625.1045
  },
  "EUR": {
    "code": "EUR",
    "symbol": "&euro;",
    "rate": "64,870.212",
    "description": "Euro",
    "rate_float": 64870.212
  }
}
};

// Extract data for the pie chart
const chartData = Object.entries(apiData.bpi).map(([currency, data]) => ({
name: data.description,
value: data.rate_float
}));

// Define colors for the pie chart segments
const colors = ['#8884d8', '#82ca9d', '#ffc658'];

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
if (active && payload && payload.length) {
  return (
    <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
      <p>{payload[0].payload.name}: {payload[0].value}</p>
    </div>
  );
}
return null;
};

const LineCharts = () => (
  <ResponsiveContainer width="100%" height={300} className='graph-con mb-5 p-4  rounded-3'>
<PieChart width={400} height={400}>
  <Pie
    data={chartData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="#8884d8"
    label
  >
    {
      chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
    }
  </Pie>
  <Pie
    data={chartData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="#8884d8"
    label
  >
    {
      chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
    }
  </Pie>
  <Tooltip content={<CustomTooltip />} />
</PieChart>

</ResponsiveContainer>
);

export default LineCharts;
