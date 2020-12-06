import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface ColumnProps {
  data: any;
}

const Column: React.FC<ColumnProps> = ({ data }) => {
  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column;
