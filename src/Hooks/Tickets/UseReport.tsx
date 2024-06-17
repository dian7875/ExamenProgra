import { useCallback, useState } from "react";
import { DatesReport, GeneralReport, RouteReport } from "../../Services/Routes/ServiceRoutes";
import { ReportResult } from "../../Types/Rutas";
const UseReport = () => {
  const [GReportData, setGReportData] = useState<ReportResult| null>(null);
  const [RouteReportData, setRouteReportData] = useState<ReportResult | null>(null);
  const [DatesReportData, setDatesReportData] = useState<ReportResult | null>(null);
  const getReport = useCallback (async (start: string, end: string, arrival: string, departure: string) => {
    try {
      const report = await GeneralReport(start,end,arrival,departure)
      setGReportData(report)
    } catch (error) {
    }
  }, []);
  const getRouteReport = useCallback (async (arrival: string, departure: string) => {
    try {
      const report = await RouteReport(arrival,departure)
      setRouteReportData(report)
      console.table(report)
    } catch (error) {
    }
  }, []);
  const getDatesReport = useCallback (async (start: string, end: string) => {
    try {
      const report = await DatesReport(start,end)
    
      setDatesReportData(report)
    } catch (error) {
    }
  }, []);

  return {
    getReport, GReportData, RouteReportData,DatesReportData, getDatesReport, getRouteReport 
  };


}

export default UseReport
