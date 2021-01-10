import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { DataBig } from '../models/interface-models';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface PieProps {
  data: DataBig[];
}

const Pie: React.FC<PieProps> = ({ data }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        pieRadius: '45%',
        decimals: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie;
