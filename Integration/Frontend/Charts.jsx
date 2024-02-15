import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, Cell, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import '../assets/CSS/Chart.css';

const Charts = () => {
  // Bar Chart Data
  const barChartData = [
    { name: 'Category 1', value: 200 },
    { name: 'Category 2', value: 400 },
    { name: 'Category 3', value: 600 },
  ];

  // Pie Chart Data
  const pieChartData = [
    { name: 'Category A', value: 300 },
    { name: 'Category B', value: 500 },
    { name: 'Category C', value: 200 },
  ];

  // Line Chart Data
  const lineChartData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 300 },
    { name: 'Apr', value: 400 },
    { name: 'May', value: 500 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="charts-section">
      <div className="chart-flex-container">
        
        <div className="chart-container bar-chart">
          <h4>Bar Chart</h4>
          <BarChart width={500} height={200} data={barChartData}>
            <Bar dataKey="value" fill="#8884d8">
              <Tooltip formatter={(value) => `${value}`} />
            </Bar>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
          </BarChart>
        </div>

        <div className="chart-container pie-chart">
          <h4>Pie Chart</h4>
          <PieChart width={500} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        </div>

        <div className="chart-container line-chart">
          <h4>Line Chart</h4>
          <LineChart width={500} height={200} data={lineChartData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;
