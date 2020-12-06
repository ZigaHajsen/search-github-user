import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface DoughnutProps {
  data: any;
}

const Doughnut: React.FC<DoughnutProps> = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Language',
        doughnutRadius: '45%',
        decimals: 0,
        showPercentValues: 0,
        theme: 'candy',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut;
