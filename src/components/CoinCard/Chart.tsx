import { FC, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAtom } from 'jotai';

import { coinMarketChart as coinMarketChartAtom } from '@/store/jotai/atom';
import { getCoinMarketChart } from '@/services/getCoinMarketChart';

/* registerr chart js dependency */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

/* set chart animation configuration */
const totalDuration = 1000;
const delayBetweenPoints = totalDuration / 100;
const previousY = (ctx) => {
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(['y'], true).y;
};
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};

/* config chart options */
const options = {
  responsive: true,
  animation,
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },

  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      type: 'linear',

      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

type ChartProp = {
  id: string;
};

const CoinCardChart: FC<ChartProp> = ({ id }) => {
  const [coinChartData, setCoinChartData] = useAtom(coinMarketChartAtom);

  useEffect(() => {
    getCoinMarketChart({ id, vsCurrency: 'usd', days: 1 }).then((data) =>
      setCoinChartData(data)
    );
  }, []);

  const dataChart = {
    datasets: [
      {
        fill: true,
        label: id,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
        radius: 0,
        data: coinChartData?.prices,
      },
    ],
  };

  return <Line options={options} data={dataChart} />;
};

export default CoinCardChart;
