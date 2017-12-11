export interface Flight {
  date?: any;
  id?: string;
  from: string;
  to: string;
  minCost: number;
  maxCost: number;
  luggageCost: number;
  airportToCityCost: number;
  duration: number;
  airline: string;
};
