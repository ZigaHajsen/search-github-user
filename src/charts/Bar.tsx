import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { DataSmall } from '../models/interface-models';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface BarProps {
  data: DataSmall;
}

const Bar: React.FC<BarProps> = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked',
        xAxisName: 'Repos',
        yAxisName: 'Forks',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar;
