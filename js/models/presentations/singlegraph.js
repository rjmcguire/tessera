ds.models.single_graph = function(data) {
  "use strict";

  var query_name
    , format = ',.1s'
    , transform = 'mean'
    , chart
    , base
    , item = {};

  if (data) {
    query_name = data.query_name;
    format = data.format || format;
    transform = data.transform || transform;
    chart = ds.models.chart(data);
    base = ds.models.item(data);
  } else {
    chart = ds.models.chart();
    base = ds.models.item();
  }

  base.type('singlegraph');
  item.base = base;
  item.chart = chart;

  ds.rebind(item, base, 'type', 'css_class', 'element_id', 'height', 'style');
  ds.rebind(item, chart, 'title', 'options');

  /**
   * Data accessors
   */

  item.query_name = function(_) {
    if (!arguments.length) return query_name;
    query_name = _;
    return item;
  }

  item.format = function(_) {
    if (!arguments.length) return format;
    format = _;
    return item;
  }

  item.transform = function(_) {
    if (!arguments.length) return transform;
    transform = _;
    return item;
  }

 item.toJSON = function() {
    return base.toJSON({
      options: chart.options(),
      title: chart.title(),
      query_name: query_name,
      format: format,
      transform: transform
    });
  }

  return item;
};