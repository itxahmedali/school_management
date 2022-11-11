import { LocalService } from 'src/app/shared/services/local.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as revenue from "../../../../dummyDatas/revenue";
import * as moment from "moment";
import { AuthService } from 'src/app/shared/services/firebase/auth.service';

@Component({
  selector: 'app-recievable',
  templateUrl: './recievable.component.html',
  styleUrls: ['./recievable.component.scss']
})

export class recievableComponent implements OnInit {
  @ViewChild("chart") chart;
  @ViewChild("Verticalchart") Verticalchart;
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid;
  Invoice;
  formattedData;
  MTD;
  YTD;
  quarter;
  barData;
  totalSum;
  last30DaysSum;
  last6MonthsSum;
  notDueSum;
  last30DaysNotDue;
  last6MonthsNotDue;
  overDueSum;
  dueDateHead;
  paidHead;
  dueData;
  paidData;
  last30DaysOverDue;
  last6MonthsOverDue;
  currentSum;
  currentNotDue;
  currentOverDue;
  timeSelected;
  times: any = [
    { value: "Last 12 months" },
    { value: "Last 6 months" },
    { value: "Last 30 days" },
  ];
  bar: any = {
    series: [
      {
        name: "USD",
        data: [0, 0],
      },
    ],
    colors: [this.secondary_color],
    chart: {
      type: "bar",
      height: 150,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        },
      },
      categories: ["Payments Overdue", "Payments not due yet"],
    },
  };
  verticalBar: any = {
    series: [
      {
        name: "USD",
        data: [],
      },
    ],
    colors: [this.secondary_color],
    chart: {
      type: "bar",
      height: 150,
    },
    plotOptions: {
      bar: {
        vertical: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return '$' + value
        }
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };
  constructor(
    private helperService: HelperService,
    private localService: LocalService,
    private http:AuthService
  ) {}
  ngOnInit(): void {
    this.timeSelected = this.times[0].value;
    this.companyid = this.localService.getJsonValue("company");
    // this.observe()
    if (this.companyid != null) {
      this.getpayments();
      // this.selectTime();
    } else return;
  }
  selectTime() {
    if (this.timeSelected == "Last 12 months") {
      this.currentSum = this.totalSum;
      this.currentNotDue = this.notDueSum;
      this.currentOverDue = this.overDueSum;
    } else if (this.timeSelected == "Last 30 days") {
      this.currentSum = this.last30DaysSum;
      this.currentNotDue = this.last30DaysNotDue;
      this.currentOverDue = this.last30DaysOverDue;
    } else if (this.timeSelected == "Last 6 months") {
      this.currentSum = this.last6MonthsSum;
      this.currentNotDue = this.last6MonthsNotDue;
      this.currentOverDue = this.last6MonthsOverDue;
    }
    this.bar.series[0].data[0] = this.currentOverDue;
    this.bar.series[0].data[1] = this.currentNotDue;
    this.chart?.updateSeries([
      {
        name: "USD",
        data: [this.currentOverDue, this.currentNotDue],
      },
    ]);
  }
  getpayments() {
    let mutableData = [];
    let mutableSum = 0;
    let mutable30DaysSum = 0;
    let mutable6MonthsSum = 0;
    let mutableOverDueSum = 0;
    let mutable30DaysOverDueSum = 0;
    let mutable6MonthsOverDueSum = 0;
    let mutableNotDueSum = 0;
    let mutable30DaysNotDueSum = 0;
    let mutable6MonthsNotDueSum = 0;

    const today = new Date();
    let last30Days = new Date();
    last30Days.setDate(today.getDate() - 30); // date 30 days from now
    let last6Months = new Date();
    last6Months.setMonth(today.getMonth() - 6); // data 6 months from now
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from invoice startposition 1`, true).subscribe((res: any) => {
      res.data.QueryResponse.Invoice.map(inv => {
        let txnDate = moment(inv.TxnDate).format('MM/DD/YYYY');
        // txnDate = txnDate.substring(0, txnDate.indexOf(','));
        let date = txnDate;
        if (new Date(date) >= last30Days && new Date(date) <= today) {
          mutable30DaysSum += inv.Balance;
          mutable30DaysOverDueSum +=
            new Date(inv.DueDate) < new Date() ? inv.Balance : 0;
          mutable30DaysNotDueSum +=
            new Date(inv.DueDate) > new Date() ? inv.Balance : 0;
        }
        if (new Date(date) >= last6Months && new Date(date) <= today) {
          mutable6MonthsSum += inv.Balance;
          mutable6MonthsOverDueSum +=
            new Date(inv.DueDate) < new Date() ? inv.Balance : 0;
          mutable6MonthsNotDueSum +=
            new Date(inv.DueDate) > new Date() ? inv.Balance : 0;
        }
        mutableSum += inv.Balance;
  
        mutableNotDueSum +=
          new Date(inv.DueDate) > new Date() ? inv.Balance : 0;
        mutableOverDueSum +=
          new Date(inv.DueDate) < new Date() ? inv.Balance : 0;
  
        let dueDate = this.helperService.calculateDays(inv.DueDate);
        mutableData.push({
          Date: txnDate,
          num: inv.DocNumber,
          Customer: inv.CustomerRef.name,
          Amount: inv.Balance,
          TotalAmt: inv.TotalAmt,
          Status: dueDate,
          id: inv.Id,
        });
      });
      this.dueData = mutableData.filter((item) => {
        return item.Amount != 0;
      });
      this.paidData = mutableData.filter((item) => {
        return item.Amount == 0;
      });
      this.barData = this.helperService.getMonthlyExpenses(mutableData);
      this.MTD = this.helperService.getCurrentMonthExpenses(mutableData);
      this.YTD = this.helperService.getYearlyExpenses(mutableData);
      const mutableQuarterly =
        this.helperService.getQuarterlyExpenses(mutableData);
      this.quarter = parseFloat(
        mutableQuarterly[Object.keys(mutableQuarterly).pop()]
      ).toFixed(2);
      this.totalSum = mutableSum;
      this.last30DaysSum = mutable30DaysSum;
      this.last6MonthsSum = mutable6MonthsSum;
      this.notDueSum = mutableNotDueSum;
      this.last30DaysNotDue = mutable30DaysNotDueSum;
      this.last6MonthsNotDue = mutable6MonthsNotDueSum;
      this.overDueSum = mutableOverDueSum;
      this.last30DaysOverDue = mutable30DaysOverDueSum;
      this.last6MonthsOverDue = mutable6MonthsOverDueSum;
      this.formattedData = mutableData;
      let arr = [];    
      this.barData.map((e) => {
        if (e.hasOwnProperty("label")) {
          this.verticalBar.xaxis.categories.map((i) => {
            if (e.label == i) {
              arr.push(e.value);
            }
          });
        }
      });
      arr.map((v) => {
        this.verticalBar.series[0].data.push(v);
      });
      console.log(this.dueData, this.paidData);
      this.selectTime()
    })
    
  }
}
