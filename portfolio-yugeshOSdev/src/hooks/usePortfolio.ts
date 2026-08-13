import portfolioData from '../data/portfolio.json';
import type { Portfolio } from '../types/portfolio';

export function usePortfolio(): Portfolio {
  return portfolioData as Portfolio;
}
