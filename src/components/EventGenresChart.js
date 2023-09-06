import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const colors = ['#384456', '#405E73', '#8A7B74', '#D8916F', '#CF5436'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter((event) => event.summary.includes(genre));
            return { name: genre, value: filteredEvents.length }
        });
        return data;
    }



    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        outerRadius,
        percent,
        index,
    }) => {
        const radian = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * radian) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * radian) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill="#1a3847"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text >
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}>

                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={40} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenresChart;