import React, { useRef } from "react";
import Highcharts from "highcharts/highstock";
import Boost from "highcharts/modules/boost";
import HighChartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import HighchartsXRange from "highcharts/modules/xrange";

function Base() {
  const containerRef = useRef(null);

  const handleButtonClick = () => {
    const cb = () => {
      if (typeof Highcharts === "object") {
        Boost(Highcharts);
        HighChartsMore(Highcharts);
        HighchartsSolidGauge(Highcharts);
        HighchartsXRange(Highcharts);
      }

      Highcharts.chart(containerRef.current, {
        legend: {
          enabled: false,
          itemDistance: 20,
          alignColumns: false,
          itemStyle: {
            color: "#0A0A14",
            "font-family":
              "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
            "font-size": "13px",
          },
          itemHiddenStyle: {
            color: "#A0A0A8",
          },
          itemHoverStyle: {
            color: "#0828CC",
          },
          floating: false,
          align: "left",
          verticalAlign: "top",
          x: 0,
          y: 5,
          padding: 0,
          margin: 36,
          borderWidth: 0,
          symbolHeight: 8,
          symbolWidth: 15,
          maxHeight: 64,
          symbolRadius: 0,
          symbolPadding: 8,
          itemMarginBottom: 8,
          useHTML: false,
          navigation: {
            activeColor: "#606060",
            animation: false,
            arrowSize: 12,
            inactiveColor: "#A0A0A8",
            style: {
              fontWeight: "bold",
              color: "#0A0A14",
              fontSize: "12px",
            },
          },
        },
        accessibility: {
          point: {},
        },
        chart: {
          reflow: false,
          events: {},
          spacingRight: 8,
          spacingLeft: 0,
          spacingBottom: 0,
          spacingTop: 40,
          zoomType: "none",
          backgroundColor: "#FFFFFF",
          type: "line",
        },
        plotOptions: {
          series: {
            animation: false,
            turboThreshold: 500000,
            lineWidth: 2,
            connectNulls: true,
            states: {
              hover: {
                halo: {
                  size: 16,
                },
                lineWidth: 2,
              },
            },
            events: {},
          },
          line: {
            marker: {},
            dataLabels: {
              enabled: false,
              style: {
                fontWeight: "normal",
                fontFamily:
                  "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
                textOutline: false,
              },
              inside: true,
              y: 3,
              useHTML: false,
            },
          },
        },
        tooltip: {
          useHTML: true,
          borderWidth: 2,
          shadow: true,
          style: {
            padding: 0,
          },
          backgroundColor: "#0A0A14",
          borderRadius: 10,
          padding: 0,
        },
        boost: {
          seriesThreshold: 100000,
          useGPUTranslations: true,
          usePreAllocated: true,
        },
        xAxis: {
          gridLineColor: "#F2F2F4",
          lineColor: "#D7D7DC",
          lineWidth: 1,
          tickColor: "#82828C",
          labels: {
            useHTML: false,
            style: {
              color: "#646470",
              "font-family":
                "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
              "font-size": "1.3rem",
            },
          },
          title: {
            useHTML: false,
            style: {
              color: "#0A0A14",
              "font-family":
                "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
              "font-size": "1.3rem",
              "font-weight": "500",
              "text-transform": "uppercase",
              "letter-spacing": ".2rem",
              "line-height": 1,
            },
            text: "Created Time",
            margin: 16,
            enabled: true,
          },
          type: "datetime",
          tickInterval: 604800000,
          gridLineWidth: 0,
          min: 1598207400000,
          max: 1603650600000,
          startOfWeek: 1,
          tickWidth: 0,
        },
        yAxis: {
          gridLineColor: "#F2F2F4",
          lineColor: "#D7D7DC",
          lineWidth: 0,
          tickColor: "#82828C",
          labels: {
            useHTML: false,
            style: {
              color: "#646470",
              "font-family":
                "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
              "font-size": "1.3rem",
            },
          },
          title: {
            useHTML: false,
            style: {
              color: "#0A0A14",
              "font-family":
                "'-apple-system','BlinkMacSystemFont','Roboto','Segoe UI','Noto Sans','Helvetica Neue','Helvetica','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
              "font-size": "1.3rem",
              "font-weight": "500",
              "text-transform": "uppercase",
              "letter-spacing": ".2rem",
              "line-height": 1,
            },
            text: "Positive Mentions",
            margin: 16,
            enabled: true,
          },
          gridLineWidth: 1,
          tickWidth: 0,
          min: 38,
          type: "numeric",
        },
        scrollbar: {
          enabled: false,
          barBackgroundColor: "white",
          barBorderWidth: 0,
          buttonBackgroundColor: "white",
          buttonBorderWidth: 0,
          buttonArrowColor: "white",
          buttonBorderRadius: 0,
          rifleColor: "white",
          trackBackgroundColor: "white",
          trackBorderWidth: 0,
          height: 0,
        },
        navigator: {
          enabled: false,
          height: 20,
          outlineWidth: 0,
          margin: 16,
          maskFill: "rgba(64, 163, 245, .15)",
          handles: {
            backgroundColor: "#82828c",
            borderColor: "#d2d2d9",
          },
          xAxis: {
            tickWidth: 0,
            lineWidth: 0,
            gridLineWidth: 1,
            gridLineColor: "#f5f5fa",
            tickPixelInterval: null,
            labels: {
              enabled: false,
            },
            title: {
              text: null,
            },
            tickInterval: 604800000,
          },
          yAxis: {
            tickWidth: 1,
            lineWidth: 0,
            gridLineWidth: 0,
            tickPixelInterval: null,
            labels: {
              enabled: false,
            },
          },
          series: {
            color: "#82828c",
            type: "spline",
          },
        },
        target: false,
        type: "LINE",
        id: "cp_171",
        dataConfig: [
          {
            requestKey: "5fbf67ccdc563c80a196a953",
          },
        ],
        remoteSort: false,
        position: {
          x: 0,
          y: 0,
        },
        dimension: {
          height: 434,
          width: 808,
          widthX: 100,
        },
        isDataEmpty: false,
        actionableChartParams: {},
        widgetWarnings: [],
        showSecondaryPost: false,
        requestParams: {
          "5fbf67ccdc563c80a196a953": {
            key: "5fbf67ccdc563c80a196a953",
            timeFilter: {
              sinceTime: 1598725800000,
              untilTime: 1606501799999,
            },
            previousTimeFilter: {
              sinceTime: 1590949800000,
              untilTime: 1598725799999,
            },
            reportingEngine: "LISTENING",
            query: null,
            filters: [],
            postFilters: null,
            projectionFilters: null,
            projections: null,
            report: "SPRINKSIGHTS",
            tzOffset: 0,
            timezone: "Asia/Kolkata",
            sorts: null,
            page: null,
            pageForDocuments: null,
            sortsForDocuments: null,
            additional: {
              widgetId: "5fbf67edbfd7883c16ea8560",
              dashboardId: "5f62e7a458462b5996b582fb",
              browserSessionId: "ab6e03fe-b6af-4d15-bd76-9ae53cc3df5e",
              engine: "LISTENING",
              exportInfo: false,
              option: "LAST_90_DAYS",
            },
            cacheDisabled: false,
            projectionDecorations: [],
            includeFields: null,
            excludeFields: null,
            reportDateField: null,
            groupBys: [
              {
                key: "SN_CREATED_TIME_0",
                field: "SN_CREATED_TIME",
                groupType: "DATE_HISTOGRAM",
                details: {
                  isDateTypeDimension: true,
                  interval: "1w",
                },
                sort: null,
                page: null,
                projections: [
                  {
                    measurement: "POS_SEN",
                    missing: null,
                    aggregateFunction: "SUM",
                    details: null,
                    filters: null,
                    key: "M_SPRINKSIGHTS_POS_SEN_0",
                  },
                ],
                filters: null,
                namedFilters: null,
                childrenGroupBys: null,
              },
            ],
          },
        },
        currency: null,
        timezone: "Asia/Kolkata",
        totalCount: 0,
        groups: ["SN_CREATED_TIME"],
        showTotal: false,
        total: {},
        exportMode: false,
        sort: null,
        timezoneOffset: -19800000,
        module: "LISTENING",
        startOfWeek: 1,
        series: [
          {
            color: "#40A3F5",
            data: [
              {
                id: "1598207400000",
                groupField: "SN_CREATED_TIME",
                x: 1598207400000,
                key: 1598207400000,
                y: 38,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 38,
              },
              {
                id: "1598812200000",
                groupField: "SN_CREATED_TIME",
                x: 1598812200000,
                key: 1598812200000,
                y: 6694,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 6694,
              },
              {
                id: "1599417000000",
                groupField: "SN_CREATED_TIME",
                x: 1599417000000,
                key: 1599417000000,
                y: 4592,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 4592,
              },
              {
                id: "1600021800000",
                groupField: "SN_CREATED_TIME",
                x: 1600021800000,
                key: 1600021800000,
                y: 1416,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 1416,
              },
              {
                id: "1600626600000",
                groupField: "SN_CREATED_TIME",
                x: 1600626600000,
                key: 1600626600000,
                y: 813,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 813,
              },
              {
                id: "1601231400000",
                groupField: "SN_CREATED_TIME",
                x: 1601231400000,
                key: 1601231400000,
                y: 5160,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 5160,
              },
              {
                id: "1601836200000",
                groupField: "SN_CREATED_TIME",
                x: 1601836200000,
                key: 1601836200000,
                y: 15240,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 15240,
              },
              {
                id: "1602441000000",
                groupField: "SN_CREATED_TIME",
                x: 1602441000000,
                key: 1602441000000,
                y: 78861,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 78861,
              },
              {
                id: "1603045800000",
                groupField: "SN_CREATED_TIME",
                x: 1603045800000,
                key: 1603045800000,
                y: 89326,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 89326,
              },
              {
                id: "1603650600000",
                groupField: "SN_CREATED_TIME",
                x: 1603650600000,
                key: 1603650600000,
                y: 59850,
                requestKey: "5fbf67ccdc563c80a196a953",
                projectionKey: "M_SPRINKSIGHTS_POS_SEN_0",
                formattedProjectionValue: 59850,
              },
            ],
            yAxis: 0,
            id: "M_SPRINKSIGHTS_POS_SEN",
            key: "POS_SEN_SUM",
            name: "Positive Mentions",
            colorKey: "SN_CREATED_TIME_1598207400000",
            projDataType: "NUMERIC",
            requestKey: "5fbf67ccdc563c80a196a953",
            isColorPickerDisabled: false,
            cumulativeKeyValues: [
              "1598207400000",
              "1598812200000",
              "1599417000000",
              "1600021800000",
              "1600626600000",
              "1601231400000",
              "1601836200000",
              "1602441000000",
              "1603045800000",
              "1603650600000",
            ],
            totalDataCount: 261990,
            categories: [
              "1598207400000",
              "1598812200000",
              "1599417000000",
              "1600021800000",
              "1600626600000",
              "1601231400000",
              "1601836200000",
              "1602441000000",
              "1603045800000",
              "1603650600000",
            ],
            colors: ["#40A3F5"],
          },
        ],
      });
    };

    requestAnimationFrame(cb);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          width: "100px",
          height: "50px",
          display: "inline-block",
          margin: 40,
        }}
      >
        show chart
      </button>
      <div
        ref={containerRef}
        style={{
          width: "1000px",
          height: "1000px",
          background: "gray",
          display: "inline-block",
        }}
      >
        Chart container press button chart will appear here
      </div>
    </div>
  );
}

export default Base;
